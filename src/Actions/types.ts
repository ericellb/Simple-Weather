import { string } from 'prop-types';

export enum ACTIONS {
  UPDATE_DAILY,
  UPDATE_WEEKLY,
  UPDATE_CITIES,
  UPDATE_SELECTED_CITY,
  UPDATE_TEMP_SCALE
}

export type WeatherActions =
  | UpdateWeeklyAction
  | UpdateDailyAction
  | UpdateCitiesAction
  | UpdateSelectedCityAction
  | UpdateTempScale;

/* Action Types */
export type UpdateWeeklyAction = {
  type: ACTIONS.UPDATE_WEEKLY;
  payload: WeatherInfo[];
};

export type UpdateDailyAction = {
  type: ACTIONS.UPDATE_DAILY;
  payload: TodayInfo;
};

export type UpdateCitiesAction = {
  type: ACTIONS.UPDATE_CITIES;
  payload: { cityName: string; append: boolean };
};

export type UpdateSelectedCityAction = {
  type: ACTIONS.UPDATE_SELECTED_CITY;
  payload: string;
};

export type UpdateTempScale = {
  type: ACTIONS.UPDATE_TEMP_SCALE;
  payload: TempScale;
};

/* Interfaces for Data coming into Action Creators */

export type TempScale = 'celcius' | 'farenheit';

export type WeatherInfo = {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    pod: string;
  };
  snow?: {
    '3h'?: number;
  };
  rain?: {
    '3h'?: number;
  };
  dt_txt: string;
};

export type TodayInfo = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: 'stations';
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: 1;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
};
