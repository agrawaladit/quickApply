import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import PrimarySearchAppBar from './AppBar';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const _ = require('lodash');

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const Jobs = (props) => {
  const classes = useStyles();
  const [page, changePage] = useState(1);
  const [rows, setRows] = useState(20);
  const [sortOrder, changeOrder] = useState('desc');
  const [sortProperty, changeProperty] = useState('match');
  const finalData = [
    {
      objectID: 1,
      match: 20,
      company: 'Google',
      title: 'Software Engineer',
      location: 'San Jose',
      link: 'hit.about.url',
      description: 'JD',
      skills: ['A', 'B'],
    },
    {
      objectID: 2,
      match: 20,
      company: 'Apple',
      title: 'Software Engineer',
      location: 'San Jose',
      link: 'hit.about.url',
      description: 'JD',
      skills: ['A', 'B'],
    },
    {
      objectID: 3,
      match: 20,
      company: 'Microsoft',
      title: 'Software Engineer',
      location: 'San Jose',
      link: 'hit.about.url',
      description: 'JD',
      skills: ['A', 'B'],
    },
  ];
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('');
      setData(result.data);
    };

    fetchData().then((r) => console.log('Data Fetched'));
  }, []);

  const customSort = (order, property) => {
    changeOrder(order === 1 ? 'asc' : 'desc');
    changeProperty(property);
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='UTF-8' />
        <title>Jobs</title>
        <meta name='description' content='Job Application Page' />
      </Helmet>
      {props.variant === 'applications' ? null : <PrimarySearchAppBar />}
      <Grid
        container
        direction='column'
        style={props.variant === 'applications' ? {} : { padding: '50px' }}
      >
        <TableHeader changeSort={customSort} variant={props.variant} />
        {_.orderBy(finalData, [sortProperty], [sortOrder])
          .slice(page * rows - rows, page * rows)
          .map((hit, index) => (
            <TableRow
              key={hit.objectID}
              data={{
                rank: (page - 1) * rows + index + 1,
                ...hit,
              }}
              variant={props.variant}
            />
          ))}
      </Grid>
    </div>
  );
};

export default Jobs;
