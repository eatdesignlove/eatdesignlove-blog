import styled from 'styled-components';
import logo from "../../images/logo@2x.png"

const HeaderWrapper = styled.header`
  padding: 36px 30px 0;
  margin: 0 auto;
  max-width: 840px;
  width: 100%;
`;

const SimpleHeaderWrapper = styled(HeaderWrapper)`
  margin-top: 28px;
  padding-top: 8px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;

  button {
    display: block;
    margin-right: 24px;
    max-width: 24px;
    height: 24px;
    width: 100%;
  }

  ul {
    margin-top: -8px;
    padding: 0;
  }

  &::before {
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0;
    height: 48px;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255,255,0));
    content: '';
  }
`;

const BlogTitle = styled.p`
  font-size: 32px;

  a {
    text-decoration: none;
    color: #333;
  }

  strong {
    margin-left: -4px;
  }

  span {
    margin-top: 12px;
    font-size: 13px;
    display: block;
  }
`;

const EatdesignloveDesc = styled.p`
  margin-top: 24px;
  margin-bottom: 48px;
  font-size: 16px;
`;

const EatdesignloveLogo = styled.h1`
  display: inline-block;
  margin-left: -4px;
  margin-bottom: 8px;
  margin-right: 16px;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
  overflow: hidden;
  padding: 0;
  border: 0;
  background-color: transparent;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default {
    HeaderWrapper,
    BlogTitle,
    EatdesignloveDesc,
    EatdesignloveLogo,
    SimpleHeaderWrapper
}