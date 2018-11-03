import React from 'react'
import renderer from 'react-test-renderer'

import { Button } from '../Button';
import { ViewWithBg } from '../ViewWithBg'

it('renders correctly with defaults', () => {
  const view = renderer
    .create(<ViewWithBg><Button title="Hello"/></ViewWithBg>)
    .toJSON()
  expect(view).toMatchSnapshot()
});
