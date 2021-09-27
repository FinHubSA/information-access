import { shallowMount } from '@vue/test-utils'
import ResultCard from '../ResultCard/ResultCard.vue'
import router from '../../router/index.js'

describe('ResultCard.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(ResultCard, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.findComponent(ResultCard).exists()).toBe(true)
  })
})
