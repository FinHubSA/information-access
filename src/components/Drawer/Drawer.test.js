import { shallowMount } from '@vue/test-utils'
import Drawer from './Drawer.vue'

describe('Drawer.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(Drawer, {})
    expect(wrapper.findComponent(Drawer).exists()).toBe(true)
  })
})
