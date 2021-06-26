const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPageTemplate = path.resolve(`src/templates/post.js`);

  return graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `).then(res => {

    if (res.errors) return Promise.reject(res.errors);

    // create a blog post page
    const posts = res.data.allMarkdownRemark.nodes;

    posts.forEach(post => {
      createPage({
        path: `${post.frontmatter.slug}`,
        component: postPageTemplate,
        context: {
          id: post.id
        }
      })
    })
  })
}