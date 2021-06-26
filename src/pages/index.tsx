/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

import Layout from "@components/layout";
import { SEO } from "@components";

import ColumnContainer from "../components/layout/ColumnContainer";

const IndexPage = () => {
  const { languages, changeLanguage } = useI18next();
  return (
    <Layout>
      <SEO title="Home" />
      <ColumnContainer>
        <h1>
          <Trans>Code and live in Chile Chico</Trans>
        </h1>
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}
              >
                {lng}
              </a>
            </li>
          ))}
        </ul>
      </ColumnContainer>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
