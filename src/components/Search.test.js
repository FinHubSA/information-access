import { shallowMount } from '@vue/test-utils'
import Search from './Search.vue'

describe('Search.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(Search, {})
    expect(wrapper.findComponent(Search).exists()).toBe(true)
  })
})
