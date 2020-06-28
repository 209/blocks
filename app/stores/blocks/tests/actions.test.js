import { defaultAction, changePosition } from 'stores/blocks/actions';
import { DEFAULT_ACTION, CHANGE_POSITION } from 'stores/blocks/constants';

describe('Blocks actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
    it('has a type of CHANGE_POSITION', () => {
      const expected = {
        type: CHANGE_POSITION,
      };
      expect(changePosition()).toEqual(expected);
    });
  });
});
