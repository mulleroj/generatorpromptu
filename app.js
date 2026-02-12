// ═══════════════════════════════════════════════════════════════════════
// app.js – Infographic Prompt Builder
// buildPrompt přesně dle buildPrompt.ts specifikace
// ═══════════════════════════════════════════════════════════════════════

const state = {
  detail: "Standardní",
};

const elements = {
  subject: document.getElementById("subject"),
  audience: document.getElementById("audience"),
  structure: document.getElementById("structure"),
  extra: document.getElementById("extra"),
  fixTypography: document.getElementById("fix-typography"),
  spellcheck: document.getElementById("spellcheck"),
  ratio: document.getElementById("ratio"),
  style: document.getElementById("style"),
  preset: document.getElementById("preset"),
  palette: document.getElementById("palette"),
  output: document.getElementById("prompt-output"),
  preview: document.getElementById("hero-preview"),
  copyStatus: document.getElementById("copy-status"),
  generate: document.getElementById("generate"),
  reset: document.getElementById("reset"),
  resetTop: document.getElementById("reset-top"),
  copy: document.getElementById("copy"),
  scrollToBuilder: document.getElementById("scroll-to-builder"),
  detailButtons: document.querySelectorAll(".segmented button"),
  styleRequired: document.getElementById("style-required"),
};

// ── Naplnění dropdown "Styl vizuálu" z STYLE_PRESETS ──

const styleGroups = [
  {
    label: "Pro",
    ids: ["notion_kanban", "dashboard_saas", "ted_talk", "corporate_clean", "swiss_grid_style", "data_report"],
  },
  {
    label: "Fun",
    ids: ["lego_style", "gamified", "comic_book", "urban_graffiti", "pop_art", "retro_arcade"],
  },
  {
    label: "Art",
    ids: ["da_vinci_sketch", "risograph", "paper_cutout", "wes_anderson", "akvarel", "bauhaus"],
  },
  {
    label: "Tech",
    ids: ["wireframe", "neon_dark", "futurist_hud", "london_metro", "blueprint", "minimal_ui"],
  },
  {
    label: "Special",
    ids: ["vintage_poster", "claymation", "collage_papier", "mind_map_marker", "natural_sketch", "avant_garde"],
  },
  {
    label: "Kulturní / National",
    ids: ["nordic", "art_deco", "cubism_cz", "british_editorial", "american_bold", "botanical", "surreal_space", "mediterranean_mosaic"],
  },
];

const buildStyleOptions = () => {
  const emptyOpt = document.createElement("option");
  emptyOpt.value = "";
  emptyOpt.textContent = "-- Vyber styl --";
  elements.style.appendChild(emptyOpt);

  styleGroups.forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;
    group.ids.forEach((id) => {
      const preset = STYLE_PRESETS[id];
      if (!preset) return;
      const opt = document.createElement("option");
      opt.value = preset.id;
      opt.textContent = preset.label;
      optgroup.appendChild(opt);
    });
    elements.style.appendChild(optgroup);
  });
};

// ── Sběr dat z formuláře ──

const getSelections = () => ({
  subject: elements.subject.value.trim(),
  audience: elements.audience.value,
  structure: elements.structure.value,
  extra: elements.extra.value.trim(),
  ratio: elements.ratio.value,
  style: elements.style.value,
  preset: elements.preset?.value || "",
  palette: elements.palette.value,
  fixTypography: elements.fixTypography.checked,
  spellcheck: elements.spellcheck.checked,
  detail: state.detail,
});

// ── Detail level → klíč pro byDetail ──

const getDetailKey = (detail) => {
  if (detail === "Minimalistická") return "minimalisticka";
  if (detail === "Detailní") return "detailni";
  return "standardni";
};

