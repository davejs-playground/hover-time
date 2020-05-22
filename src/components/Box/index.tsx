import React from 'react';
import styled from 'styled-components';
import { useTimer } from './useTimer';
import Button from '../Button';

const StyledBox = styled.div`
  --size: 200px;
  --color: linear-gradient(45deg, var(--purple), var(--gray));

  display: grid;
  align-content: center;
  justify-content: center;

  width: var(--size);
  height: var(--size);
  font-size: 2.5rem;
  font-family: monospace;
  background: var(--color);
  border-radius: 2rem;
  animation-name: pulse;
  animation-duration: 2s;
  animation-play-state: paused;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:hover {
    animation-play-state: running;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(0.95);
    }
  }
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
