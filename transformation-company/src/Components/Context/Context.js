import React from "react";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          fighters: [action.payload, ...state.fighters]
        }
        case "SHOWTABLE":
        return {
          ...state,
          showTableFight: [action.payload]
        }
        case "FIGHT":
        let arrayAutoBots = [];
        let arrayDecepticons = [];
        for(let item of action.payload) {
            if(item.team == "Autobots") {
                arrayAutoBots.push(item)
            }
            else {
                arrayDecepticons.push(item)
            }
        }
        console.log(arrayAutoBots);
        console.log(arrayDecepticons);
        return {
            ...state,
            autobotsTeam: [...arrayAutoBots],
            decepticonsTeam: [...arrayDecepticons]
      };
        default:
          return state
    }
  }

export class Provider extends React.Component {
    state = {
        fighters: [],
        autobotsTeam: [],
        decepticonsTeam: [],
        showTableFight: false,
        dispatch: action => {
            this.setState(state => {
              return reducer(state, action);
            });
          },
      };
      
    render() {
        return (
          <Context.Provider value={this.state}>
            {this.props.children}
          </Context.Provider>
        );
      }
}
export const Consumer = Context.Consumer;
