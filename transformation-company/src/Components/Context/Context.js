import React from "react";
const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        name: "Bumblebee",
        team: "Autobot"
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
