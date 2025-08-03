import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home-nav-card',
  imports: [],
  templateUrl: './home-nav-card.component.html',
  styleUrl: './home-nav-card.component.css'
})
export class HomeNavCardComponent {
  @Input() imgUrl = "";

}
