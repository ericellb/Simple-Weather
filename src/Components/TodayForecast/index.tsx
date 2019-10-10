import React from 'react';
import { makeStyles } from '@material-ui/core';
import TodayInfo, { TodayInfoProps } from './TodayInfo';
import DataGraph, { GraphProps } from './DataGraph';

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
  graph: {
    width: '100%',
    height: '30%',
    alignSelf: 'flex-end'
  }
}));

export default function TodayForecast() {
  const classes = useStyles({});
  const today = new Date();
  const tempTodayInfoProps: TodayInfoProps = {
    data: {
      temp: 26,
      city: 'Montreal, Quebec',
      feelsLike: 28,
      sunTime: 'Sunset : 20:18'
    }
  };

  const tempGraphProps: GraphProps = {
    type: 'rain',
    data: [
      { title: '12PM', value: 50 },
      { title: '2PM', value: 60 },
      { title: '4PM', value: 70 },
      { title: '6PM', value: 80 },
      { title: '8PM', value: 90 },
      { title: '10PM', value: 100 }
    ]
  };

  return (
    <div className={classes.todayContainer}>
      <div className={classes.todayInfo}>
        <TodayInfo data={tempTodayInfoProps.data} />
      </div>
      <div className={classes.graph}>
        <DataGraph type={tempGraphProps.type} data={tempGraphProps.data} />
      </div>
    </div>
  );
}
