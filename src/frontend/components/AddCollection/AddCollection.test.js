//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import AddCollection from './index'

// We will describe a block of tests
describe('Adding Collection Testing', () => {
	// we will write one individual test
    it('should have a header that says "Add a new collection"', () => {
        const component = shallow(<AddCollection/>)
        expect(component.contains(<h4>Add a new collection</h4>)).toBe(true)
      })
  })
