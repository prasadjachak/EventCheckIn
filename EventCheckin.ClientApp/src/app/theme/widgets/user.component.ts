import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@core';
import { AuthService, User } from '@core/authentication';
import { debounceTime, tap } from 'rxjs/operators';
import screenfull from 'screenfull';

@Component({
  selector: 'app-user',
  template: `

    <button class="r-full" mat-button [matMenuTriggerFor]="menu" style="margin-left: -4px;">
    <mat-icon style="width: 2.125rem;">account_circle</mat-icon>
      <span class="m-x-8">{{ user.name }}</span>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item  (click)="toggleFullscreen()">
        <mat-icon>fullscreen</mat-icon>
        <span>Full Screen</span>
      </button>

      <button routerLink="/profile/settings" mat-menu-item>
        <mat-icon>edit</mat-icon>
        <span>{{ 'edit_profile' | translate }}</span>
      </button>

      <button mat-menu-item (click)="logout()">
        <mat-icon>exit_to_app</mat-icon>
        <span>{{ 'logout' | translate }}</span>
      </button>
    </mat-menu>
    <div class="row"><span style="margin:0 auto;padding-left:10px;">v4.0</span></div>
  `,
  styles: [
    `
      .avatar {
        width: 24px;
        height: 24px;
      }
    `,
  ],
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(
    private router: Router,
    private auth: AuthService,
    private cdr: ChangeDetectorRef,
    private settings: SettingsService
  ) {}

  ngOnInit(): void {
    this.auth
      .user()
      .pipe(
        tap(user => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.cdr.detectChanges());
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigateByUrl('/auth/login');
    });
  }

  restore() {
    this.settings.reset();
    window.location.reload();
  }


  toggleFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
