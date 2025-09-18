import Logo from "../assets/img/logo-150x150.png"

export default function Navbar() {
    return (
        <header>
            <div className="flex items-center gap-3 p-3 w-11/12 mx-auto">
                <figure className="w-30">
                    <img src={Logo} alt="Logo Alberi di Vita OdV" className="w-full" />
                </figure>

                <h1 className="uppercase font-bold text-4xl text-(--primary-green)">Alberi di Vita OdV</h1>
            </div>
        </header>
    )
}