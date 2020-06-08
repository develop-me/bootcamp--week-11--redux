# Redux

**Use Git to make a commit every time you get an answer working. Use sensible commit messages. This will give you the confidence to try things without worrying about getting back to a working state.**

We're going to build a ping-pong scoring app using Redux and React.

First, create a new app called `ping-pong` using `npm init react-app`. You'll also need to run `npm install redux` in the app directory once it's setup.

Make sure you add the Bootstrap 4 CSS file and add a `class` of `container` to `<div id="root">` in `index.html`:

```html
<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
/>
```

Replace the `App.js` file with [`App.js`](App.js).

Next, setup Redux in `index.js` with the initial state as follows (Section 2.1):

```js
const initial = {
    player1: 0,
    player2: 0,
};
```

Make sure you create a store and subscribe to it with a `render` function (Section 2.4 & 2.6)


## Challenges

- Update your app so that it shows the current scores for Player 1 and Player 2 (they'll both be 0 to start with). Make changes to the initial state and check that it renders correctly.

- Update your app so that when you click on Player 1's "+" button it increments Player 1's score

- Update your app so that when you click on Player 2's "+" button it increments Player 2's score

- Update your app so that when the "Reset" button is clicked both scores are reset to 0

- Make it so that classes `bg-dark` and `text-white` (on the player "card") alternate depending on who is serving. Assume that the server changes every 5 points. This is *business logic*, so you'll need to add an additional `serving` property to your state and update it using a reducer.

    Remember, actions are generally a response to an event and there isn't a "serving" event: it happens when the score changes. You already have all the actions you need.

    **Hint**: You don't have to, but you can **compose** functions. This can be useful in reducers if you want to change the state in more than one way for a single action.

    The following is just an example, your naming may differ:

    ```javascript
    // all these functions accept and return a valid copy of state
    const player1 = state => ({ ...state, player1: state.player1 + 1 });
    const player2 = state => ({ ...state, player2: state.player2 + 1 });
    const server = state => ({ ...state, server: /* logic */ });

    // we can composer functions in the reducer
    // to build up complex behaviours
    const reducer = (state, action) => {
        switch (action.type) {
            // call the player1 function to update the score
            // then immediately pass the result to server
            // returns the result of both in inside-out order
            case "PLAYER_1_SCORED": return server(player1(state));

            // call the player2 function to update the score
            // then immediately pass the result to server
            // returns the result of both in inside-out order
            case "PLAYER_2_SCORED": return server(player2(state));

            // ... other switch cases
        }
    };
    ```

    This:

    ```js
    return server(player1(state));
    ```

    Is the same (without the intermediary variables) as:

    ```js
    // update scores
    let scoreState = player1(state);

    // update server
    let serverState = server(scoreState);

    return serverState;
    ```

- If the value of `player1` gets to 21 then you should show the "Player 1 Wins" message. If the value of `player2` gets to 21 then you should show the "Player 2 Wins" message. If no one has won yet, then the "Player x Wins" message should not display at all. The winner logic is **business logic**, so it should be in the reducer. The *wording* for the message is **view logic** so it should go in the component.

- Split up your `App.js` into sensible sub-components and use props to pass down the relevant values. Remember, if you have two bits of UI that are basically the same they should reuse the same component

- Disable the "+" buttons once someone wins the game. Remember buttons have a `disabled` attribute.

- The "Player x Wins" message should only show if the winning player is also ahead by at least two points

- The server should start to alternate every two serves if *both* scores get to 20

- Keep track of the previous games and show them in a table below. It should store a data structure similar to the following for each game played:

    ```js
    {
        player_1: {
            score: 21,
            won: true
        },

        player_2: {
            score: 17,
            won: false
        }
    }
    ```

- Use the `redux-localstorage` middleware to store your app state between page refreshes


## Tricksy

Add an Esperanto version of your app and a toggle between English and Esperanto.

You could create separate Esperanto components or you could use an object literal to pass the correct language into a single set of components.

**Hint**: If you want to use the object literal method you can create a `.json` file with the translations in and then import it as if it were an object literal. This saves needing to export anything from the file, but you will need to make sure it's valid JSON.

### Translations

- "Player 1" -> "Ludanto 1"
- "Player 2" -> "Ludanto 2"
- "Serving" -> "Servas"
- "Reset" -> "Restarigi"
- "Player 1 Wins" -> "Ludanto 1 Venkoj"


## Über-Tricksy

Remove the `redux-localstorage` middleware ([this will be easy if you're using Git properly](https://git-scm.com/docs/git-revert)) and then see if you can achieve the same result yourself. You're *not* trying to create a Redux middleware, just getting the same behaviour using `store.subscribe()`.

Use [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) to keep your state between page refreshes.

Some things to note:

- You can call `store.subscribe()` multiple times, passing it a different function to call when the state updates. All the functions that you pass it will run each time.

- `localStorage`, as with most DOM things, only works with strings. So you'll need to be careful how you store your data. Maybe look at the [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#Methods) object.

- Make sure it works if there is nothing in `localStorage`. You can use the "Storage" tab in Firefox Dev Tools to inspect and edit the stored values.
