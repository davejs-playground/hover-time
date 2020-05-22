import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1em 2em;
  appearance: none;
`;

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <StyledButton type="button" {...props} />
);

export default Button;
