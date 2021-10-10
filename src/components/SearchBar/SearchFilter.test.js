import { shallowMount } from '@vue/test-utils'
import SearchFilter from './SearchFilter.vue'
import store from '../../services/DataService'

describe('SearchFilter.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(SearchFilter, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.findComponent(SearchFilter).exists()).toBe(true)
  })
})
