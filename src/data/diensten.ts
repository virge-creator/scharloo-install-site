// Alle diensten op één plek. Pas hier teksten en prijzen aan — de
// overzichtspagina (/diensten/), de detailpagina's en het uitklapmenu
// in de header gebruiken dit bestand.
//
// PRIJZEN: standaard staat elke dienst op "op aanvraag" (lege prijzen-lijst).
// Wil je vaste vanaf-prijzen tonen? Vul dan de `prijzen`-lijst, bijvoorbeeld:
//   prijzen: [
//     { naam: 'Basis', prijs: '€349', detail: '+ €9 per maand' },
//     { naam: 'Plus',  prijs: '€475' },
//   ],

export interface Prijs {
  naam: string;
  prijs: string;              // eenmalig bedrag
  detail?: string;
  maand?: string;             // maandbedrag, bv '€15'
  maandDetail?: string;       // bv 'p/m excl. btw'
  maandOmschrijving?: string; // verkopende regel: wat het abonnement biedt
}

export interface Dienst {
  slug: string;
  nummer: string;
  title: string;
  subtitle: string;
  kort: string;              // korte omschrijving in het uitklap-overzicht
  intro: string;             // subtekst in de hero van de detailpagina
  over: string[];            // alinea's "wat we doen / hoe het werkt"
  voordelen: string[];       // opsomming van voordelen
  features: string[];        // korte kenmerken (chips)
  prijzen: Prijs[];          // leeg = "op aanvraag"
  metaTitle: string;         // SEO-titel (zonder "| Scharloo-Install")
  metaDesc: string;          // SEO-omschrijving
  externLink?: { text: string; url: string }; // bv. webshop
  detailUrl?: string;        // overschrijft de standaard /diensten/<slug>/
  genereerPagina: boolean;   // false = geen eigen detailpagina (bv. alarmsystemen)
  afbeelding?: string;       // pad naar foto, bv '/images/diensten/target-blu-eye.jpg'
  afbeeldingAlt?: string;    // alt-tekst bij de foto (goed voor Google)
  afbeeldingen?: { src: string; alt: string; bijschrift: string; contain?: boolean }[];
  varianten?: { naam: string; omschrijving: string }[]; // keuze-opties, bv weergave
  variantenTitel?: string;   // kopje boven de varianten, bv 'Kies uw weergave'
}

