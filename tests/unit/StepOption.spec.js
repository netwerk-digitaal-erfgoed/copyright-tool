import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import StepOption from '../../src/components/StepOption.vue'

describe('StepOption.vue', () => {

  let option = {
    key: 'after150',
    text: 'Publicatie heeft minder dan (of gelijk aan) 150 jaar geleden plaatsgevonden.',
    description: [ 'Ook wanneer je niet weet wanneer een werk is gepubliceerd kies je voor dit antwoord.' ],
    next: 'maker'
  }
  const questionKey = 'publicationdate'

  it('renders an answer option', () => {
    const wrapper = shallowMount(StepOption, {
      props: {
        option,
        questionKey
      }
    })

    expect(wrapper.find('label').text()).toBe(option.text)
  })

  it('renders an explanation', () => {
    const wrapper = shallowMount(StepOption, {
      props: {
        option,
        questionKey
      }
    })

    expect(wrapper.find('.readmore').exists()).toBe(true)
  })

  it('does not render an explanation', () => {
    // Pas de optie aan zonder description
    option.description = ''

    const wrapper = shallowMount(StepOption, {
      props: {
        option,
        questionKey
      }
    })

    expect(wrapper.find('.readmore').exists()).toBe(false)
  })
})
