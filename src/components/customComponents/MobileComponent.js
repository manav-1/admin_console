import subodhSir from "../../assets/subodhSir.jpg";
export default function MobileComponent() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide  faculty"
        data-ride="carousel"
        style={{ width: "80%", margin: "auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={subodhSir} alt="First slide" />
            <div className="text-center bg-dark text-white">
              <h5>Convener</h5>
              <p>Mr Subodh Pandit</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={subodhSir} alt="Second slide" />

            <div className="text-center bg-dark text-white ">
              <h5>Convener</h5>
              <p>Mr Subodh Pandit</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={subodhSir} alt="Third slide" />

            <div className="text-center bg-dark text-white ">
              <h5>Convener</h5>
              <p>Mr Subodh Pandit</p>
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
