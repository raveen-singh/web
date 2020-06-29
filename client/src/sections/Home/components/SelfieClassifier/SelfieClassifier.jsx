import * as React from 'react';
import './SelfieClassifier.css'
import Camera from 'react-html5-camera-photo';

import 'react-html5-camera-photo/build/css/index.css';



export class SelfieClassifier extends React.Component {
  state = {
    cameraOn: true,
    image: null
  }
  render() {
    const { cameraOn } = this.state
    const camera = cameraOn ?
      <Camera style={{ borderRadius: '0.5rem 0.5rem 0 0', width: '100%' }} onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri) }} /> :
      <>
        <div><img className='selfie' alt='' src={this.state.image} /></div>
      </>
    return (
      <div>
        <div className='cameraWindow'>{camera}</div>
      </div>
    )
  }
  toggleCamera = () => {
    const { cameraOn } = this.state
    this.setState({ cameraOn: !cameraOn })
  }
  onTakePhoto = async (dataUri) => {
    this.toggleCamera()
    console.log(dataUri)
    this.setState({ image: dataUri })
    this.props.addSelfie(dataUri)

  }
}

export default SelfieClassifier
