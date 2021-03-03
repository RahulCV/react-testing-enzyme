/**
 * 
 * @param {*} wrapper 
 * @param {*} val 
 * @returns shallowWrapper
 */
export const findByTestAttr = (wrapper,val)=>{
   return  wrapper.find(`[data-test="${val}"]`);

}