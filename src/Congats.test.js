import { render, screen } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import Congats from './Congats';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from './testUils';
Enzyme.configure({ adapter: new Adapter() });
const  setup = (props={})=>{
    return shallow(<Congats {...props}/>)
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