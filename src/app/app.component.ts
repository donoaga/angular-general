import {Component, OnInit} from '@angular/core';
import {LoginDialogComponent} from './shared/login-dialog/login.dialog.component';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-general';

  constructor(public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.router.navigate(['/dashboard']);
    });
  }
}
