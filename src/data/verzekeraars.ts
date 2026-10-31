// Nederlandse autoverzekeraars die SCM/CCV-gecertificeerde beveiliging accepteren.
// Logo's staan in public/images/<slug>.png (wit, transparant), bv. public/images/allianz.png.
// Nieuwe verzekeraar? Voeg een regel toe en zet het logo met dezelfde naam in die map.
// Zonder logo toont het blok automatisch de naam.

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
  { slug: 'de-goudse', naam: 'De Goudse' },
  { slug: 'klaverblad', naam: 'Klaverblad' },
  { slug: 'unigarant', naam: 'Unigarant' },
  { slug: 'allianzdirect', naam: 'Allianz Direct' },
  { slug: 'nh1816', naam: 'NH1816' },
  { slug: 'bovemij', naam: 'Bovemij' },
  { slug: 'enra', naam: 'ENRA' },
  { slug: 'promovendum', naam: 'Promovendum' },
  { slug: 'de-noorderlinge', naam: 'De Noorderlinge' },
  { slug: 'kilometerverzekering', naam: 'De Kilometerverzekering' },
];

// Handige tekstvorm voor in lopende tekst en FAQ's (goed voor Google).
export const verzekeraarsTekst =
  verzekeraars.slice(0, -1).map((v) => v.naam).join(', ') +
  ' en ' +
  verzekeraars[verzekeraars.length - 1].naam;
