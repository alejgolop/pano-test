 /*
  Instrucciones:
  -Subir panoramas .jpg a S3. Para pruebas usamos el bucket sfield/pano. Al subir, en permisos marcar "Conceder acceso de lectura público" y cargar
  -Duplicar template.js para una nueva ruta/proyecto
  -Cambiar main.js de index.html con el nombre del nuevo .js
  -Definir todos los objetos panorama => variable origin + el nombre del archivo
  -Cargarlos en el Viewer
  -En Google Chrome, abrir consola con 'Ctrl+Shift+I' abrir la consola
  -Ahora al hacer 'Ctrl+Click' Izquierdo sobre el panorama aparecerán las coordenadas
  -Incluir esas coordenadas en el link entre panoramas para que aparezca el icono
  -No olvidar el link de vuelta desde el panorama destino al origen para no 'encerrar' al usuario
  -Para los InfoSpots sustituir el panorama objetivo y las coordenadas como anteriormente
  */


var origin="https://sfield.s3.eu-central-1.amazonaws.com/pano/";

var panorama6 = new PANOLENS.ImagePanorama( origin+"6.jpg" );
var panorama7 = new PANOLENS.ImagePanorama( origin+"7.jpg" );


var viewer = new PANOLENS.Viewer( { output: 'console' } );
 viewer.add( panorama6 );
 viewer.add( panorama7 );


//Si es un móvil, activa el control de los sensores por defecto
 if(isMobile())
 {
   viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
 }

//Links
linkPanoramas(panorama6, panorama7,new THREE.Vector3( -4106.08, 56.71, -2840.92 ));
linkPanoramas(panorama7, panorama6, new THREE.Vector3( 3016.80, -375.40, 3963.07 ));


//InfoSpots
panorama6.add(createInfoSpot(new THREE.Vector3( -4029.06, -1151.02, -2716.20 ), 'Una Piscina'));


  //de 7 a 6
  //3016.80, -375.40, 3963.07

  //de 6 a 7
  //-4106.08, 56.71, -2840.92




 