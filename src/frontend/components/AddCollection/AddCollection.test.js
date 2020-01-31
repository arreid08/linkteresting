import React from 'react'
import { shallow } from 'enzyme'
import AddCollection from './index'

describe('Adding Collection Testing', () => {
    it('should have a header that says "Add a new collection"', () => {
        const component = shallow(<AddCollection/>)
        expect(component.contains(<h6 className="AddTitle">Add Collection</h6>)).toBe(true)
      })
  })
