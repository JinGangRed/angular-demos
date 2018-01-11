import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {UserModel} from '../../../models/UserModel';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UsersService]
})
export class UsersListComponent implements OnInit {
  users: UserModel[];
  itemPerPage = 8;
  totalItems = 0;
  currentPage = 1;
  modalRef: BsModalRef; // 模态框
  isMobile = navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
  deleteId: string;
  constructor(private userService: UsersService,
              private modalService: BsModalService,
              private router: Router) {
  }

  ngOnInit() {
    this.getUsers();
  }
  pageChanged(event: any) {
    this.currentPage = event.page;
    this.getUsers();
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  getUsers() {
    this.userService.getUsers(this.itemPerPage, this.currentPage).subscribe(data => {
      console.log(data);
      this.users = data.users;
      this.totalItems = data.count;
      console.log(this.users);
      console.log(this.totalItems);
    });
  }
  deleteUser(id: string) {
    console.log('待删除的用户ID:' + this.deleteId);
    this.userService.deleteUser(id);
    this.modalRef.hide();
  }
  goto(toUrl: string) {
    this.router.navigate([toUrl]);
  }
  openModal(template: TemplateRef<any>, deleteId: string) {
    this.deleteId = deleteId;
    this.modalRef = this.modalService.show(template);
  }
}
