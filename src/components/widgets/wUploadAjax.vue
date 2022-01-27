<template>
    <div>
        <div class="w-full flex flex-row">
            <div class="">
                <div v-show="error" class="text-red-800 w-full">{{ errorMessage }}</div>
                <input type="hidden" v-model="value" :name="getFieldName()">
                <div class="flex flex-row">
                    <div v-show="extensions">
                        <span crud-label="app.accepted-extensions">Estensioni accettate: </span>
                        <span v-show="extensions">{{ extensions.join(',') }}</span>
                    </div>
                    <div v-show="maxFileSize">
                        Dimensione massima: <span crud-label="app.upload-max-filesize">{{ maxFileSize }}</span>
                    </div>
                </div>
                <div>
                    <input c-file class="" type="file" v-on:change="validate()">
                </div>
            </div>
            <div class="py-2 px-2">
                <w-preview :c-conf="previewConf"></w-preview>
            </div>
        </div>
    </div>
</template>

<script>
import wBase from './wBase'
import {wUploadAjaxMixin} from 'crud-vue-core'

export default {
  name: 'w-upload-ajax',
  extends: wBase,
  mixins: [wUploadAjaxMixin]
}
</script>

<style scoped>

</style>
