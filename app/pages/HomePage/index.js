/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from 'pages/HomePage/messages';
import Board from 'containers/Board';

export default function HomePage() {
  return (
    <>
      <h2>Div blocks</h2>
      <Board />
    </>
  );
}
