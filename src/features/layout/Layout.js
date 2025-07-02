import { Outlet } from "react-router";
import "./Layout.css"
import Navbar from "../../components/navbars/searchNavBar/Navbar";
import Footer from "../../components/footers/footer/Footer";


const Layout = () => {
    return(
        <section className="app-container">
          <Navbar/>
          <section className="page-content">
            <Outlet />
          </section>
          <Footer/>
        </section>
    )
  
}

export default Layout;