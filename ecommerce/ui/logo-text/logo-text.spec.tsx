import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogoText } from './logo-text.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLogoText />);
  const rendered = getByText('Bit Sports');
  expect(rendered).toBeTruthy();
});
