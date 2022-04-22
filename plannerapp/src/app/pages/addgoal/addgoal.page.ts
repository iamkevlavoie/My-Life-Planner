import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-addgoal',
  templateUrl: './addgoal.page.html',
  styleUrls: ['./addgoal.page.scss'],
})
export class AddgoalPage  {
    goalForm;

  constructor(private formBuilder:FormBuilder,private goalservice:GoalService,private alertController:AlertController) { 
    this.goalForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date_of_start: ['', [Validators.required]],
      date_of_end: ['', [Validators.required]],
      status: ['', [Validators.required]],
       
    })


  }
  onSubmit(){
    console.log(this.goalForm.value);
    this.goalservice.creategoal(this.goalForm.value).subscribe(() => {
      // alert('Task was added successfully');
      this.showAlertBox("Sucess", 'Goal was added successfully');
      this.goalForm.reset();
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
    return this.goalForm.get('name')!;
  }
}

  

