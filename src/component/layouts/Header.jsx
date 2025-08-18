import { Link , useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
export default function Header(){

   let isLogin=sessionStorage.getItem("isLogin")
      // let name=sessionStorage.getItem("name")
      const nav=useNavigate()
      ///sweetalert2
      const logout=()=>{
  
          Swal.fire({
          title: "Are you sure you want to logout?",
          // text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Logout!"
          }).then((result) => {
          if (result.isConfirmed) {
              sessionStorage.clear()
              nav("/login")
              Swal.fire({
              title: "Logout!",
              text: "Logout successfully.",
              icon: "success"
              });
          }
          });
      }


    return(
        <>
            <div className="wrap">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <p className="mb-0 phone pl-md-2">
            <a href="tel: +91 6283942885" className="mr-2">
              <span className="fa fa-phone mr-1" /> +91 6283942885
            </a>
            <a href="mailto:pawfactpaws01@gmail.com">
              <span className="fa fa-paper-plane mr-1" /> pawfactpaws01@gmail.com
            </a>
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook">
                  <i className="sr-only">Facebook</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter">
                  <i className="sr-only">Twitter</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram">
                  <i className="sr-only">Instagram</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-dribbble">
                  <i className="sr-only">Dribbble</i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-light ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <span className="flaticon-pawprint-1 mr-2" />
        PAWFACT PAWS
      </a>
      <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#ftco-nav"
         aria-controls="ftco-nav"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
                      <Link to="/" className="nav-link">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/about"} className="nav-link">
                        ABOUT
                      </Link>
                    </li>

                   
                    {/* <li className="nav-item">
                      <Link to={"/services"} className="nav-link">
                        Services
                      </Link>
                    </li> */}

                 
                    
                   
                    <li className="nav-item">
                      <Link to={"/viewBreed"} className="nav-link">
                        BREEDS
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/viewNGO"} className="nav-link">
                        NGO
                      </Link>
                    </li>

                     

                    <li className="nav-item">
                      <Link to={"/viewPets"} className="nav-link">
                        PETS
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link to={"/contact"} className="nav-link">
                        Contact
                      </Link>
                    </li> 

                    
                    {
                      isLogin?
                      <>
                    <li className="nav-item">
                      <Link to={"/adoption"} className="nav-link">
                        ADOPTION REQUESTS
                      </Link>
                    </li>

                      <li className="nav-item">
                        <Link to={"#"} onClick={logout} className="nav-link">
                          LOGOUT {name}
                        </Link>
                      </li>
                      </>
                      :
                      <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                          LOGIN
                        </Link>
                      </li>
                    }
                                  

                  <li className="nav-item dropdown">
                   <nav style={{ width:"100%"}}>
                    <div
                        style={{
                          display:"flex",
                          justifyContent:"center",
                          alignItems:"center",
                          height:"17px ",
                          width: "100%",
                          marginTop:"10px"
                        }}
                    />
                      <button
                        className="nav-link dropdown-toggle btn btn-primary text-dark" 
                          
                        id="navbarDropdown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                    
                      >
                        REGISTER
                      </button>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/register" className="dropdown-item"> AS USER</Link>
                        <Link to="/registerNGO" className="dropdown-item"> AS NGO</Link>
                     </div>
                     </nav>
                    </li>

                      


     </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  </>
    )
}