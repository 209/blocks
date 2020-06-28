/*
 *
 * Blocks actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_POSITION,
  SET_DRAGGING,
} from 'stores/blocks/constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changePosition(id, position) {
  return {
    type: CHANGE_POSITION,
    id,
    position,
  };
}

export function setDragging(id) {
  return {
    type: SET_DRAGGING,
    id,
  };
}
