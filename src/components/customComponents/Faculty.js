import subodhSir from "../../assets/subodhSir.jpg"; //eslint-disable-line
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

export default function faculty() {
  return (
    <div
      style={{ width: "80%", margin: "auto" }}
      id="Faculty"
      className="landing-about row"
    >
      <h1 className="col-sm-12">Faculty</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper pb-3"
      >
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Subodh Pandit</p>
            <p>Convener, Placement Cell</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
