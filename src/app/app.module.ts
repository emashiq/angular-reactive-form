import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { ReduxComponent } from './redux/redux.component';
import { AdvanceformComponent } from './advanceform/advanceform.component';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { counterReducer } from './reducer/counter';


@NgModule({
  declarations: [
    AppComponent,
    ReduxComponent,
    AdvanceformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ counter:counterReducer })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
