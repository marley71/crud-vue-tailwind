<template>
    <span>
        <template v-for="key in domainValuesOrder">
            <span v-if="statusType=='text'"  :key="key" v-show="key==value" >{{ domainValues[key] }}</span>
            <i v-if="statusType=='icon'" :class="domainValues[key]" :key="key" v-show="key==value"></i>
        </template>
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
