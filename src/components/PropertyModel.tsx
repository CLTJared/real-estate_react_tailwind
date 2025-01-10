import { useEffect, useState } from 'react'
import { propertyProps } from './FeaturedProperty';
import { FaBath, FaBed, FaChevronLeft, FaChevronRight, FaHeart, FaLocationDot, FaRuler, FaX } from 'react-icons/fa6';
import { AiOutlineLoading } from 'react-icons/ai';

interface ModelProps {
  properties: propertyProps|null;
  onClose: () => void;
}

const PropertyModel: React.FC<ModelProps> = ({properties, onClose}) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isFav, setFav] = useState<boolean>(false);

  const cacheImages = async (srcArray: string[]) => {
    const promises = srcArray.map((src) => {
      return new Promise<void>(function (resolve, reject) {
        const img = new Image();
  
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      });
    })
  
    await Promise.all(promises);
  
    setLoading(false);
  };

  const images = properties ? properties.images : [];

  useEffect(() => {
    cacheImages(images);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  

  const nextImage = () => { 
    setImageIndex((prev) => {
      const picIndex = prev === images.length - 1 ? 0 : prev + 1;
      return picIndex;
    })
    
  }
  const prevImage = () => { 
    setImageIndex((prev) => {
      const picIndex = prev === 0 ? images.length - 1 : prev - 1
      return picIndex;
    }) 
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>

        <div className="relative h-[300px] md:h-[400px]">
        { isLoading 
          ? <AiOutlineLoading className="text-blue-500 relative mx-auto top-1/2 animate-spin" size={50} />
          : (
            <>
            <img src={images[imageIndex]} alt="" className="w-full h-full object-cover" />

            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
              <FaChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
              <FaChevronRight size={20} />
            </button>

            <button onClick={onClose} className="absolute text-white top-10 right-5 -translate-y-1/2 bg-red-500/30 hover:bg-red-500 p-2 rounded-full ">
              <FaX />
            </button>

            <div className="absolute bottom-4 right-4 flex items-center gap-4">
              <button onClick={() => setFav(!isFav)} className={`bg-white/80 p-2 rounded-full ${isFav ? `text-red-500` : `text-gray-500`}`}>
                <FaHeart />
              </button>

              <div className="bg-black/50 text-white px-3 py-1 rounded-full">
                {imageIndex + 1} of {images.length} 
              </div>
            </div>
            </>
          )
        }
        </div>

          <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <FaLocationDot className="text-blue-600" />
                <span>{properties.location}</span>
              </div>

              <h2 className="text-2xl font-bold-text-gray-800 mb-2">
                {properties.title}
              </h2>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {properties.price}
              </div>

              <div className="flex gap-6 mb-6 p-5 bg-gray-50">
                <div className="flex items-center gap-2">
                    <FaBed className="text-blue-500" />
                    <span className="text-gray-600">{properties.beds} beds</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FaBath className="text-blue-500" />
                    <span className="text-gray-600">{properties.baths} baths</span>
                  </div>
  
                  <div className="flex items-center gap-2">
                    <FaRuler className="text-blue-500" />
                    <span className="text-gray-600">{properties.sqft} sqft</span>
                  </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors">
                Contact Agent
              </button>

            </div>

        </div>

      </div>
  )
}

export default PropertyModel