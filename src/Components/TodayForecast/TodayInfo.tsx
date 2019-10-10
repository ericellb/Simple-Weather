import React from 'react';
import { Cloud, InputOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  todayDate: {
    padding: '1em',
    paddingBottom: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left'
  },
  todayDateInfo: {
    padding: '0.5em',
    fontSize: '32px',
    color: 'white'
  },
  todayDateToday: {
    padding: '8px',
    paddingLeft: '0',
    fontSize: '28px',
    color: 'white'
  },
  todayDateDate: {
    fontSize: '16px',
    color: '#9999ac'
  },
  todayTemp: {
    fontSize: '96px',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 200,
    color: 'white'
  },
  todayTempDeg: {
    height: 'calc(100% - 16px)',
    fontSize: '32px',
    position: 'relative',
    top: '16px'
  },
  todayCity: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5em'
  },
  todayCityIcon: {
    paddingLeft: '8px',
    color: '#9999ac',
    cursor: 'pointer',
    fontSize: '18px'
  },
  todayExtra: {
    padding: '1em',
    display: 'flex',
    justifyContent: 'center'
  },
  extraFeels: {
    paddingRight: '0.8em'
  },
  extraSunset: {
    paddingLeft: '0.8em'
  }
}));

export interface TodayInfoProps {
  data: {
    temp: number;
    city: string;
    feelsLike: number;
    sunTime: string;
  };
}

export default function TodayInfo(props: TodayInfoProps) {
  const classes = useStyles({});
  let todayDate = moment(new Date()).format('ddd, MMM do');

  return (
    <React.Fragment>
      <div className={classes.todayDate}>
        <Cloud />
        <div className={classes.todayDateInfo}>
          <div className={classes.todayDateToday}>Today</div>
          <div className={classes.todayDateDate}>{todayDate}</div>
        </div>
      </div>
      <div className={classes.todayTemp}>
        {props.data.temp}
        <div className={classes.todayTempDeg}>°C</div>
      </div>
      <div className={classes.todayCity}>
        {props.data.city} <InputOutlined className={classes.todayCityIcon} />
      </div>
      <div className={classes.todayExtra}>
        <div className={classes.extraFeels}>Feels Like {props.data.feelsLike}</div> •{' '}
        <div className={classes.extraSunset}>{props.data.sunTime}</div>
      </div>
    </React.Fragment>
  );
}
