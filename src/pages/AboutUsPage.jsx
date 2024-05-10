import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AboutUsPage = () => {
  const centerCoordinates = [52.526597, 13.374156]; // Koordinaten

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8 md:p-16">
      {/* Textinhalt */}
      <div className="flex-1 max-w-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">About Us</h3>
        <div className="mb-4">
          <p className="font-semibold">Opening Hours</p>
          <p>
            Fantasy Cinema is open: Monday – Friday from 11:00 PM onwards
            Saturday – Sunday 15 minutes before the start of the first
            screening. You can find a program overview{" "}
            <a href="/program">here</a>.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Directions to Fantasy Cinema</p>
          <p>
            Fantasy Cinema is located directly at the intersection of
            Hans-Sachs- and Ickstattstraße in the Glockenbachviertel district
            and is easily accessible on foot from the Sendlinger Tor or
            Fraunhoferstraße train stations.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Public Transportation</p>
          <p>
            U1/2: Fraunhoferstraße Station, U3/6: Sendlinger Tor Station Tram
            16/17/18: Müllerstraße Stop By Car Public parking spaces around the
            cinema are very limited. Please consider walking, cycling, or using
            public transportation (MVG).
          </p>
        </div>
      </div>

      {/* Karte */}
      <div className="flex-1 max-w-lg">
        <MapContainer
          center={centerCoordinates}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
          className="rounded-md shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={centerCoordinates}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default AboutUsPage;

/* 
OpenStreetMap (OSM) 
npm install leaflet react-leaflet
Koordinaten: 52° 31' 35,75'' N, 13° 22' 26,96'' E  -52.526597, 13.374156
 */
