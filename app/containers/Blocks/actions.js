/*
 *
 * Blocks actions
 *
 */

import { DEFAULT_ACTION, CHANGE_POSITION } from './constants';

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
