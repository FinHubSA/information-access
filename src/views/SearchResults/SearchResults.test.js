import { shallowMount } from '@vue/test-utils'
import SearchResults from '../SearchResults/SearchResults.vue'
import store from '../../services/DataService'

describe('SearchResults.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(SearchResults, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.findComponent(SearchResults).exists()).toBe(true)
  })
})
