import "./App.css";
import FilterBar from "./components/FilterBar";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCatalog from "./components/ProductCatalog";

function App() {
  return (
    <div className="w-scren ">
      <Navbar />
      <Hero />
      <FilterBar />
      <ProductCatalog />
    </div>
  );
}

export default App;
