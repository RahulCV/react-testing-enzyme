import React from 'react';
import {mount} from 'enzyme';
import App from './App';
import {findByTestAttr} from './testUils';
const setup = (state={})=>{
        const wrapper = mount(<App/>)
        //Add value to input box
        const inputBox = findByTestAttr(wrapper,'input-box');
        inputBox.simulate('change',{target:{value:'train'}});
        const submitBtn = findByTestAttr(wrapper,'sumit-button');
        submitBtn.simulate('click',{preventDefault:()=>{}});
        return wrapper;
    }
    describe('no words guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setup({
                success:false,
                secretWord:'party',
                guessedWords:[]
            })
        })
        test('Creates guessedWords table with one row',()=>{
         const guessedWordsRows = findByTestAttr(wrapper,'guessed-word');
         expect(guessedWordsRows).toHaveLength(1);  
        })

    });
    describe('Some words guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setup({
                success:false,
                secretWord:'party',
                guessedWords:[{guessedWord:'agile',letterMatchCount:1}]
            });
        }) ;
        test('adds row to the guessedWord table',()=>{
            const guessedWordNodes = findByTestAttr(wrapper,'guessed-word')
            expect(guessedWordNodes).toHaveLength(2);
        })


    });
    describe('Guess secret word',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper=setup({
                success:false,
                secretWord:'party',
                guessedWords:[{guessedWord:'party',letterMatchCount:1}]
            });
        }) ;
        const inputBox =findByTestAttr(wrapper,'input-box');
        let mockEvent ={target:{ value:'party'}};
        inputBox.simulate('change',mockEvent);
        const submitbutton = findByTestAttr(wrapper,'submit-button');
        submitbutton.simulate('click',{preventDefault:()=>{}});
        test('add row to guessedword table',()=>{
            const guessedWordNodes = findByTestAttr(wrapper,'guessed-word');
            expect(guessedWordNodes).toHaveLength(3);
        })
        test('display congrats component ',()=>{
            const congrats = findByTestAttr(wrapper,'component-congrats');
            expect(congrats.text().length).toBeGreaterThan(0);
        })
        test('display congrats component ',()=>{
            const submitButton = findByTestAttr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(false);

        })

    });

