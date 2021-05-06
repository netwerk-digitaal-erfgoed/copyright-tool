import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CookieBanner from '@/components/CookieBanner.vue';

describe('CookieBanner.vue', () => {

  it('renders a cookie banner', () => {
    const wrapper = shallowMount(CookieBanner);
    expect(wrapper.find('.cookie-banner').exists()).to.be.true;
  });
});
