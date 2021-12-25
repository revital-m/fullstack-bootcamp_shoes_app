import React, { Component } from "react";

class Select extends Component {
  createOption = () => {
    const optionArr = ["0-18", "19-30", "31-50", "51-70", "71-100"];
    return optionArr.map((age) => {
      return <option value={age}>{age}</option>;
    });
  };

  render() {
    return (
      <div className="select">
        <label className="select-label">{this.props.labelName}</label>
        <select className="select-info"
          value={this.props.value}
          onChange={this.props.handleInputChange}
          name={this.props.name}
        >
          {this.createOption()}
        </select>
      </div>
    );
  }
}

export default Select;
