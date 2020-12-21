import {Component} from '@angular/core';
import {AuthJwtService} from '../../core/auth/auth-jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isExpanded = false;

  constructor(public authService: AuthJwtService) {
    console.log('somretgheknfasnf');
  }

  logout(): void {
    this.authService.logout();
  }
}
