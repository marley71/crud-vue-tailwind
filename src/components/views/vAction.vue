<template>
    <component :is="conf.componentName" :c-conf="conf"></component>
</template>

<script>
import { vActionMixin } from 'crud-vue-core'

export default {
  name: 'v-action',
  props: ['cAction'],
  mixins: [vActionMixin]
}
</script>

<style scoped>

</style>
