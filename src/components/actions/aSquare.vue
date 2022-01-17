<template>
  <button
    class="inline-block text-center text-sm leading-1 px-2 py-1
                border border-gray-300
                shadow-md"
    v-if="controlType=='button'" type="button" v-show="_visible"
    :title="title | translate" :class="css" v-on:click="_execute" v-bind:disabled="_disabled">
    <i class="" v-show="icon" :class="icon"></i>
    <span>{{ text | translate }}</span>
  </button>
  <a v-else
     class="inline-block text-center text-sm leading-1 px-2 py-1
                border border-gray-300
                shadow-md" :target="target" :href="href" v-show="_visible"
     :title="title | translate" :class="css" :disabled="_disabled">
    <i class="" v-show="icon" :class="icon"></i>
    <span>{{ text | translate }}</span>
  </a>
</template>

<script>
import aBase from './aBase'
import { crud, aBaseMixin } from 'crud-vue-core'


crud.conf['a-square'] = {
  componentName: 'a-square',
  confParent: 'c-component',
  type: null,
  visible: true,
  enabled: true,
  title: '',
  css: 'btn-sm mr-1 btn-success bg-success-soft',
  icon: '',
  text: '',
  controlType: 'button',
  href: '',
  target: '_self',
  needSelection: false,
  view: null,
  alertTime: null // eventuale timer per la visualizzazione di un messaggio in alert 0 chiusura manuale, null valore default , n numero millisecondi che il messaggio deve rimanere

}

export default {
  name: 'a-square',
  extends: aBase,
  mixins: [aBaseMixin]
}

</script>

<style scoped>

</style>
