import * as React from "react";
import styled from "styled-components";
import { StressTrack } from "~/data/stress";
import {
  Action,
  deleteStressTrack,
  renameStressTrack,
  startEditing,
  toggleStressBox,
} from "~/data/actions";

const Box = styled.button`
  background-color: ${({ checked }) =>
    checked ? "var(--dark-blue)" : "var(--white)"};
  border: 2px solid var(--dark-blue);
  color: ${({ checked }) =>
    checked ? "rgb(255, 255, 255, 0.4)" : "var(--dark-blue)"};
  cursor: pointer;
  font-weight: 700;
  margin-left: var(--small);
  outline: none;
  transition: background-color 100ms ease-in-out;
  width: 24px;

  &:hover {
    background-color: ${({ checked }) =>
      checked ? "var(--darker-blue)" : "var(--pale-blue)"};
  }
`;

const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 44px;
  padding: 0px var(--medium);
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: var(--pale-blue);
  }
`;

const Name = styled.span`
  color: var(--dark-blue);
  font-weight: 700;
  font-variant: small-caps;
`;

interface Props {
  dispatch: React.Dispatch<Action>;
  key?: string;
  track: StressTrack;
}

export function StressView({ dispatch, track }: Props): React.FC {
  function onClick() {
    const actions = [
      {
        name: "Delete",
        icon: "minus",
        action: () => {
          const confirmed = window.confirm("Are you sure?");
          if (confirmed) dispatch(deleteStressTrack(track.id));
        },
      },
      {
        name: "Rename",
        icon: "edit",
        action: () => {
          const newName = window.prompt(`New name for “${track.name}”:`);
          if (newName) {
            dispatch(renameStressTrack(track.id, newName));
          }
        },
      },
    ];
    dispatch(startEditing(track.name, actions));
  }

  const boxes = track.boxes.map(({ checked, id, rating }) => {
    function toggle(e) {
      e.stopPropagation();
      dispatch(toggleStressBox(id));
    }

    return (
      <Box checked={checked} key={id} onClick={toggle}>
        {rating}
      </Box>
    );
  });

  return (
    <Container onClick={onClick}>
      <Name>{track.name}</Name>
      {boxes}
    </Container>
  );
}
