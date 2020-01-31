import React from 'react'
import { shallow } from 'enzyme'
import DeleteLink from './index'

describe('Collection Name Here', () => {
    it('should have a Paragraph that says "Are you sure you want to delete this collection?"', () => {
        const component = shallow(<DeleteLink/>)
        expect(component.contains(<p>Are you sure you want to delete this link?</p>)).toBe(true)
      })
  })
