import { shallowMount } from '@vue/test-utils'
import NavBar from '../NavBar/NavBar.vue'
import router from '../../router/index.js'

describe('NavBar.vue', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(NavBar, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.findComponent(NavBar).exists()).toBe(true)
  })
})
