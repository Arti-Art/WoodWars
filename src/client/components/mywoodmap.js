import React from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";
import arbustum from "../../../data/arbustums.json";
import "../styles/map.css";
import treeImg from "./img/treeImg.png";

function MyWoodMap() {
    const treeIcon = L.icon({
        iconUrl: treeImg,
        iconAnchor: [10, 0],
        popupAnchor: [16, 0],
        iconSize: [38, 50],
    });
    return (
        <Map id="leafletContainer" center={[50.6283, 5.5768]} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {arbustum.map(tree => (
                <Marker
                    icon={treeIcon}
                    key={tree.y_lambert72}
                    position={[tree.geoloc.lat, tree.geoloc.lon]}
                />
            ))}
        </Map>
    );
}

export default MyWoodMap;
