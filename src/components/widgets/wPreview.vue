<template>
  <div>
    <img class="img-fluid" v-if="currentMimetype=='image'" :src="value.url">
    <a v-else-if="currentMimetype=='doc'" :href="value.url">
      <i :class="iconClass + ' ' + iconSize" crud-icon></i>
    </a>
    <small v-else class="text-danger">
      <span v-if="value.url">{{ currentMimetype }} mimetype non riconosciuto</span>
    </small>
  </div>
</template>

<script>
import wBase from './wBase'
import {wPreviewMixin} from 'crud-vue-core'

export default {
  name: 'w-preview',
  extends: wBase,
  mixins: [wPreviewMixin]
}
</script>

<style scoped>

</style>
