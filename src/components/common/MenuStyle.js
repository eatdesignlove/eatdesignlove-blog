import styled from 'styled-components';

const MenuList = styled.ul`
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0 30px;
  background: #fff;
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
  
  ${(props) => props.isShadow && `
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
  `}
  

  li {
    font-weight: bold;
    padding: 0;
    margin: 0 30px 0 0;
    display: inline-block;
  }

  a {
    display: inline-block;
    padding: 8px 0;
    position: relative;
  }
`;

const MenuLink = styled.span`
  color: #C9C9C9;

  ${(props) => props.isActive && `
    color: #333;

    &::after {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      height: 1px;
      background: #333;
      content: '';
    }
  `}
`;

export default {
    MenuList,
    MenuLink
}