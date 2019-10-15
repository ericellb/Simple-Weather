import React, { useEffect, useState } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import TodayForecast from '../TodayForecast';
import CitySelect from '../CitySelect';
import WeeklyForecast, { ForecastProps } from '../WeeklyForecast';
import './style.css';
import { GraphProps } from '../TodayForecast/DataGraph';
import { TodayInfoProps } from '../TodayForecast/TodayInfo';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../Reducers';
import { fetchWeatherData } from '../../Actions';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    padding: '1em',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  leftContainer: {
    order: 1,
    flexBasis: '70%',
    height: '100%',
    padding: '32px',
    boxSizing: 'border-box',
    backgroundColor: '#f2fbff',
    borderRadius: '20px 0px 0px 20px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      order: 2,
      flexBasis: '100%',
      borderRadius: '0px 0px 20px 20px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '16px'
    }
  },
  citySelectContainer: {
    height: '50%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  forecastContainer: {
    height: '50%'
  },
  rightContainer: {
    order: 2,
    flexBasis: '30%',
    height: '100%',
    padding: '32px',
    boxSizing: 'border-box',
    backgroundColor: '#100e3b',
    borderRadius: '0px 20px 20px 0px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      order: 1,
      flexBasis: '100%',
      borderRadius: '20px 20px 0px 0px'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '16px'
    }
  }
}));

export default function Dashboard() {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const forecastInfo = useSelector((state: StoreState) => state.weather.forecastData);
  const todayInfo = useSelector((state: StoreState) => state.weather.todayData);
  const selectedCity = useSelector((state: StoreState) => state.weather.selectedCity);
  const smQuery = useMediaQuery('(max-width:960px)');

  // When city is selected fetch weather data for selected city
  useEffect(() => {
    dispatch(fetchWeatherData(selectedCity));
  }, [selectedCity]);

  // Props for Weekly Forecast
  const [forecastProps, setForecastProps] = useState<ForecastProps>({
    weeklyAvg: 0,
    type: 'forecast',
    data: []
  });

  // Props for Today Info Data
  const [todayData, setTodayData] = useState<TodayInfoProps>({
    data: {
      temp: 26,
      city: 'New York, New York',
      humidity: 28,
      sunTime: 'Sunset : 20:18',
      weatherId: '01n'
    }
  });

  // Props for Today Info Graph
  const [graphProps, setGraphProps] = useState<GraphProps>({
    type: 'rain',
    data: []
  });

  // Formats our forecastInfo for the Weekly 5 day chart
  useEffect(() => {
    if (forecastInfo.length > 0) {
      let tempForecastArr: { type: 'forecast'; data: any[]; weeklyAvg: 0 } = {
        weeklyAvg: 0,
        type: 'forecast',
        data: []
      };
      let tempGraphArr: { type: 'rain'; data: any[] } = {
        type: 'rain',
        data: []
      };

      // Format data for Weekly Forecast
      for (let i = 0; i < 5; i++) {
        let tempObj: any = {};
        let index = i * 8;

        let highTemp = 0;
        let lowTemp = 1000;
        // Calc high + low for this day given the 3 hr windows
        for (let j = 0; j < 8; j++) {
          if (highTemp < forecastInfo[index + j].main.temp_max) {
            highTemp = forecastInfo[index + j].main.temp_max;
          }
          if (lowTemp > forecastInfo[index + j].main.temp_min) {
            lowTemp = forecastInfo[index + j].main.temp_min;
          }
        }

        tempObj.lowTemp = lowTemp;
        tempObj.highTemp = highTemp;
        tempObj.dayTemp = forecastInfo[index].main.temp;
        tempObj.weatherId = forecastInfo[index].weather[0].icon;
        tempObj.day = moment.unix(forecastInfo[index].dt).format('dddd');

        // Depending if we got rain or snow... Kinda shit but we gotta do it...
        if (forecastInfo[index].rain) {
          tempObj.precip = forecastInfo[index].rain;
        } else if (forecastInfo[index].snow) {
          tempObj.precip = forecastInfo[index].snow;
        }

        if (tempObj.precip) {
          if (tempObj.precip['3h']) {
            tempObj.precip = Math.round(tempObj.precip['3h'] * 10) / 10;
          }
        }

        if (isNaN(tempObj.precip)) {
          tempObj.precip = 0;
        }

        tempForecastArr.data.push(tempObj);
        tempForecastArr.weeklyAvg += (tempObj.highTemp + tempObj.lowTemp) / 2;
      }

      // Format Data for TodayInfo Precipitation Graph
      for (let i = 0; i < 6; i++) {
        let tempObj: any = {};
        tempObj.title = moment.unix(forecastInfo[i].dt).format('h A');
        // Depending if we got rain or snow... Kinda shit but we gotta do it...
        if (forecastInfo[i].rain) {
          tempObj.value = forecastInfo[i].rain;
        } else if (forecastInfo[i].snow) {
          tempObj.value = forecastInfo[i].snow;
        }
        if (tempObj.value) {
          if (tempObj.value['3h']) {
            tempObj.value = Math.round(tempObj.value['3h'] * 100) / 100;
          }
        }
        if (isNaN(tempObj.value)) {
          tempObj.value = 0;
        }
        tempGraphArr.data.push(tempObj);
      }

      tempForecastArr.weeklyAvg /= 5;

      // Sets forecast and graph data objects
      setForecastProps(tempForecastArr);
      setGraphProps(tempGraphArr);
    }
  }, [forecastInfo]);

  useEffect(() => {
    if (todayInfo !== undefined) {
      let tempObj: any = { data: {} };
      tempObj.data.city = selectedCity;
      tempObj.data.temp = todayInfo.main.temp;
      tempObj.data.sunTime = moment.unix(todayInfo.sys.sunset).format('h:mm A');
      tempObj.data.humidity = todayInfo.main.humidity;
      tempObj.data.weatherId = todayInfo.weather[0].icon;
      setTodayData(tempObj);
    }
  }, [todayInfo]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        {!smQuery && (
          <div className={classes.citySelectContainer}>
            <CitySelect />
          </div>
        )}
        <div className={classes.forecastContainer}>
          <WeeklyForecast type={forecastProps.type} data={forecastProps.data} weeklyAvg={forecastProps.weeklyAvg} />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <TodayForecast todayData={todayData} graphData={graphProps} />
      </div>
    </div>
  );
}
