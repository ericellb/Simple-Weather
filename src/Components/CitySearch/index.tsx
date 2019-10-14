import React, { useEffect, useState, createRef } from 'react';
import { makeStyles, IconButton, InputBase, Popper, Paper, List, ListItem } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { fetchWeatherData, updateSelectedCity, updateCities } from '../../Actions';
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

export default function CitySearch() {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const [citySearch, setCitySearch] = useState('');
  const [predictions, setPredictions] = useState<string[]>();
  const [selectedPrediction, setSelectedPrediction] = useState<number | null>(null);
  const [popperOpen, setPopperOpen] = useState(false);
  const searchRef = createRef<HTMLInputElement>();
  const [anchorEl, setAnchorEl] = useState(null);

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
    // eslint-disable-next-line
  }, [searchRef]);

  // Handles Changing places
  const predictionsCallback = (predictions: any, status: any) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK) return;
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

  // Handles Submit of the search
  const handleSearchSubmit = (cityName: string) => {
    dispatch(updateCities(cityName, false));
    dispatch(updateSelectedCity(cityName));
  };

  // Handles on change for search, and autocompletion via Google Places
  const handleSearchChange = (citySearchStr: string) => {
    setCitySearch(citySearchStr);
    setPopperOpen(true);
    if (citySearchStr === '') {
      setPopperOpen(false);
      setSelectedPrediction(null);
    }
  };

  // Handles clicking on a prediction
  const handlePredictionSelect = (cityName: string) => {
    setPopperOpen(false);
    setCitySearch(cityName);
    handleSearchSubmit(cityName);
  };

  // Handles ArrowDown + Up to Naviagate Predicitons list
  const handleArrowNavigate = (e: any) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      let tempSelected = selectedPrediction;
      if (tempSelected === null) {
        tempSelected = -1;
      }

      if (e.key === 'ArrowDown') {
        tempSelected++;
      } else if (e.key === 'ArrowUp') {
        tempSelected--;
      }

      if (tempSelected < 0) {
        tempSelected = 0;
      } else if (predictions && tempSelected > predictions.length - 1) {
        tempSelected = predictions.length - 1;
      }

      setSelectedPrediction(tempSelected);
    } else if (e.key === 'Enter') {
      if (predictions && selectedPrediction !== null) {
        handlePredictionSelect(predictions[selectedPrediction]);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={classes.searchBarContainer} ref={e => handleAnchorSet(e)} onKeyDown={e => handleArrowNavigate(e)}>
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
      </div>
      <Popper open={popperOpen} anchorEl={anchorEl} placement="bottom-start" className={classes.popperBar}>
        <Paper className={classes.popperPaper}>
          <List>
            {predictions &&
              predictions.map((prediction, i) => {
                return (
                  <ListItem
                    button
                    onClick={() => handlePredictionSelect(prediction)}
                    className={i === selectedPrediction ? classes.selected : ''}
                  >
                    {prediction}
                  </ListItem>
                );
              })}
          </List>
        </Paper>
      </Popper>
    </React.Fragment>
  );
}
