import { Button, Container, Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import Title from "./Title";
import questions from "../static/questions";
import { space } from "../static/space";
import styled from "styled-components";
import useRandomPop from "../useRandomPop";

const propTypes = {
  classNmae: PropTypes.string,
  title: PropTypes.string.isRequired
};

const defaultProps = {
  className: "",
};

const UnStyledQuestionMode = (props) => {
  const { className, title } = props;
  const { isInit, item: question, pop } = useRandomPop(questions);

  return (
    <div className={className}>
      <Title content={title} />
      <Container className="container" maxWidth="md">
        {isInit ? (
          <Button variant="outlined" onClick={() => pop()}>
            開始
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={() => pop()}>
            下一題
          </Button>
        )}
        {question && <Typography variant="h5">{question}</Typography>}
      </Container>
    </div>
  );
};

UnStyledQuestionMode.propTypes = propTypes;
UnStyledQuestionMode.defaultProps = defaultProps;

const QuestionMode = styled(UnStyledQuestionMode)`
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

export default styled(QuestionMode)``;
