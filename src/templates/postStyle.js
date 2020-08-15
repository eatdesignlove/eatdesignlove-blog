import styled from 'styled-components';
import { tokens } from '../components/eui';

const PostWrapper = styled.div`
  padding: 48px 0 80px;
  margin: 0 auto;
  width: 100%;
`;

const PostTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1.5;
  font-family: ${tokens.typography.type.ko};
  font-weight: 500;
  word-break: keep-all;
`;

const PostDesc = styled.p`
  margin-top: 8px;
  margin-bottom: ${tokens.spacing.s3};
  max-width: 480px;
  font-size: 20px;
  line-height: 1.5;
  font-family: ${tokens.typography.type.ko};
  color: #898989;
  word-break: keep-all;
`;

const PostInfo = styled.div`
    margin-bottom: ${tokens.spacing.s7};
    
    p {
      display: inline-block;
      margin-right: 16px;
      color: ${tokens.color.dark1};
      font-size: ${tokens.typography.size.caption2};
    }
`;

const PostContent = styled.div`
  padding-top: 40px;
  font-family: ${tokens.typography.type.ko};
  word-break: keep-all;

  h1 {
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 500;
  }

  h2 {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 500;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
  }

  p {
    margin: 0 0 40px;
    font-size: 17px;
    color: #333;
    line-height: 1.75;
  }

  blockquote {
    margin: 0 0 ${tokens.spacing.s7} ${tokens.spacing.s2};
    padding: ${tokens.spacing.s3} 0 ${tokens.spacing.s3} ${tokens.spacing.s5};
    border-left: 1px solid ${tokens.color.dark1};

    p {
      margin: 0;
      font-size: ${tokens.typography.size.display1};
      color: ${tokens.color.dark1};
      word-break: keep-all;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: block;
    margin-bottom: 8px;
    position: relative;
    padding: 0 0 0 1em;

    &::before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 4px;
      height: 4px;
      background-color: #333;
      content: '';
    }
  }
`;

const ContextPostLink = styled.div`
  position: relative;
  display: block;
  border-radius: 8px;
  padding: 16px 24px;
  background-color: #F1F4F8;
  font-family: ${tokens.typography.type.ko};

  a {
    display: block;
  }

  svg {
    position: absolute;
    transform: translateY(-50%);
  }

  ${(props) => props.dir === 'prev' && `
    padding-left: 64px;

    span, strong {
      text-align: left;
    }

    svg {
      top: 50%;
      left: ${tokens.spacing.s5};
    }
  `}

  ${(props) => props.dir === 'next' && `
      padding-right: 64px;

      span, strong {
        text-align: right;
      }

      svg {
        top: 50%;
        right: ${tokens.spacing.s5};
      }
  `}
`;

const ContextPostContent = styled.div`
  span {
    display: block;
    color: #A9A9A9;
    font-size: 13px;
  }

  strong {
    display: block;
    color: #333;
    font-size: 17px;
    font-weight: 500;
    word-break: keep-all;
  }
`;

const PostFooter = styled.div`
  margin-top: 80px;

  ul {
    list-style: none;
  }

  li {
    margin-bottom: ${tokens.spacing.s3};
  }
`;

export default  {
    PostWrapper,
    PostTitle,
    PostDesc,
    PostInfo,
    PostContent,
    ContextPostLink,
    ContextPostContent,
    PostFooter
}