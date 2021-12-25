import React, { Component } from "react";
import "./Inputs.css";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { update: "", create: "" };

    // this.inputRef = React.createRef();
  }

  // componentDidMount() {
  //   this.inputRef.current.focus();
  // }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    this.props.handleCallback(this.state, this.props.id);
    this.setState({ update: "", create: "" });
  }

  render() {
    return (
      <div className="Input">
        {/* {this.props.name === "update" ? <input type="checkbox"></input>: <></>} */}
        <label className="input--label">{this.props.labelName}</label>
        <div className="input--show-info">
          <input
            className="input--info"
            onChange={this.handleInputChange}
            type={this.props.inputType}
            name={this.props.name}
            value={this.state[this.props.name]}
            // ref={this.inputRef}
          ></input>
          <button className="btn" onClick={this.handleClick}>{this.props.name}</button>
        </div>
      </div>
    );
  }
}

export default Inputs;
