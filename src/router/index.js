import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';

export default createRouter({
  history: createWebHashHistory(), // 해시태그 라우팅 또는 HTML5 라우팅 사용 여부에 영향을 준다.
  routes: [{
    path: '/', // 해당 경로로 가서 component 표시
    name: 'Home', // route에 부여하는 이름. 코드의 다양한 위치에서 사용 가능
    component: HomePage,
  }, {
    path: '/build', // 해당 경로로 가서 component 표시
    name: 'Build', // route에 부여하는 이름. 코드의 다양한 위치에서 사용 가능
    component: RobotBuilder,
  }],
});
// 이 파일에서 새 라우터를 내보낼거다
// createRouter 함수에 새 객체 전달하고 있다.
// 이건 모든 경로를 정의할 메타데이터 객체이다.
