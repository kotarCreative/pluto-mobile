import React from 'react'
import renderer from 'react-test-renderer'

import { SignUp } from '../SignUp'


it('renders correctly with defaults', () => {
  const signup = renderer
    .create(<SignUp />)
    .toJSON()
  expect(signup).toMatchSnapshot()
});
