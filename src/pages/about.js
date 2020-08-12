import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const AboutText = styled.p`
    margin-top: 28px;
    word-break: keep-all;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Noto Sans KR', sans-serif;
`;

const ContentBox = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;

    h3 {
        margin: 0 0 8px 0;
        display: inline-block;
        font-size: 16px;
        font-family: 'Space Mono', sans-serif;
    }

    ul {
        display: block;
        margin: 0;
        padding: 0;

        li {
            position: relative;
            margin: 0;
            padding: 24px 0 16px;
            list-style: none;
            border-bottom: 1px solid #dedede;

            p {
                margin: 0;
                span {
                    display: block;
                    font-size: 13px;
                }
            }
        }
    }
`;

const ExpDate = styled.p`
    position: absolute;
    right: 0;
    bottom: 16px;
    font-size: 13px;
    color: #a9a9a9;
`;

const AboutPage = ({ data, path }) => (
    <Layout currentPath={path}>
    <SEO title="Home" />
    <AboutText>
        아름답고 유용한 무언가를 
        만드는 일이 즐거워 디자인과 개발의 세계에 입문하게 
        되었습니다. 제가 만들고 기여하는 것들이
        조금이나마 세상을 더 즐겁고, 따듯하게 하는 영감이 되길 바랍니다.
    </AboutText>
    <ContentBox>
        <h3>Experience</h3>
        <ul>
            <li>
                <p>
                    Front-end Developer
                    <span>@Wadiz</span>
                </p>                
                <ExpDate>2017.09 - 2020.04</ExpDate>
            </li>
            <li>
                <p>
                    Front-end Developer
                    <span>@FastCampus</span>
                </p>
                <ExpDate>2017.09 - 2020.04</ExpDate>
            </li>
        </ul>
    </ContentBox>
  </Layout>
)

export default AboutPage
