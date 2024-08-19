import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";
import { ToDoItemViewComponent } from "./components/to-do-item-view/to-do-item-view.component";

const routes: Routes = [
	{ path: '', redirectTo: 'tasks', pathMatch: 'full' },
	{ path: 'tasks', component: ToDoListComponent, 
		children: [
			{ path: ':id', component: ToDoItemViewComponent }
		]},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutesComponent {}