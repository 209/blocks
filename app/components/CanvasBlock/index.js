/**
 *
 * CanvasBlock
 *
 */

import React, { useRef } from 'react';
import { Rect } from 'react-konva';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CanvasBlock({ element, onChangePosition, page }) {
  const node = useRef(null);

  const { id, width, height, backgroundColor, x, y } = element;
  const handleDragEnd = ({ target: { attrs } }) => {
    onChangePosition(id, { x: attrs.x, y: attrs.y });
  };
  const handleDragBoundFunc = pos => {
    let newY = pos.y;
    let newX = pos.x;

    if (newX < 0) {
      newX = 0;
    }
    if (newX > page.width - width) {
      newX = page.width - width;
    }

    if (newY < 0) {
      newY = 0;
    }
    if (newY > page.height - height) {
      newY = page.height - height;
    }

    return {
      x: newX,
      y: newY,
    };
  };

  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={backgroundColor}
      draggable
      onDragEnd={handleDragEnd}
      dragBoundFunc={handleDragBoundFunc}
      ref={node}
    />
  );
}

CanvasBlock.propTypes = {
  element: PropTypes.object.isRequired,
  onChangePosition: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
};

export default CanvasBlock;
