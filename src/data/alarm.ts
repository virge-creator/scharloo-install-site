// Alarm- en voertuigvolgpakketten (SCM/CCV). Eén bron voor de alarmsystemen-pagina
// én de bestelpagina. Vaste pakketprijzen (incl. btw, montage en certificaat).
// Vul `bestelLink` met een Stripe-betaallink om de knop "Bestel & betaal" te tonen;
// leeg = "Offerte aanvragen". `vanPrijs` = optionele doorgestreepte actie-prijs
// (alleen tonen als het echt een eerdere prijs was).

export interface AlarmPakket {
  klasse: string;        // bv 'Klasse 2'
  sub: string;           // korte typeaanduiding, bv 'Alarmsysteem'
  prijs: string;         // vaste pakketprijs, eenmalig
  vanPrijs?: string;     // optionele doorgestreepte 'van'-prijs (actie)
  abonnement?: string;   // jaarlijks meldkamerabonnement (klasse 4/5/TV)
  populair: boolean;
  omschrijving: string;
  foto: string;
  features: string[];
  bestelLink?: string;   // Stripe-betaallink; leeg = Offerte aanvragen
}

export const alarmPakketten: AlarmPakket[] = [
  {
    klasse: 'Klasse 2',
    sub: 'Alarmsysteem',
    prijs: '€849',
    vanPrijs: '€999',
    populair: false,
    omschrijving: 'Startonderbreker met inbraak- en omtrekbeveiliging. Compleet inclusief montage en SCM/CCV-certificaat.',
    foto: '/images/alarm-klasse-2.png',
    features: ['SCM/CCV-certificaat', 'Startonderbreker', 'Radardetectie en omtrekbeveiliging', 'Noodstroomsirene', 'Inclusief montage'],
    bestelLink: 'https://buy.stripe.com/8x23cwephcjW0xu0qQ3VC05',
  },
  {
    klasse: 'Klasse 3',
    sub: 'Alarm + hellingdetectie',
    prijs: '€999',
    vanPrijs: '€1.149',
    populair: true,
    omschrijving: 'Klasse 2 uitgebreid met hellingshoekdetectie tegen wegslepen. De meest gevraagde klasse door verzekeraars.',
    foto: '/images/alarm-klasse-3.png',
    features: ['SCM/CCV-certificaat', 'Startonderbreker', 'Radardetectie en omtrekbeveiliging', 'Hellingshoekdetectie', 'Noodstroomsirene', 'Inclusief montage'],
    bestelLink: 'https://buy.stripe.com/4gM3cw5SL1Fibc83D23VC06',
  },
];

export const volgPakketten: AlarmPakket[] = [
  {
    klasse: 'Klasse 4',
    sub: 'Voertuigvolgsysteem',
    prijs: '€699',
    vanPrijs: '€849',
    abonnement: '€275 per jaar',
    populair: false,
    omschrijving: 'Voertuigvolgsysteem met 24/7 meldkamer en jammingdetectie.',
    foto: '/images/alarm-klasse-4.png',
    features: ['SCM/CCV-certificaat', 'Voertuigvolgsysteem', 'Startblokkade op afstand', '24/7 meldkamer', 'Jammingdetectie', 'Inclusief montage'],
    bestelLink: 'https://buy.stripe.com/eVq28sftl83G1By2yY3VC07',
  },
  {
    klasse: 'Klasse 5',
    sub: 'Alarm + volgsysteem',
    prijs: '€799',
    vanPrijs: '€949',
    abonnement: '€275 per jaar',
    populair: true,
    omschrijving: 'Het complete systeem: alarm én voertuigvolgsysteem met pushmelding.',
    foto: '/images/alarm-klasse-5.png',
    features: ['SCM/CCV-certificaat', 'Alarm gekoppeld aan voertuigvolgsysteem', 'Startblokkade op afstand', '24/7 meldkamer', 'Jammingdetectie', 'Pushmelding bij alarm', 'Inclusief montage'],
    bestelLink: 'https://buy.stripe.com/8x2aEYch91Fifso4H63VC08',
  },
  {
    klasse: 'Klasse TV',
    sub: 'Peilzender / terugvinden',
    prijs: '€299',
    vanPrijs: '€349',
    abonnement: '€99 per jaar',
    populair: false,
    omschrijving: 'Compact terugvindsysteem om uw voertuig na diefstal te traceren.',
    foto: '/images/alarm-klasse-tv.png',
    features: ['SCM/CCV-certificaat', 'Terugvindsysteem', '24/7 meldkamer', 'Inclusief montage'],
    bestelLink: 'https://buy.stripe.com/4gMfZigxp2Jma84c9y3VC09',
  },
];