export const diensten: Dienst[] = [
  {
    slug: 'voertuigvolgsystemen',
    nummer: '01',
    title: 'Voertuigvolgsystemen',
    subtitle: 'Tracking & ritregistratie',
    kort: 'Realtime GPS-tracking en automatische ritregistratie voor uw voertuig of volledige wagenpark, met overzicht in één online dashboard.',
    intro: 'Realtime GPS-tracking en automatische ritregistratie voor uw voertuig of volledige wagenpark — professioneel ingebouwd, met overzicht in één online dashboard.',
    over: [
      'Een voertuigvolgsysteem laat u op elk moment zien waar uw voertuigen zijn. Via een beveiligd online dashboard volgt u locaties live, bekijkt u afgelegde routes en houdt u de inzet van uw wagenpark in de gaten.',
      'De automatische ritregistratie legt elke rit vast en splitst zakelijk en privé. Zo heeft u een sluitende kilometeradministratie die voldoet aan de eisen van de Belastingdienst, zonder dat u of uw chauffeurs er omkijken naar hebben.',
    ],
    voordelen: [
      'Altijd inzicht in waar uw voertuigen zijn',
      'Sluitende rittenregistratie voor de fiscus',
      'Efficiëntere planning en inzet van uw wagenpark',
      'Snellere terugvinding bij diefstal',
      'Minder administratie voor u en uw chauffeurs',
    ],
    features: ['GPS tracking', 'Realtime locatie', 'Ritregistratie', 'Online dashboard'],
    prijzen: [
      {
        naam: 'Compleet geïnstalleerd',
        prijs: '€275',
        detail: 'incl. montage en btw',
        maand: '€12,50',
        maandDetail: 'p/m excl. btw',
        maandOmschrijving: 'Voor 24/7 live tracking, automatische ritregistratie en het online platform — altijd inzicht in uw voertuig of wagenpark.',
      },
    ],
    metaTitle: 'Voertuigvolgsysteem inbouwen — GPS-tracking & ritregistratie',
    metaDesc: 'Voertuigvolgsysteem met realtime GPS-tracking en sluitende ritregistratie. Eenmalig €275 incl. montage en btw, daarna €12,50 p/m. Voor één voertuig of een heel wagenpark.',
    genereerPagina: true,
  },
  {
    slug: 'gps-startonderbreker',
    nummer: '02',
    title: 'GPS + startonderbreker',
    subtitle: 'Tracking & startonderbreking op afstand',
    kort: 'Live voertuigtracking, ritregistratie en een op afstand bedienbare startonderbreking — bij diefstal zet u uw voertuig op afstand stil.',
    intro: 'Live voertuigtracking, ritregistratie en een op afstand bedienbare startonderbreking. Bij diefstal of ongeoorloofd gebruik maakt u uw voertuig op afstand onstartbaar — waar het ook is.',
    over: [
      'Met GPS-voertuigbeveiliging volgt u uw voertuig 24/7 live en weet u altijd waar het is. De kracht zit in de op afstand bedienbare startonderbreking: wordt uw voertuig gestolen of ongeoorloofd gebruikt, dan maakt u het met één handeling onstartbaar, zodat het niet verder kan.',
      'Veilig ontworpen: de startonderbreking schakelt uitsluitend wanneer het voertuig stilstaat, nooit tijdens het rijden. Ideaal voor ondernemers, verhuur en lease — bijvoorbeeld bij wanbetaling of een vermoeden van diefstal. Tracking, ritregistratie en beveiliging komen samen in één systeem.',
    ],
    voordelen: [
      'Zet uw voertuig bij diefstal op afstand stil — waar het ook is',
      '24/7 live zicht op de exacte locatie van uw voertuig',
      'Onmisbaar bij verhuur, lease en bij wanbetaling',
      'Veilig ontworpen: blokkeert nooit tijdens het rijden',
      'Grotere kans dat uw voertuig na diefstal wordt teruggevonden',
      'Tracking, ritregistratie én beveiliging in één systeem',
    ],
    features: ['Live GPS-tracking', 'Startonderbreking op afstand', 'Ritregistratie', 'Anti-diefstal'],
    prijzen: [
      {
        naam: 'Compleet geïnstalleerd',
        prijs: '€475',
        detail: 'incl. inbouw en btw',
        maand: '€15',
        maandDetail: 'p/m excl. btw',
        maandOmschrijving: 'Voor 24/7 live tracking, het online platform en de bediening van de startonderbreking op afstand — dag en nacht grip op uw voertuig.',
      },
    ],
    metaTitle: 'GPS + startonderbreker — voertuigbeveiliging op afstand',
    metaDesc: 'GPS-tracking, ritregistratie en startonderbreking op afstand. Eenmalig vanaf €475 incl. inbouw en btw, daarna €15 p/m. Maak uw voertuig bij diefstal op afstand onstartbaar.',
    genereerPagina: true,
  },
  {
    slug: 'dashcams',
    nummer: '03',
    title: 'Dashcams',
    subtitle: 'Veiligheid & bewijslast',
    kort: 'Professioneel ingebouwde dashcams voor extra veiligheid en onbetwistbare bewijslast bij schade — netjes weggewerkt, zonder losse kabels.',
    intro: 'Professioneel ingebouwde dashcams voor extra veiligheid en onbetwistbare bewijslast bij schade — netjes weggewerkt, zonder losse kabels.',
    over: [
      'Een dashcam legt continu vast wat er op de weg gebeurt. Bij een aanrijding of schade heeft u direct beeld om aan te tonen wat er precies is gebeurd — vaak doorslaggevend bij de schuldvraag en uw verzekering.',
      'Wij bouwen de camera’s onzichtbaar in, gevoed vanuit de voertuigelektronica, zodat er geen losse kabels in beeld hangen. Optioneel met voor- én achtercamera, een live verbinding en een parkeermodus die ook ingrijpt wanneer uw voertuig stilstaat.',
    ],
    voordelen: [
      'Onbetwistbaar bewijs bij schade of aanrijding',
      'Mogelijk een lagere verzekeringspremie',
      'Onzichtbare, nette inbouw zonder losse kabels',
      'Parkeermodus beschermt ook bij stilstand',
      'Voor- en achtercamera mogelijk',
    ],
    features: ['Live verbinding', 'Onzichtbare installatie', 'Voor- en achtercamera', 'Parkeermodus'],
    prijzen: [],
    metaTitle: 'Dashcam inbouwen — onzichtbare installatie voor bewijslast',
    metaDesc: 'Professionele, onzichtbare inbouw van dashcams met voor- en achtercamera, live verbinding en parkeermodus. Onbetwistbare bewijslast bij schade.',
    externLink: { text: 'Bekijk de dashcam webshop', url: 'https://scharloo-install.vercel.app/nl' },
    afbeeldingen: [
      { src: '/images/BMW-dashcam-950-600.png.webp', alt: 'Dashcam netjes weggewerkt bij de binnenspiegel van een BMW', bijschrift: 'Discreet ingebouwd in een BMW' },
      { src: '/images/Volkswagen-dashcam-2.png.webp', alt: 'Dashcam geïntegreerd achter de binnenspiegel van een Volkswagen', bijschrift: 'Strakke montage in een Volkswagen' },
      { src: '/images/Audi-dashcam.png.webp', alt: 'Professioneel ingebouwde dashcam in een Audi', bijschrift: 'Professionele inbouw in een Audi' },
    ],
    genereerPagina: true,
  },
  {
    slug: 'alarmsystemen',
    nummer: '04',
    title: 'Alarmsystemen',
    subtitle: 'SCM/CCV gecertificeerd',
    kort: 'SCM/CCV-gecertificeerde alarm- en voertuigvolgsystemen, klasse 2 t/m 5, met vaste vanaf-prijzen op de aparte alarmsystemen-pagina.',
    intro: '',
    over: [],
    voordelen: [],
    features: ['Klasse 2 t/m 5', 'SCM/CCV gecertificeerd', 'Verzekeraar goedgekeurd', 'Anti-diefstal'],
    prijzen: [],
    metaTitle: 'Alarmsystemen',
    metaDesc: '',
    detailUrl: '/alarmsystemen/',
    genereerPagina: false,
  },
  {
    slug: 'tachograaf',
    nummer: '05',
    title: 'Remote tachograaf download',
    subtitle: 'Remote download',
    kort: 'Automatische, draadloze uitlezing van de digitale tachograaf en bestuurderskaart — voldoe aan de wettelijke bewaarplicht zonder handmatig werk.',
    intro: 'Automatische, draadloze uitlezing van de digitale tachograaf en bestuurderskaart — voldoe aan de wettelijke bewaarplicht zonder handmatig werk.',
    over: [
      'Voor vrachtwagens en bussen bent u wettelijk verplicht de gegevens van de tachograaf en de bestuurderskaart periodiek uit te lezen en te bewaren. Handmatig uitlezen kost tijd en wordt in de praktijk snel vergeten.',
      'Met remote tacho download gebeurt dit automatisch en op afstand, gekoppeld aan uw voertuigvolgsysteem. De gegevens worden volgens de wettelijke termijnen opgehaald en veilig opgeslagen, zodat u altijd aan de regelgeving voldoet.',
    ],
    voordelen: [
      'Voldoet aan de wettelijke bewaarplicht',
      'Geen handmatig uitlezen meer',
      'Automatisch volgens de juiste termijnen',
      'Minder kans op boetes bij controle',
      'Gegevens veilig digitaal opgeslagen',
    ],
    features: ['Remote download', 'Conform wetgeving', 'Digitale tachograaf', 'Automatisch uitlezen'],
    prijzen: [],
    metaTitle: 'Remote tachograaf download — automatisch uitlezen op afstand',
    metaDesc: 'Automatische remote download van digitale tachograaf en bestuurderskaart, conform de wettelijke bewaarplicht. Geen handmatig uitlezen meer.',
    genereerPagina: true,
  },
  {
    slug: 'can-bus',
    nummer: '06',
    title: 'CAN-bus koppelingen',
    subtitle: 'Voertuiggegevens',
    kort: 'Lees voertuiggegevens rechtstreeks uit via de CAN-bus en bekijk brandstofverbruik, rijstijl en meer op afstand — voor vrijwel elk merk.',
    intro: 'Lees voertuiggegevens rechtstreeks uit via de CAN-bus en bekijk brandstofverbruik, rijstijl en meer op afstand — voor vrijwel elk merk.',
    over: [
      'De CAN-bus is het datanetwerk van uw voertuig. Door uw voertuigvolgsysteem daarop aan te sluiten, komt een schat aan gegevens beschikbaar: kilometerstand, brandstof- of energieverbruik, toerental, rijstijl en foutcodes.',
      'Zo stuurt u op zuiniger en veiliger rijden, plant u onderhoud op het juiste moment en ziet u de werkelijke staat van uw wagenpark — zonder losse sensoren, rechtstreeks uit de bron.',
    ],
    voordelen: [
      'Nauwkeurig brandstof- en verbruiksinzicht',
      'Rijstijlanalyse voor zuiniger en veiliger rijden',
      'Onderhoud plannen op basis van echte data',
      'Werkt met vrijwel alle merken',
      'Betrouwbare data direct uit het voertuig',
    ],
    features: ['Brandstofverbruik', 'Rijstijlanalyse', 'Live voertuiggegevens', 'Alle merken'],
    prijzen: [],
    metaTitle: 'CAN-bus koppeling — voertuiggegevens op afstand uitlezen',
    metaDesc: 'CAN-bus koppeling voor uw voertuigvolgsysteem: brandstofverbruik, rijstijl en voertuigdata op afstand inzien. Geschikt voor vrijwel alle merken.',
    genereerPagina: true,
  },
  {
    slug: 'driver-id',
    nummer: '07',
    title: 'Driver ID / RFID',
    subtitle: 'Bestuurdersidentificatie',
    kort: 'Automatische bestuurdersidentificatie met RFID — weet altijd wie er rijdt en koppel ritten moeiteloos aan de juiste persoon.',
    intro: 'Automatische bestuurdersidentificatie met RFID — weet altijd wie er rijdt en koppel ritten moeiteloos aan de juiste persoon.',
    over: [
      'Met een RFID-lezer in het voertuig en een tag of pasje per chauffeur weet het systeem automatisch wie er achter het stuur zit. De bestuurder meldt zich aan door de pas kort voor te houden.',
      'Ritten worden zo automatisch aan de juiste persoon gekoppeld — ideaal bij voertuigen met wisselende bestuurders. Handig voor een sluitende rittenregistratie, en koppelbaar aan een startblokkering zodat alleen bevoegde chauffeurs kunnen wegrijden.',
    ],
    voordelen: [
      'Altijd duidelijk wie er heeft gereden',
      'Ritten automatisch gekoppeld aan de chauffeur',
      'Ideaal bij wisselende bestuurders',
      'Koppelbaar aan een startblokkering',
      'Sluitende registratie zonder gedoe',
    ],
    features: ['RFID tags / kaarten', 'Automatische herkenning', 'Koppeling ritregistratie', 'Meerdere bestuurders'],
    prijzen: [],
    metaTitle: 'Driver ID / RFID — automatische bestuurdersidentificatie',
    metaDesc: 'Bestuurdersidentificatie met RFID: weet wie er rijdt en koppel ritten automatisch aan de juiste chauffeur. Ideaal bij wisselende bestuurders.',
    genereerPagina: true,
  },
  {
    slug: 'io-integraties',
    nummer: '08',
    title: 'I/O integraties',
    subtitle: 'Maatwerk koppelingen',
    kort: 'Maatwerkkoppelingen voor extra functies op uw voertuig — van sensoren en schakelaars tot signalering, precies op uw werkproces afgestemd.',
    intro: 'Maatwerkkoppelingen voor extra functies op uw voertuig — van sensoren en schakelaars tot signalering, precies op uw werkproces afgestemd.',
    over: [
      'Niet elke wens past in een standaardoplossing. Met I/O-integraties koppelen we extra in- en uitgangen aan uw voertuigvolgsysteem: denk aan het registreren wanneer een laadklep, pomp, zwaailamp of deur wordt gebruikt.',
      'Zo maakt u bijvoorbeeld inzichtelijk hoeveel uren een aggregaat of kraan draait, of krijgt u een melding bij bepaalde gebeurtenissen. Wij denken met u mee en bouwen de koppeling die bij uw werkproces past.',
    ],
    voordelen: [
      'Volledig op maat voor uw werkproces',
      'Registreer gebruik van laadklep, pomp, kraan of aggregaat',
      'Meldingen bij specifieke gebeurtenissen',
      'Koppelbaar aan bestaande systemen',
      'Advies en maatwerk door specialisten',
    ],
    features: ['Maatwerk', 'Sensoren', 'Schakelaars', 'Systeemintegratie'],
    prijzen: [],
    metaTitle: 'I/O integraties — maatwerk koppelingen voor uw voertuig',
    metaDesc: 'Maatwerk I/O-integraties op uw voertuigvolgsysteem: sensoren, schakelaars en signalering voor laadklep, pomp, kraan of aggregaat.',
    genereerPagina: true,
  },
  {
    slug: 'temperatuur-monitoring',
    nummer: '09',
    title: 'Temperatuur monitoring',
    subtitle: 'Realtime inzicht',
    kort: 'Realtime temperatuurbewaking van voertuigen en laadruimtes, met directe alerts bij afwijkingen — onmisbaar voor temperatuurgevoelig transport.',
    intro: 'Realtime temperatuurbewaking van voertuigen en laadruimtes, met directe alerts bij afwijkingen — onmisbaar voor temperatuurgevoelig transport.',
    over: [
      'Voor koel- en vriestransport moet de temperatuur aantoonbaar binnen de juiste grenzen blijven. Met temperatuursensoren in de laadruimte volgt u de waarden live en wordt alles automatisch gelogd.',
      'Wijkt de temperatuur af, dan krijgt u direct een melding zodat u op tijd kunt ingrijpen. De vastgelegde data ondersteunt uw HACCP-registratie en bewijst dat de koudeketen gewaarborgd is.',
    ],
    voordelen: [
      'Realtime zicht op de temperatuur in de laadruimte',
      'Automatische alert bij afwijkingen',
      'Bewijslast voor een gewaarborgde koudeketen',
      'Ondersteunt uw HACCP-registratie',
      'Geschikt voor koel- en vriestransport',
    ],
    features: ['Realtime temperatuurdata', 'Alerts bij afwijkingen', 'Voor koeltransport', 'HACCP-ondersteuning'],
    prijzen: [],
    metaTitle: 'Temperatuur monitoring — realtime bewaking laadruimte',
    metaDesc: 'Realtime temperatuurbewaking van laadruimtes met automatische alerts en HACCP-ondersteuning. Onmisbaar voor koel- en vriestransport.',
    genereerPagina: true,
  },
  {
    slug: 'target-blu-eye',
    nummer: '10',
    title: 'Target Blu Eye 2',
    subtitle: 'Hulpdiensten vroegtijdig detecteren',
    kort: 'Het unieke systeem dat de aanwezigheid van naderende hulpdiensten detecteert en u ruim op tijd waarschuwt — voor meer overzicht en rust achter het stuur.',
    intro: 'Weet eerder dan wie ook dat er een hulpdienst nadert. De Target Blu Eye 2 detecteert het communicatienetwerk van politie, ambulance, brandweer en marechaussee, en waarschuwt u ruim op tijd — professioneel ingebouwd in uw voertuig.',
    over: [
      'Hulpdiensten zoals politie, ambulance, brandweer en marechaussee communiceren via het landelijke C2000-netwerk. De Target Blu Eye 2 vangt de aanwezigheid van dit netwerk op en herkent daarmee dat er een hulpdienstvoertuig in de buurt is — vaak nog voordat u zwaailichten of sirene ziet of hoort.',
      'Het grote voordeel: ook onopvallende, ongemarkeerde politievoertuigen worden herkend. Juist deze auto’s ziet u normaal gesproken niet aankomen, maar zolang hun C2000-apparatuur actief is, signaleert de Blu Eye 2 hun aanwezigheid. Zo rijdt u altijd met een scherper beeld van wat er om u heen gebeurt.',
      'U krijgt een duidelijke, tijdige waarschuwing. Zo heeft u meer overzicht, kunt u rustig anticiperen, veilig ruimte maken en voorkomt u schrikreacties. De Blu Eye 2 is de nieuwste generatie: gevoeliger, slimmer en nog fraaier afgewerkt dan zijn voorganger.',
      'Belangrijk om te weten: de Target Blu Eye is geen radar- of flitserdetector. Het systeem spoort geen snelheidscontroles op, maar signaleert uitsluitend de aanwezigheid van het communicatienetwerk van hulpdiensten. Daarmee is het in Nederland toegestaan.',
    ],
    voordelen: [
      'Detecteert naderende hulpdiensten, vaak vóór u ze ziet of hoort',
      'Herkent ook onopvallende, ongemarkeerde politievoertuigen',
      'Meer overzicht en rust, minder schrikreacties in het verkeer',
      'Veilig en tijdig ruimte maken voor hulpdiensten',
      'Keuze uit twee discrete weergaves, passend bij uw interieur',
      'Geen radardetector — in Nederland toegestaan',
    ],
    features: ['Detectie C2000-netwerk', 'Ook onopvallende politie', 'Twee weergave-opties', 'Discrete inbouw'],
    variantenTitel: 'Kies uw weergave',
    varianten: [
      {
        naam: 'LED-display',
        omschrijving: 'Een apart, strak display dat u op een door u gekozen plek monteren. Overzichtelijke weergave van het type melding en de signaalsterkte, zonder dat u ergens anders op hoeft te letten.',
      },
      {
        naam: "LED's in de binnenspiegel",
        omschrijving: 'De meest discrete oplossing: subtiele led-indicatie, geïntegreerd in de binnenspiegel. Vrijwel onzichtbaar in het interieur en altijd in uw blikveld, zonder extra kastje op het dashboard.',
      },
    ],
    prijzen: [
      {
        naam: 'Target Blu Eye 2, compleet geïnstalleerd',
        prijs: '€1.899',
        detail: 'incl. inbouw en btw',
      },
    ],
    metaTitle: 'Target Blu Eye 2 inbouwen — hulpdiensten detecteren',
    metaDesc: 'Target Blu Eye 2 professioneel laten inbouwen voor €1.899 incl. inbouw en btw. Detecteert naderende politie, ambulance en brandweer via het C2000-netwerk. Geen radardetector.',
    afbeelding: '/images/blu-eye-2-set-transparant.png',
    afbeeldingAlt: 'Target Blu Eye 2 detectiemodule en bediening',
    genereerPagina: true,
  },
  {
    slug: 'trekhaken',
    nummer: '11',
    title: 'Trekhaken',
    subtitle: 'Montage voor elk merk en model',
    kort: 'Professionele montage van trekhaken, inclusief de juiste elektra-aansluiting — vakkundig gemonteerd voor vrijwel elk merk en model.',
    intro: 'Een trekhaak laten monteren door specialisten die uw voertuig door en door kennen. Vakkundig gemonteerd met de juiste kogelhaak en elektra, voor vrijwel elk merk en model.',
    over: [
      'Of u nu een aanhanger, fietsendrager of caravan wilt trekken: een goed gemonteerde trekhaak is onmisbaar. Wij monteren een trekhaak die past bij uw voertuig en gebruik, van een vaste en afneembare tot een wegklapbare kogel.',
      'De montage omvat niet alleen de haak zelf, maar ook de bijbehorende elektra-aansluiting (7- of 13-polig), afgestemd op uw voertuig. Zo werken de verlichting en signalering van uw aanhanger of drager betrouwbaar en storingsvrij, en blijft de boordelektronica van uw auto netjes intact.',
      'Wij werken met kwaliteitsmaterialen en leveren het werk netjes en volgens de geldende eisen op. Omdat elke auto anders is, bepalen we samen met u de juiste trekhaak en stellen we een passende prijs op.',
    ],
    voordelen: [
      'Vakkundige montage voor vrijwel elk merk en model',
      'Keuze uit vaste, afneembare en wegklapbare kogelhaak',
      'Juiste elektra-aansluiting (7- of 13-polig) inbegrepen',
      'Betrouwbare verlichting en signalering, storingsvrij',
      'Kwaliteitsmaterialen, netjes afgewerkt',
      'Persoonlijk advies over de beste keuze voor uw voertuig',
    ],
    features: ['Elk merk en model', 'Vast, afneembaar of wegklapbaar', 'Elektra inbegrepen', 'Netjes afgewerkt'],
    prijzen: [],
    metaTitle: 'Trekhaak laten monteren — voor elk merk en model',
    metaDesc: 'Professionele montage van trekhaken inclusief de juiste elektra-aansluiting, voor vrijwel elk merk en model. Vraag een vrijblijvende offerte aan.',
    afbeeldingen: [
      { src: '/images/maxresdefault.jpg', alt: 'Trekhaak gemonteerd onder de achterbumper van een auto', bijschrift: 'Netjes gemonteerd onder de achterbumper' },
      { src: '/images/590000-transparant.png', alt: 'Trekhaak met bevestigingsmaterialen en onderdelen', bijschrift: '', contain: true },
    ],
    genereerPagina: true,
  },
];

// Handig voor de detailpagina's: de juiste link per dienst.
export function dienstUrl(d: Dienst): string {
  return d.detailUrl ?? `/diensten/${d.slug}/`;
}
