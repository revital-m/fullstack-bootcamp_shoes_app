import React, { Component } from "react";
import shoes from "./api/shoes";
import "./App.css";
import Inputs from "./components/Inputs/Inputs";
import ShoesList from "./components/ShoesList/ShoesList";
import Spinner from "./components/Spinner/Spinner";

class App extends Component {
  state = {
    data: [],
    originalData: [],
    inputValue: "",
    isError: false,
    // isEdit: false,
    isLoading: false,
  };

  getData = async () => {
    try {
      const res = await shoes.get("/shoes");
      this.setState({
        data: res.data,
        originalData: res.data,
        isLoading: false,
      });
    } catch (error) {
      this.errMsg(error.message);
    }
  };

  errMsg = (error) => {
    this.setState({ isError: true });
    return <p>{error}</p>;
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  creatNewCard = async (data) => {
    try {
      const res = await shoes.post("/shoes", {
        title: data.title,
        price: data.price,
        imageUrl: data.imgUrl,
      });
      this.setState((prevState) => {
        return { data: [...prevState.data, res.data] };
      });
    } catch (error) {
      this.errMsg(error.message);
    }
  };

  UpdateCard = async (newTitle, newPrice, newImgUrl, cardID) => {
    try {
      const res = await shoes.put(`/shoes/${cardID}`, {
        title: newTitle,
        price: newPrice,
        imageUrl: newImgUrl,
      });
      const editCard = {
        title: res.data.title,
        price: res.data.price,
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
      const res = await shoes.delete(`/shoes/${cardID}`);
      const filteredData = this.state.data.filter((card) => {
        return card.id !== res.data.id;
      });
      this.setState({ data: filteredData });
    } catch (error) {
      this.errMsg(error.message);
    }
  };

  render() {
    // console.log(this.state.isEdit);
    return (
      <div className="container">
        {this.state.isError && this.errMsg}
        <Inputs
          handleInputChange={this.handleInputChange}
          value={this.state.inputValue}
          labelName="Search shoes by name:"
        />
        {this.state.isLoading && <Spinner />}
        <ShoesList
          shoes={this.state.data}
          userValue={this.state.inputValue}
          handleUpdate={this.UpdateCard}
          handleDelete={this.DeleteCard}
          // isEdit={this.state.isEdit}
          handleCreateCard={this.creatNewCard}
        />
      </div>
    );
  }
}

export default App;
