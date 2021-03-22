import {correctGuess} from './index';
import {actionTypes} from './index'
describe('coretGuess',()=>{

    test('returns action with ccorret actiontypes',()=>{

        const action = correctGuess();
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS});

    })

})
