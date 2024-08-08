import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class ToastrService {
	constructor(
		private readonly snackBar: MatSnackBar
	) {}

	success(message: any,   title?: string) {
		let displayMessage = '';

		if (message && message.message && typeof message.message === 'string') {
			displayMessage = message.message;
		} else {
			displayMessage = message;
		}

    this.snackBar.open(displayMessage,title, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });

	}

	warning(message: any,  title?: string) {
		let displayMessage = '';

		if (message && message.message && typeof message.message === 'string') {
			displayMessage = message.message;
		} else {
			displayMessage = message;
		}

		this.snackBar.open(
			displayMessage,
			title, {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
	}

	danger(
		error: any,
		title: string = 'TOASTR.TITLE.ERROR'
	) {
		let displayMessage = '';

		if (
			error.error &&
			error.error.message &&
			typeof error.error.message === 'string'
		) {
			displayMessage = error.error.message;
		} else if (error.message && typeof error.message === 'string') {
			displayMessage = error.message;
		} else {
			displayMessage = error;
		}

		this.snackBar.open(
			displayMessage,
			title, {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
	}

	error(
		message: any,
		title: string = 'TOASTR.TITLE.ERROR'

	) {
		this.danger(message, title);
	}

	info(
		message: any,
		title: string
	) {
		this.snackBar.open(
			message,
			title, {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
	}
}
