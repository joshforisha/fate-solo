import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--dark-blue);
  border-radius: var(--tiny);
  border-width: 0px;
  color: var(--white);
  cursor: pointer;
  font-size: 1em;
  height: 44px;
  padding: var(--tiny) var(--small);
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: var(--darker-blue);
  }
`;
