import "./App.css";
import Navbar from "./components/Navbar";
import { AboutUs, Awards, ChefNotes, Header, Menu, Contact } from "./pages";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="w-screen h-screen scroll-smooth overflow-x-hidden snap-proximity snap-y">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Awards />
      <ChefNotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
