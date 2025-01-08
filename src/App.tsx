import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import FeaturedProperty from "./components/FeaturedProperty.js";
import PropertyModel from "./components/PropertyModel.js";
import Home from "./components/Home.js";

function App() {

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Home />
      <FeaturedProperty />
      <Contact />
      <Footer />
    </div>
  )
}

export default App