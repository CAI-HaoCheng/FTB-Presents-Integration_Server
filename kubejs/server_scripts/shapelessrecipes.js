
onEvent('recipes', event => {

    let multiSmelt = (output, input, includeBlasting) => {
        event.smelting(output, input)
        
        if (includeBlasting) {
        event.blasting(output, input)
        }
    }
    
    multiSmelt('ibpdx:mixed_brick', 'ibpdx:mixed_blend', true)


    event.shapeless('8x ibpdx:fuel_unit',
    ['minecraft:charcoal']
    )
    event.shapeless('8x ibpdx:fuel_unit',
    ['minecraft:coal']
    )
    event.shapeless('tconstruct:seared_glass',
    ['tconstruct:seared_bricks','minecraft:glass']
    )
    event.shapeless('2x ibpdx:pyrotheum_blend',
    ['infused_crystals:redstonium_crystal','minecraft:blaze_powder','thermal:niter_dust','ibpdx:bedrock_crystal']
    )
    event.shapeless('2x ibpdx:cryotheum_blend',
    ['infused_crystals:redstonium_crystal','thermal:blizz_powder','thermal:niter_dust','boss_tools:ice_shard']
    )
    event.shapeless('2x ibpdx:petrotheum_blend',
    ['infused_crystals:redstonium_crystal','thermal:basalz_powder','thermal:niter_dust','minecraft:obsidian']
    )
    event.shapeless('2x ibpdx:aerotheum_blend',
    ['infused_crystals:redstonium_crystal','thermal:blitz_powder','thermal:niter_dust','quark:clear_shard']
    )
    event.shapeless('9x ibpdx:stainless_steel_ingot',
    ['ibpdx:stainless_steel_block']
    )
    event.shapeless('9x boss_tools:desh_ingot',
    ['boss_tools:desh_block']
    )
    event.shapeless('9x boss_tools:silicon_ingot',
    ['boss_tools:silicon_block']
    )
    event.shapeless('9x minecraft:iron_ingot',
    ['minecraft:iron_block']
    )
    event.shapeless('9x minecraft:gold_ingot',
    ['minecraft:gold_block']
    )
    event.shapeless('9x thermal:copper_ingot',
    ['thermal:copper_block']
    )
    event.shapeless('9x thermal:tin_ingot',
    ['thermal:tin_block']
    )
    event.shapeless('9x thermal:lead_ingot',
    ['thermal:lead_block']
    )
    event.shapeless('9x thermal:silver_ingot',
    ['thermal:silver_block']
    )
    event.shapeless('9x immersiveengineering:ingot_aluminum',
    ['immersiveengineering:storage_aluminum']
    )
    event.shapeless('9x infused_crystals:redstonium_crystal',
    ['infused_crystals:block_of_redstonium']
    )
    event.shapeless('9x infused_crystals:ironium_crystal',
    ['infused_crystals:block_of_ironium']
    )
    event.shapeless('9x minecraft:redstone',
    ['minecraft:redstone_block']
    )
    event.shapeless('9x minecraft:lapis_lazuli',
    ['minecraft:lapis_block']
    )
    event.shapeless('9x minecraft:diamond',
    ['minecraft:diamond_block']
    )
    event.shapeless('9x minecraft:emerald',
    ['minecraft:emerald_block']
    )
    event.shapeless('9x thermal:nickel_ingot',
    ['thermal:nickel_block']
    )
    event.shapeless('9x extendedcrafting:black_iron_ingot',
    ['extendedcrafting:black_iron_block']
    )
    event.shapeless('immersiveengineering:ingot_steel',
    ['boss_tools:steel_ingot']
    )
    event.shapeless('thermal:copper_ingot',
    ['immersiveengineering:ingot_copper']
    )
    event.shapeless('thermal:lead_nugget',
    ['immersiveengineering:nugget_lead']
    )
    event.shapeless('thermal:silver_nugget',
    ['immersiveengineering:nugget_silver']
    )
    event.shapeless('thermal:nickel_nugget',
    ['immersiveengineering:nugget_nickel']
    )
    event.shapeless('pamhc2foodcore:chocolateicecreamitem',
    ['pamhc2foodcore:icecreamitem','pamhc2foodcore:cocoapowderitem']
    )
    event.shapeless('pamhc2foodcore:caramelicecreamitem',
    ['pamhc2foodcore:icecreamitem','pamhc2foodcore:caramelitem']
    )
    event.shapeless('pamhc2foodcore:basiccheeseburgeritem',
    ['pamhc2foodcore:basichamburgeritem','pamhc2foodcore:cheeseitem','thermal:tomato_sauce']
    )
    event.shapeless('pamhc2foodcore:baconcheeseburgeritem',
    ['pamhc2foodcore:basiccheeseburgeritem','minecraft:cooked_porkchop']
    )
    event.shapeless('pamhc2foodcore:melonjellytoastitem',
    ['pamhc2foodcore:melonjellyitem','pamhc2foodcore:toastitem']
    )
    event.shapeless('pamhc2foodcore:applejellytoastitem',
    ['pamhc2foodcore:applejellyitem','pamhc2foodcore:toastitem']
    )
    event.shapeless('pamhc2foodcore:sweetberryjellytoastitem',
    ['pamhc2foodcore:sweetberryjellyitem','pamhc2foodcore:toastitem']
    )
    event.shapeless('pamhc2foodcore:cookiesandmilkitem',
    ['pamhc2foodcore:freshmilkitem','minecraft:cookie']
    )
    event.shapeless('pamhc2foodcore:butteredbakedpotatoitem',
    ['minecraft:baked_potato','pamhc2foodcore:butteritem']
    )
    event.shapeless('pamhc2foodcore:caramelappleitem',
    ['minecraft:apple','pamhc2foodcore:caramelitem']
    )
    event.shapeless('pamhc2foodcore:chickendinneritem',
    ['pamhc2foodcore:friedchickenitem','pamhc2foodcore:mashedpotatoesitem','minecraft:carrot']
    )
    event.shapeless('pamhc2foodcore:butteritem',
    ['pamhc2foodcore:freshmilkitem']
    )
    event.shapeless('pamhc2foodcore:batteritem',
    ['pamhc2foodcore:freshmilkitem','pamhc2foodcore:flouritem', 'minecraft:egg']
    )
    event.shapeless('pamhc2foodcore:batteritem',
    ['pamhc2foodcore:freshmilkitem','pamhc2foodcore:flouritem', 'environmental:duck_egg']
    )
    event.shapeless('waystones:waystone',
    ['astralsorcery:celestial_gateway']
    )
    event.shapeless('thermal:redstone_servo',
    ['infused_crystals:redstonium_crystal','thermal:invar_plate']
    )
    event.shapeless('quark:white_crystal',
    ['minecraft:diamond', 'minecraft:white_dye']
    )
    event.shapeless('quark:red_crystal',
    ['minecraft:diamond', 'minecraft:red_dye']
    )
    event.shapeless('quark:orange_crystal',
    ['minecraft:diamond', 'minecraft:orange_dye']
    )
    event.shapeless('quark:yellow_crystal',
    ['minecraft:diamond', 'minecraft:yellow_dye']
    )
    event.shapeless('quark:green_crystal',
    ['minecraft:diamond', 'minecraft:green_dye']
    )
    event.shapeless('quark:blue_crystal',
    ['minecraft:diamond', 'minecraft:light_blue_dye']
    )
    event.shapeless('quark:indigo_crystal',
    ['minecraft:diamond', 'minecraft:blue_dye']
    )
    event.shapeless('quark:violet_crystal',
    ['minecraft:diamond', 'minecraft:purple_dye']
    )
    event.shapeless('quark:black_crystal',
    ['minecraft:diamond', 'minecraft:black_dye']
    )  
    event.shapeless('ibpdx:space_survival_kit',
    ['boss_tools:rocket_t1','ibpdx:coordinate_data_module','boss_tools:oxygen_tank','boss_tools:fuel_bucket','boss_tools:alien_spawn_egg']
    )
    event.shapeless('ibpdx:space_survival_kit',
    ['boss_tools:rocket_t1','ibpdx:coordinate_data_module','boss_tools:oxygen_tank','thermal:refined_fuel_bucket','boss_tools:alien_spawn_egg']
    )
    event.shapeless('ibpdx:spirit_charge',
    ['ibpdx:small_spirit_charge','ibpdx:small_spirit_charge','ibpdx:small_spirit_charge','ibpdx:small_spirit_charge']
    )
    event.shapeless('4x ibpdx:small_spirit_charge',
    ['ibpdx:spirit_charge']
    )
    event.shapeless('ibpdx:unknown_disc_2',
    ['ibpdx:unknown_disc','ibpdx:unknown_disc']
    )
    event.shapeless('ibpdx:unknown_disc_3',
    ['ibpdx:unknown_disc_2','ibpdx:unknown_disc_2']
    )
    event.shapeless('ibpdx:unknown_disc_4',
    ['ibpdx:unknown_disc_3','ibpdx:unknown_disc_3']
    )
    event.shapeless('miniutilities:unstable_ingot',
    ['ibpdx:empowered_lead_ingot','ftbic:antimatter']
    )
    event.shapeless('waystones:warp_dust',
    ['minecraft:ender_pearl','betterendforge:crystal_shards']
    )
    event.shapeless('ibpdx:industrial_sandwich',
    ['immersiveengineering:plate_steel','immersiveengineering:plate_aluminum','immersiveengineering:plate_steel']
    )
    event.shapeless('2x chisel:charcoal/raw',
    ['minecraft:charcoal','minecraft:charcoal']
    )
    event.shapeless('waystones:sharestone',
    ['waystones:waystone']
    )
    event.shapeless('waystones:waystone',
    ['waystones:sharestone']
    )
    event.shapeless('ibpdx:unknown_disc_2',
    ['#ibpdx:t1_disc','#ibpdx:t1_disc']
    )
    event.shapeless('ibpdx:unknown_disc_3',
    ['#ibpdx:t2_disc','#ibpdx:t2_disc']
    )
    event.shapeless('ibpdx:unknown_disc_4',
    ['#ibpdx:t3_disc','#ibpdx:t3_disc']
    )
    event.shapeless('9x draconicevolution:draconium_ingot',
    ['draconicevolution:draconium_block']
    )
    event.shapeless('9x chemlib:ingot_iridium',
    ['ibpdx:iridium_block']
    )
    event.shapeless('powah:dielectric_rod',
    ['powah:dielectric_rod_horizontal']
    )
    event.shapeless('powah:dielectric_rod_horizontal',
    ['powah:dielectric_rod']
    )
    event.shapeless('9x mekanism:fluorite_gem',
    ['mekanism:block_fluorite']
    )
    event.shapeless('boss_tools:oil_bucket',
    ['immersivepetroleum:oil_bucket']
    )
    event.shapeless('ibpdx:multivitamins',
    ['pamhc2foodcore:chickendinneritem', 'pamhc2foodcore:melonjellytoastitem']
    )
    event.shapeless('ibpdx:multivitamins',
    ['pamhc2foodcore:chickendinneritem', 'pamhc2foodcore:applejellytoastitem']
    )
    event.shapeless('ibpdx:multivitamins',
    ['pamhc2foodcore:chickendinneritem', 'pamhc2foodcore:sweetberryjellytoastitem']
    )




    event.shapeless('prettypipes:medium_extraction_module',
    ['prettypipes:low_extraction_module', 'infused_crystals:infused_lapisium_crystal', 'infused_crystals:infused_lapisium_crystal']
    )    
    event.shapeless('prettypipes:high_extraction_module',
    ['prettypipes:medium_extraction_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )
    event.shapeless('prettypipes:medium_filter_module',
    ['prettypipes:low_filter_module', 'infused_crystals:infused_lapisium_crystal', 'infused_crystals:infused_lapisium_crystal']
    )    
    event.shapeless('prettypipes:high_filter_module',
    ['prettypipes:medium_filter_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )        
    event.shapeless('prettypipes:medium_retrieval_module',
    ['prettypipes:low_retrieval_module', 'infused_crystals:infused_lapisium_crystal', 'infused_crystals:infused_lapisium_crystal']
    )    
    event.shapeless('prettypipes:high_retrieval_module',
    ['prettypipes:medium_retrieval_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )    
    event.shapeless('prettypipes:medium_crafting_module',
    ['prettypipes:low_crafting_module', 'infused_crystals:infused_lapisium_crystal', 'infused_crystals:infused_lapisium_crystal']
    )    
    event.shapeless('prettypipes:high_crafting_module',
    ['prettypipes:medium_crafting_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )    
    event.shapeless('prettypipes:medium_low_priority_module',
    ['prettypipes:low_low_priority_module', 'infused_crystals:infused_lapisium_crystal', 'infused_crystals:infused_lapisium_crystal']
    )    
    event.shapeless('prettypipes:high_low_priority_module',
    ['prettypipes:medium_low_priority_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )    
    event.shapeless('prettypipes:medium_high_priority_module',
    ['prettypipes:low_high_priority_module', 'infused_crystals:infused_lapisium_crystal', 'infused_crystals:infused_lapisium_crystal']
    )    
    event.shapeless('prettypipes:high_high_priority_module',
    ['prettypipes:medium_high_priority_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )
    event.shapeless('prettypipes:medium_speed_module',
    ['prettypipes:low_speed_module', 'infused_crystals:infused_lapisium_crystal', 'infused_crystals:infused_lapisium_crystal']
    )    
    event.shapeless('prettypipes:high_speed_module',
    ['prettypipes:medium_speed_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )        
    event.shapeless('2x immersiveindustry:rotary_kiln_cylinder',
    ['ftbic:reinforced_stone', 'ibpdx:mixed_brick_block']
    )     
    event.shapeless('9x immersiveengineering:ingot_uranium',
    ['immersiveengineering:storage_uranium']
    )  
    event.shapeless('9x thermal:niter',
    ['thermal:niter_block']
    )
    event.shapeless('prettypipes:high_speed_module',
    ['prettypipes:medium_speed_module', 'ibpdx:empowered_silver_ingot', 'ibpdx:empowered_silver_ingot']
    )        
    event.shapeless('minecraft:beetroot_soup',
    ['minecraft:bowl', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot']
    )        


})