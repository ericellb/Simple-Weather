import React from 'react';
import { makeStyles } from '@material-ui/core';
import TodayForecast from '../TodayForecast';
import CitySelect from '../CitySelect';
import WeeklyForecast, { ForecastProps } from '../WeeklyForecast';
import './style.css';
import { GraphProps } from '../TodayForecast/DataGraph';
import { TodayInfoProps } from '../TodayForecast/TodayInfo';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    padding: '1em',
    boxSizing: 'border-box'
  },
  leftContainer: {
    order: 1,
    flexBasis: '60%',
    height: '100%',
    padding: '32px',
    boxSizing: 'border-box',
    backgroundColor: '#f2fbff',
    borderRadius: '20px 0px 0px 20px'
  },
  citySelectContainer: {
    height: '50%'
  },
  forecastContainer: {
    height: '50%'
  },
  rightContainer: {
    order: 2,
    flexBasis: '40%',
    height: '100%',
    padding: '32px',
    boxSizing: 'border-box',
    backgroundColor: '#100e3b',
    borderRadius: '0px 20px 20px 0px'
  }
}));

export default function Dashboard() {
  const classes = useStyles({});

  // Data for Weekly Forecast
  const forecastProps: ForecastProps = {
    type: 'forecast',
    data: [
      { day: 'Monday', weatherId: '01d', precip: '50', highTemp: 27, lowTemp: 19, dayTemp: 25 },
      { day: 'Tuesday', weatherId: '02d', precip: '50', highTemp: 28, lowTemp: 14, dayTemp: 16 },
      { day: 'Wednesday', weatherId: '04d', precip: '50', highTemp: 31, lowTemp: 14, dayTemp: 16 },
      { day: 'Thursday', weatherId: '03d', precip: '50', highTemp: 14, lowTemp: 14, dayTemp: 16 },
      { day: 'Friday', weatherId: '02d', precip: '50', highTemp: 18, lowTemp: 14, dayTemp: 16 },
      { day: 'Saturday', weatherId: '01d', precip: '50', highTemp: 24, lowTemp: 14, dayTemp: 16 },
      { day: 'Sunday', weatherId: '04d', precip: '50', highTemp: 24, lowTemp: 14, dayTemp: 16 }
    ]
  };

  // Data for Today Info
  const todayData: TodayInfoProps = {
    data: {
      temp: 26,
      city: 'Montreal, Quebec',
      feelsLike: 28,
      sunTime: 'Sunset : 20:18'
    }
  };

  // Data for Graph on Today Info
  const graphData: GraphProps = {
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
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.citySelectContainer}>
          <CitySelect />
        </div>
        <div className={classes.forecastContainer}>
          <WeeklyForecast type={forecastProps.type} data={forecastProps.data} />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <TodayForecast todayData={todayData} graphData={graphData} />
      </div>
    </div>
  );
}
