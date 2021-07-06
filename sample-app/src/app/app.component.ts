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

  users = [
    { firstName: 'John', name: 'Doe', birthDate: '2001-04-02', points: 76137613 },
    { firstName: 'Jane', name: 'Doe', birthDate: '1986-12-06', points: 7467 },
    { firstName: 'Jean', name: 'Dupont', birthDate: '1972-09-19', points: 987559 },
    { firstName: 'Xiao', name: 'Lan', birthDate: '2010-03-21', points: 16394 },
    { firstName: 'Marc', name: 'Milian', birthDate: '2004-10-17', points: 157474746 },
  ]

}
