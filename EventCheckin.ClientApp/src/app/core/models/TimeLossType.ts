export enum TimeLossType {
  NOT_SCHEDULED =  'NOT_SCHEDULED',
  UNSCHEDULED = 'UNSCHEDULED',
  REJECT_REWORK = 'REJECT_REWORK',
  STARTUP_YIELD = 'STARTUP_YIELD',
  PLANNED_DOWNTIME =  'PLANNED_DOWNTIME',
  UNPLANNED_DOWNTIME =  'UNPLANNED_DOWNTIME',
  MINOR_STOPPAGES =  'MINOR_STOPPAGES',
  REDUCED_SPEED =  'REDUCED_SPEED',
  SETUP =  'SETUP',
  NO_LOSS =  'NO_LOSS'
}


export const TimeLossTypes = {
	//Permissions which can be given to any role
	GENERAL: [
		TimeLossType.NOT_SCHEDULED,
    TimeLossType.UNSCHEDULED,
		TimeLossType.REJECT_REWORK,
    TimeLossType.STARTUP_YIELD,
    TimeLossType.PLANNED_DOWNTIME,
		TimeLossType.UNPLANNED_DOWNTIME,
    TimeLossType.MINOR_STOPPAGES,
    TimeLossType.REDUCED_SPEED,
    TimeLossType.SETUP,
    TimeLossType.NO_LOSS,
	],

};


export enum Symbols {
  equals = '\u003D',
  notEquals = '!='
}
