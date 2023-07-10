function initView() {
  console.log(isAMobileDevice);
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
    $("#poi-title").text("Información");
  
    $("#poi-body").empty();
    $("#poi-body").append(`<row><a title="Ir al Sitio Diputación de Jaén" target="_blank" href="https://www.dipujaen.es/"><img class="text-center col-md-6" src="assets/dipu-jaen.jpg" /></a><a title="Ir al Sitio Jaén Paraíso Interior" target="_blank" href="https://www.jaenparaisointerior.es/"><img class="text-center col-md-6" src="assets/paraiso-jaen.jpg" /></a></row>`);
    $("#poi-body").append(`<h3 class="text-center slogan">Actividad subvencionada por la Diputación Provincial de Jaén</h3>`);

    $("#modal-poi").modal("show");
  }


