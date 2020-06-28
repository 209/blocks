import { createSelector } from 'reselect';
import { initialState } from 'stores/blocks/reducer';

/**
 * Direct selector to the blocks state domain
 */

const selectBlocksDomain = state => state.blocks || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Blocks
 */

const makeSelectBlocks = () =>
  createSelector(
    selectBlocksDomain,
    substate => substate,
  );

const makeSelectElements = () =>
  createSelector(
    selectBlocksDomain,
    ({ elements }) => elements,
  );

const makeSelectPage = () =>
  createSelector(
    selectBlocksDomain,
    ({ page }) => page,
  );

export default makeSelectBlocks;
export { selectBlocksDomain, makeSelectElements, makeSelectPage };
