import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TodayForecast from '../TodayForecast';
import CitySelect from '../CitySelect';
import WeeklyForecast, { ForecastProps } from '../WeeklyForecast';
import './style.css';
import DataGraph, { GraphProps } from '../TodayForecast/DataGraph';
import { TodayInfoProps } from '../TodayForecast/TodayInfo';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { WeatherStore } from '../../Reducers/weatherReducer';
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
  const [forecastProps, setForecastProps] = useState<ForecastProps>({
    weeklyAvg: 0,
    type: 'forecast',
    data: []
  });

  // Formats our forecastInfo for the Weekly 5 day chart
  useEffect(() => {
    if (forecastInfo !== undefined) {
      let tempArr: { type: 'forecast'; data: any[]; weeklyAvg: 0 } = {
        weeklyAvg: 0,
        type: 'forecast',
        data: []
      };
      for (let i = 0; i < 5; i++) {
        let tempObj: any = {};
        let index = i * 8;
        tempObj.lowTemp = forecastInfo[index].main.temp_min;
        tempObj.highTemp = forecastInfo[index].main.temp_max;
        tempObj.dayTemp = forecastInfo[index].main.temp;
        tempObj.weatherId = forecastInfo[index].weather[0].icon;
        tempObj.day = moment(forecastInfo[index].dt).format('ddd, MMM do');

        // Depending if we got rain or snow... Kinda shit but we gotta do it...
        if (forecastInfo[index].rain) {
          tempObj.precip = forecastInfo[index].rain;
        } else if (forecastInfo[index].snow) {
          tempObj.precip = forecastInfo[index].snow;
        }
        tempObj.precip = Math.round(tempObj.precip['3h'] * 100) / 100;
        if (isNaN(tempObj.precip)) {
          tempObj.precip = 0;
        }

        tempArr.data.push(tempObj);
        tempArr.weeklyAvg += tempObj.dayTemp;
      }
      tempArr.weeklyAvg /= 5;
      setForecastProps(tempArr);
    }
  }, [forecastInfo]);

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
          <WeeklyForecast type={forecastProps.type} data={forecastProps.data} weeklyAvg={forecastProps.weeklyAvg} />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <TodayForecast todayData={todayData} graphData={graphData} />
      </div>
    </div>
  );
}
