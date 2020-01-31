//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import Edit from './index'

// We will describe a block of tests
describe('Collection Name Here', () => {
	// we will write one individual test
    it('should have a header that says "You want to Edit?"', () => {
        const component = shallow(<Edit/>)
        expect(component.contains(<h4>Edit</h4>)).toBe(true)
      })
  })
