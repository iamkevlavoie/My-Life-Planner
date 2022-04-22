import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Inote } from 'src/app/interfaces/inote';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage  {

  notes!:Inote[];

  constructor(private menu:MenuController, private route:NavController,private noteService:NoteService) { }
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

  ionViewWillEnter() {
    this.noteService.getNotes().subscribe((results) => {
      this.notes = results;
    }, (err) => {
      console.log(err);
    });

  }

}
