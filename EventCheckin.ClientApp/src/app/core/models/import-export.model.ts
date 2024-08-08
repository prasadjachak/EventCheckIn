

export interface IImportRecord  {
	entityType?: string;
	sourceId?: string;
	destinationId?: string;
	importDate?: Date;
	wasCreated?: boolean;
}

export interface IImportRecordFind {
	entityType?: string;
	sourceId?: string;
	destinationId?: string;
}

export interface IImportHistory {
	file: string;
	path: string;
	size: number;
	status: string;
	importDate?: Date;
	fullUrl?: string;
}

export interface IEntityModel {
	name: string;
	value: string;
	checked: boolean;
	isGroup: boolean;
	entities: IEntityModel[];
}

export enum ImportTypeEnum {
	MERGE = 'merge',
	CLEAN = 'clean',
}

export enum ImportStatusEnum {
	SUCCESS = 'Success',
	FAILED = 'Failed',
	CANCELLED = 'Cancelled',
	IN_PROGRESS = "In Progress"
}
