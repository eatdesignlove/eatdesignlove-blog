import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from "disqus-react";

import styles from './blog-post.module.scss';

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const {
        title,
        category,
        date
    } = post.frontmatter;
    const disqusShortname = "yourdisqusshortname";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.postHeader}>
                    <h1 className={styles.title}>{title}</h1>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.date}>{date}</span>
                </div>
                {!!post.frontmatter.image && (
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                )}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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