import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {UserModel} from '../../../models/UserModel';
import {Router} from '@angular/router';

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
  isMobile = navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
  constructor(private userService: UsersService,
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
  goto(toUrl: string) {
    this.router.navigate([toUrl]);
  }
}
