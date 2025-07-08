import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HomeComponent } from './components/home/home';
import { NavbarComponent } from './components/navbar/navbar';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent }
];
