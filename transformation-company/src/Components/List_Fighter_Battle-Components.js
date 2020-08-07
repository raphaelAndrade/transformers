import React from 'react';
import { Consumer } from './Context/Context'

function List_Fighter_Battle() {
    return(
        <Consumer>
            {value => {
                const {fighters,showTableFight} = value;
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
                                                <th scope="col">Delete Fighter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            Object.keys(fighters).map((val, index) => (
                                                <tr>
                                                    <td>{fighters[val].name}</td>
                                                    <td>{fighters[val].team}</td>
                                                    <td>{fighters[val].abilities.endurance}</td>
                                                    <td>{fighters[val].abilities.firepower}</td>
                                                    <td>{fighters[val].abilities.intelligence}</td>
                                                    <td>{fighters[val].abilities.rank}</td>
                                                    <td>{fighters[val].abilities.skill}</td>
                                                    <td>{fighters[val].abilities.speed}</td>
                                                    <td>{fighters[val].abilities.courage}</td>
                                                    <td>Delete</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>  
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-danger">Add a Fighter</button>  
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