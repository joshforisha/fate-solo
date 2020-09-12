import * as React from "react";
import styled from "styled-components";
import { Button } from "~/view/button";
import { createEntity } from "~/data/actions";
import { EntityView } from "~/view/entity-view";
import { Icon } from "~/view/icon";
import { useState } from "~/view/state-provider";

const AddEntityButton = styled(Button)`
  margin: var(--medium) var(--small) 0px;
  width: calc(100% - 2 * var(--small));
`;

const Panel = styled.div`
  background-color: var(--light-gray);
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: var(--small);
  width: 300px;
`;

export function StatePanel(): React.FC {
  const [{ entities }, dispatch] = useState();

  function addEntity() {
    const name = window.prompt("Entity name:");
    if (name) dispatch(createEntity(name));
  }

  return (
    <Panel>
      {entities.map((entity, i) => (
        <EntityView dispatch={dispatch} entity={entity} key={i} />
      ))}
      <AddEntityButton onClick={addEntity}>
        <Icon name="plus" /> Entity
      </AddEntityButton>
    </Panel>
  );
}
