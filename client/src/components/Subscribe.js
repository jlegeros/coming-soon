import React, { Component } from 'react'

import "../styles/Subscribe.css";

class Subscribe extends Component {
  state = {
    email: ""
  }

  handleChange = e => {
    this.setState({ email: e.target.value.trim() });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.email) {
      fetch(`/api/memberAdd?email=${this.state.email}`)
      .then(res => res.json())
      .then(json => {
        if (json.status === "subscribed") {
          console.log("subscribed");
          this.props.configureNotification("success");
        } else if (json.title === "Member Exists") {
          console.log("member exists");
          this.props.configureNotification("warning");
        } else {
          console.log("Danger Will Robinson!!");
          this.props.configureNotification("danger");
        }
        this.props.showNotification();
      })
      .catch(err => {
        console.log(err)
      });

      this.props.changeLogoSpeed();

      this.setState({ email: "" });
    }
  }

  render() {
    const { placeholder, buttonText } = this.props;
    return (
      <form className="subscribe" onSubmit={ this.handleSubmit }>
        <input className="subscribe-email" 
        name="email" 
        type="email" 
        placeholder={ placeholder }
        onChange={ this.handleChange } 
        value={ this.state.email } />
  <button className="subscribe-button" type="submit">{ buttonText }</button>
      </form>
    )
  }
}

export default Subscribe;