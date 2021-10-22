//build array of items in JSON
var inventory=parent.character.items;

//get how big the inventory is.
//0 is first slot, goes horizontally right. 
//Inventory is 7 slots wide, so 0-6 and 7 
//is row 2, starting back from left again.
var inventorySlotNumber =parent.character.isize

for (i = 0; i < inventorySlotNumber; i++) {
	//null breaks this, so ruling that out
	if(inventory[i] === null){
		log("Null object, nothing to transfer","grey");
	}else if(!(inventory[i].name == "hpot0") && !(inventory[i].name == "mpot0") ){
		//log("Not healing or mana, transferring");
		//send_item(receiver,num,quantity)
		send_item("Servitor",i,i.q)
	}else if(inventory[i].name == "hpot0"){
		log("Healing, not transferring","orange");		 
	}else if(inventory[i].name == "mpot0"){
		log("mana, not transferring","orange");		 
	}else{
		log("something is broken","red");
	}
};
