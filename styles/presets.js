/**
 * presets.js – čistě oddělené STYLE_PRESETS (estetika) a LAYOUT_PRESETS (architektura)
 *
 * STYLE_PRESETS:  tone, visualIdentity, imageStyle.motifs20/flagPattern10/realPhoto5, typography
 * LAYOUT_PRESETS: layoutDefinition, imageStyle.layout50/composition
 */

// ═══════════════════════════════════════════════════════════════════════
// STYLE PRESETS (estetika – dropdown „Styl vizuálu")
// ═══════════════════════════════════════════════════════════════════════

const STYLE_PRESETS = {

  // ═══════════════════════════════════════════════════════════════════════
  // _fallback (pro neznámé styly)
  // ═══════════════════════════════════════════════════════════════════════

  _fallback: {
    id: "_fallback",
    label: "Výchozí styl",
    tone: "Profesionální, čistý, moderní, přehledný.",
    visualIdentity: {
      backgroundColor: "#F7F7F7 (Off-White)",
      textColor: "#1A1A1A",
      accentColors: ["#2563EB", "#1A1A1A", "#FFFFFF"],
      colorConstraints: "Max 5 barev, 100% sytost, bez pastelů, vysoký kontrast.",
    },
    imageStyle: {
      motifs20: "Jemné geometrické linky, jednoduché ikonky, minimální dekorace.",
      flagPattern10: "Geometrické barevné akcenty integrované do designu (cca 10 %).",
      realPhoto5: "Jedna tematická fotografie, fotorealistická, cca 5 % plochy.",
    },
    typography: {
      heading: "Inter / sans-serif (podpora češtiny), výrazný řez",
      body: "Noto Sans (diakritika), vysoká čitelnost",
      display: "Space Grotesk (podpora češtiny) pro zvýraznění",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PRO
  // ═══════════════════════════════════════════════════════════════════════

  notion_kanban: {
    id: "notion_kanban",
    label: "Notion Kanban",
    tone: "Strukturovaný, produktivní, SaaS estetika, čistá organizace informací.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#37352F",
      accentColors: ["#2F80ED", "#6FCF97", "#EB5757"],
      colorConstraints: "Max 5 barev, 100% sytost akcentů, jemné šedé jako podpůrné, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Kanban sloupce, checkbox ikonky, card stíny, jemné tagy, minimální dekorace.",
      flagPattern10: "Barevné akcenty jako tagy a sloupce integrované do mřížky (cca 10 %).",
      realPhoto5: "Screenshot / UI mockup tematického nástroje, fotorealistický, cca 5 %.",
    },
    typography: {
      heading: "Inter (podpora češtiny), semibold, čistý",
      body: "Noto Sans (diakritika), vysoká čitelnost",
      display: "IBM Plex Mono (podpora češtiny) pro kódové štítky",
    },
  },

  dashboard_saas: {
    id: "dashboard_saas",
    label: "Dashboard SaaS",
    tone: "Datový, moderní, tmavá UI estetika, metriky a grafy na prvním místě.",
    visualIdentity: {
      backgroundColor: "#0F1117 (Dark UI)",
      textColor: "#FFFFFF",
      accentColors: ["#6C8CFF", "#46F7B7", "#FFA500"],
      colorConstraints: "Max 5 barev, vysoký kontrast na tmavém pozadí, 100% sytost akcentů, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Progress bary, KPI badge štítky, jemné ikonky metrik, gridové karty.",
      flagPattern10: "Barevné indikátory a akcentní linky integrované do UI karet (cca 10 %).",
      realPhoto5: "Malý thumbnail relevantního objektu v kartě, fotorealistický, cca 5 %.",
    },
    typography: {
      heading: "Inter (podpora češtiny), semibold",
      body: "Inter / Noto Sans (diakritika)",
      display: "Space Grotesk (podpora češtiny) pro KPI a velká čísla",
    },
  },

  ted_talk: {
    id: "ted_talk",
    label: "TED Talk",
    tone: "Prezentační, inspirativní, jasný a přesvědčivý, velké myšlenky v jednoduchém podání.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#1A1A1A",
      accentColors: ["#EB0028", "#000000", "#FFFFFF"],
      colorConstraints: "Max 4 barev, dominantní červená jako akcent (100% sytost), bez pastelů.",
    },
    imageStyle: {
      motifs20: "Velké citace, zvýrazněná čísla, minimální ale výrazné ikony, úderné pointy.",
      flagPattern10: "Červený akcentní pás / zvýraznění klíčových bodů (cca 10 %).",
      realPhoto5: "Fotografie řečníka nebo tematická scéna, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Montserrat (podpora češtiny), bold, velký",
      body: "Noto Sans (diakritika), čitelné odstavce",
      display: "Oswald (podpora češtiny) pro výrazné titulky",
    },
  },

  corporate_clean: {
    id: "corporate_clean",
    label: "Corporate Clean",
    tone: "Firemní, důvěryhodný, konzervativní elegance, profesionální komunikace.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#1A1A1A",
      accentColors: ["#003366", "#666666", "#FFFFFF"],
      colorConstraints: "Max 5 barev, tlumená modrá/šedá, 100% sytost akcentů, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Jemné linky, profesionální ikony, grafy, diskrétní grafické prvky.",
      flagPattern10: "Korporátní barevné pruhy v záhlaví/zápatí (cca 10 %).",
      realPhoto5: "Firemní fotografie / kancelářská scéna, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Source Serif Pro (podpora češtiny), důstojný serif",
      body: "Noto Sans (diakritika), profesionální čitelnost",
      display: "Inter (podpora češtiny) pro štítky a čísla",
    },
  },

  swiss_grid_style: {
    id: "swiss_grid_style",
    label: "Swiss Grid",
    tone: "Přesný, racionální, švýcarská typografická tradice, mezinárodní modernismus.",
    visualIdentity: {
      backgroundColor: "#F7F7F7 (Off-White)",
      textColor: "#1A1A1A",
      accentColors: ["#000000", "#D7141A", "#FFFFFF"],
      colorConstraints: "Max 5 barev, vysoký kontrast, 100% sytost akcentů, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Jemné geometrické linky, tenké dělící čáry, ikonky v jednotné tloušťce, žádné ornamenty.",
      flagPattern10: "Tenké barevné akcentní pruhy / rohové značky integrované do mřížky (cca 10 %).",
      realPhoto5: "Jedna čistá tematická fotka, fotorealistická, cca 5 %, bez rušivého pozadí.",
    },
    typography: {
      heading: "Inter / Helvetica-like (podpora češtiny), výrazná velikost a řez",
      body: "Inter / Noto Sans (diakritika), vysoká čitelnost",
      display: "IBM Plex Sans (podpora češtiny) pro čísla a KPI",
    },
  },

  data_report: {
    id: "data_report",
    label: "Data Report",
    tone: "Analytický, věcný, zaměřený na čísla, vizualizace dat a závěry.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#1A1A1A",
      accentColors: ["#11457E", "#2ECC71", "#E74C3C"],
      colorConstraints: "Max 5 barev, 100% sytost, jasné rozlišení datových řad, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Mini grafy, sparklines, callout boxy, tabulkové prvky, jemné oddělovače.",
      flagPattern10: "Barevné štítky a indikátory v datech (cca 10 %).",
      realPhoto5: "Fotografie relevantního datového zdroje / objektu, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Source Sans Pro (podpora češtiny), přehledný",
      body: "Noto Sans (diakritika), tabulková čitelnost",
      display: "IBM Plex Sans Condensed (podpora češtiny) pro čísla v grafech",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // FUN
  // ═══════════════════════════════════════════════════════════════════════

  lego_style: {
    id: "lego_style",
    label: "Lego Style",
    tone: "Hravý, barevný, stavebnicový, radostný, primární barvy.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#1A1A1A",
      accentColors: ["#D01012", "#0057A6", "#FED700"],
      colorConstraints: "Max 5 barev, primární barvy 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Blokové studded tvary, primární barevné plochy, jednoduché figurky, pixelové ikonky.",
      flagPattern10: "Barevné bloky jako konstrukční akcent (cca 10 %).",
      realPhoto5: "Fotografie tematického Lego modelu, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Fredoka One / Poppins (podpora češtiny), hravé bold",
      body: "Noto Sans (diakritika), čitelné",
      display: "Lilita One (podpora češtiny) pro výrazné titulky",
    },
  },

  gamified: {
    id: "gamified",
    label: "Gamified",
    tone: "Herní, motivační, XP a achievementy, engagement mechaniky.",
    visualIdentity: {
      backgroundColor: "#1A0A2E (Deep Purple)",
      textColor: "#FFFFFF",
      accentColors: ["#9B59B6", "#2ECC71", "#F39C12"],
      colorConstraints: "Max 5 barev, neonové akcenty 100% sytost, tmavé pozadí, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Badge štítky, XP bary, hvězdičky, levely, achievement rámečky.",
      flagPattern10: "Herní akcenty a barevné indikátory v progress prvcích (cca 10 %).",
      realPhoto5: "Tematický herní screenshot / objekt, fotorealistický, cca 5 %.",
    },
    typography: {
      heading: "Poppins (podpora češtiny), bold, energické",
      body: "Noto Sans (diakritika)",
      display: "Bangers (podpora češtiny) pro skóre a levely",
    },
  },

  comic_book: {
    id: "comic_book",
    label: "Comic Book",
    tone: "Komiksový, dynamický, akční, pop kultura, výrazné kontury.",
    visualIdentity: {
      backgroundColor: "#FFFDE7 (Light Yellow)",
      textColor: "#1A1A1A",
      accentColors: ["#FF0000", "#0000FF", "#FFFF00"],
      colorConstraints: "Max 5 barev, primární barvy 100% sytost, extrémní kontrast, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Silné černé kontury, halftone tečky (střídmě), bubliny, akční čáry, POW/BAM efekty.",
      flagPattern10: "Komiksové barevné plochy jako panelové akcenty (cca 10 %).",
      realPhoto5: "Komiksově stylizovaná fotografie, fotorealistický základ, cca 5 %.",
    },
    typography: {
      heading: "Bangers (podpora češtiny), komiksový bold",
      body: "Noto Sans (diakritika), čitelné v bublinách",
      display: "Permanent Marker (podpora češtiny) pro zvukové efekty",
    },
  },

  urban_graffiti: {
    id: "urban_graffiti",
    label: "Urban Graffiti",
    tone: "Uliční, surový, underground, energický, street art estetika.",
    visualIdentity: {
      backgroundColor: "#1A1A1A (Dark)",
      textColor: "#FFFFFF",
      accentColors: ["#FF4081", "#00E5FF", "#FFEA00"],
      colorConstraints: "Max 5 barev, neonové akcenty 100% sytost, tmavé pozadí, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Spray paint textura, dripping efekty, tag styly, raw hrany, stencil motivy.",
      flagPattern10: "Graffiti barevné pruhy / stencil akcenty (cca 10 %).",
      realPhoto5: "Urban fotografie zdi / ulice, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Permanent Marker (podpora češtiny), raw styl",
      body: "Noto Sans (diakritika), čitelné na tmavém",
      display: "Rubik Mono One (podpora češtiny) pro bold blocky",
    },
  },

  pop_art: {
    id: "pop_art",
    label: "Pop Art",
    tone: "Warholovský, masová kultura, vysoký kontrast, výrazné opakování.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#000000",
      accentColors: ["#FF1744", "#2979FF", "#FFEA00"],
      colorConstraints: "Max 5 barev, primární barvy 100% sytost, extrémní kontrast, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Benday dots (střídmě), bold outlines, repetitivní vzory, pop ikony.",
      flagPattern10: "Kontrastní barevné plochy jako grafický akcent (cca 10 %).",
      realPhoto5: "Pop-art stylizovaná fotografie, fotorealistický základ, cca 5 %.",
    },
    typography: {
      heading: "Anton (podpora češtiny), ultra bold",
      body: "Noto Sans (diakritika)",
      display: "Archivo Black (podpora češtiny) pro výrazné titulky",
    },
  },

  retro_arcade: {
    id: "retro_arcade",
    label: "Retro Arcade",
    tone: "8-bitový, retro herní, pixelový, nostalgický, neonový.",
    visualIdentity: {
      backgroundColor: "#0A0A0A (Black)",
      textColor: "#FFFFFF",
      accentColors: ["#FF00FF", "#00FFFF", "#00FF00"],
      colorConstraints: "Max 5 barev, neonové barvy 100% sytost, tmavé pozadí, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Pixel grid, scanlines (jemně), 8-bit ikonky, neonové záře, joystick/coin motivy.",
      flagPattern10: "Neonové barevné pruhy jako retro dekorace (cca 10 %).",
      realPhoto5: "Retro herní automat / konzole, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Press Start 2P (podpora češtiny), pixel font",
      body: "Noto Sans (diakritika), moderní čitelnost",
      display: "VT323 (podpora češtiny) pro skóre a čísla",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ART
  // ═══════════════════════════════════════════════════════════════════════

  da_vinci_sketch: {
    id: "da_vinci_sketch",
    label: "Da Vinci Sketch",
    tone: "Renesanční skica, anatomický, vynálezecký, studijní, Da Vinciho poznámky.",
    visualIdentity: {
      backgroundColor: "#F2E8D0 (Parchment)",
      textColor: "#3E2A1F",
      accentColors: ["#8B4513", "#4A4A4A", "#C8A26E"],
      colorConstraints: "Max 5 barev, sepia tóny, 100% sytost akcentů, zemité, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Ruční kresby, anatomické studie, technické poznámky, sepia linky, zrcadlové písmo.",
      flagPattern10: "Sepia geometrické akcenty v rámech skic (cca 10 %).",
      realPhoto5: "Detail renesanční kresby / materiálu, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "EB Garamond (podpora češtiny), renesanční serif",
      body: "Noto Serif (diakritika), klasická čitelnost",
      display: "Cormorant (podpora češtiny) pro popisky studií",
    },
  },

  risograph: {
    id: "risograph",
    label: "Risograph",
    tone: "Offset tisk, zrnitá textura, omezená paleta, indie estetika, risografická.",
    visualIdentity: {
      backgroundColor: "#F5F0E8 (Cream)",
      textColor: "#1A1A1A",
      accentColors: ["#FF6B6B", "#4ECDC4", "#2C3E50"],
      colorConstraints: "Max 4 barev, překryvné barvy, 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Zrnitá textura, překryvné barevné vrstvy, registrační značky, tiskové artefakty.",
      flagPattern10: "Překryvné barevné plochy jako dekorativní prvek (cca 10 %).",
      realPhoto5: "Risograficky stylizovaná fotografie, fotorealistický základ, cca 5 %.",
    },
    typography: {
      heading: "Space Mono (podpora češtiny), mono styl",
      body: "Noto Sans (diakritika)",
      display: "DM Mono (podpora češtiny) pro popisky",
    },
  },

  paper_cutout: {
    id: "paper_cutout",
    label: "Paper Cutout",
    tone: "Papírový, vrstvený, řemeslný, teplý, koláž z vystřihovaného papíru.",
    visualIdentity: {
      backgroundColor: "#FAF3E0 (Kraft)",
      textColor: "#2C2C2C",
      accentColors: ["#E74C3C", "#3498DB", "#F39C12"],
      colorConstraints: "Max 5 barev, výrazné barvy papíru, 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Vrstvy papíru se stíny, textura kartonu, trhané okraje, lepicí páska.",
      flagPattern10: "Barevné papírové pruhy jako dekorativní vrstva (cca 10 %).",
      realPhoto5: "Fotografie papírového řemesla / textury, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Fredoka One (podpora češtiny), hravý zaoblený",
      body: "Noto Sans (diakritika), čitelné na textuře",
      display: "Lilita One (podpora češtiny) pro výrazné titulky",
    },
  },

  wes_anderson: {
    id: "wes_anderson",
    label: "Wes Anderson",
    tone: "Symetrický, quirky, pečlivá filmová estetika, kontrolovaná podivnost.",
    visualIdentity: {
      backgroundColor: "#FDF0D5 (Warm Cream)",
      textColor: "#2C2C2C",
      accentColors: ["#C1666B", "#48A9A6", "#E4B363"],
      colorConstraints: "Max 5 barev, sytost 100 %, teplé a chladné v kontrastu, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Symetrické kompozice, retro detaily, jemné vzory, hotel/vlak/pošta motivy.",
      flagPattern10: "Symetrické barevné rámečky jako dekorativní motiv (cca 10 %).",
      realPhoto5: "Symetricky komponovaná fotografie, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Futura / Poppins (podpora češtiny), geometrický sans",
      body: "Noto Sans (diakritika), čitelné",
      display: "Josefin Sans (podpora češtiny) pro štítky a popisky",
    },
  },

  akvarel: {
    id: "akvarel",
    label: "Akvarel",
    tone: "Akvarelový, umělecký, přírodní, měkký ale sytý, malířský.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#2C3E50",
      accentColors: ["#5B8C85", "#D4956B", "#8E6C88"],
      colorConstraints: "Max 5 barev, inspirováno akvarelem ale v plné sytosti (100 %), bez bledých pastelů.",
    },
    imageStyle: {
      motifs20: "Akvarelové textury, barevné skvrny, organické tvary, kapky, měkké přechody.",
      flagPattern10: "Akvarelové barevné pruhy jako organický dekor (cca 10 %).",
      realPhoto5: "Přírodní fotografie s akvarelovou estetikou, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Playfair Display (podpora češtiny), elegantní serif",
      body: "Noto Serif (diakritika), měkká čitelnost",
      display: "Cormorant (podpora češtiny) pro dekorativní titulky",
    },
  },

  bauhaus: {
    id: "bauhaus",
    label: "Bauhaus",
    tone: "Bauhaus, geometrie, funkcionalismus, primární barvy, modernismus, forma = funkce.",
    visualIdentity: {
      backgroundColor: "#F5F5F5 (Neutral)",
      textColor: "#111111",
      accentColors: ["#E53935", "#1E88E5", "#FDD835"],
      colorConstraints: "Max 5 barev, primární akcenty 100% sytost, bez pastelů, vysoký kontrast.",
    },
    imageStyle: {
      motifs20: "Kruh/čtverec/trojúhelník, přísná geometrie, piktogramy, žádné ornamenty.",
      flagPattern10: "Primární barevné bloky jako Bauhaus akcent (cca 10 %).",
      realPhoto5: "Fotografie modernistické architektury / designu, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Inter / Helvetica-like (podpora češtiny), tučné a strohé",
      body: "Noto Sans (diakritika), čitelné odstavce",
      display: "IBM Plex Sans Condensed (podpora češtiny) pro čísla",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // TECH
  // ═══════════════════════════════════════════════════════════════════════

  wireframe: {
    id: "wireframe",
    label: "Wireframe",
    tone: "Drátěný model, prototyp, UX skica, strukturální, šedé zóny.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#333333",
      accentColors: ["#0D99FF", "#999999", "#FFFFFF"],
      colorConstraints: "Max 4 barev, šedé + jeden modrý akcent 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Čárkované okraje, placeholder boxy, UX anotace, šedé zóny, křížkové výplně.",
      flagPattern10: "Modrý akcentní prvek jako wireframe highlight (cca 10 %).",
      realPhoto5: "Screenshot UI prototypu, fotorealistický, cca 5 %.",
    },
    typography: {
      heading: "Inter (podpora češtiny), medium weight",
      body: "Noto Sans (diakritika), wireframe styl",
      display: "Source Code Pro (podpora češtiny) pro anotace",
    },
  },

  neon_dark: {
    id: "neon_dark",
    label: "Neon Dark",
    tone: "Neonový, futuristický, temný, zářivý, cyberpunk estetika.",
    visualIdentity: {
      backgroundColor: "#0A0A14 (Deep Dark)",
      textColor: "#FFFFFF",
      accentColors: ["#FF00FF", "#00FF88", "#00BFFF"],
      colorConstraints: "Max 5 barev, neonové akcenty 100% sytost, tmavé pozadí, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Neonové glow linky, světelné efekty, tmavé panely, gradientní záře, cyber prvky.",
      flagPattern10: "Neonové pruhy / glow akcenty (cca 10 %).",
      realPhoto5: "Neonově osvětlená scéna, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Inter (podpora češtiny), bold, s glow efektem",
      body: "Noto Sans (diakritika), vysoký kontrast",
      display: "Space Grotesk (podpora češtiny) pro neonové titulky",
    },
  },

  futurist_hud: {
    id: "futurist_hud",
    label: "Futurist HUD",
    tone: "Futuristický, holografický, HUD interface, sci-fi, datové vrstvy.",
    visualIdentity: {
      backgroundColor: "#050B15 (Space Dark)",
      textColor: "#FFFFFF",
      accentColors: ["#00E5FF", "#FF6F00", "#76FF03"],
      colorConstraints: "Max 5 barev, HUD akcenty 100% sytost, tmavé pozadí, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Tenké HUD linky, kruhy a oblouky, datové overlay, radar/sonar motivy.",
      flagPattern10: "HUD barevné indikátory a markery (cca 10 %).",
      realPhoto5: "Sci-fi vizualizace / technologická scéna, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Rajdhani / Inter (podpora češtiny), technický řez",
      body: "Noto Sans (diakritika), HUD čitelnost",
      display: "Orbitron (podpora češtiny) pro datové štítky",
    },
  },

  london_metro: {
    id: "london_metro",
    label: "London Metro",
    tone: "Mapový systém, navigační, jasný a přehledný, britský transit design.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#1A1A1A",
      accentColors: ["#E32017", "#003688", "#FFC80A"],
      colorConstraints: "Max 5 barev, signalizační barvy 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Roundel tvary, barevné linky, uzly a spoje, mapové prvky, jasné značení.",
      flagPattern10: "Barevné linky jako navigační prvky (cca 10 %).",
      realPhoto5: "Fotografie dopravního systému / stanice, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Johnston / Poppins (podpora češtiny), kulaté tvary",
      body: "Noto Sans (diakritika), jasná čitelnost",
      display: "Inter (podpora češtiny) pro stanice a štítky",
    },
  },

  blueprint: {
    id: "blueprint",
    label: "Blueprint",
    tone: "Technický výkres, inženýrský, přesný, konstrukční, modré schéma.",
    visualIdentity: {
      backgroundColor: "#1B3A5C (Blueprint Blue)",
      textColor: "#FFFFFF",
      accentColors: ["#FFFFFF", "#87CEEB", "#FFD700"],
      colorConstraints: "Max 5 barev, bílé linky na modrém, 100% sytost akcentů, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Technické čáry, kóty, šrafování, strojní detaily, kompas značky.",
      flagPattern10: "Bílé / zlaté technické značky jako akcentní dekor (cca 10 %).",
      realPhoto5: "Technická fotografie stroje / stavby, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Source Code Pro (podpora češtiny), technický mono",
      body: "Noto Sans (diakritika), čitelné na modrém pozadí",
      display: "IBM Plex Mono (podpora češtiny) pro kóty a čísla",
    },
  },

  minimal_ui: {
    id: "minimal_ui",
    label: "Minimal UI",
    tone: "Minimalistický, iOS/Material estetika, čistý a vzdušný, funkční krása.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#1A1A1A",
      accentColors: ["#007AFF", "#1A1A1A", "#F2F2F7"],
      colorConstraints: "Max 4 barev, jeden akcentní (100% sytost), zbytek neutrální, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Zaoblené rohy, jemné stíny, single-accent prvky, velký negativní prostor.",
      flagPattern10: "Akcentní barevný prvek jako UI highlight (cca 10 %).",
      realPhoto5: "Minimalistická produktová fotografie, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "SF Pro / Inter (podpora češtiny), čistý moderní",
      body: "Noto Sans (diakritika), iOS čitelnost",
      display: "Inter (podpora češtiny) pro štítky",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SPECIAL
  // ═══════════════════════════════════════════════════════════════════════

  vintage_poster: {
    id: "vintage_poster",
    label: "Vintage Poster",
    tone: "Retro plakát, Art Nouveau vliv, nostalgický, reklamní, zestárlá elegance.",
    visualIdentity: {
      backgroundColor: "#F5E6CA (Aged Paper)",
      textColor: "#2C1810",
      accentColors: ["#C0392B", "#D4A762", "#1A5276"],
      colorConstraints: "Max 5 barev, teplé retro tóny 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Ornamentální rámy, vintage typografie, zestárlá textura, Art Nouveau křivky.",
      flagPattern10: "Vintage barevné pásy / ornamentální okraje (cca 10 %).",
      realPhoto5: "Sepia-stylizovaná fotografie, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Playfair Display (podpora češtiny), vintage serif",
      body: "Noto Serif (diakritika), retro čitelnost",
      display: "Abril Fatface (podpora češtiny) pro výrazné titulky",
    },
  },

  claymation: {
    id: "claymation",
    label: "Claymation",
    tone: "Hliněný, stop-motion, teplý, hmatový, 3D plastelínový dojem.",
    visualIdentity: {
      backgroundColor: "#F0E6D3 (Clay)",
      textColor: "#2C2C2C",
      accentColors: ["#E67E22", "#27AE60", "#8E44AD"],
      colorConstraints: "Max 5 barev, zemité + výrazné akcenty 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Clay/plastelín textura, zaoblené tvary, měkké stíny, hravé figurky.",
      flagPattern10: "Hliněné barevné bloky jako dekorace (cca 10 %).",
      realPhoto5: "Fotografie clayového modelu / stop-motion scéna, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Fredoka One (podpora češtiny), zaoblený hravý",
      body: "Noto Sans (diakritika), čitelné",
      display: "Bubblegum Sans (podpora češtiny) pro titulky",
    },
  },

  collage_papier: {
    id: "collage_papier",
    label: "Collage Papier",
    tone: "Koláž, mixed media, surreální kombinace, cut & paste, alternativní.",
    visualIdentity: {
      backgroundColor: "#E8D5B7 (Kraft Paper)",
      textColor: "#1A1A1A",
      accentColors: ["#D35400", "#2980B9", "#8E44AD"],
      colorConstraints: "Max 5 barev, výrazné akcenty 100% sytost, smíšené textury, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Trhané papírové okraje, washi tape, smíšené textury, razítka, lepidlo stopy.",
      flagPattern10: "Kolážové barevné výstřižky jako dekorace (cca 10 %).",
      realPhoto5: "Fotografie koláže / textury, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Special Elite (podpora češtiny), psací stroj",
      body: "Noto Sans (diakritika), kontrastní čitelnost",
      display: "Courier Prime (podpora češtiny) pro popisky",
    },
  },

  mind_map_marker: {
    id: "mind_map_marker",
    label: "Mind Map Marker",
    tone: "Ruční, brainstorming, barevné fixy, myšlenková mapa, kreativní chaos.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#1A1A1A",
      accentColors: ["#E74C3C", "#2ECC71", "#3498DB"],
      colorConstraints: "Max 5 barev, výrazné markery 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Ruční kruhy, šipky, podtrhání, zvýrazňovač, tečkované spoje, post-it.",
      flagPattern10: "Barevné zvýrazňovače jako dekorativní akcent (cca 10 %).",
      realPhoto5: "Fotografie whiteboard brainstormingu, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Caveat (podpora češtiny), ruční písmo",
      body: "Noto Sans (diakritika), čitelné vedle ručního",
      display: "Patrick Hand (podpora češtiny) pro popisky uzlů",
    },
  },

  natural_sketch: {
    id: "natural_sketch",
    label: "Natural Sketch",
    tone: "Přírodní skica, botanický, tužkový, organický, jemně kresebný.",
    visualIdentity: {
      backgroundColor: "#FAF8F0 (Natural)",
      textColor: "#3C3C3C",
      accentColors: ["#558B2F", "#795548", "#607D8B"],
      colorConstraints: "Max 5 barev, zemité přírodní tóny 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Tužkové kresby, botanické ilustrace, přírodní textury, listy a větvičky.",
      flagPattern10: "Přírodní barevné akcenty v kresbách (cca 10 %).",
      realPhoto5: "Přírodní fotografie rostliny / krajiny, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "EB Garamond (podpora češtiny), přírodní serif",
      body: "Noto Serif (diakritika), měkká čitelnost",
      display: "Caveat (podpora češtiny) pro kresebné popisky",
    },
  },

  avant_garde: {
    id: "avant_garde",
    label: "Avant-Garde",
    tone: "Experimentální, průkopnický, konceptuální, překvapivý, anti-konvence.",
    visualIdentity: {
      backgroundColor: "#FFFFFF (White)",
      textColor: "#000000",
      accentColors: ["#FF0000", "#000000", "#0000FF"],
      colorConstraints: "Max 4 barev, extrémní kontrast, 100% sytost, bez pastelů.",
    },
    imageStyle: {
      motifs20: "Asymetrické tvary, deformace, experimentální kompozice, neočekávané kontrasty.",
      flagPattern10: "Kontrastní geometrické bloky jako provokativní akcent (cca 10 %).",
      realPhoto5: "Abstraktní fotografie / experiment, fotorealistická, cca 5 %.",
    },
    typography: {
      heading: "Oswald (podpora češtiny), úderný condensed",
      body: "Noto Sans (diakritika), čistý kontrast",
      display: "Space Grotesk (podpora češtiny) pro výrazné displaye",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // KULTURNÍ / NATIONAL
  // ═══════════════════════════════════════════════════════════════════════

  nordic: {
    id: "nordic",
    label: "Nordic Clean (severský minimalismus)",
    tone: "Severská čistota, minimalismus, klid, přesnost, světlo, sportovní funkčnost.",
    visualIdentity: {
      backgroundColor: "#F5F5F5 (Nordic)",
      textColor: "#1A1A1A",
      accentColors: ["#006AA7", "#FECC00", "#FFFFFF"],
      colorConstraints: "Max 5 barev, akcenty 100% sytost, bez pastelů, hodně negativního prostoru.",
    },
    imageStyle: {
      motifs20: "Minimalistické ikonky, jemné linky, čisté plochy, střídmé geometrické akcenty.",
      flagPattern10: "Vlajkové barvy integrovat jako mřížkové dělení/pásy/štítky (cca 10 %), ne vkládat vlajku.",
      realPhoto5: "Jedna čistá fotorealistická fotka relevantního objektu/místa (cca 5 %), bez rušivého pozadí.",
    },
    typography: {
      heading: "Poppins / Inter (podpora češtiny) – čistý sans",
      body: "Noto Sans (diakritika) – vysoká čitelnost",
      display: "Fjalla One / Space Grotesk (podpora češtiny) – stručný akcent",
    },
  },

  art_deco: {
    id: "art_deco",
    label: "Art Déco (elegance + zlato)",
    tone: "Elegance, vytříbenost, geometrický luxus, Art Deco, noblesa, řád.",
    visualIdentity: {
      backgroundColor: "#F7F3E9 (Crème)",
      textColor: "#1A1A1A",
      accentColors: ["#002395", "#ED2939", "#C9B037"],
      colorConstraints: "Max 5 barev, výrazné akcenty 100% sytost, bez pastelů, zlato jen jako akcent.",
    },
    imageStyle: {
      motifs20: "Sunburst, chevron, geometrické frízy, vějířové tvary, tenké zlaté linky.",
      flagPattern10: "Trikolóru integrovat jako pásy/rámy/mřížku (cca 10 %), ne vkládat vlajku.",
      realPhoto5: "Jedna fotorealistická ikonická dominanta (cca 5 %), čistý editorial ořez.",
    },
    typography: {
      heading: "Didot / Playfair Display (podpora češtiny) – elegantní serif",
      body: "EB Garamond (diakritika) – klasická čitelnost",
      display: "Cormorant (podpora češtiny) – dekorativní akcent",
    },
  },

  cubism_cz: {
    id: "cubism_cz",
    label: "Czech Cubism (krystalická geometrie)",
    tone: "Český kubismus, krystalické hrany, secesní elegance, kulturní hloubka, výrazná geometrie.",
    visualIdentity: {
      backgroundColor: "#F5F0E8 (Cream)",
      textColor: "#1A1A1A",
      accentColors: ["#11457E", "#D7141A", "#FFFFFF"],
      colorConstraints: "Max 5 barev, 100% sytost akcentů, bez pastelů, ostré kontrasty.",
    },
    imageStyle: {
      motifs20: "Krystalické mnohostěny, prizma vzory, jemné secesní křivky, lesk českého skla (střídmě).",
      flagPattern10: "Modrý trojúhelník jako dělicí prvek, bílo-červené pásy jako header/footer (cca 10 %).",
      realPhoto5: "Pražský hrad / Karlův most – fotorealisticky, cca 5 %.",
    },
    typography: {
      heading: "Playfair Display (podpora češtiny) – důstojný serif",
      body: "Noto Serif (diakritika) – čitelné odstavce",
      display: "Josefin Sans (podpora češtiny) – geometrický moderní akcent",
    },
  },

  british_editorial: {
    id: "british_editorial",
    label: "British Editorial (novinová autorita)",
    tone: "Tradice, novinová autorita, disciplína, důstojnost, čitelnost, řád.",
    visualIdentity: {
      backgroundColor: "#F2E8D5 (Parchment)",
      textColor: "#1D1D1B (Ink)",
      accentColors: ["#012169", "#C8102E", "#FFFFFF"],
      colorConstraints: "Max 5 barev, 100% sytost akcentů, bez pastelů, staropapírový dojem.",
    },
    imageStyle: {
      motifs20: "Jemné rámy, engraving šrafování, rozety a scroll motivy (velmi střídmě).",
      flagPattern10: "Diagonály jako součást rámu/mřížky (cca 10 %), ne vkládat vlajku.",
      realPhoto5: "Ikonická dominanta města – fotorealisticky, cca 5 %.",
    },
    typography: {
      heading: "Baskerville / Playfair Display (podpora češtiny)",
      body: "Times New Roman / Noto Serif (diakritika)",
      display: "Gill Sans / Inter (podpora češtiny) – štítky",
    },
  },

  american_bold: {
    id: "american_bold",
    label: "American Bold (magazínová energie)",
    tone: "Odvážné headline, dynamika, energie, svoboda, magazínový rytmus, vysoký kontrast.",
    visualIdentity: {
      backgroundColor: "#F4F0E8 (Paper)",
      textColor: "#1C1C1C",
      accentColors: ["#B31942", "#0A3161", "#FFFFFF"],
      colorConstraints: "Max 5 barev, 100% sytost akcentů, bez pastelů, výrazná hierarchie.",
    },
    imageStyle: {
      motifs20: "Geometrie + pop-art tečky/pruhy (střídmě), štítky, boxy, industriální vibe.",
      flagPattern10: "Hvězdy/stripes jako rohové značky a pásy layoutu (cca 10 %), ne vkládat vlajku.",
      realPhoto5: "Jedna fotorealistická ikonická fotka (cca 5 %), editorial ořez.",
    },
    typography: {
      heading: "Inter Black / Franklin Gothic-like (podpora češtiny)",
      body: "Noto Serif / Century-like (diakritika)",
      display: "Oswald / Space Grotesk (podpora češtiny) – štítky a čísla",
    },
  },

  botanical: {
    id: "botanical",
    label: "Botanical Atlas (19. století)",
    tone: "Přírodovědný, akademický, klidný, jemný, detailní, muzeální.",
    visualIdentity: {
      backgroundColor: "#F5F5DC (Old Paper Beige)",
      textColor: "#556B2F (Dark Olive Green)",
      accentColors: ["#CD5C5C", "#8B4513", "#1A1A1A"],
      colorConstraints: "Max 5 barev, akcenty 100% sytost, bez pastelů, starý papír + inkoust.",
    },
    imageStyle: {
      motifs20: "Botanické ilustrace, anatomické řezy květů, kořeny a semena, inkoust + akvarel.",
      flagPattern10: "Vlajkové barvy použít jen jako štítky/razítka/okrajové proužky (cca 10 %), ne vlajka.",
      realPhoto5: "Fotorealistický detail rostliny nebo herbáře (cca 5 %).",
    },
    typography: {
      heading: "Garamond / EB Garamond (diakritika)",
      body: "Noto Serif (diakritika)",
      display: "Cormorant (podpora češtiny) – latinský dojem v kurzívě",
    },
  },

  surreal_space: {
    id: "surreal_space",
    label: "Surreal Space Collage (retro-vesmír)",
    tone: "Surreal, vesmír, nostalgie, sen, koláž, retro-futurismus.",
    visualIdentity: {
      backgroundColor: "#000000 (Space)",
      textColor: "#FFFFFF",
      accentColors: ["#FFA500", "#40E0D0", "#FFFFFF"],
      colorConstraints: "Max 5 barev, akcenty 100% sytost, bez pastelů, vysoký kontrast.",
    },
    imageStyle: {
      motifs20: "Koláž: 50. léta, astronauti, mlhoviny, květiny, staré TV; natržený papír, zrno.",
      flagPattern10: "Vlajkové barvy jako geometrické štítky a pásy (cca 10 %), integrované do koláže.",
      realPhoto5: "Jedna fotorealistická retro-vesmírná fotka (cca 5 %), zbytek jako koláž.",
    },
    typography: {
      heading: "Retrofuturistický sans s diakritikou (např. Space Grotesk)",
      body: "Noto Sans (diakritika)",
      display: "Logo-styl (bold) s podporou češtiny",
    },
  },

  mediterranean_mosaic: {
    id: "mediterranean_mosaic",
    label: "Mediterranean Mosaic (měď + olivy)",
    tone: "Středomoří, teplo, mozaika, řemeslo, historie, světlo, klidná energie.",
    visualIdentity: {
      backgroundColor: "#F5F0E3 (Sand)",
      textColor: "#1A1A1A",
      accentColors: ["#D57800", "#4E7540", "#FFFFFF"],
      colorConstraints: "Max 5 barev, 100% sytost akcentů, bez pastelů, teplé tóny.",
    },
    imageStyle: {
      motifs20: "Mozaikové dlaždice, spirály, geometrie, olivové ratolesti, měděné akcenty.",
      flagPattern10: "Vlajkové prvky jako rám/bordura a štítky (cca 10 %), ne vložená vlajka.",
      realPhoto5: "Archeologická lokalita / mozaika – fotorealisticky, cca 5 %.",
    },
    typography: {
      heading: "EB Garamond (diakritika) – klasika",
      body: "Noto Sans (diakritika)",
      display: "Cormorant (podpora češtiny) – elegantní akcent",
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════
// HELPERS (pro STYLE_PRESETS a prompt generation)
// ═══════════════════════════════════════════════════════════════════════

/**
 * Override akcentních barev uživatelskou paletou.
 * paletaBarev: "auto" → bez změny | string[] → přepíše accentColors
 */
function applyPaletteOverride(style, paletaBarev) {
  if (!paletaBarev || paletaBarev === "auto") return style;
  const colors = Array.isArray(paletaBarev) ? paletaBarev.filter(Boolean) : [];
  if (!colors.length) return style;
  return {
    ...style,
    visualIdentity: {
      ...style.visualIdentity,
      accentColors: colors.slice(0, 5),
    },
  };
}

/**
 * Pevná omezení – vždy česky, vždy na konci promptu.
 */
function fixedConstraintsCZ() {
  return [
    "【Důležitá omezení】",
    "– Veškerý text v obrázku musí být v českém jazyce",
    "– Používat fonty s plnou podporou české diakritiky (č, ř, ž, ě, ů atd.)",
    "– Instrukce promptu a designové/stylové specifikace se nesmí zobrazit v obrázku",
    "– Barvy používat se 100% sytostí, jasně a výrazně. Pastely zakázány",
    "– Vlajku nevkládat přímo, ale integrovat jako geometrický prvek (cca 10 % plochy)",
    "– Reálná fotografie musí být fotorealistická a zabírat cca 5 % plochy",
    "– Titulek musí být nejvýraznější prvek (hierarchie informací)",
    "– Geometrické vzory maximálně 30 % plochy",
  ].join("\n");
}
