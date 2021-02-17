import React, { Component } from "react";
import dise1 from "./images/dice1.png";
import dise2 from "./images/dice2.png";
import dise3 from "./images/dice3.png";
import dise4 from "./images/dice4.png";
import dise5 from "./images/dice5.png";
import dise6 from "./images/dice6.png";

export class Dise extends Component {
  state = {
    images: [dise1, dise2, dise3, dise4, dise5, dise6],
    i: [],
    n: 0,
  };

  render() {
    onclick = () => {
      const m = Math.floor(Math.random() * 6 + 1);
      this.setState({
        i: [...this.state.i, m],
      });
      this.setState({ n: m });
    };
    console.log(this.state.i);
    console.log(this.state.i[0]);
    return (
      <div>
        <img
          src={this.state.images[this.state.n - 1]}
          alt={this.state.images[this.state.n - 1]}
          width="200px"
          height="200px"
        />
        {this.state.i.length <= 4 ? (
          <div>
            <button onClick={this.onclick}>Roll</button>
          </div>
        ) : (
          <p>u completed all your rolls</p>
        )}
        {this.state.i.map((m) => (
          <div>
            {/* <img
              src={this.state.images[m - 1]}
              alt={this.state.images[m - 1]}
              width="200px"
              height="200px"
            /> */}
            <p>{m}</p>
          </div>
        ))}
        <h1>
          {this.state.i.reduce((a, b) => {
            return a + b;
          }, 0)}
        </h1>
      </div>
    );
  }
}

export default Dise;
