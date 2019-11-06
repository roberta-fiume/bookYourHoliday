import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue';
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import Mexico from "@/views/Mexico.vue"
import Payment from "@/views/Payment.vue"
import router from "@/router/index.js"
import Example from "@/views/Example.vue"

Vue.use(Vuetify);

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
    // expect(wrapper.html()).toMatchSnapshot()
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

// describe('Mexico', () => {
//   it('checks that v-container exists', () => {
//     const wrapper = shallowMount(Mexico);
//     expect(wrapper.find('.v-container').exists()).toBe(true);
//   })
// });


// function getValueFromInput() {
//   const wrapper = shallowMount(Mexico);
//   const value = wrapper.find('.inputField').element.value;
//   console.log("THIS IS THE VALUE", value);

//   return value
// }

// describe('Mexico', () => {
//   it('cheks that button Show Price shows the error message when input is null', () => {
//     const wrapper = shallowMount(Mexico);
//     // wrapper.setData({firstName: "roberta"})
//     // {
//     //   data() {
//     //     return {
//     //       t1: null,
//     //       t2: null,
//     //       errorMessage: false,
//     //     }
//     //   },
//     //   template: `
//     //   <div>
//     //     <v-container>
//     //       <div class="hello2">Hello Div 2</div>
//     //       <input class="inputField2" placeholder="abc2">
//     //     </v-container>
//     //     <div class="hello">Hello Div</div>
//     //     <input class="inputField" placeholder="abc">
//     //   </div>`
//     // }
    
//     // const wrapperArray = wrapper.findAll('.foo');
//     // console.log("arrayyy",wrapperArray);
//     // const newDiv = wrapper.find('.hello');
//     // console.log("divvv", newDiv.text());
//     // const newDiv2 = wrapper.find('.hello2');
//     // console.log("divv 2", newDiv2.text());
//     let expectedFirstName = "roberta123";
//     const inputValue = wrapper.find('.inputField');
//     inputValue.setValue(expectedFirstName);

    
//     // console.log(wrapper.vm.$data.firstName)
//     // console.log(wrapper.vm.firstName)
//     // console.log("value1", inputValue.attributes().value);

//     // const inputValueAfter = wrapper.find('.inputField');

//     expect(wrapper.vm.firstName).toEqual(expectedFirstName);
//     // console.log("value1 AFTER!!!!!", inputValueAfter.);

//     // const inputValue2 = wrapper.find('.inputField2');
//     // console.log("value2", inputValue2.attributes().value);

//     // console.log(wrapper.find('.first-name').text());

//     // expect(wrapper.vm.t1).toEqual(null);
//     // expect(wrapper.vm.t2).toEqual(null);
//     // wrapperArray.setValue(null);
//     // wrapper.find('.showPrice').trigger('click');
//     // expect(wrapper.find('.errorMessage').text()).toEqual('YOUR INFORMATION IS NOT CORRECT. PLEASE RETRY!')
//     // expect(wrapper.vm.t2).toEqual('foo');
    
//   })
// })

fdescribe('Testing input fields', () => {
  it('should use default value for firstName and show error when showPrice is clicked without using the input field', () => {
    const wrapper = shallowMount(Mexico);

    wrapper.find('.showPrice').trigger('click');

    expect(wrapper.vm.firstName).toBe(null);
    expect(wrapper.find('.errorMessage').text()).toEqual('YOUR INFORMATION IS NOT CORRECT. PLEASE RETRY!');    
  })

  it('should have empty string as input value and show error message when input is set as null', () => {
    const wrapper = shallowMount(Mexico);
    const inputValue = wrapper.find('.inputField');
    inputValue.setValue(null);

    wrapper.find('.showPrice').trigger('click');

    expect(wrapper.vm.firstName).toBe("");
    expect(wrapper.find('.errorMessage').text()).toEqual('YOUR INFORMATION IS NOT CORRECT. PLEASE RETRY!');    
  })

  fit('should NOT show error message when input is set as a valid value', () => {
    const wrapper = shallowMount(Mexico);
    let expectedFirstName = "roberta123";
    const inputValue = wrapper.find('.inputField');
    inputValue.setValue(expectedFirstName);

    wrapper.find('.showPrice').trigger('click');

    expect(wrapper.vm.firstName).toBe(expectedFirstName);
    expect(wrapper.find('.errorMessage').exists()).toBe(false);
  })
})

// fdescribe('Mexico', () => {
//   it('cheks that button Show Price shows the error message when input is null', () => {
//     const wrapper = shallowMount(Mexico);
//     let arrayInput = wrapper.findAll('div');
//     console.log("ARRAY", arrayInput);
    
//     arrayInput.forEach(input => input.setValue('null'));

//     wrapper.find('.showPrice').trigger('click');
//     expect(wrapper.find('.errorMessage').text()).toEqual('YOUR INFORMATION IS NOT CORRECT. PLEASE RETRY!')
//   })
// })

  // describe('Mexico', () => {
  //   it('checks that input fields change when user types', () => {
  //     const wrapper = shallowMount(Mexico);
  //     const value = wrapper.find('.inputField').element.value;
  //     console.log("THIS IS THE VALUE", value);
  //   })
  // })¬


  // describe('Mexico', () => {
  //   it('checks that input fields change when user types', () => {
  //     addInputValue('aValue');
  //   })
  // });

  // function addInputValue(value) {
  //   const wrapper = shallowMount(Mexico);
  //   let valueFromInput = wrapper.find('.inputField');
  //   valueFromInput.element.value = value;
  //   valueFromInput.trigger('input');

  //   wrapper.find('.showPrice').trigger('click');
  // }

  describe('Mexico', () => {
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

  describe('Mexico', () => {
    it('checks that button Show Price shows the box with booking info', () => {
      const wrapper = shallowMount(Mexico);
      wrapper.find('.showPrice').trigger('click');
      expect(wrapper.find('.booking-price').exists()).toBe(true);
    })
  });

  // describe('Mexico', () => {
  //   it('cheks that button Show Price shows the error message when input is null', () => {
  //     const wrapper = shallowMount(Mexico);
  //     addInputValue(null);
  //     // expect(wrapper.find('.showPrice').trigger('click'));
  //     expect(wrapper.find('.errorMessage').exists()).toBe(true);
  //   })
  // });

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

// describe('Mexico', () => {
//   it('tests that Create Object Person function is called'), () => {
//     const mockFunct = jest.fn();
//     const createObjectFn = createObjPerson(mockFunct);
//     expect(mockFunct).ToHaveBeenCalled();
//   }
// })
