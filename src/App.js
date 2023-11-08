import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Socials from "./components/navbar/Socials";
import HomePage from "./components/pages/HomePage";
import EventsPage from "./components/pages/EventsPage";
import RegisterPage from "./components/pages/RegisterPage";
import TeamPage from "./components/pages/TeamPage";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={{ pathname: "/event" }} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Socials />
    </div>
  );
}

export default App;
