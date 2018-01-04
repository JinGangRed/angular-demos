import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from './template/template.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormTestComponent} from './ng-test/dynamic-form-test/dynamic-form-test.component';

const guide_routes: Routes = [
  {
    path: 'template',
    component: TemplateComponent,
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent,
  },
  {
    path: 'dynamic-form-test',
    component: DynamicFormTestComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(guide_routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class GuideRoutingModule { }
