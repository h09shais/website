import React, { FC, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Reset } from 'styled-reset';
import { BaseCSS } from 'styled-bootstrap-grid';

import { Header } from './header';
import { GlobalStyles } from './global-styles';
import { RecaptchaInit } from '@components/recaptcha';

export const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Reset />
      <GlobalStyles />
      <RecaptchaInit />
      <BaseCSS />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Nabo NGO</footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
