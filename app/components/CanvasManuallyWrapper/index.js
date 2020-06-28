/**
 *
 * CanvasManuallyWrapper
 *
 */

import React, { memo, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Konva from 'konva';
// import styled from 'styled-components';

function CanvasManuallyWrapper({ page, onChangePosition, elements }) {
  const node = useRef(null);
  const idsString = elements.map(({ id }) => id).join();

  useLayoutEffect(() => {
    const stage = new Konva.Stage({
      container: node.current,
      width: page.width,
      height: page.height,
    });
    const dragLayer = new Konva.Layer();

    const layersArr = [new Konva.Layer()];
    let layerIndex = 0;
    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      if (i !== 0 && i % 1000 === 0) {
        layerIndex += 1;
        layersArr.push(new Konva.Layer());
      }

      layersArr[layerIndex].add(
        new Konva.Rect({
          originalId: element.id,
          x: element.x,
          y: element.y,
          width: element.width,
          height: element.height,
          fill: element.backgroundColor,
          dragBoundFunc: pos => {
            let newY = pos.y;
            let newX = pos.x;

            if (newX < 0) {
              newX = 0;
            }
            if (newX > page.width - element.width) {
              newX = page.width - element.width;
            }

            if (newY < 0) {
              newY = 0;
            }
            if (newY > page.height - element.height) {
              newY = page.height - element.height;
            }

            return {
              x: newX,
              y: newY,
            };
          },
        }),
      );
    }
    layersArr.map(layer => stage.add(layer));
    stage.add(dragLayer);

    stage.on('mousedown', function(evt) {
      if (!(evt.target instanceof Konva.Rect)) {
        return;
      }

      const rect = evt.target;
      const layer = rect.getLayer();

      rect.moveTo(dragLayer);
      layer.draw();
      dragLayer.draw();
      rect.startDrag();
    });

    stage.on('dragend', ({ target: { attrs } }) => {
      onChangePosition(attrs.originalId, { x: attrs.x, y: attrs.y });
    });

    return () => {
      node.current.innerHtml = '';
    };
  }, [idsString]);

  return (
    <div
      ref={node}
      style={{
        backgroundColor: '#999999',
        width: page.width,
        height: page.height,
      }}
    />
  );
}

CanvasManuallyWrapper.propTypes = {
  onChangePosition: PropTypes.func.isRequired,
  elements: PropTypes.array.isRequired,
  page: PropTypes.object.isRequired,
};

export default memo(CanvasManuallyWrapper);
