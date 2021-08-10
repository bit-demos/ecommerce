import React from 'react';
import { MemoryRouter } from 'react-router';
import { About } from './about';

export const BasicAbout = () => (
  <MemoryRouter>
    <About
      headingText="About our Online Store"
      background="url(https://images.unsplash.com/photo-1592860986140-d77ede8b7116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)
    no-repeat center center scroll"
      href="/"
      linkText="Shop Now"
    />
  </MemoryRouter>
);
