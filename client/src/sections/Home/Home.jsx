import * as React from 'react';
import { Button, Steps } from 'antd';
import './Home.css'

import {Description, ReactionTime, SelfieClassifier, BalanceTest, Results} from './components'

export class Home extends React.Component {
  state = {
    step: 1,
    selfieData: null,
    reactionData: [],
    balanceData: [],
    isBalanceDone: false
  }

  render() {
    const {step, reactionData, balanceData} = this.state
    let curr = null
    switch(step){
      case 1:
        curr = <Description/>;
        break
      case 2:
        curr = <SelfieClassifier addSelfie={this.addSelfie} />
        break
      case 3:
        curr = <ReactionTime maxTaps={10} data={reactionData} addData={this.addReaction}/>
        break
      case 4:
        curr = <BalanceTest data={balanceData} addData={this.addBalance} toggleDone={this.toggleBalanceDone}/>
        break
      case 5:
        curr = <Results reactionData={this.state.reactionData} balanceData={this.state.balanceData} />
      break
      default:
        curr = null
    }

    return (
      <>
      {/*<h1><img src='icons/icon-72x72.png' alt=''/><em>uSober</em></h1>*/}
      <div className='main-container'>
        <div className='steps' >
        <Steps initial={0} size='small' current={step-1}>
          <Steps.Step title="Description" description="Readme please 😊" />
          <Steps.Step title="Selfie" description="Ai on selfies 🤳" />
          <Steps.Step title="Speed Game" description="Fast enough?⚡" />
          <Steps.Step title="Balance" description="Left Leg only ⚖" />
          <Steps.Step title="Results" description="uSober bro? 🍺" />
        </Steps>
        </div>
        <div className='card'>
          {curr}
          <div className='footer'>
            <p className='nextLabel'>{step === 5 ? 'Restart' : 'Next'}</p><Button type="primary" size='large' icon="right" shape="circle" disabled={this.isNextDisabled()} onClick={this.nextStep} />
          </div>
        </div>
      </div>
      </>
    )
  }
  toggleBalanceDone = () => {
    this.setState({isBalanceDone: true})
  }
  isNextDisabled = () => {
    const {step, selfieData, reactionData, isBalanceDone} = this.state
    if(step === 1) {
      return false
    }else if(step === 2) {
      return selfieData ? false : true
    }else if(step === 3) {
      return reactionData.length >= 10 ? false : true
    }else if(step === 4) {
      return isBalanceDone ? false : true 
    }else if(step === 5){
      return false
    }
  }
  nextStep = () => {
    const step = this.state.step%5 + 1
    this.setState({step})
  }
  prevStep = () => {
    const step = Math.max(0, this.state.step - 1)
    this.setState({step})
  }

  addBalance = (point) => {
    this.setState({balanceData: this.state.balanceData.concat(point)})
    console.log(this.state.balanceData.length)
  }

  addReaction = (point) => {
    this.setState({reactionData: this.state.reactionData.concat(point)})
    console.log(this.state.reactionData.length)
  }
  addSelfie = (selfieData) => {
    this.setState({selfieData})
    console.log(this.state.selfieData)
  }
}

export default Home
