import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-imagesdiary',
  templateUrl: './imagesdiary.page.html',
  styleUrls: ['./imagesdiary.page.scss'],
})
export class ImagesdiaryPage implements OnInit {

  constructor(private menu:MenuController, private route:NavController) { }
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

}
