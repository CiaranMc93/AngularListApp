import {Component} from "angular2/core";

@Component({
	selector: 'shopping-list',
	//local variable = # before name
	template: `
	<ul>
		<li *ngFor="#shoppingListItem of shoppingListItems">
			{{ shoppingListItem }}
		</li>
	</ul> 
	`
})

export class ShoppingListComponent {
	
	public shoppingListItems = ['Milk', 'Sugar', 'Bread'];

	constructor(argument) {
		// code...
	}
}