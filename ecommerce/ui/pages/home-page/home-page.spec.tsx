import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomePage } from './home-page.composition';

it('should render with the correct text', () => {
  const { getAllByText } = render(<BasicHomePage />);
  const rendered = getAllByText('Your Number 1 Online Shop');
  expect(rendered).toBeTruthy();
});
