import { graphql } from 'gatsby';
import React from 'react';
import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const post = data.markdownRemark;

  return (
    <Layout pageTitle={ siteTitle }>
      <h3>{ post.frontmatter.title }</h3>
      <p>{ post.frontmatter.date }</p>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug (
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`;

export default PostTemplate;