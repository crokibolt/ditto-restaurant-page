import "./App.css";
import Navbar from "./components/Navbar";
import { AboutUs, Header } from "./pages";

function App() {
  return (
    <div className="w-screen h-screen scroll-smooth overflow-x-hidden">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
