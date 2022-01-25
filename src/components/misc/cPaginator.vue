<template>
    <div v-if="last_page" class="inline-flex rounded-md shadow-sm paginatorino" role="group">
        <button v-if="(parseInt(current_page) > 1)" v-on:click="firstPage()" type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <i class="fa-solid fa-angles-left"></i>
        </button>
        <button v-if="(current_page - 2) > 0" v-on:click="setPage(current_page - 2)" type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ current_page - 2 }}
        </button>
        <button v-if="(current_page - 1) > 0" v-on:click="setPage(current_page - 1)" type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ current_page - 1 }}
        </button>
        <div class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            pag. {{ current_page }} / {{ last_page }} <span class="text-xxs">({{ from + '-' + to + " di " + total }} elementi)</span>
        </div>
        <button v-if="(current_page + 1) <=  last_page" v-on:click="setPage(current_page + 1)" type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ current_page + 1 }}
        </button>
        <button v-if="(current_page + 2) <=  last_page" v-on:click="setPage(current_page + 2)" type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            {{ current_page + 2 }}
        </button>
        <button v-if="(parseInt(current_page) < last_page)" v-on:click="lastPage()" type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <i class="fa fa-angles-right"></i>
        </button>
<!--        <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">-->
<!--            Messages-->
<!--        </button>-->

    </div>
<!--    <div v-if="last_page" class="justify-center">-->
<!--        <ul class="flex pagination pagination-pill justify-start mb-0">-->
<!--            <li v-if="(parseInt(current_page) > 1)" class="paginator-item"> &lt;!&ndash; disabled &ndash;&gt;-->
<!--                <a class="" href="javascript:void(0)" tabindex="-1" v-on:click="firstPage()">&laquo;</a>-->
<!--            </li>-->
<!--            <li v-if="(current_page - 2) > 0 " class="paginator-item">-->
<!--                <a v-on:click="setPage(current_page - 2)" class="" href="javascript:void(0)">-->
<!--                    {{ current_page - 2 }}-->
<!--                </a>-->
<!--            </li>-->
<!--            <li v-if="(current_page - 1) > 0 " class="paginator-item">-->
<!--                <a v-on:click="setPage(current_page - 1)" class="" href="javascript:void(0)">-->
<!--                    {{ current_page - 1 }}-->
<!--                </a>-->
<!--            </li>-->
<!--            <li class="paginator-item hover:bg-transparent hover:text-gray-600"><a class="">-->
<!--                pag. {{ current_page }} / {{ last_page }}-->
<!--            </a></li>-->
<!--            <li v-if="(current_page + 1) <=  last_page " class="paginator-item">-->
<!--                <a v-on:click="setPage(current_page + 1)" class="" href="javascript:void(0)">-->
<!--                    {{ current_page + 1 }}-->
<!--                </a>-->
<!--            </li>-->
<!--            <li v-if="(current_page + 2) <=  last_page " class="paginator-item">-->
<!--                <a v-on:click="setPage(current_page + 2)" class="" href="javascript:void(0)">-->
<!--                    {{ current_page + 2 }}-->
<!--                </a>-->
<!--            </li>-->
<!--            <li v-if="(parseInt(current_page) < last_page)" class="paginator-item">-->
<!--                <a class="" href="javascript:void(0)" v-on:click="lastPage()">&raquo;</a>-->
<!--            </li>-->
<!--        </ul>-->
<!--        <div class="text-center pl-3 text-xs">-->
<!--            ({{ from + '-' + to + " di " + total }} elementi)-->
<!--        </div>-->
<!--    </div>-->
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
    .paginatorino {
        background-color:red;
    }
    .paginatorino:first-child {
        @apply rounded-l-lg border
    }
    .paginatorino:last-child {
        @apply  rounded-r-md border
    }
    .paginatorino:not(:first-child):not(:last-child) {
        @apply border-t border-b border-r
    }
</style>
