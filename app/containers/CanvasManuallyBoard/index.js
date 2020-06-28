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
import CanvasManuallyWrapper from 'components/CanvasManuallyWrapper';
import * as actions from 'stores/blocks/actions';
import { makeSelectElements, makeSelectPage } from 'stores/blocks/selectors';
import reducer from 'stores/blocks/reducer';

export function CanvasManuallyBoard({ elements, page, changePosition }) {
  useInjectReducer({ key: 'blocks', reducer });

  return (
    <CanvasManuallyWrapper
      onChangePosition={changePosition}
      elements={elements}
      page={page}
    />
  );
}

CanvasManuallyBoard.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  elements: PropTypes.array.isRequired,
  page: PropTypes.object.isRequired,
  changePosition: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  elements: makeSelectElements(),
  elementsChunks: makeSelectElements(),
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

export default compose(withConnect)(CanvasManuallyBoard);
