import React from 'react'
import { shallow } from 'enzyme'
import UserHome from './index'


describe('User Home Here', () => {
    it('should have a Div that Renders the Output page', () => {
        const component = shallow(<UserHome/>)
        expect(component.contains(<div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          {this.renderPage()}
        </div>
      </div>)).toBe(true)
      })
  })
