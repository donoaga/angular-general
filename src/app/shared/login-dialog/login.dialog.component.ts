import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthJwtService} from '../../core/auth/auth-jwt.service';
import {doNotUseThisValidator} from '../../core/validators/doNotUseTHisValidator';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.dialog.component.html',
  styleUrls: ['./login.dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    public loginService: AuthJwtService,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        emailFormControl:
          new FormControl('', [
            Validators.required,
            Validators.email,
          ]),
        passwordFormControl: new FormControl('', [
          Validators.required,
          doNotUseThisValidator
        ])
      }
    )
    ;
  }

  public hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onLoginClick(): void {
    if (!this.loginForm.invalid) {
      const params = {email: this.loginForm.get('emailFormControl').value, password: this.loginForm.get('passwordFormControl').value};
      const res = this.loginService.localLogin(params);
      if (res) {
        this.dialogRef.close();
      }
    } else {
      alert('Invalid form please check entered data.');
    }
  }
}
