import React from "react";
import Card from "../Card/Card";
import CardInfo from "../CardInfo/CardInfo";
import "./ShoesList.css";

class ShoesList extends React.Component {
  state = { shoes: [] };

  componentDidUpdate(prevProps) {
    if (prevProps.userValue !== this.props.userValue) {
      this.setState({
        shoes: this.filterData(this.props.shoes, this.props.userValue),
      });
    } else if (prevProps.shoes !== this.props.shoes) {
      this.setState({
        shoes: this.props.shoes,
      });
    }
  }

  filterData = (arrOfData, userInput) => {
    return arrOfData.filter((shoe) => {
      return shoe.title.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  displayCards = () => {
    return this.state.shoes.map((e, idx) => {
      return (
        <Card
          key={idx}
          id={e.id}
          imgSrc={e.imageUrl}
          title={e.title}
          price={e.price}
          handleUpdate={this.props.handleUpdate}
          handleDelete={this.props.handleDelete}
        />
      );
    });
  };

  render() {
    return (
      <main className="card-container">
        <div className="create-card">
          <CardInfo
            handleCreateCard={this.props.handleCreateCard}
            btnName="Add"
            title="Add new shoes:"
          />
        </div>
        {this.displayCards()}
      </main>
    );
  }
}

export default ShoesList;
