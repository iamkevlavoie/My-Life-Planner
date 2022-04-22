import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { GoalService } from 'src/app/services/goal.service';
import { TaskService } from 'src/app/services/task.service';
import { Igoal } from 'src/app/interfaces/igoal';
import { Itask } from 'src/app/interfaces/itask';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  tasks;
    goals!: Igoal[];
  constructor(private menu:MenuController, private route:NavController, private taskService:TaskService,private goalService:GoalService) { }
  

  updateTask(){
    console.log(this.tasks)
    this.tasks.status = "completed"
    console.log(this.tasks)
    this.taskService.updateTask(this.tasks.id,this.tasks).subscribe(()=>{
      alert('Task was Updated')
    })
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.goalService.getGoals().subscribe((results) => {
      this.goals = results;
    }, (err) => {
      console.log(err);
    });

    //getting all task from db

    this.taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });



  }
}
