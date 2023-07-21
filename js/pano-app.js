function initView() {
  changeLang(language.code);
  if(availableLanguages.length>1)
  {
    $("#chooseLang-btn").removeClass("invisible");
    openChooseLangModal();
  }


  //console.log(isAMobileDevice);
  if (isAMobileDevice) {
    $("#normal-mode-btn").click(() => {
      setOrbitControl();
      updateView();
    });
    $("#sensor-mode-btn").click(() => {
      setDeviceOrientationControl();
      updateView();
    });

    updateView();
  } else {
    $("#normal-mode-btn").addClass("invisible");
    $("#sensor-mode-btn").addClass("invisible");
  }
}
function updateView() {
  if (control == PANOLENS.CONTROLS.ORBIT) {
    $("#normal-mode-btn").addClass("invisible");
    if (hasPermToSensors) {
      $("#sensor-mode-btn").removeClass("invisible");
    } else {
      $("#sensor-mode-btn").addClass("invisible");
    }
  } else {
    $("#normal-mode-btn").removeClass("invisible");
    $("#sensor-mode-btn").addClass("invisible");
  }
}
initView();


function openInfoModal() {
  console.log("Opening Info Modal");

  $(".swiper-wrapper").empty();
  swiper?.destroy();

  $("#poi-title-img").attr("src", "assets/info-btn.svg");
  $("#poi-title").text(langStrings[language.code]["info"]);

  $("#poi-body").empty();
  $("#poi-body").append(`<h3 class="text-center slogan">${langStrings[language.code]["attrib"]}</h3>`);
  $("#poi-body").append(`<div class="row text-center">
  <div class="col"><a title="${langStrings[language.code]["goToDipu"]}" target="_blank" href="https://www.dipujaen.es/"><img class="attrib-img" src="data/media/images/dipu-jaen.jpg" /></a></div>
  <div class="col"><a title="${langStrings[language.code]["goToParaiso"]}" target="_blank" href="https://www.jaenparaisointerior.es/"><img class="attrib-img" src="data/media/images/paraiso-jaen.jpg" /></a></div>
  </div>`);



  $("#modal-poi").modal("show");
}

