import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardModule} from "primeng/card";
import {ChartModule} from "primeng/chart";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TodoListComponent} from './todo-list/todo-list.component';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "./shared/shared.module";
import { CardComponent } from './card/card.component';
import {Card} from "primeng/card";

@NgModule({
    declarations: [AppComponent, DashboardComponent, TodoListComponent, CardComponent],
    imports: [
        BrowserModule,
        ButtonModule,
        BrowserAnimationsModule,
        CardModule,
        ChartModule,
        FlexLayoutModule,
        CheckboxModule,
        FormsModule,
        InputTextModule,
        SharedModule,
    ],
    providers: [], bootstrap: [AppComponent]
})
export class AppModule {
}
