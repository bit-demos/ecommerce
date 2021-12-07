import React from 'react';
import classNames from 'classnames';
import { Button } from '@learn-bit-react/base-ui.ui.button';
import { Card } from '@learn-bit-react/base-ui.ui.card';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Text } from '@learn-bit-react/base-ui.ui.text';
import { Currency } from '@learn-bit-react/ecommerce.ui.product.currency';
import { Img } from '@learn-bit-react/base-ui.ui.img';
import { AvailableColors } from '@learn-bit-react/ecommerce.ui.product.available-colors';
import styles from './product-card.module.scss';

export type ProductCardProps = {
  /**
   * text for the link element styled as button
   */
  buttonText: string;
  /**
   * products price
   */
  price: number;
  /**
   * products image src
   */
  src: string;
  /**
   * products image alternative text
   */
  alt: string;
  /**
   * products description
   */
  text: string;
  /**
   * title of the product
   */
  title: string;
  /**
   * available colors of product
   */
  availableColors?: string[];
} & React.HTMLAttributes<HTMLElement>;

export function ProductCard({
  alt,
  src,
  title,
  text,
  price,
  buttonText,
  className,
  availableColors
}: ProductCardProps) {
  return (
    <Card className={styles.card}>
      <div className={classNames(styles['card-header'])}>
        <Heading element="h3" className={styles.heading}>
          {title}
        </Heading>
        <Text text={text} className={styles.text} />
      </div>
      <div className={classNames(styles['card-body'], className)}>
        <Img alt={alt} src={src} className={styles.img} />
      </div>
      <div className={classNames(styles['card-footer'], className)}>
        <Currency price={price} />
        {availableColors ? (
          <AvailableColors
            className={styles['available-colors']}
            availableColors={availableColors}
          />
        ) : null}
        <Button primary>{buttonText}</Button>
      </div>
    </Card>
  );
}
