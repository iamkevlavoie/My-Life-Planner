import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private menu:MenuController, private route:NavController) {}

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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}


