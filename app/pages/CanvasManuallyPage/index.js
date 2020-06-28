/*
 * CanvasManuallyPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from 'pages/CanvasManuallyPage/messages';
import CanvasManuallyBoard from 'containers/CanvasManuallyBoard';

export default function CanvasManuallyPage() {
  return (
    <>
      <h2>Canvas Manually</h2>
      <CanvasManuallyBoard />
    </>
  );
}
