import { NavLink } from "react-router-dom"
import Logo from "../assets/img/logo-150x150.png"

const pages = [
    "Chi siamo",
    "Progetti",
    "Eventi",
    "Contatti",
    "Dona"
]

export default function Navbar() {
    return (
        <header>
            <div className="flex justify-between items-center p-3 w-11/12 mx-auto">
                <div className="flex items-center gap-3">
                    <figure className="w-25">
                        <img src={Logo} alt="Logo Alberi di Vita OdV" className="w-full" />
                    </figure>

                    <h1 className="uppercase font-bold text-4xl text-(--primary-green)">Alberi di Vita OdV</h1>
                </div>

                <div className="flex justify-between gap-3">
                    {
                        pages.map((p, id) => {
                            return (
                                <NavLink key={id}>
                                    {p}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}