import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductCardGrid } from './product-card-grid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProductCardGrid />);
  const rendered = getByText('Nike Air');
  expect(rendered).toBeTruthy();
});
