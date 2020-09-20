import React from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import * as treeData from "../../../data/arbustums.json";
import "../styles/map.css";

function MyWoodMap() {
    return (
        <Map id="leafletContainer" center={[50.6283, 5.5768]} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {treeData.map(tree => (
                <Marker
                    key={tree.y_lambert72}
                    position={[tree.geoloc.lat, tree.geoloc.lon]}
                />
            ))}
        </Map>
    );
}

export default MyWoodMap;
