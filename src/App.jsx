import { useState } from "react";
import Header from "./components/Header";
import LoveStory from "./components/LoveStory";
import Album from "./components/Album";
import PartyInfo from "./components/PartyInfo";
import RSVP from "./components/RSVP";
import BankQR from "./components/BankQR";
import Footer from "./components/Footer";
import BrideGroom from "./components/BrideGroom";
import GuestMessages from "./components/GuestMessages";
import BackgroundMusic from "./components/BackgroundMusic";
import FallingLeaves from "./components/FallingLeaves";
import Thanks from "./components/Thanks";
import InvitationCard from "./components/InvitationCard";
import GoogleMapSection from "./components/GoogleMapSection";

function App() {
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="font-sans relative overflow-hidden">
      <FallingLeaves />
      <Header />
      <BrideGroom />
      <LoveStory />
      <Album />
      <PartyInfo />

      {/* 👉 Nút mở popup */}
      <div className="text-center my-10">
        <button
          onClick={() => setShowMessages(true)}
          className="px-6 py-3 bg-pink-500 text-white font-medium rounded-full shadow-md hover:bg-pink-600 transition-all duration-300"
        >
          💌 Xem lời chúc
        </button>
      </div>

      <InvitationCard />
      <RSVP />
      <BankQR />
      <GoogleMapSection />
      <Thanks />
      <Footer />
      <BackgroundMusic />

      {/* 👉 Popup GuestMessages */}
      {showMessages && (
        <GuestMessages onClose={() => setShowMessages(false)} />
      )}
    </div>
  );
}

export default App;
