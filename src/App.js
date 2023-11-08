import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Socials from "./components/navbar/Socials";
import HomePage from "./components/pages/HomePage";
import EventsPage from "./components/pages/EventsPage";
import AboutPage from "./components/pages/AboutPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={{pathname: '/event'}}/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Socials />
    </div>
  );
}

export default App;
