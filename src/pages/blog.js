import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { boxArticle, content } from "./blog.module.css";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout pageTitle='My Blog Posts'>
      {posts.map(post => (
        <div key={post.node.id} className={boxArticle}>
          <h3>
            { post.node.frontmatter.title }
          </h3>
          <div 
            className={content} 
            dangerouslySetInnerHTML={{ __html: post.node.html }}
          />
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
          frontmatter {
            title
            slug
            date
          }
          html
        }
      }
    }
  }
`;

export default BlogPage;