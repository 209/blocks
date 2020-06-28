/**
 *
 * Block
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDraggable from 'react-draggable';
// import styled from 'styled-components';

function Block({ element, onChangePosition }) {
  const { id, width, height, backgroundColor, x, y } = element;

  const style = {
    width,
    height,
    backgroundColor,
    position: 'absolute',
  };

  const handleDragStop = (e, position) => onChangePosition(id, position);

  return (
    <ReactDraggable
      bounds={{ top: 0, left: 0, right: 1000, bottom: 5000 }}
      position={{ x, y }}
      onStop={handleDragStop}
    >
      <div id={id} style={style} />
    </ReactDraggable>
  );
}

Block.propTypes = {
  element: PropTypes.object.isRequired,
  onChangePosition: PropTypes.func.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.element === nextProps.element) {
    return true;
  }
  return Object.keys(nextProps.element).every(
    key => prevProps.element[key] === nextProps.element[key],
  );
};

export default React.memo(Block, areEqual);
