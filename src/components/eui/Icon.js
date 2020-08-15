import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { icons } from "./shared/icons";

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: currentColor;
`;

export function Icon({ name, ...props }) {
  return (
    <Svg viewBox="0 0 1024 1024" width="24px" height="24px" {...props}>
      <Path d={icons[name]} />
    </Svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
