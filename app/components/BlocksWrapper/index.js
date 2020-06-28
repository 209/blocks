/**
 *
 * BlocksWrapper
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Block from 'components/Block';

// eslint-disable-next-line no-underscore-dangle
const _Layer = ({ layer, onChangePosition }) => (
  <span>
    {layer.map(element => (
      <Block
        key={element.id}
        element={element}
        onChangePosition={onChangePosition}
      />
    ))}
  </span>
);
_Layer.propTypes = {
  layer: PropTypes.array.isRequired,
  onChangePosition: PropTypes.func.isRequired,
};
const Layer = memo(_Layer, (prevProps, nextProps) => {
  if (prevProps.layer === nextProps.layer) {
    return true;
  }

  return nextProps.layer.every((next, index) => {
    const prev = prevProps.layer[index];

    return prev.id === next.id && prev.x === next.x && prev.y === next.y;
  });
});

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

  const layers = [];
  let layerIndex = -1;

  for (let i = 0; i < elements.length; i += 1) {
    if (i % 100 === 0) {
      layerIndex += 1;
      layers.push([]);
    }

    layers[layerIndex].push(elements[i]);
  }

  return (
    <div style={{ ...wrapperStyle }}>
      {layers.map((layer, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Layer key={index} layer={layer} onChangePosition={onChangePosition} />
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
