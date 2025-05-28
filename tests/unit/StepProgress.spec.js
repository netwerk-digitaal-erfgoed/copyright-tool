import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import StepsProgress from '../../src/components/StepsProgress.vue'

describe('StepsProgress.vue', () => {

  const currentTheme = 'Wanneer is het werk gepubliceerd?'

  it('renders an answer option', () => {
    const wrapper = shallowMount(StepsProgress, {
      props: {
        currentTheme
      }
    })

    expect(wrapper.find('.progress li').attributes('class')).toBe('active')
  })
})
