import { addDoc, collection, deleteDoc, doc, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import Swal from "sweetalert2"
import { CircleLoader, PacmanLoader } from "react-spinners"
import { Link } from "react-router-dom"

export default function ManageAdoptionRequest(){
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

    const DeleteRequests= async(adoptionRequestId)=>{
        Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!"
                                }).then(async (result) => {
                                if (result.isConfirmed) {
                                    await deleteDoc(doc(db,"adoptionRequest",adoptionRequestId))
                                    .then(()=>{
                                        Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                        });
                        
                                    }).catch((error)=>{
                                        toast.error(error.message)
                                    })
                                   
                                }
                                });
                
            // console.log(adoptionRequestId);
            // await deleteDoc(doc(db,"breeds",adoptionRequestId)).then(()=>{
            // toast.success("Item is deleted")
    
            // }).catch((error)=>{
            //     toast.error(error.message)
            // })
            
        }
      
  
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
            <CircleLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :

            <div className="row justify-content-center no-gutters">

                <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className=" table-responsive-md contact-wrap w-30 p-md-5 p-4">
                  <h3 className="mb-4"> Manage Adoption Requests</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Address</th>
                                        {/* <th scope="col">bankStatements</th> */}
                                        <th scope="col">Address Proof</th>
                                        <th scope="col">ReasonToAdopt</th>
                                        <th scope="col">Actions</th>

                                        </tr>
                                    </thead>
                  {
                    requests.map((el,index)=>{
                        return  <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.name}</td>
                                        <td>{el.contact}</td>
                                        <td>{el.address}</td>
                                        {/* <td><img className="img-fluid" src={el.bankStatements} alt="" /></td> */}
                                        <td><img className="img-fluid" src={el.image} alt="" style={{height:"50px", width:"50px"}}/></td>
                                        <td>{el.reasonToAdopt}</td>
                                        <td>
                                         <Link to={"/ngo/adoptionRequest/"+el.id} className="btn btn-outline-success mx-2">Accept</Link>

                                            <button className="btn btn-danger" onClick={()=>{
                                            DeleteRequests(el.id)
                                         }}>Delete </button></td>

                                         
                                        </tr>
                                       
                                    </tbody>
                    })
                  }
                    </table>

                 
                </div>
              </div>
             
               </div>
            }
            </div>

        </>
    )
}