import { HttpInterceptor } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 ;

  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value)),
    // );
  }

  ngAfterViewInit(): void {

  //   this.username.valueChanges.subscribe(val => {
  //     if((val as string).includes('f')){
  //       alert('not allowd')
  //     }
  //     this.username.reset()
  //   })

  //   this.username.invalid

  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
