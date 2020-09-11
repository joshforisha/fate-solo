import "~/main.css";
import * as React from "react";
import styled from "styled-components";
import { ActionsPanel } from "~/view/actions-panel";
import { GameStory } from "~/view/game-story";
import { render } from "react-dom";
import { StatePanel } from "~/view/state-panel";
import { StateProvider } from "~/view/state-provider";

const MainView = styled.div`
  display: flex;
`;

function Main() {
  return (
    <MainView>
      <StateProvider>
        <ActionsPanel />
        <StatePanel />
        <GameStory />
      </StateProvider>
    </MainView>
  );
}

render(<Main />, document.getElementById("Root"));
