import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AdditionalInfo from '../../src/components/AdditionalInfo.vue'

describe('AdditionalInfo.vue', () => {
  const title = 'Wanneer is het werk gepubliceerd?'
  const description = 'Om te bepalen of een werk nog beschermd wordt door auteursrecht, kijk je als eerste naar het moment dat het werk is gepubliceerd, of met andere woorden openbaar gemaakt. Gepubliceerd betekent hier het moment dat het op zodanige wijze beschikbaar is gesteld dat het publiek er op enige wijze toegang tot heeft.'

  it('renders a panel with a title and description', () => {
    const wrapper = shallowMount(AdditionalInfo, {
      props: {
        title,
        description
      }
    })

    expect(wrapper.find('.slidein .title').text()).toBe(title)
    expect(wrapper.find('.slidein .description').text()).toBe(description)
  })
})
