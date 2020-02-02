## Redux

- Action creators are a good place to tidy up data
- Don't need to updated any components to get API stuff working - use action creators to tidy up data
- Mention `getState()` in API action creators explicitly
- Explicitly mention state/action files in sr/actions
- Use Flux Standard Actions?
- Use `.js` for all JSX components
    * [ ] "Open all with current extension as..."
- Talk about thunks in terms of dispatching a function, as opposed to action creators
- UX design shouldn't reflect database structure/API
- Mention action "payload"
    > https://lorenstewart.me/2016/11/27/a-practical-guide-to-redux/
    * [ ] Actions contain all the information needed for a reducer to do what it needs to do
- Mention object resting: `{ type, ...rest }
    * [ ] eslint `ignoreRestSiblings` rule
- Reducers are pure: no side-effects
- Mention using React dev tools to see if using a wrapped component or not
- Split out `<Value>` and `<Buttons>` to start with
- Split out `reducer` and `initial` to start with
- Update iCounter example so that <Load> is on the <App> component?
- Replace blog challenges with todo list challenges
    * [ ] Add Todo API
    * [ ] Update challenges
- Only use `CHANGE` action to demonstrate payload - go back to separate actions
- Rewrite to use the challenges-style of teaching
    > Stop using the Blog API and use sets of smaller challenges. Maybe final quiz could be a single project from scratch?
- Talk about actions before reducers in the Redux notes
- Explicitly mention `ownProps` in notes for `mapStateToProps` and `mapDistpatchToProps`
    * [x] mapStateToProps
    * [ ] mapDispatchToProps
- Update to using `<>` instead of `React.Fragment`
- Update answers/example to use handleX instead of onX when passing around functions
- Update to use Bootstrap 4
- Will be complicated to start with, but can build something of any complexity without getting more so

## Doing

- Diagrams
    > Show the process - e.g. first without wrapped and then when it is wrapped
    * [x] React Redux Diagram
    * [x] Redux Diagram
    * [x] React Redux mapStateToProps diagram
    * [x] React Redux mapDispatchToProps diagram
    * [ ] React Redux API actions diagram

## Done

- Talk about when to use local state and when to use Redux state
- PingPong Challenge
    * [x] Add Spanish version
    * [x] Split up into sub-components
- Blog Challenges
    * [x] Start from scratch
    * [x] Provide wireframes
