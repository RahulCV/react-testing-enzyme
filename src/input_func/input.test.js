import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from '../testUils';
import Input from './Input';
const setUp=(secretWord='party')=>{
    return shallow(<Input secretWord={secretWord}/>);
    }

    test('input renders without error',()=>{
        const wrapper = setUp();
        const inputComponent = findByTestAttr(wrapper,'component-input');
        expect(inputComponent.length).toBe(1);

    })
    test('Does not throw waring with expected props',()=>{
        checkProps(Input,{secretWord:[]});
    })