// components/__tests__/Hello.tsx
import React from 'react'
import renderer from 'react-test-renderer'

import { TextInput } from '../TextInput'

it('renders correctly with defaults', () => {
  const input = renderer
    .create(<TextInput placeholder="test" />)
    .toJSON()
  expect(input).toMatchSnapshot()
});
