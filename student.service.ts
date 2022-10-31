import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
getStudents(){
  return [{id:'1',name:'Aaryan',class:'4'},
         {id:'2',name:'Jatin',class:'3'},
         {id:'3',name:'MSr',class:'2'},
         {id:'4',name:'Sivasankar',class:'5'}];
        }
  constructor() { }
}
