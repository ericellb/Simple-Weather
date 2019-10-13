import React from 'react';
import { Cloud, InputOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { StoreState } from '../../Reducers';

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
    humidity: number;
    sunTime: string;
  };
}

export default function TodayInfo(props: TodayInfoProps) {
  const classes = useStyles({});
  const tempScale = useSelector((state: StoreState) => state.weather.tempScale);
  let todayDate = moment(new Date()).format('ddd, MMM do');

  // Converts from Kelvin to Celcius / Farenheit depending on current tempScale
  const convertTempScale = (temp: number) => {
    // Kelvin to Celcius
    temp = temp - 273.15;
    if (tempScale === 'farenheit') {
      temp = temp * (9 / 5) + 32;
    }
    return Math.floor(temp * 10) / 10;
  };

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
        {convertTempScale(props.data.temp)}
        <div className={classes.todayTempDeg}>{tempScale === 'celsius' ? '°C' : '°F'}</div>
      </div>
      <div className={classes.todayCity}>
        {props.data.city} <InputOutlined className={classes.todayCityIcon} />
      </div>
      <div className={classes.todayExtra}>
        <div className={classes.extraFeels}>Humidity {props.data.humidity} %</div> •{' '}
        <div className={classes.extraSunset}>{props.data.sunTime} Sunset</div>
      </div>
    </React.Fragment>
  );
}
