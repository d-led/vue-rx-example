import {
  shallowMount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import VueRx from 'vue-rx'
import Vue from 'vue'
import Rx from 'rxjs/Rx'

Vue.use(VueRx, Rx);

// to do
describe('HelloWorld.vue', async () => {
  it('counts the words', () => {
    const wrapper = shallowMount(HelloWorld, VueRx, Rx);
    var count = 0;

    wrapper.vm.$observables.countWords
      .subscribe(c => {
        count = c;
      });
  })
})
