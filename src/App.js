import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Food from "./components/Food";
import Category from "./components/Category";
import { categories } from "./Data/Data";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
