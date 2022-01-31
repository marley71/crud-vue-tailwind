<template>
    <div class="flex flex-col" v-show="_visible" :title="title | translate" :disabled="_disabled" >
        <button type="button" :class="css" v-on:click="toggle()">
<!--              <i class="fa fa-bars" :class="!open?'':'hidden'"></i>-->
<!--              <i class="fa-solid fa-square-xmark" :class="open?'':'hidden'"></i>-->
            <i class="fa fa-bars" v-show="!opened"></i>
            <i class="fa-solid fa-square-xmark" v-show="opened"></i>
        </button>
        <div class="flex flex-col z-40 absolute mt-10 ml-2 bg-brand-50 rounded p-1" :class="opened?'':'hidden'" >
            <template v-for="(action,name) in actionsConfig">
                <component :is="action.componentName" :c-conf="action" inline-template :key="name">
                    <a class="dropdown-item text-truncate cursor-pointer" v-if="_visible"
                       :class="name + ' ' +css" v-on:click="$parent.toggle();_execute()"
                       target="_blank">
                        <i :class="icon"></i> {{ (text || title) | translate }}
                    </a>
                </component>
            </template>
        </div>
    </div>
</template>

<script>
import cComponent from '../misc/cComponent'
import {aGroupedMixin,crud} from 'crud-vue-core'

crud.conf['a-grouped'].opened = false;
export default {
  name: 'a-grouped',
  extends: cComponent,
  mixins: [aGroupedMixin],
    methods: {
      toggle() {
          this.opened = !this.opened;
      }
    }
}

</script>

<style scoped>
    button:hover {
        -moz-box-shadow: 0 0 10px #bbb;
        -webkit-box-shadow: 0 0 10px #bbb;
        box-shadow: 0 0 10px #bbb;
    }
</style>
