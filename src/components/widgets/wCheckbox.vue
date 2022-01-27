<template>
    <div class="w-full">
        <label v-for="key in domainValuesOrder" :key="key" class="inline-flex items-center mt-3 ml-2">
            <input :name="getFieldName()" type="checkbox" class="form-checkbox h-5 w-5 text-brand-400"
                   :value="key" v-model="value" v-on:change="change">
            <span class="ml-2 text-gray-700" v-html="domainValues[key]"></span>
        </label>
    </div>





<!--    <div-->
<!--    class="col-12 mb-2 form-label-group form-control bw&#45;&#45;1 border-solid border-gray-400 p&#45;&#45;6 rounded h-100">-->
<!--      <label v-for="key in domainValuesOrder" :key="key" class="form-selector mt-3">-->
<!--        <input class="form-checkbox" v-bind:name="getFieldName()" type="checkbox" :value="key"-->
<!--               v-model="value"-->
<!--               v-on:change="change">-->
<!--        <span v-html="domainValues[key]"></span>-->
<!--      </label>-->
<!--  </div>-->
</template>

<script>
import wBase from './wBase'
import {choiceMixin, wCheckboxMixin} from 'crud-vue-core'

export default {
  name: 'w-checkbox',
  extends: wBase,
  mixins: [choiceMixin, wCheckboxMixin]
}
</script>

<style scoped>

</style>
