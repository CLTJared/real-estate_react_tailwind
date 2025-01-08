import React from 'react'
import properties from './properties.tsx';
import { FaBath, FaBed, FaHeart, FaLocationDot, FaRuler } from 'react-icons/fa6';

export interface propertyProps {
  id: number;
  image: string;
  price: string;
  title: string;
  location: string;
  description?: string;
  beds: number;
  baths: number;
  sqft: number;
  images: object;
}

interface Props {
  selectedProperty?: object;
  setSelectedProperty: React.Dispatch<propertyProps>;
}

const FeaturedProperty: React.FC<Props> = ({setSelectedProperty}) => {

  return (
    <section className="max-w-7xl mx-auto py-16 px-45">
      <h2 className="text-3xl font-bold mb-8">

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-4 lg:mx-8">
        {properties.map((property: propertyProps) => (
          <div key={property.id} className="bg-white rounded-2xl drop-shadow-lg overflow-hidden
          hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
          onClick={() => setSelectedProperty(property)}>
            <div className="relative">
              <img src={property.image} alt={property.location} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/70 hover:bg-white" >
              <FaHeart className="text-gray-600 hover:text-red-500 transition-colors duration-200" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <FaLocationDot className="text-blue-600" />
                <span>{property.location}</span>
              </div>

              <div className="text-2xl font-bold text-blue-600 mb-2">
                {property.price}
              </div>

              <h3 className="text-xl font-semibold mb-4">{property.title}</h3>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <FaBed className="text-blue-500" />
                  <span className="text-gray-600">{property.beds} beds</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <FaBath className="text-blue-500" />
                  <span className="text-gray-600">{property.baths} baths</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaRuler className="text-blue-500" />
                  <span className="text-gray-600">{property.sqft} sqft</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProperty;