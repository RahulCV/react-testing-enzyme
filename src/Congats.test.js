import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import Congats from './Congats';
import {findByTestAttr,checkProps} from './testUils';
import checkPropTypes from 'check-prop-types';

const defaultProps  ={success:false};
const  setup = (props={})=>{
    const setUpProps = {...defaultProps,...props}
    return shallow(<Congats {...setUpProps}/>)
}
test('Render without error',()=>{

 const wrapper = setup();
 const component = findByTestAttr(wrapper,'component-congrats')
 expect(component.length).toBe(1);
});
test('Render no text when success prop is false',()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.text()).toBe('')

});
test('Renders non empty congrats message',()=>{

    const wrapper = setup({success:true});
    const message = findByTestAttr(wrapper,'congrats-message')
    expect(message.text().length).not.toBe(0);
});

test('Does not hrow wari=ning expected props',()=>{

    const expectedProps ={success:false};
    checkProps(Congats,expectedProps)
    // const propError = checkPropTypes(Congats.proptypes,expectedProps,'prop', Congats.name);
    // expect(propError).toBeUndefined();
})