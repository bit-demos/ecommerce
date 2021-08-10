import React from 'react';
import classNames from 'classnames';
import styles from './logo-text.module.scss';

export type LogoTextProps = {
  /**
   * a text for the logo
   */
  logoText: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export function LogoText({ logoText, className }: LogoTextProps) {
  return (
    <span className={classNames(styles['logo-text'], className)}>
      {logoText}
    </span>
  );
}