// ═══════════════════════════════════════════════════════════════════════
// buildPrompt – kombinace vizuálního stylu + volitelný layout preset
//
// Styl:  STYLE_PRESETS[stylVizualuId] → fallback nordic
//        (tone, visualIdentity, motifs20, flagPattern10, realPhoto5, typography)
// Layout: LAYOUT_PRESETS[layoutPresetId] → fallback výchozí text
//        (JEN layout50 a composition – pokud není vybrán, použije se výchozí)
// Paleta: applyPaletteOverride (accentColors override)
// ═══════════════════════════════════════════════════════════════════════

const buildPrompt = (data) => {
  const level = getDetailKey(data.detail);

  // ── Resolve style (fallback → nordic) ──
  const styleId = data.style?.trim();
  const styleBase = STYLE_PRESETS[styleId ?? "nordic"] ?? STYLE_PRESETS.nordic;

  // ── Resolve layout preset (JEN layout50 a composition) ──
  const layoutId = data.preset?.trim();
  const layoutPreset = (layoutId && layoutId !== "" && LAYOUT_PRESETS[layoutId]) || null;

  // Fallback layout (pokud není vybrán layout preset)
  const defaultLayout50 = "Přehledné rozvržení s jasnou hierarchií, snadná orientace v obsahu.";
  const defaultComposition = "Titulek dominuje, informace v přehledných blocích, vizuální hierarchie shora dolů.";

  const baseLayout50 = layoutPreset
    ? layoutPreset.imageStyle.layout50
    : defaultLayout50;

  const baseComposition = layoutPreset
    ? layoutPreset.imageStyle.composition
    : defaultComposition;

  const readingFlow = layoutPreset?.layoutDefinition?.readingFlow || "";
  const sectionLogic = layoutPreset?.layoutDefinition?.sectionLogic || "";

  // ── Color Mode: aplikuj režim palety (barvy + tón + kompozice + typo) ──
  const modeKey = data.palette?.trim() || "auto";
  const colorMode = applyColorModeToPromptParts({
    level: level,
    baseTone: styleBase.tone,
    baseComposition: baseComposition,
    baseTypography: `${styleBase.typography.heading} / ${styleBase.typography.body} / ${styleBase.typography.display}`,
    baseBackground: styleBase.visualIdentity.backgroundColor,
    baseTextColor: styleBase.visualIdentity.textColor,
    baseAccents: styleBase.visualIdentity.accentColors,
    modeKey: modeKey
  });

  // ── Build lines ──
  const lines = [
    `Téma infografiky: ${data.subject}`,
    `Cílové publikum: ${data.audience}`,
    `Typ struktury: ${data.structure}`,
    data.extra ? `Další informace: ${data.extra}` : "",
    "",
    "【Designový styl】",
    `Tón: "${colorMode.tone}"`,
    "",
    "Vizuální identita:",
    `Pozadí: "${colorMode.background}"`,
    `Barva textu: "${colorMode.textColor}"`,
    `Akcentní barvy: ${colorMode.accents.map((c) => `"${c}"`).join(", ")}`,
    `Barevné omezení: "${byDetail(styleBase.visualIdentity.colorConstraints, level)}"`,
    "",
    "Styl obrazů:",
    `Rozvržení (50%): "${byDetail(baseLayout50, level, sectionLogic)}"`,
    `Motivy (20%): "${byDetail(styleBase.imageStyle.motifs20, level)}"`,
    `Motiv vlajky (10%): "${byDetail(styleBase.imageStyle.flagPattern10, level)}"`,
    `Reálná fotografie (5%): "${byDetail(styleBase.imageStyle.realPhoto5, level)}"`,
    `Kompozice: "${byDetail(colorMode.composition, level, readingFlow)}"`,
    "",
    "Typografie (15%):",
    `Nadpis: "${styleBase.typography.heading}"`,
    `Běžný text: "${styleBase.typography.body}"`,
    `Display: "${styleBase.typography.display}"`,
    colorMode.typography ? `Režim palety – typografie: ${colorMode.typography}` : "",
    "",
    fixedConstraintsCZ(),
    colorMode.modeRules,
  ];

  // ── UI extras (checkboxy z formuláře) ──
  if (data.fixTypography) {
    lines.push("– Oprav typografii nadpisů podle pravidel.");
  }
  if (data.spellcheck) {
    lines.push("– Zkontroluj a oprav pravopis v textu.");
  }

  return lines.filter(Boolean).join("\n");
};

