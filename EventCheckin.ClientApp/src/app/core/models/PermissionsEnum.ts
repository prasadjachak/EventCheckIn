
export enum RolesEnum {
	SUPER_ADMIN = 'SUPER_ADMIN',
	ADMIN = 'ADMIN',
	DATA_ENTRY = 'DATA_ENTRY',
	EMPLOYEE = 'EMPLOYEE',
	CANDIDATE = 'CANDIDATE',
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
  evententity = 'Event Entity Configuration',
  permissions = 'Permissions',
	users = 'Users',
  roles = 'Roles',
	rolepermissions = 'Role Permissions',
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
    PermissionsEnum.permissions,
    PermissionsEnum.users,
		PermissionsEnum.roles,
    PermissionsEnum.rolepermissions,
    PermissionsEnum.settings,
    PermissionsEnum.smtp,
    PermissionsEnum.logs,
    PermissionsEnum.activitylogs,
    PermissionsEnum.systemlogs,
    PermissionsEnum.import,
    PermissionsEnum.export,
	],

	//Readonly permissions, are only enabled for Super Admin/Admin role
	ADMINISTRATION: [
		PermissionsEnum.users,
    PermissionsEnum.roles,
		PermissionsEnum.rolepermissions,
    PermissionsEnum.systemlogs
	]
};
