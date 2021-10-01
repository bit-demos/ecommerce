import React from 'react';
import { render } from '@testing-library/react';
import { BasicCurrency } from './currency.composition';

it('should render a price', () => {
  const { getByTestId } = render(<BasicCurrency />);
  const rendered = getByTestId('test-currency');
  expect(rendered).toContainHTML('120');
});

it('should render a currency', () => {
  const { getByTestId } = render(<BasicCurrency />);
  const rendered = getByTestId('test-currency');
  expect(rendered).toContainHTML('$');
});
