//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import DeleteCollection from './index'

// We will describe a block of tests
describe('Collection Name Here', () => {
	// we will write one individual test
    it('should have a header that says "Are you sure you want to delete this collection?"', () => {
        const component = shallow(<DeleteCollection/>)
        expect(component.contains(<p>Are you sure you want to delete this collection?</p>)).toBe(true)
      })
  })
