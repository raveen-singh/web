import * as React from 'react';
import './ReactionTime.css'

export class ReactionTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: '#4AA6FC',
      instructions: 'Tap to Start',
      analysis: {
        mean: null,
        variance: null
      }
    };
    this.maxTaps = 10;
  }
  render() {
    return (
      <div style={{ background: this.state.color}} onClick={this.handleClick} id='gameArea'>
        {this.state.instructions}
      </div>
    )
  }
  getRandomNumberBetween = (min, max) => {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  start = () => {
    this.changeToRed();
    setTimeout(this.changeToGreen, this.getRandomNumberBetween(1,2) * 1000);
  }
  end = () => {
    this.changeToBlue();
    this.setState({instructions: 'Information recorded!'})
  }
  changeToBlue = () =>  {
    this.setState({
      // color: '#4AA6FC',
      instructions: 'Tap to Start'
    });
  }
  changeToRed = () =>  {
    this.setState({
      color: '#D63D1B',
      instructions: `${this.maxTaps - this.state.count} more, Tap when screen turns green!`,
      lastStartTime: Date.now(),
    });
  }
  changeToGreen = () => {
    this.setState({
      color: '#35CA4D',
      instructions: 'Tap!',
      lastStartTime: Date.now(),
    });
  }
  incrementCount = () => {
    this.setState(prevState => {
      return {count: this.state.count + 1}
    })
  }
  addReactionTime = (newTime) => {
    this.props.addData(newTime)
  }
  handleClick = (event) => {
    //If Blue
    if(this.state.color === '#4AA6FC') {
      this.start();
      this.incrementCount();
      //If Red
    } else if(this.state.color === '#D63D1B') {
      this.addReactionTime(Date.now() - this.state.lastStartTime);
      //If Green
    } else {
      this.incrementCount();
      this.addReactionTime(Date.now() - this.state.lastStartTime);
      if(this.state.count < this.props.maxTaps) {
        this.start();
      } else {
        this.end();
      }
    }
  }
}

export default ReactionTime
