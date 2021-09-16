import { shallowMount } from '@vue/test-utils'
import FAQ from '../FAQ/FAQ.vue'

describe('FAQ.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(FAQ, {})
    expect(wrapper.findComponent(FAQ).exists()).toBe(true)
  })
})
