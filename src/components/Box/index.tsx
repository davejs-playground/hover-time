import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  --size: 200px;
  width: var(--size);
  height: var(--size);
  font-size: 2rem;
  background-color: pink;
`;

const Box = () => {
  return <StyledBox>0</StyledBox>;
};

export default Box;
