import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import EventList from "./components/EventList/EventList";
import EventDetails from "./components/EventDetails/EventDetails";
import SeatSelection from "./components/SeatSelection/SeatSelection";
import Payment from "./components/Payment/Payment";
import Confirmation from "./components/Confirmation/Confirmation";
import OrganizerDashboard from "./components/OrganizerDashboard/OrganizerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/seats/:id" element={<SeatSelection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
