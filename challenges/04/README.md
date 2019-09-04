# APIs with Redux

**Use Git to make a commit every time you get an answer working. Use sensible commit messages. This will give you the confidence to try things without worrying about getting back to a working state.**

---

## PongPing

*Do these challenges in the order that they are presented.* It does not necessarily match the order that things are done in the notes.

You'll need to read the [documentation for the PingPong end-point of http://restful.training](https://github.com/develop-me/restful.training#restfultraining). If you've lost your original login details (tut tut), then you'll need the password `wsYZzT8_m_pwBNDjSk77` to create a new account.

**Please don't *click*, *click*, *click* the score three times a second - you'll set off the API rate limiter. Be leisurely in your clicking.**

Remove the `localStorage` plugin and get thunks setup.

Normally APIs will do a lot of the work for you. The PingPong API will work out who the current server is and also whether anyone has won, so you'll be able to remove this logic from your reducers.

- To create a new game use the [`POST`](https://github.com/develop-me/restful.training#post-ping-ponggames) method
    - You'll need to store the `id` of the current game in your app state, as you'll need to this to update the score
- Each time a player scores make a [`PATCH`](https://github.com/develop-me/restful.training#patch-ping-ponggamesidscore) request to `/ping-pong/games/<id>/score`: use the data you get back from the API to set the winner and server properties in your app state
    - As well as `dispatch`, you can also access the current app state within your API action creators:

    ```javascript
    // accept getState as the second argument
    // it's always passed in, but you don't always need it
    export const patchScore = player => (dispatch, getState) => {
        // use getState function to get the state object
        // then read the currentGameID property
        const id = getState().currentGameID;

        axios.patch(`${id}/score`, {
            player: player
        }).then(({ data }) => {
            // dispatch a state action
        });
    };
    ```

- You can list all previous games using the [`GET`](https://github.com/develop-me/restful.training#get-ping-ponggames) request to `/ping-pong/games`: you'll need to use some sort of `<Loading>` component for this
- Add a little &times; button so you can remove old games: use the [`DELETE`](https://github.com/develop-me/restful.training#delete-ping-ponggamesid) request to `/ping-pong/games/<id>`
- To see if a game is currently in progress you could use the `GET /ping-pong/games` route and see if the first item has its `complete` value set to `false`. If so, start the game where you left off.
- Update your app so that between making your initial `POST` request and getting the response back from the server, you display a loading bar. You'll need to dispatch an additional state action at the same time as your API request.
