import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Hello from '../../src/Hello'

test('has a .test class name', t => {
  const wrapper = shallow(<Hello />)
  t.true(wrapper.hasClass('test'))
})

