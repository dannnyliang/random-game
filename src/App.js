import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import NameMode from './components/NameMode';
import { Primary } from './static/color';
import QuestionMode from './components/QuestionMode';
import RestoreIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

const StyledBottomNavigation = styled(BottomNavigation)`
  position: absolute;
  width: 100%;
  bottom: 0;
`

const Container = styled.div`
  height: 100vh;
  background-color: ${Primary};
`

const modeMap = {
  NAME: {
    component: NameMode,
    title: '我的媽媽最美麗'
  },
  QUESTION: {
    component: QuestionMode,
    title: '快問快答'
  }
}

const MODE = {
  NAME: 'NAME',
  QUESTION: 'QUESTION'
}

function App() {
  const [mode, setMode] = useState(MODE.NAME)
  const ModeComponent = modeMap[mode].component

  return (
    <Container>
      <ModeComponent title={modeMap[mode].title} />

      <StyledBottomNavigation
        value={mode}
        onChange={(event, newValue) => setMode(newValue)}
        showLabels
      >
        <BottomNavigationAction value={MODE.NAME} label={modeMap.NAME.title} icon={<RestoreIcon />} />
        <BottomNavigationAction value={MODE.QUESTION} label={modeMap.QUESTION.title} icon={<LocationOnIcon />} />
      </StyledBottomNavigation>
    </Container>
  );
}

export default App;
