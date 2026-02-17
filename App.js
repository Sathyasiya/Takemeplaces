import { useState } from "react";
import { globalStyles } from "./styles";
import { Navbar, Footer } from "./components";

import HomePage        from "./pages/HomePage";
import HotelsPage      from "./pages/HotelsPage";
import HotelDetailPage from "./pages/HotelDetailPage";
import AboutPage       from "./pages/AboutPage";
import ContactPage     from "./pages/ContactPage";
import BookingsPage    from "./pages/BookingsPage";

export default function App() {
  const [page,          setPage]          = useState("Home");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <HomePage setPage={setPage} setSelectedHotel={setSelectedHotel} />;
      case "Hotels":
        return <HotelsPage setPage={setPage} setSelectedHotel={setSelectedHotel} />;
      case "HotelDetail":
        return <HotelDetailPage hotel={selectedHotel} setPage={setPage} />;
      case "About":
        return <AboutPage />;
      case "Contact":
        return <ContactPage />;
      case "My Bookings":
        return <BookingsPage setPage={setPage} />;
      default:
        return <HomePage setPage={setPage} setSelectedHotel={setSelectedHotel} />;
    }
  };

  return (
    <>
      <style>{globalStyles}</style>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar page={page} setPage={setPage} />
        <main style={{ flex: 1 }}>{renderPage()}</main>
        <Footer setPage={setPage} />
      </div>
    </>
  );
}
