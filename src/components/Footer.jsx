import Logo from "../assets/img/logo-150x150.png"

const socials = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/alberidivita",
        icon: <i className="fa-brands fa-instagram"></i>
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/alberidivita",
        icon: <i className="fa-brands fa-facebook"></i>
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCPg16_-rDuVVGMZCgpvXUzA",
        icon: <i className="fa-brands fa-youtube"></i>
    },
];

const contacts = [
    {
        name: "Segreteria Sociale",
        contact: "+39 392 9169439"
    },
    {
        name: "Segreteria/Prenotazioni",
        contact: "+39 350 0097205"
    },
    {
        name: "Email info associazione:",
        contact: "info@alberidivita.it"
    },
    {
        name: "Email contabilità:",
        contact: "contabilita@alberidivita.it"
    },
    {
        name: "Email presidente:",
        contact: "presidente@alberidivita.it"
    },
    {
        name: "Email Coordinamento:",
        contact: "coordinamento@alberidivita.it"
    },
    {
        name: "Email Educatrice:",
        contact: "educativa@alberidivita.it"
    },
];

const locations = [
    {
        type: "Sede Legale",
        name: "c/o R.S.A. Luzzago",
        address: "Via della Lama, 67",
        cap: "25133 Brescia"
    },
    {
        type: "Sede Operativa",
        name: "Centro Aperto Sandro Marelli",
        address: "Piazzetta Santi Francesco e Chiara, 1",
        cap: "25133 Brescia"
    }
];

export default function Footer() {
    return (
        <footer className="bg-(--third-green) text-white">
            <div className="w-11/12 mx-auto flex justify-between gap-3 p-3">
                <div className="w-1/3 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <figure className="w-15">
                            <img src={Logo} alt="Logo Alberi di Vita OdV" className="w-full" />
                        </figure>

                        <h1 className="uppercase font-bold text-xl">Alberi di Vita OdV</h1>
                    </div>

                    <div className="flex flex-col gap-3">
                        {
                            socials.map((s, id) => {
                                return (
                                    <div key={id} className="flex gap-3">
                                        <span>{s.icon}</span>
                                        <a href={s.link} target="_blank">{s.name}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="w-1/3 flex flex-col gap-3">
                    {
                        contacts.map((c, id) => {
                            return (
                                <div key={id} className="flex flex-col gap-1">
                                    <h3 className="font-bold">{c.name}</h3>
                                    <span>{c.contact}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="w-1/3 flex flex-col gap-3">
                    {
                        locations.map((l, id) => {
                            return (
                                <div key={id} className="flex flex-col gap-1">
                                    <h3 className="font-bold">{l.type}</h3>
                                    <span>{l.name}</span>
                                    <span>{l.address} - {l.cap}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    )
}