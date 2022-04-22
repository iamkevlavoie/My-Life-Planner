import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  taskForm;

  constructor(private formBuilder:FormBuilder, private taskService:TaskService, private alertController:AlertController) {
    this.taskForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date_of_start: ['', [Validators.required]],
      date_of_end: ['', [Validators.required]],
      status: ['', [Validators.required]],
       
    })
  }

  onSubmit(){
    console.log(this.taskForm.value);
    this.taskService.createTask(this.taskForm.value).subscribe(() => {
      // alert('Task was added successfully');
      this.showAlertBox("Sucess", 'Task was added successfully');
      this.taskForm.reset();
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
    return this.taskForm.get('name')!;
  }
}
