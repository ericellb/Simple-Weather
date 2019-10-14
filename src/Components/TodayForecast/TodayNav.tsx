import React from 'react';
import { Person } from '@material-ui/icons';

export default function TodayNav() {
  return (
    <React.Fragment>
      <div>
        <span style={{ paddingRight: '2em' }}>Notifcations </span>
        <span>Places</span>
      </div>
      <div>
        <Person />
      </div>
    </React.Fragment>
  );
}
