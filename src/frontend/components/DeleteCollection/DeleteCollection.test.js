import React from 'react'
import { shallow } from 'enzyme'
import DeleteCollection from './index'

describe('Collection Name Here', () => {
    it('should have a Paragraph that says "Are you sure you want to delete this collection?"', () => {
        const component = shallow(<DeleteCollection/>)
        expect(component.contains(<p className="dc-p">are you sure you want to delete this collection?</p>)).toBe(true)
      })
  })
