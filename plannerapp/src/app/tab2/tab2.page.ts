import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Itask } from 'src/app/interfaces/itask';
import { NavController } from '@ionic/angular';
import { Router } from 'express';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tasks!: Itask[];

  constructor(private taskService: TaskService, private route:NavController) {

  }
  nextpageaddtask() {
    this.route.navigateForward(['/tabs/tab3']);
  }
  
  
  ionViewWillEnter() {
    this.taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });
  }
}

