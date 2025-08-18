import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db } from "../../Firebase";
import { doc , getDoc, setDoc, Timestamp } from "firebase/firestore";

export default function Register(){
    const[ name, setName]=useState("")
    const[ email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[contact,setContact]=useState("")

  

    const handleForm=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCred)=>{
          let userId=userCred.user.uid
          saveData(userId)
        })
        .catch((err)=>{
          toast.error(err.message)
        })
      }
    

      const saveData=async (userId)=>{
          try{
            let data={
              name:name, 
              email:email,
              contact:contact,
              userId:userId,
              userType:3, 
              status:true, 
              createdAt:Timestamp.now()
            }
            // console.log(data);
            //  setDoc(doc(db, collectionName, id), data)
            await setDoc(doc(db, "users",userId),data)
            toast.success("Register successfully!!")
            getUserData(userId)
            //  nav("/login");
          }
          catch(err){
            toast.error(err.message)
          }
        }
      

           const nav=useNavigate()
             const getUserData=async (userId)=>{
               // console.log(userId);
              let userDoc=await getDoc(doc(db,"users", userId))
             //  console.log(userDoc.data());
              let userData=userDoc.data()
              sessionStorage.setItem("name", userData?.name)
              sessionStorage.setItem("email", userData?.email)
              sessionStorage.setItem("userType", userData?.userType)
              sessionStorage.setItem("userId", userId)
              sessionStorage.setItem("isLogin", true)
              toast.success("Login successfully")
              if(userData?.userType==1){
               nav("/admin")
              }else{
               nav("/")
              }
            }
                                                    
      // let nav=useNavigate();

      // const handleForm=(e)=>{
      //   e.preventDefault();
      //  // console.log("Hello User!!",e);
      //   if(name=="Himanshu"   && email=="admin@gmail.com"   && password=="2025"  && contact=="6283232604"){
      //     toast.success("Register Successfully!!");
      //     nav("/login");
      //   }
      //   else{
      //     toast.error("Invalid credentials");
      //   }
      // };

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
                    <Link to={"/"}>
                      Home <i className="ion-ios-arrow-forward" />
                    </Link>
                  </span>{""}
                  <span>
                    Register as User <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-0 bread"> Register as User</h1>
              </div>
            </div>
          </div>
        </section>
       
    
            <div className="container my-5">
            
                    <div className="row no-gutters">
                      <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                          <h3 className="mb-4">Register as User</h3>
                          <form
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            className="contactForm"
                            onSubmit={handleForm}
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   Full Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Full Name"
                                    value={name}
                                     onChange={(e)=>{
                                    setName(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
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
                                    value={email}
                                    onChange={(e)=>{
                                    setEmail(e.target.value)
                                    }}                                 
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="subject">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{
                                    setPassword(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                    Contact
                                  </label>
                                  <input
                                    type="tel"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Contact"
                                    value={contact}
                                    // onChange={changeContact}
                                     onChange={(e)=>{
                                     setContact(e.target.value)
                                     }}
                                    minLength={10}
                                    maxLength={10}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    defaultValue="Submit"
                                    className="btn btn-primary"
                                  />
                                  <div className="submitting" />
                                </div>
                              </div>
                            </div>
                          </form>
                          {/* <div>Already have an account? <Link to={"/login"}>Login Here</Link></div> */}

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

        </>
    )
}