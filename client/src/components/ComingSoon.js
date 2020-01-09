import React, { Component } from 'react';
import Countdown from './Countdown';
import { Logo } from './Logo';
import { Title } from './Title';
import { Description } from './Description';
import Subscribe from './Subscribe';

import logo from "../images/gear.svg"

import '../styles/ComingSoon.css';

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2020-12-31 00:00:00"
    },
    logo: {
      alt: "spinning gear",
      src: logo
    },
    title: {
      text: 'Coming soon!'
    },
    description: {
      text: "Some description text that I don't want to copy at this time, will update later, bye Felicia!  It ain't no lie, baby -- bye bye bye!!"
    },
    subscribe: {
      placeholder: "Enter email address",
      buttonText: "Submit"
    }
  }

  render() {
    const {
      countdown, logo, title, description, subscribe
    } = this.state;
    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate}/>
        <Logo alt={ logo.alt } src={ logo.src }/>
        <Title text={ title.text } />
        <Description text={ description.text } />
        <Subscribe placeholder={ subscribe.placeholder } buttonText={ subscribe.buttonText } />
      </div>
    )};
}

export default ComingSoon;
