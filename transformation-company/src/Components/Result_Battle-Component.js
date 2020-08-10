import React, {useState}  from 'react';
import { Consumer } from './Context/Context'

const Result_Battle = () => {
    const [numberBattles,setNumberBattles] = useState(0);
    const [battleResult, setBattleResult] = useState("");
    const [Alldestroyed, setAlldestroyed] = useState(false);
    const [survivingFighters, setSurvivingFighters] = useState(false);

    var winnerTeamArray = [];
    var numberOfSurvivor = [];
    var isAutoboltSurvivor = true;

    const compareResult = (autoBolts, decepticons) => {
        const battleField = [] //Field Of Battle

        let autoboltsTeam = battleField[0] = [...autoBolts]; //TODO: create setState
        let decepticonsTeam = battleField[1] = [...decepticons];
        let differenceFightersNumber = 0;
        let survivor;
        let loseTeamArray = [];
        let Variautobolt = 0;
        let Varidecepticons = 0;
        var battleNum = 0;
        let pointOfSkillsAuto = 0;
        let pointOfSkillsDecep = 0;
        let duplicateOptimos = autoboltsTeam.reduce((acc,val) => (val.name == "optimus prime") ? acc + 1 : acc, 0 );
        let duplicatePredaking = decepticonsTeam.reduce((acc,val) => (val.name == "predaking") ? acc + 1 : acc, 0 );
   
        for(let i = 0; i < 2; i++){
            battleField[i] = []
        }

        //who survivor
        for(let i = 0; i < battleField.length; i++){
            if(autoboltsTeam.length > decepticonsTeam.length){
                differenceFightersNumber = autoboltsTeam.length - decepticonsTeam.length;
                for(let i = 0; i < differenceFightersNumber; i++) {
                    survivor = autoboltsTeam.pop();
                    numberOfSurvivor.push(survivor);
                }
            } else {
                differenceFightersNumber = decepticonsTeam.length - autoboltsTeam.length;
                for(let i = 0; i < differenceFightersNumber; i++) {
                    survivor = decepticonsTeam.pop();
                    numberOfSurvivor.push(survivor);
                }
            }
        }

        for( let i = 0; i < autoboltsTeam.length; i++){
            if(autoboltsTeam[i].team > decepticonsTeam[i].team){
                pointOfSkillsAuto++;
            } else {
                pointOfSkillsDecep++
            }
        } 
        for(let i = 0; i < autoboltsTeam.length; i++){
            if(autoboltsTeam[i].name.toLowerCase() === "optimus prime" && decepticonsTeam[i].name.toLowerCase() === "predaking"|| (duplicateOptimos > 1 || duplicatePredaking > 1)){
                setAlldestroyed(true);
                battleNum++;
                setNumberBattles(battleNum);              
            }
            else if(pointOfSkillsAuto >= 3){
                winnerTeamArray.push(autoboltsTeam[i].name);
                loseTeamArray.push(decepticonsTeam[i].name);
                Variautobolt++;
                battleNum++;
                setNumberBattles(battleNum);
            } else if(pointOfSkillsDecep >= 3){
                winnerTeamArray.push(decepticonsTeam[i].name);
                loseTeamArray.push(autoboltsTeam[i].name);
                Varidecepticons++;
                battleNum++;
                setNumberBattles(battleNum);
            }
             else if(autoboltsTeam[i].name.toLowerCase() === "optimus prime" && decepticonsTeam[i].name.toLowerCase() !== "predaking"){
                winnerTeamArray.push(autoboltsTeam[i].name);
                loseTeamArray.push(decepticonsTeam[i].name);
                Variautobolt++;
                battleNum++;
                setNumberBattles(battleNum);
             } else if(decepticonsTeam[i].name.toLowerCase() === "predaking" && autoboltsTeam[i].name.toLowerCase() !== "optimus prime") {
                winnerTeamArray.push(decepticonsTeam[i].name);
                loseTeamArray.push(autoboltsTeam[i].name);
                Varidecepticons++
                battleNum++;
                setNumberBattles(battleNum);
             } else if(parseInt(autoboltsTeam[i].abilities.courage) > parseInt(decepticonsTeam[i].abilities.courage) && parseInt(autoboltsTeam[i].abilities.courage) - parseInt(decepticonsTeam[i].abilities.courage) >= 4){ 
                winnerTeamArray.push(autoboltsTeam[i].name);
                loseTeamArray.push(decepticonsTeam[i].name);
                Variautobolt++;
                battleNum++;
                setNumberBattles(battleNum);

             } else if(parseInt(decepticonsTeam[i].abilities.courage) > parseInt(autoboltsTeam[i].abilities.courage) && parseInt(decepticonsTeam[i].abilities.courage) - parseInt(autoboltsTeam[i].abilities.courage) >= 4){ 
                winnerTeamArray.push(autoboltsTeam[i].name);
                loseTeamArray.push(decepticonsTeam[i].name);
                Variautobolt++;
                battleNum++;
                setNumberBattles(battleNum);
             } else if(parseInt(autoboltsTeam[i].abilities.strength) > parseInt(decepticonsTeam[i].abilities.strength) && parseInt(autoboltsTeam[i].abilities.strength) - parseInt(decepticonsTeam[i].abilities.strength) >= 4){ 
                winnerTeamArray.push(autoboltsTeam[i].name);
                loseTeamArray.push(decepticonsTeam[i].name);
                Variautobolt++;
                battleNum++;
                setNumberBattles(battleNum);
             } 
             else if(parseInt(decepticonsTeam[i].abilities.strength) > parseInt(autoboltsTeam[i].abilities.strength) && parseInt(decepticonsTeam[i].abilities.strength) - parseInt(autoboltsTeam[i].abilities.strength) >= 4){
                winnerTeamArray.push(autoboltsTeam[i].name);
                loseTeamArray.push(decepticonsTeam[i].name);
                Variautobolt++;
                battleNum++;
                setNumberBattles(battleNum);
             } 
             else if(parseInt(autoboltsTeam[i].abilities.overall === decepticonsTeam[i].abilities.overall)){
                Variautobolt = Variautobolt;
                Varidecepticons = Varidecepticons;
                battleNum++;
                setNumberBattles(battleNum);
             } else if(autoboltsTeam[i].abilities.overall > decepticonsTeam[i].abilities.overall){
                winnerTeamArray.push(autoboltsTeam[i].name);
                loseTeamArray.push(decepticonsTeam[i].name);
                Variautobolt++;
                battleNum++;
                setNumberBattles(battleNum);
            } else {
                winnerTeamArray.push(decepticonsTeam[i].name);
                loseTeamArray.push(autoboltsTeam[i].name);
                Varidecepticons++
                battleNum++;
                setNumberBattles(battleNum);
                }
            }
            if(Alldestroyed == true) {
                setBattleResult("All fighters were destroyed")
             } else if(Variautobolt > Varidecepticons){
                isAutoboltSurvivor = numberOfSurvivor.some((val)=> {
                    return val.team == "Decepticons"
                });

                if(isAutoboltSurvivor) {
                    setSurvivingFighters(true);
                }
                setBattleResult("The winning team is AutoBolt");
            }else if(Variautobolt == 0 && Varidecepticons == 0){
                setBattleResult("The fight ended without winners")
            } else {
                isAutoboltSurvivor = numberOfSurvivor.some((val)=> {
                    return val.team == "Autobots"
                });

                if(isAutoboltSurvivor) {
                    setSurvivingFighters(true);
                }
                setBattleResult("The winning team is Decepticon");
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
                                        {survivingFighters == true ? <li>
                                            <ul>
                                                <li>The surviving fighters are:</li>
                                                    {numberOfSurvivor.map((val, key) => (
                                                <li key={key}>{val.name}</li>
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
