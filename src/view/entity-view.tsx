import * as React from "react";
import styled from "styled-components";
import { AspectView } from "~/view/aspect-view";
import { Entity } from "~/data/entity";
import {
  Action,
  createAspect,
  createBoost,
  deleteEntity,
  startEditing,
} from "~/data/actions";

const Container = styled.div``;

const Name = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 44px;
  margin-top: var(--small);
  padding: 0px var(--small);
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: var(--pale-blue);
  }
`;

interface Props {
  dispatch: React.Dispatch<Action>;
  entity: Entity;
  key?: number | string;
}

export function EntityView({ dispatch, entity }: Props): React.FC {
  function onClick() {
    const actions = [
      {
        action: () => {
          const name = window.prompt("Aspect name:");
          if (name) dispatch(createAspect(entity.id, name));
        },
        icon: "plus",
        name: "Aspect",
      },
      {
        action: () => {
          const name = window.prompt("Boost name:");
          if (name) dispatch(createBoost(entity.id, name));
        },
        icon: "plus",
        name: "Boost",
      },
      {
        action: () => {
          const confirmed = window.confirm("Are you sure?");
          if (confirmed) dispatch(deleteEntity(entity.id));
        },
        icon: "minus",
        name: "Entity",
      },
    ];
    dispatch(startEditing(entity.name, actions));
  }

  const aspectViews = entity.aspects.map((aspect, i) => (
    <AspectView aspect={aspect} dispatch={dispatch} key={i} />
  ));

  return (
    <Container>
      <Name onClick={onClick}>{entity.name}</Name>
      {aspectViews}
    </Container>
  );
}
