import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { enableDebugTools } from '../../node_modules/@angular/platform-browser';
import { ReduxComponent } from './redux/redux.component';
import { AdvanceformComponent } from './advanceform/advanceform.component';


const routes: Routes = [
    { path: '', component: AdvanceformComponent },
    { path: 'redux', component: ReduxComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
