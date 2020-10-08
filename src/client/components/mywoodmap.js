import React from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import arbustum from "../../../data/arbustums02.json";
import "../styles/map.css";
import treeImg from "./img/treeImg.png";

function MyWoodMap() {
    const treeIcon = L.icon({
        iconUrl: treeImg,
        iconAnchor: [10, 0],
        popupAnchor: [16, 0],
        iconSize: [38, 50],
    });
    function logData(e) {
        const zoom = e.zoom;
        const coordinates = e.center;
        console.log(`zoom is ${zoom}`);
        console.log(`lat: ${coordinates[0]}, long:${coordinates[1]}`);
    }
    return (
        <Map
            id="leafletContainer"
            center={[50.6283, 5.5768]}
            zoom={16}
            onViewportChanged={e => logData(e)}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerClusterGroup disableClusteringAtZoom={17}>
                {arbustum.map(tree => (
                    <Marker
                        icon={treeIcon}
                        key={tree.x_lambert72}
                        position={[tree.geoloc.lat, tree.geoloc.lon]}>
                        <Popup>
                            <strong>Name :</strong> {tree.nom_complet} <br />
                            <strong>Hauteur :</strong>{" "}
                            {tree.hauteur_totale || "unavailable"} <br />
                            <strong>Diametre :</strong>{" "}
                            {tree.diametre_cime || "unavailable"} <br />
                            <strong>Circonférence :</strong>{" "}
                            {tree.circonf || "unavailable"} <br />
                            <strong>Geoloc :</strong>{" "}
                            {`${tree.geoloc.lat}, ${tree.geoloc.lon}` ||
                                "unavailable"}
                        </Popup>
                    </Marker>
                ))}
                ;{/* Marker for Bryan's Home in Madagascar */}
                <Marker
                    icon={treeIcon}
                    key={"Bryan"}
                    position={[-18.926263, 47.544829]}
                />
            </MarkerClusterGroup>
        </Map>
    );
}

export default MyWoodMap;
