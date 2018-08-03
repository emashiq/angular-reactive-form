import { Component, OnInit } from '@angular/core';
import { INCREMENT, DECREMENT, RESET } from '../reducer/counter';
import { Observable } from '../../../node_modules/rxjs';
import { Store } from '../../../node_modules/@ngrx/store';

interface AppState {
  counter: number;
}
export class IAppState{
  number1:number;
  number2:number;
  sign:number;
}
@Component({
	selector: 'app-redux',
	templateUrl:'./redux.component.html'

})
export class ReduxComponent {
	counter: Observable<number>;
  calculatorItem:  IAppState;
  result: Observable<any>;
	constructor(private store: Store<AppState> ){
    this.counter = store.select('counter');
    //this.result = store.select('calculator');
    this.calculatorItem = new IAppState();
	}
  ngOnInit() {
  }
	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
  }
}