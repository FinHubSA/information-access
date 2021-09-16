import { shallowMount } from '@vue/test-utils'
import Footer from './Footer.vue'

describe('NavBar.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(Footer, {})
    expect(wrapper.findComponent(Footer).exists()).toBe(true)
  })
})
