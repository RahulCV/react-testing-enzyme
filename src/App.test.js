import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow } from 'enzyme';
import {findByTestAttr} from './testUils';
const setup = ()=>{
  return shallow(<App/>)
}
test('renderswithout error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,'component-App')
  expect(appComponent).toHaveLength(1);
});
