import Navbar from "./components/layout/navbar";
import Hero from "./components/sections/hero";
import BackgroundGrid from "./components/elements/background-grid";
import AboutSection from "./components/sections/about";
import ClientShowcase from "./components/sections/ClientShowcase"; 
import Services from "./components/sections/services";
import FAQ from "./components/sections/faq";
import BookingSection from "./components/sections/calendar";
import Footer from "./components/layout/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND */}
      {/* RADIAL GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      {/* CONTENT */}
<div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <AboutSection/>
        <ClientShowcase/>
        <Services/>
        <FAQ/>
        <BookingSection/>
        <Footer/>
      </div>

    </main>
  );
}