import  { useState, useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import ItemImage1 from '/images/image-product-1.jpg';
import ItemImage2 from '/images/image-product-2.jpg';
import ItemImage3 from '/images/image-product-3.jpg';
import ItemImage4 from '/images/image-product-4.jpg';
import { CustomCloseButton, CustomNextButton, CustomPrevButton, StyledSwiper, StyledThumbnails, Thumbnail } from './StyledSlider';


interface SliderProps {
  setSelectedImage: (image: string) => void;
}


const images = [ItemImage1, ItemImage2, ItemImage3, ItemImage4];

const customStyles = {
  
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  slide: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  thumbnailsContainer:{
    background: 'rgba(0, 0, 0, 0.75)',
    paddingTop: 40, 
    paddingBottom: 89,
  },
  thumbnailsTrack:{
    gap:31,
    width: 'calc(100% - (4 * 31px))',
  },

};

function Slider({ setSelectedImage }: SliderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setSelectedImage(ItemImage1);
  }, [setSelectedImage]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSlideChange = (swiper: any) => {
    setSelectedImage(images[swiper.activeIndex]);
  };

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsOpen(!isOpen);
    setPhotoIndex(0);
  };

  const thumbnailsRef = useRef(null);


  return (
    <div>
      <StyledSwiper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
          
          
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={() => openLightbox(index)}>
              <img src={image} alt={`Product ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </StyledSwiper>

      <StyledThumbnails>
        {images.map((image, index) => (
          <Thumbnail key={index} onClick={() => openLightbox(index)}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </Thumbnail>
        ))}
      </StyledThumbnails>

      {isOpen && screenWidth > 1200 &&(
        <Lightbox
        
        slides={images.map(image => ({
          src: image,
          width: screenWidth > 1440 ? 550 : 500,
          height: screenWidth > 1440 ? 550 : 500
          
        }))}
      
          render={{
            iconPrev: () => <CustomPrevButton />,
            iconNext: () => <CustomNextButton />,
            iconClose: () => <CustomCloseButton/>,
            
          }}
          plugins={[Thumbnails]}
          thumbnails={{ ref: thumbnailsRef ,
            width: 88,
            
            height: 88,
            border: 1,
            borderStyle: "solid",
            borderColor: "#ff7e1b",
            borderRadius: 10,
            padding: 0 ,
            gap: 31,
            imageFit:  "cover",

          }}
          open={isOpen}
          index={photoIndex}
          close={handleCloseLightbox}

          styles={{
            ...customStyles,
          }}
        />
      )}
    </div>
  );
}

export default Slider;

