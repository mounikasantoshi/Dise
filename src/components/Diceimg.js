import React, { Component } from "react";
import dise1 from "./images/dice1.png";
import dise2 from "./images/dice2.png";
import dise3 from "./images/dice3.png";
import dise4 from "./images/dice4.png";
import dise5 from "./images/dice5.png";
import dise6 from "./images/dice6.png";

export class Diceimg extends Component {
  state = {
    images: [dise1, dise2, dise3, dise4, dise5, dise6],
    i: 0,
    run: "start",
    score: [],
  };
  onclick = () => {
    if (this.state.i < 6) {
      this.setState({ i: this.state.i + 1 });
    }
    if (this.state.i >= 6) {
      this.setState({ i: 0 });
    }
  };

  start = () => {
    this.setState({ run: "stop" });
    if (!this.interval) {
      this.interval = setInterval(this.onclick, 100);
    }
  };

  stop = () => {
    this.setState({ run: "start" });
    clearInterval(this.interval);
    this.interval = null;
    this.setState({ score: [...this.state.score, this.state.i + 1] });
  };

  reset = () => {
    this.setState({ i: 0, run: "start", score: [] });
  };
  render() {
    const total = this.state.score.reduce((a, b) => a + b, 0);
    const totalPoints = this.state.score.join("+");
    // console.log(totalPoints);
    return (
      <div>
        <img
          src={this.state.images[this.state.i]}
          alt={this.state.images[this.state.i]}
          width="200px"
          height="200px"
        />
        <div>
          {this.state.score.length < 5 ? (
            <button
              onClick={this.state.run == "start" ? this.start : this.stop}
            >
              {this.state.run}
            </button>
          ) : (
            <p>
              Your score is : {totalPoints}
              {"="}
              {total}
            </p>
          )}
          {/* <button onClick={this.start}>start</button> */}
          {/* <button onClick={this.stop}>Stop</button> */}
        </div>
        {this.state.score.length < 5 ? (
          <div>
            <h1>{this.state.i + 1}</h1>

            {this.state.score.map((point, i) => (
              <p key={i}>{point}</p>
            ))}
          </div>
        ) : (
          <div>
            <button onClick={this.reset}>Play Again</button>
            <h1>Thank You</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Diceimg;
