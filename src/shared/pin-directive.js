export default {
  beforeMount(element) {
    // eslint-disable-next-line no-param-reassign
    element.style.positon = 'relative';
    // eslint-disable-next-line no-param-reassign
    element.style.bottom = '5px';
    // eslint-disable-next-line no-param-reassign
    element.style.top = '5px';
  },
};

// beforeMount Hook
/// 지시문 객체 함수
///  상위 구성 요소에 마운트될 때 호출된다.
/// element => PartSelector.vue에 있는 <span v-pin> 부분 전체!!
