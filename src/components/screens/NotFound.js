import React, { useEffect } from "react";
import "../css/notFound.css";

function NotFound() {
  useEffect(() => {
    document.title = "404 NOT FOUND";
  }, []);
  return (
    <div>
      <section class="page_404">
        <div class="container h-100">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <a href="/landing" class="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
