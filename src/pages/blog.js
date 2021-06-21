import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout pageTitle='My Blog Posts'>
      {posts.map(post => (
        <div>
          <h1>{ post.node.frontmatter.title }</h1>
          <sub>{ post.node.frontmatter.date }</sub>
          <sub>{ post.node.timeToRead } min</sub>
          { post.node.html }
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

export default BlogPage;