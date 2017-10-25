import React, { Component } from 'react';

const date = new Date();

class Heure extends Component {
  state = {
    heures: date.getHours(),
    minutes: date.getMinutes(),
    secondes: date.getSeconds(),
    milisecondes: date.getMilliseconds(),
  };

  componentDidMount() {
    this.interval = setInterval(() => this.milisecondes(), 1);
    this.interval = setInterval(() => this.secondes(), 1);
    this.interval = setInterval(() => this.minutes(), 1);
    this.interval = setInterval(() => this.heures(), 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  milisecondes() {
    const dateNow = new Date();
    if (dateNow.getMilliseconds() > 99) {
      this.setState({
        milisecondes: dateNow.getMilliseconds(),
      });
    } else {
      this.setState({
        milisecondes: `0${dateNow.getMilliseconds()}`,
      });
    }
  }

  secondes() {
    const dateNow = new Date();
    if (dateNow.getSeconds() > 9) {
      this.setState({
        secondes: dateNow.getSeconds(),
      });
    } else {
      this.setState({
        secondes: `0${dateNow.getSeconds()}`,
      });
    }
  }

  minutes() {
    const dateNow = new Date();
    if (dateNow.getMinutes() > 9) {
      this.setState({
        minutes: dateNow.getMinutes(),
      });
    } else {
      this.setState({
        minutes: `0${dateNow.getMinutes()}`,
      });
    }
  }

  heures() {
    const dateNow = new Date();
    if (dateNow.getHours() > 9) {
      this.setState({
        heures: dateNow.getHours(),
      });
    } else {
      this.setState({
        heures: `0${dateNow.getHours()}`,
      });
    }
  }

  render() {
    return (
      <div className="heure">
        <span>{this.state.heures}:{this.state.minutes}:
          {this.state.secondes}:{this.state.milisecondes}</span>
      </div>
    );
  }
}

export default Heure;
