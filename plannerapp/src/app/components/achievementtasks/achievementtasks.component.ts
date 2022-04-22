import { Component, Input, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-achievementtasks',
  templateUrl: './achievementtasks.component.html',
  styleUrls: ['./achievementtasks.component.scss'],
})
export class AchievementtasksComponent implements OnInit {
  @Input() task!:Itask;
  constructor(private taskService:TaskService) { }

  ngOnInit() {}
  checkboxClick(){
    console.log(this.task.name)
    console.log(this.task.status)
    this.task.status = "started"
    console.log(this.task.status)
    console.log(this.task.id)
    this.taskService.updateTask(this.task.id, this.task).subscribe(()=>{
      alert('Goal was Updated')
    })
  }
}
