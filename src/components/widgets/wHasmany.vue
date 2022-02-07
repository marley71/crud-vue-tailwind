<template>
  <div class="container shadow " :class="bgClass">
    <div class="portlet-header border-bottom p-1 " >
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
        <div class="w-full mt-2" v-for="(item,index) in confViews"
             v-show="showItem(item.cRef)"
             :key="index">
          <div class="p-1
                     shadow-md shadow-lg-hover transition-all-ease-250 transition-hover-top h-60 border-danger-300">
            <div class="card-header bg-white">
              <button v-on:click="deleteItem(item.cRef)" class="outline outline-danger-400 rounded text-danger-400 px-2"
                      type="button" title="Cancella elemento"><i class="fa fa-trash"></i>
              </button>
            </div>
            <div class="p-1">
              <v-hasmany v-bind:c-model="name" v-bind:c-conf="item"></v-hasmany>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import wBase from './wBase'
import {crud, wHasmanyMixin} from 'crud-vue-core'

crud.conf['w-hasmany'].bgClass = 'bg-white'

export default {
  name: 'w-hasmany',
  extends: wBase,
  mixins: [wHasmanyMixin]
}
</script>

<style scoped>

</style>
