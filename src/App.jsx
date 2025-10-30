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
      <div className="text-center my-12">
        <button
          onClick={() => setShowMessages(true)}
          className="group relative inline-flex items-center justify-center gap-2 px-10 py-4
            text-lg font-semibold text-white rounded-full 
            bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500
            shadow-[0_0_20px_rgba(255,192,203,0.6)] 
            hover:shadow-[0_0_40px_rgba(255,182,193,0.9)] 
            transition-all duration-500 ease-out overflow-hidden"
        >
          <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.7),transparent)]
            translate-x-[-100%] group-hover:translate-x-[100%]
            transition-transform duration-[1.2s] ease-in-out"></span>

          <span className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/60 transition-all duration-500"></span>

          <span className="relative z-10 flex items-center gap-2">
            <span className="text-2xl group-hover:animate-bounce">💌</span>
            <span className="font-['Playfair_Display'] tracking-wide">Xem lời chúc</span>
          </span>

          <span className="absolute -top-2 -right-2 w-4 h-4 bg-white/80 rounded-full blur-sm opacity-0 group-hover:opacity-100 animate-ping"></span>
        </button>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}</style>
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
