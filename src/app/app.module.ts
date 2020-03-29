import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TodoListEffects } from './store/todo.effects';
import { todoItem } from './store/todo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      list:todoItem
    }),
    StoreDevtoolsModule.instrument({logOnly:environment.production}),
    EffectsModule.forRoot([TodoListEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
