<template>
  <input :placeholder="label" class="block w-full rounded appearance-none focus:outline-none bg-transparent" :type="inputType" v-model="value" :name="getFieldName()"
         v-on:change="change">
</template>

<script>

import wBase from './wBase'
import {wInputMixin} from 'crud-vue-core'

export default {
  name: 'w-input',
  extends: wBase,
  mixins: [wInputMixin]
}
</script>

<style scoped>

</style>
