import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../../components/navBar/NavBar";

export default function MainLayout() {
    return (
        <>
            <StickyNavbar></StickyNavbar>
            <div>
                <Outlet></Outlet>
            </div>

        </>
    )
}
