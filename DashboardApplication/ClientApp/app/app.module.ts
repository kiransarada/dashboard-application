import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";

import { UserModule } from "./User/user.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule, HttpClientModule, ModalModule.forRoot(), UserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }