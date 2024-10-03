import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TextFormatterComponent } from './text-formatter/text-formatter.component';
export const routes: Routes = [
    { path: "textFormatter", component: TextFormatterComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }