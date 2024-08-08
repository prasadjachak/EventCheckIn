
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
	productionrun = 'Production Run',
  managerun = 'Manage Run',
	productioncontrol = 'Production Control',
  masters = 'Masters',
  material = 'Material Configuration',
  equipmentmaterial = 'Equipment Material Configuration',
  plantentity = 'Plant Entity Configuration',
	reason = 'Reasons Configuration',
	team = 'Team Configuration',
  employees = 'Employees Configuration',
  designation = 'Designation Configuration',
	shift = 'Shift Configuration',
  energies = 'Energies',
	energypanel = 'Energy Panel',
  analytics = 'Analytics',
  lineanalytics = 'Line Analytics',
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
    PermissionsEnum.productionrun,
		PermissionsEnum.managerun,
    PermissionsEnum.productioncontrol,
    PermissionsEnum.analytics,
		PermissionsEnum.lineanalytics,
    PermissionsEnum.masters,
    PermissionsEnum.material,
    PermissionsEnum.equipmentmaterial,
    PermissionsEnum.plantentity,
		PermissionsEnum.employees,
		PermissionsEnum.team,
    PermissionsEnum.reason,
		PermissionsEnum.designation,
		PermissionsEnum.shift,
    PermissionsEnum.energies,
		PermissionsEnum.energypanel,
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
