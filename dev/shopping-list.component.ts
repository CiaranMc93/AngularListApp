import {Component} from "angular2/core";

@Component({
	selector: 'shopping-list',
	//local variable = # before name
	template: `
	<ul>
		<li *ngFor="#shoppingListItem of shoppingListItems" 
			(click)="onItemClicked(shoppingListItem)">
			{{ shoppingListItem.name }}
		</li>
	</ul> 
	<input type="text" [(ngModel)]="selectedItem.name">
	<button (click)="onDeleteItem(selectedItem)">Delete Item</button><br>
	<input type="text" #shoppingListItem>
	<button (click)="onAddItem(shoppingListItem)">Add Item</button>
	`
})

export class ShoppingListComponent {
	
	public shoppingListItems = [

	//make objects
	{name: "Milk"},
	{name: "Honey"},
	{name: "Bread"},
	{name: "Cereal"},

	];
	public selectedItem = {name: ""};

	onItemClicked(shoppingListItem)
	{
		//bind to the sent in item
		this.selectedItem = shoppingListItem;
	}

	onAddItem(shoppingListItem){
		//push out a new object to the shopping list items
		this.shoppingListItems.push({name: shoppingListItem.value});
	}

	onDeleteItem(){
		//push out a new object to the shopping list items
		this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem),1);
	}

}