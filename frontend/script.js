const menuShell = document.querySelector(".menu-shell");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-panel .menu-close");
const menuBackdrop = document.querySelector(".menu-backdrop");
const navLinks = [...document.querySelectorAll(".desktop-nav a[data-tab-target], .menu-nav a[data-tab-target]")];
const tabTriggers = document.querySelectorAll("[data-tab-target]");
const tabsViewport = document.querySelector("[data-tabs-viewport]");
const tabPages = [...document.querySelectorAll("[data-tab-page]")];
const tabCounter = document.querySelector("[data-tab-counter]");
const tabCaption = document.querySelector("[data-tab-caption]");
const profilesModalShell = document.querySelector("[data-profiles-modal]");
const openProfilesButton = document.querySelector("[data-open-profiles]");
const closeProfilesButtons = document.querySelectorAll("[data-close-profiles]");
const scheduleModalShell = document.querySelector("[data-schedule-modal]");
const scheduleFormBody = document.querySelector(".schedule-form__body");
const openScheduleButtons = document.querySelectorAll("[data-open-schedule]");
const closeScheduleButtons = document.querySelectorAll("[data-close-schedule]");
const scheduleForm = document.querySelector("[data-schedule-form]");
const scheduleNameInput = document.querySelector("[data-schedule-name]");
const scheduleCpfInput = document.querySelector("[data-schedule-cpf]");
const scheduleEmailInput = document.querySelector("[data-schedule-email]");
const scheduleBirthInput = document.querySelector("[data-schedule-birth]");
const scheduleWhatsappInput = document.querySelector("[data-schedule-whatsapp]");
const scheduleServiceSelect = document.querySelector("[data-schedule-service]");
const scheduleServiceCustomInput = document.querySelector("[data-schedule-service-custom]");
const scheduleCustomField = document.querySelector("[data-schedule-custom-field]");
const scheduleDaySelect = document.querySelector("[data-schedule-day]");
const scheduleTimeSelect = document.querySelector("[data-schedule-time]");
const scheduleAvailabilityBox = document.querySelector("[data-schedule-availability]");
const scheduleNote = document.querySelector("[data-schedule-note]");
const profileCarousel = document.querySelector("[data-profile-carousel]");
const profileModalGrid = document.querySelector("[data-profile-modal-grid]");
const professionalsDirectory = document.querySelector("[data-professionals-directory]");
const profileStatus = document.querySelector("[data-profile-status]");
const profilePrevButton = document.querySelector("[data-profile-prev]");
const profileNextButton = document.querySelector("[data-profile-next]");
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryDescription = document.querySelector("[data-gallery-description]");
const galleryStatus = document.querySelector("[data-gallery-status]");
const galleryNextButton = document.querySelector("[data-gallery-next]");
const spacesGalleryImage = document.querySelector("[data-spaces-gallery-image]");
const spacesGalleryTitle = document.querySelector("[data-spaces-gallery-title]");
const spacesGalleryDescription = document.querySelector("[data-spaces-gallery-description]");
const spacesGalleryStatus = document.querySelector("[data-spaces-gallery-status]");
const spacesGalleryNextButton = document.querySelector("[data-spaces-gallery-next]");
const desktopMenuMedia = window.matchMedia("(min-width: 1120px)");
const interactiveCursorSelector = [
  "button",
  "a[href]",
  "[role='button']",
  "[role='tab']",
  ".button",
  ".team-card__cta"
].join(", ");

function syncInteractiveCursors(root = document) {
  if (!root?.querySelectorAll) {
    return;
  }

  root.querySelectorAll(interactiveCursorSelector).forEach((element) => {
    const isDisabled =
      element.matches(":disabled") || element.getAttribute("aria-disabled") === "true";

    element.style.cursor = isDisabled ? "not-allowed" : "pointer";

    element.querySelectorAll("*").forEach((child) => {
      child.style.cursor = "inherit";
    });
  });
}

