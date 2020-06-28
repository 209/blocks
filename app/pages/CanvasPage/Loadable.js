/**
 * Asynchronously loads the component for CanvasPage
 */

import loadable from 'utils/loadable';

export default loadable(() => import('pages/CanvasPage/index'));
