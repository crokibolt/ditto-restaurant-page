import "./App.css";
import Navbar from "./components/Navbar";
import { AboutUs, Awards, ChefNotes, Header, Menu } from "./pages";

function App() {
  return (
    <div className="w-screen h-screen scroll-smooth overflow-x-hidden snap-proximity snap-y">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Awards />
      <ChefNotes />
    </div>
  );
}

export default App;
