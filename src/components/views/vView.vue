<template>
    <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
    <div v-else class="border border-brand-100">
        <slot card-title><h4 v-show="viewTitle">{{ viewTitle }}</h4></slot>
        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <template v-for="(widget, key) in widgets">
                    <v-widget :c-widget="widget" v-if="!isHiddenField(key)" :key="key"></v-widget>
                </template>
            </div>
        </div>
        <!-- campi nascosti -->
        <template v-for="(widget, key) in widgets">
            <v-widget v-if="isHiddenField(key)" :c-widget="widget" :key="key"></v-widget>
        </template>
        <div class="p-2 bg-brand-50" v-if="actions.length">
            <template v-for="(action,name) in actionsConf">
                <v-action :c-action="action" :key="name"></v-action>
            </template>
        </div>
    </div>
</template>

<script>
import vRecord from './vRecord'
import {vViewMixin} from 'crud-vue-core'

export default {
  name: 'v-view',
  extends: vRecord,
  mixins: [vViewMixin],
  props: {
    cType: {
      default: 'view'
    }
  }
}
</script>

<style scoped>

</style>
