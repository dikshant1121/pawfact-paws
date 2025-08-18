import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword ,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { FacebookAuthProvider } from "firebase/auth";
import { doc,getDoc, setDoc, Timestamp } from "firebase/firestore";





export default function Login(){
     const [email, setEmail]=useState("")
       const [password, setPassword]=useState("")
       const changeEmail=(event)=>{
         // console.log("hello", event);
         // console.log(event.target.value);
         
         setEmail(event.target.value)
       }
     
       // const changePassword=(e)=>{
       //   setPassword(e.target.value)
         
       // }
       //admin@gmail.com && 2025
       let nav=useNavigate() //hook which redirect from one page to other
       const handleForm=(e)=>{
         e.preventDefault() //stops form from reloading
         signInWithEmailAndPassword(auth, email, password)
         .then((userCred)=>{
          let userId=userCred.user.uid

          getUserData(userId)

          //  console.log("sign in", userCred.user.uid);
          //  toast.success("Login successfully!!")
          //  nav("/")
         })
         .catch((error)=>{
           toast.error(error.message);
         })
       }

       
         const getUserData=async (userId)=>{
           //console.log(userId);
          let userDoc=await getDoc(doc(db,"users", userId))
           //console.log(userDoc.data());
          let userData=userDoc.data()
          
   if(userData?.status){

          sessionStorage.setItem("name", userData?.name)
          sessionStorage.setItem("email", userData?.email)
          sessionStorage.setItem("userType", userData?.userType)
          sessionStorage.setItem("userId", userId)
          sessionStorage.setItem("isLogin", true)
          toast.success("Login successfully")
          if(userData?.userType==1){
           nav("/admin")
          }
           else if(userData?.userType==2){
            nav("/NGO")
           }
          else{
           nav("/")
          }
        }
        else{
            toast.error("Your account has been blocked!!")
          }
         }
     
       const signInGoogle=()=>{
         let provider=new GoogleAuthProvider()
         signInWithPopup(auth, provider)
         .then((userCred)=>{
          let userId=userCred.user.uid;
            saveData(userId, userCred)

          // getUserData(userId)
            //  console.log(userCred.user.uid);
            //  toast.success("Login successfully")
            //  nav("/")
         })
         .catch((err)=>{
           toast.error(err.message)
         })
       }

        const saveData=async (userId, userCred)=>{
           try{
             let data={
               name:userCred.user.displayName, 
               email:userCred.user.email,
               contact:userCred.user.phoneNumber,
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
           }
           catch(err){
             toast.error(err.message)
           }
         }
         
       
      //  const SignInFacebook=()=>{
       
      //    const provider = new FacebookAuthProvider();
      //    signInWithPopup(auth, provider)
      //    .then((userCred)=>{
      //        console.log(userCred.user.uid);
      //        toast.success("Login successfully")
      //        nav("/")
      //    })
      //    .catch((err)=>{
      //      toast.error(err.message)
      //    })
      //  }




       


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
                    Login <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-0 bread"> Login</h1>
              </div>
            </div>
          </div>
        </section>
            <div className="container my-5">
                    <div className="row no-gutters">
                      <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                          <h3 className="mb-4">Login</h3>
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
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={changeEmail}
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
                          <button type="button" onClick={signInGoogle} className="btn btn-danger " ><i className="bi bi-google"></i> Sign In with google</button>

                          {/* <button type="button" onClick={SignInFacebook} className="btn btn-info text-light mx-2"><i className="bi bi-facebook"></i>Sign In with facebook</button> */}
                          

                          {/* <div>Don't have an account? <Link to={"/register"}>Register Here as User</Link></div>
                          <div>Don't have an account? <Link to={"/registerNGO"}>Register Here as NGO</Link></div> */}
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