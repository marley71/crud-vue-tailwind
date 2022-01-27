<template>
    <div class="flex">
        <div v-if="selectedLabel" class="input-group-prepend">
            <span class="input-group-text">{{ label }}</span>
        </div>
        <template v-if="clearButton">
            <input type="text" c-autocomplete class="rounded-l border-gray-100">
            <button type="button" class="border border-gray-50 rounded-r px-3" v-on:click="clear">
                <i class="fa fa-times"></i>
            </button>
        </template>
        <template v-else>
            <input type="text" c-autocomplete class="rounded border-gray-100">
        </template>

        <input v-model="value" :name="getFieldName()" type="hidden">
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
