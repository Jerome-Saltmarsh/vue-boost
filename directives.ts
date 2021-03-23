import Vue from 'vue';

export function installDirectives() {
  Vue.directive('dispatch', {
    bind: function (el, binding, vnode) {
      el.addEventListener('click', async () => {
        if (binding.arg) {
          await vnode.context.$store.dispatch(binding.arg, binding.value);
        } else {
          await vnode.context.$store.dispatch(binding.value);
        }
      });
    },
  });

  Vue.directive('render', {
    bind: function (el, binding, vnode) {
      el.innerText = vnode.context.$store.getters[binding.value] ?? vnode.context.$store.state[binding.value];
    },
    update: function (el, binding, vnode) {
      el.innerText = vnode.context.$store.getters[binding.value] ?? vnode.context.$store.state[binding.value];
    },
  });
}
