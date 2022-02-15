var origin="https://sfield.s3.eu-central-1.amazonaws.com/pano/";
//var origin="assets/";
var maxPhotos=10;
var current=0;

var panorama = new PANOLENS.ImagePanorama( origin+current+".jpg" );
var viewer = new PANOLENS.Viewer( { output: 'console' } );
 viewer.add( panorama );

 var next=function(){
    ++current;
    current=current%maxPhotos;
    viewer.remove( panorama );
    panorama = new PANOLENS.ImagePanorama( origin+current+".jpg" );
    viewer.add( panorama );
    viewer.setPanorama( panorama );
 }

 var x = document.createElement("button");
  var t = document.createTextNode("Next");
  x.setAttribute("style","position: absolute; top: 10px;left: 50%;transform: translate(-50%, -50%);");
  x.setAttribute("onclick","next()");
  x.appendChild(t);
  document.body.appendChild(x);

