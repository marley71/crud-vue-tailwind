<template>
    <button v-if="controlType=='button'" type="button" v-show="_visible" :title="title | translate" :class="css"
            v-on:click="_execute" v-bind:disabled="_disabled">
        <i v-show="icon" :class="icon"></i>
        <span>{{ text | translate }}</span>
    </button>
    <a v-else :target="target" :href="href" v-show="_visible" :title="title | translate" :class="css"
       :disabled="_disabled">
        <i v-show="icon" :class="icon"></i>
        <span>{{ text | translate }}</span>
    </a>
</template>

<script>
import aBase from './aBase'
import {aOrderMixin} from 'crud-vue-core'

export default {
  name: 'a-order',
  extends: aBase,
  mixins: [aOrderMixin]
}

</script>

<style scoped>

</style>
