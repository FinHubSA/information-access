import { shallowMount } from '@vue/test-utils'
import SearchResults from './SearchResults.vue'

describe('SearchResults.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(SearchResults, {})
    expect(wrapper.findComponent(SearchResults).exists()).toBe(true)
  })
})
