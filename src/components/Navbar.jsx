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
        <header className="bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="flex justify-between items-center py-2 px-4 w-11/12 mx-auto">
                <div className="flex items-center gap-3">
                    <figure className="w-12 h-12 rounded-full overflow-hidden border border-[color:var(--primary-green)] bg-white flex items-center justify-center">
                        <img src={Logo} alt="Logo Alberi di Vita OdV" className="w-10 h-10 object-contain" />
                    </figure>

                    <h1 className="uppercase font-bold text-2xl tracking-wide" style={{ color: "var(--primary-green)" }}>
                        Alberi di Vita OdV
                    </h1>
                </div>

                <nav className="flex gap-2">
                    {
                        pages.map((p, id) => (
                            <NavLink
                                key={id}
                                className={({ isActive }) =>
                                    `px-3 py-1 rounded transition-colors font-medium text-sm tracking-wide ` +
                                    (isActive
                                        ? 'bg-[color:var(--secondary-green)] text-[color:var(--primary-green)] shadow'
                                        : 'text-[color:var(--primary-green)] hover:bg-[color:var(--secondary-green)] hover:text-white')
                                }
                                to={"/" + p.toLowerCase().replace(/\s+/g, "-")}
                            >
                                {p}
                            </NavLink>
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}