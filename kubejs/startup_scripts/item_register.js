// priority: 1000

onEvent('item.registry.tool_tiers', event => {
	event.add('duskstone', duskstone => {
		duskstone.uses = 2000
	  	duskstone.speed = 6.0
	  	duskstone.attackDamageBonus = 4.0
	  	duskstone.level = 3
	  	duskstone.enchantmentValue = 25
	  	duskstone.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('airt1', airt1 => {
	  	airt1.uses = 2000
	  	airt1.speed = 7.0
	  	airt1.attackDamageBonus = 4.0
	  	airt1.level = 3
	  	airt1.enchantmentValue = 25
	  	airt1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('eartht1', eartht1 => {
	  	eartht1.uses = 2500
	  	eartht1.speed = 6.0
	  	eartht1.attackDamageBonus = 4.0
	  	eartht1.level = 3
	  	eartht1.enchantmentValue = 25
	  	eartht1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('firet1', firet1 => {
	  	firet1.uses = 2000
	  	firet1.speed = 6.0
	  	firet1.attackDamageBonus = 5.0
	  	firet1.level = 3
	  	firet1.enchantmentValue = 25
	  	firet1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('watert1', watert1 => {
	  	watert1.uses = 2000
	  	watert1.speed = 6.0
	  	watert1.attackDamageBonus = 4.0
	  	watert1.level = 3
	  	watert1.enchantmentValue = 30
	  	watert1.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('airt2', airt2 => {
	  	airt2.uses = 2000
	  	airt2.speed = 10.0
	  	airt2.attackDamageBonus = 4.0
	  	airt2.level = 3
	  	airt2.enchantmentValue = 25
	  	airt2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('eartht2', eartht2 => {
	  	eartht2.uses = 3200
	  	eartht2.speed = 8.0
	  	eartht2.attackDamageBonus = 4.0
	  	eartht2.level = 3
	  	eartht2.enchantmentValue = 25
	  	eartht2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

  
	event.add('firet2', firet2 => {
	  	firet2.uses = 2000
	  	firet2.speed = 6.0
	  	firet2.attackDamageBonus = 8.0
	  	firet2.level = 3
	  	firet2.enchantmentValue = 25
	  	firet2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })

	event.add('watert2', watert2 => {
	  	watert2.uses = 2000
	  	watert2.speed = 6.0
	  	watert2.attackDamageBonus = 4.0
	  	watert2.level = 3
	  	watert2.enchantmentValue = 40
	  	watert2.repairIngredient = 'ibpdx:duskstone_ingot'
	  })
})

// Item
onEvent('item.registry', event => {
	event.create('ibpdx:starlight_abberation').displayName('Starlight Abberation')
	event.create('ibpdx:draconium_shard').displayName('Draconium Shard')
	event.create('ibpdx:absolution_rune').displayName('Rune Of Absolution')
	event.create('ibpdx:day_rune').displayName('Rune Of Day')
	event.create('ibpdx:night_rune').displayName('Rune Of Night')
	event.create('ibpdx:star_diamond').displayName('Starmetal Diamond')
	event.create('ibpdx:star_pearl').displayName('Starmetal Pearl')
	event.create('ibpdx:filled_rubber_electron_tube').displayName('Filled Rubber Electron Tube')
	event.create('ibpdx:draconium_crystal').displayName('Draconium Crystal')
	event.create('ibpdx:double_gear').displayName('Double Gear')
	event.create('ibpdx:framed_growth_lens').displayName('Framed Growth Lens')
	event.create('ibpdx:dragon_base').displayName('Dragon Synthesis Base')

	event.create('ibpdx:bioenriched_circuit').displayName('Bioenriched Circuit')
	event.create('ibpdx:wispy_petal').displayName('Wispy Petal')
	event.create('ibpdx:power_gear').displayName('Power Gear')
	event.create('ibpdx:empowered_copper_ingot').displayName('Empowered Copper Ingot')
	event.create('ibpdx:empowered_silver_ingot').displayName('Empowered Silver Ingot')
	event.create('ibpdx:empowered_steel_ingot').displayName('Empowered Steel Ingot')
	event.create('ibpdx:empowered_gold_ingot').displayName('Empowered Gold Ingot')
	event.create('ibpdx:empowered_lead_ingot').displayName('Empowered Lead Ingot')
	event.create('ibpdx:empowered_aluminum_ingot').displayName('Empowered Aluminum Ingot')

	event.create('ibpdx:mixed_brick').displayName('Mixed Brick')
	event.create('ibpdx:bio_napalm_cell').displayName('Bio-Napalm Cell')
	event.create('ibpdx:wither_base').displayName('Wither Synthesis Base')
	event.create('ibpdx:mixed_blend').displayName('Mixed Blend')
	event.create('ibpdx:bloodshine_ingot').displayName('Bloodshine Ingot')

	event.create('ibpdx:resonated_plated_growth_lens').displayName('Resonated Plated Growth Lens')
	event.create('ibpdx:stellar_wrapped_lens').displayName('Stellar Wrapped Lens')
	event.create('ibpdx:speed_gear').displayName('Speed Gear')
	event.create('ibpdx:bedrock_shard').displayName('Bedrock Shard')
	event.create('ibpdx:bedrock_crystal').displayName('Bedrock Crystal')
	event.create('ibpdx:empty_fuel_cell').displayName('Empty Fuel Cell')
	event.create('ibpdx:duskstone_ingot').displayName('Duskstone Ingot')
	event.create('ibpdx:gaia_base').displayName('Gaia Synthesis Base')
	event.create('ibpdx:organic_diode').displayName('Organic Diode')
	event.create('ibpdx:inert_infinity_ingot').displayName('Inert Infinity Ingot')

	event.create('ibpdx:seedoil_fuel_cell').displayName('Seed Oil Fuel Cell')


	event.create('ibpdx:modularium').displayName('Modularium Ingot')
	event.create('ibpdx:star_plate').displayName('Starmetal Plate')

	event.create('ibpdx:redstone_clump').displayName('Redstone Clump')
	event.create('ibpdx:diamond_clump').displayName('Diamond Clump')
	event.create('ibpdx:emerald_clump').displayName('Emerald Clump')
	event.create('ibpdx:lapis_clump').displayName('Lapis Clump')
	event.create('ibpdx:fluorite_clump').displayName('Fluorite Clump')
	event.create('ibpdx:quartz_clump').displayName('Quartz Clump')
	event.create('ibpdx:niter_clump').displayName('Niter Clump')

	event.create('ibpdx:redstone_shard').displayName('Redstone Shard')
	event.create('ibpdx:diamond_shard').displayName('Diamond Shard')
	event.create('ibpdx:emerald_shard').displayName('Emerald Shard')
	event.create('ibpdx:lapis_shard').displayName('Lapis Shard')
	event.create('ibpdx:fluorite_shard').displayName('Fluorite Shard')
	event.create('ibpdx:quartz_shard').displayName('Quartz Shard')
	event.create('ibpdx:niter_shard').displayName('Niter Shard')

	event.create('ibpdx:redstone_crystal').displayName('Redstone Crystal')
	event.create('ibpdx:diamond_crystal').displayName('Diamond Crystal')
	event.create('ibpdx:emerald_crystal').displayName('Emerald Crystal')
	event.create('ibpdx:lapis_crystal').displayName('Lapis Crystal')
	event.create('ibpdx:fluorite_crystal').displayName('Fluorite Crystal')
	event.create('ibpdx:quartz_crystal').displayName('Quartz Crystal')
	event.create('ibpdx:niter_crystal').displayName('Niter Crystal')

	event.create('ibpdx:pyrotheum_blend').displayName('Pyrotheum Blend')
	event.create('ibpdx:cryotheum_blend').displayName('Cryotheum Blend')
	event.create('ibpdx:petrotheum_blend').displayName('Petrotheum Blend')
	event.create('ibpdx:aerotheum_blend').displayName('Aerotheum Blend')

	event.create('ibpdx:mars_air_bottle').displayName('Mars Air Bottle')
	event.create('ibpdx:stainless_steel_ingot').displayName('Stainless Steel Ingot')	

	/*
	event.create('ibpdx:stable_swiftness_potion').displayName('Stable Swiftness Potion')	
	event.create('ibpdx:stable_strength_potion').displayName('Stable Strength Potion')
	event.create('ibpdx:stable_health_potion').displayName('Stable Health Potion')	
	event.create('ibpdx:stable_fire_resistance_potion').displayName('Stable Fire Resistance Potion')
	*/
	event.create('ibpdx:inert_double_gear').displayName('Inert Double Gear')
	event.create('ibpdx:crystallized_flax_seeds').displayName('Crystallized Flax Seeds')
	event.create('ibpdx:empowered_flax_seeds').displayName('Empowered Flax Seeds')
	event.create('ibpdx:addon_base').displayName('Addon Base')

	event.create('ibpdx:crystal_of_speed').displayName('Crystal of Speed')	
	event.create('ibpdx:crystal_of_power').displayName('Crystal of Power')
	event.create('ibpdx:crystal_of_life').displayName('Crystal of Life')	
	event.create('ibpdx:crystal_of_inertion').displayName('Crystal of Inertion')

	event.create('ibpdx:dummy_efficiency_book').displayName('Dummy Efficiency Book')	
	event.create('ibpdx:dummy_sharpness_book').displayName('Dummy Sharpness Book')
	event.create('ibpdx:dummy_smite_book').displayName('Dummy Smite Book')	
	event.create('ibpdx:dummy_arthropods_book').displayName('Dummy Bane of Arthropods Book')
	event.create('ibpdx:dummy_protection_book').displayName('Dummy Protection Book')	
	event.create('ibpdx:dummy_projectile_prot_book').displayName('Dummy Projectile Protection Book')
	event.create('ibpdx:dummy_fire_prot_book').displayName('Dummy Fire Protection Book')	
	event.create('ibpdx:dummy_blast_prot_book').displayName('Dummy Blast Protection Book')
	event.create('ibpdx:dummy_fire_aspect_book').displayName('Dummy Fire Aspect Book')	
	event.create('ibpdx:dummy_power_book').displayName('Dummy Power Book')
	event.create('ibpdx:dummy_flame_book').displayName('Dummy Flame Book')	
	event.create('ibpdx:dummy_knockback_book').displayName('Dummy Knockback Book')
	event.create('ibpdx:dummy_punch_book').displayName('Dummy Punch Book')	
	event.create('ibpdx:dummy_fortune_book').displayName('Dummy Fortune Book')
	event.create('ibpdx:dummy_silk_touch_book').displayName('Dummy Silk Touch Book')	
	event.create('ibpdx:dummy_vein_mining_book').displayName('Dummy Vein Mining Book')
	event.create('ibpdx:dummy_feather_falling_book').displayName('Dummy Feather Falling Book')	
	event.create('ibpdx:dummy_respiration_book').displayName('Dummy Respiration Book')
	event.create('ibpdx:dummy_aqua_affinity_book').displayName('Dummy Aqua Affinity Book')	
	event.create('ibpdx:dummy_depth_strider_book').displayName('Dummy Depth Strider Book')
	event.create('ibpdx:dummy_frost_walker_book').displayName('Dummy Frost Walker Book')	
	event.create('ibpdx:dummy_soul_speed_book').displayName('Dummy Soul Speed Book')
	event.create('ibpdx:dummy_looting_book').displayName('Dummy Looting Book')	
	event.create('ibpdx:dummy_sweeping_edge_book').displayName('Dummy Sweeping Edge Book')
	event.create('ibpdx:dummy_unbreaking_book').displayName('Dummy Unbreaking Book')	
	event.create('ibpdx:dummy_luck_of_the_sea_book').displayName('Dummy Luck of the Sea Book')
	event.create('ibpdx:dummy_lure_book').displayName('Dummy Lure Book')	
	event.create('ibpdx:dummy_infinity_book').displayName('Dummy Infinity Book')
	event.create('ibpdx:dummy_night_vision_book').displayName('Dummy Night Vision Book')	
	event.create('ibpdx:dummy_experience_boost_book').displayName('Dummy Experience Boost Book')
	event.create('ibpdx:dummy_scorching_heat_book').displayName('Dummy Scorching Heat Book')	
	event.create('ibpdx:dummy_holding_book').displayName('Dummy Holding Book')
	event.create('ibpdx:dummy_beheading_book').displayName('Dummy Beheading Book')	
	event.create('ibpdx:dummy_life_leech_book').displayName('Dummy Life Leech Book')
	event.create('ibpdx:dummy_multi_bow_book').displayName('Dummy Multi-Bow Book')	
	event.create('ibpdx:dummy_quickshot_book').displayName('Dummy Quickshot Book')
	event.create('ibpdx:dummy_mending_book').displayName('Dummy Mending Book')

	event.create('ibpdx:rubberized_electron_tube').displayName('Rubberized Electron Tube')
	event.create('ibpdx:clump_silver').displayName('Silver Clump')
	event.create('ibpdx:clump_aluminum').displayName('Aluminum Clump')
	event.create('ibpdx:clump_nickel').displayName('Nickel Clump')
	event.create('ibpdx:clump_silicon').displayName('Silicon Clump')
	event.create('ibpdx:clump_desh').displayName('Desh Clump')
	event.create('ibpdx:clump_draconium').displayName('Draconium Clump')
	event.create('ibpdx:dirty_dust_aluminum').displayName('Dirty Aluminum Dust')
	event.create('ibpdx:dirty_dust_nickel').displayName('Dirty Nickel Dust')
	event.create('ibpdx:dirty_dust_silicon').displayName('Dirty Silicon Dust')
	event.create('ibpdx:dirty_dust_desh').displayName('Dirty Desh Dust')
	event.create('ibpdx:dirty_dust_draconium').displayName('Dirty Draconium Dust')
	event.create('ibpdx:crystal_silver').displayName('Silver Crystal')
	event.create('ibpdx:shard_silver').displayName('Silver Shard')
	event.create('ibpdx:shard_aluminum').displayName('Aluminum Shard')
	event.create('ibpdx:shard_nickel').displayName('Nickel Shard')
	event.create('ibpdx:shard_silicon').displayName('Silicon Shard')
	event.create('ibpdx:shard_desh').displayName('Desh Shard')
	event.create('ibpdx:shard_draconium').displayName('Draconium Shard')
	event.create('ibpdx:energy_shard').displayName('Energy Shard')
	event.create('ibpdx:starspirit_alloy').displayName('Starspirit Alloy')
	event.create('ibpdx:infinity_fragment').displayName('Infinity Fragment')
	event.create('ibpdx:space_survival_kit').displayName('Space Survival Kit')
	event.create('ibpdx:coordinate_data_module').displayName('Coordinate Data Module')
	event.create('ibpdx:inert_infinity_chunk').displayName('Inert Infinity Chunk')
	event.create('ibpdx:energized_infinity_chunk').displayName('Energized Infinity Chunk')

	event.create('ibpdx:iron_loot_bag').displayName('Iron Loot Bag')
	event.create('ibpdx:gold_loot_bag').displayName('Gold Loot Bag')

	event.create('ibpdx:unknown_disc').displayName('Unknown Disc 1')
	event.create('ibpdx:unknown_disc_2').displayName('Unknown Disc 2')
	event.create('ibpdx:unknown_disc_3').displayName('Unknown Disc 3')
	event.create('ibpdx:unknown_disc_4').displayName('Unknown Disc 4')
	event.create('ibpdx:decrypted_disc').displayName('Decrypted Disc 1')
	event.create('ibpdx:decrypted_disc_2').displayName('Decrypted Disc 2')
	event.create('ibpdx:decrypted_disc_3').displayName('Decrypted Disc 3')
	event.create('ibpdx:decrypted_disc_4').displayName('Decrypted Disc 4')
	event.create('ibpdx:spirit_charge').displayName('Spirit Charge')
	event.create('ibpdx:small_spirit_charge').displayName('Small Spirit Charge')	
	event.create('ibpdx:ufo_lover').displayName('UFO Lover')
	event.create('ibpdx:phantom_fantasy').displayName('Phantom Fantasy')
	event.create('ibpdx:catch_us').displayName('Catch Us')
	event.create('ibpdx:china_gal').displayName('China Gal')
	event.create('ibpdx:on_the_moon').displayName('On The Moon')
	event.create('ibpdx:uninstall_love').displayName('Uninstall Love')

	event.create('ibpdx:peat').displayName('Peat').burnTime(1200)
	event.create('ibpdx:ash').displayName('Ash')
	event.create('ibpdx:bituminous_peat').displayName('Bituminous Peat').burnTime(3200)
	event.create('ibpdx:circuit_base_t1').displayName('Simple Circuit Assembly')
	event.create('ibpdx:circuit_base_t2').displayName('Advanced Circuit Assembly')
	event.create('ibpdx:circuit_base_t3').displayName('Optimized Circuit Assembly')
	event.create('ibpdx:copper_electron_tube').displayName('Copper Electron Tube')
	event.create('ibpdx:blaze_electron_tube').displayName('Blaze Electron Tube')
	event.create('ibpdx:diamond_electron_tube').displayName('Diamond Electron Tube')
	event.create('ibpdx:emerald_electron_tube').displayName('Emerald Electron Tube')		
	event.create('ibpdx:fuel_unit').displayName('Fuel Unit').burnTime(200).maxStackSize(64)
	event.create('ibpdx:starmetal_nugget').displayName('Starmetal Nugget')		
	event.create('ibpdx:industrial_sandwich').displayName('Industrial Metal Sandwich')	
	event.create('ibpdx:night_summoner').displayName('Night Summoner')	

	event.create('ibpdx:duskstone_pickaxe').type('pickaxe').tier('duskstone').displayName('Duskstone Pickaxe')
	event.create('ibpdx:duskstone_sword').type('sword').tier('duskstone').displayName('Duskstone Sword')
	event.create('ibpdx:duskstone_axe').type('axe').tier('duskstone').displayName('Duskstone Axe')
	event.create('ibpdx:duskstone_shovel').type('shovel').tier('duskstone').displayName('Duskstone Shovel')

	event.create('ibpdx:airt1_pickaxe').type('pickaxe').tier('airt1').displayName('Gust Pickaxe')
	event.create('ibpdx:airt1_sword').type('sword').tier('airt1').displayName('Gust Sword')
	event.create('ibpdx:airt1_axe').type('axe').tier('airt1').displayName('Gust Axe')
	event.create('ibpdx:airt1_shovel').type('shovel').tier('airt1').displayName('Gust Shovel')

	event.create('ibpdx:eartht1_pickaxe').type('pickaxe').tier('eartht1').displayName('Rocky Pickaxe')
	event.create('ibpdx:eartht1_sword').type('sword').tier('eartht1').displayName('Rocky Sword')
	event.create('ibpdx:eartht1_axe').type('axe').tier('eartht1').displayName('Rocky Axe')
	event.create('ibpdx:eartht1_shovel').type('shovel').tier('eartht1').displayName('Rocky Shovel')

	event.create('ibpdx:firet1_pickaxe').type('pickaxe').tier('firet1').displayName('Ember Pickaxe')
	event.create('ibpdx:firet1_sword').type('sword').tier('firet1').displayName('Ember Sword')
	event.create('ibpdx:firet1_axe').type('axe').tier('firet1').displayName('Ember Axe')
	event.create('ibpdx:firet1_shovel').type('shovel').tier('firet1').displayName('Ember Shovel')

	event.create('ibpdx:watert1_pickaxe').type('pickaxe').tier('watert1').displayName('Bubble Pickaxe')
	event.create('ibpdx:watert1_sword').type('sword').tier('watert1').displayName('Bubble Sword')
	event.create('ibpdx:watert1_axe').type('axe').tier('watert1').displayName('Bubble Axe')
	event.create('ibpdx:watert1_shovel').type('shovel').tier('watert1').displayName('Bubble Shovel')

	event.create('ibpdx:airt2_pickaxe').type('pickaxe').tier('airt2').displayName('Hurricane Pickaxe')
	event.create('ibpdx:airt2_sword').type('sword').tier('airt2').displayName('Hurricane Sword')
	event.create('ibpdx:airt2_axe').type('axe').tier('airt2').displayName('Hurricane Axe')
	event.create('ibpdx:airt2_shovel').type('shovel').tier('airt2').displayName('Hurricane Shovel')

	event.create('ibpdx:eartht2_pickaxe').type('pickaxe').tier('eartht2').displayName('Landslide Pickaxe')
	event.create('ibpdx:eartht2_sword').type('sword').tier('eartht2').displayName('Landslide Sword')
	event.create('ibpdx:eartht2_axe').type('axe').tier('eartht2').displayName('Landslide Axe')
	event.create('ibpdx:eartht2_shovel').type('shovel').tier('eartht2').displayName('Landslide Shovel')

	event.create('ibpdx:firet2_pickaxe').type('pickaxe').tier('firet2').displayName('Sunsear Pickaxe')
	event.create('ibpdx:firet2_sword').type('sword').tier('firet2').displayName('Sunsear Sword')
	event.create('ibpdx:firet2_axe').type('axe').tier('firet2').displayName('Sunsear Axe')
	event.create('ibpdx:firet2_shovel').type('shovel').tier('firet2').displayName('Sunsear Shovel')

	event.create('ibpdx:watert2_pickaxe').type('pickaxe').tier('watert2').displayName('Tidal Pickaxe')
	event.create('ibpdx:watert2_sword').type('sword').tier('watert2').displayName('Tidal Sword')
	event.create('ibpdx:watert2_axe').type('axe').tier('watert2').displayName('Tidal Axe')
	event.create('ibpdx:watert2_shovel').type('shovel').tier('watert2').displayName('Tidal Shovel')

	event.create('ibpdx:spaghetti_and_meatballs').displayName('Spaghetti and Meatballs').food(food=>{food.hunger(12).saturation(1.4)
	event.create('ibpdx:smithing_table_nugget').displayName('Smithing Table Nugget').tooltip('§7The power of a Smithing Table, in the palm of your hand.')
	event.create('ibpdx:proton').displayName('Proton').tooltip('§7Definitely not just a Hydrogen with a unique item ID.')










const diets = [
    'fruits',
    'grains',
    'proteins',
    'vegetables'
]
onEvent('item.registry', event => {
    event.create('ibpdx:multivitamins').displayName('Multivitamins').tooltip('§7Eat to use, even at full hunger. Maximizes nutrition stats without providing hunger restoration. Best used in tandem with the Healing Axe.').food(food => {
        food
            .alwaysEdible()    //Like golden apples
            .fastToEat()    //Like dried kelp
            .eaten(ctx => {//runs code upon consumption
                diets.forEach(diet =>{
                    Utils.server.runCommandSilent(`diet set ${ctx.player.name} ${diet} 1`)
                })
            })
    })
})
})

})

onEvent('item.modification', event => {
    event.modify('botania:quartz_dark', item => {
        item.fireResistant = true
    })
})