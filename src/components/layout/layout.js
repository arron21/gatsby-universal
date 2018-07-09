import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import Transition from 'components/transition';

import 'reset.css.js';

const Layout = ({ data, children }) => (
  <div>
    <Head {...data.site.siteMetadata} />
    <Header title={data.site.siteMetadata.siteTitle} />
    <Transition>{children}</Transition>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
            siteTitleShort
            siteDescription
            themeColor
            social {
              twitter
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

export default LayoutWithQuery;
