import { createStore } from 'vuex';
// eslint-disable-next-line import/extensions
import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
