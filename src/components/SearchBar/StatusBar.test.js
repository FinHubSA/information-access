import { shallowMount } from '@vue/test-utils'
import StatusBar from './StatusBar.vue'
import store from '../../services/DataService'

describe('StatusBar.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(StatusBar, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.findComponent(StatusBar).exists()).toBe(true)
  })
})
