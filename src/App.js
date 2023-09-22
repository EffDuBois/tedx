import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Socials from "./components/navbar/Socials";
import HomePage from "./components/pages/HomePage";
import EventsPage from "./components/pages/EventsPage";
import SpeakersPage from "./components/pages/SpeakersPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/speakers" element={<SpeakersPage/>}/>
      </Routes>
      <Socials/>
    </div>
  );
}

export default App;
