var attack_mode=true

setInterval(function(){
	
	//replenish if below 20% or 50%
	if(character.mp/character.max_mp<0.4) use_skill('use_mp');
	if(character.hp/character.max_hp<0.8) use_skill('use_hp');
	//original func that i've removed -> use_hp_or_mp();
	loot();
	
	if(!attack_mode || character.rip || is_moving(character)) return;

	var target=get_targeted_monster();
	if(!target)
	{
		target=get_nearest_monster({min_xp:100,max_att:120});
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return;
		}
	}
	
	if(!is_in_range(target))
	{
		move(
			character.x+(target.x-character.x)/2,
			character.y+(target.y-character.y)/2
			);
		// Walk half the distance
	}
	else if(can_attack(target))
	{
		set_message("Attacking");
		attack(target);
	}

},1000/4); // Loops every 1/4 seconds is 1000/4
