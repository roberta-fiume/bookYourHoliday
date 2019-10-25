import { shallowMount } from '@vue/test-utils'

import Mexico from "@/views/Mexico.vue"
import router from "@/router/index.js"

describe('Mexico', () => {
  it('cheks that radio button for bedroom SIZE is selected', () => {
    const wrapper = shallowMount(Mexico);
    const radio = wrapper.find('.radioButtonBedroomSize');
    radio.element.selected = true;
    radio.trigger('change');
  })
});


describe('Mexico', () => {
  it('increments counter value when button is clicked', () => {
    const wrapper = shallowMount(Mexico);
    expect(wrapper.find('.booking-num-people > span').text()).toEqual('Number of people: 0');
    wrapper.find('v-btn').trigger('click');
    // expect(wrapper.find('.booking-num-people > span').text()).toEqual('Number of people: 1');
  })
})

describe('Mexico', () => {
  it('cheks that radio button for bedroom TYPE is selected', () => {
    const wrapper = shallowMount(Mexico);
    const radio = wrapper.find('.radioButtonBedroomType');
    radio.element.selected = true;
    radio.trigger('change');
  })
});

describe('Mexico', () => {
  it('cheks that button Show Price shows the price of the booking', () => {
    const wrapper = shallowMount(Mexico);
    expect(wrapper.find('.showPrice').trigger('click'));
    expect(wrapper.find('.booking-price').exists()).toBe(true);
  })
});






