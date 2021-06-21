import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { banner } from "./blog.module.css";

const BlogPage = ({ data }) => {
  const posts = data.allStrapiBlogs.edges;
  const apiURL = "http://localhost:1337"
  return (
    <Layout pageTitle='My Blog Posts'>
      {posts.map(post => (
        <div key={post.node.id}>
          <h3>{ post.node.title }</h3>
          <img className={banner} src={ apiURL + post.node.banner_picture.url } alt={ post.node.banner_picture.name } />
          { post.node.body }
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiBlogs {
      edges {
        node {
          id
          title
          body
          banner_picture {
            name
            url
          }
        }
      }
    }
  }
`;

export default BlogPage;