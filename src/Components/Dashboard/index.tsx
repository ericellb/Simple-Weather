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
      { day: 'Monday', high: 17, low: 14 },
      { day: 'Tuesday', high: 28, low: 14 },
      { day: 'Wednesday', high: 31, low: 14 },
      { day: 'Thursday', high: 14, low: 14 },
      { day: 'Friday', high: 18, low: 14 },
      { day: 'Saturday', high: 24, low: 14 },
      { day: 'Sunday', high: 24, low: 14 }
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
