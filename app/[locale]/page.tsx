import About from "../../components/about";
import Contact from "../../components/contact";
import EmeaHub from "../../components/emeaHub";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Services from "../../components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <EmeaHub />
      <Contact />
      <Footer />
    </main>
  );
}
