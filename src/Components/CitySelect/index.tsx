import React, { useEffect, useState } from 'react';
import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import axios from 'axios';
import CitySearch from '../CitySearch';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData, updateCities, updateSelectedCity } from '../../Actions';
import { StoreState } from '../../Reducers';
import { MoreVert } from '@material-ui/icons';
import _ from 'lodash';

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
    display: 'flex',
    paddingBottom: '2em',
    boxSizing: 'border-box'
  },
  cityItem: {
    marginRight: '3em',
    boxSizing: 'border-box',
    cursor: 'pointer',
    position: 'relative'
  },
  cityName: {
    paddingTop: '1em',
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  cityImage: {
    height: '180px',
    width: '144px',
    borderRadius: '8px'
  },
  cityMore: {
    position: 'absolute',
    right: '0.5em',
    top: '0.5em',
    zIndex: 100
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
  const citiesList = useSelector((state: StoreState) => state.weather.cities);
  const selectedCity = useSelector((state: StoreState) => state.weather.selectedCity);
  const [citiesData, setCitiesData] = useState<{ name: string; img: string }[]>();
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [moreMenuCity, setMoreMenuCity] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  // On load, get geolocation of current city for default
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        let query = pos.coords.latitude + '+' + pos.coords.longitude;
        axios.get(OPEN_CAGE_URL + query).then(res => {
          if (res.data.results[0].components.city) {
            dispatch(updateCities(res.data.results[0].components.city));
          } else if (res.data.results[0].components.town) {
            dispatch(updateCities(res.data.results[0].components.town));
          }
        });
      });
    }
    // eslint-disable-next-line
  }, []);

  // Watch cities for changes, and do request for city image
  useEffect(() => {
    const fetchImages = async () => {
      if (citiesList.length > 0) {
        console.log(citiesList);
        let tempCityData: any = [];
        citiesList.forEach(async (city, i) => {
          let cityName = city.split(',')[0];
          cityName = encodeURIComponent(cityName);
          let res = await _axios_get(UNPLASH_URL + cityName);
          tempCityData.push({ name: city, img: res.data.results[0].urls.thumb });
          if (i === citiesList.length - 1) {
            setCitiesData(tempCityData);
          }
        });
      }
    };
    fetchImages();
  }, [citiesList]);

  // Memoized Axios get
  const _axios_get = _.memoize(async (url: string) => {
    const res = await axios.get(url);
    return res;
  });

  // When city is selected fetch weather data for selected city
  useEffect(() => {
    dispatch(fetchWeatherData(selectedCity));
  }, [selectedCity]);

  // Dispatches event to change selected city
  const changeSelectedCity = (cityName: string) => {
    dispatch(updateSelectedCity(cityName));
  };

  // Handles Opening Menu when City More Clicked
  const handleMenuOpen = (target: any, cityName: string) => {
    setMoreMenuCity(cityName);
    setAnchorEl(target);
    setMoreMenuOpen(true);
  };

  // Handles Deleting City from our List
  const handleCityDelete = (cityName: string) => {
    let cities: any = [];
    citiesList.forEach(city => {
      if (city !== cityName) {
        cities.push(city);
      }
    });
    setMoreMenuOpen(false);
    dispatch(updateSelectedCity(cities[0]));
    dispatch(updateCities(cities));
  };

  return (
    <React.Fragment>
      <CitySearch />
      <h2 style={{ flexBasis: '100%', fontSize: '32px' }}>
        <span className={classes.weatherTitle}>Weather</span> Forecast
      </h2>

      <div className={classes.citiesContainer} style={{ flexBasis: '100%' }}>
        {citiesData &&
          citiesData.map(city => {
            return (
              <div className={classes.cityItem} key={city.name}>
                <MoreVert className={classes.cityMore} onClick={e => handleMenuOpen(e.target, city.name)} />
                <img
                  className={classes.cityImage}
                  src={city.img}
                  alt={city.name}
                  onClick={() => changeSelectedCity(city.name)}
                />
                <div className={classes.cityName}>{city.name}</div>
              </div>
            );
          })}
      </div>
      <Menu
        id="cities-more-menu"
        anchorEl={anchorEl}
        keepMounted
        open={moreMenuOpen}
        onClose={() => setMoreMenuOpen(false)}
      >
        <MenuItem> Add </MenuItem>
        <MenuItem onClick={() => handleCityDelete(moreMenuCity)}> Delete </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
