import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from '../testUils';
import Input from './Input';
const mockSetCurrentGuess = jest.fn();
/**
 * 
 * @param {*} secretWord 
 * @returns 
 */
const setUp=(success=false,secretWord='party')=>{
    return shallow(<Input success={success} secretWord={secretWord}/>);
    }
    /**
     * Use Destructured useState
     */
    jest.mock('react',()=>({
        ...jest.requireActual('react'),
        useState:(initialState)=>[initialState,mockSetCurrentGuess]

    }))

  
    test('Does not throw waring with expected props',()=>{
        checkProps(Input,{secretWord:'party'});
    })
describe('render',()=>{
    describe('success is true ',()=>{
        let wrapper ;
        beforeEach(()=>{
            wrapper = setUp(true);
        })
        test('input renders without error',()=>{
            const wrapper = setUp();
            const inputComponent = findByTestAttr(wrapper,'component-input');
            expect(inputComponent.length).toBe(1);
    
        })
        test('input box does not show ',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(false);
        })
        test('submit btn does not show ',()=>{
            const submitBtn = findByTestAttr(wrapper,'submit-button');
            expect(submitBtn.exists()).toBe(false);
        })


    })
    describe('success is false ',()=>{
        let wrapper ;
        beforeEach(()=>{
            wrapper = setUp(false);
        })
        test('input renders without error',()=>{
            const wrapper = setUp();
            const inputComponent = findByTestAttr(wrapper,'component-input');
            expect(inputComponent.length).toBe(1);
    
        })
        test('input box  shows',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(true);
        })
        test('submit btn   shows ',()=>{
            const submitBtn = findByTestAttr(wrapper,'submit-button');
            expect(submitBtn.exists()).toBe(true);
        })

    })
})

    describe('State controlled input field',()=>{
        let  mockSetCurrentGuess=jest.fn();;
        let wrapper;
        let originalUseState ;
        beforeEach(()=>{
            mockSetCurrentGuess.mockClear();
            originalUseState = React.useState;
            React.useState = jest.fn(()=>["",mockSetCurrentGuess]);   
            wrapper = setUp();

        })
        afterEach(()=>{
            React.useState = originalUseState;
        })
        test('State updates with value of input box upon change',()=>{

          
            const inputBox = findByTestAttr(wrapper,'input-box');
            const mockEvent={target:{value:'train'}};
            inputBox.simulate("change",mockEvent);
            expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')

        })
        test('field is cleared upon submit btn click',()=>{
            const wrapper = setUp();
            const submitButton = findByTestAttr(wrapper,'submit-button');
            submitButton.simulate('click',{preventDefault:()=>{}});
            expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
        })
    })