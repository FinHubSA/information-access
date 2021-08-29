import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(HelloWorld, {})
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true)
  })
})