const professionals = [
  {
    name: "Dr. Apollo Sousa",
    crm: "COREN 509478",
    description:
      "CEO e cofundador da UltraDerma, com intensa atuação clínica e administrativa, focado em excelência no atendimento e inovação em dermatologia e ultrassonografia.",
    areas: ["CEO", "Cofundador", "Medicina e Saúde"],
    image: "assets/profissionais/apolo.jpeg",
    imagePosition: "center 15%",
    alt: "Foto do profissional 01"
  },
  {
    name: "Profissional 02",
    specialization: "Dermatologia Preventiva",
    crm: "CRM 00002/UF",
    description:
      "Foco em prevencao, check-up dermatologico e acompanhamento regular com orientacoes claras ao paciente.",
    areas: ["Check-up da pele", "Mapeamento de lesoes", "Prevencao"],
    image: "./assets/professional-2.svg",
    imagePosition: "center 20%",
    alt: "Foto do profissional 02"
  },
  {
    name: "Dr. Magno Magalhães",
    specialization: "Especialista em Dermatologia",
    crm: "CRM 4011/MA",
    description:
      "Especialista com ampla experiencia em dermatologia clinica, atuando com foco em cuidado personalizado e resultados efetivos.",
    areas: ["Dermatologia Clinica", "Pele", "Acompanhamento de tratamentos"],
    image: "assets/profissionais/magno.jpeg",
    imagePosition: "center 14%",
    alt: "Foto do profissional 03"
  },
  {
    name: "Dra. Mônica Mendes",
    specialization: "Enfermeira Estomaterapeuta",
    description:
      "Enfermeira especializada em estomaterapia, com atuação dedicada ao cuidado de feridas e lesões, proporcionando tratamentos eficazes e humanizados.",
    areas: ["Especialista em tratamentos de feridas", "Ulceras venosas, arteriais e mistas", "Lesões por pressão", "Queimaduras", "Fissuras mamárias", "Pós operatórios", "Ozonioterapia", "Laserterapia", "Terapia foto dinâmica", "Terapia compressiva", "Terapia Regenerativa (MFLA)", "Ozonioterapia podiatria clínica", "Curativos com novas tecnologias"],
    image: "assets/profissionais/monica.jpeg",
    imagePosition: "center 14%",
    alt: "Foto do profissional 04"
  },
  {
    name: "Dra. Maria Christina",
    specialization: "Médica Pediatra e Gastroentologista Pediátrica",
    crm: "CRM MA 8154 / RQE 6001/6230",
    description:
      "Pediatra e gastroenterologista pediátrica, com experiência em atendimento infantil, focada em oferecer cuidado integral e humanizado para crianças e adolescentes.",
    areas: ["Tratamentos das doenças do trato digestivo das crianças como prisão de ventre", "alergia alimentar (incluindo alergia a proteína do leite de vaca)", "diarréia", "baixo ganho de peso e altura", "refluxo e outras doenças"],
    image: "assets/profissionais/maria.jpeg",
    imagePosition: "center 15%",
    alt: "Foto do profissional 05"
  },
  {
    name: "Dr. Joacy Douglas Piorsky",
    specialization: "Especialista em Estética Avançada",
    description:
      "Especialista em procedimentos estéticos avançados, com atuação focada em tratamentos personalizados para rejuvenescimento e cuidados com a pele.",
    areas: ["Otomodelação", "Rinomodelação", "Botox", "Harmonização facial", "Preenchimento facial", "Preenchimento de olheiras", "Preenchimento de bigode chinês", "Preenchimento labial"],
    image: "assets/profissionais/joacy.jpeg",
    imagePosition: "center 12%",
    alt: "Foto do profissional 06"
  },
  {
    name: "Dr. Pedro Henrique",
    specialization: "Atendimento em Cardiologia",
    crm: "CRM 12853",
    description:
      "Atendimento em cardiologia com foco em prevenção, diagnóstico e acompanhamento de condições cardiovasculares, proporcionando cuidado integral e personalizado.",
    areas: ["Consultas Cardiológicas", "Risco Cirúrgico", "Eletrocardiograma", "Mapa", "Holter 24h"],
    image: "assets/profissionais/pedro.jpeg",
    imagePosition: "center 14%",
    alt: "Foto do profissional 07"
  },
  {
    name: "Dr. Fernando Gomes",
    specialization: "Pneumologia",
    crm: "CRM 1584/MA  /  RQE 3097",
    description:
      "Atendimento em pneumologia com foco em diagnóstico, tratamento e acompanhamento de doenças respiratórias, proporcionando cuidado integral e humanizado para os pacientes.",
    areas: ["Pneumonia", "Gripe / Covid-19", "Asma e Renite", "Fibrose pulmonar", "Câncer de pulmão", "DPOC", "Apneia do sono", "Cessação do tabagismo", "Prova de função pulmonar", "Feno"],
    image: "assets/profissionais/fernando.jpeg",
    imagePosition: "center 15%",
    alt: "Foto do profissional 08"
  },
  {
    name: "Dra. Francineide Ribeiro",
    specialization: "Atendimento em Saúde Mental",
    crm: "CRM MA 13674",
    description:
      "Atendimento direcionado para avaliacao de tireoide, controle de rotina e investigacao com mais seguranca.",
    areas: ["Clínica Geral"],
    image: "assets/profissionais/francineide.jpeg",
    imagePosition: "center 15%",
    alt: "Foto do profissional 09"
  },
  {
    name: "Dr. Humberto Filho",
    crm: "CRM 13166 MA",
    description:
      "Atendimento em medicina fisica e reabilitacao com foco em diagnóstico, tratamento e acompanhamento de condições musculoesqueléticas, proporcionando cuidado integral e personalizado.",
    areas: ["Dores na coluna", "Articulações", "Artrose", "Mialgia", "Luxações", "Osteoporose", "Fibromialgia", "Enxaqueca", "Infiltrações articulares para controle da dor", "Artrocentese"],
    image: "assets/profissionais/humberto.jpeg",
    imagePosition: "center 19%",
    alt: "Foto do profissional 10"
  },
  {
    name: "Dr. Rozeno Setubal",
    specialization: "Ginecologista / Especialista em Medicina da Família e Comunidade",
    crm: "CRM 13460 / 6623",
    description:
      "Atendimento em ginecologia e medicina da família, com foco em cuidado integral, prevenção e acompanhamento de saúde da mulher, proporcionando um atendimento humanizado e personalizado.",
    areas: ["Consultas", "Preventivos", "Tratamento de Endometriose", "Ovários Policísticos", "Infertilidade", "DIU e Inplanon"],
    image: "assets/profissionais/rozeno.jpeg",
    imagePosition: "center 14%",
    alt: "Foto do profissional 11"
  },
  {
    name: "Dra. Jacielma Lima",
    specialization: "Nutricionista",
    description:
      "Atendimento em nutrição com foco em emagrecimento saudável, modulação metabólica, saúde intestinal e suplementação personalizada, proporcionando um cuidado integral e orientações práticas para uma vida mais saudável.",
    areas: ["Emagrecimento saudável e reeducação alimentar", "Modulação metabólica e hormonal", "Saúde intestinal e microbiota", "Suplementação nutricional personalizada", "Nutrição Anti-inflamatória", "Saúde do fígado e detox metabólico", "Saúde da pele, cabelos e unhas", "Energia, imunidade e Vitabilidade"],
    image: "assets/profissionais/jacielma.png",
    imagePosition: "center 18%",
    alt: "Foto do profissional 12"
  },
  {
    name: "Dra. Zilma Sousa",
    specialization: "Remoção de Micropigmentação e Tatuagens a Laser",
    description:
      "A remoção a laser é o método mais eficaz e seguro no que se refere a despigmentação de sobrancelhas, lábios e tatuagens. Essa energia a laser faz com que o pigmento se fragmente em partículas menores que são então removidas pelo sistema imunológico. Devido à natureza rápida e seletiva desse processo, o tecido normal adjacente é poupado.",
    areas: ["Remoção a Laser", "Despigmentação de sobrancelhas", "Remoção de tatuagens", "Remoção de micropigmentação labial"],
    image: "assets/profissionais/zilma.jpeg",
    imagePosition: "center 18%",
    alt: "Foto do profissional 13"
  },
  {
    name: "Dra. Simone Coutinho",
    specialization: "Remoção de Micropigmentação e Tatuagens a Laser",
    crm: "CRP 22/04005",
    description:
      "A remoção a laser é o método mais eficaz e seguro no que se refere a despigmentação de sobrancelhas, lábios e tatuagens. Essa energia a laser faz com que o pigmento se fragmente em partículas menores que são então removidas pelo sistema imunológico. Devido à natureza rápida e seletiva desse processo, o tecido normal adjacente é poupado.",
    areas: ["Depressão", "Ansiedade", "Deficiência intelctual Di", "Transtorno de personalidade", "Transtorno de aprendizagem", "Autismo", "TDAH"],
    image: "assets/profissionais/simone.jpeg",
    imagePosition: "center 15%",
    alt: "Foto do profissional 13"
  }
];

