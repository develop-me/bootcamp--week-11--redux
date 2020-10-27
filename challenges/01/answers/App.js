const App = ({
    player1,
    player2,
    serving,
    winner,
    handlePlayer1,
    handlePlayer2,
    handleReset,
}) => (
    <React.Fragment>
        { /* header */ }
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        { /* scores */ }
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (serving === 1 ? "bg-dark text-white" : "") }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1 }</p>
                    </div>
                    { winner === 0 ? (
                        <div className="card-footer">
                            <button className="btn btn-primary form-control" onClick={ handlePlayer1 }>+</button>
                        </div>
                    ) : null }
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (serving === 2 ? "bg-dark text-white" : "") }>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player2 }</p>
                    </div>
                    { winner === 0 ? (
                        <div className="card-footer">
                            <button className="btn btn-primary form-control" onClick={ handlePlayer2 }>+</button>
                        </div>
                    ) : null }
                </div>
            </div>
        </div>

        { /* winner message */}
        { winner > 0 ? (
            <h2 className="alert alert-success">Player { winner } wins!</h2>
        ) : null }

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={ handleReset }>Reset</button>
    </React.Fragment>
);

export default App;
