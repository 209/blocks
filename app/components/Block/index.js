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

  // событие происходит по drop, поэтому не нужно устранять тротлинг
  const handleDragStop = (e, position) => onChangePosition(id, position);

  return (
    <ReactDraggable bounds="parent" position={{ x, y }} onStop={handleDragStop}>
      <div id={id} style={style} />
    </ReactDraggable>
  );
}

Block.propTypes = {
  element: PropTypes.object.isRequired,
  onChangePosition: PropTypes.func.isRequired,
};

// поверхностное сравнение element: устраняем переренеривание после изменения стейта
const areEqual = (prevProps, nextProps) => {
  if (prevProps.element === nextProps.element) {
    return true;
  }
  return Object.keys(nextProps.element).every(
    key => prevProps.element[key] === nextProps.element[key],
  );
};

export default React.memo(Block, areEqual);