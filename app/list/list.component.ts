import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";

@Component({
    selector: "gr-list",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
    //providers: []
})

export class ListComponent {
    @ViewChild("groceryTextField", { static: false }) groceryTextField: ElementRef;

    constructor() { }

    ngOnInit() {
        
    }

    add() {
        
    }
}