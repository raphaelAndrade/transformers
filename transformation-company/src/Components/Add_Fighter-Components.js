import React, { useState} from 'react';
import {Consumer} from './Context/Context';
//import { useId } from "react-id-generator";

function Add_Fighter() {
    const [name,setName] = useState("");
    const [team,setTeam] = useState("");
    const [strength,setStrength] = useState("");
    const [endurance,setEndurance] = useState("");             
    const [firepower,setFirepower] = useState("");      
    const [intelligence,setIntelligence] = useState("");      
    const [rank,setRank] = useState("");      
    const [skill,setSkill] = useState("");      
    const [speed,setSpeed] = useState("");      
    const [courage,setCourage] = useState("");
    const [showTable,setShowFightTable] = useState(false);

    const onChange = e => {
        let element = (e.target.name);
        switch (element) {
          case 'name':
            setName(e.target.value)
          break;
          case 'team':
            setTeam(e.target.value)
          break;
          case 'strength':
            setStrength(e.target.value)
          break;
          case 'endurance':
            setEndurance(e.target.value)
          break;
          case 'firepower':
            setFirepower(e.target.value)
          break;
          case 'intelligence':
            setIntelligence(e.target.value)
          break;
          case 'rank':
            setRank(e.target.value)
          break;
          case 'skill':
            setSkill(e.target.value)
          break;
          case 'speed':
            setSpeed(e.target.value)
          break;
          case 'courage':
            setCourage(e.target.value)
          break;
        }
      }
      const cleaningForm = () => {
        // TODO: Clear the fields after submitting
      }

      const onSubmit = (dispatch, e) => {
        e.preventDefault();
        const newFighter = {
        // id: useId(),
          name, 
          team,
          abilities:{
            strength,
            endurance,
            firepower,
            intelligence,
            rank,
            skill,
            speed,
            courage,
            overall: parseInt(strength) + parseInt(strength) + parseInt(intelligence) + parseInt(speed) + parseInt(endurance) + parseInt(firepower)
          }
        }
        dispatch({type: "ADD", payload: newFighter});
        // TODO: Clear the fields after submitting
      }

      const showTableFight  = (dispatch) => {
        setShowFightTable(true)
        dispatch({type: "SHOWTABLE", payload: showTable});
    }
    return(
        <Consumer>
            {value => {
                const {dispatch} = value;
                
                // Object.values(autobotsTeam).map(val => {
                //     console.log(val)
                // })

                return(
                    <>
                       <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Add your Fighter</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={onSubmit.bind(this,dispatch)}> 
                                    <div className="form-row">
                                            <div className="col">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Name of your Transformers"
                                                    name="name"
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col">
                                                <select 
                                                    className="custom-select"
                                                    name="team" 
                                                    onChange={onChange}
                                                    required
                                                    >
                                                    <option selected disabled>Choose your Team</option>
                                                    <option value="Autobots">Autobots</option>
                                                    <option value="Decepticons">Decepticons</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <h3>Abilities</h3>
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="strength" 
                                                    placeholder="Strength"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="endurance" 
                                                    placeholder="Endurance"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="firepower" 
                                                    placeholder="Firepower"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="intelligence" 
                                                    placeholder="Intelligence"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="rank" 
                                                    placeholder="Rank"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="skill" 
                                                    placeholder="Skill"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="speed" 
                                                    placeholder="Speed"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <input 
                                                    type="number"
                                                    className="form-control" 
                                                    min="1" 
                                                    max="10"
                                                    name="courage" 
                                                    placeholder="Courage"
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button 
                                                    type="submit" 
                                                    onClick={() => {
                                                        showTableFight(dispatch);
                                                    }} 
                                                    className="btn btn-primary">
                                                        Add fighter
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}
        </Consumer>
    )
}
export default Add_Fighter;