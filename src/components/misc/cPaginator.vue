<template>
    <div v-if="last_page" class="inline-flex shadow-sm crud-paginator mr-2 ml-2 overflow-hidden " role="group">
        <button v-if="(parseInt(current_page) > 1)" v-on:click="firstPage()" type="button" class="crud-paginator-element">
            <i class="fa-solid fa-backward-step"></i>
        </button>
        <button v-if="(current_page - 2) > 0" v-on:click="setPage(current_page - 2)" type="button" class="crud-paginator-element">
            {{ current_page - 2 }}
        </button>
        <button v-if="(current_page - 1) > 0" v-on:click="setPage(current_page - 1)" type="button" class="crud-paginator-element">
            {{ current_page - 1 }}
        </button>
        <div class="crud-paginator-element text-center p-0 pr-1 pl-1">
            <div class="text-xs">pag. {{ current_page }} / {{ last_page }}</div>
            <div class="text-xxs pt-0">({{ from + '-' + to + " di " + total }} elementi)</div>
        </div>
        <button v-if="(current_page + 1) <=  last_page" v-on:click="setPage(current_page + 1)" type="button" class="crud-paginator-element">
            {{ current_page + 1 }}
        </button>
        <button v-if="(current_page + 2) <=  last_page" v-on:click="setPage(current_page + 2)" type="button" class="crud-paginator-element">
            {{ current_page + 2 }}
        </button>
        <button v-if="(parseInt(current_page) < last_page)" v-on:click="lastPage()" type="button" class="crud-paginator-element">
            <i class="fa fa-forward-step"></i>
        </button>
    </div>
</template>

<script>
import cComponent from './cComponent'
import {cPaginatorMixin} from 'crud-vue-core'

export default {
  name: 'c-paginator',
  extends: cComponent,
  mixins: [cPaginatorMixin]
}

</script>

<style scoped>
    /*.crud-paginator-element {*/
    /*    @apply py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white*/
    /*}*/
    /*.crud-paginator:first-child {*/
    /*    @apply rounded-l-lg border*/
    /*}*/
    /*.crud-paginator:last-child {*/
    /*    @apply  rounded-r-lg border*/
    /*}*/
    /*.crud-paginator:not(:first-child):not(:last-child) {*/
    /*    @apply border-t border-b border-r*/
    /*}*/
</style>
