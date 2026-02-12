/**
 * layoutPresets.js – Layout presety (architektura infografiky)
 * 
 * Ovlivňují POUZE:
 * - layout50 (rozvržení 50%)
 * - composition (kompozice)
 * - readingFlow (navigace očí – jen v detailní úrovni)
 * - sectionLogic (logika sekcí – jen v detailní úrovni)
 */

const LAYOUT_PRESETS = {
  standard_grid: {
    id: "standard_grid",
    label: "Standard Grid (3–5 bloků)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "18%",
      mainArea: "72%",
      footerArea: "10%",
      readingFlow: "Titulek nahoře → 3–5 bloků v mřížce → krátké shrnutí dole.",
      sectionLogic: "12sloupcový grid, bloky 2–4 sloupce, jasné oddělovače, velké okraje.",
    },
    imageStyle: {
      layout50: "Přehledná mřížka (12col), 3–5 obsahových bloků, velké negativní plochy, jasné zarovnání.",
      composition: "Max čitelnost: titulek dominuje, bloky jsou krátké, každý má vlastní mini-nadpis.",
    },
  },

  swiss_grid: {
    id: "swiss_grid",
    label: "Swiss Grid (přesná mřížka)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "20%",
      mainArea: "60%",
      footerArea: "20%",
      readingFlow: "Zleva doprava, silná typografická hierarchie, skenování po blocích.",
      sectionLogic: "Přísná baseline, asymetrické bloky, velké okraje, tenké linky jako oddělovače.",
    },
    imageStyle: {
      layout50: "Swiss grid: asymetrické bloky, přesné zarovnání, tenké linky, čisté plochy.",
      composition: "Důvěryhodnost: data a fakta ve striktních kartách; minimum dekoru.",
    },
  },

  timeline: {
    id: "timeline",
    label: "Timeline (vertikální časová osa)",
    layoutDefinition: {
      gridType: "timeline",
      headlineArea: "15%",
      mainArea: "75%",
      footerArea: "10%",
      readingFlow: "Shora dolů podél centrální osy, střídání bloků vlevo/vpravo.",
      sectionLogic: "Centrální linka, 5–7 uzlů s velkým číslem/rokem, každý uzel = 1 karta.",
    },
    imageStyle: {
      layout50: "Vertikální timeline se středovou osou, uzly s velkými čísly a krátkými kartami.",
      composition: "Jasná gradace: začátek → zlom → vyvrcholení → závěr; titulek nejvýš.",
    },
  },

  radial: {
    id: "radial",
    label: "Radial (střed + segmenty)",
    layoutDefinition: {
      gridType: "radial",
      headlineArea: "15%",
      mainArea: "75%",
      footerArea: "10%",
      readingFlow: "Od středu ven do 6–8 segmentů po směru hodinových ručiček.",
      sectionLogic: "Centrální kruh = hlavní koncept, kolem 6–8 segmentů = body, každý segment = 1 karta.",
    },
    imageStyle: {
      layout50: "Radiální kompozice: středový kruh + 6–8 segmentů, symetrie, jasné dělení.",
      composition: "Dominantní centrální titul + segmenty jako rychlé body; ideální pro modely/principy.",
    },
  },

  magazine: {
    id: "magazine",
    label: "Magazine (headline + 2 sloupce)",
    layoutDefinition: {
      gridType: "magazine",
      headlineArea: "20%",
      mainArea: "70%",
      footerArea: "10%",
      readingFlow: "Titulek → perex → 2sloupcové tělo + callouty.",
      sectionLogic: "Velký titulek, krátký perex, 2 sloupce, 1–2 zvýrazněné citace/callout boxy.",
    },
    imageStyle: {
      layout50: "Magazínové rozvržení: headline, perex, 2 sloupce, callouty, jasná typografická hierarchie.",
      composition: "Příběh a čitelnost: text je skenovatelný, callouty vytahují klíčové pointy.",
    },
  },

  dashboard: {
    id: "dashboard",
    label: "Dashboard (KPI pás + 2×2 grid)",
    layoutDefinition: {
      gridType: "dashboard",
      headlineArea: "10%",
      mainArea: "80%",
      footerArea: "10%",
      readingFlow: "Nejdřív KPI pás, pak 2×2 bloky, nakonec interpretace dole.",
      sectionLogic: "Horní KPI (3–5 metrik), střed 2×2 karty, dole krátké shrnutí/interpretace.",
    },
    imageStyle: {
      layout50: "Dashboard: KPI pás nahoře + 2×2 grid karet, jasné rámečky, UI estetika.",
      composition: "Rychlé pochopení: čísla → grafy → interpretace; titulek zůstává nejvýš.",
    },
  },

  research_poster: {
    id: "research_poster",
    label: "Research Poster (3 sloupce)",
    layoutDefinition: {
      gridType: "research",
      headlineArea: "15%",
      mainArea: "70%",
      footerArea: "15%",
      readingFlow: "Shora dolů, zleva doprava po sloupcích jako konferenční poster.",
      sectionLogic: "3 sloupce: Úvod / Metodika / Výsledky / Závěr, boxy pro grafy, KPI a shrnutí.",
    },
    imageStyle: {
      layout50: "Konferenční poster: 3 sloupce, jasné sekce, boxy pro grafy a závěry.",
      composition: "Akademická struktura: problém → metoda → data → závěr; závěr viditelně zvýraznit.",
    },
  },

  brutalist_poster: {
    id: "brutalist_poster",
    label: "Brutalist Poster (plakát + diagonály)",
    layoutDefinition: {
      gridType: "poster",
      headlineArea: "35%",
      mainArea: "55%",
      footerArea: "10%",
      readingFlow: "Obří titulek → diagonální bloky → krátké úderné body.",
      sectionLogic: "Titulek přes 1/3 plochy, 3–5 krátkých bloků v diagonálách, kontrastní plochy.",
    },
    imageStyle: {
      layout50: "Plakát: obří titulek, diagonální členění, kontrastní bloky, minimum textu.",
      composition: "Síla: hierarchie je agresivně jasná; žádné dlouhé odstavce, jen pointy.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // COUNTRY-THEMED LAYOUTS (architektura specifická pro jednotlivé země)
  // ═══════════════════════════════════════════════════════════════════════

  czech_cubism: {
    id: "czech_cubism",
    label: "Česko (Bohemian Cubism + Secese)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "18%",
      mainArea: "72%",
      footerArea: "10%",
      readingFlow: "Zřetelná hierarchie shora dolů, bloky se lámou do krystalických segmentů.",
      sectionLogic: "Krystalická mřížka (kubistické dělení), sekce jako mnohostěny, stabilní osy + diagonální hrany.",
    },
    imageStyle: {
      layout50: "Krystalická mnohostěnná kompozice, kubistické dělení sekcí, geometrická mřížka s ostrými hranami.",
      composition: "Dynamické krystalické dělení informací + jemné secesní křivky pro eleganci; titulek dominuje.",
    },
  },

  germany_bauhaus: {
    id: "germany_bauhaus",
    label: "Německo (Bauhaus Functional Grid)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "15%",
      mainArea: "75%",
      footerArea: "10%",
      readingFlow: "Přísná funkcionální logika: titulek → 3–4 primární bloky → krátké shrnutí.",
      sectionLogic: "12sloupcový Bauhaus grid, přísná geometrie, asymetrické bloky, žádné ozdoby.",
    },
    imageStyle: {
      layout50: "Bauhaus funkcionální grid: kruh/čtverec/trojúhelník, přísná geometrie, asymetrické bloky, 100% účelnost.",
      composition: "Forma = funkce: každý prvek má jasný důvod, hierarchie je absolutní, žádná dekorace.",
    },
  },

  france_art_deco_parisien: {
    id: "france_art_deco_parisien",
    label: "Francie (Art Déco Parisien)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "22%",
      mainArea: "68%",
      footerArea: "10%",
      readingFlow: "Elegance shora dolů: titul → perex → 2–3 bloky + finální klíč.",
      sectionLogic: "Symetrické bloky + Art Deco geometrie, tenké zlaté linky jako oddělovače, luxusní proporcevřešenost.",
    },
    imageStyle: {
      layout50: "Art Déco symetrie: chevron vzory, sunburst motivy, geometrické frízy, elegantní proporce (paříž 20. let).",
      composition: "Luxusní vyváženost: symetrie + geometrie, titulek jako klíč, každý blok má elegantní rám.",
    },
  },

  uk_british_editorial: {
    id: "uk_british_editorial",
    label: "Velká Británie (British Editorial)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "20%",
      mainArea: "70%",
      footerArea: "10%",
      readingFlow: "Novinová tradice: titul → perex → 2–3 sloupce s jasnou hierarchií → závěr.",
      sectionLogic: "Tradiční mřížka, disciplína jako Times/Guardian, 2–3 sloupce, jemné linky, důstojné proporce.",
    },
    imageStyle: {
      layout50: "British editorial: tradiční 2–3 sloupce, jemné rámy, engraving šrafování (střídmě), novinová autorita.",
      composition: "Důvěryhodnost + tradice: jasná hierarchie, text dominuje, malé ale výrazné akcenty.",
    },
  },

  usa_american_bold: {
    id: "usa_american_bold",
    label: "USA (American Bold Magazine)",
    layoutDefinition: {
      gridType: "magazine",
      headlineArea: "25%",
      mainArea: "65%",
      footerArea: "10%",
      readingFlow: "Odvážný headline → velký perex → 2 sloupce + callouty → klíčový závěr.",
      sectionLogic: "Magazínová dynamika: velký titul, 2 sloupce, boxy, citace, pop-art akcenty, vysoký kontrast.",
    },
    imageStyle: {
      layout50: "American bold magazine: obří headline, 2 sloupce, callouty, pop-art akcenty, dynamický rytmus.",
      composition: "Energie + svoboda: headline je král, callouty vytahují klíčové pointy, vysoký kontrast.",
    },
  },

  italy_renaissance: {
    id: "italy_renaissance",
    label: "Itálie (Renaissance Symmetry)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "18%",
      mainArea: "72%",
      footerArea: "10%",
      readingFlow: "Renesanční symetrie: centrální osa, bloky v harmonických proporcích, zlatý řez.",
      sectionLogic: "Symetrická mřížka inspirovaná renesanční architekturou, zlatý řez, centrální kompozice.",
    },
    imageStyle: {
      layout50: "Renaissance symetrie: zlatý řez, centrální osa, harmonické proporce, klasická elegance.",
      composition: "Harmonická dokonalost: symetrie, proporce, každý prvek má své místo, vizuální rovnováha.",
    },
  },

  spain_iberian_mosaic: {
    id: "spain_iberian_mosaic",
    label: "Španělsko (Iberian Mosaic)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "20%",
      mainArea: "70%",
      footerArea: "10%",
      readingFlow: "Mozaikový tok: titul → 3–5 bloků jako azulejo dlaždice → závěr.",
      sectionLogic: "Mozaikový grid: bloky jako dlaždice, organické křivky, středomořská barevnost, teplo.",
    },
    imageStyle: {
      layout50: "Iberská mozaika: bloky jako azulejo dlaždice, organické křivky, maurské vzory, středomořské teplo.",
      composition: "Barevnost + teplo: mozaikové dělení, organické tvary, rytmus jako flamenco.",
    },
  },

  austria_wiener_secession: {
    id: "austria_wiener_secession",
    label: "Rakousko (Wiener Secession)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "20%",
      mainArea: "70%",
      footerArea: "10%",
      readingFlow: "Secesní elegance: titul → symetrické bloky + ornamenty → závěr.",
      sectionLogic: "Vídeňská secese: geometrie + ornament, symetrie, zlaté akcenty, Klimt-inspirované dělení.",
    },
    imageStyle: {
      layout50: "Wiener Secession: geometrie + zlatý ornament, symetrické bloky, Klimt-inspirované vzory, elegance.",
      composition: "Ornament + geometrie: každý blok má zlatý rám, symetrie, secesní křivky jako akcenty.",
    },
  },

  greece_classical_frieze: {
    id: "greece_classical_frieze",
    label: "Řecko (Classical Frieze)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "15%",
      mainArea: "75%",
      footerArea: "10%",
      readingFlow: "Klasická posloupnost jako fríza: titul → sekvenční bloky → závěr.",
      sectionLogic: "Antická mřížka: bloky jako fríza, zlatý řez, sloupové dělení, klasické proporce.",
    },
    imageStyle: {
      layout50: "Classical frieze: horizontální sekvenční bloky, zlatý řez, sloupové dělení, antická elegance.",
      composition: "Klasická harmonie: proporce podle zlatého řezu, sekvence, titulek jako architráv.",
    },
  },

  cyprus_mediterranean_mosaic: {
    id: "cyprus_mediterranean_mosaic",
    label: "Kypr (Mediterranean Mosaic)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "20%",
      mainArea: "70%",
      footerArea: "10%",
      readingFlow: "Středomořský tok: titul → mozaikové bloky → závěr.",
      sectionLogic: "Středomořská mozaika: bloky jako antické dlaždice, teplé tóny, archeologická estetika.",
    },
    imageStyle: {
      layout50: "Mediterranean mosaic: bloky jako mozaikové dlaždice, archeologické vzory, středomořské teplo.",
      composition: "Starověké teplo: mozaikové dělení, teplé barvy, každý blok jako část velkého obrazu.",
    },
  },

  norway_fjord_nordic: {
    id: "norway_fjord_nordic",
    label: "Norsko (Fjord Nordic)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "20%",
      mainArea: "70%",
      footerArea: "10%",
      readingFlow: "Shora dolů, výrazná vertikální dynamika, vrstvené bloky jako útesy fjordu.",
      sectionLogic: "Čistý nordický grid + vertikální rytmus, sekce jako vrstvy (layering), hodně negativního prostoru.",
    },
    imageStyle: {
      layout50: "Vertikální rytmus stavkirke + vrstvení jako fjordové útesy, čistý minimalistický grid (Fjord Nordic).",
      composition: "Minimalismus + síla: málo prvků, jasná hierarchie, jeden dominantní titulek a čisté bloky.",
    },
  },

  sweden_scandinavian_clean: {
    id: "sweden_scandinavian_clean",
    label: "Švédsko (Scandinavian Clean)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "18%",
      mainArea: "72%",
      footerArea: "10%",
      readingFlow: "Čistá severská logika: titul → 3–4 bloky → závěr, maximální negativní prostor.",
      sectionLogic: "Skandinávský grid: čistota, jednoduchost, hodně vzduchu, funkční krása.",
    },
    imageStyle: {
      layout50: "Scandinavian clean: minimalistický grid, hodně negativního prostoru, funkční jednoduchost.",
      composition: "Lagom perfekce: dostatek prostoru, jasná hierarchie, žádné přebytečné prvky.",
    },
  },

  canada_northern_clean: {
    id: "canada_northern_clean",
    label: "Kanada (Northern Clean)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "18%",
      mainArea: "72%",
      footerArea: "10%",
      readingFlow: "Severská čistota: titul → 3–4 bloky → závěr, hodně prostoru.",
      sectionLogic: "Kanadský clean grid: čistota, prostor, funkčnost, příroda jako inspirace.",
    },
    imageStyle: {
      layout50: "Northern clean: minimalistický grid, přírodní inspirace, hodně negativního prostoru.",
      composition: "Čistota + prostor: jasná hierarchie, funkční krása, dostatek vzduchu.",
    },
  },

  brazil_tropical_modern: {
    id: "brazil_tropical_modern",
    label: "Brazílie (Tropical Modern)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "22%",
      mainArea: "68%",
      footerArea: "10%",
      readingFlow: "Tropická dynamika: velký titul → rytmické bloky → závěr.",
      sectionLogic: "Moderní brazilský grid: organické křivky + geometrie, rytmus, tropická energie.",
    },
    imageStyle: {
      layout50: "Tropical modern: organické křivky Niemeyera + geometrie, rytmická dynamika, tropická energie.",
      composition: "Energia + ritmo: organické tvary, dynamické bloky, barevná radost.",
    },
  },

  japan_zen_minimal: {
    id: "japan_zen_minimal",
    label: "Japonsko (Zen Minimal)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "15%",
      mainArea: "75%",
      footerArea: "10%",
      readingFlow: "Zen jednoduchost: titul → 2–3 bloky → ticho (negativní prostor).",
      sectionLogic: "Japonský minimal grid: ma (prostor), wabi-sabi estetika, asymetrie, maximální jednoduchost.",
    },
    imageStyle: {
      layout50: "Zen minimal: málo prvků, maximální prostor (ma), asymetrie, jednoduchost jako cíl.",
      composition: "Prázdnota jako hodnota: minimální prvky, maximální prostor, titulek + ticho.",
    },
  },

  china_ink_scroll: {
    id: "china_ink_scroll",
    label: "Čína (Ink Scroll)",
    layoutDefinition: {
      gridType: "timeline",
      headlineArea: "12%",
      mainArea: "78%",
      footerArea: "10%",
      readingFlow: "Vertikální svitek: titul → postupné odhalování sekcí shora dolů → závěr.",
      sectionLogic: "Čínský svitek: vertikální flow, kalligrafická elegance, postupné odhalování.",
    },
    imageStyle: {
      layout50: "Ink scroll: vertikální flow jako čínský svitek, kalligrafická elegance, postupné čtení.",
      composition: "Svitkový příběh: vertikální cesta, postupné odhalování, kalligrafická harmonie.",
    },
  },

  india_mandala_infographic: {
    id: "india_mandala_infographic",
    label: "Indie (Mandala Grid)",
    layoutDefinition: {
      gridType: "radial",
      headlineArea: "15%",
      mainArea: "75%",
      footerArea: "10%",
      readingFlow: "Od středu ven: centrální koncept → radiální segmenty → závěr.",
      sectionLogic: "Mandala grid: centrální symetrie, radiální segmenty, ornamentální harmonie.",
    },
    imageStyle: {
      layout50: "Mandala grid: radiální symetrie, centrální koncept, ornamentální segmenty, indická estetika.",
      composition: "Kosmická harmonie: střed jako základ, radiální rozložení, ornamentální krása.",
    },
  },

  egypt_papyrus_archaeology: {
    id: "egypt_papyrus_archaeology",
    label: "Egypt (Papyrus Archaeology)",
    layoutDefinition: {
      gridType: "timeline",
      headlineArea: "15%",
      mainArea: "75%",
      footerArea: "10%",
      readingFlow: "Sekvenční čtení jako hieroglyfy: titul → horizontální pás sekcí → závěr.",
      sectionLogic: "Papyrusový grid: horizontální pásy, hieroglyfická logika, archeologická estetika.",
    },
    imageStyle: {
      layout50: "Papyrus scroll: horizontální pásy jako starověký papyrus, hieroglyfická struktura.",
      composition: "Starověká moudrost: sekvenční pásy, archeologický dojem, titulek jako faraonský titul.",
    },
  },

  australia_oceanic_modern: {
    id: "australia_oceanic_modern",
    label: "Austrálie (Oceanic Modern)",
    layoutDefinition: {
      gridType: "12col",
      headlineArea: "20%",
      mainArea: "70%",
      footerArea: "10%",
      readingFlow: "Oceánský flow: titul → organické bloky → závěr, volný rytmus.",
      sectionLogic: "Moderní oceánský grid: organické tvary, volný flow, přírodní inspirace.",
    },
    imageStyle: {
      layout50: "Oceanic modern: organické bloky, aboriginální vzory (střídmě), moderní čistota, oceánský rytmus.",
      composition: "Volnost + příroda: organické flow, minimální omezení, oceánský rytmus.",
    },
  },
};

/**
 * Rozřízne text na věty (po . ! ?).
 */
function splitSentences(text) {
  const t = (text ?? "").trim();
  if (!t) return [];
  return t.split(/(?<=[.!?])\s+/g).map((s) => s.trim()).filter(Boolean);
}

/**
 * Přizpůsobí text úrovni detailu:
 * - minimalisticka: první věta (max 160 znaků)
 * - standardni:     celý text
 * - detailni:       celý text + volitelný rozšiřující doplněk
 */
function byDetail(text, level, addIfDetail) {
  const s = splitSentences(text);
  if (!s.length) return "";
  if (level === "minimalisticka") {
    const first = s[0];
    return first.length > 160 ? first.slice(0, 160).trimEnd() + "…" : first;
  }
  if (level === "standardni") {
    return text.trim();
  }
  // detailni
  const base = text.trim();
  const extra = (addIfDetail ?? "").trim();
  return extra ? `${base} ${extra}` : base;
}
