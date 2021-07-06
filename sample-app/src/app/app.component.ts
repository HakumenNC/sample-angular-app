import { Component } from '@angular/core';
import { faUser, faUserCircle, faCalendar, faCalendarAlt, faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';
  active = 1;

  // icon
  faUser = faUser;
  faUserCircle = faUserCircle;
  faCalendar = faCalendar;
  faCalendarAlt = faCalendarAlt;
  faStar = faStar;

  // users
  users: IUser[] = [
    { userId: 1, firstName: 'John', name: 'Doe', birthDate: '2001-04-02', points: 76137613, email: 'denial.roast@unknown.com' },
    { userId: 2, firstName: 'Jane', name: 'Doe', birthDate: '1986-12-06', points: 7467, email: 'devid.neo@unknown.com' },
    { userId: 3, firstName: 'Jean', name: 'Dupont', birthDate: '1972-09-19', points: 987559, email: 'krish.lee@caramail.fr' },
    { userId: 4, firstName: 'Xiao', name: 'Lan', birthDate: '2010-03-21', points: 16394, email: 'racks.jacson@middle.cn' },
    { userId: 5, firstName: 'Marc', name: 'Milian', birthDate: '2004-10-17', points: 157474746, email: 'jone.mac@gmail.com' },
    { userId: 6, firstName: 'Fabrice', name: 'Hubert', birthDate: '1956-05-01', points: 0, email: 'fab@yahoo.com' },
  ]

}

export interface IUser {
  userId: number;
  firstName: string;
  name: string;
  birthDate: string;
  points: number;
  email: string;
}
