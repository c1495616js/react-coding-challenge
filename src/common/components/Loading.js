import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useIsFetching } from 'react-query';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
  })
);

export default function Loading() {
  const classes = useStyles();
  const isFetching = useIsFetching();
  return isFetching ? (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  ) : null;
}
