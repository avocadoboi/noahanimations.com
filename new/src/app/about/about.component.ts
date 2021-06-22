import { Component } from '@angular/core';

function calculateNoahAge() {
	const birthYear = 2002;
	const birthMonth = 2;
	const birthDay = 28;

	let currentDate = new Date();

	let noBirthdayYet = currentDate.getMonth() < birthMonth 
		|| currentDate.getMonth() == birthMonth && currentDate.getDate() < birthDay;

	return currentDate.getFullYear() - birthYear - Number(noBirthdayYet);
}

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent {
	age = calculateNoahAge();
}
