import React, { useEffect, useState, useRef, createRef } from 'react';
import { makeStyles, IconButton, InputBase, Popper, Paper, List, ListItem } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import axios from 'axios';
/* global google */

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
  }
}));

// API KEYS
const OPEN_CAGE_KEY = 'c2ab0fa51f0844fcade0197c0c059111';
const OPEN_CAGE_URL = `https://api.opencagedata.com/geocode/v1/json?key=${OPEN_CAGE_KEY}&q=`;
const UNPLASH_KEY = '2d5300fdc7dc99bbacd2a1fca10e4d536a552e7b4f470ee485a987a7748b858b';
const UNPLASH_URL = `https://api.unsplash.com/search/photos?page=1&per_page=1&client_id=${UNPLASH_KEY}&query=`;
const GPLACES_KEY = 'AIzaSyA4mxHvWDDKTOKj0_jYCwygGY2Qzc209Xg';
const GPLACES_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?types=(cities)&key=${GPLACES_KEY}&input=`;

export default function CitySelect() {
  const classes = useStyles({});
  const [cities, setCities] = useState(['Montreal']);
  const [citiesData, setCitiesData] = useState<{ name: string; img: string }[]>();
  const [citySearch, setCitySearch] = useState('');
  const [predictions, setPredictions] = useState<string[]>();
  const [popperOpen, setPopperOpen] = useState(false);
  const searchRef = createRef<HTMLInputElement>();
  const [anchorEl, setAnchorEl] = useState(null);

  // On load, get geolocation of current city for default
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        let query = pos.coords.latitude + '+' + pos.coords.longitude;
        axios.get(OPEN_CAGE_URL + query).then(res => {
          setCities([...cities, res.data.results[0].components.city]);
        });
      });
    }
  }, []);

  // Watch cities for changes, and do request for city image
  useEffect(() => {
    cities.forEach(city => {
      axios.get(UNPLASH_URL + city).then(res => {
        setCitiesData([{ name: city, img: res.data.results[0].urls.thumb }]);
      });
    });
  }, [cities]);

  // Setup Autocomplete server only when Ref is set
  useEffect(() => {
    if (searchRef.current) {
      let request = {
        input: citySearch,
        types: ['(cities)']
      };
      let autocomplete = new google.maps.places.AutocompleteService();
      autocomplete.getPlacePredictions(request, predictionsCallback);
    }
  }, [searchRef]);

  // Handles Changing places
  const predictionsCallback = (predictions: any, status: any) => {
    if (status != google.maps.places.PlacesServiceStatus.OK) return;
    let tempPredictions: string[] = [];
    predictions.forEach((prediction: any) => {
      tempPredictions.push(prediction.description);
    });
    setPredictions(tempPredictions);
  };

  // Handles setting anchor to input
  const handleAnchorSet = (e: any) => {
    if (e && anchorEl === null) {
      setAnchorEl(e);
    }
  };

  // Handles on change for search, and autocompletion via Google Places
  const handleSearchChange = (citySearchStr: string) => {
    setCitySearch(citySearchStr);
    setPopperOpen(true);
  };

  // Handles clicking on a prediction
  const handlePredictionClick = (cityName: string) => {
    setPopperOpen(false);
    setCitySearch(cityName);
  };

  return (
    <React.Fragment>
      <div className={classes.searchBarContainer} ref={e => handleAnchorSet(e)}>
        <IconButton aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          className={classes.searchBar}
          placeholder="Search new city..."
          inputProps={{ 'aria-label': 'search google maps' }}
          value={citySearch}
          onChange={e => handleSearchChange(e.target.value)}
          inputRef={searchRef}
        />
        <Popper open={popperOpen} anchorEl={anchorEl} placement="bottom-start" className={classes.popperBar}>
          <Paper className={classes.popperPaper}>
            <List>
              {predictions &&
                predictions.map(prediction => {
                  return (
                    <ListItem button onClick={() => handlePredictionClick(prediction)}>
                      {prediction}
                    </ListItem>
                  );
                })}
            </List>
          </Paper>
        </Popper>
      </div>
      <h2>
        <span className={classes.weatherTitle}>Weather</span> Forecast
      </h2>

      <div className={classes.citiesContainer}>
        {citiesData &&
          citiesData.map(city => {
            return (
              <div className={classes.cityItem} key={city.name}>
                <img className={classes.cityImage} src={city.img} />
                <div className={classes.cityName}>{city.name}</div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}
