import React from 'react';
import classNames from 'classnames';
import { ProductCardGrid } from '@learn-bit-react/ecommerce.ui.product.product-card-grid';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { Product } from '@learn-bit-react/ecommerce.entity.product';

import styles from './home-page.module.scss';

export type HomePageProps = {
  /**
   * text to be rendered in the heading
   */
  headingText: string;
  /**
   * background for the hero
   */
  background: string;
  /**
   * href for the link component
   */
  href: string;
  /**
   * text for the link component
   */
  linkText: string;
  /**
   * list of products to be rendered
   */
  list: Product[];
} & React.HTMLAttributes<HTMLElement>;

export function HomePage({
  className,
  list,
  headingText,
  href,
  linkText,
  background
}: HomePageProps) {
  return (
    <Layout>
      <StoreHero
        className={classNames(styles.hero, className)}
        background={background}
        headingText={headingText}
        href={href}
        linkText={linkText}
      />
      <ProductCardGrid className={styles.products} list={list} />
    </Layout>
  );
}
