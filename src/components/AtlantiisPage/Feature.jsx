import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Heading from "../Heading";
import ArtistImpression from "../ArtistImpression";

const Feature = () => {
  const swiperRef = useRef(null);

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

  const pagination = {
    clickable: true,
  };

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;

    if (!swiper) return;

    swiper.on("sliderMove", () => {
      if (swiper.el) {
        swiper.el.setAttribute("data-lenis-prevent", "true");
      }
    });

    swiper.on("touchEnd", () => {
      if (swiper.el) {
        swiper.el.removeAttribute("data-lenis-prevent");
      }
    });

    return () => {
      swiper.off("sliderMove");
      swiper.off("touchEnd");
    };
  }, []);

  return (
    <section className="feature-section">
      <div className="container position-relative padding-section less">
        <Heading>
          The benchmark of <br /> brilliance
        </Heading>
        <div className="feature-wrapper">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
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
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay={i * 150 + 600}
                >
                  <a href="#" className="feature-content">
                    <img src={item.url} alt="" />
                    <div className="promo-title">
                      <h4>{item.title}</h4>
                    </div>
                    <ArtistImpression text="Artist's impression*" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Feature;
