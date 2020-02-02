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

// when to alternate server
const alternateOn = state => {
    const deuce = aim - 1;

    // if both scores at 20 or more
    return (state.player1 >= deuce && state.player2 >= deuce) ? 2 : alternate;
}


// reducer functions

// update score
const score = (state, { who }) => {
    return {
        ...state,
        [who]: state[who] + 1,
    };
};

// calculate server
const serving = state => ({
    ...state,
    serving: (Math.floor(total(state) / alternateOn(state)) % 2) + 1,
});

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
        case "SCORE": return winner(serving(score(state, action)));
        case "RESET": return initial;
        default: return state;
    }
};

export default reducer;
