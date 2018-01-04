import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.css']
})
export class DynamicFormTestComponent implements OnInit {
  formConfig: any[];
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'dynamic' : this.fb.group([])
    });
  }
  
  ngOnInit() {
    this.formConfig = [
      {
        name: 'name',
      },
      {
        name: 'network',
      },
      {
        name: 'IP',
      }
    ];
  }
  getFormArray() {
    console.log(this.form.value);
  }

}
