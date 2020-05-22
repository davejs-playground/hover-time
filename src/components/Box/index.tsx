import React from 'react';
import styled from 'styled-components';
import { useTimer } from './useTimer';
import Button from '../Button';

const StyledBox = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  --size: 200px;
  width: var(--size);
  height: var(--size);
  font-size: 2.5rem;
  font-family: monospace;
  background-color: pink;
`;

const Box = () => {
  const { time, start, stop, reset } = useTimer();
  return (
    <>
      <StyledBox onMouseEnter={start} onMouseLeave={stop}>
        {time}
      </StyledBox>
      <Button onClick={reset}>Reset</Button>
    </>
  );
};

export default Box;
