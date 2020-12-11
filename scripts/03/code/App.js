import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from "react-router-dom";

import Value from "./Value";
import Buttons from "./Buttons";
import Settings from "./Settings";

const App = () => (
    <Router>
        <>
            <h1 className="mt-4">
                <Link to="/">iCounter 2.0</Link>
            </h1>

            <Switch>
                <Route exact path="/">
                    <>
                        <p><Link to="/settings">Settings</Link></p>
                        <Value />
                        <Buttons/>
                    </>
                </Route>

                <Route exact path="/settings">
                    <Settings />
                </Route>

                <p>Nothing found.</p>
            </Switch>
        </>
    </Router>
);

export default App;
