import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.css']
})
export class AddAttendeeComponent implements OnInit {

  @Input() user: User = new User(1, '', '', '');
  @Input() currentAttendees: User[];

  addAttendee(form){
    this.user = form.value;
    this.currentAttendees.push(this.user);
  }

  constructor() { }

  ngOnInit() {
  }

}
