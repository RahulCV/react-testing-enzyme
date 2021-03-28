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
const setUp=(secretWord='party')=>{
    return shallow(<Input secretWord={secretWord}/>);
    }
    /**
     * Use Destructured useState
     */
    jest.mock('react',()=>({
        ...jest.requireActual('react'),
        useState:(initialState)=>[initialState,mockSetCurrentGuess]

    }))

    test('input renders without error',()=>{
        const wrapper = setUp();
        const inputComponent = findByTestAttr(wrapper,'component-input');
        expect(inputComponent.length).toBe(1);

    })
    test('Does not throw waring with expected props',()=>{
        checkProps(Input,{secretWord:'party'});
    })


    describe('State controlled input field',()=>{
        test('State updates with value of input box upon change',()=>{

          
            React.useState =jest.fn(()=>["",mockSetCurrentGuess]);
            const wrapper = setUp();
            const inputBox = findByTestAttr(wrapper,'input-box');
            const mockEvent={target:{value:'train'}};
            inputBox.simulate("change",mockEvent);
            expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')

        })
    })