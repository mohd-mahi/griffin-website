import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const Feature = () => {
  const data = [
    {
      url: "images/project-page/atlantiis-lobby.jpg",
      title: "Grand Entrance Lobby",
    },
    {
      url: "images/project-page/atlantiis-ext.jpg",
      title: "Prime Location",
    },
    {
      url: "images/project-page/atlantiis-office.jpg",
      title: "Office Spaces",
    },
    {
      url: "images/project-page/atlantiis-lobby.jpg",
      title: "Grand Entrance Lobby",
    },
    {
      url: "images/project-page/atlantiis-ext.jpg",
      title: "Prime Location",
    },
    {
      url: "images/project-page/atlantiis-office.jpg",
      title: "Office Spaces",
    },
  ];
  const [slideWidth, setSlideWidth] = useState(250);
  const slideRef = useRef(null);
  useEffect(() => {
    const updateSlideWidth = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth);
      }
    };
    updateSlideWidth();
    const resizeObserver = new ResizeObserver(() => {
      updateSlideWidth();
    });
    if (slideRef.current) {
      resizeObserver.observe(slideRef.current);
    }

    window.addEventListener("resize", updateSlideWidth);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <section className="feature-section padding-section pt-0 ">
        <div className="container position-relative padding-section less pb-0 ">
          <div className="feature-heading ">
            <h2 className="sub-title">
              {" "}
              The benchmark of <br /> brilliance
            </h2>
          </div>
          <div className="feature-wrapper" ref={slideRef}>
            <Swiper
              slidesPerView={1.2}
              pagination={pagination}
              navigation={true}
              loop={true}
              speed={1500}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.map((item, i) => {
                return (
                  <SwiperSlide
                    ref={slideRef}
                    style={{
                      "--width": `${slideWidth}px`,
                      transition: "width 1s ease",
                    }}
                    key={i}
                  >
                    <div
                      className="feature-card"
                      data-aos="fade-up"
                      data-aos-delay={i * 150 + 600}
                    >
                      <a
                        href="#"
                        className="feature-content"
                        style={{ backgroundImage: `url(${item.url})` }}
                      >
                        <div className="promo-title">
                          <h4>{item.title}</h4>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Feature;
