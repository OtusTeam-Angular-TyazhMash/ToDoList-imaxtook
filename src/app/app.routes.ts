import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BacklogComponent } from "./components/backlog/backlog.component";
import { ToDoItemViewComponent } from "./components/backlog/to-do-item-view/to-do-item-view.component";
import { BoardComponent } from "./components/board/board.component";

const routes: Routes = [
	{ path: '', redirectTo: 'backlog', pathMatch: 'full' },
	{ path: 'board', component: BoardComponent },
	{ path: 'backlog', component: BacklogComponent, 
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