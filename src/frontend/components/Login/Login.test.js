//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import Login from './index'

// We will describe a block of tests
describe('Collection Name Here', () => {
	// we will write one individual test
    it('should have a header that says "Are you sure you want to delete this collection?"', () => {
        const component = shallow(<Login/>)
        expect(component.contains(<p>Linkteresting is a place to store all your bookmarks in categories so you never lose them.</p>)).toBe(true)
      })
  })
