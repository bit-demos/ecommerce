import React from 'react';
import { ProductCard } from '@learn-bit-react/ecommerce.ui.product.product-card';
import classNames from 'classnames';
import { Product } from '@learn-bit-react/ecommerce.entity.product';
import styles from './product-card-grid.module.scss';

export type ProductCardGridProps = {
  /**
   * a list of products
   */
  list: Product[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ProductCardGrid({ list, className }: ProductCardGridProps) {
  return (
    <>
      {list.length > 0 ? (
        <div className={classNames(styles.grid, className)}>
          {list.map((product) => (
            <div
              className={classNames(styles['product-card'])}
              key={product.title}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      ) : (
        'No products to display'
      )}
    </>
  );
}
