import checkPropTypes from 'check-prop-types';
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