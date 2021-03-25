# vuex-render-dispatcher
Simple directives which make it easy to render state and dispatch vuex actions from your templates without needing mappers.

https://vuex.vuejs.org/#what-is-a-state-management-pattern

## Dispatch
my-template.vue
```
<template>
  <div v-render="'username'"/>
</template>

```

store.ts
```
export const userStore = {
  state: {
    username: 'hello world'
  }
}
```

