import { useEffect, useState } from "react";
import { FaFacebookF, FaQuoteLeft, FaTwitter } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-coverflow";
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
    <section className="relative h-fit md:px-10 pt-10 p-2 bg-slate-300">
      <div className="md:mt-12 h-full">
        <h3 className="text-3xl text-center font-bold">
          Customer <span className="text-[var(--main-color)]">Reviews</span>
        </h3>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className="my-12">
              <div className="md:w-1/2 mx-auto space-y-3 flex flex-col items-center border border-[var(--main-color)] p-8 bg-slate-200 rounded-lg">
                {/* Card Header */}
                <div className="w-full flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <img
                      src="https://lh3.googleusercontent.com/ogw/AGvuzYYJIMr8tbcCXULkvphh6CrbZjhxYpUsbxpcmtU5=s64-c-mo"
                      alt=""
                      className="h-16 w-16 rounded-full border-2 border-white"
                    />

                    <div>
                      <h5 className="text-xl">{review.name}</h5>
                      <p className="text-xm">CEO</p>
                    </div>
                  </div>
                  <div className="text-center md:text-2xl">
                    <div className="inline-flex gap-1 ">
                      <a href="/">
                        <FaFacebookF />
                      </a>
                      <a href="/">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="w-full flex gap-2">
                  <FaQuoteLeft className="w-24 text-2xl text-[var(--main-color)]" />
                  <p className="text-justify"> {review.comment}</p>
                </div>

                {/* Card footer */}
                <div className="text-center">
                  <Review ratings={review.rating} />
                  <p className="text-xs">{review.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
