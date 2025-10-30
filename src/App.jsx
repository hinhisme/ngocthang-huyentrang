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
import ScrollReveal from "./components/ScrollReveal";

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
      <InvitationCard />
      <RSVP />
      <ScrollReveal direction="up" delay={200}>
      <div className="text-center my-10">
        <button
          onClick={() => setShowMessages(true)}
          className="group relative inline-flex items-center justify-center px-8 py-3 
            text-lg font-medium text-white rounded-full 
            bg-gradient-to-r from-pink-400 via-pink-300 to-rose-400 
            shadow-lg shadow-pink-200 hover:shadow-pink-300 
            transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></span>
          <span className="relative z-10 font-playfair flex items-center gap-2">
            💖 Xem lời chúc
          </span>
        </button>
      </div>
      </ScrollReveal>
      <BankQR />
      <GoogleMapSection />
      <Thanks />
      <Footer />
      <BackgroundMusic />
      {showMessages && (
        <GuestMessages onClose={() => setShowMessages(false)} />
      )}
    </div>
  );
}

export default App;
