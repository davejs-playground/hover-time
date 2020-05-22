import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1.5em 2.5em;
  color: var(--purple);
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid var(--purple);
  border-radius: 2rem;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <StyledButton type="button" {...props} />
);

export default Button;
