<template>
    <div
        class="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 cursor-pointer"
        :class="{ 'bg-green-500': value }"
        :aria-checked="value.toString()"
        @click="swap">
        <input type="hidden" :value="value">
        <div
            class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300"
            :class="{ 'translate-x-6': value }"
        ></div>
    </div>

<!--  <label class="min-w-full relative block mr-2 align-middle select-none transition duration-200 ease-in"-->
<!--         :class="switchClass" v-on:click="swap" :title="title">-->
<!--    <input type="checkbox" :value="value">-->
<!--&lt;!&ndash;    <i v-if="dataSwitched" data-on="&#10005;" data-off="&#10004;"></i>&ndash;&gt;-->
<!--&lt;!&ndash;    <i v-else data-on="&#10004;" data-off="&#10005;"></i>&ndash;&gt;-->
<!--    <i v-if="dataSwitched" data-on="v" data-off="x"></i>-->
<!--    <i v-else data-on="x" data-off="v"></i>-->
<!--  </label>-->

<!--    <div class="flex justify-center items-center" x-data="{toggle: '0'}">-->
<!--        <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear"-->
<!--             :class="[toggle === '1' ? 'bg-green-400' : 'bg-gray-400']">-->
<!--            <label for="toggle"-->
<!--                   class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"-->
<!--                   :class="[toggle === '1' ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400']"></label>-->
<!--            <input type="checkbox" id="toggle" name="toggle" :value="value"-->
<!--                   class="appearance-none w-full h-full active:outline-none focus:outline-none"-->
<!--                   @click="toggle === '0' ? toggle = '1' : toggle = '0'"/>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
import wBase from './wBase'
import {wSwapMixin} from 'crud-vue-core'

export default {
  name: 'w-swap',
  extends: wBase,
  mixins: [wSwapMixin],
  mounted () {
    var that = this
    if (that.toggleActive) {
      that.jQe('[type="checkbox"]').prop('checked', true)
    } else {
      that.jQe('[type="checkbox"]').prop('checked', false)
    }
  },
}
</script>

<style scoped>

/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */

/*.toggle-checkbox {*/
/*    @apply: right-0 border-green-400;*/
/*    right: 0;*/
/*    border-color: var(--bg-inactive,blue);*/
/*}*/

/*.toggle-checkbox:checked {*/
/*    @apply: right-0 border-green-400 bg-green-400;*/
/*    right: 0;*/
/*    !*border-color: var(--bg-active,red);*!*/
/*}*/
/*.toggle-checkbox:checked + .toggle-label {*/
/*    @apply: var(bgActive);*/
/*    right:auto;*/
/*    !*background-color: var(--bg-active,red);*!*/
/*}*/

/*.toggle-checkbox:not(checked) {*/
/*    @apply: right-0 border-green-400;*/
/*    !*right: 0;*!*/
/*    !*border-color: var(--bg-active,blue);*!*/
/*}*/

/*.toggle-checkbox:not(checked) + .toggle-label {*/
/*    @apply: var(bgActive);*/
/*    right : 0;*/
/*    !*background-color: var(--bg-active,blue);*!*/
/*}*/

/*.text-color {*/
/*    color : var(--bg-active,red)*/
/*}*/
</style>
