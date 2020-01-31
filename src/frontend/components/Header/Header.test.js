import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Collection Name Here', () => {
    it('should have a header that says "Linkteresting"', () => {
        const component = shallow(<Header/>)
        expect(component.contains( <h1>|Linkteresting|</h1>)).toBe(true)
      })
  })
