import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  providers: [
    UsersService
  ]
})
export class UserAddComponent implements OnInit {
  date_bsConfig: Partial<BsDatepickerConfig>;
  userInfoForm: FormGroup;
  pwdEQrePwd = true;

  constructor(private fb: FormBuilder,
              private userService: UsersService) {
    this.date_bsConfig = Object.assign({}, {containerClass: 'theme-green' });
  }

  ngOnInit() {
    this.createForm();
  }
  // 创建表单
  createForm() {
    this.userInfoForm = this.fb.group({
      nickname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      repassword: new FormControl('' , [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      name: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
  }
  // 提交表单
  summitForm(event) {
    // if (this.password.value !== this.repassword.value) {
    //   alert('两次密码输入不一致');
    // }else {
      console.log(this.userInfoForm.value);
      this.userService.addUser(this.userInfoForm.value);
    // }
  }
  // 检查两次密码输入是否一致
  checkRepwd(value: string) {
    if (value.match(this.password.value)) {
      this.pwdEQrePwd = true;
    }
  }




























  // 获取controller值
  get nickname(){
    return this.userInfoForm.get('nickname');
  }
  get email(){
    return this.userInfoForm.get('email');
  }
  get name(){
    return this.userInfoForm.get('name');
  }
  get password(){
    return this.userInfoForm.get('password');
  }
  get repassword(){
    return this.userInfoForm.get('repassword');
  }
  get address(){
    return this.userInfoForm.get('address');
  }
  get phoneNumber(){
    return this.userInfoForm.get('phoneNumber');
  }

}
