import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { CircleLoader } from "react-spinners"

export default function ViewAdoptionRequests(){
    const [load, setLoad]=useState(true)

    const [requests,setRequests]=useState([])
       
    const fetchData=()=>{
       onSnapshot(collection(db,"adoptionRequest"),(usersData)=>{
       
         setRequests(
            usersData.docs.map((el)=>{
            // console.log(el.id,el.data());
            return{id:el.id,...el.data()}


            

            
        })
        
         )
       
                setLoad(false)

       })
        
    }


    useEffect(()=>{
        fetchData()
        // console.log(AllBreeds);
        
    },[])
  
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
                        Requests <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Requests</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container-fluid my-5">

              {load?
                        <CircleLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                        :
                        
                        <div className="row justify-content-center no-gutters mx-3">
                            <h3 className="mb-4">Adoption Requests</h3>  
                                    {requests.map((el, index) => (
                                        <div key={index} className="col-md-4 mb-4" style={{ marginBottom: '20px', textAlign:"center" }}>
                                        <div className="card-container mx-3" style={{
                                            boxShadow: '0px 0px 15px gray',
                                            padding: '20px',
                                            borderRadius: '10px',
                                        
                                        }}>
                                            <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                            Request {index + 1}
                                            </h5>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Name: </b>{el.name}</p>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Salary </b>{el.salary}</p>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Contact:</b> {el.contact}</p>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Address:</b> {el.address}</p>
                                            <img src={el.image} alt="Bank Statements" style={{
                                            maxWidth: '70px',
                                            height: '70px',
                                            borderRadius: '10px',
                                            marginBottom: '10px',
                                            }} className="img-fluid mb-2" />
                                            {/* <img src={el.bankStatements} alt="Bank Statements" style={{
                                            maxWidth: '70px',
                                            height: '70px',
                                            borderRadius: '10px',
                                            marginBottom: '10px',
                                            }} className="img-fluid mb-2" /> */}
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Reason To Adopt: </b>{el.reasonToAdopt}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                            
                        }   

                            {/* <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">S.No</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Contact</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">BankStatements</th>
                                                    <th scope="col">Images</th>
                                                    <th scope="col">ReasonToAdopt</th>
                                                    </tr>
                                                </thead>
                            {
                                requests.map((el,index)=>{
                                    return  <tbody>
                                                    <tr>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{el.name}</td>
                                                    <td>{el.email}</td>
                                                    <td>{el.contact}</td>
                                                    <td>{el.address}</td>
                                                    <td><img className="img-fluid" src={el.bankStatements} alt="" /></td>
                                                    <td><img className="img-fluid" src={el.image} alt="" /></td>
                                                    <td>{el.reasonToAdopt}</td>
                                                    
                                                    </tr>
                                                
                                                </tbody>
                                })
                            }
                                </table> */}
                                            

                 
                </div>
              </>
    )
}