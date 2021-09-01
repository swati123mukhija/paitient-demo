import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss'],
})
export class DemographicsComponent implements OnInit {
  demoForm: FormGroup;
  firstname: string = '';
  lastname: string = '';
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
      gender: new FormControl('', [Validators.required]),
      ethnicity: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      occupation: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      medical: new FormControl('', [Validators.required]),
      familymedical: new FormControl('', [Validators.required]),
      surgeries: new FormControl('', [Validators.required]),
      insurance: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.demoForm.value);
  }

  ngOnInit(): void {}
}
