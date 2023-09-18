<template>
  <div>
    Root Foo: {{rootFoo}}<br/>
    Robots Foo: {{robotsFoo}} <br/>
    Users Foo: {{usersFoo}} <br/>
    <br/>
    Root Getters Foo: {{rootGettersFoo}}<br/>
    Robots Getters Foo: {{robotsGettersFoo}} <br/>
    Users Getters Foo: {{usersGettersFoo}} <br/>
  </div>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Home'}">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="face/" >
            Build-a-bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Build'}">
            Build
          </router-link>
        </li>
        <li class="nav-item cart">
          <router-link class="nav-link" to="/cart" exact>
            Cart
          </router-link>
          <div class="cart-items">
            {{cart.length}}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState({ usersFoo: 'foo', rootFoo: (state) => state.users.foo }),
    ...mapState('robots', { robotsFoo: 'foo' }), // namepsace 모듈에서만 사용할 수 있는 방법이다.
    // 모듈 자체가 namespace 지정되어있지 않더라도 항상 모듈에서 네임스페이스로 지정된다.
    // 루트 state에 상속되지 않는다.
    rootGettersFoo() {
      return this.$store.getters.foo;
    },
    robotsGettersFoo() {
      return this.$store.getters['robots/foo'];
    },
    usersGettersFoo() {
      return this.$store.getters['users/foo'];
    },
    // 사용자 모듈과 루트 모듈의 저장소가 동일한 네임스페이스를 공유한다.
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
  body {
    background: linear-gradient(to bottom, #555, #999);
    background-attachment: fixed;
  }
</style>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
main {
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1080px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
} /* 내장되어 있는 라우터 링크 활성 클래스: 활성화 되어있는 링크만 흰색으로 변경 */
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
