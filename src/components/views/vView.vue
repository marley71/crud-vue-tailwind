<template>
  <div class="container-fluid">
    <slot card-title><h4 v-show="viewTitle">{{ viewTitle }}</h4></slot>
    <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
    <div class="row" v-else>
        <template v-for="(widget, key) in widgets">
            <v-widget  :c-widget="widget" v-if="!isHiddenField(key)" :key="key"></v-widget>
        </template>

    </div>
    <!-- campi nascosti -->
    <template v-for="(widget, key) in widgets" >
      <v-widget v-if="isHiddenField(key)" :c-widget="widget" :key="key"></v-widget>
    </template>
    <div v-if="actions.length">
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
