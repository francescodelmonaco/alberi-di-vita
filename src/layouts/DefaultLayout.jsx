import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
    return (
        <>
            <Navbar />

            <main className="bg-(--white)">
                <Outlet />
            </main>

            <footer>Default Footer</footer>
        </>
    )
}