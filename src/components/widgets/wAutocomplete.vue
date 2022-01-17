<template>
  <div class="flex">
    <div v-if="selectedLabel" class="input-group-prepend">
      <span class="input-group-text">{{ label }}</span>
    </div>
    <input type="text" c-autocomplete class="form-control">
    <button v-if="clearButton" type="button" class="outline outline-gray-500" v-on:click="clear">
        <i class="fa fa-times"></i>
    </button>
    <input v-model="value" :name="getFieldName()" type="hidden" >
  </div>
</template>

<script>
import wBase from './wBase'
import {wAutocompleteMixin} from 'crud-vue-core'

export default {
  name: 'w-autocomplete',
  extends: wBase,
  mixins: [wAutocompleteMixin]
}
</script>

<style scoped>

</style>
