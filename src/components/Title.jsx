import { PrimaryDark, PrimaryLight } from "../static/color";
import useDevice, { DEVICE } from "../hooks/useDevice";

import PropTypes from "prop-types";
import React from "react";
import { Typography } from "@material-ui/core";
import { space } from "../static/space";
import styled from "styled-components";

const propTypes = {
  classNmae: PropTypes.string,
  content: PropTypes.string,
};

const defaultProps = {
  className: "",
  content: "",
};

const UnTitle = (props) => {
  const { device } = useDevice();

  return (
    <div className={props.className}>
      <Typography className="content" align="center" variant={device === DEVICE.DESKTOP ? 'h1' : 'h3'}>
        {props.content}
      </Typography>
    </div>
  );
};

const Title = styled(UnTitle)`
  width: 100%;
  padding: ${space.m} 0;
  margin-top: ${space.xl};
  background-color: ${PrimaryDark};

  .content {
    color: ${PrimaryLight};
    font-style: italic;
    font-weight: 400;
    transform: translateX(-6px);
  }
`;

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
