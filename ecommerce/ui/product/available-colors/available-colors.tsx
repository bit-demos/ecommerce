import React from 'react';
import classNames from 'classnames';
import styles from './available-colors.module.scss';

export type AvailableColorsProps = {
  /**
   * color of shoes available
   */
  availableColors: string[];
} & React.HTMLAttributes<HTMLElement>;

export function AvailableColors({
  availableColors,
  className
}: AvailableColorsProps) {
  return (
    <ul className={classNames(styles['color-list'], className)}>
      {availableColors.map((color) => {
        return (
          <li className={styles['color-list-item']} key={color}>
            <span className={styles['color-outer-circle']}>
              <span
                aria-label={color}
                data-testid={color}
                className={styles['color-circle']}
                style={{ backgroundColor: color }}></span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
