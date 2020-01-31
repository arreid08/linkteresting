//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import AddLink from './index'

// We will describe a block of tests
describe('Adding Link Testing', () => {
	// we will write one individual test
    it('should have a header that says "Add a new link"', () => {
        const component = shallow(<AddLink/>)
        expect(component.contains(<h6 className="ALTitle">ADD LINK</h6>)).toBe(true)
      })
  })
