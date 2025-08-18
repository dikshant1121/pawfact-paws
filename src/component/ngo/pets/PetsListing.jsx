import { addDoc, collection, onSnapshot, query, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { CircleLoader } from "react-spinners"

export default function PetsListing(){
    const [petName, setPetName]=useState("")
    const [description, setDescription]=useState("")
    const [age, setAge]=useState("")
    const [breedId, setBreedId]=useState("")
    const [load, setLoad]=useState(false)
    const [allBreeds,setAllBreeds]=useState([])
            
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")

    const fetchData=()=>{
                const q=query(collection(db,"breeds")
                // ,where("type","==","Dog")
            ) 
                onSnapshot(q,(breedData)=>{
                    setAllBreeds(
                        breedData.docs.map((el)=>{
                        // console.log(el.id,el.data());
                        return{id:el.id,...el.data()}
                    }))
                })
            }
            
             useEffect(()=>{
              fetchData()
             },[])
                
    const handleForm=async (e)=>{
        e.preventDefault()
        setLoad(true)

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "images"); // Replace with your upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dvrhn4lpn/image/upload`, // Replace with your Cloudinary cloud name
                formData
            );
            saveData(response.data.secure_url)
        } catch (error) {
            toast.error("Error uploading image:", error.message);
            setLoad(false)
        }
    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }

    const saveData=async (imageUrl)=>{
         try{
            //insertion 
            let data={
                petName,
                description,
                image:imageUrl,
                age, 
                breedId,
                status:true,
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "pets"), data)
            toast.success("Pet added successfully!")
            setPetName("")
            setDescription("")
            setAge("")
            setBreedId("")
            setImage({})
            setImageName("")
            // setUrl("")
        }
        catch(err){
            toast.error(err.message)
        }
        finally{
          setLoad(false)
        }
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
                        Pets <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread"> Pets</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">

              {
                load?
                  <CircleLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                         
            :
                          
            <div className="row justify-content-center no-gutters">
              <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Pets Listing</h3>
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
                            Pet Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="petName"
                            placeholder="Pet Name"
                            value={petName}
                            onChange={(e)=>{
                                setPetName(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e)=>{
                                setDescription(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="image"
                            placeholder="Image"
                            value={imageName}
                            onChange={changeImage}
                          />
                        </div>
                      </div>
                       <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Age
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="age"
                            placeholder="Age"
                            value={age}
                            onChange={(e)=>{
                                setAge(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                    <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Breed
                          </label>
                          <select
                              type="text"
                              className="form-control"
                              name="description"
                              id="breedName"
                              placeholder="Breed Name"
                              value={breedId}
                              onChange={(e)=>{setBreedId(e.target.value)}}
                            >

                                <option value={""} disabled selected>Choose one</option>
                                {
                                    allBreeds?.map((el,index)=>{
                                        return(
                                            <option key={index} value={el?.id}>{el?.breedName}</option>
                                        )
                                    })
                                }
                            </select>
 
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
                </div>
              </div>
             
            </div>
}
            </div>
        </>
    )
}



