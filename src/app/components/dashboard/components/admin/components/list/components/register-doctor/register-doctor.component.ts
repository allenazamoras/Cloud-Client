import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { AlertService } from "src/app/_services/alert.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-register-doctor",
  templateUrl: "./register-doctor.component.html",
  styleUrls: ["./register-doctor.component.scss"]
})
export class RegisterDoctorComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.maxLength(30)]],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      userType: ["doctor", [Validators.required]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    if(this.userService
      .addDoctor(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      )){
        window.location.reload();
        alert("Successful");
      }
  }
}
