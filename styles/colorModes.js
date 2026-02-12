/**
 * colorModes.js – Color Mode systém (paleta + tón + kompozice + typografie)
 * 
 * Režim barvy nejen mění accentColors, ale i přidává instrukce do:
 * - toneAddon (připojí se k tónu stylu)
 * - compositionAddon (připojí se ke kompozici)
 * - typographyAddon (připojí se k typografii)
 * - rules (jen v detailním režimu)
 */

const COLOR_MODES = {
  auto: {
    key: "auto",
    label: "Automaticky (dle stylu)",
    accentColors: [],
    toneAddon: "",
    compositionAddon: ""
  },

  // ── Původní palety (převedené na režimy) ──

  corporate_blue_white: {
    key: "corporate_blue_white",
    label: "Modrá & bílá (corporate)",
    accentColors: ["#1E3A8A", "#2563EB", "#FFFFFF"],
    toneAddon: "Důraz na profesionalitu, důvěryhodnost, klidný a věcný jazyk.",
    compositionAddon: "Použij čistý grid, minimum dekoru, jasné boxy a štítky. Zvýrazňuj klíčová čísla.",
    typographyAddon: "Preferuj čistý sans-serif, konzistentní řezy, žádné dekorativní fonty.",
    rules: ["Vysoký kontrast", "Minimum ornamentů", "KPI/čísla musí být čitelné na první pohled"]
  },

  warm_terracotta: {
    key: "warm_terracotta",
    label: "Teplá (oranžová, červená, okr)",
    accentColors: ["#F97316", "#DC2626", "#B45309"],
    toneAddon: "Teplejší a přístupný tón, lidský jazyk, mírně energické formulace.",
    compositionAddon: "Použij pásy a bloky s jemným rytmem, vizuálně vést oko od titulku k bodům. Dekor jen střídmě.",
    rules: ["Teplé akcenty jen na důležité prvky", "Pozor na přeplácanost"]
  },

  pastel_soft: {
    key: "pastel_soft",
    label: "Pastelová (jemná, uklidňující)",
    accentColors: ["#A5B4FC", "#FBCFE8", "#BBF7D0"],
    toneAddon: "Jemný, uklidňující tón. Krátké věty, žádný agresivní jazyk.",
    compositionAddon: "Více bílého prostoru, měkčí bloky, méně kontrastu. Piktogramy jednoduché.",
    rules: ["Nízký vizuální šum", "Upřednostnit čitelnost před efektem"]
  },

  neon_future: {
    key: "neon_future",
    label: "Neon (futuristická)",
    backgroundColor: "#0B0F14 (Dark UI)",
    textColor: "#FFFFFF",
    accentColors: ["#00E5FF", "#A3FF12", "#FF2BD6"],
    toneAddon: "Dynamický, technologický tón. Jasné, krátké výpovědi, důraz na výkon a rychlost.",
    compositionAddon: "Dashboard estetika: KPI pás, karty, progress indikátory. Silný kontrast, jasné highlighty.",
    typographyAddon: "Sans-serif + čísla výrazně. Používej štítky, badge a krátké popisky.",
    rules: ["Tmavé pozadí + neon akcenty", "Čísla/KPI výrazně", "Žádné jemné pastelové přechody"]
  },

  nature_earth: {
    key: "nature_earth",
    label: "Přírodní (zelená, hnědá, béžová)",
    accentColors: ["#166534", "#8B4513", "#F5F5DC"],
    toneAddon: "Přírodní, klidný tón. Důraz na rovnováhu, procesy, udržitelnost.",
    compositionAddon: "Použij organické členění (ale stále grid). Sekce jako 'záhony': jasně oddělené, nepřeplněné.",
    rules: ["Zelená pro pozitivní, hnědá pro kontext", "Nepřehánět dekor"]
  },

  monochrome: {
    key: "monochrome",
    label: "Monochromatická",
    accentColors: ["#000000", "#6B7280", "#FFFFFF"],
    toneAddon: "Přímý, strohý tón. Fakta bez kudrlinek.",
    compositionAddon: "Extrémní typografická hierarchie, hodně prostoru, černobílé bloky, jasné oddělovače.",
    rules: ["Hierarchie přes velikost písma", "Kontrast přes plochy, ne barvy"]
  },

  // ── Nové režimy (barva + tón + kompozice) ──

  luxury_black_gold: {
    key: "luxury_black_gold",
    label: "Luxusní (černá + zlato)",
    backgroundColor: "#0B0B0B",
    textColor: "#FFFFFF",
    accentColors: ["#D4AF37", "#FFFFFF", "#111827"],
    toneAddon: "Luxusní, sebejistý a stručný tón. Věty krátké, důraz na 'hlavní myšlenku'.",
    compositionAddon: "Osová symetrie, zlaté linky jako oddělovače, minimum prvků. Titulek jako 'plaketa'.",
    typographyAddon: "Serif pro nadpis, sans pro tělo. Vše zarovnané a úsporné.",
    rules: ["Zlato jen jako akcent", "Žádné přeplněné bloky", "1 dominantní vizuál max"]
  },

  academic_navy_gray: {
    key: "academic_navy_gray",
    label: "Akademická (tmavě modrá + šedá)",
    accentColors: ["#0F172A", "#475569", "#FFFFFF"],
    toneAddon: "Akademický, věcný tón. Důraz na přesnost, definice, evidence.",
    compositionAddon: "Research poster logika: sekce Úvod–Metoda–Výsledky–Závěr. Boxy pro data a shrnutí.",
    rules: ["Čitelné popisky", "Vyhnout se metaforám", "Závěr zvýraznit jako box"]
  },

  educational_blue_yellow: {
    key: "educational_blue_yellow",
    label: "Edukační (modrá + žlutá kontrast)",
    accentColors: ["#2563EB", "#FACC15", "#FFFFFF"],
    toneAddon: "Výukový tón: jasné kroky, jednoduché formulace, aktivní slovesa.",
    compositionAddon: "Použij jasné 'kroky' nebo bloky s ikonou. Zvýrazni klíčové pojmy žlutými štítky.",
    rules: ["1 myšlenka na blok", "Klíčové termíny jako štítky", "Žlutá jen pro highlight"]
  },

  high_tech_indigo_cyan: {
    key: "high_tech_indigo_cyan",
    label: "High-tech (indigo + cyan)",
    backgroundColor: "#070A12",
    textColor: "#FFFFFF",
    accentColors: ["#4F46E5", "#00E5FF", "#FFFFFF"],
    toneAddon: "Technologický, precizní tón. Důraz na procesy, architekturu, parametry.",
    compositionAddon: "Dashboard/karty, síťové diagramy, krátké bullet pointy. Čísla a metriky výrazně.",
    rules: ["KPI pás", "Karty 2×2 nebo 3×2", "Kontrast vysoký, text stručný"]
  },

  vintage_sepia: {
    key: "vintage_sepia",
    label: "Vintage (sepia + krémová)",
    accentColors: ["#704214", "#F5E6C8", "#3E2C23"],
    toneAddon: "Nostalgický, vyprávěcí tón. Mírně poetický, ale pořád informativní.",
    compositionAddon: "Panelové členění jako muzeální tabule. Rámy, štítky, 'archivní' popisky.",
    typographyAddon: "Serif pro nadpisy, kurzíva pro 'poznámky' (diakritika musí sedět).",
    rules: ["Text kratší, jako popisky", "Rámy jen na okrajích", "1 archivní fotka jako detail"]
  },

  crisis_red_yellow_black: {
    key: "crisis_red_yellow_black",
    label: "Krizová (červená + žlutá + černá)",
    accentColors: ["#DC2626", "#FACC15", "#000000"],
    toneAddon: "Urgentní, jasný tón. Přímé instrukce, varování, priority.",
    compositionAddon: "Vysoký kontrast, velké piktogramy, jasné varovné boxy. Hierarchie: co dělat hned.",
    rules: ["Ne víc než 3 hlavní body", "Varování jako boxy", "Červená jen pro kritické"]
  },

  sport_red_navy: {
    key: "sport_red_navy",
    label: "Sportovní (červená + navy)",
    accentColors: ["#B91C1C", "#0F172A", "#FFFFFF"],
    toneAddon: "Energický, motivační (ale ne kýčovitý) tón. Důraz na výkon a cíle.",
    compositionAddon: "Plakátová hierarchie: velký titulek, krátké body, čísla jako skóre/KPI.",
    rules: ["Krátké věty", "Čísla velká", "Málo textu, hodně hierarchie"]
  },

  health_clean: {
    key: "health_clean",
    label: "Zdravotnická (čistá bílá + modrozelená)",
    backgroundColor: "#FFFFFF",
    textColor: "#0F172A",
    accentColors: ["#0EA5A4", "#38BDF8", "#FFFFFF"],
    toneAddon: "Klidný, bezpečný tón. Důraz na srozumitelnost a jistotu.",
    compositionAddon: "Čisté karty, jednoduché ikonky, hodně prostoru. Sekce jako checklist.",
    rules: ["Maximální čitelnost", "Ikony jednoduché", "Žádný vizuální šum"]
  },

  eco_green_beige: {
    key: "eco_green_beige",
    label: "Zelená ekonomika (tmavě zelená + béžová)",
    accentColors: ["#166534", "#F5F5DC", "#1A1A1A"],
    toneAddon: "Pragmatický, řešení-orientovaný tón. Důraz na dopady a kroky.",
    compositionAddon: "Struktura 'problém → dopad → řešení'. Každý blok má jasný headline.",
    rules: ["Zelená pro řešení", "Béžová pro kontext", "Závěr jako akční kroky"]
  },

  night_mode: {
    key: "night_mode",
    label: "Noční režim (tmavý + vysoký kontrast)",
    backgroundColor: "#0B0F14",
    textColor: "#FFFFFF",
    accentColors: ["#FFFFFF", "#94A3B8", "#22C55E"],
    toneAddon: "Strohé a jasné formulace. Důraz na čitelnost na tmavém pozadí.",
    compositionAddon: "Karty a oddělovače, žádné jemné šedé texty. Zvýraznění jen párkrát.",
    rules: ["Kontrast musí být vysoký", "Ne drobný text", "Akcent barva jen pro klíč"]
  }
};

