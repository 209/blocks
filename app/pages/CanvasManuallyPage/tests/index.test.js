import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CanvasManuallyPage from 'pages/CanvasManuallyPage/index';

describe('<CanvasManuallyPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <CanvasManuallyPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
