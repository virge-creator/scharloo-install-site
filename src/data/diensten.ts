// Alle diensten op één plek. Pas hier teksten en prijzen aan — de
// overzichtspagina (/diensten/), de detailpagina's en het uitklapmenu
// in de header gebruiken dit bestand.
//
// PRIJZEN: standaard staat elke dienst op "op aanvraag" (lege prijzen-lijst).
// Wil je vaste vanaf-prijzen tonen? Vul dan de `prijzen`-lijst, bijvoorbeeld:
//   prijzen: [
//     { naam: 'Basis', prijs: '€349', detail: '+ €9 per maand' },
//     { naam: 'Plus',  prijs: '€499' },
//   ],

export interface Prijs {
  naam: string;
  prijs: string;
  detail?: string;
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
    prijzen: [],
    metaTitle: 'Voertuigvolgsysteem inbouwen — GPS-tracking & ritregistratie',
    metaDesc: 'Professionele inbouw van voertuigvolgsystemen met realtime GPS-tracking en sluitende ritregistratie. Voor één voertuig of een heel wagenpark.',
    genereerPagina: true,
  },
  {
    slug: 'gps-voertuigbeveiliging',
    nummer: '02',
    title: 'GPS-voertuigbeveiliging',
    subtitle: 'Tracking & startblokkering op afstand',
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
      { naam: 'Compleet geïnstalleerd', prijs: '€499', detail: 'inclusief inbouw en btw' },
    ],
    metaTitle: 'GPS-voertuigbeveiliging — tracking & startblokkering op afstand',
    metaDesc: 'Live GPS-tracking, ritregistratie en op afstand bedienbare startonderbreking vanaf €499 incl. inbouw en btw. Maak uw voertuig bij diefstal op afstand onstartbaar.',
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
];

// Handig voor de detailpagina's: de juiste link per dienst.
export function dienstUrl(d: Dienst): string {
  return d.detailUrl ?? `/diensten/${d.slug}/`;
}
