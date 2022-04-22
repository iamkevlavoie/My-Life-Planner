import { Component, Input, OnInit } from '@angular/core';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-achievementgoals',
  templateUrl: './achievementgoals.component.html',
  styleUrls: ['./achievementgoals.component.scss'],
})
export class AchievementgoalsComponent implements OnInit {
  @Input() goal!:Igoal;
  constructor(private goalService:GoalService) { }

  ngOnInit() {}
  checkboxClick(){
    console.log(this.goal.name)
    console.log(this.goal.status)
    this.goal.status = "started"
    console.log(this.goal.status)
    console.log(this.goal.id)
    this.goalService.updateGoal(this.goal.id, this.goal).subscribe(()=>{
      alert('Goal was Updated')
    })
  }
}
