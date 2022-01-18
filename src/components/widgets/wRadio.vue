<template>
    <div class="w-100 flex flex-row items-center mr-4 mb-4" :class="inline?'flex-row':'flex-col'">
        <div v-for="key in domainValuesOrder" :key="key" >
            <input type="radio" :name="getFieldName()" class="hidden" v-model="value" v-on:change="change" />
            <label for="radio1" class="flex items-center cursor-pointer text-xl">
                <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                {{ domainValues[key] }}</label>
        </div>
    </div>


<!--    <div class="col-12 mb-2 form-label-group form-control bw&#45;&#45;1 border-solid border-gray-400 p&#45;&#45;6 rounded">-->
<!--        <div class="in-label-group">-->
<!--            <label v-for="key in domainValuesOrder" class="" :key="key">-->
<!--                <input class="form-radio" :name="getFieldName()" type="radio" :value="key"-->
<!--                       v-model="value"-->
<!--                       v-on:change="change">-->
<!--                <i></i><span v-html="domainValues[key]"></span>-->
<!--            </label>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
import wBase from './wBase'
import { choiceMixin, wRadioMixin } from 'crud-vue-core'

export default {
  name: 'w-radio',
  extends: wBase,
  mixins: [choiceMixin, wRadioMixin]
}
</script>

<style scoped>
input[type="radio"] + label span {
    transition: background .2s,
    transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
    transform: scale(1.2);
}

input[type="radio"]:checked + label span {
    background-color: #3490DC;
box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
    color: #3490DC;
}

</style>
