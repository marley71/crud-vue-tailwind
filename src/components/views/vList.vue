<template>
    <!-- start:row -->
    <div class="w-100 border border-brand-100 rounded" v-if="template === 'default'">
        <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
        <div v-else>
            <div class="portlet-header border-bottom" :class="headerClass">
                <span v-show="viewTitle">{{ viewTitle }}</span>
                <!-- options and pagination -->
                <div class="grid grid-cols-2">
                    <div v-if="paginator" class="col-12 col-md-6 mt-2 mb-2">
                        <c-paginator v-if="widgets.length > 0" v-show="pagination" :c-conf="pagination"></c-paginator>
                    </div>
                    <div class="mt-2 mb-2" v-show="collectionActionsName.length">
                        <template v-for="name in collectionActionsName">
                            <component v-bind:is="name" v-bind:c-conf="collectionActions[name]" :key="name"></component>
                        </template>
                    </div>

                </div>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="align-middle inline-block min-w-full">
                        <div class="shadow overflow-hidden border-b border-brand-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-brand-200">
                                <thead class="bg-brand-50">
                                <tr v-if="widgets.length > 0">
                                    <th v-if="needSelection" scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">
                                        <input c-row-check-all v-on:change="selectAllRows" class="checkall" type="checkbox">
                                    </th>
                                    <th v-show="recordActionsName.length"></th>
                                    <template v-for="key in keys">
                                        <th v-if="!isHiddenField(key)"
                                            class="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider"
                                            :class="key" :key="key">
                                            <a-order v-if="orderFields[key]" :c-conf="getOrderConf(key)"></a-order>
                                            <span style="cursor:default"
                                                  class="mr-1 text-brand-500 font-weight-normal fs--14"
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
                                    <th class="text-brand-500 w--50">
                                        {{ "app.nessun-elemento" | translate }}
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-brand-200">
                                <template v-for="(row,index) in widgets">
                                    <tr class="hover:bg-brand-50" :key="index">
                                        <td v-if="needSelection" class="px-6 py-4 whitespace-nowrap">
                                            <input c-row-check type="checkbox" :value="value[index][primaryKey]">
                                        </td>
                                        <td v-show="recordActionsName.length" class="px-6 py-4 whitespace-nowrap">
                                            <div class="inline-flex rounded-md overflow-hidden shadow-sm border-gray-500" role="group">
                                                <template v-for="(action,name) in recordActions[index]">
                                                    <v-action :c-action="action" :key="name"></v-action>
                                                </template>
                                            </div>

                                        </td>
                                        <template v-for="(widget, key) in row">
                                            <td v-if="!isHiddenField(key)" :class="key"
                                                class="px-6 py-4 whitespace-nowrap"
                                                :key="key">
                                                <v-widget :c-widget="widget" :key="key"></v-widget>
                                            </td>
                                        </template>

                                        <template v-for="(widget, key) in row">
                                            <v-widget v-if="isHiddenField(key)" :c-widget="widget" :key="key"></v-widget>
                                        </template>
                                    </tr>
                                    <tr :id="'ghost_container' +  index" class="hidden" :key="'ghost_'+index">
                                        <td :colspan="keys.length+3"></td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div v-else-if="template === 'inner'">
        <div class="container row border-bottom default-divider">
            <!-- start:col: -->
            <div class="col-12 mb-1 p-0">

                <!-- start:portlet -->
                <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
                <div v-else class="portlet">
                    <div class="portlet-body border-bottom p-1 m-1" :class="headerClass">
                        <span v-show="viewTitle">{{ viewTitle }}</span>
                        <!-- options and pagination -->
                        <div class="row justify-content-end " v-show="collectionActionsName.length">

                            <div class="col-12 col-md-6 mt-0 mb-0">
                                <template v-for="name in collectionActionsName">
                                    <component v-bind:is="name" v-bind:c-conf="collectionActions[name]"
                                               :key="name"></component>
                                </template>
                            </div>

                        </div>
                        <!-- /options and pagination -->

                        <!-- header -->
                        <!-- portlet : header -->
                        <!-- /portlet : header -->

                        <!-- /header -->
                        <div class="container-fluid py-1 px-0">

                            <div class="table-responsive" style="white-space:nowrap;" :class="modelName">
                                <table class="table table-framed table-striped table-bordered">
                                    <thead>
                                    <tr v-if="widgets.length > 0">
                                        <th v-if="needSelection" class="text-brand-500 w--50">
                                            <label class="form-checkbox form-checkbox-primary float-start">
                                                <input c-row-check-all v-on:change="selectAllRows"
                                                       class="checkall" type="checkbox">
                                                <i></i>
                                            </label>
                                        </th>
                                        <th v-show="recordActionsName.length"></th>
                                        <template v-for="key in keys">
                                            <th v-if="!isHiddenField(key)"
                                                class="text-brand-500 font-weight-normal fs--14" :class="key" :key="key">
                                    <span style="cursor:default"
                                          class="mr-1 text-brand-500 font-weight-normal fs--14"
                                    >{{ widgets[0][key].label }}</span>
                                                <a v-if="hasHelp(key)"
                                                   type="button"
                                                   class=""
                                                   data-trigger="focus"
                                                   data-container="body"
                                                   data-toggle="popover"
                                                   data-placement="top"
                                                   :data-content="hasHelp(key)">
                                                    <i class="fi fi-round-question-full text-red-700"></i>
                                                </a>

                                            </th>
                                        </template>

                                    </tr>
                                    <tr v-if="widgets.length == 0">
                                        <th class="text-brand-500 w--50"> <!-- v-show="recordActionsName.length" -->
                                            {{ "app.nessun-elemento" | translate }}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <!-- widgets  -->
                                    <template v-for="(row,index) in widgets">
                                        <tr :key="index">
                                            <th v-if="needSelection">

                                                <label
                                                    class="form-checkbox form-checkbox-primary float-start">
                                                    <input c-row-check type="checkbox">
                                                    <i></i>
                                                </label>

                                            </th>
                                            <th v-show="recordActionsName.length">
                                                <div class="btn-group" role="group">
                                                    <template v-for="(action,name) in recordActions[index]">
                                                        <v-action :c-action="action" :key="name"></v-action>
                                                    </template>
                                                </div>

                                            </th>
                                            <template v-for="(widget, key) in row">
                                                <td v-if="!isHiddenField(key)" :class="key"
                                                    :key="key">
                                                    <v-widget :c-widget="widget" :key="key"></v-widget>
                                                </td>
                                            </template>

                                            <template v-for="(widget, key) in row">
                                                <v-widget v-if="isHiddenField(key)" :c-widget="widget"
                                                          :key="key"></v-widget>
                                            </template>
                                        </tr>
                                    </template>
                                    </tbody>

                                </table>
                            </div>

                        </div>
                        <!-- end:portlet -->
                    </div>
                </div>

            </div>
            <!-- end:col: -->

        </div>
    </div>

</template>

<script>
import vCollection from './vCollection'
import {vListMixin} from 'crud-vue-core'

export default {
    name: 'v-list',
    extends: vCollection,
    mixins: [vListMixin],
    methods: {
        _dynamicData(conf) {
            if (!conf.langContext && conf.langContext !== null) {
                conf.langContext = conf.modelName ? conf.modelName : this.cModel
                conf.langContext += '.fields'
            }
            return conf
        },
        hasHelp(key) {
            var that = this
            if (this.fieldsConfig[key]) {
                return this.fieldsConfig[key].helpText || false
            }
        },
        getGhostContainer(index) {
            return this.jQe('#ghost_container' + index + ' td')
        },
        showGhostContainer(index) {
            this.jQe('#ghost_container' + index).removeClass('hidden')
        },
        hideGhostContainer(index) {
            this.jQe('#ghost_container' + index).addClass('hidden')
        },
        isVisibleGhostContainer(index) {
            return !this.jQe('#ghost_container' + index).hasClass('hidden')
        }
    }
}
</script>

<style scoped>

</style>
