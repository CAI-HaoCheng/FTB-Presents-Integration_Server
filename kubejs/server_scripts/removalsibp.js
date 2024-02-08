//priority: 999

onEvent('tags.items', event => {
    event.remove('mysticalagriculture:essences', 'mysticalagriculture:inferium_essence')
})

onEvent('recipes', e => {
    e.remove({
        output: [
            'powah:energizing_orb',
            'betterendforge:infusion_pedestal',
            'rftoolspower:coalgenerator',
            'cyclic:harvester',
            'refinedstorage:quartz_enriched_iron', 'refinedstorage:processor_binding', 'refinedstorage:raw_basic_processor', 'refinedstorage:raw_improved_processor', 'refinedstorage:raw_advanced_processor', 'refinedstorage:machine_casing', 'refinedstorage:1k_storage_part', 'refinedstorage:grid', 'refinedstorage:pattern',
            'refinedstorage:1k_storage_part',
            'refinedstorage:grid',
            'refinedstorage:pattern',
            'refinedstorage:controller',
            'refinedstorage:processor_binding',
            'refinedstorage:quartz_enriched_iron',
            'mysticalagriculture:air_essence',
            'mysticalagriculture:air_seeds',
            'astralsorcery:telescope',
            'astralsorcery:hand_telescope', 
            'astralsorcery:celestial_gateway', 
            'astralsorcery:ritual_pedestal',
            'astralsorcery:prism',
            'astralsorcery:linking_tool',
            'botania:orechid',
            'botania:runic_altar',
            'botania:rosa_arcana',
            'botania:spectrolus',
            'botania:dirt_rod',
            'botania:water_rod',
            'botania:travel_belt',
            'botania:ice_pendant',
            'botania:cloud_pendant',
            'compactmachines:personal_shrinking_device',
            'compactcrafting:field_projector',
            'cyclic:inventory_cake',
            'cyclic:antigravity',
            'cyclic:tile_transporter_empty',
            'cyclic:collector',
            'industrialforegoing:machine_frame_advanced',
            'industrialforegoing:ore_laser_base',
            'industrialforegoing:fluid_laser_base',
            'industrialforegoing:laser_drill',
            'industrialforegoing:meat_feeder',
            'rftoolsbase:machine_frame', 'rftoolsstorage:storage_scanner', 'rftoolspower:dimensionalcell', 'rftoolspower:dimensionalcell_simple', 'rftoolsutility:elevator_button_module', 'rftoolsutility:screen_controller',
            'mekanism:metallurgic_infuser',
            'mekanism:energized_smelter',
            'mekanism:enrichment_chamber',
            'mekanism:electrolytic_separator',
            'mekanism:purification_chamber',
            'mekanism:thermal_evaporation_controller',
            'mekanism:thermal_evaporation_block',
            'mekanism:energy_tablet',
            'mekanism:chemical_infuser',
            'mekanism:chemical_injection_chamber',
            'mekanism:teleportation_core',
            'thermal:machine_frame',
            'thermal:rf_coil',
            'thermal:machine_pulverizer',
            'thermal:machine_furnace',
            'thermal:upgrade_augment_1',
            'thermal:upgrade_augment_2',
            'thermal:upgrade_augment_3',
            'thermal:machine_smelter',
            'thermal:machine_crucible',
            'thermal:machine_bottler',
            'simplyjetpacks:leather_strap',
            'thermal:dynamo_stirling',
            'thermal:dynamo_magmatic',
            'simplyjetpacks:thruster_te1',
            'simplyjetpacks:thruster_te2',
            'simplyjetpacks:thruster_te3',
            'thermal:dynamo_magmatic',
            'simplyjetpacks:thruster_te4',
            'thermal:dynamo_compression',
            'thermal:machine_sawmill',
            'refinedpipes:basic_energy_pipe',
            'refinedpipes:improved_energy_pipe',
            'thermal:flux_capacitor',
            'refinedpipes:advanced_energy_pipe',
            'immersiveengineering:cokebrick', 'immersiveengineering:blastbrick', 'immersiveengineering:cloche', 'immersiveengineering:alloybrick',
            'immersiveengineering:generator',
            'immersiveengineering:capacitor_hv',
            'forestry:farm_gourd_managed', 'forestry:farm_mushroom_managed', 'forestry:farm_nether_managed', 'forestry:farm_ender_managed', 'forestry:farm_crops_managed',
            'forestry:scoop',
            'forestry:sturdy_machine',
            'forestry:arboretum_manual',
            'forestry:farm_crops_managed',
            'forestry:farm_mushroom_managed',
            'forestry:farm_gourd_managed',
            'forestry:farm_ender_managed',
            'forestry:peat_bog_managed',
            'forestry:circuit_board_basic',
            'ftbic:basic_generator',
            'ftbic:macerator',
            'ftbic:copper_coil',
            'ftbic:centrifuge',
            'ftbic:lv_transformer',
            'ftbic:mv_transformer',
            'bloodmagic:altar',
            'bloodmagic:soulforge',
            'aiotbotania:terra_aiot',
            'aiotbotania:alfsteel_aiot',
            'pamhc2foodcore:grinderitem',
            'pamhc2foodcore:saucepanitem',
            'pamhc2foodcore:mixingbowlitem',
            'pamhc2foodcore:skilletitem',
            'pamhc2foodcore:bakewareitem',
            'pamhc2foodcore:cuttingboarditem',
            'pamhc2foodcore:potitem',
            'botania:flight_tiara',
            'botania:mana_spreader',
            'botania:terra_plate',
            'botania:light_relay',
            'botania:fertilizer',
            'botania:drum_wild',
            'ftbic:compressor',
            'botania:rune_water', 'botania:rune_fire', 'botania:rune_earth', 'botania:rune_air', 'botania:rune_spring', 'botania:rune_summer', 'botania:rune_autumn', 'botania:rune_winter', 'botania:rune_lust', 'botania:rune_gluttony', 'botania:rune_greed', 'botania:rune_sloth', 'botania:rune_wrath', 'botania:rune_envy', 'botania:rune_pride',
            'botania:orechid',
            'bloodmagic:sacrificialdagger',
            'bloodmagic:blankrune',
            'ftbic:powered_furnace',
            'mekanism:chemical_oxidizer',
            'mekanism:chemical_crystallizer',
            'mekanism:seismic_vibrator',
            'mekanism:chemical_washer',
            'mekanism:configurator',
            'mekanismgenerators:turbine_casing',
            'powah:ender_core',
            'extendedcrafting:basic_component',
            'extendedcrafting:luminessence',
            'extendedcrafting:advanced_component',
            'extendedcrafting:elite_component',
            'extendedcrafting:basic_table',
            'extendedcrafting:advanced_table',
            'extendedcrafting:elite_table',
            'extendedcrafting:ultimate_table',
            'mysticalagriculture:infusion_crystal',
            'mysticalagriculture:master_infusion_crystal',
            'fluxnetworks:flux_core',
            'enderstorage:ender_chest',
            'enderstorage:ender_tank',
            'extendedcrafting:crafting_core',
            'extendedcrafting:compressor',
            'cookingforblockheads:cow_jar',
            'cookingforblockheads:milk_jar',
            'boss_tools:compressor',
            'boss_tools_giselle_addon:advanced_compressor',
            'boss_tools:nasa_workbench',
            'boss_tools:rocket_fin',
            'boss_tools:iron_engine',
            'boss_tools:oxygen_loader',
            'boss_tools_giselle_addon:fuel_loader',
            'draconicevolution:basic_crafting_injector',
            'draconicevolution:wyvern_core',
            'draconicevolution:potentiometer',
            'tconstruct:molten_lumium',
            'tconstruct:seared_bricks',
            'tconstruct:seared_glass',
            'powah:capacitor_basic',
            'pipez:item_pipe',
            'pipez:fluid_pipe',
            'pipez:energy_pipe',
            'pipez:universal_pipe',
            'pipez:basic_upgrade',
            'pipez:advanced_upgrade',
            'pipez:ultimate_upgrade',
            'pipez:improved_upgrade',
            'refinedpipes:basic_item_pipe',
            'refinedpipes:improved_item_pipe',
            'mysticalagriculture:brass_essence',
            'mysticalagriculture:brass_seeds',
            'refinedpipes:advanced_item_pipe',
            'tconstruct:seared_heater',
            'mysticalagriculture:graphite_seeds',
            'mysticalagriculture:graphite_essence',
            'tconstruct:smeltery_controller',
            'ftbic:industrial_grade_metal',
            'storagenetwork:kabel',
            'ftbic:electronic_circuit',
            'ftbic:advanced_circuit',
            'ftbic:iridium_circuit',
            'botania:quartz_dark',
            'powah:dielectric_paste',
            'powah:capacitor_basic_tiny',
            'ftbic:fuse',
            'thermal:plate_iron',
            'thermal:plate_gold',
            'thermal:plate_copper',
            'thermal:plate_tin',
            'thermal:plate_lead',
            'thermal:plate_silver',
            'thermal:plate_invar',
            'thermal:plate_constantan',
            'thermal:plate_electrum',
            'immersiveengineering:plate_steel',
            'thermal:flux_drill',
            'storagenetwork:storage_kabel',
            'storagenetwork:import_kabel',
            'storagenetwork:filter_kabel',
            'ftbic:quarry',
            'extrastorage:raw_neural_processor',
            'extradisks:raw_withering_processor',
            'cyclic:terra_glass',
            'boss_tools:golden_tank',
            'boss_tools:diamond_tank',
            'mekanism:steel_casing',
            'forestry:circuit_board_basic',
            'forestry:circuit_board_enhanced',
            'forestry:circuit_board_refined',
            'forestry:circuit_board_intricate',
            'mekanism:basic_chemical_tank',
            'powah:dielectric_rod',
            'powah:dielectric_rod_horizontal',
            'industrialforegoing:machine_frame_pity',
            'industrialforegoing:machine_frame_simple',
            'industrialforegoing:animal_rancher',
            'industrialforegoing:hydroponic_bed',
            'industrialforegoing:plant_gatherer',
            'industrialforegoing:plant_sower',
            'industrialforegoing:animal_feeder',
            'industrialforegoing:plant_fertilizer',
            'industrialforegoing:mob_crusher',
            'industrialforegoing:mob_duplicator',
            'industrialforegoing:wither_builder',
            'industrialforegoing:mob_slaughter_factory',
            'industrialforegoing:sewer',
            'industrialforegoing:sewage_composter',
            'industrialforegoing:animal_baby_separator',
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
            'industrialforegoing:bioreactor',
            'industrialforegoing:enchantment_factory',
            'industrialforegoing:infinity_charger',
            'industrialforegoing:enchantment_sorter',
            'industrialforegoing:enchantment_applicator',
            'industrialforegoing:stasis_chamber',
            'industrialforegoing:enchantment_extractor',
            'industrialforegoing:mob_detector',
            'industrialforegoing:washing_factory',
            'industrialforegoing:material_stonework_factory',
            'industrialforegoing:fluid_sieving_machine',
            'industrialforegoing:mechanical_dirt',
            'industrialforegoing:block_breaker',
            'industrialforegoing:fermentation_station',
            'industrialforegoing:marine_fisher',
            'industrialforegoing:fluid_placer',
            'industrialforegoing:block_placer',
            'industrialforegoing:resourceful_furnace',
            'industrialforegoing:ore_laser_base',
            'industrialforegoing:fluid_collector',
            'industrialforegoing:spores_recreator',
            'industrialforegoing:potion_brewer',
            'industrialforegoing:sludge_refiner',
            'industrialforegoing:water_condensator',
            'industrialforegoing:dye_mixer',
            'industrialforegoing:fluid_laser_base',
            'industrialforegoing:laser_drill',
            'industrialforegoing:fluid_extractor',
            'industrialforegoing:latex_processing_unit',
            'industrialforegoing:dissolution_chamber',
            'cyclic:generator_fuel',
            'cyclic:generator_fluid',
            'cyclic:generator_food',
            'cyclic:generator_item',
            'cyclic:peat_generator',
            'cyclic:peat_unbaked',
            'cyclic:fluid_hopper',
            'cyclic:hopper',
            'cyclic:hopper_gold',
            'cyclic:sprinkler',
            'cyclic:shearing',
            'cyclic:wireless_energy',
            'cyclic:wireless_item',
            'cyclic:wireless_fluid',
            'cyclic:soil',
            'cyclic:apple_sprout',
            'cyclic:apple_sprout_diamond',
            'cyclic:apple_sprout_emerald',
            'cyclic:eye_teleport',
            'cyclic:battery',
            'cyclic:solidifier',
            'cyclic:peat_farm',
            'cyclic:melter',
            'cyclic:user',
            'cyclic:forester',
            'cyclic:miner',
            'cyclic:collector_fluid',
            'cyclic:placer_fluid',
            'cyclic:cask',
            'cyclic:uncrafter',
            'cyclic:fisher',
            'cyclic:anvil',
            'cyclic:anvil_magma',
            'cyclic:beacon',
            'cyclic:tank',
            'cyclic:beacon',
            'cyclic:terra_preta',
            'cyclic:mattock',
            'cyclic:mattock_nether',
            'cyclic:ice_scepter',
            'cyclic:fire_scepter',
            'cyclic:lightning_scepter',
            'cyclic:evoker_fang',
            'cyclic:charm_home',
            'cyclic:charm_world',
            'cyclic:elevation_wand',
            'cyclic:teleport_wand',
            'cyclic:energy_pipe',
            'cyclic:item_pipe',
            'cyclic:fluid_pipe',
            'cyclic:cable_wrench',
            'cyclic:charm_void',
            'cyclic:charm_antidote',
            'cyclic:charm_fire',
            'cyclic:charm_wither',
            'cyclic:charm_ultimate',
            'cyclic:emerald_sword',
            'cyclic:emerald_pickaxe',
            'cyclic:emerald_shovel',
            'cyclic:emerald_axe',
            'cyclic:emerald_hoe',
            'cyclic:emerald_helmet',
            'cyclic:emerald_chestplate',
            'cyclic:emerald_leggings',
            'cyclic:emerald_boots',
            'cyclic:nether_sword',
            'cyclic:nether_pickaxe',
            'cyclic:nether_shovel',
            'cyclic:nether_axe',
            'cyclic:nether_hoe',
            'cyclic:heart',
            'dankstorage:dank_1',
            'dankstorage:dank_2',
            'dankstorage:dank_3',
            'dankstorage:dank_4',
            'dankstorage:dank_5',
            'dankstorage:dank_6',
            'dankstorage:dank_7',
            'dankstorage:1_to_2',
            'dankstorage:2_to_3',
            'dankstorage:3_to_4',
            'dankstorage:4_to_5',
            'dankstorage:5_to_6',
            'dankstorage:6_to_7',
            'extendedcrafting:black_iron_ingot',
            'powah:furnator_basic',
            'powah:furnator_hardened',
            'powah:furnator_blazing',
            'powah:furnator_niotic',
            'powah:furnator_spirited',
            'powah:furnator_nitro',
            'powah:photoelectric_pane',
            'storagenetwork:inventory',
            'storagenetwork:request',
            'boss_tools:solar_panel',
            'miniutilities:solar_panel',
            'cyclic:glove_climb',
            'littlelogistics:tug',
            'thermal:area_radius_augment',
            'forestry:bituminous_peat',
            'storagenetwork:inventory_remote',
            'storagenetwork:crafting_remote',
            'storagenetwork:export_kabel',
            'storagedrawers:controller',
            'minecraft:bread',
            'pamhc2foodcore:flouritem',
            'pamhc2foodcore:doughitem',
            'pamhc2foodcore:toastitem',
            'pamhc2foodcore:grilledcheeseitem',
            'pamhc2foodcore:carrotbreaditem',
            'pamhc2foodcore:pumpkinbreaditem',
            'pamhc2foodcore:pastaitem',
            'pamhc2foodcore:noodlesoupitem',
            'pamhc2foodcore:applepieitem',
            'pamhc2foodcore:sweetberrypieitem',
            'pamhc2foodcore:chocolatecupcakeitem',
            'pamhc2foodcore:caramelcupcakeitem',
            'pamhc2foodcore:carrotcupcakeitem',
            'pamhc2foodcore:pumpkincupcakeitem',
            'pamhc2foodcore:batteritem',
            'pamhc2foodcore:donutitem',
            'pamhc2foodcore:chocolatedonutitem',
            'pamhc2foodcore:jellydonutitem',
            'pamhc2foodcore:softpretzelitem',
            'pamhc2foodcore:butteritem',
            'pamhc2foodcore:cheeseitem',
            'pamhc2foodcore:icecreamitem',
            'pamhc2foodcore:chocolateicecreamitem',
            'pamhc2foodcore:caramelicecreamitem',
            'pamhc2foodcore:cookiesandmilkitem',
            'pamhc2foodcore:cocoapowderitem',
            'pamhc2foodcore:hotchocolateitem',
            'pamhc2foodcore:marshmellowsitem',
            'pamhc2foodcore:marshmellowchicksitem',
            'pamhc2foodcore:chocolaterollitem',
            'pamhc2foodcore:mayonaiseitem',
            'pamhc2foodcore:applejuiceitem',
            'pamhc2foodcore:applejellyitem',
            'pamhc2foodcore:applesmoothieitem',
            'pamhc2foodcore:appletoastitem',
            'pamhc2foodcore:melonjuiceitem',
            'pamhc2foodcore:melonjellyitem',
            'pamhc2foodcore:melonsmoothieitem',
            'pamhc2foodcore:melontoastitem',
            'pamhc2foodcore:sweetberryjuiceitem',
            'pamhc2foodcore:sweetberryjellyitem',
            'pamhc2foodcore:sweetberrysmoothieitem',
            'pamhc2foodcore:sweetberrytoastitem',
            'pamhc2foodcore:friendchickenitem',
            'pamhc2foodcore:chickendinneritem',
            'pamhc2foodcore:groundbeefitem',
            'pamhc2foodcore:groundrabbititem',
            'pamhc2foodcore:groundporkitem',
            'pamhc2foodcore:groundchickenitem',
            'pamhc2foodcore:groundmuttonitem',
            'pamhc2foodcore:groundfishitem',
            'pamhc2foodcore:basicchickensandwichitem',
            'pamhc2foodcore:basichamburgeritem',
            'pamhc2foodcore:basiccheeseburgeritem',
            'pamhc2foodcore:hotdogitem',
            'pamhc2foodcore:baconcheeseburgeritem',
            'pamhc2foodcore:chickenpotpieitem',
            'pamhc2foodcore:fishsticksitem',
            'pamhc2foodcore:basicfishsandwichitem',
            'pamhc2foodcore:baconandeggsitem',
            'pamhc2foodcore:fishandchipsitem',
            'pamhc2foodcore:butteredbakedpotatoitem',
            'pamhc2foodcore:mashedpotatoesitem',
            'pamhc2foodcore:friesitem',
            'pamhc2foodcore:potatochipsitem',
            'pamhc2foodcore:potatosoupitem',
            'pamhc2foodcore:carrotsoupitem',
            'pamhc2foodcore:pumpkinsoupitem',
            'pamhc2foodcore:caramelappleitem',
            'pamhc2foodcore:caramelitem',
            'pamhc2foodcore:cookingoilitem',
            'pamhc2foodcore:stockitem',
            'pamhc2foodcore:fruitpunchitem',
            'pamhc2foodcore:p8juiceitem',
            'pamhc2foodcore:fruitcrumbleitem',
            'immersiveengineering:drillhead_steel',
            'waystones:waystone',
            'boss_tools:coal_generator',
            'boss_tools:blast_furnace',
            'boss_tools_giselle_addon:electric_blast_furnace',
            'cyclic:chorus_flight',
            'cyclic:chorus_spectral',
            'cyclic:charm_longfall',
            'cyclic:charm_creeper',
            'cyclic:charm_stone',
            'cyclic:charm_antipotion',
            'cyclic:charm_stealthpotion',
            'cyclic:charm_crit',
            'cyclic:quiver_damage',
            'cyclic:quiver_lightning',
            'cyclic:charm_invisible',
            'cyclic:charm_starvation',
            'cyclic:charm_magicdefense',
            'cyclic:charm_venom',
            'cyclic:charm_water',
            'cyclic:charm_speed',
            'cyclic:charm_knockback_resistance',
            'cyclic:charm_luck',
            'cyclic:charm_attack_speed',
            'cyclic:charm_xp_speed',
            'cyclic:charm_xp_blocker',
            'cyclic:prospector',
            'cyclic:ender_book',
            'cyclic:dark_glass',
            'cyclic:dark_glass_connected',
            'cyclic:ender_item_shelf',
            'cyclic:spikes_diamond',
            'cyclic:charm_wing',
            'metalbarrels:wood_to_copper',
            'metalbarrels:wood_to_iron',
            'metalbarrels:wood_to_silver',
            'metalbarrels:wood_to_gold',
            'metalbarrels:wood_to_diamond',
            'metalbarrels:wood_to_obsidian',
            'metalbarrels:copper_to_iron',
            'metalbarrels:copper_to_silver',
            'metalbarrels:copper_to_gold',
            'metalbarrels:copper_to_diamond',
            'metalbarrels:copper_to_obsidian',
            'metalbarrels:iron_to_silver',
            'metalbarrels:iron_to_gold',
            'metalbarrels:iron_to_diamond',
            'metalbarrels:iron_to_obsidian',
            'metalbarrels:silver_to_gold',
            'metalbarrels:silver_to_diamond',
            'metalbarrels:silver_to_obsidian',
            'metalbarrels:gold_to_diamond',
            'metalbarrels:gold_to_obsidian',
            'ironchest:iron_to_gold_chest_upgrade',
            'ironchest:gold_to_diamond_chest_upgrade',
            'ironchest:wood_to_iron_chest_upgrade',
            'ironchest:wood_to_copper_chest_upgrade',
            'ironchest:copper_to_silver_chest_upgrade',
            'ironchest:silver_to_gold_chest_upgrade',
            'ironchest:copper_to_iron_chest_upgrade',
            'ironchest:diamond_to_crystal_chest_upgrade',
            'ironchest:diamond_to_obsidian_chest_upgrade',
            'metalbarrels:copper_barrel',
            'metalbarrels:iron_barrel',
            'metalbarrels:silver_barrel',
            'metalbarrels:gold_barrel',
            'metalbarrels:diamond_barrel',
            'ironchest:copper_chest',
            'ironchest:iron_chest',
            'ironchest:gold_chest',
            'ironchest:silver_chest',
            'ironchest:diamond_chest',
            'sophisticatedbackpacks:iron_backpack',
            'sophisticatedbackpacks:gold_backpack',
            'sophisticatedbackpacks:diamond_backpack',
            'sophisticatedbackpacks:upgrade_base',
            'sophisticatedbackpacks:magnet_upgrade',
            'sophisticatedbackpacks:advanced_magnet_upgrade',
            'sophisticatedbackpacks:advanced_pickup_upgrade',
            'sophisticatedbackpacks:advanced_deposit_upgrade',
            'sophisticatedbackpacks:advanced_filter_upgrade',
            'sophisticatedbackpacks:advanced_void_upgrade',
            'sophisticatedbackpacks:advanced_feeding_upgrade',
            'sophisticatedbackpacks:advanced_restock_upgrade',
            'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
            'sophisticatedbackpacks:advanced_pump_upgrade',
            'sophisticatedbackpacks:auto_smoking_upgrade',
            'sophisticatedbackpacks:advanced_compacting_upgrade',
            'cyclic:crate',
            'powah:uraninite',
            'immersiveengineering:light_engineering',
            'ftbic:lv_solar_panel',
            'powah:magmator_niotic',
            'powah:thermo_generator_blazing',
            'powah:thermoelectric_plate',
            'mythicbotany:kvasir_blood',
            'refinedstorage:1k_storage_disk',
            'refinedstorage:4k_storage_disk',
            'refinedstorage:16k_storage_disk',
            'refinedstorage:64k_storage_disk',
            'refinedstorage:64k_fluid_storage_disk',
            'refinedstorage:256k_fluid_storage_disk',
            'refinedstorage:1024k_fluid_storage_disk',
            'refinedstorage:4096k_fluid_storage_disk',
            'littlelogistics:energy_tug',
            'littlelogistics:barge',
            'littlelogistics:fluid_barge',
            'littlelogistics:chunk_loader_barge',
            'littlelogistics:fishing_barge',
            'boss_tools:fuel_refinery',
            'mekanismgenerators:fission_fuel_assembly',
            'xnet:controller',
            'rftoolsbuilder:builder',
            'rftoolsutility:crafter1',
            'rftoolsutility:crafter2',
            'rftoolsutility:crafter3',
            'xnet:router',
            'xnet:redstone_proxy',
            'rftoolsbuilder:shape_card_quarry',
            'rftoolsutility:crafter2',
            'thermal:redstone_servo',
            'thermal:machine_brewer',
            'thermal:machine_chiller',
            'thermal:machine_refinery',
            'thermal:machine_press',
            'thermal:flux_saw',
            'astralsorcery:blink_wand',
            'simplyjetpacks:jetpack_vanilla1',
            'simplyjetpacks:jetpack_vanilla2',
            'simplyjetpacks:jetpack_vanilla3',
            'simplyjetpacks:jetpack_vanilla4',
            'simplyjetpacks:jetpack_mek1',
            'simplyjetpacks:jetpack_mek2',
            'simplyjetpacks:jetpack_mek3',
            'simplyjetpacks:jetpack_mek4',
            'simplyjetpacks:jetpack_ie1',
            'simplyjetpacks:jetpack_ie2',
            'simplyjetpacks:jetpack_ie3',
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
            'thermal:tomato_sauce',
            'thermal:peanut_butter',
            'thermal:jelly',
            'mekanism:basic_tier_installer',
            'mekanism:advanced_tier_installer',
            'mekanism:elite_tier_installer',
            'mekanism:ultimate_tier_installer',
            'mekanism:basic_energy_cube',
            'mekanism:upgrade_speed',
            'mekanism:upgrade_energy',
            'astralsorcery:wand',
            'draconicevolution:draconium_core',
            'infused_crystals:chargerblock',
            'infused_crystals:infernal_fuel',
            'infused_crystals:coalium_stick',
            'industrialforegoing:mob_imprisonment_tool',
            'cyclic:experience_pylon',
            'dimdungeons:item_portal_key',
            'dimdungeons:block_gilded_portal',
            'industrialforegoing:machine_frame_supreme',
            'cyclic:storage_bag',
            'industrialforegoing:plastic',
            'xnet:wireless_router',
            'draconicevolution:wyvern_crafting_injector',
            'mekanism:yellow_cake_uranium',
            'ftbic:uranium_fuel_rod',
            'bloodmagic:alchemicalreactionchamber',
            'thermal:enderium_coin',
            'miniutilities:magical_egg',
            'travel_anchors:travel_staff',
            'miniutilities:unstable_ingot',
            'notenoughwands:teleportation_wand',
            'waystones:warp_dust',
            'ftbic:gold_wire',
            'ftbic:aluminum_wire',
            'ftbic:enderium_wire',
            'ftbic:copper_wire',
            'botania:mana_gun',
            'minecraft:oak_wood',
            'minecraft:birch_wood',
            'minecraft:spruce_wood',
            'minecraft:jungle_wood',
            'minecraft:acacia_wood',
            'minecraft:dark_oak_wood',
            'architectspalette:twisted_wood',
            'environmental:willow_wood',
            'environmental:cherry_wood',
            'environmental:wisteria_wood',
            'minecraft:crimson_hyphae',
            'minecraft:warped_hyphae',
            'immersiveengineering:heavy_engineering',
            'immersiveengineering:dust_aluminum',
            'extendedcrafting:handheld_table',
            'immersiveengineering:rs_engineering',
            'simplyjetpacks:jetpack_te1',
            'simplyjetpacks:jetpack_te2',
            'simplyjetpacks:jetpack_te3',
            'simplyjetpacks:jetpack_te4',
            'industrialforegoing:range_addon0',
            'industrialforegoing:range_addon1',
            'industrialforegoing:range_addon2',
            'industrialforegoing:range_addon3',
            'industrialforegoing:range_addon4',
            'industrialforegoing:range_addon5',
            'industrialforegoing:range_addon6',
            'industrialforegoing:range_addon7',
            'industrialforegoing:range_addon8',
            'industrialforegoing:range_addon9',
            'industrialforegoing:range_addon10',
            'industrialforegoing:range_addon11',
            'thermal:device_fisher',
            'miniutilities:golden_lasso',
            'mekanism:superheating_element',
            'mekanism:basic_universal_cable',
            'botania:heisei_dream',
            'chisel:charcoal/raw',
            'industrialforegoing:simple_black_hole_unit',
            'industrialforegoing:simple_black_hole_tank',
            'industrialforegoing:advanced_black_hole_unit',
            'industrialforegoing:advanced_black_hole_tank',
            'industrialforegoing:supreme_black_hole_unit',
            'industrialforegoing:supreme_black_hole_tank',
            'draconicevolution:infused_obsidian',
            'draconicevolution:dislocator',
            'mekanism:enriched_refined_obsidian',
            'miniutilities:quantum_quarry',
            'miniutilities:mechanical_placer',
            'miniutilities:angel_ring',
            'fluxnetworks:flux_block',
            'waystones:sharestone',
            'rftoolsbuilder:shape_card_void',
            'rftoolsbase:machine_infuser',
            'xreliquary:alkahestry_tome',
            'cyclic:disenchanter',
            'draconicevolution:energy_transfuser',
            'draconicadditions:wyvern_harness',
            'draconicadditions:draconic_harness',
            'draconicadditions:chaotic_harness',
            'rftoolsutility:tank',
            'rftoolsstorage:modular_storage',
            'rftoolsstorage:storage_module1',
            'rftoolsstorage:storage_module2',
            'rftoolsstorage:storage_module3',
            'mekanism:basic_logistical_transporter',
            'mekanism:logistical_sorter',
            'prettypipes:pipe',
            'prettypipes:blank_module',
            'storagenetwork:master',
            'prettypipes:low_extraction_module',
            'prettypipes:medium_extraction_module',
            'prettypipes:high_extraction_module',
            'prettypipes:low_filter_module',
            'prettypipes:medium_filter_module',
            'prettypipes:high_filter_module',
            'prettypipes:low_speed_module',
            'prettypipes:medium_speed_module',
            'prettypipes:high_speed_module',
            'prettypipes:low_low_priority_module',
            'prettypipes:medium_low_priority_module',
            'prettypipes:high_low_priority_module',
            'prettypipes:low_high_priority_module',
            'prettypipes:medium_high_priority_module',
            'prettypipes:high_high_priority_module',
            'prettypipes:low_retrieval_module',
            'prettypipes:medium_retrieval_module',
            'prettypipes:high_retrieval_module',
            'prettypipes:low_crafting_module',
            'prettypipes:medium_crafting_module',
            'prettypipes:high_crafting_module',
            'prettypipes:stack_size_module',
            'prettypipes:redstone_module',
            'prettypipes:damage_filter_modifier',
            'prettypipes:nbt_filter_modifier',
            'prettypipes:mod_filter_modifier',
            'prettypipes:tag_filter_modifier',
            'prettypipes:filter_increase_modifier',
            'prettypipes:round_robin_sorting_modifier',
            'prettypipes:random_sorting_modifier',
            'prettypipes:item_terminal',
            'ftbic:mixed_metal_blend',
            'shrink:shrink_ray',
            'shrink:mob_bottle',
            'shrink:shrinking_device',
            'draconicevolution:draconium_nugget',
            'boss_tools:desh_nugget',
            'boss_tools:silicon_nugget',
            'extendedcrafting:black_iron_nugget',
            'mekanism:combiner',
            'miniutilities:blessed_earth',
            'minecraft:beetroot_soup',
            'cyclic:shears_obsidian',
            'cyclic:shears_flint',
            'rftoolsutility:spawner',
            'rftoolsutility:matter_beamer',
            'mekanism:antiprotonic_nucleosynthesizer',
            'mekanismgenerators:heat_generator'
        ]
    })
})



