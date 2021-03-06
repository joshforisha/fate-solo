import * as React from "react";
import styled from "styled-components";
import { AspectView } from "~/view/aspect-view";
import { Entity } from "~/data/entity";
import { StressView } from "~/view/stress-view";
import {
  Action,
  addFatePoint,
  createAspect,
  createBoost,
  createStressTrack,
  deleteEntity,
  renameEntity,
  startEditing,
  subtractFatePoint,
} from "~/data/actions";

const Container = styled.div``;

const FatePoints = styled.span`
  background-color: var(--dark-blue);
  border-radius: 0.5rem;
  color: var(--white);
  display: inline-block;
  font-size: 0.5rem;
  font-weight: 700;
  height: 1rem;
  line-height: 1rem;
  margin-left: var(--tiny);
  text-align: center;
  width: 1rem;
`;

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
        name: "Aspect",
        icon: "plus",
        action: () => {
          const name = window.prompt("Aspect name:");
          if (name) dispatch(createAspect(entity.id, name));
        },
      },
      {
        name: "Boost",
        icon: "plus",
        action: () => {
          const name = window.prompt("Boost name:");
          if (name) dispatch(createBoost(entity.id, name));
        },
      },
      {
        name: "Delete",
        icon: "minus",
        action: () => {
          const confirmed = window.confirm("Are you sure?");
          if (confirmed) dispatch(deleteEntity(entity.id));
        },
      },
      {
        name: "Fate Point",
        icon: "plus",
        action: () => {
          dispatch(addFatePoint(entity.id));
        },
      },
      {
        name: "Fate Point",
        icon: "minus",
        action: () => {
          dispatch(subtractFatePoint(entity.id));
        },
      },
      {
        name: "Rename",
        icon: "edit",
        action: () => {
          const newName = window.prompt(`New name for “${entity.name}”:`);
          if (newName) {
            dispatch(renameEntity(entity.id, newName));
          }
        },
      },
      {
        name: "Stress Track",
        icon: "plus",
        action: () => {
          const trackName = window.prompt("Track name:");
          if (trackName) {
            const ratingsString = window.prompt("Ratings string (e.g. '123'):");
            if (ratingsString) {
              dispatch(
                createStressTrack(
                  entity.id,
                  trackName,
                  Array.prototype.map.call(ratingsString, (s) => s)
                )
              );
            }
          }
        },
      },
    ];
    dispatch(startEditing(entity.name, actions));
  }

  const fatePoints =
    entity.fatePoints > 0 ? <FatePoints>{entity.fatePoints}</FatePoints> : null;

  const stress = entity.tracks.map((track) => (
    <StressView track={track} dispatch={dispatch} key={track.id} />
  ));

  const aspectViews = entity.aspects.map((aspect) => (
    <AspectView aspect={aspect} dispatch={dispatch} key={aspect.id} />
  ));

  return (
    <Container>
      <Name onClick={onClick}>
        {entity.name}
        {fatePoints}
      </Name>
      {stress}
      {aspectViews}
    </Container>
  );
}
