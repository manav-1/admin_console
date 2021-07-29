import subodhSir from "../../assets/subodhSir.jpg"; //eslint-disable-line
import React , {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

export default function Faculty() {

  const [slides,setSlides] = useState(3)

  useEffect(()=>{
    if(window.screen.width > 576){
      setSlides(3)
    }
    else{
      setSlides(1)
    }
  },[])
  return (
    <div
      style={{ width: "80%", margin: "auto" }}
      id="Faculty"
      className="landing-about row"
    >
      {/* <h1 className="col-sm-12">Faculty</h1> */}
      <Swiper
        slidesPerView={slides}
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
            <p className="my-2">Dr Rubina Mittal</p>
            {/* <p>Convener, Placement Cell</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Anupama Sachdeva</p>
            {/* <p>Convener, Placement Cell</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Shalini Devi</p>
            {/* <p>Convener, Placement Cell</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Harpreet Bhatia</p>
            {/* <p>Convener, Placement Cell</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Ms. Aastha Kanjila</p>
            {/* <p>Convener, Placement Cell</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Dr Anil Sethi</p>
            {/* <p>Convener, Placement Cell</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
          <div>
            <img
              style={{ height: "15rem" }}
              src="https://picsum.photos/200"
              alt="First slide"
            />
            <p className="my-2">Mr. Vicky Kapoor</p>
            {/* <p>Convener, Placement Cell</p> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
