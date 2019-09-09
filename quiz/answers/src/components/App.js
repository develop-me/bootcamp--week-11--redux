import React from 'react';

import Loading from "./Loading";
import New from "./New";
import Tasks from "./Tasks";

const App = () => (
    <>
        <h1 className="page-heading">TüDü</h1>

        <Loading>
            <New label="Add Task" />
            <Tasks />
        </Loading>
    </>
);

export default App;
