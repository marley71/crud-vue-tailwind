<template>
    <div class="w-full" c-map></div>
</template>

<script>

/* eslint no-undef: "off" */

import wMap from './wMap'
import {wMapViewMixin} from 'crud-vue-core'

export default {
  name: 'w-map-view',
  extends: wMap,
  mixins: [wMapViewMixin]
}

</script>

<style scoped>

</style>
