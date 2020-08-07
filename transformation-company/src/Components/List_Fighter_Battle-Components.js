import React, {useState} from 'react';
import { Consumer } from './Context/Context'

function List_Fighter_Battle() {
    // const deleteUser = (id, dispatch) => {
        // TODO: Create a delete fight function
       // e.preventDefault();
       // dispatch({ type: "DELETE_FIGHT", payload: id });
    // };

    const fight = (dispatch,fighters) => { 
        dispatch({type: "FIGHT", payload: fighters});
     }
    return(
        <Consumer>
            {value => {
                const {fighters,showTableFight,dispatch} = value;
                console.log(fighters)
                return(
                    <>
                     {showTableFight ? 
                       <div className="container">
                            <div className="row">
                                <h2>List of fighters</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Fighter</th>
                                                <th scope="col">Team</th>
                                                <th scope="col">Strength</th>
                                                <th scope="col">Endurance</th>
                                                <th scope="col">Firepower</th>
                                                <th scope="col">Intelligence</th>
                                                <th scope="col">Rank</th>
                                                <th scope="col">Skill</th>
                                                <th scope="col">Speed</th>
                                                <th scope="col">Courage</th>
                                                <th scope="col">Overall Rating</th>
                                                {/* <th scope="col">Delete Fighter</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            Object.values(fighters).map((val, index) => (
                                                <tr key={index}>
                                                    <td>{val.name}</td>
                                                    <td>{val.team}</td>
                                                    <td>{val.abilities.strength}</td>
                                                    <td>{val.abilities.endurance}</td>
                                                    <td>{val.abilities.firepower}</td>
                                                    <td>{val.abilities.intelligence}</td>
                                                    <td>{val.abilities.rank}</td>
                                                    <td>{val.abilities.skill}</td>
                                                    <td>{val.abilities.speed}</td>
                                                    <td>{val.abilities.courage}</td>
                                                    <td>{val.abilities.overall}</td>
                                                    {/* <td><a href="#" onClick={deleteUser.bind(this,dispatch)}><i class="fas fa-trash-alt"></i></a></td> */}
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>  
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-danger" onClick={()=> {
                                        fight(dispatch,fighters)
                                    }}>Add a Fighter</button>  
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

export default List_Fighter_Battle;