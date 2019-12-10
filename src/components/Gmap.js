import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 53.899063,
    lng: 27.524973,
  },
  zoom: 14,
}

const markerStyle = {
    color: 'black',
    fontSize: '18px',
}

const AnyReactComponent = ({ text }) => <div style={markerStyle}>{text}</div>

const Gmap = () => (
  <div style={{ height: '90vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyBqTAIKlymPUaLvTwTmKJkkdyGbmgcoH-8' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent 
        lat={53.899063}
        lng={27.524973}
        text={'ЗАО "Александраудит", ул.Куприянова 1а'}
      />
    </GoogleMapReact>
  </div>
)

export default Gmap