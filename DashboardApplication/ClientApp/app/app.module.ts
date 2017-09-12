import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { UserModule } from "./User/user.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule, HttpClientModule, UserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }