<template>
  <div class="v-search" v-if="(widgets && Object.keys(widgets).length > 0)">
    <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
    <form class="form-search " :class="'form-'+modelName" v-else>
      <!-- campi nascosti -->
        <template v-for="(widget, key) in widgets">
            <v-widget  v-if="isHiddenField(key)" :c-widget="widget" :key="key"></v-widget>
        </template>

        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div v-for="(widget, key) in widgets" :key="key" :class="key.replace('|','-')" >
              <v-widget :c-widget="widget" v-if="!isHiddenField(key)" :key="key"></v-widget>
            </div>
          </div>
        </div>
        <div v-if="advancedFields.length > 0" class="w-100">
            <a class="cursor-pointer text-primary" v-on:click="toggleAdvanced()">
                <span v-show="!advancedVisible"><i class="fa fa-angle-down"></i></span>
                <span v-show="advancedVisible"><i class="fa fa-angle-up"></i></span>
                <span v-show="!advancedVisible">{{'app.mostra-ricerca-avanzata' | translate}}</span>
                <span v-show="advancedVisible">{{'app.nascondi-ricerca-avanzata' | translate}}</span>
            </a>
        </div>
        <div v-if="advancedFields.length > 0" class="grid grid-cols-2 sm:grid-cols-1">
          <div v-show="advancedVisible" class="row pt--4">
            <template v-for="(widget, key) in advancedWidgets" >
              <v-widget :c-widget="widget" :key="key"></v-widget>
            </template>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6" :class="buttonsClass">
          <div class="p-3" v-show="actions.length">
            <template v-for="(action,name) in actionsConf">
              <v-action :c-action="action" :key="name"></v-action>
            </template>
          </div>
        </div>
      </div>
    </form>
    <div class="h--10 border-bottom border-danger">
      &nbsp;
    </div>
  </div>
</template>

<script>
import vRecord from './vRecord'
import {crud, vSearchMixin} from 'crud-vue-core'

crud.conf['v-search'].buttonsClass = 'text-left'
crud.conf['v-search'].advancedVisible = false

export default {
  name: 'v-search',
  extends: vRecord,
  mixins: [vSearchMixin],
  props: {
    cType: {
      default: 'search'
    }
  },
  methods: {
    toggleAdvanced () {
      this.advancedVisible = !this.advancedVisible
    }
  }
}
</script>

<style scoped>

</style>