const featuredProfessionals = professionals.slice(0, 2);

const clinicSlides = [
  {
    title: "Fachada principal da clinica",
    description:
      "Uma primeira vista pensada para transmitir presenca, organizacao e confianca logo na chegada.",
    image: "assets/estrutura/foto1.jpeg",
    alt: "Imagem da fachada da clinica UltraDerma"
  },
  {
    title: "Recepcao da UltraDerma",
    description:
      "Um ambiente preparado para acolher o paciente com conforto, clareza e identidade visual consistente.",
    image: "assets/estrutura/foto2.jpeg",
    alt: "Imagem da recepcao da clinica UltraDerma"
  },
];

const spacesSlides = [
  {
    title: "Recepção acolhedora",
    description:
      "Um ambiente organizado para receber o paciente com clareza, conforto e sensação de cuidado desde a chegada.",
    image: "assets/estrutura/espacos/sp1.png",
    alt: "Espaço interno da clínica UltraDerma"
  },
  {
    title: "Sala de consulta confortável",
    description:
      "Espaço dedicado ao atendimento com conforto, privacidade e design pensado para transmitir confiança.",
    image: "assets/estrutura/espacos/sp2.png",
    alt: "Sala de atendimento da clínica UltraDerma"
  },
  {
    title: "Ambiente de procedimentos",
    description:
      "Área técnica equipada e organizada para realização de exames e procedimentos com segurança e precisão.",
    image: "assets/estrutura/espacos/sp3.png",
    alt: "Ambiente interno de cuidado da clínica UltraDerma"
  },
  {
    title: "Sala de ultrassonografia",
    description:
      "Equipada com tecnologia de ponta para realização de exames precisos em ambiente climatizado e acolhedor.",
    image: "assets/estrutura/espacos/sp4.png",
    alt: "Sala de atendimento da clínica UltraDerma"
  },
  {
    title: "Consultório dermatológico",
    description:
      "Espaço especializado para avaliações de pele, cabelos e unhas com privacidade e enfoque no cuidado personalizado.",
    image: "assets/estrutura/espacos/sp5.png",
    alt: "Sala de atendimento da clínica UltraDerma"
  },
  {
    title: "Consultório 01",
    description:
      "Entrada do consultório privativo, com sinalização e acabamento sofisticado para uma recepção tranquila.",
    image: "assets/estrutura/espacos/sp7.png",
    alt: "Porta do consultório 01 da clínica UltraDerma"
  },
  {
    title: "Sala de exame equipada",
    description:
      "Ambiente com cadeira e equipamentos preparados para avaliações clínicas e procedimentos com conforto e higiene.",
    image: "assets/estrutura/espacos/sp8.png",
    alt: "Sala de exame da clínica UltraDerma"
  },
  {
    title: "Área de acompanhamento",
    description:
      "Espaço pensado para orientações pós-consulta, revisão de resultados e planejamento do tratamento com o paciente.",
    image: "assets/estrutura/espacos/sp6.png",
    alt: "Sala de atendimento da clínica UltraDerma"
  }
];

