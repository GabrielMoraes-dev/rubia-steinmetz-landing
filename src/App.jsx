import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Rentals from "./components/Rentals";
import Sales from "./components/Sales";
import About from "./components/About";
import Differentials from "./components/Differentials";
import Audience from "./components/Audience";
import Process from "./components/Process";
import FinalCTA from "./components/FinalCTA";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Rentals />
        <Sales />
        <About />
        <Differentials />
        <Audience />
        <Process />
        <FinalCTA />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}
