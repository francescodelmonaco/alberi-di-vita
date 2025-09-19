import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <>
            <Navbar />

            <main className="bg-(--white)">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}