import React from 'react';
import classNames from 'classnames';
import { Layout } from '@learn-bit-react/base-ui.ui.layout';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import { About as AboutContent } from '@learn-bit-react/ecommerce.content.about';
import styles from './about.module.scss';

export type AboutProps = {
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
} & React.HTMLAttributes<HTMLElement>;

export function About({
  headingText,
  linkText,
  href,
  className,
  background
}: AboutProps) {
  return (
    <Layout>
      <StoreHero
        className={classNames(styles.hero, className)}
        background={background}
        headingText={headingText}
        href={href}
        linkText={linkText}
      />
      <div className={styles.content}>
        <AboutContent />
      </div>
    </Layout>
  );
}
