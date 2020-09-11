import * as React from "react";
import styled from "styled-components";
import { EntityView } from "~/view/entity-view";
import { useState } from "~/view/state-provider";

const Panel = styled.div`
  border-right: 1px solid var(--dark-blue);
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: var(--small);
  width: 300px;
`;

export function StatePanel(): React.FC {
  const [{ entities }, dispatch] = useState();

  return (
    <Panel>
      {entities.map((entity, i) => (
        <EntityView dispatch={dispatch} entity={entity} key={i} />
      ))}
    </Panel>
  );
}
