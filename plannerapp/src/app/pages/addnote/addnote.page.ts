import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage  {
    noteForm;
  constructor(private formBuilder:FormBuilder,private noteService:NoteService, private alertController:AlertController) { 
  this.noteForm = formBuilder.group({
    name: ['', [Validators.required]],
    heading: ['', [Validators.required]],
    details: ['', [Validators.required]],
    importance: ['', [Validators.required]],
    
     
  })
  }

  onSubmit(){
    console.log(this.noteForm.value);
    this.noteService.createNote(this.noteForm.value).subscribe(() => {
      // alert('Task was added successfully');
      this.showAlertBox("Sucess", 'Note was added successfully');
      this.noteForm.reset();
    });
  }
  
  async showAlertBox(headerText, messageText){
    const alert = await this.alertController.create({
      header: headerText,
      message: messageText,
      buttons:['OK']
    });
    alert.present();
  }
  
  get titleFormControl() {
    return this.noteForm.get('name')!;
  }
  }






