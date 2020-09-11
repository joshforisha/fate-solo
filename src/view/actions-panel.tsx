import * as React from "react";
import styled from "styled-components";
import { Button } from "~/view/button";
import { useState } from "~/view/state-provider";
import { stopEditing } from "~/data/actions";

const ActionButton = styled(Button)`
  margin-top: var(--small);
`;

const Backdrop = styled.div`
  align-items: center;
  background-color: var(--dark);
  display: flex;
  height: 100vh;
  justify-content: center;
  opacity: ${({ hidden }) => (hidden ? "0.0" : "1.0")};
  pointer-events: ${({ hidden }) => (hidden ? "none" : "auto")};
  position: absolute;
  transition: opacity 100ms ease-in-out;
  width: 100vw;
`;

const Panel = styled.div`
  background-color: var(--white);
  border-radius: var(--small);
  color: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  overflow-y: scroll;
  padding: var(--small) var(--medium);
  width: 280px;
`;

const Title = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  margin: 0px 0px var(--small);
  text-align: center;
`;

export function ActionsPanel(): React.FC {
  const [{ editing, editingActions, editingTitle }, dispatch] = useState();

  const actionButtons = Object.entries(editingActions).map(([action, fn]) => (
    <ActionButton onClick={fn} key={action}>
      {action}
    </ActionButton>
  ));

  function onClose(): void {
    dispatch(stopEditing());
  }

  return (
    <Backdrop hidden={!editing} onClick={onClose}>
      <Panel>
        <Title>{editingTitle}</Title>
        {actionButtons}
      </Panel>
    </Backdrop>
  );
}
