import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home";


const AppRoutes = () => {
  return (
   <Routes>
     < Route path="/" element={<Layout><Home/></Layout>} />
     < Route path="/user-profile" element={<span> User profile</span>} />
     < Route path="*" element={<Navigate to='/' />} />
   </Routes>
  )
}

export default AppRoutes
