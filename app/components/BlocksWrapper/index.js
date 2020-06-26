/**
 *
 * BlocksWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Block from 'components/Block';

function BlocksWrapper(props) {
  const {
    elements,
    onChangePosition,
    page: { width, height },
  } = props;
  const wrapperStyle = {
    width,
    height,
    backgroundColor: '#999999',
    position: 'relative',
  };

  return (
    <div style={{ ...wrapperStyle }}>
      {elements.map(element => (
        <Block
          key={element.id}
          element={element}
          onChangePosition={onChangePosition}
        />
      ))}
    </div>
  );
}

BlocksWrapper.propTypes = {
  elements: PropTypes.array.isRequired,
  page: PropTypes.object.isRequired,
  onChangePosition: PropTypes.func.isRequired,
};

export default BlocksWrapper;
