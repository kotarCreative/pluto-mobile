import React from 'react'
import renderer from 'react-test-renderer'

import { Login } from '../Login'

it('renders correctly with defaults', () => {
  const login = renderer
    .create(<Login />)
    .toJSON()
  expect(login).toMatchSnapshot()
});
