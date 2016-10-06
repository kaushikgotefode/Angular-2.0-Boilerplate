import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './components/app/app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRouting } from './components/app/app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRouting],
    declarations: [AppComponent, ContainerComponent, HeaderComponent, FooterComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
