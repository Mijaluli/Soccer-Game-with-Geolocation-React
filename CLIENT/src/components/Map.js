import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux'

 
export class MapContainer extends Component {

  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{lat:0,lng:0}}>
 
        <Marker name={'Ball'} img src={"./ball.png"}style={{width:20,height:20}}/>

        <Marker name={'Goal'} img src={"./goal.png"}style={{width:20,height:20}}/>
 
      </Map>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    getLocation: () => dispatch({ type: 'GET_LOCATION' }),
    getIsGoal: () => dispatch({ type: 'GET_IS_GOAL' }),
  }
}

connect(mapDispatchToProps)(MapContainer)

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDwxfea8ecYMmGKMO39JF1ko5bhF4UocpM")
})(MapContainer)