/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    
    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

// JULIA Special zone roof test disapier 
const myLayerVisibility = WA.room.onEnterLayer("test_roof_dynamical").subscribe(() => {
    WA.room.hideLayer("test_roof_dynamical");
  });
  
  WA.room.onLeaveLayer("test_roof_dynamical").subscribe(() => {
    WA.room.showLayer("test_roof_dynamical");
  });

// JULIA TEST SCHOOL
 
const myLayerVisibilitySchoolTEST = WA.room.onEnterLayer("cluster1building-floor").subscribe(() => {
    WA.room.hideLayer("cluster1roof");
    WA.room.hideLayer("custer1front-wall-lobby");
  });
  
  WA.room.onLeaveLayer("cluster1building-floor").subscribe(() => {
    WA.room.showLayer("cluster1roof");
    WA.room.showLayer("custer1front-wall-lobby");
  });
