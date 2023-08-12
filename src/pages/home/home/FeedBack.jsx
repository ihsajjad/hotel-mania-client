import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Review from "../../../components/ratings/Review";

const FeedBack = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="relative  h-fit md:px-10 pt-10 p-2 bg-slate-300">
      <div className="md:mt-12 h-full">
        <h3 className="text-3xl text-center font-bold">
          Customer <span className="text-[var(--main-color)]">Reviews</span>
        </h3>
        <div className="h-full">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-full"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className="rounded-lg py-8 px-24 h-full">
                <div className=" space-y-3 flex flex-col items-center text-center">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/AGvuzYYJIMr8tbcCXULkvphh6CrbZjhxYpUsbxpcmtU5=s64-c-mo"
                    alt=""
                    className="h-24 w-24 rounded-full border-2 border-white"
                  />
                  <h5 className="text-xl">{review.name}</h5>
                  <p>{review.comment}</p>
                  <Review ratings={review.rating} />
                  <span>{review.date}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* background shape */}
      <div className="feedback">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default FeedBack;
