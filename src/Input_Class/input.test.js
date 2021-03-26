import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,storeFactory} from '../testUils';
import Input from './input';

const setUp = (initialState={})=>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>);
    console.log(wrapper.debug())
}
setUp()
describe('render',()=>{
    describe('Word is not guessed',()=>{
        test('Renders component without error',()=>{

        })
        test('Renders input box',()=>{

        })
        test('Renders submit button',()=>{

        })


    })
    describe('Word has been  guessed',()=>{
        test('Does not Renders component without error',()=>{

        })
        test('Does not Renders input box',()=>{

        })
        test('Does not Renders submit button',()=>{

        })
    })
});
describe('update state',()=>{

});