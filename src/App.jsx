import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import scrollreveal from "scrollreveal";
import Team from "./components/Team";
import About from "./components/About";
import Clients from "./components/Clients";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #about,
        #services,
        #gallery,
        #team,
        #clients,
        #contacts,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}
