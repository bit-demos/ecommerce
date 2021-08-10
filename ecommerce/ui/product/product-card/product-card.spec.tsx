import React from 'react';
import { render } from '@testing-library/react';
import { NikeProductCard } from './product-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<NikeProductCard />);
  const rendered = getByText('Nike Air');
  expect(rendered).toBeTruthy();
});
