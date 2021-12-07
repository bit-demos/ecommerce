import React from 'react';

import { ProductCard } from './product-card';

export const NikeProductCard = () => (
  <ProductCard
    title="Nike Air"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
    alt="Nike Air"
    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    price={190}
    buttonText="add to cart"
  />
);

export const ConverseProductCard = () => (
  <ProductCard
    title="Converse"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
    alt="Converse"
    src="https://images.unsplash.com/photo-1617606003139-c55e4485f78a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    price={140}
    buttonText="buy now"
    availableColors={['navy', 'red', 'black', 'white']}
  />
);

export const YeezyProductCard = () => (
  <ProductCard
    title="Yeezy"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
    alt="Converse"
    src="https://images.unsplash.com/photo-1603787081368-05588c2d65ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzM0fHxzbmVha2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    price={280}
    buttonText="I want it"
  />
);
