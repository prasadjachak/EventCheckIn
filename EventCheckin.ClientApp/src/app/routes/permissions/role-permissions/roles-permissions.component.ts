import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, filter, tap, map } from 'rxjs/operators';
import { Observable, Subject, of as observableOf, startWith, catchError } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RolePermissionModel,  UserModel,  RoleModel, RolePermissionSearchModel } from 'app/api/models';
import { SecurityService, RolesService, UserService } from 'app/api/services';
import { PermissionsEnum ,RolesEnum } from 'app/core/models/PermissionsEnum';
import { PermissionGroups } from '@core/models/PermissionsEnum';
import { ToastrService } from '@core/services/toastr.service';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'ga-org-roles-permissions',
	templateUrl: './roles-permissions.component.html',
	styleUrls: ['./roles-permissions.component.scss']

})
export class RolesPermissionsComponent

	implements OnInit, OnDestroy {

	rolesEnum = RolesEnum;
	permissionGroups = PermissionGroups;
	isWantToCreate: boolean = false;
	loading: boolean;
	enabledPermissions: any = {};
  selectedRoleId = 0;
	user: UserModel;
	role: RoleModel;
	roles: RoleModel[] = [];

	permissions: RolePermissionModel[] = [];

	roles$: Observable<RoleModel[]> = observableOf([]);
	permissions$: Subject<any> = new Subject();

	roleSubject$: Subject<any> = new Subject();

	formControl: FormControl = new FormControl();
	@ViewChild('input') input: ElementRef;

	constructor(
		public readonly translateService: TranslateService,
		private readonly securityService: SecurityService,
		private readonly userRolesService: RolesService,
    private readonly userService: UserService,
    public readonly toastrService: ToastrService
	) {
		//super(translateService);
	}

	ngOnInit(): void {
		this.getRoles();
    this.userService
    .apiUserGetUserGet$Json$Response({id:1})
    .subscribe(result =>{
      this.user = result.body.result;
    });

	}

	ngAfterViewInit() {
		this.roles$ = this.formControl.valueChanges
			.pipe(
				debounceTime(300),
				startWith(''),
				map((value: string) => this._filter(value)),
			);
	}

	/**
	 * Roles filters using substring
	 *
	 * @param value
	 * @returns
	 */
	private _filter(value: string): RoleModel[] {
		return this.roles.filter((role: RoleModel) => !!role);
	}

	/**
	 * Filtered roles options
	 *
	 * @param value
	 * @returns
	 */
	private _getFilteredOptions(value: string): Observable<RoleModel[]> {
		return observableOf(value).pipe(
		  	map((value) => this._filter(value)),
		);
	}

	/**
	 * On autocomplete selection
	 * @param role
	 */
	onSelectionChange(role: any) {
		if (role) {
			this.roles$ = this._getFilteredOptions(role.option.value);
			this.onSelectedRole();
		}
	}

	/**
	 * On input change
	 */
	onInputChange() {
		const nativeElementValue = this.input.nativeElement.value;
    console.log(nativeElementValue);
		if (nativeElementValue) {
			const [role] = this.roles.filter(
				(role: RoleModel) => role.name === nativeElementValue
			);
			//this.role = role;

			/**
			 * We want to create new role
			 */
			this.isWantToCreate = !this.roles.find(
				(role: RoleModel) => role.name === nativeElementValue
			);
		}
	}

	loadPermissions() {
    console.log(1);
		this.enabledPermissions = {};

		if (!this.role) {
			return;
		}


		const { id: roleId } = this.role;

    const rolePermissionSearchModel : RolePermissionSearchModel = {roleId};
    this.securityService
    .apiSecurityListRolePermissionsPost$Json$Response({body:rolePermissionSearchModel})
    .subscribe(result => {
      this.permissions = result.body.result;
      console.log(this.permissions);
      this.permissions.forEach((p) => {
        this.enabledPermissions[p.permission] = p.enabled;
      });
      console.log(this.enabledPermissions);
    });
	}

	permissionChanged(
		permission: string,
		enabled: boolean,
		allowChange: boolean
	) {
		/**
		 * If anyone trying to update another users permissions without enough permisison
		 */
    console.log(allowChange);
		if (!allowChange) {
			this.toastrService.danger(
				'Permission update error',
				'Error'
			);
			return;
		}
		try {
			const { id: roleId } = this.role;

			const permissionToEdit = this.permissions.find(
				(p) => p.permission === permission
			);
      console.log(enabled);
      const rolePermissionModel : RolePermissionModel= {enabled,
				roleId,
				permission };
        console.log(rolePermissionModel);
        this.securityService
        .apiSecurityPermissionsSingleSavePost$Json$Response({body : rolePermissionModel})
        .subscribe(result =>{
          console.log(result);
          this.toastrService.info(
            'Permission updated' + permission +','+  this.formControl.value ,
            'Success'
          );
        });
		} catch (error) {
      console.log(error);
			this.toastrService.danger(
				'Permission Update Error',
				'Error'
			);
		} finally {
			//this.permissions$.next(true);
		}
	}

	/**
	 * CHANGE current selected role
	 */
	onSelectedRole() {
		this.role = this.getRoleByName(this.formControl.value);
		this.isWantToCreate = !this.role;
		this.permissions$.next(true);
    this.loadPermissions();
	}

	/**
	 * GET role by name
	 *
	 * @param name
	 * @returns
	 */
	getRoleByName(name: RoleModel) {
		return this.roles.find(
			(role: RoleModel) => name === role.name
		);
	}

	/***
	 * GET Administration permissions & removed some permission in DEMO
	 */
	getAdministrationPermissions(): PermissionsEnum[] {
		// removed permissions for all users in DEMO mode


		return this.permissionGroups.ADMINISTRATION;
	}

	/**
	 * GET all tenant roles
	 */

	getRoles() {
    console.log(1);
    this.userRolesService
    .apiRolesListRoleGet$Json$Response()
    .subscribe(result =>{
      console.log(result);
      this.roles = result.body.result;
      this.roles$ = observableOf(this.roles);
      this.formControl.setValue(this.formControl.value || RolesEnum.ADMIN);

    });

	}

	/**
	 * Create New Role
	 */
	createRole() {
		const value = this.input.nativeElement.value;
    const userRoleModel : RoleModel = { name: value };
		this.userRolesService.apiRolesAddRolePost$Json$Response({body : userRoleModel})
			.pipe(
				debounceTime(100),
				tap(() => this.roleSubject$.next(true)),
				tap(() => this.isWantToCreate = false),
				tap((result: any) => {
					this.toastrService.success(
						'Role Created' + result.body.result!.name ,
						'Success'
					);
				}),
				catchError((error) => {
					this.toastrService.error(
						'Role Created Error' + value,
						'Error'
					);
					throw new Error(error);
				}),
				untilDestroyed(this)
			)
			.subscribe();
	}

	/**
	 * Delete existed role
	 */
	deleteRole() {
		if (!this.role.isSystemRole) {
			this.userRolesService.apiRolesDeleteRoleDelete$Json$Response({id : this.role.id})
				.pipe(
					debounceTime(100),
					tap(() => this.formControl.setValue('')),
					tap(() => this.roleSubject$.next(true)),
					tap((result: any) => {
						if (result.status === HttpStatusCode.Forbidden) {
							throw new Error();
						}
						this.toastrService.success(
							'Role Deleted' + this.role.name,
							'Success'
						);
					}),
					catchError((error) => {
						this.toastrService.error(
							'Role Deleted Error' + this.role.name ,
							'Error'
						);
						return observableOf(error);
					}),
					untilDestroyed(this)
				)
				.subscribe();
		}
	}

	/**
	 * Disabled General Group Permissions
	 *
	 * @returns
	 */
	isDisabledGeneralPermissions(): boolean {

		if (!this.role) {
			return true;
		}

		/**
		 * Disabled all permissions for "SUPER_ADMIN"
		 */

		const excludes = [ RolesEnum.SUPER_ADMIN ];
    let checkExclude = false;
    let checkIfAdmin = false;

    for(let i=0; i<this.user.userRoles.length; i++){
      if (excludes.includes(this.user.userRoles[i].name as RolesEnum)) {
        checkExclude = true;
      }
      if (this.user.userRoles[i].name === RolesEnum.SUPER_ADMIN) {
        checkIfAdmin = true;
      }
    }

    if(checkExclude && checkIfAdmin){
      if (this.role.name === RolesEnum.ADMIN) {
        return true;
      }
    }

    let checkExclude1 = false;
    let checkIfAdmin1 = false;
    for(let i=0; i<this.user.userRoles.length; i++){
      if (excludes.includes(this.user.userRoles[i].name as RolesEnum)) {
        checkExclude1 = true;
      }
      if (this.user.userRoles[i].name === RolesEnum.ADMIN) {
        checkIfAdmin1 = true;
      }
    }

    if(checkExclude1 && checkIfAdmin1){
      if (this.role.name === RolesEnum.ADMIN) {
        return true;
      }
    }

		return false;
	}

	/**
	 * Disabled General Group Permissions
	 *
	 * @returns
	 */
	isDisabledAdministrationPermissions(): boolean {
		if (!this.role) {
			return true;
		}
		/**
		 * Disabled all administration permissions except "SUPER_ADMIN"
		 */
    let checkIfAdmin1 = false;
    for(let i=0; i<this.user.userRoles.length; i++){
      if (this.user.userRoles[i].name === RolesEnum.SUPER_ADMIN) {
        checkIfAdmin1 = true;
      }
    }

    if(checkIfAdmin1){
      if (this.role.name === RolesEnum.ADMIN) {
        return false;
      }
    }
		return true;
	}

	ngOnDestroy() {}
}
