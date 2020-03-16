import React from "react";
import ReactDOM from "react-dom";

import store from "./store";

import App from "./App";

const render = () => {
    let state = store.getState();

    // pass in state.value as a value prop
    ReactDOM.render(
        <App
            value={ state.value }
            serving= { state.serving }
            player1= { state.player1 }
            player2= { state.player2 }
            winner={ state.winner }
            handlePlayer1={ () => store.dispatch({ type: "SCORE", who: "player1" }) }
            handlePlayer2={ () => store.dispatch({ type: "SCORE", who: "player2" }) }
            handleReset={ () => store.dispatch({ type: "RESET" }) }
        />,
        document.getElementById("root")
    );
};

store.subscribe(render);
render();
