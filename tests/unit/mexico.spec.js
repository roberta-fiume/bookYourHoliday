import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue';
// import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import Mexico from "@/views/Mexico.vue"
import Payment from "@/views/Payment.vue"
import router from "@/router/index.js"
import Example from "@/views/Example.vue"

// Vue.use(Vuetify);

const localVue = createLocalVue();

describe('Mexico', () => {
  // let vuetify = new Vuetify();
  // let vuetify;
  localVue.use(VueRouter);

  const routes = [
    { path: '/payment', name: 'payment' }
  ];

  const router = new VueRouter({ routes });

  // beforeEach(() => {
  //   vuetify = new Vuetify()
  // })

  it('displays h1 element', () => {
    let wrapper = shallowMount(Mexico, {
      localVue,
      // vuetify,
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


describe('Testing input fields', () => {
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

    expect(wrapper.vm.firstName).toBe(null);
    expect(wrapper.find('.errorMessage').text()).toEqual('YOUR INFORMATION IS NOT CORRECT. PLEASE RETRY!');    
  })


    fit('should NOT show error message when input is set as a valid value', () => {
    const wrapper = shallowMount(Mexico);
    expect(wrapper.exists()).toBe(true);
    // let inputValue = wrapper.find('.inputField');
     wrapper.setData({firstName:'roberta'});
    console.log("input value", wrapper.vm.firstName);
    // inputValue.element.value = 'Shit';
  //   console.log("input valuee", inputValue);
   
  //   inputValue.trigger('input');
  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.vm.firstName).toBe('shit')
  //   }) 
    expect(wrapper.vm.firstName).toBe('Roberta');

    wrapper.find('.showPrice').trigger('click');
    // let error = wrapper.find('.errorMessage');
    // console.log("this is the error state:", error);

    expect(wrapper.vm.errorMessage.exists()).toBe(false);
  })




  // fit('should NOT show error message when input is set as a valid value', done => {
  //   const wrapper = shallowMount(Mexico);
  //   let inputValue = wrapper.find('.inputField');
  //   // let expectedFirstName = "stringSample";
  //   // inputValue.setValue(expectedFirstName);

  //   wrapper.setData({firstName:'Shit'})
  //   // inputValue.element.value = 'Shit';
  //   console.log("input valuee", inputValue);
   
  //   inputValue.trigger('input');
 
  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.vm.firstName).toBe('shit')
  //   }) 
  //  wrapper.find('.showPrice').trigger('click');
  //   // expect(wrapper.vm.firstName).toBe(expectedFirstName);
  //   expect(wrapper.find('.errorMessage').exists()).toBe(false);
  //   done();
  // })
})




  describe('Mexico', () => {
    it('increments counter value when button is clicked', () => {
      // let vuetify = new Vuetify();
      const wrapper = shallowMount(Mexico, {
        // vuetify
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
    it('cheks that radio button for bedroom SYZE is selected', () => {
      const wrapper = shallowMount(Mexico);
      const radio = wrapper.find('.radioButtonBedroomSize');
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

  describe('Payment', () => {
    it('cheks that prop exists in Payment Component', () => {
      let expectedProp = {
        name: 'roberta',
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
      expect(wrapper.find('.name').text()).toEqual('roberta');
    })
  });


