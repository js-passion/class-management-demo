import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-presenter',
  templateUrl: './add-presenter.component.html',
  styleUrls: ['./add-presenter.component.css']
})
export class AddPresenterComponent implements OnInit {

  @Input() currentPresenters: User[];

  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  addPresenter(presenterForm){
    this.user = presenterForm.value;
    this.currentPresenters.push(this.user);
  }
}