const scheduleServiceCatalog = [
  {
    group: "Especialidades",
    items: [
      { value: "especialidade-dermatologia", label: "Dermatologia" },
      { value: "especialidade-estomaterapeuta", label: "Estomaterapeuta" },
      { value: "especialidade-pediatria-gastro-pediatria", label: "Pediatria e Gastro Pediatria" },
      { value: "especialidade-cardiologia", label: "Cardiologia" },
      { value: "especialidade-gastroenterologia", label: "Gastroenterologia" },
      { value: "especialidade-psicologia", label: "Psicologia" }
    ]
  },
  {
    group: "Exames",
    items: [
      { value: "exame-ultrassonografia-alta-qualidade", label: "Ultrassonografia de alta qualidade" },
      { value: "exame-endoscopia", label: "Endoscopia" },
      { value: "exame-laboratoriais", label: "Exames laboratoriais" },
      { value: "exame-dna", label: "DNA" },
      { value: "exame-eletrocardiograma", label: "Eletrocardiograma" },
      { value: "exame-risco-cirurgico", label: "Risco cirurgico" }
    ]
  },
  {
    group: "Procedimentos",
    items: [
      { value: "procedimento-retirada-sinais-verrugas", label: "Retirada de sinais e verrugas" },
      { value: "procedimento-retirada-cistos-lipoma", label: "Retirada de cistos e lipoma" },
      { value: "procedimento-correcao-canto-unha", label: "Correção canto de unha" },
      { value: "procedimento-curativos-especiais", label: "Curativos especiais" }
    ]
  }
];

/*
 * CADASTRE A DISPONIBILIDADE REAL DOS PROFISSIONAIS ABAIXO.
 * Use a chave do servico e informe os dias com seus respectivos horarios.
 *
 * Exemplo:
 * "especialidade-dermatologia-clinica": [
 *   { day: "Segunda-feira", times: ["08:00", "09:00", "10:00"] },
 *   { day: "Quarta-feira", times: ["14:00", "15:00"] }
 * ],
 * "especialidade-ultrassonografia-geral": [
 *   { day: "Terca-feira", times: ["08:30", "09:30"] }
 * ]
 */
const serviceAvailability = {};

let activeProfileIndex = 0;
let activeGalleryIndex = 0;
let activeSpacesGalleryIndex = 0;
let profileCards = [];
let activeTabIndex = Math.max(
  0,
  tabPages.findIndex((page) => page.dataset.state === "active")
);

function getRelativeIndex(index, offset, total) {
  return (index + offset + total) % total;
}

function getTabIndexById(tabId) {
  return tabPages.findIndex((page) => page.dataset.tabPage === tabId);
}

function getRequestedTabId() {
  const requestedId = window.location.hash.replace("#", "").trim();
  return getTabIndexById(requestedId) >= 0
    ? requestedId
    : tabPages[0]?.dataset.tabPage || "inicio";
}

function getRequestedModal() {
  const modalValue = new URLSearchParams(window.location.search).get("modal");
  return (modalValue || "").trim().toLowerCase();
}

function scrollToTabsStart(behavior = "smooth") {
  if (!tabsViewport) {
    return;
  }

  const top = Math.max(0, tabsViewport.getBoundingClientRect().top + window.scrollY - 116);
  window.scrollTo({ top, behavior });
}

function updateTabLinks(activeId) {
  const isMenuOpen = document.body.classList.contains("menu-open");

  navLinks.forEach((link) => {
    const isActive = link.dataset.tabTarget === activeId;
    const isMenuLink = Boolean(link.closest(".menu-nav"));

    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-selected", String(isActive));

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }

    link.tabIndex = isMenuLink ? (isMenuOpen ? 0 : -1) : 0;
  });
}

function updateTabMeta(activePage) {
  if (tabCounter) {
    tabCounter.textContent = `${String(activeTabIndex + 1).padStart(2, "0")} / ${String(tabPages.length).padStart(2, "0")}`;
  }

  if (tabCaption) {
    tabCaption.textContent = activePage?.dataset.tabCaption || "";
  }
}

function applyActiveTab({ updateHistory = true, replaceHistory = false, scrollBehavior = "" } = {}) {
  if (!tabPages.length) {
    return;
  }

  const activePage = tabPages[activeTabIndex];
  const activeId = activePage.dataset.tabPage;

  tabPages.forEach((page, index) => {
    const isActive = index === activeTabIndex;
    page.dataset.state = isActive ? "active" : "inactive";
    page.setAttribute("aria-hidden", String(!isActive));
  });

  updateTabLinks(activeId);
  updateTabMeta(activePage);

  if (updateHistory) {
    const nextHash = `#${activeId}`;

    if (window.location.hash !== nextHash) {
      const method = replaceHistory ? "replaceState" : "pushState";
      window.history[method](null, "", nextHash);
    }
  }

  if (scrollBehavior) {
    scrollToTabsStart(scrollBehavior);
  }
}

function activateTab(tabId, options = {}) {
  const nextIndex = getTabIndexById(tabId);

  if (nextIndex === -1) {
    return;
  }

  toggleMenu(false);
  toggleProfilesModal(false);
  toggleScheduleModal(false);

  if (nextIndex === activeTabIndex) {
    updateTabLinks(tabPages[activeTabIndex]?.dataset.tabPage);

    if (options.scrollBehavior) {
      scrollToTabsStart(options.scrollBehavior);
    }

    return;
  }

  activeTabIndex = nextIndex;
  applyActiveTab(options);
}