// ── Dynamická hvězdička u "Styl vizuálu" ──

const updateStyleRequired = () => {
  const preset = elements.preset?.value?.trim();
  if (elements.styleRequired) {
    elements.styleRequired.textContent = preset ? " (volitelné)" : "*";
  }
};

// ── Output ──

const updateOutput = () => {
  const data = getSelections();
  const hasVisualStyle = data.style || data.preset;
  const missingRequired =
    !data.subject || !data.audience || !data.structure || !data.ratio || !hasVisualStyle;
  if (missingRequired) {
    elements.output.textContent =
      "Vyplň povinná pole a klikni na \"Generovat prompt\".";
    elements.preview.textContent = elements.output.textContent;
    return;
  }
  const prompt = buildPrompt(data);
  elements.output.textContent = prompt;
  elements.preview.textContent = prompt;
};

// ── Reset ──

const resetAll = () => {
  elements.subject.value = "";
  elements.audience.value = "";
  elements.structure.value = "";
  elements.extra.value = "";
  elements.fixTypography.checked = false;
  elements.spellcheck.checked = false;
  elements.ratio.value = "";
  elements.style.value = "";
  if (elements.preset) elements.preset.value = "";
  elements.palette.value = "auto";
  state.detail = "Standardní";
  elements.detailButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.detail === state.detail);
  });
  elements.output.textContent = "Prompt bude zobrazen zde.";
  elements.preview.textContent = "Zadej témata a klikni na \"Generovat prompt\".";
  elements.copyStatus.textContent = "";
  updateStyleRequired();
};

// ── Detail level ──

const updateDetail = (detail) => {
  state.detail = detail;
  elements.detailButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.detail === detail);
  });
};

// ── Kopírování ──

const copyPrompt = async () => {
  const text = elements.output.textContent.trim();
  const isPlaceholder =
    !text ||
    text === "Prompt bude zobrazen zde." ||
    text.startsWith("Vyplň povinná pole") ||
    text.startsWith("Zadej témata");
  if (isPlaceholder) {
    elements.copyStatus.textContent = "Nejprve vygeneruj prompt.";
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    elements.copyStatus.textContent = "✓ Zkopírováno do schránky.";
  } catch (error) {
    elements.copyStatus.textContent =
      "Nelze kopírovat automaticky, označ text ručně.";
  }
};

// ── Init ──

const init = () => {
  buildStyleOptions();
  resetAll();
  updateStyleRequired();

  elements.preset?.addEventListener("change", () => {
    updateStyleRequired();
    updateOutput();
  });

  elements.detailButtons.forEach((button) => {
    button.addEventListener("click", () => updateDetail(button.dataset.detail));
  });

  elements.generate.addEventListener("click", updateOutput);
  elements.reset.addEventListener("click", resetAll);
  elements.resetTop.addEventListener("click", resetAll);
  elements.copy.addEventListener("click", copyPrompt);

  elements.scrollToBuilder.addEventListener("click", () => {
    document.getElementById("builder").scrollIntoView({ behavior: "smooth" });
  });

  [
    elements.subject,
    elements.audience,
    elements.structure,
    elements.extra,
    elements.ratio,
    elements.style,
    elements.preset,
    elements.palette,
    elements.fixTypography,
    elements.spellcheck,
  ].filter(Boolean).forEach((field) => {
    field.addEventListener("change", () => {
      elements.copyStatus.textContent = "";
    });
  });
};

init();
