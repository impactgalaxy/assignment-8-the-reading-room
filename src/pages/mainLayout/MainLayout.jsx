import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../../components/navBar/NavBar";

export default function MainLayout() {
    return (
        <>
            <div>
                <StickyNavbar></StickyNavbar>
            </div>
            <div className="lg:mt-20">
                <Outlet></Outlet>
            </div>

        </>
    )
}
