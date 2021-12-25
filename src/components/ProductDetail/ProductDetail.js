import React, { Component } from 'react';
import storeData from '../../store';
import './ProductDetail.css'

export default class ProductDetail extends Component {

    handleClick = () => {
        this.props.history.goBack();
    }

    displayItem = () => {
        
        const choosenItem = Number(this.props.match.params.id);
        const itemToDisplay = storeData.find(item => item.id === choosenItem )
        return (
            <div className="card">
                <img className="cardImg" src={itemToDisplay.imageUrl} alt={itemToDisplay.title}></img>
                <div className="cardInfo">
                    <h1>{itemToDisplay.title}</h1>
                    <p>Price: {itemToDisplay.price}</p>
                    <p>Size: {itemToDisplay.size}</p>
                    <button className="btn--category" onClick={this.handleClick}>Back</button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='product-detail'>
                {this.displayItem()}
            </div>
        )
    }
}
