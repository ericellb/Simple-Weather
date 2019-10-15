import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  graphContainer: {
    display: 'flex',
    height: 'calc(100% - 19px)',
    fontSize: '12px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '200px'
    }
  },
  graphTitles: {
    display: 'flex',
    flexBasis: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  graphTitleItem: {
    flexBasis: '100%'
  },
  graphItems: {
    flexBasis: '15%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative'
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
    width: '4px',
    height: '100%',
    position: 'absolute',
    boxSizing: 'border-box',
    paddingTop: '3em',
    paddingBottom: '2em',
    backgroundImage: 'linear-gradient(#1d1b4b 33%, rgba(255,255,255,0) 0%)',
    backgroundPosition: 'center',
    backgroundSize: '2px 16px',
    backgroundRepeat: 'repeat-y',
    backgroundClip: 'content-box'
  },
  graphValueContainer: {
    width: '12px',
    height: '100%',
    position: 'absolute',
    boxSizing: 'border-box',
    paddingTop: '3em',
    paddingBottom: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  graphValueLine: {
    background: '#302e62',
    height: '50%',
    borderRadius: '12px',
    width: '16px',
    '&:hover': {
      backgroundColor: '#f8c500'
    }
  }
}));

export interface GraphProps {
  type: 'rain' | 'uv';
  data: { title: string; value: number }[];
}

export default function DataGraph(props: GraphProps) {
  const classes = useStyles({});
  // Titles default to rain type
  let yTitles = ['showers', 'rain', 'drizzle'];
  let graphTitle = 'Chance of rain';

  // Create titles bases on type
  if (props.type === 'uv') {
    graphTitle = 'UV Index';
    yTitles = ['low', 'moderate', 'high'];
  }

  // Calculates Bar height for rain / uv etc..
  const calcBarHeight = (value: number) => {
    if (props.type === 'rain') {
      value = value * 100;
      if (value > 100) {
        value = 100;
      }
      return value;
    }
  };

  return (
    <React.Fragment>
      <div>{graphTitle}</div>
      <div className={classes.graphContainer}>
        <div className={classes.graphTitles}>
          <div className={classes.graphTitleItem}>{yTitles[0]}</div>
          <div className={classes.graphTitleItem}>{yTitles[1]}</div>
          <div className={classes.graphTitleItem}>{yTitles[2]}</div>
        </div>
        {props.data.map(item => {
          return (
            <div className={classes.graphItems} key={item.title}>
              <div className={classes.graphDottedLine}></div>
              <div className={classes.graphValueContainer}>
                <div className={classes.graphValueLine} style={{ height: `${calcBarHeight(item.value)}%` }} />
              </div>
              {item.title}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
