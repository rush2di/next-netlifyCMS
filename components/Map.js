import { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const ContactMap = () => {
  const [state] = useState({
    center: [58.2504528, 8.3750369],
    zoom: 17,
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
            Østregate 10,
            <br /> 4790 Lillesand
            <br /> Norge
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default ContactMap;
