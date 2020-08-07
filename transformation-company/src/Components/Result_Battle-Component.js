import React, {useState}  from 'react';
import { Consumer } from './Context/Context'

function Result_Battle() {
    const [numberBattles,setNumberBattles] = useState(0);
    const compareResult = (autoBolts, decepticons) => { //TODO: find a better name
        if(autoBolts.length < decepticons.length ) {
            setNumberBattles(autoBolts.length);
        } else {
            setNumberBattles(decepticons.length)
        }
            console.log("entrou na funcao e passou por tudo");
            console.log(`The number of battle is ${numberBattles}`);
    }
    return(
        <Consumer>
            {value => {
                const {showResultBattle,autobotsTeam,decepticonsTeam} = value;
                compareResult(autobotsTeam,decepticonsTeam);
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
                                <div className="stage">
                                    <ul>
                                        <li><span> {numberBattles}</span> Battles</li>
                                    </ul>
                                </div>
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