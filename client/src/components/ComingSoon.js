import React, { Component } from 'react';
import Countdown from './Countdown';
import Logo from './Logo';
import Title from './Title';
import Description from './Description';
import Subscribe from './Subscribe';
import Links from './Links';

import logo from "../images/gear.svg";
import check from "../images/check.svg";
import xmark from "../images/xmark.svg";
import exclamation from "../images/exclamation.svg";
import facebook from "../images/fbookicon.svg";
import instagram from "../images/instaicon.svg";
import twitter from "../images/twittericon.svg";
import youtube from "../images/youtubeicon.svg";

import '../styles/ComingSoon.css';

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2020-12-31 00:00:00"
    },
    logo: {
      alt: "spinning gear",
      src: logo,
      spinSpeed: "slow"
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
    },
    notification: {
      src: "",
      alt: "",
      message: "",
      level: "",
      visible: false
    },
    links: [
      {
        url: "https://www.facebook.com",
        logo: facebook,
        text: "Facebook"
      },
      {
        url: "https://www.instagram.com",
        logo: instagram,
        text: "Instagram"
      },
      {
        url: "https://twitter.com",
        logo: twitter,
        text: "Twitter"
      },
      {
        url: "https://youtube.com",
        logo: youtube,
        text: "YouTube"
      }
    ]
  }

  configureNotification = level => {
    console.log(`configureNotification called with ${level} level`);
    const notification = { ...this.state.notification };
    notification.level = level;
    if (level === "success") {
      notification.src = check;
      notification.alt = "Check Mark";
      notification.message = "Thank you for subscribing to our mailing list! You will be receiving a welcome email shortly.";
    } else if (level === "warning") {
      notification.src = exclamation;
      notification.alt = "Exclamation Point";
      notification.message = "The email you entered is already on our mailing list. Thank you for joining the community.";
    } else {
      notification.src = xmark;
      notification.alt ="X Mark";
      notification.message = "There was an issue with your email submission. Please check your email and try again.";
    }
    this.setState({ notification });
  }

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000);
    });
  };

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    const {
      countdown, logo, title, description, subscribe, notification, links
    } = this.state;
    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate}/>
        <Logo alt={ logo.alt } src={ logo.src } spinSpeed={ logo.spinSpeed }/>
        <Title text={ title.text } />
        <Description text={ description.text } src={ notification.src } alt={ notification.alt } message={ notification.message } level={ notification.level } visible={ notification.visible } />
        <Subscribe placeholder={ subscribe.placeholder } buttonText={ subscribe.buttonText } showNotification={ this.showNotification } configureNotification={ this.configureNotification } changeLogoSpeed={ this.changeLogoSpeed } />
        <Links links={ links } />
      </div>
    )};
}

export default ComingSoon;
