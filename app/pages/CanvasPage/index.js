/*
 * CanvasPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from 'pages/CanvasPage/messages';
import CanvasBoard from 'containers/CanvasBoard';

export default function CanvasPage() {
  return (
    <>
      <h2>Canvas</h2>
      <CanvasBoard />
    </>
  );
}
