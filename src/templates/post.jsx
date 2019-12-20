import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark;
  const site = data.site.siteMetadata;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} - {post.frontmatter.subtitle} | blog.eatdesignlove.com</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:url" content={`${site.url}${post.fields.slug}`} />
        <meta property="og:title" content={`${post.frontmatter.title}`} />
        <meta property="og:description" content={`${post.frontmatter.subtitle}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={site.title} />
        <meta name="twitter:url" content={`${site.url}${post.fields.slug}`} />
        <meta name="twitter:title" content={`${post.frontmatter.title}`}/>
        <meta name="twitter:description" content={`${post.frontmatter.subtitle}`} />
      </Helmet>
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