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
  -Para los InfoSpots sustituir el panorama objetivo, las coordenadas como anteriormente y personalizar el texto
  -Se pueden definir puntos de vista inicial para cada panorama (sólo efectivos desde navegador web, no móvil)
  */

var origin="https://sfield.s3.eu-central-1.amazonaws.com/pano/";

//Aquí van los Panoramas.
var panorama6 = createImagePanorama(origin+"6.jpg");
var panorama7 = createImagePanorama(origin+"7.jpg");

//Aquí cargamos los Panoramas en el Viewer.
var viewer = new PANOLENS.Viewer( { output: 'console' } );
 viewer.add( panorama6 );
 viewer.add( panorama7 );



//Aquí creamos los links entre panoramas
linkPanoramas(panorama6, panorama7,new THREE.Vector3( -4106.08, 56.71, -2840.92 ));
linkPanoramas(panorama7, panorama6, new THREE.Vector3( 3016.80, -375.40, 3963.07 ));

//Aquí añadimos los InfoSpots a los panoramas
panorama6.add(createInfoSpot(new THREE.Vector3( -4029.06, -1151.02, -2716.20 ), 'Una Piscina','https://sfield.s3.eu-central-1.amazonaws.com/pano/pool.png'));

//Aquí definimos el punto de vista inicial de cada panorama, el cual no es obligatorio. Sólo funciona en navegador web, no en el móvil (por el control basado en sensores).
initialLookAt(panorama6,new THREE.Vector3(-4247.17, -590.58, -2556.46));


//Si es un móvil, activa el control de los sensores por defecto.
if(isMobile())
{
   if(canRequestPermission())
   {
    permission();
   }else{
     viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
   }
 
}
 