import { addDoc, collection, doc, getDoc, onSnapshot, query, Timestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { CircleLoader } from "react-spinners"
import { Link, useParams } from "react-router-dom"

export default function ViewPets(){
    const [load, setLoad]=useState(true)

    const [petListing,setPetListing]=useState([])
    const {breedId}=useParams()

    // const fetchData=()=>{
    //    onSnapshot(collection(db,"pets"),async(petsData)=>{
       
    //      setPetListing(
    //         petsData.docs.map((el)=>{
    //         // console.log(el.id,el.data());
    //         return{id:el.id,...el.data()}
             

            

            
    //     })
    //      )
       
    //       setLoad(false)

    //    })
        
    // }


    const fetchData=()=>{
        if(!breedId){
                    var q=query(collection(db,"pets")
                    // ,where("type","==","Dog")
                ) 
            }else{
                 var q=query(collection(db,"pets")
                    ,where("breedId","==",breedId)
                ) 
            }
                    onSnapshot(q,async (petDoc)=>{
                     
                        let petData=  petDoc.docs.map((el)=>{
                            // console.log(el.id,el.data());
                            return{id:el.id,...el.data()}
                        })
                        // console.log(petData);
                        let updatePetData=[]
                        for(let i=0;i<petData.length;i++){
                            let breedId=petData[i].breedId;
                            // console.log(breedId);
                            
                            let breedDoc= await getDoc(doc(db,"breeds", breedId))
                            // console.log(breedDoc.data());
                            updatePetData.push({...petData[i], breed:breedDoc.data()})
                        }
                        // console.log(updatePetData);
                        setPetListing(updatePetData)
                        setLoad(false)
                    })
                }
            
    
    
        useEffect(()=>{
            fetchData()
            // console.log(AllBreeds);
            
        },[breedId])
      

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
                        pets <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Pets</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">

                {/* {load?
                        <CircleLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                        : */}

                    <div className="row justify-content-center no-gutters ">
                            <h3 className="mb-4">Pets</h3>  
                                    {petListing.map((el, index) => (
                                        <div key={index} className="col-md-4 mb-4" style={{ marginBottom: '20px', textAlign:"center"}}>
                                        <div className="card-container mx-4" style={{
                                            boxShadow: '0px 0px 15px gray',
                                            padding: '20px',
                                            borderRadius: '10px',
                                        }}>
                                            <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                            Pets {index + 1}
                                            </h5>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Pet Name: </b>{el.petName}</p>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Breed: </b>{el?.breed?.breedName}</p>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Discription:</b> {el.description}</p>
                                            <p className="card-text" style={{ marginBottom: '10px' }}><b>Age:</b> {el.age}</p>
                                            {/* <p className="card-text" style={{ marginBottom: '10px' }}><b>Address:</b> {el.address}</p> */}
                                            <img src={el.image} alt="image" style={{
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
                                            {/* <p className="card-text" style={{ marginBottom: '10px' }}><b>Reason To Adopt: </b>{el.reasonToAdopt}</p> */}
                                            <Link to={"/viewpets/details/"+el.id} className="btn btn-outline-primary d-block mx-auto">View</Link>
                                </div>
                                </div>
                            ))}
                        </div>
                {/* } */}
            </div>

        </>
    )
}