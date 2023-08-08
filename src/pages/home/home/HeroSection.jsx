import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("hoteles.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <section className="relative md:h-[90vh] h-fit pb-12 md:p-10 p-2 bg-slate-300">
      <div className="flex gap-5 md:flex-row flex-col-reverse relative md:my-10 ">
        <div className="md:w-1/2 md:h-full space-y-3">
          <h3 className="text-3xl">{rooms[index]?.name}</h3>
          <p className="text-slate-600 mb-8 text-justify">
            {rooms[index]?.description}
          </p>
          <p className="">
            <span className="text-4xl font-bold">${rooms[index]?.price}</span>
            /Per Night
          </p>
          <button className="custom-btn-outline">
            <Link to="">Book Now</Link>
          </button>
          <div className="absolute bottom-0 left-1/3 w-1/6 border-2 border-[var(--main-color)]  py-1 hidden md:block">
            <h4 className="text-xl text-slate-700 font-semibold border-b-2 border-[var(--main-color)] text-center">
              Amenities
            </h4>
            <ul className="px-3 text-slate-600">
              {rooms[index]?.amenities.map((amenite, i) => (
                <li key={i}>{amenite}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 h-[50vh]">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper md:w-3/5 w-full h-full"
          >
            {rooms.map((room, i) => (
              <SwiperSlide key={i} onMouseMove={() => setIndex(i)}>
                <img
                  src={room.imgs[0]}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Background shape */}
      <div className="hero-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path> */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
