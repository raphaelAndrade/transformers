import React, {useState}  from 'react';
import { Consumer } from './Context/Context'

function Result_Battle() {
    const [numberBattles,setNumberBattles] = useState(0);
    const [winnerTeam, setwinnerTeam] = useState("");

    const compareResult = (autoBolts, decepticons) => { //TODO: find a better name and find the best way to do this function
        let Variautobolt = 0;
        let Varidecepticons = 0;
        if(autoBolts.length < decepticons.length ) {
            setNumberBattles(autoBolts.length);
            for(let val of autoBolts){
                for(let item of decepticons) {
                  if(val.abilities.courage > item.abilities.courage && val.abilities.courage - item.abilities.courage <= 4){
                    Variautobolt++;
                  } else if(val.abilities.overall > item.abilities.overall) {
                    Variautobolt++;
                  } else {
                    Varidecepticons++; 
                  }
                }
            }
        } else {
            setNumberBattles(decepticons.length);
            for(let val of decepticons){
                for(let item of autoBolts) {
                    if(val.abilities.overall > item.abilities.overall) {
                        Varidecepticons++;
                      } else {
                        Variautobolt++; 
                      }
                }
            }
        }
        if(Variautobolt > Varidecepticons){
            setwinnerTeam("AutoBolt")
        }else {
            setwinnerTeam("Decepticon")
        }
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
                                        <li>The winning team is {winnerTeam}</li>
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