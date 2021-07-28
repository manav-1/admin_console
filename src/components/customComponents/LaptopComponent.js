import subodhSir from "../../assets/subodhSir.jpg";
export default function LaptopComponent() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide  faculty"
        data-ride="carousel"
        // style={{ width: '80%', margin: "auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="w-100 d-flex justify-content-around my-2">
              <img style={{ width: "30%" }} src={subodhSir} alt="First slide" />
              <img style={{ width: "30%" }} src={subodhSir} alt="First slide" />
            </div>
            <div className="d-flex flex-direction-row justify-content-around  text-center text-white">
              <div className="bg-dark mx-3 w-50">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
              <div className="bg-dark mx-3 w-50">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-100 d-flex justify-content-around my-2">
              <img style={{ width: "30%" }} src={subodhSir} alt="First slide" />
              <img style={{ width: "30%" }} src={subodhSir} alt="First slide" />
            </div>
            <div className="d-flex flex-direction-row justify-content-around  text-center text-white">
              <div className="bg-dark mx-3 w-50">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
              <div className="bg-dark mx-3 w-50">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-100 d-flex justify-content-around my-2">
              <img style={{ width: "30%" }} src={subodhSir} alt="First slide" />
              <img style={{ width: "30%" }} src={subodhSir} alt="First slide" />
            </div>
            <div className="d-flex flex-direction-row justify-content-around  text-center text-white">
              <div className="bg-dark mx-3 w-50">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
              <div className="bg-dark mx-3 w-50">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}