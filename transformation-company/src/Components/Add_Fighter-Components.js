import React from 'react';

function Add_Fighter() {
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
                <form>
                    <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Name of your Transformers"/>
                            </div>
                            <div className="col">
                                <select className="custom-select" id="validationCustom04" required>
                                    <option selected disabled value="">Choose your Team</option>
                                    <option> Autobots</option>
                                    <option> Decepticons</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <h3>Abilities</h3>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control" maxlength="10" placeholder="Strength"/>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control" maxlength="10" placeholder="Endurance"/>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control" maxlength="10" placeholder="Firepower"/>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control" maxlength="10" placeholder="Intelligence"/>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control" maxlength="10" placeholder="Rank"/>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control" maxlength="10" placeholder="Skill"/>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control" maxlength="10" placeholder="Speed"/>
                            </div>
                            <div className="col-3">
                                <input type="number" className="form-control"  maxlength="10"placeholder="Courage"/>
                            </div>
                            <div className="col-6">
                                <button type="button" class="btn btn-primary">Add a Fighter</button>
                            </div>
                            <div className="col-6">
                                <button type="button" class="btn btn-danger">Fight</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </>
  )
}
export default Add_Fighter;