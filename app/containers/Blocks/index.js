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
import * as actions from './actions';
import { makeSelectElements, makeSelectPage } from './selectors';
import reducer from './reducer';

// коннект к redux целенаправлено сделан здесь, снаружи, а не в компоненте BlocksWrapper
// преимущества:
//  - переиспользование
//  - разделен коннект и компонент, легче тестировать
//  - четко определены "точки входа": containers
export function Blocks({ elements, page, changePosition }) {
  useInjectReducer({ key: 'blocks', reducer });

  return (
    <BlocksWrapper
      onChangePosition={changePosition}
      elements={elements}
      page={page}
    />
  );
}

Blocks.propTypes = {
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

export default compose(withConnect)(Blocks);
