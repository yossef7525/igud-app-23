import { Component } from '@angular/core';

@Component({
  selector: 'app-deashboard',
  templateUrl: './deashboard.component.html',
  styleUrls: ['./deashboard.component.scss']
})
export class DeashboardComponent {
  dataStarted = [
    {
      name: 'יוסף כץ',
      email: 'asd54@gma.com',
      sum: 100,
      date: '01/01/2022',
      paytype: 'מזומן',
      error: 'כרטיס גנוב',
      commit: 'התחייבות תשפ"ג'
    },
    {
      name: 'משה ולצר',
      email: 'a7187997@gmail.com ',
      sum: 500,
      date: '01/01/2022',
      paytype: 'אשראי',
      error: 'חסום',
      commit: 'התחייבות תשפ"ג'
    },
    {
      name: 'גדליה רוט',
      email: 'a74587217@gmail.com ',
      sum: 300,
      date: '01/01/2022',
      paytype: 'מזומן',
      error: 'אכ"מ',
      commit: 'התחייבות תשפ"ג'
    },
    {
      name: 'משה ברגר',
      email: 'aas52165@gmail.com',
      sum: 900,
      date: '01/01/2022',
      paytype: 'הוראת קבע',
      error: 'כרטיס אבוד',
      commit: 'התחייבות תשפ"ג'
    },
  ]
}
