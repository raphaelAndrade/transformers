import React, { useState} from 'react';
import {Consumer} from './Context/Context';

const Add_Fighter = () => {
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
      const onSubmit = (dispatch, e) => {
        e.preventDefault();
        const newFighter = {
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

     //Clear the fields after submitting
      setName(" ");
      setStrength(" ");
      setEndurance(" ");
      setFirepower(" ");
      setIntelligence(" ");
      setSkill(" ")
      setSpeed(" ");
      setRank(" ")
      setCourage(" ");
      setTeam(null);
      }

      const showTableFight  = (dispatch) => {
        setShowFightTable(true)
        dispatch({type: "SHOWTABLE", payload: showTable});
    }
    return(
        <Consumer>
            {value => {
                const {dispatch} = value;
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
                                                    value={name}
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
                                                    required
                                                    value={strength}
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
                                                    value={endurance}
                                                    required
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
                                                    value={firepower}
                                                    required
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
                                                    value={intelligence}
                                                    required
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
                                                    value={rank}
                                                    onChange={onChange}
                                                    required
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
                                                    value={skill}
                                                    onChange={onChange}
                                                    required
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
                                                    value={speed}
                                                    required
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
                                                    value={courage}
                                                    required
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