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
 
const myLayerVisibilitySchool_main = WA.room.onEnterLayer("cluster1building-floor").subscribe(() => {
    WA.room.hideLayer("cluster1roof");
    WA.room.hideLayer("custer1front-wall-lobby");
    WA.room.hideLayer("cluster1front-of-the-building-stripe-lobby");
  });
  
  const myLayerUnVisibilitySchool_main = WA.room.onLeaveLayer("cluster1building-floor").subscribe(() => {
    WA.room.showLayer("cluster1roof");
    WA.room.showLayer("custer1front-wall-lobby");
    WA.room.showLayer("cluster1front-of-the-building-stripe-lobby");
  });

const myLayerVisibilitySchool_class1 = WA.room.onEnterLayer("class1_zone").subscribe(() => {
  WA.room.hideLayer("cluster1front-of-the-building-stripe-1");
  WA.room.hideLayer("cluster1front-wall-1");
});

const myLayerInVisibilitySchool_class1 = WA.room.onLeaveLayer("class1_zone").subscribe(() => {
  WA.room.showLayer("cluster1front-of-the-building-stripe-1");
  WA.room.showLayer("cluster1front-wall-1");
});

const myLayerVisibilitySchool_class2 = WA.room.onEnterLayer("class2_zone").subscribe(() => {
  WA.room.hideLayer("cluster1front-of-the-building-stripe-2");
  WA.room.hideLayer("cluster1front-wall-2");
});

const myLayerUnVisibilitySchool_class2 = WA.room.onLeaveLayer("class2_zone").subscribe(() => {
  WA.room.showLayer("cluster1front-of-the-building-stripe-2");
  WA.room.showLayer("cluster1front-wall-2");
});

const myLayerVisibilitySchool_class3 = WA.room.onEnterLayer("class3_zone").subscribe(() => {
  WA.room.hideLayer("cluster1front-of-the-building-stripe-3");
  WA.room.hideLayer("cluster1front-wall-3");
});

const myLayerUnVisibilitySchool_class3 = WA.room.onLeaveLayer("class3_zone").subscribe(() => {
  WA.room.showLayer("cluster1front-of-the-building-stripe-3");
  WA.room.showLayer("cluster1front-wall-3");
});

const myLayerVisibilitySchool_class4 = WA.room.onEnterLayer("class4_zone").subscribe(() => {
  WA.room.hideLayer("cluster1front-of-the-building-stripe-4");
  WA.room.hideLayer("cluster1front-wall-4");
});

const myLayerUnVisibilitySchool_class4 = WA.room.onLeaveLayer("class4_zone").subscribe(() => {
  WA.room.showLayer("cluster1front-of-the-building-stripe-4");
  WA.room.showLayer("cluster1front-wall-4");
});

const myLayerVisibilitySchool_class5 = WA.room.onEnterLayer("class5_zone").subscribe(() => {
  WA.room.hideLayer("cluster1class-wall-front-5");
});

const myLayerUnVisibilitySchool_class5 = WA.room.onLeaveLayer("class5_zone").subscribe(() => {
  WA.room.showLayer("cluster1class-wall-front-5");
});

const myLayerVisibilitySchool_class6 = WA.room.onEnterLayer("class6_zone").subscribe(() => {
  WA.room.hideLayer("cluster1class-wall-front-6");
});

const myLayerUnVisibilitySchool_class6 = WA.room.onLeaveLayer("class6_zone").subscribe(() => {
  WA.room.showLayer("cluster1class-wall-front-6");
});

const myLayerVisibilitySchool_class7 = WA.room.onEnterLayer("class7_zone").subscribe(() => {
  WA.room.hideLayer("cluster1class-wall-front-7");
});

const myLayerUnVisibilitySchool_class7 = WA.room.onLeaveLayer("class7_zone").subscribe(() => {
  WA.room.showLayer("cluster1class-wall-front-7");
});

const myLayerVisibilitySchool_class8 = WA.room.onEnterLayer("class8_zone").subscribe(() => {
  WA.room.hideLayer("cluster1class-wall-front-8");
});

const myLayerUnVisibilitySchool_class8 = WA.room.onLeaveLayer("class8_zone").subscribe(() => {
  WA.room.showLayer("cluster1class-wall-front-8");
});



