import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

export default function MainLayout() {
    return (
        <>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="lg:mt-20">
                <Outlet></Outlet>
            </div>

        </>
    )
}
