import React from 'react'
import { shallow } from 'enzyme'
import AddLink from './index'

describe('Adding Link Testing', () => {
    it('should have a header that says "Add a new link"', () => {
        const component = shallow(<AddLink/>)
        expect(component.contains(<h6 className="AddTitle">ADD LINK</h6>)).toBe(true)
      })
  })
