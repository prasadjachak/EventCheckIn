
export enum RolesEnum {
	SUPER_ADMIN = 'SUPER_ADMIN',
	ADMIN = 'ADMIN',
	SECURITY = 'SECURITY',
	GUEST = 'SECURITY',
	MEMBERS = 'MEMBERS',
	MANAGER = 'MANAGER',
	VIEWER = 'VIEWER',
	INTERVIEWER = 'INTERVIEWER'
}


export enum PermissionsEnum {
	dashboard = 'Dashboard',
  checkpass = 'Check Pass',
  assignpass = 'Assign Pass',
  events = 'Events',
  passes = 'Event Pass',
  checkparking = 'Check Parking',
  evententity = 'Event Configuration',
  permissions = 'Permissions',
	users = 'Users',
  roles = 'Roles',
	rolepermissions = 'Role Permissions',
  adminusers = 'Admin Users',
  securityusers = 'Security Users',
  guestusers = 'Guest Users',
  memberusers = 'Member Users',
  settings = 'Settings',
  smtp = 'SMTP',
  logs = 'Logs',
  activitylogs = 'Activity Logs',
  systemlogs = 'System Logs',
  import = 'Import',
  export = 'Export',
}

export const PermissionGroups = {
	//Permissions which can be given to any role
	GENERAL: [
		PermissionsEnum.dashboard,
    PermissionsEnum.checkpass,
    PermissionsEnum.assignpass,
    PermissionsEnum.evententity,
    PermissionsEnum.events,
    PermissionsEnum.passes,
    PermissionsEnum.users,
    PermissionsEnum.adminusers,
    PermissionsEnum.memberusers,
    PermissionsEnum.securityusers,
    PermissionsEnum.guestusers,
		PermissionsEnum.roles,
    PermissionsEnum.rolepermissions,
	],

	//Readonly permissions, are only enabled for Super Admin/Admin role
	ADMINISTRATION: [
    PermissionsEnum.roles,
		PermissionsEnum.rolepermissions,
	]
};
