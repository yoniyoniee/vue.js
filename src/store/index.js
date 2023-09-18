import { createStore } from 'vuex';
// eslint-disable-next-line import/extensions
import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
  state: {
    foo: 'root-foo',
  }, // root state
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    // foo(state) {
    //   return `root-getter/${state.foo}`;
    // },
  },
});
