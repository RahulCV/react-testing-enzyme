
import {aactionTypes, actionTypes} from '../actions';
import succesReducer from './successReducer';
test('Returns default initial state false no actio triggered',()=>{
 const newState = succesReducer(undefined,{});
 expect(newState).toBe(false); 
})
test('returns state of true upon receving action of type correct guess',()=>{
    const newState = succesReducer(undefined,{type:actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});