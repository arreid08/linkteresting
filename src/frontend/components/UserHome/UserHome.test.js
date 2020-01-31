import React from 'react'
import { shallow } from 'enzyme'
import UserHome from './index'


describe('User Home Here', () => {
    it('should have a H1 that Renders the Output of this.state.user.username', () => {
        const component = shallow(<UserHome/>)
        expect(component.contains( <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          {this.renderPage()}
        </div>
      </div>)).toBe(true)
      })
  })
