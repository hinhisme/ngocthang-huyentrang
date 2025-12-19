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

  const handleOpenMessages = () => {
    setShowMessages(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMessages = () => {
    setShowMessages(false);
    document.body.style.overflow = "auto";
  };

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
        <div className="flex justify-center items-center my-10">
          <button
            onClick={handleOpenMessages}
            className="relative flex items-center gap-3 px-8 py-3 font-semibold 
            text-rose-600 rounded-xl border border-rose-300
            bg-transparent
            hover:bg-gradient-to-r active:from-rose-400 active:to-rose-600
            hover:text-white
            transition-all duration-300"
          >
            <span className="uppercase tracking-wide">Xem lời chúc</span>

            <span
              className="flex items-center justify-center w-10 h-10 rounded-full 
              bg-white text-rose-600 font-bold shadow-inner border-l-4 border-white"
            >
              ❤️
            </span>
          </button>
        </div>
      </ScrollReveal>
      <BankQR />
      <GoogleMapSection />
      <Thanks />
      <Footer />
      <BackgroundMusic />

      {showMessages && <GuestMessages onClose={handleCloseMessages} />}
    </div>
  );
}

export default App;
