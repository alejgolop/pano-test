const availableLanguages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

const langStrings = {
  es: {
    "lang-title": "Elegir Indioma",
    "static-view": "Activar Visualización Estática",
    "dinamic-view": "Activar Visualización Dinámica",
    info: "Información",
    confirmation: "Hecho",
    acknowledge: "Entendido",
    image: "Imagen",
    next: "Siguiente",
    previous: "Anterior",
    close: "Cerrar",
    goTo: "Ir al Sitio",
    attrib: "Actividad subvencionada por la Diputación Provincial de Jaén",
    goToDipu: "Ir al Sitio Diputación de Jaén",
    goToParaiso: "Ir al Sitio Jaén Paraíso Interior",
  },
  en: {
    "lang-title": "Select Language",
    "static-view": "Enable Static View",
    "dinamic-view": "Enable Dinamic View",
    info: "Info",
    confirmation: "Done",
    acknowledge: "OK",
    image: "Image",
    next: "Next",
    previous: "Previous",
    close: "Close",
    goToDipu: "Go to Jaén Provincial Council Website",
    goToParaiso: "Go to 'Jaén Paraíso Interior' Website",
    attrib: "Activity subsidized by the Jaén Provincial Council",
  },
};

var language = availableLanguages[0];
function changeLang(code) {
  var newLang = availableLanguages.find((lang) => lang.code == code);

  if (newLang) {
    language = newLang;
  }

  $("#lang-img").attr(
    "src",
    `https://unpkg.com/language-icons/icons/${code}.svg`
  );
  $("#lang-img").attr("title", language.name);
  $("#lang-img").attr("alt", language.name);
  $(".swal2-confirm").text(langStrings[language.code]["confirmation"]);
  $(".swal2-title").text(langStrings[language.code]["lang-title"]);

  $("#chooseLang-btn").attr("title", langStrings[language.code]["lang-title"]);

  $("#info-btn").attr("title", langStrings[language.code]["info"]);
  $("#normal-mode-btn").attr("title", langStrings[language.code]["static-view"]);
  $("#sensor-mode-btn").attr("title", langStrings[language.code]["dinamic-view"]);

  translateInfoSpots();

}

function openChooseLangModal() {
  var langModalBody = `<div class="row lang-selector"><img id="lang-img" class="col" width="64px" alt="${language.name}" title="${language.name}" src="https://unpkg.com/language-icons/icons/${language.code}.svg">
    <div class="col"><select class="form-select" aria-label="Default select example" onchange="changeLang(this.value);">`;
  availableLanguages.forEach((lang) => {
    langModalBody += `<option ${
      lang.code == language.code ? "selected" : ""
    } value="${lang.code}">
          ${lang.name}
          </option>`;
  });

  langModalBody += `</select></div></div>`;

  Swal.fire({
    title: langStrings[language.code]["lang-title"],
    html: langModalBody,
    showDenyButton: false,
    confirmButtonText: langStrings[language.code]["confirmation"],
  });
}
