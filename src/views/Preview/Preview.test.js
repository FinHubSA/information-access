import { shallowMount } from '@vue/test-utils'
import Preview from '../Preview/Preview.vue'

describe('Preview.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(Preview, {url:"https://aaronskit-cloudstorage.fra1.digitaloceanspaces.com/Daphne%20Chen.pdf"

    })
    expect(wrapper.findComponent(Preview).exists()).toBe(true)
  })
})
