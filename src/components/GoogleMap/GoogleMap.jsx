import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class GoogleMap extends Component {
    state = {  }
    render() {
        const style = {
            width: '100%',
            height: '300px'
          }
        return (
            <Map google={this.props.google} zoom={14} style={style}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>google map</h1>
            </div>
        </InfoWindow>
      </Map>
        );
    }
}

 export default GoogleApiWrapper({
    apiKey: ("AIzaSyArYegByvYPC6rfF3f7Zcf38DfGabHgRPg")
  })(GoogleMap)