/**
 * Aplikuje color mode na části promptu (tón, kompozice, typografie, barvy).
 * Vrací rozšířené hodnoty připravené pro vložení do promptu.
 */
function applyColorModeToPromptParts(args) {
  const mode = COLOR_MODES[args.modeKey] ?? COLOR_MODES.auto;
  const level = args.level;

  // Tón: přidej addon pokud není auto
  const tone = mode.key === "auto"
    ? args.baseTone
    : `${args.baseTone} ${byDetail(mode.toneAddon, level)}`.trim();

  // Kompozice: přidej addon pokud není auto
  const composition = mode.key === "auto"
    ? args.baseComposition
    : `${args.baseComposition} ${byDetail(mode.compositionAddon, level)}`.trim();

  // Typografie: přidej addon pokud není auto a existuje
  const typography = mode.key === "auto"
    ? (args.baseTypography ?? "")
    : `${(args.baseTypography ?? "").trim()} ${byDetail(mode.typographyAddon ?? "", level)}`.trim();

  // Barvy: použij mode barvy pokud existují, jinak base
  const background = mode.key === "auto" 
    ? args.baseBackground 
    : (mode.backgroundColor ?? args.baseBackground);
  
  const textColor = mode.key === "auto" 
    ? args.baseTextColor 
    : (mode.textColor ?? args.baseTextColor);
  
  const accents = mode.key === "auto" 
    ? (args.baseAccents ?? []) 
    : mode.accentColors;

  // Rules: jen v detailním režimu a pokud existují
  const modeRules =
    mode.key !== "auto" && level === "detailni" && mode.rules?.length
      ? ["", "Režim palety – pravidla:", ...mode.rules.map(r => `– ${r}`)].join("\n")
      : "";

  return { tone, composition, typography, background, textColor, accents, modeRules };
}
