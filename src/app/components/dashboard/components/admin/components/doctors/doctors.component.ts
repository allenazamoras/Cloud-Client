import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  settings = {
    columns: {
      name: {
        title: "Name"
      },
      description: {
        title: "Position"
      }
    }
  };

  data = [
    {
      name: "Daniel",
      description: "Physician."
    },
    {
      name: "Ezekiel",
      description: "Surgeon."
    }
  ];
}