import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const RoomDetails = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [room, setRoom] = useState({});
  const [index, setIndex] = useState(0);
  const {
    _id,
    name,
    price,
    ratings,
    reviews,
    location,
    amenities,
    imgs,
    description,
  } = room;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/${id}`)
      .then((res) => setRoom(res.data));
  }, [id]);

  console.log(room);
  return (
    <div className="md:px-10">
      {/* Room content area */}
      <div className="flex flex-row-reverse justify-between md:py-8 gap-5">
        <div className="w-1/3 py-5">
          <h3 className="text-2xl">{name}</h3>
          <div className="mt-auto">
            <h4 className="font-semibold">Amenities</h4>
            <ul className="list-disc pl-5">
              {amenities?.map((amenitie, i) => (
                <li key={i}>{amenitie}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 pr-5">
            <p className="text-justify">{description}</p>
            <p>
              <span className="font-bold">Location:</span> {location}
            </p>
            <p className="text-2xl">${price}</p>
            <button className="custom-btn-outline w-fit">Add To Cart</button>
          </div>
        </div>

        {/* Room slider area */}
        <div className="w-2/3 mx-auto rounded">
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
                  className="h-[80vh] w-full rounded"
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
                  className={`h-16 my-3 w-2/3 ${
                    i == index
                      ? "swiper-slide-thumb-active"
                      : "swiper-slide-thumb-inactive"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
