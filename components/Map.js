import { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const ContactMap = ({ lang }) => {
  const [state] = useState({
    center: [58.5589151, 5.7382733],
    zoom: 15,
  });

  return (
    <div>
      <Map center={state.center} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={state.center}>
          <Popup>
            Stokkalandssvingen
            <br /> 15 4362 Vigrestad
            <br /> Norge
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default ContactMap;