onEvent('recipes', event => {

    event.remove({input: 'xreliquary:alkahestry_tome'})
    event.remove({input: 'pamhc2foodcore:potitem'})
    event.remove({input: 'pamhc2foodcore:cuttingboarditem'})
    event.remove({input: 'pamhc2foodcore:skilletitem'})
    event.remove({input: 'pamhc2foodcore:bakewareitem'})
    event.remove({input: 'pamhc2foodcore:juiceritem'})
    event.remove({input: 'pamhc2foodcore:mortaritem'})
    event.remove({input: 'pamhc2foodcore:mixingbowlitem'})
    event.remove({input: 'pamhc2foodcore:saucepanitem'})
    event.remove({input: 'pamhc2foodcore:saltitem'})
    event.remove({input: 'infused_crystals:coalium_stick'})
    event.remove({id: 'astralsorcery:altar/hand_telescope'})
    event.remove({id: 'astralsorcery:altar/telescope'})
    event.remove({id: 'astralsorcery:altar/prism'})
    event.remove({id: 'immersiveengineering:crafting/plate_aluminum_hammering'})
    event.remove({id: 'astralsorcery:altar/ritual_pedestal'})
    event.remove({id: 'astralsorcery:altar/altar_attunement'})
    event.remove({id: 'astralsorcery:altar/altar_constellation'})
    event.remove({id: 'astralsorcery:altar/altar_radiance'})
    event.remove({id: 'astralsorcery:altar/celestial_gateway'})
    event.remove({id: 'astralsorcery:altar/refraction_table'})
    event.remove({id: 'astralsorcery:altar/mantle'})
    event.remove({id: 'bloodmagic:altar/soul_snare'})
    event.remove({id: 'bloodmagic:altar/slate'})
    event.remove({id: 'bloodmagic:altar/apprenticebloodorb'})
    event.remove({id: 'bloodmagic:altar/weakbloodorb'})
    event.remove({id: 'bloodmagic:altar/magicianbloodorb'})
    event.remove({id: 'bloodmagic:altar/masterbloodorb'})
    event.remove({id: 'bloodmagic:altar/air_tool'})
    event.remove({id: 'bloodmagic:altar/water_tool'})
    event.remove({id: 'bloodmagic:altar/fire_tool'})
    event.remove({id: 'bloodmagic:altar/earth_tool'})
    event.remove({id: 'bloodmagic:altar/dusk_tool'})
    event.remove({id: 'bloodmagic:soulforge/pettytartaricgem'})
    event.remove({id: 'bloodmagic:soulforge/sentientsword'})
    event.remove({id: 'bloodmagic:soulforge/lessertartaricgem'})
    event.remove({id: 'bloodmagic:soulforge/commontartaricgem'})
    event.remove({id: 'bloodmagic:alchemytable/arcane_ash'})
    event.remove({id: 'bloodmagic:alchemytable/sand_gold'})
    event.remove({id: 'bloodmagic:alchemytable/iron_gold'})
    event.remove({id: 'bloodmagic:alchemytable/coal_gold'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_ingot_iron'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_gravel_iron'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_ore_iron'})
    event.remove({id: 'bloodmagic:arc/ore/dustiron'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_ingot_gold'})
    event.remove({id: 'bloodmagic:arc/ore/dustgold'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_gravel_gold'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_ore_gold'})
    event.remove({id: 'iapmekanism:refined_glowstone'})
    event.remove({id: 'iapmekanism:refined_obsidian'})
    event.remove({id: 'iapb:elementium'})
    event.remove({id: 'mysticalagriculture:element_seeds_reprocessor'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_ingot_netherite_scrap'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_gravel_netherite_scrap'})
    event.remove({id: 'bloodmagic:arc/dustsfrom_ore_netherite_scrap'})
    event.remove({id: 'bloodmagic:alchemytable/reagent_binding'})
    event.remove({id: 'bloodmagic:soulforge/demon_crucible'})
    event.remove({id: 'bloodmagic:soulforge/demon_crystallizer'})
    event.remove({id: 'mekanism:metallurgic_infusing/alloy/infused'})
    event.remove({id: 'mekanism:control_circuit/basic'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/copper/wire_gold_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/copper/wire_sand_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/electrum/wire_gold_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/electrum/wire_sand_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/aluminum/wire_gold_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/aluminum/wire_sand_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/steel/wire_gold_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/steel/wire_sand_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/lead/wire_gold_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/metal/lead/wire_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/aluminum/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/ingot'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/wire'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/ingot'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/wire'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/ingot'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/wire'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/invar/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/invar/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/invar/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/invar/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/invar/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/n/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/invar/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/invar/wire'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/ingot'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/wire'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/ingot'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/wire'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/ingot'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/steel/wire'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/block'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/uranium/ore'})
    event.remove({id: 'iapb:manasteel'})
    event.remove({id: 'mysticalagriculture:essence/common/sulfur'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/coin'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/dust'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/gear'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/ingot'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/nugget'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/plates'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/rod'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/sheetmetal'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/obsidian/wire'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_electrum'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_bronze'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_invar'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_signalum'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_lumium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_enderium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_refined_obsidian'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_refined_glowstone'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/nickel/ore'})
    event.remove({id: 'tconstruct:smeltery/melting/metal/osmium/ore'})
    event.remove({id: 'thermal:earth_tnt'})
    event.remove({id: 'thermal:ice_tnt'})
    event.remove({id: 'thermal:fire_tnt'})
    event.remove({id: 'thermal:lightning_tnt'})
    event.remove({id: 'thermal:redstone_tnt'})
    event.remove({id: 'thermal:glowstone_tnt'})
    event.remove({id: 'thermal:ender_tnt'})
    event.remove({id: 'thermal:phyto_tnt'})
    event.remove({id: 'thermal:slime_tnt'})
    event.remove({id: 'thermal:earth_grenade'})
    event.remove({id: 'thermal:ice_grenade'})
    event.remove({id: 'thermal:fire_grenade'})
    event.remove({id: 'thermal:lightning_grenade'})
    event.remove({id: 'thermal:redstone_grenade'})
    event.remove({id: 'thermal:glowstone_grenade'})
    event.remove({id: 'thermal:ender_grenade'})
    event.remove({id: 'thermal:slime_grenade'})
    event.remove({id: 'miniutilities:cursed_earth'})
    event.remove({id: 'tconstruct:smeltery/entity_melting/zombie_villager'})
    event.remove({id: 'mekanism:infusion_conversion/refined_obsidian/from_dust'})
    event.remove({id: 'mekanism:infusion_conversion/refined_obsidian/from_enriched'})
    event.remove({id: 'mekanism:rotary_condensentrator'})
    event.remove({id: 'mekanism:sps_casing'})
    event.remove({id: 'mysticalagriculture:iron_seeds'})
    event.remove({id: 'mysticalagriculture:coal_seeds'})
    event.remove({id: 'mysticalagriculture:redstone_seeds'})
    event.remove({id: 'mysticalagriculture:glowstone_seeds'})
    event.remove({id: 'mysticalagriculture:gold_seeds'})
    event.remove({id: 'mysticalagriculture:diamond_seeds'})
    event.remove({id: 'mysticalagriculture:emerald_seeds'})
    event.remove({id: 'mysticalagriculture:copper_seeds'})
    event.remove({id: 'mysticalagriculture:tin_seeds'})
    event.remove({id: 'mysticalagriculture:lead_seeds'})
    event.remove({id: 'mysticalagriculture:silver_seeds'})
    event.remove({id: 'mysticalagriculture:bronze_seeds'})
    event.remove({id: 'mysticalagriculture:electrum_seeds'})
    event.remove({id: 'mysticalagriculture:osmium_seeds'})
    event.remove({id: 'powah:energizing/blazing_crystal'})
    event.remove({id: 'powah:energizing/niotic_crystal'})
    event.remove({id: 'powah:energizing/spirited_crystal'})
    event.remove({id: 'powah:energizing/nitro_crystal'})
    event.remove({id: 'powah:energizing/energized_steel'})
    event.remove({id: 'powah:energizing/blazing_crystal_2'})
    event.remove({id: 'mekanismgenerators:fission_fuel_assembly'})
    event.remove({id: 'tconstruct:compat/refined_obsidian_ingot'})
    event.remove({id: 'tconstruct:compat/refined_glowstone_ingot'})
    event.remove({id: 'minecraft:enchanting_table'})
    event.remove({id: 'miniutilities:mechanical_miner'})
    event.remove({id: 'immersiveengineering:rs_engineering'})
    event.remove({id: 'miniutilities:stone_drum'})
    event.remove({id: 'miniutilities:iron_drum'})
    event.remove({id: 'miniutilities:reinforced_large_drum'})
    event.remove({id: 'miniutilities:netherite_reinforced_drum'})
    event.remove({id: 'miniutilities:unstable_drum'})
    event.remove({id: 'miniutilities:angel_ring'})
    event.remove({id: 'tconstruct:smeltery/melting/soul/glass'})
    event.remove({id: 'tconstruct:smeltery/melting/soul/pane'})
    event.remove({id: 'tconstruct:smeltery/melting/soul/sand'})
    event.remove({id: 'infused_crystals:redstone_crystal'})
    event.remove({id: 'infused_crystals:iron_crystal'})
    event.remove({id: 'infused_crystals:lapis_crystal'})
    event.remove({id: 'infused_crystals:coal_crystal'})
    event.remove({id: 'infused_crystals:diamond_crystal'})
    event.remove({id: 'infused_crystals:emerald_crystal'})
    event.remove({id: 'immersivepetroleum:hydrotreater/sulfur_recovery'})
    event.remove({id: 'thermal:machine/crucible/crucible_redstone_dust'})
    event.remove({id: 'thermal:machine/crucible/crucible_glowstone_dust'})
    event.remove({id: 'thermal:machine/crucible/crucible_redstone_block'})
    event.remove({id: 'thermal:machine/crucible/crucible_glowstone_block'})
    event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
    event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
    event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
    event.remove({id: 'thermal:signalum_dust_4'})
    event.remove({id: 'thermal:lumium_dust_4'})
    event.remove({id: 'thermal:enderium_dust_2'})
    event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
    event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
    event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
    event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
    event.remove({id: 'ftbic:rolling/generated/plate_from_ingot/thermal/copper_plate'})
    event.remove({id: 'ftbic:rolling/generated/plate_from_ingot/thermal/netherite_plate'})
    event.remove({id: 'ftbic:macerating/generated/dust_from_ore/immersiveengineering/dust_aluminum'})
    event.remove({id: 'astralsorcery:smelting/starmetal_ingot'})
    event.remove({id: 'astralsorcery:blasting/starmetal_ingot'})
    event.remove({id: 'waystones:mossy_waystone'})
    event.remove({id: 'waystones:sandy_waystone'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon0'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon1'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon2'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon3'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon4'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon5'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon6'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon7'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon8'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon9'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon10'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/range_addon11'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/efficiency_addon_1'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/efficiency_addon_2'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/speed_addon_1'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/speed_addon_2'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/processing_addon_1'})
    event.remove({id: 'industrialforegoing:dissolution_chamber/processing_addon_2'})
    event.remove({id: 'astralsorcery:liquid_interaction/liquidstarlight_water_ice'})
    event.remove({id: 'botania:mana_infusion/manasteel'})
    event.remove({id: 'botania:mana_infusion/manasteel_block'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_lucernia'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_umbrella_tree'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_pythadendron'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_tenanea'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_helix_tree'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_dragon_tree'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_jellyshroom'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_mossy_glowshroom'})
    event.remove({id: 'thermal:compat/betterendforge/tree_extractor_lacugrove'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/iron/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/aluminum/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/aluminum/plate_gold_cast'})    
    event.remove({id: 'tconstruct:smeltery/casting/metal/uranium/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/uranium/plate_gold_cast'})        
    event.remove({id: 'tconstruct:smeltery/casting/metal/iron/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/gold/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/gold/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/copper/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/copper/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/tin/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/tin/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/lead/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/lead/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/silver/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/silver/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/lead/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/lead/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/nickel/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/nickel/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/netherite/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/netherite/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/bronze/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/bronze/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/electrum/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/electrum/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/invar/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/invar/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/constantan/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/constantan/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/signalum/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/signalum/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/lumium/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/lumium/plate_sand_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/enderium/plate_gold_cast'})
    event.remove({id: 'tconstruct:smeltery/casting/metal/enderium/plate_sand_cast'})
    event.remove({id: 'astralsorcery:altar/wand'})
    event.remove({id: 'iapbmekanism:osmium'})
    event.remove({id: 'iapbmekanism:refined_glowstone'})
    event.remove({id: 'iapbmekanism:refined_obsidian'})
    event.remove({id: 'astralsorcery:altar/linking_tool'})
    event.remove({id: 'mekanism:processing/iron/slurry/dirty'})
    event.remove({id: 'mekanism:processing/gold/slurry/dirty'})
    event.remove({id: 'mekanism:processing/osmium/slurry/dirty'})
    event.remove({id: 'mekanism:processing/copper/slurry/dirty'})
    event.remove({id: 'mekanism:processing/tin/slurry/dirty'})
    event.remove({id: 'mekanism:processing/lead/slurry/dirty'})
    event.remove({id: 'mekanism:processing/uranium/slurry/dirty'})
    event.remove({id: 'mekanism:processing/osmium/ingot/from_ore_smelting'})
    event.remove({id: 'mekanism:processing/osmium/ingot/from_ore_blasting'})
    event.remove({id: 'mekanism:processing/osmium/dirty_dust/from_clump'})
    event.remove({id: 'mekanism:processing/osmium/clump/from_ore'})
    event.remove({id: 'mekanism:processing/osmium/clump/from_shard'})
    event.remove({id: 'mekanism:processing/osmium/shard/from_ore'})
    event.remove({id: 'mekanism:processing/osmium/shard/from_crystal'})
    event.remove({id: 'thermal:compat/mekanism/smelter_mek_osmium_ore'})
    event.remove({id: 'thermal:compat/mekanism/pulverizer_mek_osmium_ore'})
    event.remove({id: 'immersiveengineering:crusher/ore_osmium'})
    event.remove({id: 'immersiveengineering:arcfurnace/ore_osmium'})
    event.remove({id: 'mekanism:processing/osmium/dust/from_ore'})
    event.remove({id: 'thermal:electrum_dust_2'})
    event.remove({id: 'thermal:bronze_dust_4'})
    event.remove({id: 'thermal:invar_dust_3'})
    event.remove({id: 'thermal:constantan_dust_2'})    
    event.remove({id: 'iapmekanism:osmium'})   
    event.remove({id: 'immersiveengineering:crusher/nether_wart'})   
    event.remove({id: 'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'})  
    event.remove({id: 'mekanism:factory/basic/smelting'})  
    event.remove({id: 'mekanism:factory/advanced/smelting'})
    event.remove({id: 'mekanism:factory/elite/smelting'})
    event.remove({id: 'mekanism:factory/ultimate/smelting'})
    event.remove({id: 'mekanism:factory/basic/enriching'})  
    event.remove({id: 'mekanism:factory/advanced/enriching'})
    event.remove({id: 'mekanism:factory/elite/enriching'})
    event.remove({id: 'mekanism:factory/ultimate/enriching'})
    event.remove({id: 'mekanism:factory/basic/crushing'})  
    event.remove({id: 'mekanism:factory/advanced/crushing'})
    event.remove({id: 'mekanism:factory/elite/crushing'})
    event.remove({id: 'mekanism:factory/ultimate/crushing'})
    event.remove({id: 'mekanism:factory/basic/compressing'})  
    event.remove({id: 'mekanism:factory/advanced/compressing'})
    event.remove({id: 'mekanism:factory/elite/compressing'})
    event.remove({id: 'mekanism:factory/ultimate/compressing'})
    event.remove({id: 'mekanism:factory/basic/combining'})  
    event.remove({id: 'mekanism:factory/advanced/combining'})
    event.remove({id: 'mekanism:factory/elite/combining'})
    event.remove({id: 'mekanism:factory/ultimate/combining'})
    event.remove({id: 'mekanism:factory/basic/purifying'})  
    event.remove({id: 'mekanism:factory/advanced/purifying'})
    event.remove({id: 'mekanism:factory/elite/purifying'})
    event.remove({id: 'mekanism:factory/ultimate/purifying'})
    event.remove({id: 'mekanism:factory/basic/injecting'})  
    event.remove({id: 'mekanism:factory/advanced/injecting'})
    event.remove({id: 'mekanism:factory/elite/injecting'})
    event.remove({id: 'mekanism:factory/ultimate/injecting'})
    event.remove({id: 'mekanism:factory/basic/infusing'})  
    event.remove({id: 'mekanism:factory/advanced/infusing'})
    event.remove({id: 'mekanism:factory/elite/infusing'})
    event.remove({id: 'mekanism:factory/ultimate/infusing'})
    event.remove({id: 'mekanism:factory/basic/sawing'})  
    event.remove({id: 'mekanism:factory/advanced/sawing'})
    event.remove({id: 'mekanism:factory/elite/sawing'})
    event.remove({id: 'mekanism:factory/ultimate/sawing'})
    event.remove({id: 'comforts:hammock_white'})
    event.remove({id: 'comforts:hammock_orange'})
    event.remove({id: 'comforts:hammock_magenta'})
    event.remove({id: 'comforts:hammock_light_blue'})
    event.remove({id: 'comforts:hammock_yellow'})
    event.remove({id: 'comforts:hammock_lime'})
    event.remove({id: 'comforts:hammock_pink'})
    event.remove({id: 'comforts:hammock_gray'})
    event.remove({id: 'comforts:hammock_light_gray'})
    event.remove({id: 'comforts:hammock_cyan'})
    event.remove({id: 'comforts:hammock_purple'})
    event.remove({id: 'comforts:hammock_blue'})
    event.remove({id: 'comforts:hammock_brown'})
    event.remove({id: 'comforts:hammock_green'})
    event.remove({id: 'comforts:hammock_red'})
    event.remove({id: 'comforts:hammock_black'})
    event.remove({id: 'mysticalagriculture:essence/botania/terrasteel_ingot'})
    event.remove({id: 'thermalexpansion:machine/insolator/nether_star_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_uraninite_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_blazing_crystal_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_uraninite_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_spirited_crystal_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_niotic_crystal_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_signalum_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_lumium_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_enderium_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_refined_obsidian_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_refined_glowstone_seeds'})
    event.remove({id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_quartz_enriched_iron_seeds'})
    event.remove({id: 'immersiveengineering:crafting/hammercrushing_osmium'})
})
