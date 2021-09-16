import { shallowMount } from '@vue/test-utils'
import NavBar from '../NavBar/NavBar.vue'

describe('NavBar.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.findComponent(NavBar).exists()).toBe(true)
  })
})
