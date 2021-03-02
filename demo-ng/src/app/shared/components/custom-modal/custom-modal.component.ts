import { Component } from "@angular/core";
import { UIService } from "../../../core";

@Component({
    moduleId: module.id,
    selector: "ns-custom-modal",
    templateUrl: "./custom-modal.component.html",
})
export class CustomModalComponent {
    constructor(private uiService: UIService) {}

    close(): void {
        this.uiService.closeCustomModal();
    }
}
