import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  graphContainer: {
    display: 'flex',
    height: '100%',
    fontSize: '12px',
    flexDirection: 'column'
  },
  graphTitles: {
    display: 'flex',
    flexBasis: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  graphTitleItem: {
    paddingRight: '16px',
    width: '80px'
  },
  graphItems: {
    flexBasis: '15%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  graphBars: {
    position: 'relative',
    width: '100%'
  },
  graphLineContainer: {
    width: '4px',
    height: '100%',
    position: 'absolute',
    boxSizing: 'border-box',
    paddingTop: '3em',
    paddingBottom: '2em'
  },
  graphDottedLine: {
    width: '100%',
    height: '8px',
    position: 'absolute',
    boxSizing: 'border-box',
    borderTop: '2px dotted grey'
  },
  graphValueContainer: {
    width: '100%',
    height: '12px',
    position: 'absolute',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  graphValueLine: {
    background: '#302e62',
    height: '16px',
    borderRadius: '12px',
    width: '50%',
    '&:hover': {
      backgroundColor: '#f8c500'
    }
  }
}));

export interface ForecastProps {
  type: 'forecast';
  data: { day: string; high: number; low: number }[];
}

export default function WeeklyForecast(props: ForecastProps) {
  const classes = useStyles({});
  // Titles default to rain type
  let yTitles = ['showers', 'rain', 'drizzle'];
  let graphTitle = 'Precipitation';

  return (
    <React.Fragment>
      <div>{graphTitle}</div>
      <div className={classes.graphContainer}>
        {props.data.map(item => {
          return (
            <div className={classes.graphItems}>
              <div className={classes.graphTitleItem}>{item.day}</div>
              <div className={classes.graphBars}>
                <div className={classes.graphDottedLine}></div>
                <div className={classes.graphValueContainer}>
                  <div className={classes.graphValueLine} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
