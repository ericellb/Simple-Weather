import React from 'react';
import { makeStyles, Icon } from '@material-ui/core';
import './style.css';

const useStyles = makeStyles(theme => ({
  graphContainer: {
    display: 'flex',
    height: '100%',
    fontSize: '12px',
    flexDirection: 'column'
  },
  graphItems: {
    flexBasis: '15%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  graphDayItem: {
    paddingRight: '16px',
    minWidth: '80px',
    color: '#202d5d'
  },
  graphOtherItem: {
    paddingRight: '6px',
    paddingLeft: '6px',
    minWidth: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a4afb4',
    fontSize: '15px'
  },
  graphOtherIcon: {
    width: '100%',
    textAlign: 'center'
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
    borderTop: '3px dotted #d4e3f5'
  },
  graphValueContainer: {
    width: '100%',
    height: '5px',
    position: 'absolute',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  graphValueLineHigh: {
    width: '50%',
    height: '8px',
    background: '#e94b0c',
    position: 'absolute',
    left: '50%',
    borderRadius: '0px 8px 8px 0px',
    top: '-2px'
  },
  graphValueLineLow: {
    width: '50%',
    height: '8px',
    background: '#d4e3f5',
    position: 'absolute',
    right: '50%',
    borderRadius: '8px 0px 0px 8px',
    top: '-2px'
  }
}));

// CSS FOR GRAPH LINES
/*
LEFT BAR
left: calc(50% - 40%);
width: 40%;
height: 8px;
position: absolute;
background: #302e62;
border-radius: 8px 0px 0px 8px;

RIGHT BAR
left: 50%;
width: 20%;
height: 8px;
position: absolute;
background: #302e62;
border-radius: 0px 8px 8px 0px;
*/

export interface ForecastProps {
  type: 'forecast';
  data: {
    day: string;
    precip: string;
    weatherId: string;
    dayTemp: number;
    highTemp: number;
    lowTemp: number;
  }[];
}

export default function WeeklyForecast(props: ForecastProps) {
  const classes = useStyles({});
  // Titles default to rain type
  let yTitles = ['showers', 'rain', 'drizzle'];
  let graphTitle = 'Precipitation';

  // Gets the appropriate FA Icon depending on weather ID
  const weatherIdToFAIcon = (weatherId: string) => {
    let faClass = 'fa ';
    let tempWeatherId = weatherId.substring(0, weatherId.length - 1);
    switch (tempWeatherId) {
      case '01':
        faClass += 'fa-sun';
        break;
      case '02':
        faClass += 'fa-cloud-sun';
        break;
      case '03':
        faClass += 'fa-cloud';
        break;
      case '04':
        faClass += 'fa-cloud';
        break;
      case '09':
        faClass += 'fa-cloud-rain';
        break;
      case '10':
        faClass += 'fa-cloud-sun-rain';
        break;
      case '11':
        faClass += 'fa-bolt';
        break;
      case '13':
        faClass += 'fa-snowflake';
        break;
      case '50':
        faClass += 'fa-smog';
        break;
    }
    return faClass;
  };

  // Calculates using average how wide bars should be
  // Need to make this more meaningful kind of useless atm...
  const calcHighLowWidth = (low: number, high: number) => {
    let avg = (high + low) / 2;
    let tempHigh = (high - avg) * 5;
    if (tempHigh > 50) tempHigh = 50;
    let tempLow = avg - low;
    if (tempLow > 50) tempLow = 50;
    return { low: tempLow, high: tempHigh };
  };

  return (
    <React.Fragment>
      <div>{graphTitle}</div>
      <div className={classes.graphContainer}>
        {props.data.map(item => {
          let barTempLengths = calcHighLowWidth(item.lowTemp, item.highTemp);
          console.log(barTempLengths);
          return (
            <div className={classes.graphItems}>
              <div className={classes.graphDayItem}>{item.day}</div>
              <div className={classes.graphOtherItem}>
                <Icon className="fa fa-tint" /> {item.precip}%
              </div>
              <div className={classes.graphOtherItem}>
                <Icon className={`${weatherIdToFAIcon(item.weatherId) + ' ' + classes.graphOtherIcon}`} />
              </div>
              <div className={classes.graphOtherItem}>{item.lowTemp}°C</div>
              <div className={classes.graphBars}>
                <div className={classes.graphDottedLine}></div>
                <div className={classes.graphValueContainer}>
                  <div style={{ height: '100%', width: '100%' }}>
                    <div className={classes.graphValueLineLow} style={{ width: `${barTempLengths.low}%` }} />
                    <div className={classes.graphValueLineHigh} style={{ width: `${barTempLengths.high}%` }} />
                  </div>
                </div>
              </div>
              <div className={classes.graphOtherItem}>{item.highTemp}°C</div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
