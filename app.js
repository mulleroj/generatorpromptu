const styleOptions = [
  {
    label: "Pro",
    options: [
      "Notion Kanban",
      "Dashboard SaaS",
      "TED Talk",
      "Corporate Clean",
      "Swiss Grid",
      "Data Report",
    ],
  },
  {
    label: "Fun",
    options: [
      "Lego Style",
      "Gamified",
      "Comic Book",
      "Urban Graffiti",
      "Pop Art",
      "Retro Arcade",
    ],
  },
  {
    label: "Art",
    options: [
      "Da Vinci Sketch",
      "Risograph",
      "Paper Cutout",
      "Wes Anderson",
      "Akvarel",
      "Bauhaus",
    ],
  },
  {
    label: "Tech",
    options: [
      "Wireframe",
      "Neon Dark",
      "Futurist HUD",
      "London Metro",
      "Blueprint",
      "Minimal UI",
    ],
  },
  {
    label: "Special",
    options: [
      "Vintage Poster",
      "Claymation",
      "Collage Papier",
      "Mind Map Marker",
      "Natural Sketch",
      "Avant-Garde",
    ],
  },
];

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
};

const buildStyleOptions = () => {
  styleOptions.forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;
    group.options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      optgroup.appendChild(option);
    });
    elements.style.appendChild(optgroup);
  });
};

const getSelections = () => ({
  subject: elements.subject.value.trim(),
  audience: elements.audience.value,
  structure: elements.structure.value,
  extra: elements.extra.value.trim(),
  ratio: elements.ratio.value,
  style: elements.style.value,
  palette: elements.palette.value,
  fixTypography: elements.fixTypography.checked,
  spellcheck: elements.spellcheck.checked,
  detail: state.detail,
});

const buildPrompt = (data) => {
  const lines = [
    `Vytvoř infografiku na téma: ${data.subject}.`,
    `Cílové publikum: ${data.audience}.`,
    `Struktura: ${data.structure}.`,
    `Poměr stran: ${data.ratio}.`,
    `Vizuální styl: ${data.style}.`,
    `Paleta barev: ${data.palette}.`,
    `Úroveň detailu: ${data.detail}.`,
  ];

  if (data.extra) {
    lines.push(`Další instrukce: ${data.extra}.`);
  }
  if (data.fixTypography) {
    lines.push("Oprav typografii nadpisů podle pravidel.");
  }
  if (data.spellcheck) {
    lines.push("Zkontroluj a oprav pravopis v textu.");
  }

  lines.push(
    "Použij jasné hierarchie, čitelné fonty a konzistentní ikonografii."
  );

  return lines.join("\n");
};

const updateOutput = () => {
  const data = getSelections();
  const missingRequired =
    !data.subject || !data.audience || !data.structure || !data.ratio || !data.style;
  if (missingRequired) {
    elements.output.textContent =
      "Vyplň povinná pole a klikni na „Generovat prompt“.";
    elements.preview.textContent = elements.output.textContent;
    return;
  }
  const prompt = buildPrompt(data);
  elements.output.textContent = prompt;
  elements.preview.textContent = prompt;
};

const resetAll = () => {
  elements.subject.value = "";
  elements.audience.value = "";
  elements.structure.value = "";
  elements.extra.value = "";
  elements.fixTypography.checked = false;
  elements.spellcheck.checked = false;
  elements.ratio.value = "";
  elements.style.value = "";
  elements.palette.value = "Automaticky (dle stylu)";
  state.detail = "Standardní";
  elements.detailButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.detail === state.detail);
  });
  elements.output.textContent = "Prompt bude zobrazen zde.";
  elements.preview.textContent = "Zadej témata a klikni na „Generovat prompt“.";
  elements.copyStatus.textContent = "";
};

const updateDetail = (detail) => {
  state.detail = detail;
  elements.detailButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.detail === detail);
  });
};

const copyPrompt = async () => {
  const text = elements.output.textContent.trim();
  if (!text) {
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

const init = () => {
  buildStyleOptions();
  resetAll();

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
    elements.palette,
    elements.fixTypography,
    elements.spellcheck,
  ].forEach((field) => {
    field.addEventListener("change", () => {
      elements.copyStatus.textContent = "";
    });
  });
};

init();
