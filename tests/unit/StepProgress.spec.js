import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StepsProgress from '@/components/StepsProgress.vue';

describe('StepsProgress.vue', () => {

  const currentTheme = 'Is het werk beschermd?';

  it('renders an answer option', () => {
    const wrapper = shallowMount(StepsProgress, {
      propsData: {
        currentTheme
      }
    });

    expect(wrapper.find('.progress li').attributes('class')).to.equal('active');
  });
});
