<template>
    <div
        class="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 cursor-pointer"
        :class="{ 'bg-green-500': toggleActive }"
        :aria-checked="value.toString()"
        v-on:click="swap">
        <input :name="getFieldName()" type="hidden" :value="value">
        <div
            class="bg-white w-5 h-5 rounded-full shadow-md transform duration-300"
            :class="{ 'translate-x-5': !toggleActive }"
        ></div>
    </div>
</template>

<script>
import wBase from './wBase'
import {wSwapMixin} from 'crud-vue-core'

export default {
  name: 'w-swap',
  extends: wBase,
  mixins: [wSwapMixin],
}
</script>

<style scoped>

</style>
