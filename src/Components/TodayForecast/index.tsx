import React from 'react';
import { makeStyles } from '@material-ui/core';
import TodayInfo, { TodayInfoProps } from './TodayInfo';
import DataGraph, { GraphProps } from './DataGraph';
import TodayNav from './TodayNav';

const useStyles = makeStyles(theme => ({
  todayContainer: {
    display: 'flex',
    height: '100%',
    color: 'white',
    flexWrap: 'wrap'
  },
  todayNav: {
    height: '5%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todayInfo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#9999ac',
    alignSelf: 'flex-end',
    position: 'relative',
    height: '60%',
    display: 'flex'
  },
  graph: {
    width: '100%',
    height: '35%',
    alignSelf: 'flex-end'
  }
}));

export interface TodayForecastProps {
  todayData: TodayInfoProps;
  graphData: GraphProps;
}

export default function TodayForecast(props: TodayForecastProps) {
  const classes = useStyles({});

  return (
    <div className={classes.todayContainer}>
      <div className={classes.todayNav}>
        <TodayNav />
      </div>
      <div className={classes.todayInfo}>
        <TodayInfo data={props.todayData.data} />
      </div>
      <div className={classes.graph}>
        <DataGraph type={props.graphData.type} data={props.graphData.data} />
      </div>
    </div>
  );
}
