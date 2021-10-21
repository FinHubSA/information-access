import { shallowMount } from '@vue/test-utils'
import Dropdown from './Dropdown.vue'
import store from '../../services/DataService'

describe('Dropdown.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(Dropdown, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.findComponent(Dropdown).exists()).toBe(true)
  })
})
