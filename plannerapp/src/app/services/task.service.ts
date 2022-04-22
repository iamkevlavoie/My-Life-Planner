import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itask } from 'src/app/interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  getTasks(){
    return this.httpClient.get<Itask[]>('http://localhost:3000');
  }

  createTask(formData:any){
    return this.httpClient.post('http://localhost:3000', formData)
  }

  updateTask(id:any, formData:any){
    console.log(id + "helloword")
    return this.httpClient.patch(`http://localhost:3000/tabs/tab2/`+ id, formData);
  }
}
