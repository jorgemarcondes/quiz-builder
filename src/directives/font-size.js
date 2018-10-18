import Vue from 'vue';

Vue.directive('font-size', (el, {value}) => {
  if (!value) return el.style.fontSize = '21px';
  let fontSize = 12;

  if (value.length < 34) {
    fontSize += 9
  } else if (value.length < 55) {
    fontSize += 6
  } else if (value.length < 100) {
    fontSize += 3
  }

  el.style.fontSize = fontSize+'px';
});