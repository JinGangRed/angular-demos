import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input()
  formconfig: any[] = [];
  formArray: FormArray;
  // @Output()
  // formArrayEmit = new EventEmitter<FormArray>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formArray = this.createGroup();
  }
  ngOnChanges() {
    // this.formArrayEmit.emit(this.formArray);
  }
  createGroup() {
    const formArray = this.fb.array([]);
    this.formconfig.forEach(control => {
      formArray.controls.push(control.name, this.fb.control(''));
    });
    return formArray;
  }
}
