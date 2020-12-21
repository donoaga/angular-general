import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {
  profileForm: FormGroup;
  public Editor = ClassicEditor;
  editorData = '<p>Hello, world!</p>';

  constructor() {
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
        firstNameControl:
          new FormControl('', [
            Validators.required,
          ]),
        lastNameControl: new FormControl('', [
          Validators.required,
        ]),
        emailFormControl: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        editorControl: new FormControl('', [
          Validators.required,
        ])
      }
    )
    ;
  }

  validate(): void {
    if (this.profileForm.invalid) {
      alert('Form is invalid');
    } else {
      alert('Form is valid');
    }
  }

  public hasError(controlName: string, errorName: string): any {
    return this.profileForm.controls[controlName].hasError(errorName);
  }

}
