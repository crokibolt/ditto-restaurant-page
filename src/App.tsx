import "./App.css";
import Navbar from "./components/Navbar";
import { AboutUs, Header, Menu } from "./pages";

function App() {
  return (
    <div className="w-screen h-screen scroll-smooth overflow-x-hidden">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
    </div>
  );
}

export default App;
