import { Outlet } from "react-router-dom";
import Footer from "./Footer";


export default function SharedLayout() {
  return (
    <>
       
        <Outlet/>
        <Footer/>
    </>
  )
}