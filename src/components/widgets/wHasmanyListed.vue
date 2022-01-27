<template>
    <div class="w-full">
      <v-list :c-conf="getHasmanyConf()"></v-list>
    </div>
</template>

<script>
import wBase from './wBase'
import {wHasmanyListedMixin} from 'crud-vue-core'

export default {
  name: 'w-hasmany-listed',
  extends: wBase,
  mixins: [wHasmanyListedMixin]
}
</script>

<style scoped>

</style>
