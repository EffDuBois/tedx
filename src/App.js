import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Socials from "./components/navbar/Socials";
import Events from "./components/pages/Events";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>}/>
      </Routes>
      <Socials/>
    </div>
  );
}

export default App;
