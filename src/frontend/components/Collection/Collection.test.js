//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import Collection from './index'

// We will describe a block of tests
describe('Collection Name Here', () => {
	// we will write one individual test
    it('should have a header that says "Collection Name Here"', () => {
        const component = shallow(<Collection/>)
        expect(component.contains(<h4>Collection Name Here</h4>)).toBe(true)
      })
  })
