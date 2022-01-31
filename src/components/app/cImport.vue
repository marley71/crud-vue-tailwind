<template>
  <div>
    <div class="alert alert-info" role="alert">
      <h4 class="alert-heading">Importazione File</h4>
      <p>Importazione modello <strong>{{providerName | translate}}</strong> da file
        {{(confUpload.extensions || []).join(',')}}</p>
      <hr>
      <div class="mb-0">
        <p>L'importazione avverrà in due fasi:</p>
        <ul>
          <li>la lettura del file e check degli errori</li>
          <li>salvataggio del file importato</li>
        </ul>

      </div>
    </div>
    <div v-if="uploadEnabled && status!=='loading'" class="panel panel-default">
      <div>Seleziona file da importare</div>
      <!--            <w-upload-ajax :c-conf="confUpload" v-on:success="uploadsuccess"></w-upload-ajax>-->
      <div class="col-12">
        <v-edit :c-conf="_uploadConf()"></v-edit>
      </div>

    </div>
    <div v-if="progressEnabled">
<!--        <div class="relative w-full sm:w-1/2 bg-gray-200 rounded">-->
<!--            <div style="width: 60%" class="absolute top-0 h-4 rounded shim-green"></div>-->
<!--        </div>-->


      <div class="progress h--40 mb-3">
          <div class="w-full h-6 bg-brand-200 rounded-full dark:bg-brand-700">
              <div class="h-6 bg-brand-600 rounded-full dark:bg-brand-300 text-center text-white shim-green" style="width: 100%">
                  <span v-if="status==='loading'">Lettura file e check degli errori ...&nbsp;</span>
                  <span v-if="status==='saving'">Salvataggio del file importato ...</span>
              </div>
          </div>
      </div>
    </div>
    <div v-if="saveEnabled && status!=='saving'">
      <div>File caricato e controllato</div>
      <v-edit :c-conf="_saveConf()"></v-edit>
      <v-list :c-conf="_listConf()" inline-template >
          <div class="row">
              <!-- start:col: -->
              <div class="col-12 mb-1 p-0">

                  <!-- start:portlet -->

                  <c-loading v-if="loading" :error-msg="errorMsg"></c-loading>
                  <div v-else class="portlet">
                      <div class="portlet-header border-bottom" :class="headerClass">
                          <span v-show="viewTitle">{{viewTitle}}</span>
                          <!-- options and pagination -->
                          <div class="grid grid-cols-2">

                              <div v-if="paginator" class="col-12 col-md-6 mt-1 mb-2">
                                  <!-- v-bind:c-route-conf="routeConf" -->
                                  <c-paginator v-if="widgets.length > 0" v-show="pagination"
                                               v-bind:c-pagination="pagination" v-bind:c-route="route"></c-paginator>
                              </div>
                              <div class="col-12 col-md-6 mt-1 mb-2" v-show="collectionActionsName.length">
                                  <template v-for="name in collectionActionsName">
                                      <component v-bind:is="name" v-bind:c-conf="collectionActions[name]" :key="name"></component>
                                  </template>
                              </div>

                          </div>
                          <div v-show="multiSheets">
                              <span>Mostra sheet:</span>
                              <w-select :c-conf="selectSheetConf"></w-select>
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
                                  <div class="shadow overflow-hidden border-b border-brand-200 sm:rounded-lg">
                                  <table class="min-w-full divide-y divide-brand-200">
                                      <thead class="bg-brand-50">
                                      <tr v-if="widgets.length > 0">
                                          <th v-if="needSelection" class="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider">

                                                  <input c-row-check-all v-on:change="selectAllRows"
                                                         class="checkall" type="checkbox">
                                          </th>
                                          <th v-if="recordActionsName.length"></th>
                                          <template v-for="key in keys">
                                              <th  v-if="!isHiddenField(key)" :key="key"
                                                   class="px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider" :class="'field-'+key">
                                                  <a-order v-if="orderFields[key]"
                                                                v-bind:c-conf="getOrderConf(key)"></a-order>
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
                                          <th v-show="recordActionsName.length" class="text-brand-500 w--50">
                                              {{"app.nessun-elemento" | translate }}
                                          </th>
                                      </tr>
                                      </thead>
                                      <tbody class="bg-white divide-y divide-brand-200">
                                      <!-- product -->
                                      <tr v-for="(row,index) in widgets" :key="index">
                                          <td v-if="needSelection" class="px-6 py-4 whitespace-nowrap">
                                              <input c-row-check type="checkbox" :value="value[index][primaryKey]">
                                          </td>
                                          <td v-show="recordActionsName.length" class="px-6 py-4 whitespace-nowrap">
                                              <div class="inline-flex rounded-md overflow-hidden shadow-sm" role="group">
                                                  <template v-for="(action,name) in recordActions[index]">
                                                      <v-action :c-action="action" :key="name"></v-action>
                                                  </template>
                                              </div>

                                          </td>
                                          <template v-for="(widget, key) in row">
                                              <td  v-if="!isHiddenField(key)" :class="tdClass(index, key)" :key="key">
                                                  <v-widget :c-widget="widget" :key="key"></v-widget>
                                                  <div v-if="hasError(index,key)">
                                                      <hr>
                                                      <small>(foglio = {{value[index]['datafile_sheet']}})</small>
                                                      <small>(riga = {{value[index]['row']}})</small>
                                                  </div>
                                                  <action-base v-if="canEdit && hasError(index,key)" :c-conf="editErrorConf(index,key)"></action-base>
                                              </td>
                                          </template>

                                          <template v-for="(widget, key) in row" >
                                              <v-widget :c-widget="widget" :key="key" v-if="isHiddenField(key)"></v-widget>
                                          </template>
                                      </tr>
                                      </tbody>

                                  </table>
                                </div>
                              </div>

                          </div>
                          <!-- end:portlet -->
                      </div>
                  </div>

              </div>
              <!-- end:col: -->

          </div>
      </v-list>

    </div>
  </div>
</template>

<script>
import cComponent from '../misc/cComponent'
import {cImportMixin} from 'crud-vue-core'

export default {
  name: 'c-import',
  props: ['cProviderName'],
  extends: cComponent,
  mixins: [cImportMixin]
}

</script>

<style scoped>
.shim-green {
    position: relative;
    overflow: hidden;
}
.shim-green::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        rgba(233, 233, 233, 1) 0,
        rgba(233, 233, 233, 0.9) 50%,
        rgba(233, 233, 233, 0.8) 100%
    );
    animation: shimmer 2s ease-out infinite;
    content: "";
}
@keyframes shimmer {
    100% {
        transform: translateX(0%);
        opacity: 0;
    }
}
</style>
