import React, { Component } from "react";

class Clicker extends Component {
    state = {
        num: 0
    }

    clicKer = (e) => {
        let randNum = Math.floor(Math.random() * this.props.maxNum);
        this.setState({ num: randNum });
    }

    render() {
        return (
            <div className="Clicker">
                <h1>{ (this.state.num !== 7) ? this.state.num : `Congreaturation🎉🎊🎇` }</h1>
                <button onClick={ this.clicKer }>click me!</button>
            </div>
        );
    }
}

export default Clicker;