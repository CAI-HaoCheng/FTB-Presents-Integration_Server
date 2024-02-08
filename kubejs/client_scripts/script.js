//priority: 0
const hiddenItems = [
	'cyclic:inventory_cake',
	'cyclic:antigravity',
	'rftoolspower:dimensionalcell_simple',
	'refinedpipes:basic_energy_pipe',
	'miniutilities:solar_panel',
	'miniutilities:solar_panel_controller',
	'powah:solar_panel_starter',
	'powah:solar_panel_basic',
	'powah:solar_panel_hardened',
	'powah:solar_panel_blazing',
	'powah:solar_panel_niotic',
	'powah:solar_panel_spirited',
	'powah:solar_panel_nitro',
	'dankstorage:dank_5',
	'dankstorage:dank_6',
	'dankstorage:dank_7',
	'dankstorage:4_to_5',
	'dankstorage:5_to_6',
	'dankstorage:6_to_7',
	'miniutilities:stone_drum',
	'miniutilities:iron_drum',
	'miniutilities:reinforced_large_drum',
	'miniutilities:netherite_reinforced_drum',
	'miniutilities:unstable_drum',
	'miniutilities:quantum_quarry',
	'miniutilities:cursed_earth',
	'powah:furnator_basic',
	'powah:furnator_hardened',
	'powah:furnator_blazing',
	'powah:furnator_niotic',
	'powah:furnator_spirited',
	'powah:furnator_nitro',
	'cyclic:peat_fuel',
	'cyclic:peat_fuel_enriched',
	'cyclic:peat_generator',
	'cyclic:peat_unbaked',
	'cyclic:peat_baked',
	'cyclic:hopper',
	'cyclic:hopper_fluid',
	'cyclic:hopper_gold',
	'cyclic:generator_fuel',
	'cyclic:generator_fluid',
	'cyclic:generator_item',
	'cyclic:generator_food',
	'cyclic:forester',
	'cyclic:terra_preta',
	'cyclic:energy_pipe',
	'cyclic:item_pipe',
	'cyclic:fluid_pipe',
	'cyclic:cable_wrench',
	'cyclic:disenchanter',
	'storagenetwork:inventory_remote',
	'storagenetwork:inventory',
	'storagenetwork:export_kabel',
	'pamhc2foodcore:bakewareitem',
	'pamhc2foodcore:cuttingboarditem',
	'pamhc2foodcore:juiceritem',
	'pamhc2foodcore:grinderitem',
	'pamhc2foodcore:rolleritem',
	'pamhc2foodcore:potitem',
	'pamhc2foodcore:mixingbowlitem',
	'pamhc2foodcore:saucepanitem',
	'pamhc2foodcore:skilletitem',
	'pamhc2foodcore:macncheeseitem',
	'pamhc2foodcore:chocolatecakeitem',
	'pamhc2foodcore:pumpkincheesecakeitem',
	'pamhc2foodcore:cheesecakeitem',
	'pamhc2foodcore:carrotcakeitem',
	'pamhc2foodcore:chocolatemuffinitem',
	'pamhc2foodcore:carrotmuffinitem',
	'pamhc2foodcore:pumpkinmuffinitem',
	'pamhc2foodcore:caramelmuffinitem',
	'pamhc2foodcore:yogurtitem',
	'pamhc2foodcore:chocolateyogurtitem',
	'pamhc2foodcore:crackeritem',
	'pamhc2foodcore:creamitem',
	'pamhc2foodcore:appleyogurtitem',
	'pamhc2foodcore:pumpkinyogurtitem',
	'pamhc2foodcore:sweetberryyogurtitem',
	'pamhc2foodcore:caramelyogurtitem',
	'pamhc2foodcore:chocolatebaritem',
	'pamhc2foodcore:chocolatebaconitem',
	'pamhc2foodcore:epicbaconitem',
	'pamhc2foodcore:chocolatepuddingitem',
	'pamhc2foodcore:gummybearsitem',
	'pamhc2foodcore:chocolatecaramelfudgeitem',
	'pamhc2foodcore:smoresitem',
	'pamhc2foodcore:trailmixitem',
	'pamhc2foodcore:boiledeggitem',
	'pamhc2foodcore:friedeggitem',
	'pamhc2foodcore:scrambledeggitem',
	'pamhc2foodcore:applesauceitem',
	'pamhc2foodcore:chickennuggetitem',
	'pamhc2foodcore:chickenjerkyitem',
	'pamhc2foodcore:beefjerkyitem',
	'pamhc2foodcore:porkjerkyitem',
	'pamhc2foodcore:fishjerkyitem',
	'pamhc2foodcore:rabbitjerkyitem',
	'pamhc2foodcore:muttonjerkyitem',
	'pamhc2foodcore:potroastitem',
	'pamhc2foodcore:pickledbeetsitem',
	'pamhc2foodcore:cottoncandyitem',
	'pamhc2foodcore:jellybeansitem',
	'pamhc2foodcore:vinegaritem',
	'pamhc2foodcore:stewitem',
	'pamhc2foodcore:bakedvegetablemedleyitem',
	'pamhc2foodcore:fruitsaladitem',
	'boss_tools:coal_generator',
	'boss_tools:solar_panel',
	'boss_tools:blast_furnace',
	'boss_tools_giselle_addon:electric_blast_furnace',
	'miniutilities:ender_dragon_angel_ring',
	'storagenetwork:building_remote',
	'storagenetwork:picker_remote',
	'storagenetwork:collecting_remote',
	'storagenetwork:exchange',
	'cyclic:shearing',
	'cyclic:sprinkler',
	'ironchest:iron_to_gold_chest_upgrade',
	'ironchest:gold_to_diamond_chest_upgrade',
	'ironchest:wood_to_iron_chest_upgrade',
	'ironchest:wood_to_copper_chest_upgrade',
	'ironchest:copper_to_silver_chest_upgrade',
	'ironchest:silver_to_gold_chest_upgrade',
	'ironchest:copper_to_iron_chest_upgrade',
	'ironchest:diamond_to_crystal_chest_upgrade',
	'ironchest:diamond_to_obsidian_chest_upgrade',
	'metalbarrels:silver_barrel',
	'metalbarrels:wood_to_iron',
	'metalbarrels:wood_to_gold',
	'metalbarrels:wood_to_silver',
	'metalbarrels:wood_to_diamond',
	'metalbarrels:wood_to_obsidian',
	'metalbarrels:wood_to_netherite',
	'metalbarrels:copper_to_silver',
	'metalbarrels:copper_to_gold',
	'metalbarrels:copper_to_diamond',
	'metalbarrels:copper_to_obsidian',
	'metalbarrels:copper_to_netherite',
	'metalbarrels:iron_to_silver',
	'metalbarrels:iron_to_diamond',
	'metalbarrels:iron_to_obsidian',
	'metalbarrels:silver_to_diamond',
	'metalbarrels:silver_to_gold',
	'metalbarrels:silver_to_obsidian',
	'metalbarrels:gold_to_obsidian',
	'ironchest:silver_chest',
	'cyclic:wireless_item',
	'cyclic:wireless_energy',
	'cyclic:wireless_fluid',
	'cyclic:battery',
	'cyclic:solidifier',
	'cyclic:peat_farm',
	'cyclic:collector_fluid',
	'cyclic:placer_fluid',
	'cyclic:cask',
	'cyclic:crate',
	'cyclic:anvil',
	'cyclic:heart',
	'cyclic:heart_empty',
	'cyclic:emerald_pickaxe',
	'cyclic:emerald_shovel',
	'cyclic:emerald_sword',
	'cyclic:emerald_axe',
	'cyclic:emerald_hoe',
	'cyclic:sandstone_pickaxe',
	'cyclic:sandstone_shovel',
	'cyclic:sandstone_sword',
	'cyclic:sandstone_axe',
	'cyclic:sandstone_hoe',
	'cyclic:netherbrick_pickaxe',
	'cyclic:netherbrick_shovel',
	'cyclic:netherbrick_sword',
	'cyclic:netherbrick_axe',
	'cyclic:netherbrick_hoe',
	'cyclic:emerald_helmet',
	'cyclic:emerald_chestplate',
	'cyclic:emerald_leggings',
	'cyclic:emerald_boots',
	'cyclic:charm_home',
	'cyclic:charm_world',
	'cyclic:tile_transporter_empty',
	'cyclic:anvil_magma',
	'cyclic:mattock',
	'cyclic:mattock_nether',
	'powah:magmator_niotic',
	'powah:magmator_spirited',
	'powah:magmator_nitro',
	'powah:thermo_generator_blazing',
	'powah:thermo_generator_niotic',
	'powah:thermo_generator_spirited',
	'powah:thermo_generator_nitro',
	'powah:photoelectric_pane',
	'miniutilities:mechanical_miner',
	'miniutilities:mechanical_placer',
	'rftoolspower:coalgenerator',
	'titanium:gold_gear',
	'titanium:iron_gear',
	'titanium:diamond_gear',
	'rftoolsutility:crafter1',
	'rftoolsutility:crafter2',
	'astralsorcery:blink_wand',
	'infused_crystals:infused_redstonium_pickaxe',
	'infused_crystals:infused_redstonium_sword',
	'infused_crystals:infused_redstonium_axe',
	'infused_crystals:infused_redstonium_shovel',
	'infused_crystals:infused_redstonium_hoe',
	'infused_crystals:infused_ironium_pickaxe',
	'infused_crystals:infused_ironium_sword',
	'infused_crystals:infused_ironium_axe',
	'infused_crystals:infused_ironium_shovel',
	'infused_crystals:infused_ironium_hoe',
	'infused_crystals:infused_lapisium_pickaxe',
	'infused_crystals:infused_lapisium_sword',
	'infused_crystals:infused_lapisium_axe',
	'infused_crystals:infused_lapisium_shovel',
	'infused_crystals:infused_lapisium_hoe',
	'infused_crystals:infused_coalium_pickaxe',
	'infused_crystals:infused_coalium_sword',
	'infused_crystals:infused_coalium_axe',
	'infused_crystals:infused_coalium_shovel',
	'infused_crystals:infused_coalium_hoe',
	'infused_crystals:infused_diamondium_pickaxe',
	'infused_crystals:infused_diamondium_sword',
	'infused_crystals:infused_diamondium_axe',
	'infused_crystals:infused_diamondium_shovel',
	'infused_crystals:infused_diamondium_hoe',
	'infused_crystals:infused_emeraldium_pickaxe',
	'infused_crystals:infused_emeraldium_sword',
	'infused_crystals:infused_emeraldium_axe',
	'infused_crystals:infused_emeraldium_shovel',
	'infused_crystals:infused_emeraldium_hoe',
	'infused_crystals:infusedcoaliumpickaxe',
	'infused_crystals:infusedcoaliumsword',
	'infused_crystals:infusedcoaliumaxe',
	'infused_crystals:infusedcoaliumshovel',
	'infused_crystals:infusedcoaliumhoe',
	'infused_crystals:coalium_stick',
	'infused_crystals:chargerblock',
	'infused_crystals:infernal_fuel',
	'industrial_foregoing:infinity_drill',
	'industrial_foregoing:dissolution_chamber',
	'industrial_foregoing:machine_frame_supreme',
	'cyclic:storage_bag',
	'notenoughwands:teleportation_wand',
	'extendedcrafting:handheld_table',
	'avaritia:iron_singularity',
	'avaritia:golden_singularity',
	'avaritia:lapis_singularity',
	'avaritia:redstone_singularity',
	'bloodmagic:sand_netherite',
	'bloodmagic:coalsand',
	'bloodmagic:goldsand',
	'bloodmagic:ironsand',
	'avaritia:nether_quartz_singularity',
	'avaritia:diamond_singularity',
	'avaritia:emerald_singularity',
	'avaritia:record_fragment',
	'avaritia:infinity_armor_helmet',
	'avaritia:infinity_armor_chestplate',
	'avaritia:infinity_armor_leggings',
	'avaritia:infinity_armor_boots',
	'avaritia:cosmic_meatballs',
	'avaritia:skullfire_sword',
	'avaritia:extreme_crafting_table',
	'avaritia:record_fragment',
	'avaritia:swordofthe_cosmos',
	'avaritia:neutronium_compressor',
	'avaritia:hoeofthe_green_earth',
	'avaritia:natures_ruin',
	'avaritia:planet_eater',
	'avaritia:longbowofthe_heavens',
	'avaritia:world_breaker',
	'avaritia:endest_pearl',
	'bloodmagic:mimic',
	'bloodmagic:ethereal_mimic',
	'bloodmagic:spectral',
	'bloodmagic:nether_soil',
	'bloodmagic:dungeon_tester',
	'cyclic:uncrafter',
	'cyclic:fisher',
	'cyclic:beacon',
	'cyclic:tank',
	'cyclic:dark_glass',
	'cyclic:battery_infinite',
	'cyclic:item_infinite',
	'cyclic:glowing_helmet',
	'cyclic:gem_amber',
	'cyclic:randomize_scepter',
	'cyclic:charm_torch',
	'cyclic:charm_torch_cave',
	'cyclic:ender_pearl_reuse',
	'cyclic:ender_bag',
	'cyclic:charm_boostpotion',
	'cyclic:ender_pearl_mounted',
	'cyclic:build_scepter',
	'cyclic:replace_scepter',
	'cyclic:offset_scepter',
	'cyclic:structure',
	'cyclic:crafter',
	'cyclic:wireless_transmitter',
	'cyclic:wireless_receiver',
	'extendedcrafting:the_ultimate_ingot',
	'extendedcrafting:the_ultimate_block',
	'extendedcrafting:the_ultimate_nugget',
	'extendedcrafting:the_ultimate_component',
	'extendedcrafting:ultimate_singularity',
	'extendedcrafting:the_ultimate_catalyst',
	'extendedcrafting:enhanced_ender_catalyst',
	'extendedcrafting:ender_catalyst',
	'extendedcrafting:ender_star',
	'extendedcrafting:ender_crafter',
	'extendedcrafting:ender_alternator',
	'extendedcrafting:ender_ingot_block',
	'extendedcrafting:enhanced_ender_ingot_block',
	'extendedcrafting:ender_ingot',
	'extendedcrafting:enhanced_ender_ingot',
	'extendedcrafting:ender_component',
	'extendedcrafting:enhanced_ender_component',
	'extendedcrafting:enhanced_ender_nugget',
	'extendedcrafting:ender_nugget',
	'simplyjetpacks:thruster_vanilla1',
	'simplyjetpacks:thruster_vanilla2',
	'simplyjetpacks:thruster_vanilla3',
	'simplyjetpacks:thruster_vanilla4',
	'simplyjetpacks:thruster_mek1',
	'simplyjetpacks:thruster_mek2',
	'simplyjetpacks:thruster_mek3',
	'simplyjetpacks:thruster_mek4',
	'simplyjetpacks:thruster_ie1',
	'simplyjetpacks:thruster_ie2',
	'simplyjetpacks:thruster_ie3',
	'simplyjetpacks:jetpack_creative',
	'simplyjetpacks:jetpack_creative_armored',
	'simplyjetpacks:jetpack_vanilla1',
	'simplyjetpacks:jetpack_vanilla1_armored',
	'simplyjetpacks:jetpack_vanilla2',
	'simplyjetpacks:jetpack_vanilla2_armored',
	'simplyjetpacks:jetpack_vanilla3',
	'simplyjetpacks:jetpack_vanilla3_armored',
	'simplyjetpacks:jetpack_vanilla4',
	'simplyjetpacks:jetpack_vanilla4_armored',
	'simplyjetpacks:jetpack_mek1',
	'simplyjetpacks:jetpack_mek1_armored',
	'simplyjetpacks:jetpack_mek2',
	'simplyjetpacks:jetpack_mek2_armored',
	'simplyjetpacks:jetpack_mek3',
	'simplyjetpacks:jetpack_mek3_armored',
	'simplyjetpacks:jetpack_mek4',
	'simplyjetpacks:jetpack_mek4_armored',
	'simplyjetpacks:jetpack_ie1',
	'simplyjetpacks:jetpack_ie1_armored',
	'simplyjetpacks:jetpack_ie2',
	'simplyjetpacks:jetpack_ie2',
	'simplyjetpacks:jetpack_ie3',
	'simplyjetpacks:jetpack_ie3_armored',
	'simplyjetpacks:armorplating_mek4',
	'simplyjetpacks:armorplating_mek3',
	'simplyjetpacks:armorplating_mek2',
	'simplyjetpacks:armorplating_mek1',
	'simplyjetpacks:armorplating_ie2',
	'simplyjetpacks:armorplating_ie3',
	'chemlib:element_neptunium',
	'chemlib:ingot_neptunium',
	'chemlib:compound_epinephrine',
	'chemlib:element_plutonium',
	'chemlib:ingot_plutonium',
	'chemlib:element_americium',
	'chemlib:ingot_americium',
	'chemlib:element_curium',
	'chemlib:ingot_curium',
	'chemlib:element_berkelium',
	'chemlib:ingot_berkelium',
	'chemlib:ingot_californium',
	'chemlib:element_einsteinium',
	'chemlib:ingot_einsteinium',
	'chemlib:element_californium',
	'chemlib:element_fermium',
	'chemlib:ingot_fermium',
	'chemlib:element_mendelevium',
	'chemlib:ingot_mendelevium',
	'chemlib:element_nobelium',
	'chemlib:ingot_nobelium',
	'chemlib:element_lawrencium',
	'chemlib:ingot_lawrencium',
	'chemlib:element_ruthenium',
	'chemlib:ingot_ruthenium',
	'chemlib:element_rutherfordium',
	'chemlib:ingot_rutherfordium',
	'chemlib:element_dubnium',
	'chemlib:ingot_dubnium',
	'chemlib:element_seaborgium',
	'chemlib:ingot_seaborgium',
	'chemlib:element_bohrium',
	'chemlib:ingot_bohrium',
	'chemlib:element_hassium',
	'chemlib:ingot_hassium',
	'chemlib:element_meitnerium',
	'chemlib:ingot_meitnerium',
	'chemlib:element_darmstadtium',
	'chemlib:ingot_darmstadtium',
	'chemlib:element_roentgenium',
	'chemlib:ingot_roentgenium',
	'chemlib:element_copernicium',
	'chemlib:ingot_copernicium',
	'chemlib:element_nihonium',
	'chemlib:ingot_nihonium',
	'chemlib:element_flerovium',
	'chemlib:ingot_flerovium',
	'chemlib:element_moscovium',
	'chemlib:ingot_moscovium',
	'chemlib:element_livermorium',
	'chemlib:ingot_livermorium',
	'chemlib:element_tennessine',
	'chemlib:ingot_tennessine',
	'chemlib:element_oganesson',	
	'cyclic:ender_item_shelf',	
	'thermal:device_fisher',	
	'industrial_foregoing:marine_fisher',	
	'extendedcrafting:redstone_catalyst',	
	'extendedcrafting:crystaltine_catalyst',	
	'immersiveengineering:plate_nickel',
	'immersiveengineering:plate_lead',
	'immersiveengineering:plate_silver',
	'immersiveengineering:plate_constantan',
	'immersiveengineering:plate_electrum',
	'immersiveengineering:plate_iron',
	'immersiveengineering:plate_gold',
	'immersiveengineering:plate_copper',
	'industrialforegoing:washing_factory',
	'industrialforegoing:mycelial_reactor',
	'industrialforegoing:biofuel_generator',
	'industrialforegoing:mycelial_furnace',
	'industrialforegoing:mycelial_slimey',
	'industrialforegoing:mycelial_culinary',
	'industrialforegoing:mycelial_potion',
	'industrialforegoing:mycelial_disenchantment',
	'industrialforegoing:mycelial_ender',
	'industrialforegoing:mycelial_explosive',
	'industrialforegoing:mycelial_frosty',
	'industrialforegoing:mycelial_halitosis',
	'industrialforegoing:mycelial_magma',
	'industrialforegoing:mycelial_pink',
	'industrialforegoing:mycelial_netherstar',
	'industrialforegoing:mycelial_death',
	'industrialforegoing:mycelial_rocket',
	'industrialforegoing:mycelial_crimed',
	'industrialforegoing:mycelial_meatallurgic',
	'draconicevolution:draconium_dust',
	'draconicevolution:awakened_draconium_dust',
	'mekanism:enriched_refined_obsidian',
	'miniutilities:quantum_quarry',
	'mysticalagriculture:air_essence',
	'mysticalagriculture:air_seeds',
	'mysticalagriculture:brass_seeds',
	'mysticalagriculture:brass_essence',
	'mysticalagriculture:graphite_essence',
	'mysticalagriculture:graphite_seeds',
	'industrialforegoing:bioreactor',
	'industrialforegoing:infinity_charger',
	'industrialforegoing:fluid_sieving_machine',
	'industrialforegoing:fermentation_station',
	'industrialforegoing:marine_fisher',
	'industrialforegoing:resourceful_furnace',
	'industrialforegoing:ore_laser_base',
	'industrialforegoing:water_condensator',
	'industrialforegoing:fluid_laser_base',
	'industrialforegoing:laser_drill',
	'mysticalagriculture:element_seeds',
	'mysticalagriculture:element_essence',
	'xreliquary:alkahestry_tome',
    'draconicadditions:wyvern_harness',
    'draconicadditions:draconic_harness',
    'draconicadditions:chaotic_harness',
    'avaritia:neutron_collector',
    'storagenetwork:master', 
    'storagenetwork:request', 
    'storagenetwork:crafting_remote', 
    'storagenetwork:kabel', 
    'storagenetwork:storage_kabel', 
    'storagenetwork:import_kabel', 
    'storagenetwork:import_filter_kabel', 
    'storagenetwork:import_kabel', 
    'storagenetwork:collector', 
    'storagenetwork:stack_upgrade', 
    'storagenetwork:speed_upgrade', 
    'storagenetwork:builder_remote', 
    'storagenetwork:collector_remote',
    'storagenetwork:filter_kabel',
    'shrink:mob_bottle',
    'draconicevolution:draconium_nugget',
    'boss_tools:desh_nugget',
    'boss_tools:silicon_nugget',
    'extendedcrafting:black_iron_nugget',
    'cyclic:shears_obsidian',
    'cyclic:shears_flint',
    'mekanism:combiner'    
	]


	//.ignoreNBT()
	const hiddenItemsWithoutNBT = [
		'simplyjetpacks:jetpack_vanilla1',
		'simplyjetpacks:jetpack_vanilla1_armored',
		'simplyjetpacks:jetpack_vanilla2',
		'simplyjetpacks:jetpack_vanilla2_armored',
		'simplyjetpacks:jetpack_vanilla3',
		'simplyjetpacks:jetpack_vanilla3_armored',
		'simplyjetpacks:jetpack_vanilla4',
		'simplyjetpacks:jetpack_vanilla4_armored',
		'simplyjetpacks:jetpack_mek1',
		'simplyjetpacks:jetpack_mek1_armored',
		'simplyjetpacks:jetpack_mek2',
		'simplyjetpacks:jetpack_mek2_armored',
		'simplyjetpacks:jetpack_mek3',
		'simplyjetpacks:jetpack_mek3_armored',
		'simplyjetpacks:jetpack_mek4',
		'simplyjetpacks:jetpack_mek4_armored',
		'simplyjetpacks:jetpack_ie1',
		'simplyjetpacks:jetpack_ie1_armored',
		'simplyjetpacks:jetpack_ie2',
		'simplyjetpacks:jetpack_ie2_armored',
		'simplyjetpacks:jetpack_ie3',
		'simplyjetpacks:jetpack_ie3_armored',
		'industrialforegoing:infinity_trident',
		'industrialforegoing:infinity_drill',
		'industrialforegoing:infinity_launcher',
		'industrialforegoing:infinity_nuke',
		'industrialforegoing:infinity_saw',
		'industrialforegoing:infinity_backpack',
		'industrialforegoing:infinity_hammer',
    	'shrink:shrink_ray',

	]

	const hiddenItemsWithNBT = 
	[
		['extendedcrafting:singularity','{Id:"extendedcrafting:bronze"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:steel"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:invar"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:electrum"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:lapis_lazuli"}'],
		['extendedcrafting:singularity','{Id:"extendedcrafting:coal"}']

	]

