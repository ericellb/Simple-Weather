import React from 'react';
import { makeStyles } from '@material-ui/core';
import TodayForecast from '../TodayForecast';
import CitySelect from '../CitySelect';
import WeeklyForecast, { ForecastProps } from '../WeeklyForecast';
import SearchCity from '../SearchCity';
import './style.css';
import DataGraph from '../TodayForecast/DataGraph';

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
    padding: '24px',
    boxSizing: 'border-box',
    backgroundColor: '#f2fbff',
    borderRadius: '20px 0px 0px 20px'
  },
  forecastContainer: {
    height: '40%'
  },
  rightContainer: {
    order: 2,
    flexBasis: '40%',
    height: '100%',
    padding: '24px',
    boxSizing: 'border-box',
    backgroundColor: '#100e3b',
    borderRadius: '0px 20px 20px 0px'
  }
}));

export default function Dashboard() {
  const classes = useStyles({});
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

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <SearchCity />
        <CitySelect />
        <div className={classes.forecastContainer}>
          <WeeklyForecast type={forecastProps.type} data={forecastProps.data} />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <TodayForecast />
      </div>
    </div>
  );
}
