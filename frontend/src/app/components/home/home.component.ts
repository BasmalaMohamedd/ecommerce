import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeNavCardComponent } from '../home-nav-card/home-nav-card.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, HomeNavCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
