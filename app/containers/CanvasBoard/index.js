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
import CanvasBlocks from 'components/CanvasBlocksWrapper';
import * as actions from 'stores/blocks/actions';
import { makeSelectElements, makeSelectPage } from 'stores/blocks/selectors';
import reducer from 'stores/blocks/reducer';

export function CanvasBoard({ elements, page, changePosition }) {
  useInjectReducer({ key: 'blocks', reducer });

  return (
    <CanvasBlocks
      onChangePosition={changePosition}
      elements={elements}
      page={page}
    />
  );
}

CanvasBoard.propTypes = {
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

export default compose(withConnect)(CanvasBoard);
