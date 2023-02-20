import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Photo} from "../models/todo";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  imports: [
    NgClass,
    NgStyle
  ],
  standalone: true
})
export class TodoItemComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input() photo!: Photo;
  @Output() onDelete = new EventEmitter<number>();

  constructor() {
  }

  ngDoCheck(): void {
    console.log('DO CHECK')
  }

  ngOnChanges(changes: SimpleChanges) {
    const { photo } = changes;

    if (photo.currentValue) {
      console.log(photo.currentValue)
    }
  }

  ngOnInit(): void {
    console.log('INIT APP')
  }

  ngOnDestroy() {
    console.log('DESTROYED APP')
  }

}
