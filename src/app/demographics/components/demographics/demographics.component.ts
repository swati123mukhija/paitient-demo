import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DemographicsComponent implements OnInit {
  demoForm: FormGroup;
  firstname: string = '';
  //lastname: string = '';
  constructor(private formbuilder: FormBuilder) {
    this.demoForm = formbuilder.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      gender: new FormControl(),
      ethnicity: new FormControl(),
      education: new FormControl(),
      occupation: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      medical: new FormControl(),
      familymedical: new FormControl(),
      surgeries: new FormControl(),
      insurance: new FormControl(),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.demoForm.value);
  }

  ngOnInit(): void {}
}
