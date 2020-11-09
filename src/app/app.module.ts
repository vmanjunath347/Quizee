import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CquizComponent } from './cquiz/cquiz.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PythonqComponent } from './pythonq/pythonq.component';
import { JavascriptqComponent } from './javascriptq/javascriptq.component';
import { JavaqComponent } from './javaq/javaq.component';
import { HttpClientModule} from '@angular/common/http';
//import { EventEmitterService } from './event-emitter.service';

const routes: Routes = [
  {path:"cquiz",component:CquizComponent},
  {path:"",component:HomeComponent},
  {path:"python",component:PythonqComponent},
  {path:"java",component:JavaqComponent},
  {path:"js",component:JavascriptqComponent}
 ]


@NgModule({
  declarations: [
    AppComponent,
    CquizComponent,
    HomeComponent,
    PythonqComponent,
    JavascriptqComponent,
    JavaqComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
