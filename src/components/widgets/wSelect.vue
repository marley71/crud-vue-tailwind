<template>
  <select class="block w-full rounded appearance-none focus:outline-none bg-transparent" v-bind:name="getFieldName()" v-model="value" v-bind:c-marker="cMarker"
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
