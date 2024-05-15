import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AboutUsPage = () => {
  const centerCoordinates = [52.526597, 13.374156]; // Koordinaten

  return (
    <div className="text-white max-w-xxl pb-32">
      {/* Karte */}
      <div className="mb-12">
        <MapContainer
          center={centerCoordinates}
          zoom={15}
          style={{ height: "50vh", width: "100%" }}
          className="rounded-md shadow-lg z-0"
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

      {/* Textinhalt */}
      <div className="flex flex-col md:flex-row align-items-center p-16 gap-8">
        {/* About Us */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-left">About Us</h3>
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
              Fantasy Cinema is located at the beginning of Fantasy Harbor,
              nestled at the picturesque corner of Fairywood and Elf Path in the
              charming Glockenbachviertel district. This cinematic land invites
              you to immerse yourself in a world of dreams. Easily accessible on
              foot from the Fairy Wing and Magic Light train stations, Fantasy
              Harbor beckons. Dive into the magic and discover the adventure
              that awaits you!
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Public Transportation</p>
            <p>
              Embark on the magical journey to Fantasy Cinema! Whether by the
              floating magic carpet of public transportation or the majestic
              flight of the urban dragon tram, the journey is as enchanting as
              the cinema itself. With stops at the magical locations of Glitter
              Butterfly Street, the Elven Ring at Sendlinger Tor, and Mill
              Street, as well as Bus Number 9, the adventure is as easy as
              casting a spell. Join this magical adventure and immerse yourself
              in the world of Fantasy Cinema!"
            </p>
          </div>
        </div>

        {/* Join */}
        <div className="flex-1">
          <p className="font-semibold text-right  mb-4 ">
            Join this magical adventure in the world of Fantasy Cinema!
          </p>
          <p className="text-right mb-16 text-sm">
            "In den Hallen des Kinos erwacht die Magie zum Leben, wo Träume auf
            der Leinwand tanzen und Fantasie die Grenzen der Realität zart
            umschmeichelt. Möge das Licht der Projektoren deine Seele sanft
            erhellen und dich auf eine Reise entführen, die deine
            Vorstellungskraft weit übersteigt."
          </p>
          <div className="flex justify-center text-center p-4">
            <img
              src="/public/static/images/saal.jpg"
              alt=""
              className="w-1/3 rounded-lg m-2"
            />
            <img
              src={`/public/static/images/film-projector.jpg`}
              alt=""
              className="w-1/3 rounded-lg m-2"
            />
            <img
              src={`${process.env.PUBLIC_URL}/public/images/cinema.jpg`}
              alt=""
              className="w-1/3 rounded-lg m-2 "
            />
          </div>
        </div>
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
