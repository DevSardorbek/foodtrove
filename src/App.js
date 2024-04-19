import Deliver from "./components/deliver/Deliver";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import NavbarBotttom from "./components/navbar/NavbarBotttom";
import NavbarTop from "./components/navbar/NavbarTop";
import Prodact from "./components/prodact/Prodact";
import Daily from "./daily/Daily";

function App() {
  return (
    <div>
      <NavbarTop />
      <NavbarBotttom />
      <Hero />
      <Prodact />
      <Main />
      <Daily />
      <Deliver />
      <Footer />
    </div>
  );
}

export default App;
