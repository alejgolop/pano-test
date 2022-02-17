var origin="https://sfield.s3.eu-central-1.amazonaws.com/pano/";

var panorama6 = createImagePanorama(origin+"6.jpg");
var panorama7 = createImagePanorama(origin+"7.jpg");
var panorama9 = createImagePanorama(origin+"9.jpg");
var panorama3 = createImagePanorama(origin+"3.jpg");

var viewer = new PANOLENS.Viewer( { output: 'console' } );

 viewer.add( panorama6 );
 viewer.add( panorama7 );
 viewer.add( panorama9 );
 viewer.add( panorama3 );

 if(isMobile())
 {
   viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
 }
 

//Links
linkPanoramas(panorama6, panorama7,new THREE.Vector3( -4106.08, 56.71, -2840.92 ));
linkPanoramas(panorama7, panorama6, new THREE.Vector3( 3016.80, -375.40, 3963.07 ));
linkPanoramas(panorama6, panorama9, new THREE.Vector3( -318.13, -406.98, 4966.18 ));
linkPanoramas(panorama9, panorama6, new THREE.Vector3( 1019.15, -769.32, -4833.27 ));
linkPanoramas(panorama9, panorama3, new THREE.Vector3( -4905.57, -646.52, -655.41 ));
linkPanoramas(panorama3, panorama9, new THREE.Vector3( 4035.40, -446.50, 2913.81 ));


  //de 7 a 6
  //3016.80, -375.40, 3963.07

  //de 6 a 7
  //-4106.08, 56.71, -2840.92

  //de 6 a 9
  //-318.13, -406.98, 4966.18

  //de 9 a 6
  //1019.15, -769.32, -4833.27

  //de 9 a 3
  //-4905.57, -646.52, -655.41

  //de 3 a 9 
  //4035.40, -446.50, 2913.81

//InfoSpots


panorama6.add(createInfoSpot(new THREE.Vector3( -4029.06, -1151.02, -2716.20 ), 'Una Piscina'));


/*

panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );
*/


