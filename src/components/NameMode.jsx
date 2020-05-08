import { Button, Container, Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import Title from "./Title";
import bodyParts from "../static/bodyParts";
import names from "../static/names";
import { space } from "../static/space";
import styled from "styled-components";
import useRandomPop from "../useRandomPop";

const propTypes = {
  classNmae: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  className: "",
};

const UnStyledNameMode = (props) => {
  const { className, title } = props;
  const { isInit, item: name, pop: popName } = useRandomPop(names);
  const { item: bodyPart, pop: popBodyPart } = useRandomPop(bodyParts);

  return (
    <div className={className}>
      <Title content={title} />
      <Container className="container" maxWidth="md">
        {isInit ? (
          <Button variant="outlined" onClick={() => popName()}>
            開始
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => popName()}
            >
              下一位
            </Button>
            <Typography gutterBottom>挑戰者</Typography>
            <Typography variant="h3">{name}</Typography>
          </>
        )}
        <Button variant="contained" color="secondary" onClick={() => popBodyPart()}>
          抽部位
        </Button>
        <Typography variant="h3">{bodyPart}</Typography>
      </Container>
    </div>
  );
};

UnStyledNameMode.propTypes = propTypes;
UnStyledNameMode.defaultProps = defaultProps;

const NameMode = styled(UnStyledNameMode)`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;

    > button {
      margin: ${space.xl} 0;
    }
  }
`;

export default NameMode;
