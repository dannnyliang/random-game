import { Button, Container, Typography } from '@material-ui/core'

import React from 'react'
import questions from '../static/questions'
import styled from 'styled-components'
import useRandomPop from '../useRandomPop'

const StyledContainer = styled(Container)`
  border: 1px solid #000;
  display: flex;
  align-items: center;
`

const QuestionMode = () => {
  const { isInit, item: question, pop } = useRandomPop(questions)

  return (
    <StyledContainer>
      <Typography variant="h1" gutterBottom>
        快問快答
      </Typography>
      {isInit ? <Button variant='outlined' onClick={() => pop()}>開始</Button> :
        <>
          <div>
            題目：{question}
          </div>
          <Button variant='contained' color='primary' onClick={() => pop()}>下一題</Button>
        </>
      }
    </StyledContainer>
  )
}

export default QuestionMode
