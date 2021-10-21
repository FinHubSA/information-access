import { shallowMount } from '@vue/test-utils'
import Options from './Options.vue'
import store from '../../services/DataService'

describe('Options.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(Options, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.findComponent(Options).exists()).toBe(true)
  })
})
