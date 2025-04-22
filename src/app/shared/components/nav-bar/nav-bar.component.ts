import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { PRIMENG_IMPORTS } from '@shared/imports/prime-ng-shared.imports';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, RouterLink, PRIMENG_IMPORTS],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
