import * as React from "react";
import styled, { css } from "styled-components";
import { Action, deleteAspect, startEditing } from "~/data/actions";
import { Aspect } from "~/data/aspect";

const Container = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 44px;
  padding: 0px var(--medium);
  transition: background-color 50ms ease-in-out;

  ${({ isBoost }) =>
    isBoost &&
    css`
      font-style: italic;
      letter-spacing: 0.25px;
    `}

  &:hover {
    background-color: var(--pale-blue);
  }
`;

const FreeInvokes = styled.span`
  background-color: var(--dark);
  border-radius: 0.5rem;
  color: var(--light);
  display: inline-block;
  font-size: 0.5rem;
  font-weight: 700;
  height: 1rem;
  line-height: 1rem;
  margin-left: var(--tiny);
  text-align: center;
  width: 1rem;
`;

interface Props {
  aspect: Aspect;
  dispatch: React.Dispatch<Action>;
  key?: number | string;
}

export function AspectView({ aspect, dispatch }: Props): React.FC {
  const freeInvokeCount =
    aspect.freeInvokes > 0 ? (
      <FreeInvokes>{aspect.freeInvokes}</FreeInvokes>
    ) : null;

  function onClick() {
    const actions = [
      {
        action: () => {
          const confirmed = window.confirm("Are you sure?");
          if (confirmed) dispatch(deleteAspect(aspect.id));
        },
        icon: "minus",
        name: "Remove Aspect",
      },
    ];
    dispatch(startEditing(`“${aspect.name}”`, actions));
  }

  return (
    <Container onClick={onClick} isBoost={aspect.boost}>
      {aspect.name}
      {freeInvokeCount}
    </Container>
  );
}