function toggleMenu(forceState) {
  if (!menuShell || !menuToggle) {
    return;
  }

  const nextState =
    typeof forceState === "boolean"
      ? forceState
      : !document.body.classList.contains("menu-open");

  document.body.classList.toggle("menu-open", nextState);
  menuShell.setAttribute("aria-hidden", String(!nextState));
  menuToggle.setAttribute("aria-expanded", String(nextState));
  updateTabLinks(tabPages[activeTabIndex]?.dataset.tabPage);
}

function syncMenuWithViewport() {
  if (desktopMenuMedia.matches) {
    toggleMenu(false);
  }
}

function syncBodyModalState() {
  const hasOpenModal = [...document.querySelectorAll(".modal-shell")].some(
    (modal) => modal.getAttribute("aria-hidden") === "false"
  );

  document.body.classList.toggle("modal-open", hasOpenModal);
}

function toggleModal(modal, forceState) {
  if (!modal) {
    return false;
  }

  const isOpen = modal.getAttribute("aria-hidden") === "false";
  const nextState = typeof forceState === "boolean" ? forceState : !isOpen;

  modal.setAttribute("aria-hidden", String(!nextState));
  syncBodyModalState();

  return nextState;
}

function toggleProfilesModal(forceState) {
  return toggleModal(profilesModalShell, forceState);
}

function updateScheduleNote(message, state = "idle") {
  if (scheduleNote) {
    scheduleNote.textContent = message;
  }

  if (scheduleAvailabilityBox) {
    scheduleAvailabilityBox.dataset.state = state;
  }
}

function getServiceLabelByValue(serviceValue) {
  for (const group of scheduleServiceCatalog) {
    for (const item of group.items) {
      if (item.value === serviceValue) {
        return item.label;
      }
    }
  }

  return serviceValue === "servico-outro" ? "Outro servico" : "";
}

function updateCustomServiceVisibility(serviceValue) {
  if (!scheduleCustomField || !scheduleServiceCustomInput) {
    return;
  }

  const isCustom = serviceValue === "servico-outro";
  scheduleCustomField.hidden = !isCustom;
  scheduleServiceCustomInput.required = isCustom;

  if (!isCustom) {
    scheduleServiceCustomInput.value = "";
    scheduleServiceCustomInput.setCustomValidity("");
  }
}

function setSelectOptions(select, options, placeholder, disabled = false) {
  if (!select) {
    return;
  }

  select.innerHTML = "";

  if (disabled) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = placeholder;
    select.appendChild(option);
    select.disabled = true;
    return;
  }

  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    select.appendChild(option);
  });

  select.disabled = false;
}

function populateScheduleServices() {
  if (!scheduleServiceSelect) {
    return;
  }

  scheduleServiceSelect.innerHTML = '<option value="">Selecione um servico</option>';

  scheduleServiceCatalog.forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.group;

    group.items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.value;
      option.textContent = item.label;
      optgroup.appendChild(option);
    });

    scheduleServiceSelect.appendChild(optgroup);
  });

  const otherOption = document.createElement("option");
  otherOption.value = "servico-outro";
  otherOption.textContent = "Outro servico (digite abaixo)";
  scheduleServiceSelect.appendChild(otherOption);
}

function updateScheduleTimeOptions() {
  if (!scheduleServiceSelect || !scheduleDaySelect || !scheduleTimeSelect) {
    return;
  }

  const serviceValue = scheduleServiceSelect.value;
  const availability = serviceAvailability[serviceValue] || [];
  const selectedDay = scheduleDaySelect.value;
  const selectedDayBlock = availability.find((item) => item.day === selectedDay);
  const times = selectedDayBlock?.times || [];

  if (times.length) {
    setSelectOptions(
      scheduleTimeSelect,
      times.map((time) => ({ value: time, label: time })),
      "",
      false
    );
    scheduleTimeSelect.value = times[0];
    return;
  }

  setSelectOptions(
    scheduleTimeSelect,
    [{ value: "A confirmar com a clinica", label: "A confirmar com a clinica" }],
    "",
    false
  );
  scheduleTimeSelect.value = "A confirmar com a clinica";
}

