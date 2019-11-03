import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue';
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import Mexico from "@/views/Mexico.vue"
import Payment from "@/views/Payment.vue"
import router from "@/router/index.js"

// Vue.use(Vuetify)

const localVue = createLocalVue();

describe('Mexico', () => {
  // let vuetify = new Vuetify();
  let vuetify;
  localVue.use(VueRouter);

  const routes = [
    { path: '/payment', name: 'payment' }
  ];

  const router = new VueRouter({ routes });

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('displays h1 element', () => {
    let wrapper = shallowMount(Mexico, {
      localVue,
      vuetify,
      router,
    });
    expect(wrapper.html()).toMatchSnapshot()
   // wrapper.setData({ items: [{ id: 1, name: 'My Item' }] });
    expect(wrapper.find('h1').exists()).toBe(true);
   });

});

// describe('Mexico', () => {
//   it('cheks that radio button for bedroom SIZE is selected', () => {
//     const wrapper = shallowMount(Mexico);
//     const radio = wrapper.find('.radioButtonBedroomSize');
//     radio.element.selected = true;
//     radio.trigger('change');
//   })
// });

describe('Mexico', () => {
  it('checks that v-container exists', () => {
    const wrapper = shallowMount(Mexico);
    expect(wrapper.find('.v-container').exists()).toBe(true);
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
});

function addInputValue(value) {
  const wrapper = shallowMount(Mexico);
  let valueFromInput = wrapper.find('.inputField');
  valueFromInput.element.value = value;
  valueFromInput.trigger('input');

  wrapper.find('.showPrice').trigger('click');
}

fdescribe('Mexico', () => {
  it('increments counter value when button is clicked', () => {
    let vuetify = new Vuetify();
    const wrapper = shallowMount(Mexico, {
      vuetify
    });
    expect(wrapper.find('.booking-num-people > span').text()).toEqual('Number of people: 0');
    const incrementPeople = jest.fn();
    wrapper.setMethods({incrementPeople});
    const button = wrapper.find('.butt-increment');
    button.trigger('click');
    wrapper.vm.$emit('foo')
    expect(incrementPeople).toHaveBeenCalledTimes(1);
  })
});

describe('Mexico', () => {
  it('cheks that radio button for bedroom TYPE is selected', () => {
    const wrapper = shallowMount(Mexico);
    const radio = wrapper.find('.radioButtonBedroomType');
    radio.element.selected = true;
    radio.trigger('change');
  })
});

// describe('Mexico', () => {
//   it('cheks that button Show Price shows the price of the booking', () => {
//     const wrapper = shallowMount(Mexico);
//     expect(wrapper.find('.showPrice').trigger('click'));
//     // expect(wrapper.find('.booking-price').exists()).toBe(true);
//   })
// });

// describe('Mexico', () => {
//   it('cheks that button Show Price shows the error message when input is null', () => {
//     const wrapper = shallowMount(Mexico);
//     addInputValue(null);
//     // expect(wrapper.find('.showPrice').trigger('click'));
//     expect(wrapper.find('.errorMessage').exists()).toBe(true);
//   })
// });

// describe('Payment', () => {
//   it('cheks that prop exists in Payment Component', () => {
//     let expectedProp = {
//       name: 'julio',
//       lastName: 'fiume',
//       bedroomSize: 'Double',
//       numberPeople: '2',
//       bedroomType: 'Suite'
//     }; 
    
//     const wrapper = shallowMount(Payment, {
//       propsData: {
//         infoPersonProp: expectedProp
//       }
//     });

//     console.log("THIS IS THE NAMEEE", wrapper);
//     expect(wrapper.props().infoPersonProp).toEqual(expectedProp);
//     expect(wrapper.find('.name').text()).toEqual('julio');
//     // expect(wrapper.props('infoPersonProp').name).toBe('roberta')
//   })
// });

// describe('Mexico', () => {
//   it('tests that Create Object Person function is called'), () => {
//     const mockFunct = jest.fn();
//     const createObjectFn = createObjPerson(mockFunct);
//     expect(mockFunct).ToHaveBeenCalled();
//   }
// })
