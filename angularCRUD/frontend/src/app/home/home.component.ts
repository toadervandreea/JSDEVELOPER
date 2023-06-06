import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:User[] = [];
  constructor(private title: Title, private apiService:ApiService) { }

  ngOnInit(): void {
    this.title.setTitle("Product Page - This is the product page");
    this.readUsers();
  }

  readUsers() {
    // read
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users['users'];
     
    });
  }

}
