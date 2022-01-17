<template>
  <span v-for="key in domainValuesOrder" :key="key" v-show="key==value">
    <span v-if="statusType=='text'">{{ domainValues[key] }}</span>
    <i v-if="statusType=='icon'" :class="domainValues[key]"></i>
  </span>
</template>

<script>
import wBase from './wBase'
import { choiceMixin, wStatusMixin } from 'crud-vue-core'


export default {
  name: 'w-status',
  extends: wBase,
  mixins: [choiceMixin, wStatusMixin]
}
</script>

<style scoped>

</style>
