import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import SelectSkills from './SelectSkills';
import Jobs from './Jobs';
import { Helmet } from 'react-helmet';
import PrimarySearchAppBar from './AppBar';
import axios from 'axios';
import qs from 'qs';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

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
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('');
      setData(result.data);
    };

    fetchData().then((r) => console.log('Data Fetched'));
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet='UTF-8' />
        <title>Applicant Profile</title>
        <meta name='description' content='Applicant Profile Page' />
      </Helmet>
      <PrimarySearchAppBar />
      <Grid
        container
        direction={'column'}
        className={classes.root}
        style={{ padding: '50px' }}
      >
        <Grid container>
          <Grid container item xs={2}>
            <AccountCircleRoundedIcon
              className={classes.large}
              color={'disabled'}
            />
          </Grid>
          <Grid container item xs={10} direction={'column'}>
            <Typography
              variant={'h3'}
              style={{ justifyContent: 'start', display: 'flex' }}
            >
              Aditya Agrawal
            </Typography>
            <br />
            <br />
            <SelectSkills variant={'profile'} />
          </Grid>
        </Grid>
        <Grid container style={{ paddingTop: '40px' }} direction={'column'}>
          <Typography
            variant={'h4'}
            style={{ justifyContent: 'start', display: 'flex' }}
          >
            Applications
          </Typography>
          <br />
          <br />
          <Jobs variant={'applications'} />
        </Grid>
      </Grid>
    </div>
  );
}
