import React from 'react';
import classNames from 'classnames';
import styles from './price.module.scss';

export type PriceProps = {
  /**
   * a price to be rendered in the component.
   */
  price: number;
} & React.HTMLAttributes<HTMLDivElement>;

export function Price({ price, className }: PriceProps) {
  return <div className={classNames(styles.price, className)}>${price}</div>;
}
