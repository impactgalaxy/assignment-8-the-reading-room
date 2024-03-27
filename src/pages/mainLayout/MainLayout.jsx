import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

export default function MainLayout() {
    return (
        <>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="lg:mt-16">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    )
}
