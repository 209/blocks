import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CanvasPage from 'pages/CanvasPage/index';

describe('<CanvasPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <CanvasPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
