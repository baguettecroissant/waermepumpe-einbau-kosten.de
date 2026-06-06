export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  image: string;
  content: string; // HTML content
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "waermepumpe-kosten-2026",
    title: "Wärmepumpe Einbaukosten 2026: Komplette Kostenaufstellung",
    metaTitle: "Wärmepumpe Einbaukosten 2026 | Preise & Aufstellung",
    metaDescription: "Was kostet der Einbau einer Luft-Wasser-Wärmepumpe 2026? Alle Posten von Gerät bis Elektroanschluss & Eigenanteil nach Förderung.",
    excerpt: "Eine detaillierte Aufschlüsselung aller Installationskosten einer Wärmepumpe: Anschaffung, Handwerkerleistungen und Eigenanteil nach der KfW-Förderung.",
    date: "2026-05-10",
    readTime: "12 Min.",
    category: "Kosten",
    emoji: "💶",
    image: "/images/blog/kosten-aufstellung.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">⚡ Kosten-Schnellcheck (Mittelwerte für 2026):</strong>
        <ul class="list-disc pl-5 text-xs md:text-sm space-y-1">
          <li><strong>Brutto-Einbaukosten (schlüsselfertig):</strong> ca. 20.000 € bis 35.000 € (Standard-Klasse).</li>
          <li><strong>Staatliche Förderung (KfW 458):</strong> 30 % bis 70 % (maximal 21.000 € Zuschuss).</li>
          <li><strong>Effektiver Netto-Eigenanteil:</strong> ab ca. 9.000 € bis 17.500 € nach Erstattung.</li>
          <li><strong>Hydraulischer Abgleich:</strong> Inklusive (Pflicht für die KfW-Auszahlung).</li>
        </ul>
      </div>

      <p>Wer eine neue Luft-Wasser-Wärmepumpe einbauen lassen möchte, wird oft von unterschiedlichen Preisangaben überwältigt. Das liegt daran, dass der Heizungswechsel ein interdisziplinäres Projekt ist: Neben dem Heizungsbauer müssen auch ein Elektriker und oft Tiefbauer (für das Fundament) beauftragt werden. In diesem Guide schlüsseln wir alle realen Kostenpositionen für das Jahr 2026 detailliert auf.</p>

      <h2>1. Schlüsselfertige Einbaukosten im Detail</h2>
      <p>Die Gesamtinvestition teilt sich in die Hardware (Wärmepumpe, Speicher, Rohre) und die Dienstleistungen (Demontage der Altheizung, Montage, Elektroanschluss und Inbetriebnahme) auf. Die folgende Tabelle zeigt die Kostenverteilung für ein typisches Einfamilienhaus:</p>

      <table>
        <thead>
          <tr>
            <th>Kostenposition</th>
            <th>Budget-Klasse</th>
            <th>Standard-Klasse</th>
            <th>Premium-Klasse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Wärmepumpe (Außen- & Inneneinheit)</strong></td>
            <td>8.000 €</td>
            <td>12.000 €</td>
            <td>16.000 €</td>
          </tr>
          <tr>
            <td><strong>Speicher (Pufferspeicher & Brauchwasser)</strong></td>
            <td>1.000 €</td>
            <td>2.000 €</td>
            <td>3.500 €</td>
          </tr>
          <tr>
            <td><strong>Montage & hydraulische Einbindung</strong></td>
            <td>4.000 €</td>
            <td>7.000 €</td>
            <td>10.000 €</td>
          </tr>
          <tr>
            <td><strong>Demontage Altgerät + Entsorgung</strong></td>
            <td>800 €</td>
            <td>1.500 €</td>
            <td>3.000 €</td>
          </tr>
          <tr>
            <td><strong>Elektroanschluss & Zählerkasten</strong></td>
            <td>500 €</td>
            <td>1.200 €</td>
            <td>2.500 €</td>
          </tr>
          <tr>
            <td><strong>Fundament & Kältemittelleitungen</strong></td>
            <td>700 €</td>
            <td>1.500 €</td>
            <td>3.000 €</td>
          </tr>
          <tr>
            <td><strong>Hydraulischer Abgleich & Genehmigungen</strong></td>
            <td>600 €</td>
            <td>1.450 €</td>
            <td>2.500 €</td>
          </tr>
          <tr class="font-bold bg-gray-50">
            <td>Gesamtsumme (brutto vor Förderung)</td>
            <td>15.600 €</td>
            <td>26.650 €</td>
            <td>40.500 €</td>
          </tr>
          <tr class="font-bold text-success">
            <td>KfW-Förderung (50% typischer Schnitt)</td>
            <td>-7.800 €</td>
            <td>-13.325 €</td>
            <td>-20.250 €</td>
          </tr>
          <tr class="font-bold bg-[#E8F5E9] text-brand-700">
            <td>Tatsächlicher Eigenanteil</td>
            <td>7.800 €</td>
            <td>13.325 €</td>
            <td>20.250 €</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Drei Praxisbeispiele (Fallstudien)</h2>
      <p>Um die Zahlen greifbarer zu machen, betrachten wir drei reale Gebäude-Szenarien:</p>

      <div class="space-y-4 my-6">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm card-hover">
          <h3 class="font-bold text-gray-900 text-sm mb-1">🏢 Szenario A: Neubau Einfamilienhaus (120 m² Wohnfläche)</h3>
          <p class="text-xs text-gray-600 mb-2">Hier ist der Installationsaufwand minimal. Es ist bereits eine Fußbodenheizung verlegt, und der Zählerschrank entspricht den neuesten technischen Normen.</p>
          <ul class="list-disc pl-5 text-xs text-gray-700 space-y-1">
            <li><strong>Benötigte Leistung:</strong> 5 kW (Luft-Wasser-Wärmepumpe)</li>
            <li><strong>Hardware + Speicher:</strong> 9.500 €</li>
            <li><strong>Installation & Elektrik:</strong> 5.000 € (kein Altheizungs-Abbau nötig)</li>
            <li><strong>KfW-Förderung (30% Grundförderung):</strong> -4.350 €</li>
            <li><strong>Eigenanteil: 10.150 €</strong></li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm card-hover">
          <h3 class="font-bold text-gray-900 text-sm mb-1">🏡 Szenario B: Teilsaniertes Einfamilienhaus (150 m², Baujahr 1994)</h3>
          <p class="text-xs text-gray-600 mb-2">Die bestehende Gasheizung (22 Jahre alt) soll ersetzt werden. 3 Heizkörper in Wohnräumen werden gegen größere Modelle (Typ 33) getauscht, um eine Vorlauftemperatur von 50°C zu ermöglichen.</p>
          <ul class="list-disc pl-5 text-xs text-gray-700 space-y-1">
            <li><strong>Benötigte Leistung:</strong> 9 kW (Monoblock-System)</li>
            <li><strong>Hardware, Speicher + Heizkörper:</strong> 15.500 €</li>
            <li><strong>Installation, Elektrik, Abbau Altgerät:</strong> 10.000 €</li>
            <li><strong>KfW-Förderung (50% - inkl. Speed-Bonus):</strong> -12.750 €</li>
            <li><strong>Eigenanteil: 12.750 €</strong></li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm card-hover">
          <h3 class="font-bold text-gray-900 text-sm mb-1">🏛️ Szenario C: Ungedämmter Altbau (200 m², Baujahr 1978)</h3>
          <p class="text-xs text-gray-600 mb-2">Eine alte Ölheizung inklusive Stahltanks im Keller wird demontiert. Es müssen 8 Heizkörper erneuert werden, der Zählerschrank muss komplett umgebaut werden. Es kommt eine Premium-Wärmepumpe mit natürlichem Kältemittel zum Einsatz.</p>
          <ul class="list-disc pl-5 text-xs text-gray-700 space-y-1">
            <li><strong>Benötigte Leistung:</strong> 14 kW (Hochtemperatur-Wärmepumpe)</li>
            <li><strong>Hardware, Speicher, Heizkörper:</strong> 21.000 €</li>
            <li><strong>Installation, Elektrik, Öltankentsorgung:</strong> 16.000 €</li>
            <li><strong>KfW-Förderung (70% Maximalförderung bei Einkommensbonus):</strong> -21.000 € (Förderdeckelung greift bei 30.000 € förderfähigen Kosten)</li>
            <li><strong>Eigenanteil: 16.000 €</strong></li>
          </ul>
        </div>
      </div>

      <h2>3. Die Rolle der Marken: Premium vs. Budget</h2>
      <p>Bei der Wahl des Herstellers gibt es spürbare Preisunterschiede. Premium-Marken wie <strong>Bosch, Viessmann, Vaillant</strong> und <strong>Buderus</strong> überzeugen durch exzellenten Kundendienst, leise Verdichter und den serienmäßigen Einsatz des zukunftssicheren Kältemittels Propan (R290). Asiatische Hersteller wie <strong>Panasonic, Daikin</strong> und <strong>Samsung</strong> bieten oft günstigere Monoblock-Geräte in der Anschaffung (ca. 15–20% Ersparnis beim Gerät), haben jedoch in Deutschland ein weniger dichtes Servicenetz.</p>
    `
  },
  {
    slug: "versteckte-kosten",
    title: "Versteckte Kosten beim Wärmepumpen-Einbau: Was oft vergessen wird",
    metaTitle: "Versteckte Kosten Wärmepumpe | Häufige Budgetfallen",
    metaDescription: "Welche versteckten Kosten lauern beim Wärmepumpen-Einbau? Zählerschrank, Schallschutzhauben, Genehmigungen und laufende Wartung im Überblick.",
    excerpt: "Vermeiden Sie böse Überraschungen bei der Modernisierung. Wir zeigen die Nebenkosten auf, die Heizungsbauer-Angebote oft verschweigen.",
    date: "2026-05-12",
    readTime: "11 Min.",
    category: "Kosten",
    emoji: "⚠️",
    image: "/images/blog/versteckte-kosten.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">⚠️ Häufige Budget-Fallen auf einen Blick:</strong>
        <p class="text-xs md:text-sm mt-1">Ein Großteil der ungeplanten Kosten entsteht bei den vorbereitenden Gewerken. Prüfen Sie Angebote immer auf das Kleingedruckte wie 'bauseitige Leistungen' oder 'Elektroanschluss nach Aufwand'.</p>
      </div>

      <p>Der Umstieg auf eine umweltfreundliche Wärmepumpe lohnt sich langfristig fast immer. Dennoch berichten viele Eigenheimbesitzer nach dem Einbau von unerwarteten Mehrkosten. In diesem Ratgeber analysieren wir die klassischen 'versteckten' Kosten, die in Kostenvoranschlägen der Heizungsbauer oft fehlen oder nur als Nebensatz aufgeführt sind.</p>

      <h2>1. Die Elektro-Baustelle: Der Zählerschrank</h2>
      <p>Eine Luft-Wasser-Wärmepumpe benötigt einen Drehstromanschluss (400 Volt) und muss separat im Verteilerschrank abgesichert werden. Bei Gebäuden, die älter als 20 Jahre sind, entspricht der Zählerkasten selten den aktuellen Technischen Anschlussbedingungen (TAB) des Netzbetreibers. Typische Mängel sind fehlende Überspannungsschutzgeräte oder mangelnde Platzkapazitäten.</p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Zählerkastenerweiterung (Zusatzmodule):</strong> 500 € – 1.000 €</li>
        <li><strong>Komplette Zählerkasten-Erneuerung (inkl. Verteilerfeld):</strong> 2.000 € – 3.500 €</li>
        <li><strong>Installation Smart Meter Gateway (Voraussetzung EnWG § 14a):</strong> 150 € – 300 €</li>
      </ul>

      <h2>2. Fundament und Erdarbeiten im Garten</h2>
      <p>Die Außeneinheit der Wärmepumpe wiegt zwischen 100 kg und 250 kg. Sie muss erschütterungsfrei und waagerecht stehen, um Vibrationen und damit Schallübertragungen zu minimieren. Ein einfaches Abstellen auf Waschbetonplatten reicht nicht aus.</p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Betonstreifenfundament (frostsicher gegründet, 80 cm Tiefe):</strong> 600 € – 1.200 €</li>
        <li><strong>Kiesbett für Kondensatablauf (Schutz vor Vereisung im Winter):</strong> 200 € – 400 €</li>
        <li><strong>Erdverlegung der Kältemittelleitungen (Tiefbau pro Meter):</strong> 80 € – 150 €</li>
      </ul>

      <h2>3. Lärmschutz und behördliche Genehmigungen</h2>
      <p>In dicht bebauten Siedlungen (z.B. Reihenhäusern) müssen die Vorgaben der TA Lärm (nachts maximal 35 dB(A) in reinen Wohngebieten) an der Grundstücksgrenze eingehalten werden. Ist das Außengerät zu nah am Nachbarn platziert, droht im schlimmsten Fall eine Stilllegung.</p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Akkustisches Schallgutachten (wird oft vom Bauamt verlangt):</strong> 300 € – 600 €</li>
        <li><strong>Schallschutzhaube / Einhausung (senkt den Schallpegel um bis zu 10 dB):</strong> 1.000 € – 2.500 €</li>
        <li><strong>Genehmigung für Grenzbebauung (falls abweichend von Landesregeln):</strong> 150 € – 500 €</li>
      </ul>

      <div class="bg-[#FFF8E1] border-l-4 border-[#FF6F00] p-4 rounded-xl my-6">
        <strong>💡 Pro-Tipp zur Kostensenkung:</strong>
        <p class="text-xs md:text-sm mt-1">Lassen Sie sich Zählerarbeiten und Fundamente immer als Festpreis im Angebot garantieren oder organisieren Sie das Fundament in Eigenleistung, um bis zu 1.000 € Arbeitslohn einzusparen.</p>
      </div>
    `
  },
  {
    slug: "waermepumpe-altbau",
    title: "Wärmepumpe nachrüsten: Kosten im Altbau vs. Neubau",
    metaTitle: "Wärmepumpe im Altbau nachrüsten — Voraussetzungen",
    metaDescription: "Kann eine Wärmepumpe auch im ungedämmten Altbau ohne Fußbodenheizung betrieben werden? Voraussetzungen, Vorlauftemperaturen und Tipps.",
    excerpt: "Eine Wärmepumpe funktioniert auch im Altbau effizient. Wir zeigen die Voraussetzungen wie Vorlauftemperatur und Heizkörper-Austausch.",
    date: "2026-05-18",
    readTime: "13 Min.",
    category: "Gebäude",
    emoji: "🏠",
    image: "/images/blog/waermepumpe-altbau.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">🏠 Die 3 Kern-Voraussetzungen für Altbauten:</strong>
        <ul class="list-disc pl-5 text-xs md:text-sm space-y-1">
          <li><strong>Maximale Vorlauftemperatur:</strong> Sollte an sehr kalten Wintertagen unter 55°C liegen.</li>
          <li><strong>Heizflächendimensionierung:</strong> Große Plattenheizkörper (Typ 22 oder 33) sind zwingend erforderlich.</li>
          <li><strong>Hydraulischer Abgleich:</strong> Pflichtleistung zur Optimierung der Durchflussmengen.</li>
        </ul>
      </div>

      <p>Lange Zeit galt das Gerücht, dass man eine Wärmepumpe nur im perfekt gedämmten Neubau mit Fußbodenheizung betreiben kann. Durch die technische Weiterentwicklung moderner Kältemaschinen und den Einsatz des Kältemittels Propan (R290) ist das Nachrüsten im Altbau heute jedoch zu einem Standardverfahren geworden. Wir vergleichen Aufwand und Kosten im Detail.</p>

      <h2>1. Thermodynamik verstehen: Vorlauftemperatur & Effizienz</h2>
      <p>Die Effizienz einer Wärmepumpe wird durch die Jahresarbeitszahl (JAZ) ausgedrückt. Je geringer der Temperaturunterschied zwischen der Außenluft und dem Heizungswasser (Vorlauftemperatur) ist, desto weniger Strom muss der Kompressor verbrauchen. Im Neubau mit Fußbodenheizung liegt die Vorlauftemperatur bei ca. 35°C (JAZ ~4.0). Im Altbau mit klassischen Heizkörpern liegt sie meist bei 50°C bis 55°C (JAZ ~3.4). Ein wirtschaftlicher Betrieb ist ab einer JAZ von 3.0 gegeben.</p>

      <h2>2. Heizkörper optimieren: Rippen- vs. Plattenheizkörper</h2>
      <p>Alte Rippenheizkörper (Gliederheizkörper) halten nur wenig Wasser und geben die Wärme fast nur durch Konvektion (Luftbewegung) ab. Sie benötigen hohe Temperaturen (65–75°C) und sind für Wärmepumpen ungeeignet. Moderne dreilagige Plattenheizkörper (Typ 33) nutzen Strahlungswärme und haben eine wesentlich größere Oberfläche, wodurch sie dieselbe Raumwärme bei 50°C Vorlauf liefern.</p>

      <table>
        <thead>
          <tr>
            <th>Heizkörper-Typ</th>
            <th>Bautiefe</th>
            <th>Wärmeabgabe bei 50°C Vorlauf</th>
            <th>Kosten inkl. Tausch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Typ 11 (1 Heizplatte)</strong></td>
            <td>ca. 6 cm</td>
            <td>Gering (nur für kleine Bäume/WCs)</td>
            <td>ca. 350 €</td>
          </tr>
          <tr>
            <td><strong>Typ 22 (2 Platten, 2 Konvektoren)</strong></td>
            <td>ca. 10 cm</td>
            <td>Mittel (Standard in vielen Wohnräumen)</td>
            <td>ca. 450 €</td>
          </tr>
          <tr class="font-bold bg-brand-50/20 text-brand-700">
            <td>Typ 33 (3 Platten, 3 Konvektoren)</td>
            <td>ca. 16 cm</td>
            <td>Sehr hoch (Ideal zur Optimierung)</td>
            <td>ca. 650 €</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Dämm-Maßnahmen mit hoher Hebelwirkung</h2>
      <p>Sie müssen für eine Wärmepumpe keine teure Vollwärmedämmung der Fassade durchführen. Konzentrieren Sie sich stattdessen auf preisgünstige Maßnahmen mit großem Effekt:</p>
      <ul class="list-disc pl-5 space-y-2 text-xs md:text-sm mb-4">
        <li><strong>Dämmung der obersten Geschossdecke:</strong> Senkt den Wärmeverlust über das un beheizte Dach um ca. 15-20 %. In Eigenleistung oft für unter 1.000 € Materialkosten realisierbar.</li>
        <li><strong>Dämmung der Kellerdecke:</strong> Reduziert kalte Fußböden im Erdgeschoss und senkt die Heizlast um ca. 5-8 %.</li>
        <li><strong>Fensterdichtungen erneuern:</strong> Verhindert unkontrollierten Luftaustausch an kalten Wintertagen.</li>
      </ul>
    `
  },
  {
    slug: "oelheizung-austausch",
    title: "Ölheizung austauschen: Was kostet der Umstieg auf Wärmepumpe?",
    metaTitle: "Ölheizung gegen Wärmepumpe tauschen | Kosten & Förderung",
    metaDescription: "Was kostet der Austausch einer Ölheizung gegen eine Wärmepumpe? Detaillierte Kosten für Öltank-Entsorgung, KfW-Förderung & Boni 2026.",
    excerpt: "Der Umstieg von Heizöl auf Umweltwärme wird vom Staat massiv gefördert. Erfahren Sie alles über Entsorgungskosten, Sanierungsaufwand und Einsparungen.",
    date: "2026-05-20",
    readTime: "10 Min.",
    category: "Austausch",
    emoji: "🛢️",
    image: "/images/blog/oel-austausch.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">🛢️ Förderungs-Boni beim Ölheizungstausch:</strong>
        <p class="text-xs md:text-sm mt-1">Wer seine alte Ölheizung durch eine Luft-Wasser-Wärmepumpe ersetzt, erhält die <strong>30% Grundförderung</strong> und profitiert zusätzlich vom <strong>20% Klimageschwindigkeits-Bonus</strong>. Der Gesamtzuschuss kann so bis auf 70% steigen.</p>
      </div>

      <p>Heizen mit Heizöl ist in Deutschland ein Auslaufmodell: Die CO₂-Abgabe verteuert den Brennstoff kontinuierlich, und der Einbau neuer reiner Ölheizungen ist gesetzlich stark eingeschränkt. Der Wechsel zu einer modernen Wärmepumpe ist ökologisch und ökonomisch sinnvoll, erfordert jedoch im Vergleich zum Gasheizungstausch zusätzliche Schritte zur Entsorgung des alten Brennstofflagers.</p>

      <h2>1. Entsorgungskosten für Öltank und Leitungen</h2>
      <p>Bevor die Wärmepumpe installiert werden kann, muss das Öllager fachgerecht zurückgebaut werden. Diese Arbeiten dürfen nur von zugelassenen Fachbetrieben nach AwSV (Anlagen zum Umgang mit wassergefährdenden Stoffen) durchgeführt werden:</p>

      <table>
        <thead>
          <tr>
            <th>Tank-Typ & Kapazität</th>
            <th>Typische Netto-Kosten</th>
            <th>Leistungsumfang & Entsorgungsaufwand</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kunststoff-Batterietanks (bis 3.000 L)</strong></td>
            <td>1.000 € – 1.500 €</td>
            <td>Restöl abpumpen, Reinigung der Tanks, Zerschneiden & Abtransport.</td>
          </tr>
          <tr>
            <td><strong>Geschweißter Stahltank (im Keller, bis 5.000 L)</strong></td>
            <td>1.800 € – 2.600 €</td>
            <td>Entgasung, Reinigung, Zerschneiden mit Spezialwerkzeug, Metall-Entsorgung.</td>
          </tr>
          <tr>
            <td><strong>Erdtank (im Garten vergraben, bis 8.000 L)</strong></td>
            <td>2.500 € – 3.800 €</td>
            <td>Reinigung, Ausheben, Entsorgung oder Stilllegung durch Verfüllung mit Spezial-Kies.</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Gewonnenen Raum sinnvoll nutzen</h2>
      <p>Ein oft vergessener Vorteil beim Tausch einer Ölheizung: Durch den Wegfall der Öltanks gewinnen Hauseigentümer im Keller oft einen komplett neuen, trockenen Raum von 6 bis 15 Quadratmetern Fläche. Dieser kann nach der Renovierung als Hobbyraum, Lager oder Werkstatt genutzt werden.</p>

      <h2>3. Die Bodenprobe-Pflicht</h2>
      <p>Wird ein Erdtank im Garten entfernt oder stillgelegt, verlangen Untere Wasserbehörden in vielen Bundesländern eine amtliche Bodenprobe (TÜV-Abnahme). Damit wird nachgewiesen, dass in der Vergangenheit kein Heizöl ins Erdreich gelangt ist. Die Kosten für diese Prüfung belaufen sich auf ca. <strong>150 € bis 300 €</strong>.</p>
    `
  },
  {
    slug: "einbaukosten-senken",
    title: "Installationskosten senken: 7 Tipps für ein günstigeres Angebot",
    metaTitle: "Wärmepumpen Einbaukosten senken | Spar-Tipps",
    metaDescription: "Wie kann man die Einbaukosten einer Wärmepumpe senken? 7 konkrete Tipps zu Eigenleistung, Angebotsvergleich und Umfeldmaßnahmen.",
    excerpt: "Sparen Sie bares Geld beim Heizungskauf. Wir präsentieren 7 praxisnahe Möglichkeiten, wie Sie die Handwerkerrechnung spürbar reduzieren.",
    date: "2026-05-22",
    readTime: "9 Min.",
    category: "Kosten",
    emoji: "💡",
    image: "/images/blog/kosten-senken.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">💡 Die 3 wirksamsten Sparhebel beim Einbau:</strong>
        <ul class="list-disc pl-5 text-xs md:text-sm space-y-1">
          <li><strong>Eigenleistungen:</strong> Demontage der Altverrohrung und Gießen des Betonfundaments.</li>
          <li><strong>Umfeldmaßnahmen fördern lassen:</strong> Alle Vorarbeiten direkt in den KfW-Förderantrag aufnehmen.</li>
          <li><strong>Regionales Bieten:</strong> Angebote von Betrieben außerhalb der teuren Ballungsräume einholen.</li>
        </ul>
      </div>

      <p>Die Anschaffung einer Wärmepumpe ist eine erhebliche finanzielle Investition. Es gibt jedoch legale und handwerklich unbedenkliche Möglichkeiten, wie Sie die Einbaukosten spürbar senken können. Wir stellen Ihnen die 7 besten Tipps zur Kostenreduktion vor.</p>

      <h2>1. Eigenleistungen gezielt einsetzen</h2>
      <p>Sprechen Sie vor Vertragsunterzeichnung mit Ihrem Heizungsbauer ab, welche Vorarbeiten Sie selbst übernehmen können. Viele Betriebe sind froh über Entlastung bei einfachen Tätigkeiten:</p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Altgeräte entsorgen:</strong> Den Rückbau alter Verkleidungen oder das Abfahren von Schrott können Sie selbst übernehmen (Ersparnis: ~300 € - 600 €).</li>
        <li><strong>Das Fundament erstellen:</strong> Das Gießen eines Beton-Streifenfundaments im Garten ist für geübte Heimwerker kein Problem (Ersparnis: ~500 € - 1.000 €).</li>
        <li><strong>Schlitz- und Stemmarbeiten:</strong> Wanddurchbrüche für Kältemittelleitungen in Abstimmung mit dem Installateur vorschlagen und vorbereiten.</li>
      </ul>

      <h2>2. Den Zukauf von Speicher-Hardware optimieren</h2>
      <p>Manche Installationsbetriebe neigen dazu, überdimensionierte Pufferspeicher zu verkaufen. Ein zu großer Speicher verringert die Effizienz der Wärmepumpe, da sie ständig warmes Wasser vorhalten muss, das nicht benötigt wird. Lassen Sie das Puffervolumen exakt nach der tatsächlichen Heizlast berechnen (Faustregel: 15–20 Liter pro kW Heizleistung).</p>

      <h2>3. Unabhängiger Preisvergleich von mindestens 3 Angeboten</h2>
      <p>Die Preise der SHK-Betriebe variieren regional erheblich. Nutzen Sie Online-Vergleiche, um Angebote von Betrieben einzuholen, die in einem Umkreis von 50 km ansässig sind. Handwerker aus ländlichen Regionen haben oft geringere Stundensätze als Betriebe aus Großstädten wie München oder Stuttgart.</p>
    `
  },
  {
    slug: "waermepumpe-vs-gasheizung",
    title: "Kostenvergleich: Wärmepumpe vs. Gasheizung über 20 Jahre",
    metaTitle: "Wärmepumpe vs Gasheizung Kostenvergleich 2026",
    metaDescription: "Wärmepumpe oder Gasheizung kaufen? Detaillierter Kostenvergleich über 20 Jahre inklusive Anschaffung, CO2-Steuer und Betriebskosten.",
    excerpt: "Ein ehrlicher Wirtschaftlichkeitsvergleich zwischen Wärmepumpe und Erdgas. Wir berechnen die Gesamtkosten über die gesamte Lebensdauer.",
    date: "2026-05-25",
    readTime: "12 Min.",
    category: "Vergleich",
    emoji: "⚖️",
    image: "/images/blog/vergleich.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">⚖️ Die TCO-Vollkostenrechnung (Total Cost of Ownership):</strong>
        <p class="text-xs md:text-sm mt-1">Beim Heizungsvergleich reicht es nicht aus, nur die Anschaffungskosten zu betrachten. Steigende CO₂-Kosten und das gesetzliche Beimischungsgebot für grünes Gas verteuern den Gasbetrieb ab 2029 drastisch.</p>
      </div>

      <p>Wer vor der Entscheidung steht, eine neue Heizung zu kaufen, vergleicht oft Äpfel mit Birnen. Eine Gasbrennwerttherme ist in der Anschaffung (inklusive Montage) ab ca. 12.000 € erhältlich. Eine Wärmepumpe kostet nach Abzug der typischen 50% Förderung etwa 13.500 € bis 17.000 €. Wir vergleichen die Kostenstrukturen über einen realistischen Zeitraum von 20 Jahren.</p>

      <h2>1. Langzeit-Kostenvergleich (150 m² Einfamilienhaus)</h2>
      <p>Grundlage der Berechnung: Jährlicher Wärmebedarf von 20.000 kWh. Gaspreis 2026 bei 13 ct/kWh, Wärmepumpenstrom bei 28 ct/kWh. Jahresarbeitszahl (JAZ) der Wärmepumpe bei 3.5:</p>

      <table>
        <thead>
          <tr>
            <th>Kostenposition (20 Jahre)</th>
            <th>Brennwert-Gasheizung</th>
            <th>Luft-Wasser-Wärmepumpe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Netto-Anschaffungskosten</strong></td>
            <td>13.000 €</td>
            <td>14.500 € (30.000 € brutto abzüglich 50% Förderung)</td>
          </tr>
          <tr>
            <td><strong>Energiekosten (Jahr 1)</strong></td>
            <td>2.600 €</td>
            <td>1.600 € (Strombedarf: 5.714 kWh à 28 ct)</td>
          </tr>
          <tr>
            <td><strong>CO₂-Abgabe (kumuliert über 20 J.)</strong></td>
            <td>8.500 € (ansteigende CO₂-Preise nach BEHG)</td>
            <td>0 € (bei Nutzung von Ökostrom)</td>
          </tr>
          <tr>
            <td><strong>Gasnetzgebühren (kumuliert)</strong></td>
            <td>4.000 € (steigend wegen Netzstilllegungs-Umlage)</td>
            <td>0 €</td>
          </tr>
          <tr>
            <td><strong>Wartung & Schornsteinfeger</strong></td>
            <td>4.500 € (inkl. Brennerprüfung & Messung)</td>
            <td>2.500 € (Wartung nur alle 2 Jahre empfohlen)</td>
          </tr>
          <tr class="font-bold bg-gray-50">
            <td>Voraussichtliche Gesamtkosten nach 20 J.</td>
            <td>81.600 €</td>
            <td>51.700 €</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Das Risiko der GEG-Biomethan-Vorschrift</h2>
      <p>Gemäß dem aktuellen Gebäudeenergiegesetz (GEG) dürfen neu installierte Gasheizungen ab dem Jahr 2029 nicht mehr ausschließlich mit fossilem Gas betrieben werden. Sie müssen stufenweise steigende Anteile an grünem Gas (Biomethan) oder Wasserstoff nutzen:</p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Ab 2029:</strong> Mindestens 15 % erneuerbares Gas.</li>
        <li><strong>Ab 2035:</strong> Mindestens 30 % erneuerbares Gas.</li>
        <li><strong>Ab 2040:</strong> Mindestens 60 % erneuerbares Gas.</li>
      </ul>
      <p>Da Biomethan auf dem Markt extrem knapp und begehrt ist, prognostizieren Energieökonomen für grünes Gas Preise von über 22 ct/kWh, was den Betrieb einer Gastherme unbezahlbar machen wird.</p>
    `
  },
  {
    slug: "angebot-vergleichen",
    title: "Angebot Wärmepumpe: So lesen und vergleichen Sie richtig",
    metaTitle: "Wärmepumpen-Angebote richtig vergleichen | Ratgeber",
    metaDescription: "Wie vergleicht man Heizungsbauer-Angebote für eine Wärmepumpe? Leitfaden zu verdeckten Leistungslücken, Heizlastberechnung und Materialposten.",
    excerpt: "Ein detaillierter Leitfaden für Hauseigentümer, um Handwerkerangebote herstellerunabhängig zu prüfen und das beste Preis-Leistungs-Verhältnis zu finden.",
    date: "2026-05-28",
    readTime: "10 Min.",
    category: "Vergleich",
    emoji: "📋",
    image: "/images/blog/angebot-lesen.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">📋 Die 3 wichtigsten Prüfkriterien bei Angeboten:</strong>
        <ul class="list-disc pl-5 text-xs md:text-sm space-y-1">
          <li><strong>Leistungsausweis:</strong> Ist der hydraulische Abgleich nach Verfahren B explizit enthalten?</li>
          <li><strong>Schnittstellen:</strong> Wer übernimmt die Zählerarbeiten und den Netzanschluss?</li>
          <li><strong>Herstellerklausel:</strong> Bezieht sich das Angebot auf ein konkretes Modell oder enthält es Ausweichklauseln?</li>
        </ul>
      </div>

      <p>Liegt Ihnen der Kostenvoranschlag für eine Wärmepumpen-Installation vor, umfasst dieser meist mehrere Seiten voller technischer Artikelbeschreibungen und Pauschalen. Für Laien ist es schwer zu erkennen, ob das Angebot vollständig ist oder ob wichtige Leistungen fehlen. Dieser Guide hilft Ihnen beim systematischen Vergleich.</p>

      <h2>1. Die typischen Positionen im Detail-Check</h2>
      <p>Ein seriöses und vollständiges Angebot sollte folgende Positionen einzeln ausweisen:</p>
      <ul class="list-disc pl-5 space-y-2 text-xs md:text-sm mb-4">
        <li><strong>Wärmequellenanlage & Kältemittelleitungen:</strong> Verlegung der Leitungen zwischen Innen- und Außeneinheit inklusive Wanddurchführungen und Isolierung gegen Kondensatbildung.</li>
        <li><strong>Hydraulischer Abgleich nach Verfahren B:</strong> Dies erfordert eine raumweise Heizlastberechnung. Fehlt diese Angabe, erhalten Sie keine KfW-Zuschüsse!</li>
        <li><strong>Brauchwasser- und Pufferspeicher:</strong> Die Dimensionierung muss aufgeschlüsselt sein (z.B. Brauchwasser 300 Liter, Pufferspeicher 100 Liter).</li>
        <li><strong>Inbetriebnahme und Herstellereinweisung:</strong> Der Kundendienst des Herstellers prüft den Kältekreis und stellt die Regelungsparameter ein (wichtig für die Garantie).</li>
      </ul>

      <h2>2. Vorsicht vor 'bauseitigen Leistungen'</h2>
      <p>Achten Sie auf die Formulierung 'bauseits zu erbringen'. Dies sind Leistungen, die Sie selbst organisieren und gesondert bezahlen müssen. Typische Mogelpackungen:</p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><em>'Bauseitiges Betonfundament für das Außengerät.'</em> (Kostet extra beim Maurer: ~800 €)</li>
        <li><em>'Bauseitiger Elektroanschluss ab Zählerschrank.'</em> (Kostet extra beim Elektriker: ~1.500 €)</li>
        <li><em>'Bauseitiges Gerüst oder Hebezeug für die Dachmontage.'</em> (Kostet extra: ~600 €)</li>
      </ul>
    `
  },
  {
    slug: "waermepumpe-foerderung-2026",
    title: "Finanzierung Wärmepumpe: KfW-Kredit, Förderung und Ratenzahlung",
    metaTitle: "Wärmepumpe finanzieren | KfW-Kredit & Zuschüsse",
    metaDescription: "Wie finanziert man eine Wärmepumpe? KfW-Zuschuss 458, zinsgünstiger KfW-Ergänzungskredit 358 und Finanzierungsalternativen im Überblick.",
    excerpt: "Sichern Sie sich die optimale Finanzierung für den Heizungswechsel. Wir erklären den Ablauf beim KfW-Zuschuss und dem zinsgünstigen Modernisierungskredit.",
    date: "2026-05-30",
    readTime: "11 Min.",
    category: "Förderung",
    emoji: "🏛️",
    image: "/images/blog/finanzierung.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">🏛️ Das staatliche Förderpaket 2026:</strong>
        <p class="text-xs md:text-sm mt-1">Die Heizungsförderung der Kreditanstalt für Wiederaufbau (KfW) ermöglicht Zuschüsse von bis zu 70% der Gesamtkosten und bietet zusätzlich zinsgünstige Kredite zur Zwischenfinanzierung an.</p>
      </div>

      <p>Der Einbau einer hocheffizienten Wärmepumpe schont das Klima und senkt Ihre Heizkosten. Um die Anschaffungskosten abzufedern, stellt der deutsche Staat über die KfW erhebliche Fördermittel zur Verfügung. In diesem Guide erklären wir, wie Sie die Zuschüsse beantragen und welche Kreditalternativen existieren.</p>

      <h2>1. Die Förderbausteine des Programms KfW 458</h2>
      <p>Die Zuschussförderung setzt sich aus mehreren Modulen zusammen, die kombiniert werden können:</p>
      <ul class="list-disc pl-5 space-y-2 text-xs md:text-sm mb-4">
        <li><strong>Grundförderung (30%):</strong> Erhält jeder Eigentümer, der ein fossiles Heizsystem gegen eine Wärmepumpe tauscht.</li>
        <li><strong>Klimageschwindigkeits-Bonus (20%):</strong> Für selbstnutzende Eigentümer beim Austausch einer funktionierenden Öl-, Kohle-, Nachtspeicher- oder mind. 20 Jahre alten Gasheizung.</li>
        <li><strong>Einkommens-Bonus (30%):</strong> Für selbstnutzende Eigentümer mit einem zu versteuernden Haushaltseinkommen unter 40.000 € pro Jahr.</li>
        <li><strong>Effizienz-Bonus (5%):</strong> Bei Verwendung natürlicher Kältemittel (wie Propan R290).</li>
      </ul>
      <p class="text-xs text-gray-500 mb-4">
        * Der maximale Gesamtfördersatz ist auf 70% gedeckelt. Die förderfähigen Gesamtkosten liegen bei maximal 30.000 € für das erste Einfamilienhaus, woraus sich ein maximaler Zuschuss von <strong>21.000 €</strong> ergibt.
      </p>

      <h2>2. Zwischenfinanzierung mit dem KfW-Ergänzungskredit (Kredit 358/359)</h2>
      <p>Da der Zuschuss erst nach der Fertigstellung und Einreichung aller Handwerkerrechnungen ausgezahlt wird, müssen Sie die Kosten zunächst vorstrecken. Hierfür steht der KfW-Ergänzungskredit zur Verfügung:</p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Maximalbetrag:</strong> Bis zu 120.000 € Kreditvolumen pro Wohneinheit.</li>
        <li><strong>Zinsvorteil:</strong> Haushalte mit einem jährlichen zu versteuernden Einkommen unter 120.000 € erhalten einen vergünstigten Zinssatz.</li>
        <li><strong>Abwicklung:</strong> Der Kredit wird über Ihre Hausbank beantragt, sobald die Zuschusszusage der KfW vorliegt.</li>
      </ul>

      <h2>3. Steuerliche Alternative nach § 35c EStG</h2>
      <p>Haben Sie den rechtzeitigen Antrag im KfW-Portal vor Baubeginn versäumt? Als Alternative können Sie den Heizungstausch über drei Jahre steuerlich geltend machen. Sie erhalten **20 % der Gesamtkosten** (maximal 40.000 €) direkt von Ihrer Einkommensteuerschuld abgezogen. Voraussetzung ist, dass das Gebäude älter als 10 Jahre ist und selbst genutzt wird.</p>
    `
  },
  {
    slug: "luft-wasser-waermepumpe",
    title: "Luft-Wasser-Wärmepumpe: Monoblock vs. Split im Vergleich",
    metaTitle: "Luft-Wasser-Wärmepumpe: Monoblock vs. Split",
    metaDescription: "Was ist der Unterschied zwischen Monoblock- und Split-Wärmepumpe? Funktionsweise, Vorteile, Nachteile und Einbaukosten 2026 im Vergleich.",
    excerpt: "Monoblock- und Split-Systeme im detaillierten Vergleich: Erfahren Sie alles über Bauweisen, Vor- und Nachteile, Lärmschutz und Installationsaufwand.",
    date: "2026-05-15",
    readTime: "10 Min.",
    category: "Technik",
    emoji: "☘️",
    image: "/images/blog/luft-wasser-waermepumpe.png",
    content: `
      <div class="bg-[#ECEFF1] border-l-4 border-[#37474F] p-5 rounded-xl my-6">
        <strong class="text-sm md:text-base text-gray-900 block mb-2">⚡ Monoblock vs. Split auf einen glance:</strong>
        <ul class="list-disc pl-5 text-xs md:text-sm space-y-1">
          <li><strong>Monoblock-System:</strong> Der gesamte Kältekreislauf ist in der Außeneinheit verbaut. Nur wasserführende Leitungen führen ins Haus. Sehr leise und montagefreundlich.</li>
          <li><strong>Split-System:</strong> Der Kältekreislauf ist geteilt. Die Außeneinheit ist kompakter, die Inneneinheit beherbergt den Kondensator. Verbindung erfolgt über dünne Kältemittelleitungen (Kälteschein erforderlich).</li>
          <li><strong>Empfehlung 2026:</strong> Für die meisten Modernisierungen ist der Monoblock mit natürlichem Kältemittel Propan (R290) aufgrund der einfacheren Aufstellung und des besseren Schallschutzes die erste Wahl.</li>
        </ul>
      </div>

      <p>Wer sich für den Einbau einer Luft-Wasser-Wärmepumpe entscheidet, steht unweigerlich vor der Frage: Monoblock oder Split-System? Beide Bauweisen nutzen dieselbe physikalische Funktionsweise, unterscheiden sich jedoch grundlegend in Konstruktion, Installationsaufwand, Platzbedarf und Betriebssicherheit. In diesem Fachratgeber vergleichen wir beide Systeme im Detail.</p>

      <h2>1. Was ist ein Monoblock-System?</h2>
      <p>Bei der Monoblock-Wärmepumpe sind alle wesentlichen Komponenten (Verdampfer, Verdichter, Expansionsventil und Kondensator) in einem einzigen, witterungsbeständigen Außengehäuse untergebracht. Die Wärmeübertragung auf das Heizungswasser findet somit direkt in der Außeneinheit statt. Von dort aus führen zwei gut gedämmte Wasserrohre (Vor- und Rücklauf) durch die Hauswand direkt zum Pufferspeicher im Keller oder Hauswirtschaftsraum.</p>
      <p><strong>Vorteile:</strong></p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Kein Kälteschein erforderlich:</strong> Da der Kältekreislauf hermetisch geschlossen ab Werk geliefert wird, darf der Heizungsbauer das Gerät ohne externen Kältetechniker installieren.</li>
        <li><strong>Mehr Platz im Haus:</strong> Innen wird lediglich eine sehr kleine Hydraulikstation oder ein Kombispeicher benötigt.</li>
        <li><strong>Zukunftssicheres Kältemittel:</strong> Monoblock-Geräte können problemlos mit dem umweltfreundlichen Kältemittel Propan (R290) betrieben werden, da kein Kältemittel in den Innenraum gelangt.</li>
      </ul>
      <p><strong>Nachteile:</strong></p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Frostgefahr bei Stromausfall:</strong> Da die Wasserleitungen im Außenbereich liegen, können sie bei tagelangem Stromausfall im tiefsten Winter einfrieren (Frostschutzventile schaffen hier Abhilfe).</li>
        <li><strong>Große Außeneinheit:</strong> Das Gerät benötigt im Garten oder an der Hauswand deutlich mehr Stellfläche als ein Split-Außengerät.</li>
      </ul>

      <h2>2. Was ist ein Split-System?</h2>
      <p>Bei der Split-Wärmepumpe ist der Kältekreislauf aufgeteilt. In der Außeneinheit befinden sich der Ventilator, der Verdampfer und der Verdichter. Der Kondensator (Wärmeübertrager auf das Heizungswasser) ist in der Inneneinheit verbaut. Die beiden Einheiten sind über zwei dünne Kupferleitungen verbunden, in denen flüssiges bzw. gasförmiges Kältemittel zirkuliert.</p>
      <p><strong>Vorteile:</strong></p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Absolute Frostsicherheit:</strong> Im Außenbereich zirkuliert ausschließlich Kältemittel, welches auch bei extremen Minustemperaturen nicht einfriert. Ein Frostschutz-Entleerungssystem ist überflüssig.</li>
        <li><strong>Kompakte Außeneinheit:</strong> Die Außeneinheit ist wesentlich kleiner und leichter. Sie kann einfacher an Hauswänden oder auf Garagendächern montiert werden.</li>
        <li><strong>Große Leitungslängen möglich:</strong> Kältemittelleitungen überbrücken problemlos Entfernungen von bis zu 15 Metern zwischen Außen- und Inneneinheit ohne nennenswerte Wärmeverluste.</li>
      </ul>
      <p><strong>Nachteile:</strong></p>
      <ul class="list-disc pl-5 space-y-1 text-xs md:text-sm mb-4">
        <li><strong>Höhere Montagekosten:</strong> Die Installation und Inbetriebnahme erfordert zwingend einen zertifizierten Kältetechniker (Kälteschein Kategorie I), was die Lohnkosten erhöht.</li>
        <li><strong>Wiederkehrende Dichtheitsprüfungen:</strong> Je nach Füllmenge und Treibhauspotenzial des Kältemittels (GWP) ist eine jährliche Dichtheitsprüfung gesetzlich vorgeschrieben.</li>
      </ul>

      <h2>3. Direkter Vergleich der Systeme</h2>
      <table>
        <thead>
          <tr>
            <th>Eigenschaft</th>
            <th>Monoblock-Wärmepumpe</th>
            <th>Split-Wärmepumpe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Aufstellungsort Hauptkomponenten</strong></td>
            <td>Komplett Außen</td>
            <td>Geteilt (Außen & Innen)</td>
          </tr>
          <tr>
            <td><strong>Verbindungsleitung</strong></td>
            <td>Heizungswasser (Vor-/Rücklauf)</td>
            <td>Kältemittelleitung (Kupfer)</td>
          </tr>
          <tr>
            <td><strong>Kältetechnische Arbeiten</strong></td>
            <td>Nein (Hermetischer Kreis)</td>
            <td>Ja (Evakuieren, Befüllen, Bördeln)</td>
          </tr>
          <tr>
            <td><strong>Kältemittel Propan (R290)</strong></td>
            <td>Uneingeschränkt möglich</td>
            <td>Eingeschränkt (Sicherheitsauflagen für Innenräume)</td>
          </tr>
          <tr>
            <td><strong>Typische JAZ (Jahresarbeitszahl)</strong></td>
            <td>3.5 – 4.2</td>
            <td>3.4 – 3.9</td>
          </tr>
          <tr class="font-bold bg-[#E8F5E9]">
            <td>Durchschnittliche Einbaukosten (brutto)</td>
            <td>22.000 € – 32.000 €</td>
            <td>24.000 € – 35.000 €</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Fazit & Kaufempfehlung</h2>
      <p>Für die /Mehrheit der Hauseigentümer, die im Zuge einer Modernisierung von Gas oder Öl umsteigen, ist das **Monoblock-System** der klare Gewinner. Die einfache Installation durch den normalen Heizungsbauer spart Montagekosten. Zudem ermöglichen Monoblock-Geräte den Einsatz natürlicher Kältemittel wie Propan (R290), was vom Staat mit einem **zusätzlichen 5% Effizienz-Bonus** bei der KfW-Förderung belohnt wird. Ein Split-System ist hingegen die ideale Lösung bei sehr beengten Platzverhältnissen im Garten oder wenn lange Verbindungswege zum Keller überbrückt werden müssen.</p>
    `
  }
];
