# vuex-render-dispatcher
Simple directives which make it easy to render state and dispatch vuex actions from your templates without needing mappers.

https://vuex.vuejs.org/#what-is-a-state-management-pattern

## v-render
my-template.vue
```
<template>
  <div v-render="'username'"/>
</template>

```

## v-dispatch
```
<template>
  <div v-dispatch:login='hello world 2'"/>
</template>

```

store.ts
```
export const userStore = {
  state: {
    username: 'hello world'
  },
  mutations: {
    setUsername(state, value){
      state.username = value;
    }
  },
  actions: {
    login(context, value){
      context.commit('setUsername', value);
    }
  }
}
```

directives.ts
```
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
```

