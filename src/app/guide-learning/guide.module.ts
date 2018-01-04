import { NgModule } from '@angular/core';
import {TemplateComponent} from './template/template.component';
import {GuideRoutingModule} from './guide-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormTestComponent } from './ng-test/dynamic-form-test/dynamic-form-test.component';
import {ShareModule} from '../app-assets/share.module';

@NgModule({
  imports: [
    ShareModule,
    ReactiveFormsModule, // 响应式表单必须的
    GuideRoutingModule,
  ],
  declarations: [
    TemplateComponent,
    DynamicFormComponent,
    DynamicFormTestComponent,
  ]
})
export class GuideModule { }
