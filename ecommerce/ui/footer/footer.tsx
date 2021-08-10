import React from 'react';
import classNames from 'classnames';
import { Img, ImgProps } from '@learn-bit-react/base-ui.ui.img';
import {
  LogoText,
  LogoTextProps
} from '@learn-bit-react/ecommerce.ui.logo-text';
import { Nav } from '@learn-bit-react/base-ui.ui.nav';
import { Link } from '@learn-bit-react/base-ui.ui.link';

import styles from './footer.module.scss';

export type FooterProps = {} & React.HTMLAttributes<HTMLElement>;

export function Footer({
  className,
  alt,
  src,
  logoText,
  children
}: FooterProps & ImgProps & LogoTextProps) {
  return (
    <footer className={classNames(styles.footer, className)}>
      <div className={classNames(styles.logo, className)}>
        <Link href="/">
          <Img src={src} alt={alt} />
        </Link>
        <LogoText
          className={classNames(styles['logo-text'], className)}
          logoText={logoText}
        />
      </div>
      <Nav>{children}</Nav>
    </footer>
  );
}
