import LandingImg from "../assets/img/landing-img.jpg"

const friends = [
    {
        name: "Fondazione Casa di Dio",
        link: "http://casadidio.eu/",
        image: ""
    },
    {
        name: "Parrocchia di San Gaudenzio",
        link: "http://www.parrocchiasangaudenzio.org/",
        image: ""
    },
    {
        name: "Fondazione ASM – Gruppo A2A",
        link: "http://www.fondasm.it/",
        image: ""
    },
    {
        name: "CSV Brescia",
        link: "https://www.csvlombardia.it/brescia/",
        image: ""
    },
    {
        name: "Parrocchia SS. Francesco e Chiara",
        link: "https://www.diocesi.brescia.it/wd-annuario-enti/29-zona-urbana-brescia-nord-2076/santi-francesco-e-chiara-parrocchia-dei-santi-francesco-e-chiara-62/",
        image: ""
    },
    {
        name: "Fondazione Comunità Bresciana – Fondo Bruno Marisa Marniga",
        link: "http://www.fondazionebresciana.org/",
        image: ""
    },
    {
        name: "Gruppo Bossoni",
        link: "https://www.gruppobossoni.it/",
        image: ""
    },
    {
        name: "Rotary Club Valtrompia",
        link: "https://www.rotaryclub.it/",
        image: ""
    },
    {
        name: "Club Don Abele Rodella Stocchetta",
        link: "",
        image: ""
    },
    {
        name: "Lasercom",
        link: "https://lasercom.it/",
        image: ""
    },
    {
        name: "Fondo per il sostegno all’infanzia Vincenzo e Itala Visenzi",
        link: "",
        image: ""
    },
    {
        name: "Pro Loco Mompiano",
        link: "https://prolocomompiano.weebly.com/",
        image: ""
    }
]

export default function Home() {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <figure className="w-full h-175">
                    <img src={LandingImg} alt="Foto di gruppo con anziani e volontari" className="h-full w-full object-cover" />
                </figure>
            </div>

            <div className="min-h-80 w-10/12 mx-auto">
                <p>L’associazione “Alberi di Vita”, istituita nel quartiere Mompiano, a nord di Brescia, è nata nell’ottobre 2016 come risposta all’appello di Papa Francesco del 20 settembre 2016 ad Assisi, in occasione della Giornata della Pace. Composta da volontari, l’associazione si impegna a fornire sostegno alla comunità locale, concentrandosi in particolare sugli anziani e sulle famiglie, seguendo gli insegnamenti di Papa Francesco.</p>
            </div>

            <div className="min-h-80 w-10/12 mx-auto">
                <h2 className="text-center text-3xl font-bold">Attività ed eventi</h2>

                {/* griglia con le varie attività */}
            </div>

            <div className="min-h-80 w-10/12 mx-auto">
                <h2 className="text-center text-3xl font-bold">Enti ed Associazioni amici</h2>

                <div className="flex justify-between gap-15 flex-wrap py-15">
                    {
                        friends.map((f, id) => {
                            return (
                                <a
                                    key={id}
                                    href={f.link}
                                    target="_blank"
                                    className="relative flex w-80 flex-col rounded-xl bg-white  shadow-md">
                                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                    </div>

                                    <h5 className="text-center text-xl font-semibold p-3">
                                        {f.name}
                                    </h5>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}