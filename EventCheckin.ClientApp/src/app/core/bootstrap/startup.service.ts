import { Injectable } from '@angular/core';
import { AuthService, User } from '@core/authentication';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { switchMap, tap } from 'rxjs/operators';
import { Menu, MenuService } from './menu.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private menuService: MenuService,
    private permissonsService: NgxPermissionsService,
    private rolesService: NgxRolesService
  ) {}

  /**
   * Load the application only after get the menu or other essential informations
   * such as permissions and roles.
   */
  load() {
    return new Promise<void>((resolve, reject) => {
      this.authService
        .change()
        .pipe(
          tap(user => this.setPermissions(user)),
          switchMap(() => this.authService.menu()),
          tap(menu => this.setMenu(menu))
        )
        .subscribe({
          next: () => resolve(),
          error: () => resolve(),
        });
    });
  }

  private setMenu(menu: Menu[]) {
    console.log(menu);
    this.menuService.addNamespace(menu, 'menu');
    this.menuService.set(menu);
  }

  private setPermissions(user: any) {
    if(user.message == 'AccessDenied'){
      this.router.navigateByUrl('/auth/login');
    }else{
      // In a real app, you should get permissions and roles from the user information.
      const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
      this.permissonsService.loadPermissions(permissions);
      this.rolesService.flushRoles();
      this.rolesService.addRoles({ ADMIN: permissions });
  }

    // Tips: Alternatively you can add permissions with role at the same time.
    // this.rolesService.addRolesWithPermissions({ ADMIN: permissions });
  }
}
