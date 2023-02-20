import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() href = '';
  @Input() title = '';

  @Output() onTitleClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.onTitleClick.emit('Changed SOMETHING');
  }
}
