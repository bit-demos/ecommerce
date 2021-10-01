import React from 'react';
import classNames from 'classnames';

import styles from './currency.module.scss';

export type CurrencyProps = {
  /**
   * the currency
   */
  currency?: '$' | '€';
  /**
   * the price
   */
  price: number;
} & React.HTMLAttributes<HTMLDivElement>;

export function Currency({ price, currency = '$', className }: CurrencyProps) {
  return (
    <div
      className={classNames(styles.price, className)}
      data-testid="test-currency"
    >
      {currency} {price}
    </div>
  );
}