function updateScheduleAvailability(serviceValue) {
  if (!scheduleDaySelect || !scheduleTimeSelect) {
    return;
  }

  updateCustomServiceVisibility(serviceValue);

  if (!serviceValue) {
    setSelectOptions(scheduleDaySelect, [], "Selecione um servico primeiro", true);
    setSelectOptions(scheduleTimeSelect, [], "Selecione um dia primeiro", true);
    updateScheduleNote(
      "Selecione um servico para consultar as opcoes de atendimento.",
      "idle"
    );
    return;
  }

  const serviceLabel = getServiceLabelByValue(serviceValue);

  if (serviceValue === "servico-outro") {
    setSelectOptions(
      scheduleDaySelect,
      [{ value: "A confirmar com a clinica", label: "A confirmar com a clinica" }],
      "",
      false
    );
    setSelectOptions(
      scheduleTimeSelect,
      [{ value: "A confirmar com a clinica", label: "A confirmar com a clinica" }],
      "",
      false
    );
    scheduleDaySelect.value = "A confirmar com a clinica";
    scheduleTimeSelect.value = "A confirmar com a clinica";
    updateScheduleNote(
      `${serviceLabel}: descreva abaixo o servico desejado e confirmaremos disponibilidade com a clinica.`,
      "fallback"
    );
    return;
  }

  const availability = serviceAvailability[serviceValue] || [];

  if (!availability.length) {
    setSelectOptions(
      scheduleDaySelect,
      [{ value: "A confirmar com a clinica", label: "A confirmar com a clinica" }],
      "",
      false
    );
    setSelectOptions(
      scheduleTimeSelect,
      [{ value: "A confirmar com a clinica", label: "A confirmar com a clinica" }],
      "",
      false
    );
    scheduleDaySelect.value = "A confirmar com a clinica";
    scheduleTimeSelect.value = "A confirmar com a clinica";
    updateScheduleNote(
      `${serviceLabel}: a disponibilidade sera confirmada pela clinica apos o envio da sua solicitacao.`,
      "fallback"
    );
    return;
  }

  setSelectOptions(
    scheduleDaySelect,
    availability.map((item) => ({ value: item.day, label: item.day })),
    "",
    false
  );
  scheduleDaySelect.value = availability[0].day;
  updateScheduleTimeOptions();
  updateScheduleNote(
    `${serviceLabel}: escolha o dia e depois confirme o horario desejado.`,
    "available"
  );
}

function resetScheduleForm(selectedService = "") {
  if (!scheduleForm) {
    return;
  }

  scheduleForm.reset();

  if (scheduleBirthInput) {
    scheduleBirthInput.max = new Date().toISOString().split("T")[0];
  }

  if (scheduleServiceSelect) {
    scheduleServiceSelect.value = selectedService;
  }

  updateScheduleAvailability(selectedService);
  updateCustomServiceVisibility(selectedService);
}

function toggleScheduleModal(forceState, selectedService = "") {
  const nextState = toggleModal(scheduleModalShell, forceState);

  if (nextState) {
    resetScheduleForm(selectedService);
    scheduleFormBody?.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => scheduleNameInput?.focus());
  }

  return nextState;
}

