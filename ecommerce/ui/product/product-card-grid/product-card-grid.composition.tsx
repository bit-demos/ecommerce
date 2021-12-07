import React from 'react';

import {
  mockProductList,
  mockProductList2,
  mockProductList3,
  mockProductList4
} from '@learn-bit-react/ecommerce.entity.product';

import { ProductCardGrid } from './product-card-grid';

export const BasicProductCardGrid = () => (
  <ProductCardGrid list={mockProductList} />
);

export const ProductCardGrid2 = () => (
  <ProductCardGrid list={mockProductList2} />
);

export const ProductCardGrid3 = () => (
  <ProductCardGrid list={mockProductList3} />
);

export const ProductCardGrid4 = () => (
  <ProductCardGrid list={mockProductList4} />
);
