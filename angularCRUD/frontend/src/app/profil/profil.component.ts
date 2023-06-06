import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user!: User;
  idUser!: string;
  demo:string="demo"
  constructor(private apiService: ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
     // get id
     this.route.params.subscribe(params => {
      this.idUser = params['id'];
      });
      //read user
      this.apiService.readUser(this.idUser).subscribe((user: User[]) => {
        this.user = user['data'];
      });
     
  }

}