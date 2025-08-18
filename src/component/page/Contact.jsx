function Contact(){
    return(
        <>
  
  <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-end">
                <div className="col-md-9 ftco-animate pb-5">
                  <p className="breadcrumbs mb-2">
                    <span className="mr-2">
                      <a href="index.html">
                        Home <i className="ion-ios-arrow-forward" />
                      </a>
                    </span>{" "}
                    <span>
                      Contact <i className="ion-ios-arrow-forward" />
                    </span>
                  </p>
                  <h1 className="mb-0 bread">Contact</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                 <h2 className="heading-section">Contact US</h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="wrapper">
                    <div className="row mb-5">
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-map-marker" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Address:</span>{" "}
                              <br/>
                              <a href="https://maps.app.goo.gl/dZzDh4cYGBdta5Et5"> DAVIET,Jalandhar,Punjab</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Phone:</span>{" "}<br/>
                              <a href="tel://6283942885">+91 6283942885</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Email:</span>{" "}
                              <a href="mailto:pawfactpaws01@gmail.com.com">
                                <br/>pawfactpaws01@gmail.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-globe" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Website</span><br/> <a href="http://localhost:5173/">Pawfact Paws</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                           
                  <h3 className="heading-section">Contact Form #21</h3>
                          <form
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            className="contactForm"
                          >
                            
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="name">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="subject">
                                    Subject
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="number">
                                    Phone number
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="number"
                                    id="number"
                                    placeholder="Phone number"
                                  />
                                </div>
                                </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="#">
                                    Message
                                  </label>
                                  <textarea
                                    name="message"
                                    className="form-control"
                                    id="message"
                                    cols={30}
                                    rows={4}
                                    placeholder="Message"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    defaultValue="Send Message"
                                    className="btn btn-primary"
                                  />
                                  <div className="submitting" />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-5 d-flex align-items-stretch">
                        <div
                          className="info-wrap w-100 p-5 img"
                          style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div id="map" className="map" />
          

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d109073.19168297839!2d75.52414337071711!3d31.31653296745574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spet%20shelters%20near%20me!5e0!3m2!1sen!2sin!4v1753671321111!5m2!1sen!2sin"
  width={1520}
  height={800}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

</section>
  </>

    )
}
export default Contact;