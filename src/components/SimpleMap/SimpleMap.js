import React, { Component } from 'react';
import { Map, Marker } from '2gis-maps-react';

export default class SimpleMap extends Component {
  render() {
    return (
      <Map
        style={{
          minHeight: '60%',
          width: '100%',
          position: 'absolute',
          bottom: '2rem'
        }}
        center={[54.98, 82.89]}
        zoom={13}
      >
        <Marker
          pos={[54.98, 82.89]}
        />
      </Map>
    );
  }
}
