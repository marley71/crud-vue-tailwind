<template>
  <component v-if="cWidget.type=='w-hidden'" :is="cWidget.type" :c-conf="cWidget"></component>
  <div v-else class="row">

    <div class="col-12 mb-1">
      <div class="my-4 relative border-b-2 focus-within:border-blue-500">
        <component :is="cWidget.type" :c-conf="cWidget"></component>
        <label class="absolute top-0 z-1 duration-300 origin-1" :for="cWidget.name">
          {{ cWidget.label }} {{cWidget.required?'*':''}}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import tplBase from './tplBase'

export default {
  name: 'tpl-search',
  extends: tplBase
}
</script>

<style scoped>

</style>
