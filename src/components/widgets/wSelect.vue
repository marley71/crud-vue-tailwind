<template>
  <select class="form-select px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" v-bind:name="getFieldName()" v-model="value" v-bind:c-marker="cMarker"
          v-on:change="change">
    <option v-for="key in domainValuesOrder" :value="key" :key="key"
    >{{ domainValues[key] }}
    </option>
  </select>
</template>

<script>
import wBase from './wBase'
import { crud, choiceMixin, wSelectMixin } from 'crud-vue-core'

crud.conf['w-select'].defaultValue = -1

export default {
  name: 'w-select',
  extends: wBase,
  mixins: [choiceMixin, wSelectMixin]
}
</script>

<style scoped>

</style>
