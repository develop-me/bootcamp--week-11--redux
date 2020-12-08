# React Redux

**Use Git to make a commit every time you get an answer working. Use sensible commit messages. This will give you the confidence to try things without worrying about getting back to a working state.**

Make sure you finish all of the challenges from yesterday before moving onto this.

## Challenges

Once you've done that, update your app to use `<Provider>` and `connect` instead of manually wiring up `ReactDOM.render()`. You'll still need to pass event handlers through as props for now - we'll cover that tomorrow.

**Remember, the notes are for a different app. You probably won't need a `Value` component**

---

1) Get the "Player X wins!" component working

1) Get the player score components working

    Assuming you've got a `<Player>` component, you'll need two container components, one for each player. Because you've got two you can't use the `index.js` trick.

    You'll need a folder structure like this:

    ```
    components/
        Player/
            Player.js  # the React component
            Player1.js  # mapStateToProps with Player 1 info
            Player2.js  # mapStateToProps with Player 2 info
    ```

    Then in `App.js`:

    ```js
    import Player1 from "./Player/Player1";
    import Player2 from "./Player/Player2";
    ```
