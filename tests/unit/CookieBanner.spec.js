import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CookieBanner from '../../src/components/CookieBanner.vue'

describe('CookieBanner.vue', () => {
  it('renders a cookie banner', () => {
    const wrapper = shallowMount(CookieBanner)
    expect(wrapper.find('.cookie-banner').exists()).toBe(true)
  })
})
