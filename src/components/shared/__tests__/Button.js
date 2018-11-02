// components/__tests__/Hello.tsx
import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../Button';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<Button title="Hello" onPress={() => 'test'} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
