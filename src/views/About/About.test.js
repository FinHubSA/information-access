import { shallowMount } from '@vue/test-utils'
import About from '../About/About.vue'

describe('About.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(About, {})
    expect(wrapper.findComponent(About).exists()).toBe(true)
  })
})
