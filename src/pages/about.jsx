import React from 'react';
import Layout from '../components/layout';
import styles from './about.module.scss';

const About = () => (
  <Layout>
    <SEO
        title="About"
        keywords={[`eatdesignlove`, `inspiration`, `designer`, `design`, `front-end`]} />
    <div className={styles.container}>
      <h1 className={styles.title}>Hello,<br />I'm eatdesignlove.</h1>
      <p className={styles.desc}>안녕하세요.<br />영감이 우리 삶을 더 행복하게 만든다고 믿는 Inspiration Designer, 유정식입니다.</p>
      <p className={styles.desc}>
        일상을 즐기고, 삶을 디자인하고, 세상을 사랑하자라는 의미를 담아만든 닉네임 eatdesignlove를 사용합니다.
      </p>
      <p className={styles.desc}>
        재미있는 아이디어를 떠올리고 실제로 실행하는 과정을 통해 사람들에게 긍정적인 영감을 주는 것을 삶의 소명으로 느끼고, 기술과 디자인을 그 도구로 여깁니다.
      </p>
      <p className={styles.desc}>
        현재는 크라우드펀딩 서비스 와디즈에서 프론트엔드 개발을 하며 새로운 시대를 만드는 트렌디한 제품의 탄생을 돕고 있습니다.
      </p>
    </div>
    
  </Layout>
);

export default About;