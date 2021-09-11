import { shallowMount } from '@vue/test-utils'
import SearchBar from './SearchBar.vue'

describe('SearchBar.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(SearchBar, {})
    expect(wrapper.findComponent(SearchBar).exists()).toBe(true)
  })
})