function formatCpf(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  }

  if (digits.length <= 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  }

  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function formatWhatsapp(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatBirthDate(value) {
  if (!value) {
    return "";
  }

  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function validateScheduleForm() {
  if (!scheduleForm) {
    return false;
  }

  scheduleCpfInput?.setCustomValidity("");
  scheduleWhatsappInput?.setCustomValidity("");

  if (!scheduleForm.reportValidity()) {
    return false;
  }

  const cpfDigits = scheduleCpfInput?.value.replace(/\D/g, "") || "";
  const whatsappDigits = scheduleWhatsappInput?.value.replace(/\D/g, "") || "";

  if (cpfDigits.length !== 11) {
    scheduleCpfInput?.setCustomValidity("Digite um CPF com 11 digitos.");
    scheduleCpfInput?.reportValidity();
    return false;
  }

  if (whatsappDigits.length < 10) {
    scheduleWhatsappInput?.setCustomValidity("Digite um WhatsApp valido com DDD.");
    scheduleWhatsappInput?.reportValidity();
    return false;
  }

  return true;
}

function submitScheduleForm() {
  if (!validateScheduleForm()) {
    return;
  }

  const selectedServiceValue = scheduleServiceSelect?.value || "";
  const serviceLabel =
    selectedServiceValue === "servico-outro"
      ? scheduleServiceCustomInput?.value.trim() || "Outro servico"
      : getServiceLabelByValue(selectedServiceValue);
  const emailValue = scheduleEmailInput?.value.trim() || "";
  const messageLines = [
    "Ola, quero solicitar um agendamento na UltraDerma.",
    "",
    `Nome completo: ${scheduleNameInput?.value.trim() || ""}`,
    `CPF: ${scheduleCpfInput?.value.trim() || ""}`,
    emailValue ? `Email: ${emailValue}` : "",
    `Data de nascimento: ${formatBirthDate(scheduleBirthInput?.value || "")}`,
    `WhatsApp: ${scheduleWhatsappInput?.value.trim() || ""}`,
    `Servico: ${serviceLabel}`,
    `Dia: ${scheduleDaySelect?.value || ""}`,
    `Horario: ${scheduleTimeSelect?.value || ""}`
  ].filter(Boolean);

  const clinicPhoneNumber = "559889191424";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${clinicPhoneNumber}&text=${encodeURIComponent(
    messageLines.join("\n")
  )}`;

  window.open(whatsappUrl, "_blank", "noopener");
  toggleScheduleModal(false);
}

function createProfessionalMedia(professional, mediaClassName) {
  if (professional.image) {
    const imagePosition = professional.imagePosition
      ? ` style="object-position: ${professional.imagePosition};"`
      : "";

    return `
      <div class="${mediaClassName}">
        <img src="${professional.image}" alt="${professional.alt}"${imagePosition} />
      </div>
    `;
  }

  return `
    <div class="${mediaClassName} ${mediaClassName}--placeholder" role="img" aria-label="${professional.alt}">
      <span>Foto</span>
    </div>
  `;
}

function getProfessionalVariantClass(professional) {
  const reference = `${professional.specialization || ""} ${professional.areas.join(" ")}`.toLowerCase();
  return reference.includes("dermat") || reference.includes("trico") || reference.includes("lesoes")
    ? "team-card--derm"
    : "team-card--ultra";
}

function createProfessionalDetail(label, value, modifier = "") {
  if (!value) {
    return "";
  }

  const detailClassName = ["team-card__detail", modifier].filter(Boolean).join(" ");

  return `
    <div class="${detailClassName}">
      <span class="team-card__detail-label">${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function createProfileCard(professional, extraClass = "") {
  const article = document.createElement("article");
  article.className = `profile-card ${extraClass}`.trim();
  const specializationMarkup = professional.specialization
    ? `<span class="profile-card__role">${professional.specialization}</span>`
    : "";
  const registerMarkup = professional.crm
    ? `<span class="profile-card__crm">${professional.crm}</span>`
    : "";

  article.innerHTML = `
    ${createProfessionalMedia(professional, "profile-card__media")}
    <div class="profile-card__content">
      ${specializationMarkup}
      <h3>${professional.name}</h3>
      ${registerMarkup}
      <p>${professional.description}</p>
      <ul>
        ${professional.areas.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
  return article;
}

function createDirectoryCard(professional, index) {
  const article = document.createElement("article");
  article.className = `team-card ${getProfessionalVariantClass(professional)}`.trim();
  const hasImage = Boolean(professional.image);
  const imagePosition = professional.imagePosition
    ? ` style="object-position: ${professional.imagePosition};"`
    : "";
  const detailsMarkup = [
    createProfessionalDetail(
      "Especialidade",
      professional.specialization,
      "team-card__detail--specialty"
    ),
    createProfessionalDetail("Registro", professional.crm, "team-card__detail--register")
  ]
    .filter(Boolean)
    .join("");
  const areasCountLabel =
    professional.areas.length === 1 ? "1 frente" : `${professional.areas.length} frentes`;

  article.innerHTML = `
    <div class="team-card__photo ${hasImage ? "team-card__photo--with-image" : ""}">
      ${
        hasImage
          ? `<img src="${professional.image}" alt="${professional.alt}"${imagePosition} />`
          : `<span class="team-card__initials">${String(index + 1).padStart(2, "0")}</span>`
      }
      <span class="team-card__photo-tag">Profissional ${String(index + 1).padStart(2, "0")}</span>
    </div>
    <div class="team-card__body">
      <div class="team-card__header">
        <h3>${professional.name}</h3>
        <p class="team-card__description">${professional.description}</p>
      </div>
      ${detailsMarkup ? `<div class="team-card__details">${detailsMarkup}</div>` : ""}
      <div class="team-card__areas-block">
        <div class="team-card__section-head">
          <span class="team-card__areas-title">Areas de atuacao</span>
          <span class="team-card__areas-count">${areasCountLabel}</span>
        </div>
        <div class="team-card__areas">
          ${professional.areas.map((area) => `<span>${area}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
  return article;
}

function updateProfileCards() {
  if (!profileCards.length) {
    return;
  }

  const total = profileCards.length;
  const nextIndex = getRelativeIndex(activeProfileIndex, 1, total);
  const prevIndex = getRelativeIndex(activeProfileIndex, -1, total);

  profileCards.forEach((card, index) => {
    card.classList.remove("is-active", "is-next", "is-prev", "is-hidden");

    if (index === activeProfileIndex) {
      card.classList.add("is-active");
    } else if (index === nextIndex) {
      card.classList.add("is-next");
    } else if (index === prevIndex) {
      card.classList.add("is-prev");
    } else {
      card.classList.add("is-hidden");
    }
  });

  if (profileStatus) {
    profileStatus.textContent = `${String(activeProfileIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  }
}

function renderProfiles() {
  if (profileCarousel) {
    profileCarousel.innerHTML = "";

    featuredProfessionals.forEach((professional) => {
      const carouselCard = createProfileCard(professional);
      profileCarousel.appendChild(carouselCard);
    });

    profileCards = [...profileCarousel.querySelectorAll(".profile-card")];
    updateProfileCards();
  } else {
    profileCards = [];
  }

  if (profileModalGrid) {
    profileModalGrid.innerHTML = "";
    professionals.forEach((professional) => {
      const modalCard = createProfileCard(professional, "profile-card--modal");
      profileModalGrid.appendChild(modalCard);
    });
  }

  if (professionalsDirectory) {
    professionalsDirectory.innerHTML = "";
    professionals.forEach((professional, index) => {
      professionalsDirectory.appendChild(createDirectoryCard(professional, index));
    });
  }

  syncInteractiveCursors();
}

function moveProfiles(direction) {
  const total = profileCards.length;

  if (!total) {
    return;
  }

  activeProfileIndex = getRelativeIndex(activeProfileIndex, direction, total);
  updateProfileCards();
}

function updateGallery() {
  const slide = clinicSlides[activeGalleryIndex];

  if (galleryImage) {
    galleryImage.src = slide.image;
    galleryImage.alt = slide.alt;
  }

  if (galleryTitle) {
    galleryTitle.textContent = slide.title;
  }

  if (galleryDescription) {
    galleryDescription.textContent = slide.description;
  }

  if (galleryStatus) {
    galleryStatus.textContent = `${String(activeGalleryIndex + 1).padStart(2, "0")} / ${String(clinicSlides.length).padStart(2, "0")}`;
  }
}

function moveGallery() {
  activeGalleryIndex = getRelativeIndex(activeGalleryIndex, 1, clinicSlides.length);
  updateGallery();
}

function updateSpacesGallery() {
  const slide = spacesSlides[activeSpacesGalleryIndex];

  if (spacesGalleryImage) {
    spacesGalleryImage.hidden = true;
    spacesGalleryImage.onload = () => {
      spacesGalleryImage.hidden = false;
    };
    spacesGalleryImage.onerror = () => {
      spacesGalleryImage.hidden = true;
    };
    spacesGalleryImage.alt = slide.alt;
    spacesGalleryImage.src = slide.image;

    if (spacesGalleryImage.complete && spacesGalleryImage.naturalWidth > 0) {
      spacesGalleryImage.hidden = false;
    }
  }

  if (spacesGalleryTitle) {
    spacesGalleryTitle.textContent = slide.title;
  }

  if (spacesGalleryDescription) {
    spacesGalleryDescription.textContent = slide.description;
  }

  if (spacesGalleryStatus) {
    spacesGalleryStatus.textContent = `${String(activeSpacesGalleryIndex + 1).padStart(2, "0")} / ${String(spacesSlides.length).padStart(2, "0")}`;
  }
}

function moveSpacesGallery() {
  activeSpacesGalleryIndex = getRelativeIndex(activeSpacesGalleryIndex, 1, spacesSlides.length);
  updateSpacesGallery();
}

tabTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const targetId = trigger.dataset.tabTarget;

    if (!targetId) {
      return;
    }

    event.preventDefault();
    activateTab(targetId, { scrollBehavior: "smooth" });
  });
});

navLinks.forEach((link) => {
  link.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    const siblings = [...link.parentElement.querySelectorAll("a[data-tab-target]")];
    const currentIndex = siblings.indexOf(link);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = getRelativeIndex(currentIndex, 1, siblings.length);
    } else if (event.key === "ArrowLeft") {
      nextIndex = getRelativeIndex(currentIndex, -1, siblings.length);
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = siblings.length - 1;
    }

    event.preventDefault();
    siblings[nextIndex].focus();
    activateTab(siblings[nextIndex].dataset.tabTarget, { scrollBehavior: "smooth" });
  });
});

