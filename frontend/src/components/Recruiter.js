import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Box from '@material-ui/core/Box';
import NewJob from './NewJob';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: '200px',
    height: '200px',
  },
}));

export default function Profile() {
  const classes = useStyles();

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 200, headerAlign: 'center' },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 500,
      headerAlign: 'center',
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 500,
      headerAlign: 'center',
    },
    { field: 'age', headerName: 'Age', width: 200, headerAlign: 'center' },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet='UTF-8' />
        <title>Recruiter Page</title>
        <meta name='description' content='Recruiter job posting page' />
      </Helmet>
      <Grid container direction={'column'} className={classes.root}>
        <Grid container direction={'column'}>
          <Typography
            variant={'h3'}
            style={{ justifyContent: 'start', display: 'flex' }}
          >
            Google
          </Typography>
        </Grid>
        <Grid container style={{ paddingTop: '40px' }} direction={'column'}>
          <Box display='flex' p={1} bgcolor='background.paper'>
            <Box p={1} flexGrow={1}>
              <Typography
                variant={'h4'}
                style={{ justifyContent: 'start', display: 'flex' }}
              >
                Applicants
              </Typography>
            </Box>
            <Box p={1}>
              <NewJob />
            </Box>
          </Box>
          <br />
          <br />
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection={false}
              style={{ justifyContent: 'start', display: 'flex' }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
