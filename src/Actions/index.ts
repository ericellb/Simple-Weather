import axios from 'axios';
import { Dispatch } from 'redux';
import { ACTIONS, UpdateCitiesAction, UpdateSelectedCityAction } from './types';

let WEATHER_KEY = 'e03e2793aa948f9b8e1238d63fbe9d4d';

export const fetchWeatherData = (cityName: string) => async (dispatch: Dispatch) => {
  // Get Weekly Forecast
  cityName = encodeURIComponent(cityName);
  let weeklyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_KEY}`;
  const res = await axios.get(weeklyForecastUrl);
  dispatch({ type: ACTIONS.UPDATE_WEEKLY, payload: res.data.list });

  // Get Daily Forecast
  let dailyForecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_KEY}`;
  const res2 = await axios.get(dailyForecastUrl);
  dispatch({ type: ACTIONS.UPDATE_DAILY, payload: res2.data });
};

export const updateCities = (cityName: string, append: boolean): UpdateCitiesAction => ({
  type: ACTIONS.UPDATE_CITIES,
  payload: { cityName: cityName, append: append }
});

export const updateSelectedCity = (cityName: string): UpdateSelectedCityAction => ({
  type: ACTIONS.UPDATE_SELECTED_CITY,
  payload: cityName
});
