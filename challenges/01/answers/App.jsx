import React from "react";

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
        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        { /* scores */ }
        <div className="row">
            <div className="col-xs-6">
                <p>
          Player 1
                    { serving === 1 ? (
                        <span className="pull-right label label-success">Serving</span>
                    ) : null }
                </p>
                <p className="well">{ player1 }</p>
                { winner === 0 ? (
                    <button className="btn btn-primary" onClick={ handlePlayer1 }>+</button>
                ) : null }
            </div>

            <div className="col-xs-6">
                <p>
          Player 2
                    { serving === 2 ? (
                        <span className="pull-right label label-success">Serving</span>
                    ) : null }
                </p>
                <p className="well">{ player2 }</p>
                { winner === 0 ? (
                    <button className="btn btn-primary" onClick={ handlePlayer2 }>+</button>
                ) : null }
            </div>
        </div>

        { /* winner message */}
        { winner > 0 ? (
            <h2 className="jumbotron">Player { winner } wins!</h2>
        ) : null }

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={ handleReset }>Reset</button>
    </React.Fragment>
);

export default App;
