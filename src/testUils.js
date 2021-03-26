import checkPropTypes from 'check-prop-types';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/index';
/**
 * 
 * @param {*} initialState 
 * @returns 
 */
export const storeFactory = (initialState)=>{
   return createStore(rootReducer,initialState);
}
/**
 * 
 * @param {*} wrapper 
 * @param {*} val 
 * @returns shallowWrapper
 */
export const findByTestAttr = (wrapper,val)=>{
   return  wrapper.find(`[data-test="${val}"]`);

}
export const checkProps= (component,confirmingProps)=>{

   const propError = checkPropTypes(component.propTyps,confirmingProps,'props',component.name)
   expect(propError).toBeUndefined();
}