menuToggle?.addEventListener("click", () => toggleMenu());
menuClose?.addEventListener("click", () => toggleMenu(false));
menuBackdrop?.addEventListener("click", () => toggleMenu(false));

openProfilesButton?.addEventListener("click", () => toggleProfilesModal(true));
closeProfilesButtons.forEach((button) =>
  button.addEventListener("click", () => toggleProfilesModal(false))
);

openScheduleButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMenu(false);
    toggleProfilesModal(false);
    toggleScheduleModal(true, button.dataset.scheduleService || "");
  })
);

closeScheduleButtons.forEach((button) =>
  button.addEventListener("click", () => toggleScheduleModal(false))
);

profilePrevButton?.addEventListener("click", () => moveProfiles(-1));
profileNextButton?.addEventListener("click", () => moveProfiles(1));
galleryNextButton?.addEventListener("click", moveGallery);
spacesGalleryNextButton?.addEventListener("click", moveSpacesGallery);

scheduleCpfInput?.addEventListener("input", () => {
  scheduleCpfInput.value = formatCpf(scheduleCpfInput.value);
  scheduleCpfInput.setCustomValidity("");
});

scheduleWhatsappInput?.addEventListener("input", () => {
  scheduleWhatsappInput.value = formatWhatsapp(scheduleWhatsappInput.value);
  scheduleWhatsappInput.setCustomValidity("");
});

scheduleServiceSelect?.addEventListener("change", () => {
  updateScheduleAvailability(scheduleServiceSelect.value);
});

scheduleDaySelect?.addEventListener("change", updateScheduleTimeOptions);

scheduleForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitScheduleForm();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleMenu(false);
    toggleProfilesModal(false);
    toggleScheduleModal(false);
  }
});

window.addEventListener("popstate", () => {
  const requestedId = getRequestedTabId();
  const nextIndex = getTabIndexById(requestedId);

  if (nextIndex === -1) {
    return;
  }

  activeTabIndex = nextIndex;
  applyActiveTab({ updateHistory: false });
});

window.addEventListener("hashchange", () => {
  const requestedId = getRequestedTabId();

  if (tabPages[activeTabIndex]?.dataset.tabPage === requestedId) {
    return;
  }

  activateTab(requestedId, { updateHistory: false });
});

if (typeof desktopMenuMedia.addEventListener === "function") {
  desktopMenuMedia.addEventListener("change", syncMenuWithViewport);
} else if (typeof desktopMenuMedia.addListener === "function") {
  desktopMenuMedia.addListener(syncMenuWithViewport);
}

renderProfiles();
updateGallery();
updateSpacesGallery();
populateScheduleServices();
resetScheduleForm();
syncInteractiveCursors();

const initialTabId = getRequestedTabId();
const initialTabIndex = getTabIndexById(initialTabId);

if (initialTabIndex >= 0) {
  activeTabIndex = initialTabIndex;
}

applyActiveTab({ replaceHistory: true });
syncMenuWithViewport();

if (["agendamento", "schedule"].includes(getRequestedModal())) {
  toggleScheduleModal(true);
}
