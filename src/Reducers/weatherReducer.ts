import { ACTIONS, WeatherActions, WeatherInfo, TodayInfo } from '../Actions/types';

export interface WeatherStore {
  todayData: TodayInfo | undefined;
  forecastData: WeatherInfo[];
  cities: string[];
  selectedCity: string;
  tempScale: 'celsius' | 'farenheit';
}

const initialState: WeatherStore = {
  todayData: undefined,
  forecastData: [],
  cities: ['New York, NY, USA', 'Paris, France', 'Montreal, QC, Canada'],
  selectedCity: 'New York, NY, USA',
  tempScale: 'celsius'
};

export const weatherReducer = (state: WeatherStore = initialState, action: WeatherActions): WeatherStore => {
  switch (action.type) {
    case ACTIONS.UPDATE_WEEKLY:
      return { ...state, forecastData: action.payload };
    case ACTIONS.UPDATE_DAILY:
      return { ...state, todayData: action.payload };
    case ACTIONS.UPDATE_TEMP_SCALE:
      return { ...state };

    case ACTIONS.ADD_CITY:
      return { ...state, cities: [...state.cities, action.payload] };
    case ACTIONS.UPDATE_CITIES:
      return { ...state, cities: action.payload };
    case ACTIONS.UPDATE_SELECTED_CITY:
      return { ...state, selectedCity: action.payload };
    default:
      return state;
  }
};
