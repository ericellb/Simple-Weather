import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import CitySearch from '../CitySearch';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../Actions';

const useStyles = makeStyles(theme => ({
  weatherTitle: {
    fontWeight: 400
  },
  searchBarContainer: {
    display: 'inline-block',
    background: 'white',
    borderRadius: '8px'
  },
  searchBar: {
    width: '250px'
  },
  citiesContainer: {
    display: 'flex'
  },
  cityItem: {
    padding: '1em',
    boxSizing: 'border-box'
  },
  cityName: {
    textAlign: 'center'
  },
  cityImage: {
    height: '180px',
    width: '144px',
    borderRadius: '8px'
  },
  popperBar: {
    top: '2px',
    width: '298px'
  },
  popperPaper: {
    padding: '1em'
  },
  selected: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  }
}));

// API KEYS
const OPEN_CAGE_KEY = 'c2ab0fa51f0844fcade0197c0c059111';
const OPEN_CAGE_URL = `https://api.opencagedata.com/geocode/v1/json?key=${OPEN_CAGE_KEY}&q=`;
const UNPLASH_KEY = '2d5300fdc7dc99bbacd2a1fca10e4d536a552e7b4f470ee485a987a7748b858b';
const UNPLASH_URL = `https://api.unsplash.com/search/photos?page=1&per_page=1&client_id=${UNPLASH_KEY}&query=`;

export default function CitySelect() {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const [cities, setCities] = useState(['New York']);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [citiesData, setCitiesData] = useState<{ name: string; img: string }[]>();

  // On load, get geolocation of current city for default
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        let query = pos.coords.latitude + '+' + pos.coords.longitude;
        axios.get(OPEN_CAGE_URL + query).then(res => {
          console.log(res);
          setCities([...cities, res.data.results[0].components.town]);
        });
      });
    }
    // eslint-disable-next-line
  }, []);

  // Watch cities for changes, and do request for city image
  useEffect(() => {
    if (cities) {
      cities.forEach(city => {
        console.log(city);
        axios.get(UNPLASH_URL + city).then(res => {
          setCitiesData([{ name: city, img: res.data.results[0].urls.thumb }]);
        });
      });
    }
  }, [cities]);

  useEffect(() => {
    dispatch(fetchWeatherData(selectedCity));
  }, [selectedCity]);

  return (
    <React.Fragment>
      <CitySearch />
      <h2>
        <span className={classes.weatherTitle}>Weather</span> Forecast
      </h2>

      <div className={classes.citiesContainer}>
        {citiesData &&
          citiesData.map(city => {
            return (
              <div className={classes.cityItem} key={city.name}>
                <img className={classes.cityImage} src={city.img} alt={city.name} />
                <div className={classes.cityName}>{city.name}</div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}
