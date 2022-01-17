<template>
  <input :placeholder="label" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" :type="inputType" v-model="value" :name="getFieldName()"
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
