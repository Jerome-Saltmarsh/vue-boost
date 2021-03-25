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

