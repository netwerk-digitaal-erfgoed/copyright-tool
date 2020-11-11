import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StepOption from '@/components/StepOption.vue';

describe('StepOption.vue', () => {

  let option = {
    'key': 'after150',
    'text': 'Publicatie heeft minder dan (of gelijk aan) 150 jaar geleden plaatsgevonden.',
    'description': [ 'Ook wanneer je niet weet wanneer een werk is gepubliceerd kies je voor dit antwoord.' ],
    'next': 'maker'
  };
  const questionKey = 'publicationdate';

  it('renders an answer option', () => {
    const wrapper = shallowMount(StepOption, {
      propsData: {
        option,
        questionKey
      }
    });

    expect(wrapper.find('label').text()).to.equal(option.text);
  });

  it('renders an explantion', () => {
    const wrapper = shallowMount(StepOption, {
      propsData: {
        option,
        questionKey
      }
    });

    expect(wrapper.find('.readmore').exists()).to.be.true;
  });

  it('does not render an explantion', () => {
    option.description = '';

    const wrapper = shallowMount(StepOption, {
      propsData: {
        option,
        questionKey
      }
    });

    expect(wrapper.find('.readmore').exists()).to.be.false;
  });
});


