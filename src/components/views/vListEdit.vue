<template>
    <!-- start:row -->
    <div class="w-100">
        <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
        <div v-else>
            <div class="portlet-header border-bottom" :class="headerClass">
                <span v-show="viewTitle">{{ viewTitle }}</span>
                <!-- options and pagination -->
                <div class="row justify-content-end">

                    <div v-if="paginator" class="col-12 col-md-6 mt-1 mb-2">
                        <!-- v-bind:c-route-conf="routeConf" -->
                        <c-paginator v-if="widgets.length > 0" v-show="pagination"
                                     :c-conf="pagination"></c-paginator>
                    </div>
                    <div class="col-12 col-md-6 mt-1 mb-2" v-show="collectionActionsName.length">
                        <template v-for="name in collectionActionsName">
                            <component v-bind:is="name" v-bind:c-conf="collectionActions[name]" :key="name"></component>
                        </template>
                    </div>

                </div>
                <!-- /options and pagination -->

                <!-- header -->
                <!-- portlet : header -->
                <!-- /portlet : header -->

                <!-- /header -->
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="align-middle inline-block min-w-full">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                <tr v-if="widgets.length > 0">
                                    <th v-if="needSelection" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <input c-row-check-all v-on:change="selectAllRows" class="checkall" type="checkbox">
                                    </th>
                                    <th v-show="recordActionsName.length"></th>
                                    <template v-for="key in keys">
                                        <th v-if="!isHiddenField(key)"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            :class="key" :key="key">
                                            <a-order v-if="orderFields[key]" :c-conf="getOrderConf(key)"></a-order>
                                            <span style="cursor:default"
                                                  class="mr-1 text-gray-500 font-weight-normal fs--14"
                                                  v-else>{{ widgets[0][key].label }}</span>
                                            <button v-if="hasHelp(key)"
                                                    type="button"
                                                    class="btn-xs btn-squared btn-light"
                                                    data-trigger="focus"
                                                    data-container="body"
                                                    data-toggle="popover"
                                                    data-placement="top"
                                                    :data-content="hasHelp(key)">
                                                <i class="fi fi-round-question-full text-red-700"></i>
                                            </button>

                                        </th>
                                    </template>

                                </tr>
                                <tr v-if="widgets.length == 0">
                                    <th v-show="recordActionsName.length" class="text-gray-500 w--50">
                                        {{ "app.nessun-elemento" | translate }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                <template v-for="(row,index) in widgets">
                                    <tr :key="index">
                                        <td v-if="needSelection" class="px-6 py-4 whitespace-nowrap">
                                            <input c-row-check type="checkbox" :value="value[index][primaryKey]">
                                        </td>
                                        <td v-show="recordActionsName.length" class="px-6 py-4 whitespace-nowrap">
                                            <div class="btn-group" role="group">
                                                <template v-for="(action,name) in recordActions[index]">
                                                    <v-action :c-action="action" :key="name"></v-action>
                                                </template>
                                            </div>

                                        </td>
                                        <template v-for="(widget, key) in row">
                                            <td v-if="!isHiddenField(key)" :class="key"
                                                class="px-6 py-4 whitespace-nowrap"
                                                :key="key">
                                                <v-widget v-show="!editMode[index]" :c-widget="widget"
                                                          :key="key"></v-widget>
                                                <v-widget v-show="editMode[index]" :c-widget="widgetsEdit[index][key]"
                                                          :key="'e'+key"></v-widget>
                                            </td>
                                        </template>

                                        <template v-for="(widget, key) in row">
                                            <v-widget v-if="isHiddenField(key)" :c-widget="widget" :key="key"></v-widget>
                                        </template>
                                    </tr>
                                </template>
                                </tbody>

                                <tfoot v-if="hasFooter">
                                <tr v-if="widgets.length > 0">
                                    <th v-if="needSelection" class="text-gray-500 w--50">

                                    </th>
                                    <th v-show="recordActionsName.length"></th>
                                    <template v-for="key in keys">
                                        <th v-if="!isHiddenField(key)" :key="key"
                                            class="text-gray-500 font-weight-normal fs--14">
                                            <action-order v-if="orderFields[key]"
                                                          v-bind:c-conf="getOrderConf(key)" :key="key"></action-order>
                                            <span style="cursor:default"
                                                  class="btn btn-default btn-xs mr-1 text-gray-500 font-weight-normal fs--14"
                                                  v-else>{{ widgets[0][key].label }}</span>
                                            <button v-if="hasHelp(key)"
                                                    type="button"
                                                    class="btn-xs btn-squared btn-light"
                                                    data-trigger="focus"
                                                    data-container="body"
                                                    data-toggle="popover"
                                                    data-placement="top"
                                                    :data-content="hasHelp(key)">
                                                <i class="fi fi-round-question-full text-red-700"></i>
                                            </button>

                                        </th>
                                    </template>

                                </tr>
                                </tfoot>

                            </table>
                        </div>
                    </div>

                </div>
                <!-- end:portlet -->
            </div>
        </div>
    </div>
</template>

<script>
import vList from './vList'
import {vListEditMixin} from 'crud-vue-core'

export default {
    name: 'v-list-edit',
    extends: vList,
    mixins: [vListEditMixin]
}
</script>

<style scoped>
/*div[role=group] > button:first-child {*/
/*    !*border: 2px solid red;*!*/
/*    border-top-left-radius: 15px;*/
/*    border-bottom-left-radius: 15px;*/
/*}*/
/*div[role=group] > button:last-child {*/
/*    !*border: 2px solid red;*!*/
/*    border-top-right-radius: 15px;*/
/*    border-bottom-right-radius: 15px;*/
/*    border-left: none;*/
/*}*/
/*div[role=group] > button:not(:first-child):not(:last-child) {*/
/*    !*border: 2px solid red;*!*/
/*    border-left: none;*/
/*}*/
</style>
