<template>
  <b-form>
    <b-form-group label="Background ticker">
      <b-form-input readonly type="text" v-model="ticker" />
    </b-form-group>

    <b-form-group label="Word count">
      <b-form-input readonly type="text" v-model="countWords" />
    </b-form-group>

    <b-form-group label="Enter some text">
      <b-form-textarea v-model="text" style="min-height: 200px" />
    </b-form-group>
  </b-form>
</template>

<script>
import Vue from "vue";
import VueRx from "vue-rx";
import Rx from "rxjs/Rx";
import moment from "moment";
import BootstrapVue from "bootstrap-vue";
import { Observable } from "rxjs";
Vue.use(BootstrapVue, VueRx, Rx);

export default {
  name: "HelloWorld",
  data() {
    return {
      text: ""
    };
  },
  subscriptions: function() {
    const countWords = this.$watchAsObservable("text")
      .debounceTime(500)
      .pluck("newValue")
      .startWith("")
      .map(val => {
        const s = val.trim();
        return s == "" ? 0 : s.split(/\s+/).length;
      });

    this.countWords = countWords;

    const ticker = Observable.interval(1000 /* ms */).map(_ =>
      new moment().format("H:mm:ss A")
    );
    return { countWords, ticker };
  }
};
</script>

<style scoped>
</style>
