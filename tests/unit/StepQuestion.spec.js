import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import StepQuestion from '../../src/components/StepQuestion.vue'

describe('StepQuestion.vue', () => {
  const question = 'Wanneer is het werk gepubliceerd?'
  const description = [
    'Om te bepalen of een werk nog beschermd wordt door auteursrecht.',
    'Kijk je als eerste naar het moment dat het werk is gepubliceerd, of met andere woorden openbaar gemaakt.'
  ]
  const showDescription = true

  it('renders a question', () => {
    const wrapper = shallowMount(StepQuestion, {
      props: {
        question,
        description,
        showDescription
      }
    })

    expect(wrapper.find('h1').text()).toBe(question)
  })

  it('renders a description', () => {
    const wrapper = shallowMount(StepQuestion, {
      props: {
        question,
        description,
        showDescription
      }
    })

    expect(wrapper.find('p').text()).toBe(description[0])
  })

  it('renders a read more button', () => {
    const wrapper = shallowMount(StepQuestion, {
      props: {
        question,
        description,
        showDescription: false
      }
    })

    expect(wrapper.find('.readmore').exists()).toBe(true)
  })

  it('does not render a read more button', () => {
    const wrapper = shallowMount(StepQuestion, {
      props: {
        question,
        description,
        showDescription
      }
    })

    expect(wrapper.find('.readmore').exists()).toBe(false)
  })

  it('does not render a read more button when there is no description', () => {
    const wrapper = shallowMount(StepQuestion, {
      props: {
        question,
        description: [],
        showDescription
      }
    })

    expect(wrapper.find('.readmore').exists()).toBe(false)
  })
})
