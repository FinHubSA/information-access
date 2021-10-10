import { shallowMount } from '@vue/test-utils'
import StatusBar from './StatusBar.vue'
import store from '../../services/DataService'
import router from '../../router/index.js'

describe('StatusBar.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(StatusBar, {
      global: {
        plugins: [store, router],
      },
    })
    expect(wrapper.findComponent(StatusBar).exists()).toBe(true)
  })
})
