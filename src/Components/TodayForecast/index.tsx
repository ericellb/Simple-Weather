import React from 'react';
import { makeStyles } from '@material-ui/core';
import TodayInfo from './TodayInfo';

const useStyles = makeStyles(theme => ({
  todayContainer: {
    display: 'flex',
    height: '100%',
    color: 'white',
    flexWrap: 'wrap'
  },
  chanceRain: {
    width: '100%'
  }
}));

export default function TodayForecast() {
  const classes = useStyles({});

  return (
    <div className={classes.todayContainer}>
      <TodayInfo />
      <div className={classes.chanceRain}>Chance of rain</div>
    </div>
  );
}
