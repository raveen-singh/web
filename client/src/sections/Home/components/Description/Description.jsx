import * as React from 'react';
import './Description.css'

export class Description extends React.Component {
  render() {
    return (
      <div className='stack'>
        <h1><em>uSober</em></h1>
        <div className='icons'>
        <img src='selfie.svg' width='20%' alt='' />
        <img src='tap.svg' width='20%' alt='' />
        <img src='balance2.svg' width='20%' alt='' />
        </div>
        <div className='instructions'>
          <p>Using a multi stage process we aim to infer how likely it is you are cognitively impaired. Using computer vision, artificial intelligence, and data interpolation.</p>
          <p className='tos'>
          The information is provided "as is" without warranty of any kind. 
          </p>
        </div>
      </div>
    )
  }
}

export default Description
