import { EnzymeAdapter } from 'enzyme';
import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from './testUils';
import GuessWords from './GuessWords';
const defaultProps = {
    guessedWords:[{guessedWord:'train',letterMatchCount:3}]
};
const setup =(props={})=>{
    const setupProps ={...defaultProps,...props}
    return shallow(<GuessWords {...setupProps}/>)
}
test('doest not throw warning with expected props',()=>{
    checkProps(GuessWords,defaultProps);
})


describe('if there are no words gussed',()=>{
    let wrapper;
   beforeEach(()=>{
    wrapper = setup({guessedWords:[]})
   })
    test('Render Without error',()=>{
    const component = findByTestAttr(wrapper,'component-gussed-words')
    expect(component.length).toBe(1)
   })

   test('Render instriuctions to guess a word',()=>{
       const instructions = findByTestAttr(wrapper,'guess-instructions');
       expect(instructions.text().length).not.toBe(0)
       
})


})

describe('if there are  words gussed',()=>{

    
})