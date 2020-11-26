import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import MainNavigation from '@/components/MainNavigation.vue';

describe('MainNavigation.vue', () => {

  it('shows a navigation with two links', () => {
    const wrapper = shallowMount(MainNavigation, {
      stubs: ['router-link']
    });

    expect(wrapper.find('nav a').text()).to.contain('Handleiding');
    expect(wrapper.find('nav router-link-stub').text()).to.contain('Colofon');
  });
});
