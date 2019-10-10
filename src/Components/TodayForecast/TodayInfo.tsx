import React from 'react';
import { Cloud, InputOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

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

export default function TodayInfo() {
  const classes = useStyles({});
  return (
    <React.Fragment>
      <div className={classes.todayDate}>
        <Cloud />
        <div className={classes.todayDateInfo}>
          <div className={classes.todayDateToday}>Today</div>
          <div className={classes.todayDateDate}> Fri, Oct 3rd</div>
        </div>
      </div>
      <div className={classes.todayTemp}>
        28
        <div className={classes.todayTempDeg}>°C</div>
      </div>
      <div className={classes.todayCity}>
        Montreal, Canada <InputOutlined className={classes.todayCityIcon} />
      </div>
      <div className={classes.todayExtra}>
        <div className={classes.extraFeels}>Feels Like 32</div> •{' '}
        <div className={classes.extraSunset}>Sunset 20:15</div>
      </div>
    </React.Fragment>
  );
}
