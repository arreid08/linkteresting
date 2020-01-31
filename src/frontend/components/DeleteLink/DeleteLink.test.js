//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import DeleteLink from './index'

// We will describe a block of tests
describe('Collection Name Here', () => {
	// we will write one individual test
    it('should have a Paragraph that says "Are you sure you want to delete this collection?"', () => {
        const component = shallow(<DeleteLink/>)
        expect(component.contains(<p>Are you sure you want to delete this link?</p>)).toBe(true)
      })
  })
