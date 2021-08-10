import React from 'react';
import { MemoryRouter } from 'react-router';

import {
  mockProductList,
  mockProductList2,
  mockProductList3,
  mockProductList4
} from '@learn-bit-react/ecommerce.entity.product';

import { ProductCardGrid } from './product-card-grid';

export const BasicProductCardGrid = () => (
  <MemoryRouter>
    <ProductCardGrid list={mockProductList} />
  </MemoryRouter>
);

export const ProductCardGrid2 = () => (
  <MemoryRouter>
    <ProductCardGrid list={mockProductList2} />
  </MemoryRouter>
);

export const ProductCardGrid3 = () => (
  <MemoryRouter>
    <ProductCardGrid list={mockProductList3} />
  </MemoryRouter>
);

export const ProductCardGrid4 = () => (
  <MemoryRouter>
    <ProductCardGrid list={mockProductList4} />
  </MemoryRouter>
);
