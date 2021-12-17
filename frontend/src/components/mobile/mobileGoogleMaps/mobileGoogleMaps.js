import React, { useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './mobileGoogleMaps.css';

const MobileGoogleMaps = () => {
    const containerStyle = {
        width: '400px',
        height: '400px',
    };

    const center = {
        lat: 49.897094,
        lng: 23.924889,
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyC5mh_8-Mg4k1-KulHlz6pvrsC66YxlMg4',
    });

    const [map, setMap] = React.useState(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        ></GoogleMap>
    ) : (
        <></>
    );
};

export default MobileGoogleMaps;
