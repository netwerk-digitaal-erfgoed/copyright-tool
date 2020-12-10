import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StepQuestion from '@/components/StepQuestion.vue';

describe('StepQuestion.vue', () => {

  const question = 'Wanneer is het werk gepubliceerd?';
  const description = [
    'Om te bepalen of een werk nog beschermd wordt door auteursrecht.',
    'Kijk je als eerste naar het moment dat het werk is gepubliceerd, of met andere woorden openbaar gemaakt.'
  ];
  const showDescription = true;

  it('renders a question', () => {
    const wrapper = shallowMount(StepQuestion, {
      propsData: {
        question,
        description,
        showDescription
      }
    });

    expect(wrapper.find('h1').text()).to.equal(question);
  });

  it('renders a description', () => {
    const wrapper = shallowMount(StepQuestion, {
      propsData: {
        question,
        description,
        showDescription
      }
    });

    expect(wrapper.find('p').text()).to.equal(description[0]);
  });

  it('renders a read more button', () => {
    const wrapper = shallowMount(StepQuestion, {
      propsData: {
        question,
        description,
        showDescription: false
      }
    });

    expect(wrapper.find('.readmore').exists()).to.be.true;
  });

  it('does not render a read more button', () => {
    const wrapper = shallowMount(StepQuestion, {
      propsData: {
        question,
        description,
        showDescription
      }
    });

    expect(wrapper.find('.readmore').exists()).to.be.false;
  });

  it('does not render a read more button when there is no description', () => {
    const wrapper = shallowMount(StepQuestion, {
      propsData: {
        question,
        description: [],
        showDescription
      }
    });

    expect(wrapper.find('.readmore').exists()).to.be.false;
  });
});
