import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // users:Users[] =[]



  // constructor( private userService:UserService) { }

  // getUsers(){
  //   this.users = this.userService.getUsers()
  // }


  ngOnInit(): void {
    // this.getUsers()
  }

}
