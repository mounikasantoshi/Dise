import React, { Component } from "react";

export class AddList extends Component {
  state = {
    data: [{ title: "mounika", points: 0 }],
    text: "",
    // num: "",
  };
  onchange = (e) => {
    this.setState({ text: e.target.value });
  };

  submit = () => {
    this.setState({
      data: [...this.state.data, { title: this.state.text, points: 0 }],
    });
    this.state.text = "";
  };

  numChange = (e) => {
    this.setState({
      data: this.state.data.map(
        (item, i) =>
          //   {
          // if (i == e.target.name) {
          //   return { ...item, points: e.target.value };
          // } else {
          //   return item;
          // }
          i == e.target.name ? { ...item, points: e.target.value } : item
        //   }
      ),
    });

    console.log(e.target.name);
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onchange} />
        <button type="submit" onClick={this.submit}>
          Submit
        </button>
        <div>
          {this.state.data.map((text, i) => (
            <div>
              <p>
                {text.title}

                <input
                  type="number"
                  //   value={this.state.num}
                  onChange={this.numChange}
                  name={i}
                />

                {text.points}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AddList;
