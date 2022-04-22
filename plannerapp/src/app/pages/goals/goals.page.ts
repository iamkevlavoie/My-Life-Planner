import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  goals!: Igoal[];

  constructor(private menu: MenuController, private route: NavController, private goalService: GoalService) { }
  nextpagehome() {
    this.route.navigateForward(['/tabs/tab1']);
  }

  nextpagegoals() {
    this.route.navigateForward(['/goals']);
  }
  nextpageaddgoal() {
    this.route.navigateForward(['/addgoal']);
  }
  nextpageachievements() {
    this.route.navigateForward(['/achievements']);
  }
  nextpagenotes() {
    this.route.navigateForward(['/notes']);
  }
  nextpageaddnote() {
    this.route.navigateForward(['/addnote']);
  }
  nextpagevideo() {
    this.route.navigateForward(['/videodiary']);
  }
  nextpageimage() {
    this.route.navigateForward(['/imagesdiary']);
  }
  ngOnInit() {
  }


  ionViewWillEnter() {
    this.goalService.getGoals().subscribe((results) => {
      this.goals = results;
    }, (err) => {
      console.log(err);
    });

    


  }
}
