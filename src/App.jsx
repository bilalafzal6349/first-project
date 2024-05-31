import "./App.css";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/AboutSection";
import { RoadMapSection } from "./components/RoadMapSection";
import { FaqSection } from "./components/FaqSection";
import { TeamSection } from "./components/team-section/TeamSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className=" font-Righteous">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <RoadMapSection />
      <FaqSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
