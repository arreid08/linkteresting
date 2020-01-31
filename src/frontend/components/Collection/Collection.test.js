import React from 'react'
import { shallow } from 'enzyme'
import Collection from './index'

describe('Collection Name Here', () => {
    it('Should Render New Link Button', () => {
        const component = shallow(<Collection/>)
        expect(component.contains(<button className="btn btn-dark btn-md mb-5">New Link</button>)).toBe(true)
      })
  })
