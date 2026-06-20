/**
 * ⭐ SITE CONFIGURATION — waermepumpe-einbau-kosten.de
 * EMD single-niche : Wärmepumpe Einbau Kosten
 */
export const siteConfig = {
  // === IDENTITÄT ===
  domain: "waermepumpe-einbau-kosten.de",
  name: "Wärmepumpe Einbau Kosten",
  tagline: "Wärmepumpe Einbau Kosten — Preise für Installation & Montage 2026",
  description: "Was kostet der Einbau einer Wärmepumpe? Alle Kosten aufgeschlüsselt: Gerät, Montage, Elektrik, Fundament und Förderung. Rechner für Ihren Eigenanteil.",
  editorialTone: "Kostenberater",

  // === NICHE ===
  niche: {
    slug: "waermepumpe-einbau-kosten",
    name: "Luft-Wasser-Wärmepumpe",
    nameShort: "Wärmepumpe",
    emoji: "💶",
    icon: "euro",
    seoTitleTemplate: "Wärmepumpe Einbau Kosten in {city} — Alle Preise im Detail {zip}",
    metaDescTemplate: "Was kostet der Einbau einer Wärmepumpe in {city}? Alle Kosten aufgeschlüsselt: Gerät, Montage, Elektrik, Förderung. Ab {priceMin}€ Eigenanteil nach KfW-Zuschuss.",
    heroTitle: "Wärmepumpe Einbau Kosten 2026",
    heroSubtitle: "Alle Kostenpositionen im transparenten Check: Gerät, Montage, Elektrik & Fundament. Finden Sie Fachbetriebe aus Ihrer Region und vergleichen Sie Angebote.",
  },

  // === MONETARISIERUNG (TAP TAP HOME) ===
  taptaphome: {
    mode: 'api' as 'redirect' | 'iframe' | 'api',
    trackingLinkHP: "https://www.taptaphome.com/?utm_source=affiliate&utm_campaign=waermepumpe_einbau_kosten_de",
    partnerName: "DAA GmbH (BOSCH-Gruppe)",
    contactPerson: "Tuuli Himme (tuuli.himme@taptaphome.com)",
    provisionPerLead: "35% des Lead-Umsatzes (ca. 63€ im Schnitt)",
    
    // Top-HP-Regionen
    highAvrPrefixes: [
      "04", "07", "09", "12", "13", "14", "15", "16", "21", "22", "27", "28", "30", "31", "40", 
      "41", "42", "44", "45", "46", "47", "49", "55", "57", "58", "60", "64", "65", "68", "80", 
      "81", "82", "85"
    ],
  },

  // === MONTAGESPESTRUM DETAILED TABLES ===
  pricingRows: [
    { label: "Wärmepumpe (Gerät)", budget: "8.000€", standard: "12.000€", premium: "16.000€" },
    { label: "Pufferspeicher (300–500L)", budget: "1.000€", standard: "2.000€", premium: "3.500€" },
    { label: "Montage & Installation", budget: "4.000€", standard: "7.000€", premium: "10.000€" },
    { label: "Demontage Altgerät + Entsorgung", budget: "800€", standard: "1.500€", premium: "3.000€" },
    { label: "Elektroanschluss", budget: "500€", standard: "1.200€", premium: "2.500€" },
    { label: "Fundament Außeneinheit", budget: "300€", standard: "700€", premium: "1.500€" },
    { label: "Kältemittelleitungen", budget: "400€", standard: "800€", premium: "1.500€" },
    { label: "Hydraulischer Abgleich", budget: "500€", standard: "850€", premium: "1.200€" },
    { label: "Schallschutzmaßnahmen", budget: "0€", standard: "300€", premium: "800€" },
    { label: "Genehmigungen/Anmeldungen", budget: "100€", standard: "300€", premium: "500€" },
    { label: "Gesamt (brutto)", budget: "15.600€", standard: "26.650€", premium: "40.500€", isTotal: true },
    { label: "KfW-Förderung (50% typisch)", budget: "-7.800€", standard: "-13.325€", premium: "-20.250€", isSubsidy: true },
    { label: "Eigenanteil", budget: "7.800€", standard: "13.325€", premium: "20.250€", isFinal: true }
  ],

  // === AUSTAUSCH NEBENKOSTEN ===
  exchangeCosts: [
    { type: "Gasheizung → WP", cost: "0€ – 1.500€", note: "Gasanschluss stilllegen & Zählerausbau" },
    { type: "Ölheizung → WP", cost: "1.500€ – 3.500€", note: "Öltank entsorgen, Reinigung & Bodenprobe" },
    { type: "Nachtspeicheröfen → WP", cost: "3.000€ – 8.000€", note: "Komplett neue Rohrleitungen & Heizkörper" },
    { type: "Keine Fußbodenheizung", cost: "5.000€ – 15.000€", note: "Optional: Fußbodenheizung nachrüsten (Trockensystem/Einfräsen)" }
  ],

  // === NEBENKOSTEN DIE OFT VERGESSEN WERDEN ===
  hiddenCosts: [
    { item: "Energieberater (BzA)", cost: "300€ – 500€", frequency: "Pflicht für den Erhalt der KfW-Förderung" },
    { item: "Schornsteinfeger (Abnahme)", cost: "80€ – 150€", frequency: "Einmalig für die Stilllegung der Altheizung" },
    { item: "Wärmepumpen-Stromtarif", cost: "Ersparnis ~20%", frequency: "Laufender Spar-Effekt gegenüber Normalstrom" },
    { item: "Wartungsvertrag", cost: "150€ – 300€ / Jahr", frequency: "Empfohlen (wahrt die Herstellergarantie)" },
    { item: "Versicherung (Erweiterung)", cost: "50€ – 100€ / Jahr", frequency: "Fakultativ gegen Diebstahl/Sturmschäden im Garten" }
  ],

  // === REGIONALE FAKTOREN ===
  regionalMultipliers: [
    { region: "Bayern, Baden-Württemberg", factor: "×1.15", typicalPrice: "28.000€ – 42.000€" },
    { region: "NRW, Hessen", factor: "×1.05", typicalPrice: "25.000€ – 38.000€" },
    { region: "Norddeutschland", factor: "×1.00", typicalPrice: "23.000€ – 35.000€" },
    { region: "Ostdeutschland", factor: "×0.90", typicalPrice: "20.000€ – 32.000€" }
  ],

  // === FÖRDERUNG (KfW 458 Richtlinien) ===
  subsidies: [
    { name: "KfW-Grundförderung", amount: "30%", condition: "Basis-Zuschuss für jeden Eigentümer beim Heizungswechsel." },
    { name: "Klimageschwindigkeits-Bonus", amount: "+20%", condition: "Austausch von Öl-, Kohle-, Nachtspeicher- oder mind. 20 Jahre alten Gasheizungen (Eigennutzung)." },
    { name: "Einkommens-Bonus", amount: "+30%", condition: "Für selbstnutzende Eigentümer mit zvE unter 40.000 € pro Jahr." },
    { name: "Effizienz-Bonus", amount: "+5%", condition: "Für den Einsatz natürlicher Kältemittel (z.B. Propan R290) oder Erdwärme." },
    { name: "Maximaler Fördersatz", amount: "70%", condition: "Gedeckelt auf 30.000 € förderfähige Höchstkosten." },
    { name: "Maximaler Zuschuss", amount: "21.000 €", condition: "Der reine Barzuschuss direkt auf Ihr Konto." }
  ],

  // === EINBAU ABLAUF STEPS ===
  process: [
    { title: "Kostenfreie Beratung", desc: "Fachgespräch führen und Angebote anfordern. Vor-Ort-Termin vereinbaren.", icon: "📋", duration: "1–2 Wochen" },
    { title: "BzA erstellen lassen", desc: "Ihr ausgewählter Betrieb erstellt die 'Bestätigung zum Antrag' (BzA).", icon: "✍️", duration: "1–3 Tage" },
    { title: "KfW-Zuschuss beantragen", desc: "MUSS zwingend vor Beginn der Arbeiten im KfW-Zuschussportal eingereicht werden.", icon: "🏛️", duration: "1 Tag + Direktzusage" },
    { title: "Altgeräte-Rückbau", desc: "Fachgerechte Stilllegung und Entsorgung der alten Öl- oder Gasanlage.", icon: "🔧", duration: "1 Tag" },
    { title: "Geräteeinbau & Elektrik", desc: "Fundament für Außengerät gießen, Wanddurchführung, Kältemittelrohre verlegen & Anschluss.", icon: "⚡", duration: "1–2 Tage" },
    { title: "Inbetriebnahme & Abgleich", desc: "Hydraulischer Abgleich nach Verfahren B (Pflicht für KfW) und Testlauf.", icon: "🟢", duration: "1 Tag" }
  ],

  // === FAQ ===
  faq: [
    {
      q: "Wie setzen sich die Einbaukosten einer Wärmepumpe zusammen?",
      a: "Die Einbaukosten teilen sich in drei Hauptbereiche auf: Die Anschaffung der Wärmepumpe selbst und des Warmwasser-/Pufferspeichers (ca. 50-60%), die handwerkliche Montage und hydraulische Anbindung durch den Heizungsbauer (ca. 25-30%) sowie die vorbereitenden Umfeldmaßnahmen wie Elektroarbeiten, Fundament und Stilllegung der Altheizung (ca. 15-20%)."
    },
    {
      q: "Wie viel kostet der reine Arbeitslohn für den Einbau?",
      a: "Der reine Arbeitslohn für die Installation und hydraulische Einbindung einer Luft-Wasser-Wärmepumpe liegt im Jahr 2026 meist zwischen <strong>4.000 € und 10.000 €</strong> brutto. Hinzu kommen die Kosten für den Elektroanschluss durch einen zertifizierten Elektriker (ca. 500 € bis 2.500 €)."
    },
    {
      q: "Welche Nebenkosten kommen beim Tausch einer Ölheizung hinzu?",
      a: "Beim Austausch einer Ölheizung müssen Sie mit Mehrkosten von <strong>1.500 € bis 3.500 €</strong> für das fachgerechte Abpumpen, Reinigen und Entsorgen des Öltanks sowie die gesetzlich vorgeschriebene Bodenprobe rechnen. Dieser Posten ist jedoch über die KfW-Förderung voll förderfähig."
    },
    {
      q: "Ist der hydraulische Abgleich in den Einbaukosten enthalten?",
      a: "In seriösen Angeboten ist der hydraulische Abgleich nach Verfahren B standardmäßig enthalten (Kostenpunkt ca. 500 € bis 1.200 €). Prüfen Sie das Angebot genau, da der schriftliche Nachweis des Abgleichs eine **zwingende Voraussetzung für die Auszahlung der KfW-Förderung** ist."
    },
    {
      q: "Gibt es regionale Unterschiede beim Wärmepumpeneinbau?",
      a: "Ja, die Einbaukosten variieren regional teils erheblich. In wirtschaftlich starken Bundesländern wie Bayern und Baden-Württemberg liegen die Handwerkerpreise oft um 10 bis 15% höher als der Bundesdurchschnitt. In Ostdeutschland hingegen liegen die Preise häufig rund 10% darunter."
    }
  ],

  // === TRUST BADGES ===
  trustBadges: ["Komplette Kosten-Transparenz", "Regionale Fachbetriebe", "Maximale KfW-Förderung gesichert"],

  // === CONTENT BLOCKS ===
  introText: `Planen Sie den Einbau einer Wärmepumpe und möchten genau wissen, mit welchen Anschaffungs- und Montagekosten Sie rechnen müssen? Die Entscheidung für eine Luft-Wasser-Wärmepumpe ist wirtschaftlich hochattraktiv: Dank des Gebäudeenergiegesetzes (GEG) und des historischen KfW-Förderprogramms 458 erhalten Hausbesitzer beim Austausch einer alten Öl- oder Gasheizung bis zu 70% Zuschuss.
  
  Die tatsächlichen Installationskosten setzen sich aus Gerätepreis, Arbeitslohn des Heizungsbauers, Elektrik, Fundament und Altgeräteentsorgung zusammen. In unserer detaillierten Kostenübersicht schlüsseln wir jede Position präzise auf, zeigen versteckte Kostenfaktoren und vergleichen die regionalen Preisunterschiede in Deutschland. Unser kostenloses Portal vermittelt Ihnen direkt Angebote von geprüften Fachbetrieben in Ihrer Region, um Preise transparent zu vergleichen.`,

  whyChooseUs: [
    "Vollständige Aufschlüsselung aller Kostenpositionen (Gerät, Montage, Elektrik)",
    "Berücksichtigung aller länderspezifischen Regelungen & Netzbetreibervorgaben",
    "Direkter Kostenrechner zur Schätzung Ihres KfW-Eigenanteils",
    "Kostenlose und unverbindliche Angebote von regionalen Handwerkern",
    "Schutz vor versteckten Preisen bei Altgeräteentsorgung und Elektrik",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
