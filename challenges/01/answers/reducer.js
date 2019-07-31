import initial from "./initial";

// winning score
const aim = 21;

// alternate serves on
const alternate = 5;

// update score
const score = (state, { who }) => {
    return {
        ...state,
        [who]: state[who] + 1,
    };
};

// calculate server
const total = state => state.player1 + state.player2;
const serving = state => {
    return {
        ...state,
        serving: (Math.floor(total(state) / alternate) % 2) + 1,
    };
};

// check if a is bigger than aim
// and more than 1 ahead of b
const won = (a, b) => a >= aim && a - b > 1;

// work out the winner
const winner = state => {
    const p1 = state.player1;
    const p2 = state.player2;
    return {
        ...state,
        winner: won(p1, p2) ? 1 : (won(p2, p1) ? 2 : 0),
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        // function composition
        // for multiple behaviours on one action
        case "score": return winner(serving(score(state, action)));
        case "reset": return initial;
        default: return state;
    }
};

export default reducer;
