import React, {useState}  from 'react';
import { Consumer } from './Context/Context'

const Result_Battle = () => {
    const [numberBattles,setNumberBattles] = useState(0);
    const [battleResult, setBattleResult] = useState("");
    const [Alldestroyed, setAlldestroyed] = useState(false);
    const [winnerTeam, setWinnerTeam] = useState([])



    var winnerTeamArray = []
    const compareResult = (autoBolts, decepticons) => {
        const battleField = [] //Field Of Battle
   
        for(let i = 0; i < 2; i++){
            battleField[i] = []
        }

        let autoboltsTeam = battleField[0] = [...autoBolts]; //TODO: create setState
        let decepticonsTeam = battleField[1] = [...decepticons];
        let differenceFightersNumber = 0;
        var survivor;
        let numberOfSurvivor = [];
       // let winnerTeamArray = [];
        let loseTeamArray = [];
        let Variautobolt = 0;
        let Varidecepticons = 0;
        let numeroBatalha = 0;
        

        

        //who survivor
        for(let i = 0; i < battleField.length; i++){
            if(battleField[0].length > battleField[1].length){
                differenceFightersNumber = battleField[0].length - battleField[1].length;
                for(let i = 0; i < differenceFightersNumber; i++) {
                    survivor = battleField[0].pop();
                    numberOfSurvivor.push(survivor);
                }
            } else {
                differenceFightersNumber = battleField[1].length - battleField[0].length;
                for(let i = 0; i < differenceFightersNumber; i++) {
                    survivor = battleField[1].pop();
                    numberOfSurvivor.push(survivor);
                }
            }
        }

        
        for(let i = 0; i < battleField[0].length; i++){
            console.log(parseInt(battleField[0][i].abilities.courage) - parseInt(battleField[1][i].abilities.courage));
            if(battleField[0][i].name.toLowerCase() === "optimus prime" && battleField[1][i].name.toLowerCase() === "predaking"){
                setAlldestroyed(true);              
             } else if(battleField[0][i].name.toLowerCase() === "optimus prime" && battleField[1][i].name.toLowerCase() !== "predaking"){
                winnerTeamArray.push(battleField[0][i].name);
                loseTeamArray.push(battleField[1][i].name);
                Variautobolt++;
                numeroBatalha++;
                setNumberBattles(numeroBatalha);
             } else if(battleField[1][i].name.toLowerCase() === "predaking" && battleField[0][i].name.toLowerCase() !== "optimus prime") {
                winnerTeamArray.push(battleField[1][i].name);
                loseTeamArray.push(battleField[0][i].name);
                Varidecepticons++
                numeroBatalha++;
                setNumberBattles(numeroBatalha);
             } else if(parseInt(battleField[0][i].abilities.courage) > parseInt(battleField[1][i].abilities.courage) && parseInt(battleField[0][i].abilities.courage) - parseInt(battleField[1][i].abilities.courage) >= 4){ //TODO: check it again
                winnerTeamArray.push(battleField[0][i].name);
                loseTeamArray.push(battleField[1][i].name);
                Variautobolt++;
                numeroBatalha++;
                setNumberBattles(numeroBatalha);
             }  else if(parseInt(battleField[1][i].abilities.courage) > parseInt(battleField[0][i].abilities.courage) && parseInt(battleField[1][i].abilities.courage) - parseInt(battleField[0][i].abilities.courage) >= 4){ 
                winnerTeamArray.push(battleField[1][i].name);
                loseTeamArray.push(battleField[0][i].name);
                Varidecepticons++;
                numeroBatalha++;
                setNumberBattles(numeroBatalha);
             }
             
            //  else if(battleField[0][i].abilities.courage > battleField[1][i].abilities.courage && ){
            //      alert(parseInt(battleField[0][i].abilities.courage) - parseInt(battleField[1][i].abilities.courage))
            //      //alert(battleField[1][i].abilities.courage); 
            //      if(battleField[0][i].abilities.courage - battleField[1][i].abilities.courage <4 ){
                     
            //         winnerTeamArray.push(battleField[0][i].name);
            //         loseTeamArray.push(battleField[1][i].name);
            //         Variautobolt++;
            //         numeroBatalha++;
            //         setNumberBattles(numeroBatalha);
            //      }
             }
             
            // if(battleField[0][i].abilities.overall > battleField[1][i].abilities.overall){
            //     winnerTeamArray.push(battleField[0][i].name);
            //     loseTeamArray.push(battleField[1][i].name);
            //     Variautobolt++;
            //     numeroBatalha++;
            //     setNumberBattles(numeroBatalha);
            // } else {
            //     winnerTeamArray.push(battleField[1][i].name);
            //     loseTeamArray.push(battleField[0][i].name);
            //     Varidecepticons++
            //     numeroBatalha++;
            //     setNumberBattles(numeroBatalha);
            // }
        // }

            if(Alldestroyed == true) {
                setBattleResult("All fighters were destroyed")
             } else if(Variautobolt > Varidecepticons){
                setBattleResult("The winning team is AutoBolt")
            }else {
                setBattleResult("The winning team is Decepticon")
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
                                        <li><span>{numberBattles}</span> Battles</li>
                                        <li>{battleResult}</li>
                                        {Alldestroyed == false ? <li>
                                            <ul>
                                                <li>The Winning Fighters are:</li>
                                                {winnerTeamArray.map((val, key) => (
                                                  <li key={key}>{val}</li>
                                                ))}
                                            </ul>
                                        </li> : " "}
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




// const compareResult = (autoBolts, decepticons) => { //TODO: find a better name and find the best way to do this function and fix battle numbers
    //     let Variautobolt = 0;
    //     let Varidecepticons = 0;
    //     let numeroBatalha = 0;

    //     if(autoBolts.length < decepticons.length ) {
    //         setNumberBattles(autoBolts.length);
    //         for(let val of autoBolts){
    //             for(let item of decepticons) {
    //                if(val.name.toLowerCase() === "optimus prime" && item.name.toLowerCase() === "predaking"){
    //                 setAlldestroyed(true);
    //                }else if(val.name.toLowerCase() === "optimus prime" || item.name.toLowerCase() === "predaking") {
    //                 Variautobolt++;
    //                } else if(val.abilities.courage > item.abilities.courage && val.abilities.courage - item.abilities.courage <= 4){
    //                 Variautobolt++;
    //               } else if(val.abilities.overall > item.abilities.overall) {
    //                 Variautobolt++;
    //               } else {
    //                 Varidecepticons++; 
    //               }
    //             }
    //         }
    //         setNumberBattles(numeroBatalha);
    //     } else { //TODO: do the same with the first case but for decepticons.
    //         setNumberBattles(decepticons.length);
    //         for(let val of decepticons){
    //             for(let item of autoBolts) {
    //                 if(val.name.toLowerCase() === "predaking" && item.name.toLowerCase() === "optimus prime"){
    //                     setAlldestroyed(true);
    //                   } else if(val.abilities.overall > item.abilities.overall) {
    //                     Varidecepticons++;
    //                   } else {
    //                     Variautobolt++; 
    //                   }
    //             }
    //         }
    //     }

    //     if(Alldestroyed == true) {
    //         setwinnerTeam("All fighters were destroyed")
    //     } else if(Variautobolt > Varidecepticons){
    //         setwinnerTeam("The winning team is AutoBolt")
    //     }else {
    //         setwinnerTeam("The winning team is Decepticon")
    //     }
    // }



                