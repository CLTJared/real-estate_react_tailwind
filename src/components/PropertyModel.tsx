import { useState } from 'react'
import { propertyProps } from './FeaturedProperty';
import { FaChevronLeft, FaChevronRight, FaHeart, FaX } from 'react-icons/fa6';

interface ModelProps {
  properties: propertyProps|null;
  onClose: () => void;
}

const PropertyModel: React.FC<ModelProps> = ({properties, onClose}) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isFav, setFav] = useState<boolean>(false);

  if(!properties) return null;
  const images = properties.images || [];

  const nextImage = () => { 
    setImageIndex((prev) => {
      const picIndex = prev === images.length - 1 ? 0 : prev + 1;
      console.log(picIndex);
      return picIndex;
    })
    
  }
  const prevImage = () => { 
    setImageIndex((prev) => {
      const picIndex = prev === 0 ? images.length - 1 : prev - 1
      console.log(picIndex);
      return picIndex;
    }) 
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        <div className="relative h-[300px] md:h-[400px]">
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
        </div>

      </div>
    </div>
  )
}

export default PropertyModel