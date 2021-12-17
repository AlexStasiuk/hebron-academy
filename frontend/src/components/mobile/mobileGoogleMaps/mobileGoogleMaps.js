import React, { useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './mobileGoogleMaps.css';
import MobileContactsNearGoogleMaps from '../mobileContactsNearGoogleMaps';

const MobileGoogleMaps = () => {
    const containerStyle = {
        width: '100%',
        height: '40vh',
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

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div className="mobile-google-maps-wrapper">
            <GoogleMap
                className=""
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {<Marker position={{ lat: 49.897094, lng: 23.924889 }} />}
            </GoogleMap>
            <MobileContactsNearGoogleMaps />
        </div>
    ) : null;
};

export default MobileGoogleMaps;
