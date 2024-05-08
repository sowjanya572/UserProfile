import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import {Icon} from "leaflet";


const Leafletmap = () => {
  const position = [51.505, -0.09];
  const [healthCenters,SethealthCentere] = useState([]);
  const markerPositions = [
        { position: [51.505, -0.09], popupText: 'Hotel 1' },
        { position: [51.51, -0.1], popupText: 'Hotel 2' },
        // Add more positions as needed
      ];

  const stylecs = {
    height: '400px',
    width: '80%',
    margin: '20px',
    // border: 1px solid #ddd; /* Add a border for visual separation */
    // border-radius: 8px;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  const getAllHeathFacilities = ()=> {
    fetch('http://localhost:9000/data/api/nairobihealthfacilities')
    .then((response) => response.json())
    .then((data) => {
      SethealthCentere(data);
      console.log("123",data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  useEffect(()=>{
    getAllHeathFacilities();
  })

  const customIcon = new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize:[38 , 38]
  });
  return (
    <div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height:'100vh'}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
         {markerPositions.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}

        {/* {healthCenters.map((center) => {
          const point = [center.point.coordinates[1], center.point.coordinates[0]];
           {console.log("chitti",center)}
            <Marker position={point} key={center.id} icon={customIcon} >
              <Popup>
                <span>Name:<br /> {center.name}</span>
              </Popup>
            </Marker>
        
        })} */}
    </MapContainer>
    </div>
    
  );
};

export default Leafletmap;




