import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

export default class Banner extends Component{
    render() {
        return (
            <div className="kotakdua">
            <img src={logo} className="App-logodua" alt="logo" />
            </div>
        );
    }
}