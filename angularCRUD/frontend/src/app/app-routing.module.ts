import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { 
    path: 'prima-pagina', 
    component: HomeComponent,
    data: {
      title: 'Home',
      description: 'prima-pagina'
    } 
  },
  { 
    path: 'myadmin', 
    component: AdminComponent,
    data: {
      title: 'Admin',
      description: 'myadmin'
    } 
  },
  { 
    path: 'profil/:id', 
    component:ProfilComponent,
    // data: {
    //   title: 'Profil user',
    //   description: 'Profil user info'
    // } 
  },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
