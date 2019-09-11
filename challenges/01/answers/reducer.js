// some code contributed by Jonathan from cohort #13

// import initial, for reset
import initial from "./initial";


// important values

// winning score
const aim = 21;

// alternate serves on
const alternate = 5;


// helper functions

// is there a difference of 2 between points
const scoreGap = state => Math.abs(state.player1 - state.player2) >= 2;

// has the minimum winning score been reached
const winningScore = state => state.player1 >= aim || state.player2 >= aim;

// work out who's won
const getWinner = state => state.player1 > state.player2 ? 1 : 2;

// total of scores
const total = state => state.player1 + state.player2;


// reducer functions

// update score
const score = (state, { who }) => {
    return {
        ...state,
        [who]: state[who] + 1,
    };
};

// calculate server
const serving = state => {
    // if past winning score, then alternate every two serves
    const alt = winningScore(state) ? 2 : alternate;

    return {
        ...state,
        serving: (Math.floor(total(state) / alt) % 2) + 1,
    };
};

// work out who won
const winner = state => ({
    ...state,
    winner: scoreGap(state) && winningScore(state) ? getWinner(state) : 0
});

// main reducer function
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
