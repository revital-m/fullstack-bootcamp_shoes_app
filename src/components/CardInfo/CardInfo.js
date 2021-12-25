import React, { Component } from "react";
import "./CardInfo.css";

class CardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", imgUrl: "" };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    console.log(e);
    if (e.target.innerText === "Create") {
      this.props.handleCreateCard(this.state);
    } else {
      const newTitle =
        this.state.title === ""
          ? this.props.currentCardTitle
          : this.state.title;
      const newDescription =
        this.state.description === ""
          ? this.props.currentCardDescription
          : this.state.description;
      const newImgUrl =
        this.state.imgUrl === ""
          ? this.props.currentCardImgSrc
          : this.state.imgUrl;

      this.props.handleUpdate(
        newTitle,
        newDescription,
        newImgUrl,
        this.props.cardID
      );
    }
    this.setState({ title: "", description: "", imgUrl: "" });
  };

  render() {
    return (
      <div className="Input">
        <h1>{this.props.title}</h1>
        <div>
          <label className="input--label">Image Url:</label>
          <input
            className="input--info"
            onChange={this.handleInputChange}
            type="text"
            name="imgUrl"
            value={this.state.imgUrl}
          ></input>
        </div>
        <div>
          <label className="input--label">Title:</label>
          <input
            className="input--info"
            onChange={this.handleInputChange}
            type="text"
            name="title"
            value={this.state.title}
          ></input>
        </div>
        <div>
          <label className="input--label">Description:</label>
          <input
            className="input--info"
            onChange={this.handleInputChange}
            type="text"
            name="description"
            value={this.state.description}
          ></input>
        </div>
        <button
          className="btn"
          onClick={this.handleClick}
          btnName={this.props.btnName}
        >
          {this.props.btnName}
        </button>
      </div>
    );
  }
}

export default CardInfo;
