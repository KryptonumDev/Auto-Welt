import React from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

import { 
    StyledGoogleMapsContact, 
    StyledGoogleMapsWrapper 
} from "./StyledGoogleMapsContact"
import { StyledText } from "../Text/StyledText"

const MyMapComponent = withScriptjs(withGoogleMap(props => {
    return <GoogleMap><Marker /></GoogleMap>
}))

const GoogleMapsContact = () => {
  return (
    <StyledGoogleMapsContact>
        <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="0 0 40px"
                hasdeclaredfontfamily="Nocturne Serif"
        >
            Tu nas znajdziesz:
        </StyledText>
        <StyledGoogleMapsWrapper>
            <MyMapComponent 
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `411px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </StyledGoogleMapsWrapper>
    </StyledGoogleMapsContact>
  )
}

export default GoogleMapsContact