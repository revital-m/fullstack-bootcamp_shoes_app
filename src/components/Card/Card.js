import React, { Component } from "react";
import CardInfo from "../CardInfo/CardInfo";
import "./Card.css";

class Card extends Component {
  state = { isEdit: this.props.isEdit };

  handleClick = () => {
    this.setState({ isEdit: true });
  };

  render() {
    return (
      <div className="card">
        <img
          className="cardImg"
          src={this.props.imgSrc}
          alt={this.props.title}
        ></img>
        <div className="cardInfo">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
        <div className="cardInfo__btns">
          <button className="cardInfo__btns--btn" onClick={this.handleClick}>
            Edit
          </button>
          <button
            className="cardInfo__btns--btn"
            onClick={() => this.props.handleDelete(this.props.id)}
          >
            Delete
          </button>
        </div>
        {this.state.isEdit && (
          <CardInfo
            handleUpdate={this.props.handleUpdate}
            cardID={this.props.id}
            btnName="Update"
            title="Update card:"
            currentCardTitle={this.props.title}
            currentCardDescription={this.props.description}
            currentCardImgSrc={this.props.imgSrc}
          />
        )}
      </div>
    );
  }
}

export default Card;
