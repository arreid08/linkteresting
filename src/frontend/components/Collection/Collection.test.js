//AddCollection.test.js
// Import React
import React from 'react'
import { shallow } from 'enzyme'
import Collection from './index'

// We will describe a block of tests
describe('Collection Name Here', () => {
	// we will write one individual test
    it('Should Render New Link Button', () => {
        const component = shallow(<Collection/>)
        expect(component.contains(<button className="btn btn-dark btn-md mb-5">New Link</button>)).toBe(true)
      })
  })
