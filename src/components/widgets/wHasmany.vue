<template>
  <div class="container shadow">
    <div class="portlet-header border-bottom mb-1 " :class="bgClass">
      <span class="float-left text-dark text-truncate font-weight-medium">{{ label | translate }}</span>&nbsp;
      <div class="float-right">
                <span class="d-block text-danger text-truncate font-weight-medium" v-if="outOfLimit()">
                    <!-- Limite massimo raggiunto -->
                    {{ 'app.limite-raggiunto' | translate }}
                </span>
        <button v-else v-on:click="addItem" type="button"
                class="outline outline-success-400 rounded text-success-400 px-2">
          <span>{{ 'app.aggiungi' | translate }}</span>&nbsp;
        </button>
      </div>
    </div>
    <div class="w-full">
        <div class="col-12 col-lg-6 col-xl-6 mt-2" v-for="(item,index) in confViews"
             v-show="showItem(item.cRef)"
             :key="index">
          <div class="card p-1 m-0
                     shadow-md shadow-lg-hover transition-all-ease-250 transition-hover-top h-60 border-danger bl-0 br-0 bb-0 bw--2">
            <div class="card-header bg-white">
              <button v-on:click="deleteItem(item.cRef)" class="outline outline-danger-400 rounded text-danger-400 px-2"
                      type="button" title="Cancella elemento"><i class="fa fa-trash"></i>
              </button>
            </div>
            <div class="card-body p-1">
              <v-hasmany v-bind:c-model="name" v-bind:c-conf="item"></v-hasmany>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import wBase from './wBase'
import {wHasmanyMixin} from 'crud-vue-core'

export default {
  name: 'w-hasmany',
  extends: wBase,
  mixins: [wHasmanyMixin]
}
</script>

<style scoped>

</style>
