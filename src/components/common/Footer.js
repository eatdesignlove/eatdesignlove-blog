import React from 'react';
import UI from './FooterStyle';

const Footer = () => {
    return (
        <UI.FooterWrapper>
          <UI.Copyright>
            ©{new Date().getFullYear()}, eatdesignlove
          </UI.Copyright>
        </UI.FooterWrapper>
    );
}

export default Footer;