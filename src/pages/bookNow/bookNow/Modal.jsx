import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Modal = ({ room }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [index, setIndex] = useState(0);
  const { name, price, description, imgs } = room;

  return (
    <dialog id="id" className="modal h-screen">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        {/* modal close btn */}
        <button className="absolute right-3 top-3 bg-red-500 p-2 text-xl text-white rounded-full">
          <FaTimes />
        </button>

        <div className="modal-action flex md:flex-row flex-col">
          {/* Image container */}
          <div className="w-1/2 px-5 rounded">
            <Swiper
              style={{
                "--swiper-navigation-color": "#8bcf17",
                "--swiper-pagination-color": "#8bcf17",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {imgs?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    className="h-72 w-full rounded"
                    onMouseMove={() => setIndex(i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onClick={() => setThumbsSwiper()}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {imgs?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    className={`h-16 my-3 w-full ${
                      i == index
                        ? "swiper-slide-thumb-active"
                        : "swiper-slide-thumb-inactive"
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Modal content area */}
          <div className="w-1/2 pr-5">
            <h3 className="font-bold text-xl">{name}</h3>
            <p className="py-4 text-justify">{description}</p>
            <p className="py-4 text-2xl">${price}</p>
            <p className="custom-btn-outline w-fit">Add To Cart</p>
          </div>
        </div>

        {/* <div className="modal-action"></div> */}
      </form>
    </dialog>
  );
};

export default Modal;
