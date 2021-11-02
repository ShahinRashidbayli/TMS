import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pending = [
    'Login'
  ];

  processing = [
    'Check mails'
  ];

  done = [
    'Send SRT Status to TM'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  addTask(task: any) {
    //console.log(task.value);
    if (!this.pending.includes(task.value)) {
      this.pending.push(task.value);
      task.value = '';
    } else {
      alert("This task already exist.")
    }
  }
}
