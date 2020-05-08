import { PrimaryDark, PrimaryLight } from "../static/color";

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
  content: ""
};

const UnTitle = (props) => (
  <div className={props.className}>
    <Typography className="content" align="center" variant="h1">
      {props.content}
    </Typography>
  </div>
);

const Title = styled(UnTitle)`
  width: 100%;
  padding: ${space.m} 0;
  margin-top: ${space.xl};
  background-color: ${PrimaryDark};

  .content {
    color: ${PrimaryLight};
    font-style: italic;
    font-weight: 400;
  }
`;

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
