import { describe, it, expect } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import MainNavigation from '../../src/components/MainNavigation.vue'

describe('MainNavigation.vue', () => {
  it('shows a navigation with two links', () => {
    const wrapper = shallowMount(MainNavigation, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    const links = wrapper.findAll('a')
    const linkTexts = links.map(link => link.text())

    expect(linkTexts[1]).toContain('Colofon')
    expect(links.length).toBe(3)
  })
})
