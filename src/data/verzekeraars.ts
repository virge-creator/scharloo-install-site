// Nederlandse autoverzekeraars die SCM/CCV-gecertificeerde beveiliging accepteren.
// Logo toevoegen? Zet een bestand in public/images/verzekeraars/ met als naam de slug,
// bijvoorbeeld public/images/verzekeraars/centraal-beheer.svg (svg, png of webp).
// Het blok toont dan automatisch het logo in plaats van de naam. Geen code aanpassen nodig.

// Partner-label: zet partner: true ALLEEN als er een echte (contractuele) samenwerking is,
// anders is het misleidende reclame. Zonder partner: true staat er geen label.

export interface Verzekeraar {
  slug: string;
  naam: string;
  partner?: boolean;
}

export const verzekeraars: Verzekeraar[] = [
  { slug: 'centraal-beheer', naam: 'Centraal Beheer' },
  { slug: 'interpolis', naam: 'Interpolis' },
  { slug: 'nationale-nederlanden', naam: 'Nationale-Nederlanden' },
  { slug: 'allianz', naam: 'Allianz' },
  { slug: 'asr', naam: 'a.s.r.' },
  { slug: 'anwb', naam: 'ANWB' },
  { slug: 'unive', naam: 'Univé' },
  { slug: 'fbto', naam: 'FBTO' },
  { slug: 'ohra', naam: 'OHRA' },
  { slug: 'inshared', naam: 'InShared' },
  { slug: 'ditzo', naam: 'Ditzo' },
  { slug: 'de-goudse', naam: 'De Goudse' },
  { slug: 'klaverblad', naam: 'Klaverblad' },
  { slug: 'unigarant', naam: 'Unigarant' },
  { slug: 'bovemij', naam: 'Bovemij' },
  { slug: 'tvm', naam: 'TVM verzekeringen' },
];

// Handige tekstvorm voor in lopende tekst en FAQ's (goed voor Google).
export const verzekeraarsTekst =
  verzekeraars.slice(0, -1).map((v) => v.naam).join(', ') +
  ' en ' +
  verzekeraars[verzekeraars.length - 1].naam;
