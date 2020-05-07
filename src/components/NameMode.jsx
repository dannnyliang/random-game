import { Button, Container, Typography } from '@material-ui/core'

import React from 'react'
import names from '../static/names'
import styled from 'styled-components'
import useRandomPop from '../useRandomPop'

const StyledContainer = styled(Container)`
  border: 1px solid #000;
  display: flex;
  align-items: center;
`

const NameMode = () => {
  const { isInit, item: name, pop } = useRandomPop(names)

  return (
    <StyledContainer>
      <Typography variant="h1" gutterBottom>
        我的媽媽最美麗
      </Typography>
      {isInit ? <Button variant='outlined' onClick={() => pop()}>開始</Button> :
        <>
          <div>
            挑戰者：{name}
          </div>
          <Button variant='contained' color='primary' onClick={() => pop()}>下一題</Button>
        </>
      }
    </StyledContainer>
  )
}

export default NameMode
