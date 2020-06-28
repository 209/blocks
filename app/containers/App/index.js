/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'pages/HomePage/Loadable';
import CanvasPage from 'pages/CanvasPage/Loadable';
import CanvasManuallyPage from 'pages/CanvasManuallyPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div style={{ margin: '20px 20px' }}>
      <div style={{ margin: '0 0 20px 0' }}>
        <span style={{ marginLeft: 20, display: 'inline-block' }}>
          <Link to="/canvas_manually">
            Canvas Manually (konva.js) - fastest
          </Link>
        </span>
        <span style={{ marginLeft: 20, display: 'inline-block' }}>
          <Link to="/canvas">Canvas (react-konva)</Link>
        </span>
        <span style={{ marginLeft: 20, display: 'inline-block' }}>
          <Link to="/">Classic: divs (react-draggable)</Link>
        </span>
      </div>
      <Switch>
        <Route exact path="/" component={CanvasManuallyPage} />
        <Route exact path="/classic" component={HomePage} />
        <Route exact path="/canvas" component={CanvasPage} />
        <Route exact path="/canvas_manually" component={CanvasManuallyPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
