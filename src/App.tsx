import React from 'react';

import styled from 'styled-components';
import Box from './components/Box';

const Container = styled.div`
  display: grid;
  gap: 1rem;
  align-content: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;
