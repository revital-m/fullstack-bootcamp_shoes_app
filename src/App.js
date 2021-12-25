import React, { Component } from "react";
// import { BrowserRouter, Route } from 'react-router-dom';
// import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
import images from "./api/images";
import "./App.css";
import CardInfo from "./components/CardInfo/CardInfo";
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    data: [],
    isError: false,
    isEdit: false,
  };

  getData = async () => {
    try {
      const res = await images.get("/images");
      this.setState({ data: res.data });
    } catch (error) {
      this.errMsg(error.message);
    }
  };

  errMsg = (error) => {
    this.setState({ isError: true });
    return <p>{error}</p>;
  };

  componentDidMount() {
    this.getData();
  }

  displayCards = () => {
    return this.state.data.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          imgSrc={card.imageUrl}
          title={card.title}
          description={card.description}
          handleUpdate={this.UpdateCard}
          handleDelete={this.DeleteCard}
          isEdit={this.state.isEdit}
        />
      );
    });
  };

  creatNewCard = async (data) => {
    try {
      const res = await images.post("/images", {
        title: data.title,
        description: data.description,
        imageUrl: data.imgUrl,
      });
      this.setState((prevState) => {
        return { data: [...prevState.data, res.data] };
      });
    } catch (error) {
      this.errMsg(error.message);
    }
  };

  UpdateCard = async (newTitle, newDescription, newImgUrl, cardID) => {
    try {
      const res = await images.put(`/images/${cardID}`, {
        title: newTitle,
        description: newDescription,
        imageUrl: newImgUrl,
      });
      const editCard = {
        title: res.data.title,
        description: res.data.description,
        imageUrl: res.data.imageUrl,
      };
      this.setState((prevState) => {
        return {
          data: prevState.data.map((card) => {
            return card.id === cardID ? editCard : card;
          }),
        };
      });
    } catch (error) {
      this.errMsg(error.message);
    }
  };

  DeleteCard = async (cardID) => {
    try {
      const res = await images.delete(`/images/${cardID}`);
      const filteredData = this.state.data.filter((card) => {
        return card.id !== cardID;
      });
      this.setState({ data: filteredData });
    } catch (error) {
      this.errMsg(error.message);
    }
  };

  render() {
    return (
      <div className="container">
        {this.state.isError && this.errMsg}
        <main className="card-container">
          <div className="create-card">
            <CardInfo
              handleCreateCard={this.creatNewCard}
              btnName="Create"
              title="Create a new card:"
            />
          </div>
          {this.displayCards()}
        </main>
      </div>
    );
  }
}

export default App;
