var mediaOrigin=undefined;
var viewer = new PANOLENS.Viewer( { output: 'console' } );
var panoMap=new Map();
var infoSpotData=new Map();

function makePanoGraph(pano_data)
{
    fetch(pano_data).then(response => response.json())
    .then(panoramaData => {
        mediaOrigin=panoramaData.mediaOrigin;
        proccessPanoramas(panoramaData.panoramas);
    });
}

function proccessPanoramas(panoramas)
{
    panoMap.clear();
    infoSpotData.clear();

    //Load Each Panorama
    panoramas.forEach(panorama => {
        var panoObject = createImagePanorama(mediaOrigin+panorama.url);
        viewer.add(panoObject);
        panoMap.set(panorama.id,panoObject);

        //Make InfoSpots
        panorama.infoSpots.forEach(spot =>{

            var spotId=undefined;
            if(spot.brief.length>1)
            {
                spotId=uuid();
                infoSpotData.set(spotId,spot);
            }
            
            panoObject.add(createInfoSpot(new THREE.Vector3( ...spot.point ), spot.title, spotId, spot.image.length>1?mediaOrigin+spot.image:undefined));
        });

        //Apply initial Look At, if defined
        if(panorama.initialLookAt.length>1)
        {
            initialLookAt(panoObject,new THREE.Vector3(...panorama.initialLookAt));
        }

    });

    //Make Links between Panoramas
    panoramas.forEach(panorama => {
        panorama.links.forEach(link =>{
            linkPanoramas(panoMap.get(panorama.id), panoMap.get(link.destination),new THREE.Vector3( ...link.point ));
        });

        
    });


    //If Mobile, enable sensor control by default
    if(isMobile())
    {
    if(canRequestPermission())
    {
        permission();
    }else{
        viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
    }
    
    }
}

