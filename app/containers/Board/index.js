/**
 *
 * Blocks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import BlocksWrapper from 'components/BlocksWrapper';
import * as actions from 'stores/blocks/actions';
import { makeSelectElements, makeSelectPage } from 'stores/blocks/selectors';
import reducer from 'stores/blocks/reducer';

// connect here:
//  - reusable
//  - easy testing: separated component and data inject
//  - containers are points of entry
export function Board({ elements, page, changePosition }) {
  useInjectReducer({ key: 'blocks', reducer });

  return (
    <BlocksWrapper
      onChangePosition={changePosition}
      elements={elements}
      page={page}
    />
  );
}

Board.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  elements: PropTypes.array.isRequired,
  page: PropTypes.object.isRequired,
  changePosition: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  elements: makeSelectElements(),
  page: makeSelectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changePosition: bindActionCreators(actions.changePosition, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Board);
