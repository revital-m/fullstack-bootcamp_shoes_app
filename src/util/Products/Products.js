import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import storeData from '../../store';
import './Products.css';

export default class Products extends Component {
    state = { data: null };

    componentDidMount() {
        this.setState({ data: storeData });
    }

    displayProduct = () => {
        return this.state.data.map((item) => {
            return (
                <Link to={`/product/${item.id}`} key={item.id}>
                    <button className="btn" >{item.title}</button>
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="products">
                <div className="btn-container">
                 {this.state.data && this.displayProduct()}
                </div>
            </div>
        )
    }
}
