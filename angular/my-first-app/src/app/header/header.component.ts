import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() title!: string;
  @Input() buttonText!: string;

  @Output() onToggleChange = new EventEmitter<boolean>();

  isToggled = false;
  id = crypto.randomUUID();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges({title, buttonText}: SimpleChanges) {
    if (buttonText?.currentValue) {
      //
    }

    if (title?.currentValue) {
      //
    }
  }

  toggle(): void {
    this.isToggled = !this.isToggled;
    this.onToggleChange.emit(this.isToggled)
  }
}
