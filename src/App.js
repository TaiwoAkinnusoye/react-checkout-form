import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./App.css";
import Overlay from './Overlay';
import Container from './Container';
import ImagePreview from './ImagePreview';
import Checkout from './Checkout';
import Header from './Header';


class App extends Component {

    state = {
        mounted: false,
        people: 1,
        price: 320.00,
        tax: 20,
        duration: 5,
        discount: 5
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            duration: e.target.value
        })
    }

   render () {

    let overlay, container;
    if(this.state.mounted) {
        overlay = (
            <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
        );
        container = (
            <Container>
                <ImagePreview price={this.state.price} duration={this.state.duration} people={this.state.people} image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
                <Checkout discount={this.state.discount} tax={this.state.tax} price={this.state.price} duration={this.state.duration} onSubmit={this.handleSubmit} />
            </Container>
        )
    }
        return (
            <div className="App">
                <ReactCSSTransitionGroup transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
          {overlay}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
          {container}
                </ReactCSSTransitionGroup>
                <Header onChange={this.handleChange} />
            </div>
        )
    }
};

export default hot(module)(App);