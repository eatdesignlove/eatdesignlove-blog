import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from "disqus-react";
import { Helmet } from "react-helmet"

import styles from './blog-post.module.scss';

function BlogPost(props) {
    const post = props.data.markdownRemark;
    const {
        title,
        category,
        description,
        date
    } = post.frontmatter;
    const disqusShortname = "eatdesignlove-github-io";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    
    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta name="twitter:description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={post.frontmatter.image.childImageSharp.fluid} />
                <meta property="og:type" content="article" />
            </Helmet>
            <div className={styles.container}>
                <div className={styles.postHeader}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.date}>{date}</span>
                </div>
                {!!post.frontmatter.image && (
                    <Img
                        className={styles.titleImage}
                        fluid={post.frontmatter.image.childImageSharp.fluid}
                    />
                )}
                <div
                    className={styles.postContent}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>  
        </Layout>
    )
}
export default BlogPost;

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                date(formatString: "YYYY.MM.DD")
                category
                image {
                    childImageSharp {
                        resize(width: 1500, height: 1500) {
                            src
                        }
                        fluid(maxWidth: 786) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`