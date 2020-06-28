/*
 *
 * Blocks reducer
 *
 */
import produce from 'immer';
import * as actionTypes from 'stores/blocks/constants';

export const initialState = {
  page: {
    width: 1000,
    height: 5000,
  },
  elements: (() => {
    const arr = [];
    const WIDTH = 30;
    const HEIGHT = 30;
    let counter = 0;

    for (let i = 0; i < 100; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        arr.push({
          id: counter,
          width: WIDTH,
          height: HEIGHT,
          x: j * (WIDTH + 10),
          y: i * (HEIGHT + 10),
          backgroundColor: i % 2 ? '#5FD0E4' : '#9E5FE4',
        });
        counter += 1;
      }
    }
    return arr;
  })(),
};

/* eslint-disable default-case, no-param-reassign */
const blocksReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.DEFAULT_ACTION:
        break;
      case actionTypes.CHANGE_POSITION:
        for (let i = 0; i < draft.elements.length; i += 1) {
          if (draft.elements[i].id === action.id) {
            draft.elements[i].x = action.position.x;
            draft.elements[i].y = action.position.y;
            draft.elements[i].isDragging = false;
            break;
          }
        }

        break;
      case actionTypes.SET_DRAGGING:
        for (let i = 0; i < draft.elements.length; i += 1) {
          if (draft.elements[i].id === action.id) {
            draft.elements[i].isDragging = true;
            break;
          }
        }

        break;
    }
  });

export default blocksReducer;
