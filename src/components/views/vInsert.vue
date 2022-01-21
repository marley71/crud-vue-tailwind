<template>
  <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
  <div v-else>
    <div v-html="beforeForm"></div>
    <form enctype="multipart/form-data">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
      <!-- campi nascosti -->
                <template v-for="(widget, key) in widgets" >
                <v-widget v-if="isHiddenField(key)" :c-widget="widget" :key="key"></v-widget>
                </template>
                <div class="row">
                  <template v-for="(widget, key) in widgets">
                      <v-widget  v-if="!isHiddenField(key)" :c-widget="widget" :key="key"></v-widget>
                  </template>

                </div>
            </div>
        </div>
    </form>
    <div v-html="beforeActions"></div>
    <div class="p-2 bg-gray-50" v-show="actions.length">
      <template v-for="(action,name) in actionsConf">
        <v-action :c-action="action" :key="name"></v-action>
      </template>
    </div>
  </div>
</template>

<script>
import vRecord from './vRecord'
import {vInsertMixin} from 'crud-vue-core'


export default {
  name: 'v-insert',
  extends: vRecord,
  mixins: [vInsertMixin],
  props: {
    cType: {
      default: 'insert'
    }
  }
}
</script>

<style scoped>

</style>
