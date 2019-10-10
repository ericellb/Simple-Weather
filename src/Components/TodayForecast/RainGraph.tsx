import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  chanceRainGraph: {
    display: 'flex',
    height: 'calc(100% - 19px)',
    fontSize: '12px'
  },
  chanceRainTitles: {
    display: 'flex',
    flexBasis: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  chanceRainItems: {
    flexBasis: '15%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative'
  },
  chanceRainLineContainer: {
    width: '4px',
    height: '100%',
    position: 'absolute',
    boxSizing: 'border-box',
    paddingTop: '3em',
    paddingBottom: '2em'
  },
  chanceRainDottedLine: {
    width: '4px',
    height: '100%',
    position: 'absolute',
    boxSizing: 'border-box',
    paddingTop: '3em',
    paddingBottom: '2em',
    backgroundImage: 'linear-gradient(#9999ac 33%, rgba(255,255,255,0) 0%)',
    backgroundPosition: 'center',
    backgroundSize: '2px 16px',
    backgroundRepeat: 'repeat-y',
    backgroundClip: 'content-box'
  },
  chanceRainValueContainer: {
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
  chanceRainValueLine: {
    background: '#302e62',
    height: '50%',
    borderRadius: '12px',
    width: '16px',
    '&:hover': {
      backgroundColor: '#f8c500'
    }
  }
}));

export default function RainGraph() {
  const classes = useStyles({});
  let testArr = ['10AM', '12PM', '2PM', '4PM', '6PM', '8PM'];

  return (
    <React.Fragment>
      <div>Chance of rain</div>
      <div className={classes.chanceRainGraph}>
        <div className={classes.chanceRainTitles}>
          <div>showers</div>
          <div>rain</div>
          <div>drizzle</div>
        </div>
        {testArr.map(item => {
          return (
            <div className={classes.chanceRainItems}>
              <div className={classes.chanceRainDottedLine}></div>
              <div className={classes.chanceRainValueContainer}>
                <div className={classes.chanceRainValueLine}> </div>
              </div>
              {item}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
