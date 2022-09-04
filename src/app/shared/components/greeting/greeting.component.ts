import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {

  @Input()
  greeting = 'Hello World!';

  currentDate = new Date()
  apiData = [{ id: 1, name: 'Mirza', born: 1994, job: 'DEV' }]

}
