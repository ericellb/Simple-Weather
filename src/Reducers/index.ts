import { weatherReducer, WeatherStore } from './weatherReducer';
import { combineReducers } from 'redux';

export interface StoreState {
  weather: WeatherStore;
}

export default combineReducers<StoreState>({
  weather: weatherReducer
});
