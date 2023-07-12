// Variables to keep state
var mediaOrigin = undefined;
var viewer = new PANOLENS.Viewer({
  output: "console",
  controlButtons: ["fullscreen"],
});
var panoMap = new Map();
var infoSpotData = new Map();
var swiper = undefined;
var control = PANOLENS.CONTROLS.ORBIT;
var isAMobileDevice = false;
var hasPermToSensors = false;

// Default Icons
var eyeImage =
  "data:image/png;base64,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";
var walkImage =
  "data:image/png;base64,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";

// This fetch project's data from .json
function makePanoGraph(pano_data) {
  fetch(pano_data)
    .then((response) => response.json())
    .then((panoramaData) => {
      mediaOrigin = panoramaData.mediaOrigin;
      proccessPanoramas(panoramaData.panoramas);
    });
}

// This builds panorama graph, with portals and info spots
function proccessPanoramas(panoramas) {
  panoMap.clear();
  infoSpotData.clear();

  // Load Each Panorama
  panoramas.forEach((panorama) => {
    var panoObject = createImagePanorama(mediaOrigin + panorama.source);
    viewer.add(panoObject);
    panoMap.set(panorama.id, panoObject);

    // Make InfoSpots
    panorama.infoSpots.forEach((spot) => {
      var spotId = undefined;
      if (spot.brief.length > 1) {
        spotId = uuid();
        infoSpotData.set(spotId, spot);
      }

      panoObject.add(
        createInfoSpot(
          new THREE.Vector3(...spot.point),
          spot.title,
          spotId,
          spot.image.length > 1 ? mediaOrigin + spot.image : undefined
        )
      );
    });

    // Apply initial Look At, if defined
    if (panorama.initialLookAt.length > 1) {
      initialLookAt(panoObject, new THREE.Vector3(...panorama.initialLookAt));
    }
  });

  // Make Links between Panoramas
  panoramas.forEach((panorama) => {
    panorama.links.forEach((link) => {
      linkPanoramas(
        panoMap.get(panorama.id),
        panoMap.get(link.destination),
        new THREE.Vector3(...link.point)
      );
    });
  });

  // If Mobile, enable sensor control by default
  if (isMobile()) {
    isAMobileDevice = true;
    if (canRequestPermission()) {
      permission();
    } else {
      control = PANOLENS.CONTROLS.DEVICEORIENTATION;
      viewer.enableControl(control);
    }
  }
}

// Focus tweening parameter
var parameters = {
  amount: 50,
  duration: 1000,
  curve: "Exponential",
  easing: "Out",
  iterative: false,
};

function onFocus() {
  this.focus(
    parameters.duration,
    TWEEN.Easing[parameters.curve][parameters.easing]
  );
}

// Callbacks for showing/hiding texts
function displayText(event) {
  event.target.element.style.display = "block";
}

function hideTexts() {
  this.children.forEach((child) => {
    if (child.element) {
      child.element.style.display = "none";
    }
  });
}

// Progress Bar Logic
var progressElement = document.getElementById("progress");

function onEnter() {
  progressElement.style.width = 0;
  progressElement.classList.remove("finish");
}

function onProgress(event) {
  progress = (event.progress.loaded / event.progress.total) * 100;
  progressElement.style.width = progress + "%";
  if (progress === 100) {
    progressElement.classList.add("finish");
  }
}

// This create a panorama from an equirectangular image url
function createImagePanorama(url) {
  var panorama = new PANOLENS.ImagePanorama(url);
  panorama.addEventListener("progress", onProgress);
  panorama.addEventListener("enter", onEnter);
  panorama.addEventListener("leave", hideTexts);
  return panorama;
}

// This sets a initial look point in a given panorama
function initialLookAt(panorama, vector) {
  panorama.removeEventListener("enter-fade-start");
  panorama.addEventListener("enter-fade-start", function () {
    viewer.tweenControlCenter(vector, 0);
  });
}

// This creates a new Info Spot to be added to a panorama
function createInfoSpot(vector, text, spotId, imgSrc = undefined) {
  var spot = new PANOLENS.Infospot(400, imgSrc ? imgSrc : eyeImage);
  spot.position.copy(vector);
  spot.addHoverText(text);

  if (!isMobile()) {
    spot.addEventListener("click", onFocus);
  }

  if (spotId) {
    spot.addEventListener("click", () => {
      openSpotModal(spotId);
    });
  } else {
    spot.addEventListener("click", displayText);
  }

  return spot;
}

// This creates a link (portal) between 2 panoramas
function linkPanoramas(origin, destination, vector) {
  origin.link(destination, vector, 400, walkImage);
}

// Callback for building and showing an Info Spot Modal
function openSpotModal(spotId) {
  console.log("Opening Modal for InfoSpot " + spotId);

  spotObject = infoSpotData.get(spotId);

  $(".swiper-wrapper").empty();
  swiper?.destroy();

  if (spotObject.media.length > 0) {
    spotObject.media.forEach((media, index) => {
      //Image or Video??
      //var extension = media.substr(media.lastIndexOf('.'),media.length);
      //if([".jpg",".jpeg",".png"].includes(extension))
      const imgTitle = "" + spotObject.title + " Imagen " + (index + 1);
      $(".swiper-wrapper").append(
        '<div class="swiper-slide"><img src="' +
          mediaOrigin +
          media +
          "?rnd=" +
          Math.random() +
          '" title="' +
          imgTitle +
          '"  alt="' +
          imgTitle +
          '"></div>'
      );
    });

    swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  $("#poi-title-img").attr("src", mediaOrigin + spotObject.image);
  $("#poi-title").text(spotObject.title);

  $("#poi-body").empty();

  spotObject.brief.forEach((paragraph) => {
    $("#poi-body").append(`<p>${paragraph}</p>`);
  });

  $("#modal-poi").modal("show");
}

// Device detection Stuff and permissions
var ua = window.navigator.userAgent || window.navigator.vendor || window.opera;

function isMobile() {
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      ua
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      ua.substr(0, 4)
    )
  );
}

function isAndroid() {
  return /(android)/i.test(ua);
}

function permission() {
  DeviceMotionEvent.requestPermission()
    .then((response) => {
      // (optional) Do something after API prompt dismissed.
      if (response == "granted") {
        control = PANOLENS.CONTROLS.DEVICEORIENTATION;
        viewer.enableControl(control);
        hasPermToSensors = true;
      } else {
        //alert("Permiso Rechazado");
        hasPermToSensors = false;
      }
      initView();
    })
    .catch(console.error);
}

function canRequestPermission() {
  return (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  );
}

// Make a new uuid, required to manage internally Info Spot Collection
function uuid() {
  var buf = new Uint32Array(4);
  window.crypto.getRandomValues(buf);
  var idx = -1;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    idx++;
    var r = (buf[idx >> 3] >> ((idx % 8) * 4)) & 15;
    var v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Visualization config methods

function setOrbitControl() {
  control = PANOLENS.CONTROLS.ORBIT;
  viewer.enableControl(control);
}

function setDeviceOrientationControl() {
  if (isAMobileDevice) {
    control = PANOLENS.CONTROLS.DEVICEORIENTATION;
    viewer.enableControl(control);
  }
}

function setNormalMode() {
  viewer.disableEffect();
}

function setCardBoardMode() {
  viewer.enableEffect(PANOLENS.MODES.CARDBOARD);
}

function setStereoMode() {
  viewer.enableEffect(PANOLENS.MODES.STEREO);
}
