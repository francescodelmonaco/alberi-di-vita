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
        name: "Segreteria Sociale:",
        contact: "+39 392 9169439"
    },
    {
        name: "Segreteria/Prenotazioni:",
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

const year = new Date().getFullYear();


export default function Footer() {
    return (
        <footer className="bg-[var(--third-green)] text-[var(--white)] border-t border-[var(--secondary-green)]">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-8 py-8">
                <div className="md:w-1/3 flex flex-col gap-6 items-center md:items-start">
                    <div className="flex items-center gap-4">
                        <figure className="w-12 h-12 rounded-full overflow-hidden border border-[color:var(--primary-green)] bg-white flex items-center justify-center">
                            <img src={Logo} alt="Logo Alberi di Vita OdV" className="w-10 h-10 object-contain" />
                        </figure>
                        <h1 className="uppercase font-bold text-2xl tracking-wide text-[var(--primary-green)]">Alberi di Vita OdV</h1>
                    </div>
                    <div className="flex gap-4 mt-2">
                        {socials.map((s, id) => (
                            <a
                                key={id}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--primary-green)] hover:text-[var(--secondary-green)] transition-colors text-3xl"
                                aria-label={s.name}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-0">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-[var(--secondary-green)] text-xl mb-2">Contatti</h2>
                        {contacts.map((c, id) => (
                            <div key={id} className="flex flex-col gap-1">
                                <span className="text-lg text-[var(--white)] font-medium">{c.name}</span>
                                <span className="text-base text-[var(--white)]">{c.contact}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-[var(--secondary-green)] text-xl mb-2">Sedi</h2>
                        {locations.map((l, id) => (
                            <div key={id} className="flex flex-col gap-1">
                                <span className="text-lg text-[var(--white)] font-medium">{l.type}</span>
                                <span className="text-base text-[var(--white)]">{l.name}</span>
                                <span className="text-base text-[var(--white)]">{l.address} - {l.cap}</span>
                            </div>
                        ))}

                        <div className="mt-4">
                            <iframe
                                title="Mappa Sedi Alberi di Vita"
                                src="https://www.google.com/maps/d/embed?mid=1XR0grVB-icnP9tG7Mm-4mVJdWZ37URA&ehbc=2E312F&noprof=1"
                                className="w-full h-[300px] border-none rounded-xl"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto text-center flex flex-col gap-1 border-t-2 border-[var(--secondary-green)] p-5">
                <p className="text-base text-white">Copyright © {year} | Tutti i diritti riservati.</p>
                <p className="text-base text-white">Codice Fiscale: 98192330177 | Registro Unico Nazionale del Terzo Settore – numero di Repertorio: 85899</p>
            </div>
        </footer>
    );
}