import { useState } from 'react'
import { propertyProps } from './FeaturedProperty';

interface ModelProps {
  properties: propertyProps|null;
  onClose: () => void;
}

const PropertyModel: React.FC<ModelProps> = ({properties, onClose}) => {
  const [propertyIndex, setPropertyIndex] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isFav, setFav] = useState<boolean>(false);

  if(!properties) return null;

  const images = properties.images || [];

  const nextImage = () => { setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev)) }
  const prevImage = () => { setImageIndex((next) => (next === 0 ? images.length - 1 : next - 1)) }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        <div className="relative h-[300px] md:h-[400px]">
          <img src={images[imageIndex]} alt="" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  )
}

export default PropertyModel