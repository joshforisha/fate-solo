import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--dark-blue);
  border-radius: var(--tiny);
  border-width: 0px;
  color: var(--white);
  cursor: pointer;
  display: block;
  font-size: 1em;
  height: 44px;
  padding: var(--tiny) var(--small);
  transition: background-color 100ms ease-in-out;
  width: 100%;

  &:hover {
    background-color: var(--darker-blue);
  }
`;
