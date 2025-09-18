import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <header>Default Header</header>

            <main><Outlet /></main>

            <footer>Default Footer</footer>
        </>
    )
}