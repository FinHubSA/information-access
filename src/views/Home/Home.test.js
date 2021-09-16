import { shallowMount } from '@vue/test-utils'
import HomePage from '../views/Home.vue'

describe('Home.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(HomePage, {})
    expect(wrapper.findComponent(HomePage).exists()).toBe(true)
  })
})
