import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Igoal } from 'src/app/interfaces/igoal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private httpClient:HttpClient) { }
  getGoals(){
    return this.httpClient.get<Igoal[]>('http://localhost:3000/goals');
  }

  creategoal(formData:any){
    return this.httpClient.post('http://localhost:3000/addgoal', formData)
  }

  updateGoal(id:any, formData:any){
    console.log(id + "helloword")
    return this.httpClient.patch(`http://localhost:3000/goals/`+ id, formData);
  }
  // getGoal(id){
  //   return this.httpClient.get<Igoal[]>('http://localhost:3000/goals/`${id}`')
  // }
}
