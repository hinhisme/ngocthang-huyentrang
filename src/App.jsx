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
      <GuestMessages />
      <BankQR />
      <GoogleMapSection />
      <Thanks />
      <Footer />
      <BackgroundMusic />
    </div>
  );
}

export default App;
