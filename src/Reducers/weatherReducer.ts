import { ACTIONS, WeatherActions, WeatherInfo, TodayInfo } from '../Actions/types';

export interface WeatherStore {
  todayData: TodayInfo | undefined;
  forecastData: WeatherInfo[];
  tempScale: 'celsius' | 'farenheit';
}

const initialState: WeatherStore = {
  todayData: undefined,
  forecastData: [],
  tempScale: 'celsius'
};

export const weatherReducer = (state: WeatherStore = initialState, action: WeatherActions): WeatherStore => {
  switch (action.type) {
    case ACTIONS.UPDATE_WEEKLY:
      return { ...state, forecastData: action.payload };
    case ACTIONS.UPDATE_DAILY:
      console.log(action);
      return { ...state, todayData: action.payload };
    case ACTIONS.UPDATE_TEMP_SCALE:
      return { ...state };
    default:
      return state;
  }
};
