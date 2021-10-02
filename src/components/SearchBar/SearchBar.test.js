import { shallowMount } from '@vue/test-utils'
import SearchBar from './SearchBar.vue'
import store from '../../services/DataService'

describe('SearchBar.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(SearchBar, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.findComponent(SearchBar).exists()).toBe(true)
  })
})
