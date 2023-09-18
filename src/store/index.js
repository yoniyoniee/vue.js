import { createStore } from 'vuex';
// eslint-disable-next-line import/extensions
import robotsModule from './modules/robots';

export default createStore({
  modules: {
    robots: robotsModule,
  },
});
