import React from 'react';
import classNames from 'classnames';
import { Img, ImgProps } from '@learn-bit-react/base-ui.ui.img';
import {
  LogoText,
  LogoTextProps
} from '@learn-bit-react/ecommerce.ui.logo-text';
import { Nav } from '@learn-bit-react/base-ui.ui.nav';
import { ThemeToggler } from '@learn-bit-react/base-ui.ui.theme-toggler';
import { Link } from '@learn-bit-react/base-ui.ui.link';
import styles from './header.module.scss';

export type HeaderProps = {} & React.HTMLAttributes<HTMLElement>;

export function Header({
  className,
  alt,
  src,
  logoText,
  children
}: HeaderProps & ImgProps & LogoTextProps) {
  return (
    <header className={classNames(styles.header, className)}>
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
      <ThemeToggler />
    </header>
  );
}
