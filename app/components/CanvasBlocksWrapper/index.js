/**
 *
 * CanvasBlocksWrapper
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer } from 'react-konva';
import CanvasBlock from 'components/CanvasBlock';
// import styled from 'styled-components';

function CanvasBlocks(props) {
  const { elements, onChangePosition, page } = props;
  const { width, height } = page;
  const wrapperStyles = {
    backgroundColor: '#999999',
    width: 'fit-content',
    height: 'fit-content',
  };

  return (
    <div style={wrapperStyles}>
      <Stage width={width} height={height}>
        <Layer fill="#ccc">
          {elements.map(element => (
            <CanvasBlock
              page={page}
              key={element.id}
              element={element}
              onChangePosition={onChangePosition}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

CanvasBlocks.propTypes = {
  elements: PropTypes.array.isRequired,
  page: PropTypes.object.isRequired,
  onChangePosition: PropTypes.func.isRequired,
};

export default memo(CanvasBlocks);
