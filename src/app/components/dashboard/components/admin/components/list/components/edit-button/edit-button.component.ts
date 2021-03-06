import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService } from "@nebular/theme";
import { ShowcaseDialogComponent } from "../showcase-dialog/showcase-dialog.component";

@Component({
  selector: "app-edit-button",
  templateUrl: "./edit-button.component.html",
  styleUrls: ["./edit-button.component.scss"]
})
export class EditButtonComponent implements OnInit {
  constructor(private router: Router, private dialogService: NbDialogService) {}
  @Input() rowData: any;
  id: number;
  ngOnInit() {
    this.id = this.rowData.id;
  }
  onClick() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: "Edit " + this.rowData.firstName + "'s information",
        type: 6,
        id: this.id
      }
      
    });
  }
}
