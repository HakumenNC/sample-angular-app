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

  // icons
  faUser = faUser;
  faUserCircle = faUserCircle;
  faCalendar = faCalendar;
  faCalendarAlt = faCalendarAlt;
  faStar = faStar;

  // users
  users: IUser[] = [
    { userId: 1, firstName: 'John', name: 'Doe', birthDate: '2001-04-02', points: 76137613, email: 'denial.roast@unknown.com', photoUrl: "https://randomuser.me/api/portraits/men/79.jpg" },
    { userId: 2, firstName: 'Jane', name: 'Doe', birthDate: '1986-12-06', points: 7467, email: 'devid.neo@unknown.com', photoUrl: "https://randomuser.me/api/portraits/women/44.jpg" },
    { userId: 3, firstName: 'Jean', name: 'Dupont', birthDate: '1972-09-19', points: 987559, email: 'krish.lee@caramail.fr', photoUrl: "https://randomuser.me/api/portraits/men/54.jpg" },
    { userId: 4, firstName: 'Xiao', name: 'Lan', birthDate: '2010-03-21', points: 16394, email: 'racks.jacson@middle.cn', photoUrl: "https://randomuser.me/api/portraits/men/13.jpg" },
    { userId: 5, firstName: 'Marc', name: 'Milian', birthDate: '2004-10-17', points: 157474746, email: 'jone.mac@gmail.com', photoUrl: "https://randomuser.me/api/portraits/men/11.jpg" },
    { userId: 6, firstName: 'Fabienne', name: 'Hubert', birthDate: '1956-05-01', points: 0, email: 'fab@yahoo.com', photoUrl: "https://randomuser.me/api/portraits/women/17.jpg" },
    { userId: 7, firstName: 'Nathan', name: 'Bell', birthDate: '1985-06-08', points: 527935, email: 'nathan.bell@example.com', photoUrl: "https://randomuser.me/api/portraits/men/26.jpg" },
    { userId: 8, firstName: 'Don', name: 'Peters', birthDate: '1979-03-06', points: 0, email: 'don.peters@yahoo.com', photoUrl: "https://randomuser.me/api/portraits/men/15.jpg" },
    { userId: 9, firstName: 'Roger', name: 'Myers', birthDate: '1954-04-04', points: 0, email: 'roger.myers@example.com', photoUrl: "https://randomuser.me/api/portraits/men/32.jpg" },
    { userId: 10, firstName: 'Stephanie', name: 'Lane', birthDate: '1947-03-02', points: 0, email: 'stephanie.lane@gmail.com', photoUrl: "https://randomuser.me/api/portraits/women/35.jpg" },
  ]

}

export interface IUser {
  userId: number;
  firstName: string;
  name: string;
  birthDate: string;
  points: number;
  email: string;
  photoUrl: string
}
