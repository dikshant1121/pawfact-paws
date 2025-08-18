import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./component/Page/About"
import Blog  from"./component/Page/Blog"
import Contact from"./component/Page/Contact"
import Home from"./component/Page/Home"
import Error from "./component/Page/Error"
import Layout from "./component/Layouts/Layout"
import Login from "./component/Auth/Login"
import Register from "./component/Auth/Register"
import RegisterNGO from "./component/Auth/RegisterNGO"
import Services from "./component/Page/Services"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./component/Layouts/AdminLayout"
import AddBreed from "./component/Admin/Breeds/AddBreed"
import NGOLayout from "./component/Layouts/NGOLayout"
import PetsListing from "./component/NGO/Pets/PetsListing"
import AddNgo from "./component/Admin/Ngo/AddNGO"
import AdoptionRequest from "./component/Page/AdoptionRequest"
import ManageBreed from "./component/Admin/Breeds/ManageBreed"
import ManageNGO from "./component/Admin/Ngo/ManageNGO"
import ManageUsers from "./component/Admin/Users/ManageUsers"
import ViewAdoptionRequest from "./component/Admin/AdoptionRequest/ViewAdoptionRequest"
import ManagePetListing from "./component/Admin/PetListing/ManagePetListing"
import ManagePetsListing from "./component/NGO/Pets/ManagePetsListing"
import ViewAdoptionRequests from "./component/NGO/AdoptionRequests/ViewAdoptionRequests"
import ViewBreeds from "./component/Page/ViewBreed"
import ViewNGO from "./component/Page/ViewNGO"
import ViewPets from "./component/Page/ViewPets"
import ManageAdoptionRequest from "./component/NGO/AdoptionRequests/ManageAdoptionRequest"
import UpdateBreed from "./component/Admin/Breeds/UpdateBreed"
import UpdateNgo from "./component/Admin/Ngo/UpdateNGO"
import UpdatePetsListing from "./component/Admin/PetListing/UpdatePetListing"
import UpdateUser from "./component/Admin/Users/UpdateUsers"
import UpdatePetsListings from "./component/NGO/Pets/UpdatePetListings"
import UpdateAdoptionRequest from "./component/NGO/AdoptionRequests/UpdateAdoptionRequest"
import Dashboard from "./component/Admin/Pages/Dashboard"
import DashboardNgo from "./component/NGO/Pages/Dashboard"
import PetDetail from "./component/Page/PetDetails"
function App() {
  return (
    //
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="adoption" element={<AdoptionRequest/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="registerNGO" element={<RegisterNGO/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="viewBreed" element={<ViewBreeds/>}/>
            <Route path="viewNGO" element={<ViewNGO/>}/>
            <Route path="viewPets" element={<ViewPets/>}/>
            <Route path="viewPets/:breedId" element={<ViewPets/>}/>
            <Route path="viewpets/details/:id" element={<PetDetail/>}/>

          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="breed/add" element={<AddBreed/>}/>
            <Route path="ngo/add" element={<AddNgo/>}/>
            <Route path="breed/manage" element={<ManageBreed />}/>
            <Route path="breed/edit/:id" element={<UpdateBreed />}/>
            <Route path="ngo/manage" element={<ManageNGO />}/>
            <Route path="ngo/edit/:id" element={<UpdateNgo />}/>
            <Route path="users/manage" element={<ManageUsers />}/>
            <Route path="user/edit/:id" element={<UpdateUser />}/>
            <Route path="adoptionRequest/view" element={<ViewAdoptionRequest />}/>
            <Route path="petListing/manage" element={<ManagePetListing />}/>
            <Route path="petListing/edit/:id" element={<UpdatePetsListing />}/>


             
          </Route>

          {/* NGO routes */}
           <Route path="/NGO" element={<NGOLayout/>}>
            <Route index element={<DashboardNgo/>}/>
            <Route path="pet/add" element={<PetsListing/>}/>
            <Route path="pets/manage" element={<ManagePetsListing/>}/>
            <Route path="petListings/edit/:id" element={<UpdatePetsListings />}/>
            <Route path="adoptionRequests/view" element={<ViewAdoptionRequests/>}/>
            <Route path="adoptionRequest/Manage" element={<ManageAdoptionRequest/>}/>
            <Route path="adoptionRequest/Accept/:id" element={<UpdateAdoptionRequest/>}/>

            {/* <Route path="registerNGO" element={<RegisterNGO/>}/> */}
          </Route>

          

          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
