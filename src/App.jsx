import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./component/page/About"
import Blog  from"./component/page/Blog"
import Contact from"./component/page/Contact"
import Home from"./component/page/Home"
import Error from "./component/page/Error"
import Layout from "./component/layouts/Layout"
import Login from "./component/auth/Login"
import Register from "./component/auth/Register"
import RegisterNGO from "./component/auth/RegisterNGO"
import Services from "./component/page/Services"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./component/layouts/AdminLayout"
import AddBreed from "./component/admin/breeds/AddBreed"
import NGOLayout from "./component/layouts/NGOLayout"
import PetsListing from "./component/ngo/pets/PetsListing"
import AddNgo from "./component/admin/ngo/AddNGO"
import AdoptionRequest from "./component/page/AdoptionRequest"
import ManageBreed from "./component/admin/breeds/ManageBreed"
import ManageNGO from "./component/admin/ngo/ManageNGO"
import ManageUsers from "./component/admin/users/ManageUsers"
import ViewAdoptionRequest from "./component/admin/adoptionRequest/ViewAdoptionRequest"
import ManagePetListing from "./component/admin/petListing/ManagePetListing"
import ManagePetsListing from "./component/ngo/pets/ManagePetsListing"
import ViewAdoptionRequests from "./component/ngo/adoptionRequests/ViewAdoptionRequests"
import ViewBreeds from "./component/page/ViewBreed"
import ViewNGO from "./component/page/ViewNGO"
import ViewPets from "./component/page/ViewPets"
import ManageAdoptionRequest from "./component/ngo/adoptionRequests/ManageAdoptionRequest"
import UpdateBreed from "./component/admin/breeds/UpdateBreed"
import UpdateNgo from "./component/admin/ngo/UpdateNGO"
import UpdatePetsListing from "./component/admin/petListing/UpdatePetListing"
import UpdateUser from "./component/admin/Users/UpdateUsers"
import UpdatePetsListings from "./component/ngo/pets/UpdatePetListings"
import UpdateAdoptionRequest from "./component/ngo/adoptionRequests/UpdateAdoptionRequest"
import Dashboard from "./component/admin/pages/Dashboard"
import DashboardNgo from "./component/ngo/pages/Dashboard"
import PetDetail from "./component/page/PetDetails"
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
