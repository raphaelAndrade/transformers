import React from 'react';
import { Consumer } from './Context/Context'

function Result_Battle() {
    return(
        <Consumer>
            {value => {
                const {showResultBattle} = value;
                return(
                    <>
                    {showResultBattle ? 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Battle Result</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="stage"></div>
                            </div>
                        </div>
                    </div> : " "
                    }
                    </>
                )
            }}
        </Consumer>
    )
}
export default Result_Battle;