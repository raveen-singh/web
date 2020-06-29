import * as React from 'react';
import './Results.css'

export class Results extends React.Component {
  state = {
    reaction: null
  }
  render() {
    if(!this.state.reaction){
      
    }
    return (
      <div className='stack'>
        <h1><em>Results</em></h1>
        <h1>{Math.round(Math.max(0, Math.min(100,this.getResults()*100)))}%</h1>
        <p><span>likelihood of being cognitively impaired.</span></p>
        <div className='icons'>
        <img src='selfie.svg' width='20%' alt='' />
        <img src='tap.svg' width='20%' alt='' />
        <img src='balance2.svg' width='20%' alt='' />

        </div>
        {this.state.reaction}
        <div className='instructions'>
        </div>
      </div>
    )
  }

  getResults () {
    const reactionAvg = 450
    const reactionSD = 40
    const maxDeviation = 3

    const {balanceData, reactionData} = this.props;

    const myReactionMean = reactionData.reduce((a, b) => { return a + b; })/reactionData.length
    const myBalanceMean = balanceData.length > 0 ? balanceData.reduce((a, b) => { return {gamma: a.gamma + b.gamma, beta: a.beta + b.beta, alpha: a.alpha + b.alpha}; }) : {gamma: 0, alpha:0, beta: 0}
    myBalanceMean.gamma = myBalanceMean.gamma/balanceData.length
    myBalanceMean.beta = myBalanceMean.beta/balanceData.length
    myBalanceMean.alpha = myBalanceMean.alpha/balanceData.alpha

    const myBalanceVar = {}
    myBalanceVar.gamma = balanceData.reduce((a, b) => { return a + Math.abs(b.gamma - myBalanceMean.gamma); }, 0)|| 0
    myBalanceVar.beta = balanceData.reduce((a, b) => { return a + Math.abs(b.beta - myBalanceMean.beta); }, 0) || 0
    myBalanceVar.alpha = balanceData.reduce((a, b) => { return a + Math.abs(b.alpha - myBalanceMean.alpha); }, 0) || 0

    const totalSway = myBalanceVar.gamma + myBalanceVar.beta + myBalanceVar.alpha
    console.log('Balance Mean', myBalanceMean)
    console.log('Balance Variance', myBalanceVar)
    console.log('Sway', totalSway)

    const drunkScore = (totalSway/10000 + ((myReactionMean - reactionAvg)/reactionSD)/maxDeviation)/2


    return drunkScore
  }
}

export default Results
