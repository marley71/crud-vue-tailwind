<template>
    <!-- hover:text-bold hover:bg-gray-500 -->
    <button v-if="controlType=='button'" type="button" v-show="_visible"
            class="btn"
            :title="title | translate" :class="css" v-on:click="_execute" :disabled="_disabled">
        <i class="text-xs font-normal leading-none max-w-full flex-initial" v-show="icon" :class="icon"></i>&nbsp;
        <span class="text-xs font-normal leading-none max-w-full flex-initial">{{ text | translate }}</span>
    </button>
    <a v-else class="btn" :target="target" :href="href" v-show="_visible"
       :title="title | translate" :class="css" :disabled="_disabled">
        <i class="m-1" v-show="icon" :class="icon"></i>
        <span class="text-xs font-normal leading-none max-w-full flex-initial">{{ text | translate }}</span>
    </a>
</template>

<script>
import {aBaseMixin} from 'crud-vue-core'
import cComponent from '../misc/cComponent'

export default {
  name: 'a-base',
  extends: cComponent,
  mixins: [aBaseMixin]
}

</script>

<style scoped>
    button:hover {
        -moz-box-shadow: 0 0 10px #bbb;
        -webkit-box-shadow: 0 0 10px #bbb;
        box-shadow: 0 0 10px #bbb;
    }
</style>
