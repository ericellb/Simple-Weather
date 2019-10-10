import React from 'react';
import { makeStyles } from '@material-ui/core';
import TodayInfo from './TodayInfo';
import RainGraph from './RainGraph';

const useStyles = makeStyles(theme => ({
  todayContainer: {
    display: 'flex',
    height: '100%',
    color: 'white',
    flexWrap: 'wrap'
  },
  todayInfo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#9999ac',
    alignSelf: 'flex-end'
  },
  chanceRain: {
    width: '100%',
    height: '30%',
    alignSelf: 'flex-end'
  }
}));

export default function TodayForecast() {
  const classes = useStyles({});

  return (
    <div className={classes.todayContainer}>
      <div className={classes.todayInfo}>
        <TodayInfo />
      </div>
      <div className={classes.chanceRain}>
        <RainGraph />
      </div>
    </div>
  );
}
