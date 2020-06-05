import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";   //dokladnosc lokalizacji
import * as camera from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";

@Component({
    selector: "trash-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {
    lat: number;
    lon: number;

    constructor(private router: Router) {
        this.lat = 0;
        this.lon = 0;
    }

    list() {
        this.router.navigate(["/list"]);
    }

    cam() { //dodac lokalizacje
        camera.takePicture()
            .then((imageAsset) => {
                console.log("Result is an image asset instance");
                var image = new Image();
                image.src = imageAsset;

                geolocation.enableLocationRequest();
                geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
                    .then(res => {
                        this.lat = res.latitude;
                        this.lon = res.longitude;
                    });

                console.log(this.lat + ", " + this.lon);
                this.sendData(image);
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
    }

    sendData(image: Image) {//zrobic wysylanie danych, oraz przypisywanie pkt

    }

}
