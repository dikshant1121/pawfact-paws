export default function Footer(){
    return(
        <>
         <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">PAWFACT PAWS</h2>
          <p>
            Where the joy of Furry companionship and the comforts of Home come Together in Perfect Bliss
          </p>
          <ul className="ftco-footer-social p-0">
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
              >
                <span className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Latest News</h2>
          <div className="block-21 mb-4 d-flex">
            <a
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(/assets/images/image_1.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <a href="#">
                 Best dog in our ngo we have we
                </a>
              </h3>
              <div className="meta">
                <div>
                  <a href="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-person" /> Admin
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-chat" /> 19
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <a
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(/assets/images/image_2.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <a href="#">
                  Even the all-powerful Pointing has no control about
                </a>
              </h3>
              <div className="meta">
                <div>
                  <a href="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-person" /> Admin
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-chat" /> 19
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <a href="http://localhost:5173/" className="py-2 d-block">
                Home
              </a>
            </li>
            <li>
              <a href="http://localhost:5173/about" className="py-2 d-block">
                About
              </a>
            </li>
            <li>
              <a href="http://localhost:5173/viewBreed" className="py-2 d-block">
                Breeds
              </a>
            </li>
            <li>
              <a href="http://localhost:5173/viewNGO" className="py-2 d-block">
                NGO
              </a>
            </li>
            <li>
              <a href="http://localhost:5173/viewPets" className="py-2 d-block">
                Pets
              </a>
            </li>
            <li>
              <a href="http://localhost:5173/contact" className="py-2 d-block">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Have a Questions?</h2>
          <div className="block-23 mb-3">
            <ul>
              <li><a href="https://maps.app.goo.gl/SLdS6RhUCN1vYe5U9">
                <span className="icon fa fa-map" />
                <span className="text">
                  DAVIET, Jalandhar, Punjab 144008
                </span>
                </a>
              </li>
              <li>
                <a href="tel:+91 6283942885">
                  <span className="icon fa fa-phone" />
                  <span className="text">+91 6283942885</span>
                </a>
              </li>
              <li>
                <a href="mailto:pawfactpaws01@gmail.com">
                  <span className="icon fa fa-paper-plane" />
                  <span className="text">pawfactpaws01@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="copyright">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This project is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            <a href="mailto:dikshantarora91@gmail.com" target="_blank">
              Dikshant Arora
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>

        </>
    )
}