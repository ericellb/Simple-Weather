import { string } from 'prop-types';

export enum ACTIONS {
  UPDATE_TODAY,
  UPDATE_FORECAST,
  UPDATE_TEMP_SCALE
}

export type WeatherActions = UpdateForecastAction | UpdateTempScale;

/* Action Types */
export type UpdateForecastAction = {
  type: ACTIONS.UPDATE_FORECAST;
  payload: WeatherInfo;
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
}[];
