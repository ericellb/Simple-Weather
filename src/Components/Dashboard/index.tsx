import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TodayForecast from '../TodayForecast';
import CitySelect from '../CitySelect';
import WeeklyForecast, { ForecastProps } from '../WeeklyForecast';
import './style.css';
import { GraphProps } from '../TodayForecast/DataGraph';
import { TodayInfoProps } from '../TodayForecast/TodayInfo';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { StoreState } from '../../Reducers';

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
  const forecastInfo = useSelector((state: StoreState) => state.weather.forecastData);
  const todayInfo = useSelector((state: StoreState) => state.weather.todayData);

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
      sunTime: 'Sunset : 20:18'
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
        tempObj.lowTemp = forecastInfo[index].main.temp_min;
        tempObj.highTemp = forecastInfo[index].main.temp_max;
        tempObj.dayTemp = forecastInfo[index].main.temp;
        tempObj.weatherId = forecastInfo[index].weather[0].icon;
        tempObj.day = moment.unix(forecastInfo[index].dt).format('ddd, MMM Do');

        // Depending if we got rain or snow... Kinda shit but we gotta do it...
        if (forecastInfo[index].rain) {
          tempObj.precip = forecastInfo[index].rain;
        } else if (forecastInfo[index].snow) {
          tempObj.precip = forecastInfo[index].snow;
        }

        if (tempObj.precip) {
          if (tempObj.precip['3h']) {
            tempObj.precip = Math.round(tempObj.precip['3h'] * 100) / 100;
          }
        }

        if (isNaN(tempObj.precip)) {
          tempObj.precip = 0;
        }

        tempForecastArr.data.push(tempObj);
        tempForecastArr.weeklyAvg += tempObj.dayTemp;
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

      console.log(tempGraphArr);
      tempForecastArr.weeklyAvg /= 5;

      // Sets forecast and graph data objects
      setForecastProps(tempForecastArr);
      setGraphProps(tempGraphArr);
    }
  }, [forecastInfo]);

  useEffect(() => {
    if (todayInfo !== undefined) {
      let tempObj: any = { data: {} };
      tempObj.data.city = todayInfo.name;
      tempObj.data.temp = todayInfo.main.temp;
      tempObj.data.sunTime = moment.unix(todayInfo.sys.sunset).format('h:mm A');
      tempObj.data.humidity = todayInfo.main.humidity;
      setTodayData(tempObj);
    }
  }, [todayInfo]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.citySelectContainer}>
          <CitySelect />
        </div>
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
