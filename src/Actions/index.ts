import axios from 'axios';
import { Dispatch } from 'redux';
import { ACTIONS } from './types';

let WEATHER_KEY = '39f17059f73a7f2e34fecf2583e6b12f';

export const fetchWeatherData = (cityName: string) => async (dispatch: Dispatch) => {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_KEY}`;
  const res = await axios.get(url);
  dispatch({ type: ACTIONS.UPDATE_FORECAST, payload: res.data.list });
};
