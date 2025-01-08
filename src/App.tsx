import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import FeaturedProperty from "./components/FeaturedProperty.js";
import PropertyModel from "./components/PropertyModel.js";
import Home from "./components/Home.js";
import { useState } from "react";
import { propertyProps } from "./components/FeaturedProperty.js"

function App() {
  const [selectedProperty, setSelectedProperty] = useState<propertyProps|null>(null);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Home />
      <FeaturedProperty setSelectedProperty={setSelectedProperty} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App