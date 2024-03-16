import type { Place } from "./api/Place";
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";

function App() {
  return <div className="h-screen w-screen grid grid-cols-12">
    <div className="col-span-3 p-2">
      <LocationSearch/>
    </div>
    <div className="col-span-9">
      <Map/>
    </div>
  </div>;
}

export default App;
