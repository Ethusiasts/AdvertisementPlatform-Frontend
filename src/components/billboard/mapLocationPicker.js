import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const LocationSelector = ({ handleLocationChange }) => {
  const [position, setPosition] = useState(null);

  const defaultMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const handleMapClick = (event) => {
    handleLocationChange(event.latlng);
    setPosition(event.latlng);
  };

  const LocationMarker = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return position === null ? null : (
      <Marker position={position} icon={defaultMarkerIcon} />
    );
  };

  return (
    <div>
      <MapContainer
        center={[8.9806, 38.7578]}
        zoom={14}
        style={{ height: "400px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default LocationSelector;