onEvent('jei.hide.items', e => {
	//console.log("starting item hiding loop")
	hiddenItems.forEach(item => {
	console.log("Hiding Item: " + item.id)
	e.hide(item)
	})

	hiddenItemsWithNBT.forEach(item => {
		console.log("Hiding with nbt: " + item.id)
		e.hide(Item.of(`${item[0]}`).withNBT(`${item[1]}`))
		})


	hiddenItemsWithoutNBT.forEach(item => {
	console.log("Hiding Item ignore nbt: " + item.id)
	e.hide(Item.of(`${item}`).ignoreNBT())
	})		

})


onEvent('jei.remove.categories', event => {
	//log a list of all category ids to logs/kubejs/client.txt
	//console.log(event.getCategoryIds()) 
	
	event.remove('industrialforegoing:ore_washer')
  })

onEvent('item.tooltip', e => {
  let black_iron = ['extendedcrafting:black_iron_ingot', 'extendedcrafting:black_iron_block']

  black_iron.forEach(black => {
    e.add(black, Text.of('Obtained by having a hostile mob spawn on a Block of Iron').green())
  })

    let night = ['ibpdx:night_summoner']

  night.forEach(fair => {
    e.add(fair, Text.of('Sets time to night. Only obtainable as a quest reward, look to other repeatable methods later in the game.').green())
  })

    let mars = ['ibpdx:mars_air_bottle']

  mars.forEach(black => {
    e.add(black, Text.of('Right click with a Glass Bottle against a block on Mars.').green())
  })

    let solar_panels = ['ftbic:lv_solar_panel', 'ftbic:mv_solar_panel', 'ftbic:hv_solar_panel', 'ftbic:ev_solar_panel']

  solar_panels.forEach(panel => {
    e.add(panel, Text.of('Can only be placed on the Moon').red())
  })

    let smoothies = ['pamhc2foodcore:melonsmoothieitem', 'pamhc2foodcore:sweetberrysmoothieitem', 'pamhc2foodcore:applesmoothieitem']

  smoothies.forEach(smooth => {
    e.add(smooth, Text.of('Made by right clicking juice on a block of ice or packed ice').blue())
  })

  let air = ['ibpdx:fake_air', 'ibpdx:fake_air_bucket']

  air.forEach(fair => {
    e.add(fair, Text.of('Made by right clicking a glass bottle on a Hot Cooking Block (NOT consumed)').blue())
  })

    let hot_water = ['ibpdx:hot_water', 'ibpdx:hot_water_bucket']

  hot_water.forEach(fair => {
    e.add(fair, Text.of('Made by right clicking a Fresh Water on a Hot Cooking Block').blue())
  })

  let milk = ['ibpdx:milk', 'ibpdx:milk_bucket']

  milk.forEach(fair => {
    e.add(fair, Text.of('Made by right clicking a Fresh Milk on a Hot Cooking Block').blue())
  })

  let xdrops = ['minecraft:wither_skeleton_skull', 'xreliquary:rib_bone', 'xreliquary:catalyzing_gland', 'xreliquary:zombie_heart', 'xreliquary:nebulous_heart', 'xreliquary:slime_pearl', 'xreliquary:witch_hat', 'xreliquary:molten_core']

  xdrops.forEach(panel => {
    e.add(panel, Text.of('Can be automated at higher efficiency if killed by a Husk. Note for slime pearl, DOES NOT DROP FROM TINKERS CONSTRUCT SLIMES.').green())
  })

    let a2sword = ['ibpdx:airt2_sword']

  a2sword.forEach(fair => {
    e.add(fair, Text.of('On right click, grants 5 seconds of levitation and 7 seconds of resistance which blocks all damage and prevents the user height from changing. Cost: 4 Aerotheum Dust.').green())
  })

  let pfdisc = ['ibpdx:phantom_fantasy']

  pfdisc.forEach(fair => {
    e.add(fair, Text.of('Tier 3. Teleport through one-block-deep walls. Only works in overworld. Cost: 4 charges.').green())
  })

  let otmdisc = ['ibpdx:on_the_moon']

  otmdisc.forEach(fair => {
    e.add(fair, Text.of('Tier 1. When attacked, mobs will float away. Cost: 2 charges.').green())
  })

    let ufodisc = ['ibpdx:ufo_lover']

  ufodisc.forEach(fair => {
    e.add(fair, Text.of('Tier 4. Provides Flight that lasts for 30 minutes. Cost: 12 charges per use.').green())
  })

  let cgdisc = ['ibpdx:china_gal']

  cgdisc.forEach(fair => {
    e.add(fair, Text.of('Tier 2. Provides 5 minutes of Speed IV, Strength IV, and Resistance II at night. Cost: 8 charges.').green())
  })

    let uldisc = ['ibpdx:uninstall_love']

  uldisc.forEach(fair => {
    e.add(fair, Text.of('Tier 1. Changes overworld blocks into nether equivalents and vice-versa. Cost: 1 small charge.').green())
  })

    let cudisc = ['ibpdx:catch_us']

  cudisc.forEach(fair => {
    e.add(fair, Text.of('Tier 2. If used at night, moves celestial bodies to that of the following night. Cost: 2 charges.').green())
  })

    let e2sword = ['ibpdx:eartht2_sword']

  e2sword.forEach(fair => {
    e.add(fair, Text.of('Temporarily forms a stone pillar over attacked mobs. Cost: None.').green())
  })

  let f2sword = ['ibpdx:firet2_sword']

  f2sword.forEach(fair => {
    e.add(fair, Text.of('Fires a fireball. Cost: 2 Pyrotheum Dust per shot.').green())
  })

  let w2sword = ['ibpdx:watert2_sword']

  w2sword.forEach(fair => {
    e.add(fair, Text.of('Grants Regeneration upon hitting a mob. Cost: None.').green())
  })

    let e2axe = ['ibpdx:eartht2_axe']

  e2axe.forEach(fair => {
    e.add(fair, Text.of('Temporarily forms a stone pillar over attacked mobs. Cost: None.').green())
  })

    let f2axe = ['ibpdx:firet2_axe']

  f2axe.forEach(fair => {
    e.add(fair, Text.of('Grants Fire Resistance upon hitting a mob. Cost: 2 Pyrotheum Dust per shot.').green())
  })

    let w2axe = ['ibpdx:watert2_axe']

  w2axe.forEach(fair => {
    e.add(fair, Text.of('Grants Regeneration upon hitting a mob. Cost: None.').green())
  })

    let a2axe = ['ibpdx:airt2_axe']

  a2axe.forEach(fair => {
    e.add(fair, Text.of('Grants Haste upon hitting a mob. Cost: None.').green())
  })

    let e2pickaxe = ['ibpdx:eartht2_pickaxe']

  e2pickaxe.forEach(fair => {
    e.add(fair, Text.of('Can place a Cobblestone without needing any in the inventory. Also can veinmine any material. Cost: None.').green())
  })

  let f2pickaxe = ['ibpdx:firet2_pickaxe']

  f2pickaxe.forEach(fair => {
    e.add(fair, Text.of('Grants Fire Resistance upon hitting a block. Cost: None.').green())
  })

    let w2pickaxe = ['ibpdx:watert2_pickaxe']

  w2pickaxe.forEach(fair => {
    e.add(fair, Text.of('Grants Regeneration upon hitting a block. Cost: None.').green())
  })

  let a2pickaxe = ['ibpdx:airt2_pickaxe']

  a2pickaxe.forEach(fair => {
    e.add(fair, Text.of('Grants Haste upon breaking a block, which can be used for other items. Cost: None.').green())
  })

  let e2shovel = ['ibpdx:eartht2_shovel']

  e2shovel.forEach(fair => {
    e.add(fair, Text.of('Can place a Cobblestone without needing any in the inventory. Cost: None.').green())
  })

  let f2shovel = ['ibpdx:firet2_shovel']

  f2shovel.forEach(fair => {
    e.add(fair, Text.of('Grants Fire Resistance upon hitting a block. Cost: None.').green())
  })

  let w2shovel = ['ibpdx:watert2_shovel']

  w2shovel.forEach(fair => {
    e.add(fair, Text.of('Grants Regeneration upon hitting a block. Cost: None.').green())
  })

  let a2shovel = ['ibpdx:airt2_shovel']

  a2shovel.forEach(fair => {
    e.add(fair, Text.of('Grants Haste upon breaking a block, which can be used for other items. Cost: None.').green())
  })

  let enchanting = ['minecraft:enchanting_table']

  enchanting.forEach(fair => {
    e.add(fair, Text.of('Cannot be crafted. Use the Starlight Enchanter multiblock or find one in the world. Also possible drop from Iron Loot Bag.').green())
  })

  let cook = ['ibpdx:hot_cooking_plate', 'ibpdx:cool_cooking_plate']

  cook.forEach(fair => {
    e.add(fair, Text.of('Right click on the hot plate with Fresh Milk, Fresh Water, Cooking Oil, or a Glass Bottle.').green())
  })

  let speed1 = ['ibpdx:speed_gearbox']

  speed1.forEach(fair => {
    e.add(fair, Text.of('Increases operational speed by 1.5x and energy costs by 2x. For generators, flux rate is increased by 1.5x.').green())
  })

  let speed2 = ['ibpdx:singular_speed_gearbox']

  speed2.forEach(fair => {
    e.add(fair, Text.of('Increases operational speed by 3x and energy costs by 4x. For generators, flux rate is increased by 2.25x.').green())
  })

  let power1 = ['ibpdx:power_gearbox']

  power1.forEach(fair => {
    e.add(fair, Text.of('Decreases operational speed to 0.85x and energy costs by 0.75x. For generators, flux rate is decreased to 0.75x and total energy produced is increased by 1.5x.').green())
  })

  let power2 = ['ibpdx:singular_power_gearbox']

  power2.forEach(fair => {
    e.add(fair, Text.of('Decreases operational speed to 0.75x and energy costs by 0.5x. For generators, flux rate is constant and total energy produced is increased by 2x.').green())
  })

  let double1 = ['ibpdx:double_gearbox']

  double1.forEach(fair => {
    e.add(fair, Text.of('Increases operational speed to 1.5x and decreases power consumption by 0.85x. For generators, flux rate is decreased to 0.75x and total energy produced is increased by 1.5x.').green())
  })

  let double2 = ['ibpdx:singular_double_gearbox']

  double2.forEach(fair => {
    e.add(fair, Text.of('Increases operational speed to 2.25x and decreases power consumption by 0.75x. For generators, flux rate is constant and total energy produced is increased by 2x.').green())
  })

  let lfg = ['masterfulmachinery:liquid_fuel_generator_controller']

  lfg.forEach(fair => {
    e.add(fair, Text.of('Note: Power output requires extraction. Powah cables do not work. Use Universal Cables set to extract, or Energy Cells with auto input enabled.').green())
  })

  let iridium = ['chemlib:ingot_iridium']

  iridium.forEach(fair => {
    e.add(fair, Text.of('Obtained from Dimensional Dungeons in Gold Loot Bags.').green())
  })

   let bag = ['ibpdx:iron_loot_bag', 'ibpdx:gold_loot_bag']

  bag.forEach(fair => {
    e.add(fair, Text.of('Found in Dimensional Dungeons. Right click to open!').green())
  })

  let key = ['dimdungeons:item_portal_key']

  key.forEach(fair => {
    e.add(fair, Text.of('Right click on an End Portal Frame or Key Inscribing Station to activate.').green())
  })

  let dist = ['thermal:redstone_bucket','thermal:glowstone_bucket', 'tconstruct:molten_glass_bucket']

  dist.forEach(fair => {
    e.add(fair, Text.of('This can be obtained by putting Magical Mixture through the Distillation Tower.').green())
  })

  let magic = ['ibpdx:magical_mixture_bucket']

  magic.forEach(fair => {
    e.add(fair, Text.of('Process in the Distillation Tower.').green())
  })

  let roller = ['ftbic:roller']

  roller.forEach(fair => {
    e.add(fair, Text.of('Intended output is 1 plate per ingot.').green())
  })

  let extruder = ['ftbic:extruder']

  extruder.forEach(fair => {
    e.add(fair, Text.of('Intended output is 3 wires per plate.').green())
  })

  let salt = ['mekanism:salt']

  salt.forEach(fair => {
    e.add(fair, Text.of('Found in rivers and lakes.').green())
  })

  let cook2 = ['pamhc2foodcore:toastitem', 'pamhc2foodcore:grilledcheeseitem', 'pamhc2foodcore:carrotbreaditem', 'pamhc2foodcore:pumpkinbreaditem', 'pamhc2foodcore:noodlesoupitem', 'pamhc2foodcore:applepieitem', 'pamhc2foodcore:sweetberrypieitem', 'pamhc2foodcore:chocolatecupcakeitem', 'pamhc2foodcore:carrotcupcakeitem', 'pamhc2foodcore:pumpkincupcakeitem', 'pamhc2foodcore:caramelcupcakeitem', 'pamhc2foodcore:donutitem', 'pamhc2foodcore:chocoolatedonutitem', 'pamhc2foodcore:jellydonutitem', 'pamhc2foodcore:softpretzelitem', 'pamhc2foodcore:cheeseitem', 'pamhc2foodcore:icecreamitem', 'pamhc2foodcore:hotchocolateitem', 'pamhc2foodcore:chocolaterollitem', 'pamhc2foodcore:applejellyitem', 'pamhc2foodcore:melonjellyitem', 'pamhc2foodcore:sweetberryjellyitem', 'pamhc2foodcore:friedchickenitem', 'pamhc2foodcore:basicchickensandwichitem', 'pamhc2foodcore:chickenpotpieitem', 'pamhc2foodcore:chickendinneritem', 'pamhc2foodcore:basichamburgeritem', 'pamhc2foodcore:hotdogitem', 'pamhc2foodcore:baconandeggsitem', 'pamhc2foodcore:fishsticksitem', 'pamhc2foodcore:basicfishsandwichitem', 'pamhc2foodcore:fishandchipsitem', 'pamhc2foodcore:friesitem', 'pamhc2foodcore:potatosoupitem', 'pamhc2foodcore:glazedcarrotsitem', 'pamhc2foodcore:carrotsoupitem', 'pamhc2foodcore:pumpkinsoupitem', 'pamhc2foodcore:meatloafitem', 'pamhc2foodcore:bakedvegetablemedlyitem']

  cook2.forEach(fair => {
    e.add(fair, Text.of('Requires a fluid in the world. Check the Cooking Plate and the quests in the Gourmet Race chapter to see what to do.').green())
  })

    let douglas = ['treemendous:douglas_sapling']

  douglas.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Oak + Spruce.').green())
  })

  let pine = ['treemendous:pine_sapling']

  pine.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Birch + Spruce.').green())
  })

  let fir = ['treemendous:fir_sapling']

  fir.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Dark Oak + Spruce.').green())
  })

  let larch = ['treemendous:larch_sapling']

  larch.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Jungle + Spruce.').green())
  })

  let cherry = ['treemendous:cherry_sapling']

  cherry.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Oak + Jungle.').green())
  })

  let beech = ['treemendous:beech_sapling']

  beech.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Oak + Birch.').green())
  })

  let maple = ['treemendous:maple_sapling']

  maple.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Dark Oak + Oak.').green())
  })

  let japan = ['treemendous:japanese_sapling']

  japan.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Dark Oak + Birch.').green())
  })

  let rmaple = ['treemendous:red_maple_sapling']

  rmaple.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Dark Oak + Jungle.').green())
  })

  let bmaple = ['treemendous:brown_maple_sapling']

  bmaple.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Dark Oak + Acacia.').green())
  })

  let walnut = ['treemendous:walnut_sapling']

  walnut.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Oak + Acacia.').green())
  })

  let alder = ['treemendous:alder_sapling']

  alder.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Birch + Acacia.').green())
  })

  let chestnut = ['treemendous:chestnut_sapling']

  chestnut.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Birch + Jungle.').green())
  })

  let plane = ['treemendous:plane_sapling']

  plane.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Jungle + Acacia.').green())
  })

  let ash = ['treemendous:ash_sapling']

  ash.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Douglas + Oak.').green())
  })

  let linden = ['treemendous:linden_sapling']

  linden.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Douglas + Jungle.').green())
  })

  let robinia = ['treemendous:robinia_sapling']

  robinia.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Douglas + Spruce.').green())
  })

  let willow = ['treemendous:willow_sapling']

  willow.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Douglas + Birch.').green())
  })

  let pomeg = ['treemendous:pomegranate_sapling']

  pomeg.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Douglas + Cherry.').green())
  })

  let magnolia = ['treemendous:magnolia_sapling']

  magnolia.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Pine + Cherry.').green())
  })

  let cedar = ['treemendous:cedar_sapling']

  cedar.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Pine + Spruce.').green())
  })

  let poplar = ['treemendous:poplar_sapling']

  poplar.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Pine + Birch.').green())
  })

  let elm = ['treemendous:elm_sapling']

  elm.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Pine + Jungle.').green())
  })

  let juniper = ['treemendous:juniper_sapling']

  juniper.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Cherry + Birch.').green())
  })

  let euca = ['treemendous:rainbow_eucalyptus_sapling']

  euca.forEach(fair => {
    e.add(fair, Text.of('Made using Alchetree. Magnolia + Cherry.').green())
  })

  let placer = ['cyclic:placer']

  placer.forEach(fair => {
    e.add(fair, Text.of('Cannot place blocks without deleting internal data. If you plan on using a placer for tank transportation, use the Industrial Foregoing one instead.').green())
  })

  let crystal = ['betterendforge:crystal_shards']

  crystal.forEach(fair => {
    e.add(fair, Text.of('Found in Crystal Mountain biomes in the End.').green())
  })

  let a1sword = ['ibpdx:airt1_sword', 'ibpdx:airt2_sword']

  a1sword.forEach(fair => {
    e.add(fair, Text.of('Increases movement speed when held.').green())
  })

  let e1sword = ['ibpdx:eartht1_sword', 'ibpdx:eartht2_sword']

  e1sword.forEach(fair => {
    e.add(fair, Text.of('Provides additional armor when held.').green())
  })

  let f1sword = ['ibpdx:firet1_sword', 'ibpdx:firet2_sword']

  f1sword.forEach(fair => {
    e.add(fair, Text.of('Has extended reach when held.').green())
  })

  let w1sword = ['ibpdx:watert1_sword', 'ibpdx:watert2_sword']

  w1sword.forEach(fair => {
    e.add(fair, Text.of('Grants additional HP when held.').green())
  })

  let e1axe = ['ibpdx:eartht1_axe', 'ibpdx:eartht2_axe']

  e1axe.forEach(fair => {
    e.add(fair, Text.of('Provides additional armor when held.').green())
  })

  let f1axe = ['ibpdx:firet1_axe', 'ibpdx:firet2_axe']

  f1axe.forEach(fair => {
    e.add(fair, Text.of('Has extended reach when held.').green())
  })

  let w1axe = ['ibpdx:watert1_axe', 'ibpdx:watert2_axe']

  w1axe.forEach(fair => {
    e.add(fair, Text.of('Grants additional HP when held.').green())
  })

  let a1axe = ['ibpdx:airt1_axe', 'ibpdx:airt2_axe']

  a1axe.forEach(fair => {
    e.add(fair, Text.of('Increases movement speed when held.').green())
  })

  let e1pickaxe = ['ibpdx:eartht1_pickaxe', 'ibpdx:eartht2_pickaxe']

  e1pickaxe.forEach(fair => {
    e.add(fair, Text.of('Provides additional armor when held.').green())
  })

  let f1pickaxe = ['ibpdx:firet1_pickaxe', 'ibpdx:firet2_pickaxe']

  f1pickaxe.forEach(fair => {
    e.add(fair, Text.of('Has extended reach when held.').green())
  })

  let w1pickaxe = ['ibpdx:watert1_pickaxe', 'ibpdx:watert2_pickaxe']

  w1pickaxe.forEach(fair => {
    e.add(fair, Text.of('Grants additional HP when held.').green())
  })

  let a1pickaxe = ['ibpdx:airt1_pickaxe', 'ibpdx:airt2_pickaxe']

  a1pickaxe.forEach(fair => {
    e.add(fair, Text.of('Increases movement speed when held.').green())
  })

  let e1shovel = ['ibpdx:eartht1_shovel', 'ibpdx:eartht2_shovel']

  e1shovel.forEach(fair => {
    e.add(fair, Text.of('Provides additional armor when held.').green())
  })

  let f1shovel = ['ibpdx:firet1_shovel', 'ibpdx:firet2_shovel']

  f1shovel.forEach(fair => {
    e.add(fair, Text.of('Has extended reach when held.').green())
  })

  let w1shovel = ['ibpdx:watert1_shovel', 'ibpdx:watert2_shovel']

  w1shovel.forEach(fair => {
    e.add(fair, Text.of('Grants additional HP when held.').green())
  })

  let a1shovel = ['ibpdx:airt1_shovel', 'ibpdx:airt2_shovel']

  a1shovel.forEach(fair => {
    e.add(fair, Text.of('Increases movement speed when held.').green())
  })

  let infusedplanks = ['astralsorcery:infused_wood']

  infusedplanks.forEach(fair => {
    e.add(fair, Text.of('Drop a log in Liquid Starlight.').green())
  })

  let peat = ['ibpdx:peat']

  peat.forEach(fair => {
    e.add(fair, Text.of('Break a block of Peat Bog.').green())
  })

  let normore = ['minecraft:iron_ore', 'minecraft:gold_ore', 'thermal:copper_ore', 'thermal:tin_ore', 'thermal:lead_ore', 'thermal:silver_ore']

  normore.forEach(fair => {
    e.add(fair, Text.of('Standard ore that is processed under the regular ore processing chain.').green())
  })

  let hienergyore = ['thermal:nickel_ore', 'immersiveengineering:ore_aluminum', 'mekanism:osmium_ore', 'mekanism:uranium_ore', 'boss_tools:moon_desh_ore', 'boss_tools:mars_silicon_ore', 'draconicevolution:overworld_draconium_ore', 'draconicevolution:nether_draconium_ore', 'draconicevolution:end_draconium_ore']

  hienergyore.forEach(fair => {
    e.add(fair, Text.of('Ore that requires high-energy processing line.').green())
  })


  let mekupgrade = ['mekanism:upgrade_speed', 'mekanism:upgrade_energy']

  mekupgrade.forEach(fair => {
    e.add(fair, Text.of('Can also be found in Dimensional Dungeons.').green())
  })

  let stardust = ['astralsorcery:stardust']

  stardust.forEach(fair => {
    e.add(fair, Text.of('Left click with a Starmetal Cutting Tool on a Starmetal Ingot.').green())
  })

  let addon = ['ibpdx:addon_base']

  addon.forEach(fair => {
    e.add(fair, Text.of('ADDONS WILL NOT WORK IF CRAFTED IN THE STORAGE SCANNER.').red())
  })

  let ssn = ['storagenetwork:master', 'storagenetwork:request', 'storagenetwork:crafting_remote', 'storagenetwork:kabel', 'storagenetwork:storage_kabel', 'storagenetwork:import_kabel', 'storagenetwork:import_filter_kabel', 'storagenetwork:import_kabel', 'storagenetwork:collector', 'storagenetwork:stack_upgrade', 'storagenetwork:speed_upgrade', 'storagenetwork:builder_remote', 'storagenetwork:collector_remote']

  ssn.forEach(fair => {
    e.add(fair, Text.of('SIMPLE STORAGE NETWORK IS BEING DISABLED IN FUTURE VERSIONS DUE TO BUGS. YOU MAY CRAFT ITS COMPONENTS INTO PRETTY PIPES ITEMS, BUT IT IS BEING PHASED OUT. IT WILL NOT BE REMOVED SO YOUR WORLD WILL ALWAYS BE UNAFFECTED.').red())
  })

  let antimatter = ['ftbic:antimatter']

  antimatter.forEach(fair => {
    e.add(fair, Text.of('Created in the Antimatter Constructor.').green())
  })

  let bchammer = ['blockcarpentry:hammer']

  bchammer.forEach(fair => {
    e.add(fair, Text.of('Removes blocks from Frame and Illusion blocks.').green())
  })

  let bcchisel = ['blockcarpentry:chisel']

  bcchisel.forEach(fair => {
    e.add(fair, Text.of('Changes style of certain Block Carpentry features, such as doors or walls.').green())
  })

  let bcpaint = ['blockcarpentry:paintbrush']

  bcpaint.forEach(fair => {
    e.add(fair, Text.of('Alters extra features on some Block Carpentry blocks, such as doorknobs on doors.').green())
  })

  let bcwrench = ['blockcarpentry:texture_wrench']

  bcwrench.forEach(fair => {
    e.add(fair, Text.of('Can make a block display the same texture on every side, such as the top face of a crafting table.').green())
  })

  let coaldust = ['mekanism:dust_coal']

  coaldust.forEach(fair => {
    e.add(fair, Text.of('Right Click on a Block of Coal with a Boss Tools Hammer').green())
  })

  let lenses = ['astralsorcery:lens', 'astralsorcery:prism']

  lenses.forEach(fair => {
    e.add(fair, Text.of('MUST HAVE NBT DATA TO WORK! IF IT DOES NOT HAVE STATS, YOU NEED TO CRAFT IT INTO A VERSION THAT DOES!').green())
  })

  let orechid = ['botania:orechid', 'botania:floating_orechid']

  orechid.forEach(fair => {
    e.add(fair, Text.of('Can only be placed in Alfheim.').green())
  })

  let corundum = ['quark:red_crystal', 'quark:blue_crystal', 'quark:orange_crystal', 'quark:white_crystal', 'quark:green_crystal', 'quark:yellow_crystal', 'quark:black_crystal', 'quark:indigo_crystal', 'quark:orange_crystal']

  corundum.forEach(fair => {
    e.add(fair, Text.of('Can be grown similar to Sugar cane if placed at bedrock.').green())
  })

  let hammock = ['comforts:hammock_white', 'comforts:hammock_orange', 'comforts:hammock_magenta', 'comforts:hammock_light_blue', 'comforts:hammock_yellow', 'comforts:hammock_lime', 'comforts:hammock_pink', 'comforts:hammock_gray', 'comforts:hammock_light_gray', 'comforts:hammock_cyan', 'comforts:hammock_purple', 'comforts:hammock_blue', 'comforts:hammock_brown', 'comforts:hammock_green', 'comforts:hammock_red', 'comforts:hammock_black']

  hammock.forEach(fair => {
    e.add(fair, Text.of('Exclusively a reward for Astral Remix.').green())
  })



})





onEvent('player.data_from_server.reload', (event) => {
	global.onReload();
});

onEvent('client.logged_in', (event) => {
	global.onReload();
});
	