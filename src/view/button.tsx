import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: var(--dark-blue);
  border-radius: var(--tiny);
  border-width: 0px;
  color: var(--white);
  cursor: pointer;
  display: flex;
  font-size: 0.8em;
  height: 44px;
  justify-content: center;
  padding: var(--tiny) var(--small);
  text-transform: uppercase;
  transition: background-color 100ms ease-in-out;
  width: 100%;

  &:hover {
    background-color: var(--darker-blue);
  }
`;
