import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import NameMode from './components/NameMode';
import QuestionMode from './components/QuestionMode';
import RestoreIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

const StyledBottomNavigation = styled(BottomNavigation)`
  position: absolute;
  width: 100%;
  bottom: 0;
`

const Container = styled.div`
  /* height: 100vh; */
`

const modeMap = {
  NAME: NameMode,
  QUESTION: QuestionMode
}

const MODE = {
  NAME: 'NAME',
  QUESTION: 'QUESTION'
}

function App() {
  const [mode, setMode] = useState(MODE.NAME)
  const ModeComponent = modeMap[mode]

  return (
    <Container>
      <ModeComponent />

      <StyledBottomNavigation
        value={mode}
        onChange={(event, newValue) => setMode(newValue)}
        showLabels
      >
        <BottomNavigationAction value={MODE.NAME} label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction value={MODE.QUESTION} label="Nearby" icon={<LocationOnIcon />} />
      </StyledBottomNavigation>
    </Container>
  );
}

export default App;
