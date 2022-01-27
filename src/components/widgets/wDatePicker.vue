<template>
  <div class="flex flex-row">
    <input class="block w-full rounded appearance-none focus:outline-none bg-transparent" c-picker >
    <input type="hidden" v-model="value" v-bind:name="getFieldName()" v-on:change="change">
    <button class="border border-gray-50 rounded-r px-3" v-if="buttonClear" type="button" v-on:click="reset()">
        <i class="fa fa-times"></i>
    </button>
  </div>
</template>

<script>

import wBase from './wBase'
import {wDatePickerMixin} from 'crud-vue-core'

/* eslint no-undef: "off" */

export default {
  name: 'w-date-picker',
  extends: wBase,
  mixins: [wDatePickerMixin]
}
</script>

<style scoped>
.close-icon {
  border:1px solid transparent;
  background-color: transparent;
  display: inline-block;
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
}

.close-icon:after {
  content: "X";
  display: block;
  width: 15px;
  height: 15px;
  position: absolute;
  background-color: #AAAAAA;
  z-index:1;
  right: 35px;
  top: 0;
  bottom: 1px;
  margin: auto;
  padding: 2px;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-weight: normal;
  font-size: 12px;
  box-shadow: 0 0 2px #000000;
  cursor: pointer;
  padding-bottom: 3px;
  padding-left: 1px;
}
</style>
