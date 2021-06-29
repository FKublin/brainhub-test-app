import React from 'react'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import EventForm from '../components/EventComponent'
import "@testing-library/jest-dom/extend-expect"
import {Field} from 'redux-form'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });


const mockStore = configureStore([]);
const mockSubmit = jest.fn();



describe('<EventForm /> ', () => {
    let wrapper;
    let submitting, touched, error, onSaveResponse, handleSubmit
    beforeEach(() => {

      submitting = false
      touched = false
      error = null
      onSaveResponse = Promise.resolve()
      handleSubmit = fn => fn

        // store = mockStore({
        //   firstName: 'John',
        //   lastName: 'Doe',
        //   email: 'johndoe@mail.com',
        //   eventDate: new Date('2023-03-02')
        // });

        const props = {
          
          
          fields: {
            firstName: {
              value: '',
              touched: touched,
              error: error
            },
            lastName: {
              value: '',
              touched: touched,
              error: error              
            },
            email: {
              value: '',
              touched: touched,
              error: error              
            },
            eventDate: {
              value: '',
              touched: touched,
              error: error              
            }
          },
          handleSubmit,

        }



        wrapper = shallow(
                <EventForm {...props} />
        )

      });

    it('defines the component', () => {
        expect(wrapper).toBeDefined();
    })

    it('renders the event form with 4 fields', () => {
        
        expect(wrapper.find(Field)).toHaveLength(4);
    })


})