import { Injectable } from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Survey } from '../survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
// survey:Survey;
receivedSurvey:any;
private url='https://mocki.io/v1/d2c1a504-17e4-42d3-ab5b-47ecb23d98bf'

// subject$: Subject<string> = new Subject();

  constructor(private http:HttpClient) {


    // this.subject$.subscribe(value => {

    // })

   }

  // buildObservable(){

  //   let observable = new Observable((observer: Observer<string | number>)=>{
  //     try {
  //      ////////////////////////////////
  //       observer.next('from observer')

  //     } catch (error) {
  //       observer.error(error)
  //     }
  //   })
  //   return observable
  // }

  getSurvey(){
    return this.http.get<Survey[]>(this.url)
  }

  // listenToTitle(){
  //   return this.subject$.asObservable()
  // }

//  setTitle(title:string){
//    this.subject$.next(title)
//  }


  setMessage(data){

    this.receivedSurvey=data
  }
  getMessage(){
    return this.receivedSurvey
  }

}

