import React from 'react';
import { Cloud, InputOutlined } from '@material-ui/icons';
import { makeStyles, Icon } from '@material-ui/core';
import moment from 'moment';
import { useSelector, ReactReduxContext } from 'react-redux';
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
  todayDateIcon: {
    width: '40px'
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
  },
  backgroundIcons: {
    position: 'absolute',
    width: 'calc(100% + 64px)',
    height: '100%',
    overflow: 'hidden',
    opacity: '0.6',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% + 32px)'
    }
  },
  leftIcon: {
    color: '#1e1d46 !important',
    fontSize: '168px',
    position: 'absolute',
    left: '-81px',
    top: '30%',
    width: '300px'
  },
  topRightIcon: {
    color: '#1e1d46 !important',
    fontSize: '200px',
    position: 'absolute',
    right: '-41px',
    top: '10%',
    width: '200px'
  },
  rightIcon: {
    color: '#1e1d46 !important',
    fontSize: '96px',
    position: 'absolute',
    right: '-61px',
    top: '60%',
    width: '200px'
  },
  zindex: {
    zIndex: 100
  }
}));

export interface TodayInfoProps {
  data: {
    temp: number;
    city: string;
    humidity: number;
    sunTime: string;
    weatherId: string;
  };
}

export default function TodayInfo(props: TodayInfoProps) {
  const classes = useStyles({});
  const tempScale = useSelector((state: StoreState) => state.weather.tempScale);
  let todayDate = moment(new Date()).format('ddd, MMM Do');

  // Converts from Kelvin to Celcius / Farenheit depending on current tempScale
  const convertTempScale = (temp: number) => {
    // Kelvin to Celcius
    temp = temp - 273.15;
    if (tempScale === 'farenheit') {
      temp = temp * (9 / 5) + 32;
    }
    return Math.round(temp);
  };

  // Gets the appropriate FA Icon depending on weather ID
  const weatherIdToFAIcon = (weatherId: string) => {
    let faClass = 'fa ';
    let tempWeatherId = weatherId.substring(0, weatherId.length - 1);
    switch (tempWeatherId) {
      case '01':
        faClass += 'fa-sun';
        break;
      case '02':
        faClass += 'fa-cloud-sun';
        break;
      case '03':
        faClass += 'fa-cloud';
        break;
      case '04':
        faClass += 'fa-cloud';
        break;
      case '09':
        faClass += 'fa-cloud-rain';
        break;
      case '10':
        faClass += 'fa-cloud-sun-rain';
        break;
      case '11':
        faClass += 'fa-bolt';
        break;
      case '13':
        faClass += 'fa-snowflake';
        break;
      case '50':
        faClass += 'fa-smog';
        break;
    }
    return faClass;
  };

  return (
    <React.Fragment>
      <div className={classes.zindex}>
        <div className={classes.todayDate}>
          <Icon className={`${classes.todayDateIcon} ${weatherIdToFAIcon(props.data.weatherId)}`} />
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
      </div>
      <div className={classes.backgroundIcons}>
        <Icon className={`${classes.leftIcon} ${weatherIdToFAIcon(props.data.weatherId)}`} />
        <Icon className={`${classes.topRightIcon} ${weatherIdToFAIcon(props.data.weatherId)}`} />
        <Icon className={`${classes.rightIcon} ${weatherIdToFAIcon(props.data.weatherId)}`} />
      </div>
    </React.Fragment>
  );
}
