import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ data }) => {
  const post = data.markdownRemark;
  const site = data.site.siteMetadata;
  return (
    <Layout>
      <SEO
        description={post.frontmatter.subtitle}
        lang="ko"
        title={`${post.frontmatter.title} - ${post.frontmatter.subtitle} | blog.eatdesignlove.com`}
      />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.subtitle}</p>
        {post.frontmatter.tags.map(item => (<span>{item}</span>))}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        tags
      }
      fields {
        slug
      }
    }
  }
`