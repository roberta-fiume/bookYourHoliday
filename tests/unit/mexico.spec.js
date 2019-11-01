import { shallowMount } from '@vue/test-utils'
import Mexico from "@/views/Mexico.vue"
import Payment from "@/views/Payment.vue"
import router from "@/router/index.js"

describe('Mexico', () => {
  it('cheks that radio button for bedroom SIZE is selected', () => {
    const wrapper = shallowMount(Mexico);
    const radio = wrapper.find('.radioButtonBedroomSize');
    radio.element.selected = true;
    radio.trigger('change');
  })
});

// describe('Mexico', () => {
//   it('checks that input fields change when user types', () => {
//     const wrapper = shallowMount(Mexico);
//     const value = wrapper.find('.inputField').element.value;
//     console.log("THIS IS THE VALUE", value);
//   })
// })

describe('Mexico', () => {
  it('checks that input fields change when user types', () => {
    addInputValue('aValue');
  })
})

function addInputValue(value) {
  const wrapper = shallowMount(Mexico);
  let valueFromInput = wrapper.find('.inputField');
  valueFromInput.element.value = value;
  valueFromInput.trigger('input');

  wrapper.find('.booking-price').trigger('click');
}

describe('Mexico', () => {
  it('increments counter value when button is clicked', () => {
    const wrapper = shallowMount(Mexico);
    expect(wrapper.find('.booking-num-people > span').text()).toEqual('Number of people: 0');
    wrapper.find('v-btn').trigger('click');
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
    // expect(wrapper.find('.booking-price').exists()).toBe(true);
  })
});

describe('Payment', () => {
  it('cheks that prop exists in Payment Component', () => {
    let expectedProp = {
      name: 'julio',
      lastName: 'fiume',
      bedroomSize: 'Double',
      numberPeople: '2',
      bedroomType: 'Suite'
    }; 
    
    const wrapper = shallowMount(Payment, {
      propsData: {
        infoPersonProp: expectedProp
      }
    });

    console.log("THIS IS THE NAMEEE", wrapper);
    expect(wrapper.props().infoPersonProp).toEqual(expectedProp);
    expect(wrapper.find('.name').text()).toEqual('julio');
    // expect(wrapper.props('infoPersonProp').name).toBe('roberta')
  })
});

describe('Mexico', () => {
  it('tests that Create Object Person function is called'), () => {
    const mockFunct = jest.fn();
    const createObjectFn = createObjPerson(mockFunct);
    expect(mockFunct).ToHaveBeenCalled();
  }
})
