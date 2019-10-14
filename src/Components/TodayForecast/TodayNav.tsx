import React from 'react';
import { Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  personIcon: {
    fontSize: '42px'
  },
  item: {
    paddingRight: '2em'
  }
}));

export default function TodayNav() {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <div>
        <span className={classes.item}>Notifcations </span>
        <span>Places</span>
      </div>
      <div>
        <Person className={classes.personIcon} />
      </div>
    </React.Fragment>
  );
}
