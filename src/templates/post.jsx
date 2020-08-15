import React, { useEffect } from "react"
import SEO from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { Link } from 'gatsby';

import CommonLayout from '../components/layout';
import { Icon } from '../components/eui';
import UI from './postStyle';


export default ({ data, path, pathContext }) => {
  const post = data.markdownRemark;
  const site = data.site.siteMetadata;
  const { next, prev } = pathContext;
  useEffect(() => {
    deckDeckGoHighlightElement();
  }, []);
  return (
    <CommonLayout currentPath={path} isSimpleHeader>
      <SEO
        lang="ko"
        description={post.frontmatter.subtitle}
        title={`${post.frontmatter.title} - ${post.frontmatter.subtitle} | eatdesignlove.com / blog`}
      />
      <UI.PostWrapper>
        <UI.PostTitle>
          {post.frontmatter.emoji}<br />
          {post.frontmatter.title}
        </UI.PostTitle>
        <UI.PostDesc>{post.frontmatter.subtitle}</UI.PostDesc>
        <UI.PostInfo>
          <p>{post.frontmatter.category}</p>
          <p>{post.frontmatter.date}</p>
        </UI.PostInfo>
        <UI.PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <UI.PostFooter>
          <ul>
            <li>
              {next && (
              <Link href={next.fields.slug}>
                <UI.ContextPostLink  dir="next">
                  <UI.ContextPostContent>
                    <span>이전 글</span>
                    <strong>{next.frontmatter.title}</strong>
                  </UI.ContextPostContent>
                  <Icon name="arrow-right" />
                </UI.ContextPostLink>
              </Link>
            )}
            </li>
            <li>
              {prev && (
                <Link href={prev.fields.slug}>
                  <UI.ContextPostLink dir="prev">
                    <Icon name="arrow-left" />
                    <UI.ContextPostContent>
                      <span>다음 글</span>
                      <strong>{prev.frontmatter.title}</strong>
                    </UI.ContextPostContent>
                  </UI.ContextPostLink>
                </Link>
              )}
            </li>
          </ul>
        </UI.PostFooter>
      </UI.PostWrapper>
    </CommonLayout>
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
        emoji
        title
        date
        subtitle
        category
      }
      fields {
        slug
      }
    }
  }
`