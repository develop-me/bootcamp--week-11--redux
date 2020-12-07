import Loading from "./Loading";
import New from "./New";
import Tasks from "./Tasks";

const App = () => (
    <>
        <h1 className="jumbotron">TüDü</h1>

        <Loading>
            <New label="Add Task" />
            <Tasks />
        </Loading>
    </>
);

export default App;
