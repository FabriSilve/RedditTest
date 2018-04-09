import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'details/:id', component: ItemComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}