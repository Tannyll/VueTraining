import Vue from 'vue'
import App from './App.vue'

Vue.directive("color", {
  //TODO:  Directive Hook Method
  bind(el, binding, vnode) {

    if (binding.modifiers['delay']) {

      setTimeout(() => {
        if (binding.arg == "background") {
          el.style.backgroundColor = binding.value;
        }
        else {
          el.style.color = binding.value;
        }
      }, 2000)

    } else {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      }
      else {
        el.style.color = binding.value;
      }
    }
  }
});

Vue.directive("renk", {

})



new Vue({
  el: '#app',
  render: h => h(App)
})
