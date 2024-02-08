const jeimachines = [
    ['duskstone_mixer_controller', ['1 masterfulmachinery:duskstone_mixer_item_port_items_output', '1 tconstruct:seared_table', '3 ibpdx:molten_gold_casing', '32 ibpdx:blockcasing_livingrock', '1 minecraft:packed_ice', '1 masterfulmachinery:duskstone_mixer_mana_port_botania_mana_input', '2 masterfulmachinery:duskstone_mixer_fluid_port_fluids_input', '28 botania:mana_glass', '3 minecraft:obsidian', '4 ibpdx:blockcasing_bedrock']],
    ['bedrock_miner_controller', ['15 minecraft:bedrock', '30 ibpdx:blockcasing_livingrock', '4 minecraft:cobblestone_stairs', '5 minecraft:iron_block', '1 masterfulmachinery:bedrock_miner_mana_port_botania_mana_input', '1 masterfulmachinery:bedrock_miner_item_port_items_output']],
    ['plate_presser_controller', ['9 ibpdx:blockcasing_bedrock', '1 masterfulmachinery:plate_presser_mana_port_botania_mana_input', '1 masterfulmachinery:plate_presser_item_port_items_input', '1 masterfulmachinery:plate_presser_item_port_items_output', '5 minecraft:nether_brick_fence', '1 minecraft:piston']],
    ['alchemy_reactor_red_controller', ['3 ibpdx:blockcasing_empowered_steel', '14 mekanism:sps_casing', '1 masterfulmachinery:alchemy_reactor_red_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_red_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_red_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_red_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_red_energy_port_energy_input']],
    ['alchemy_reactor_orange_controller', ['3 ibpdx:blockcasing_awakened', '14 mekanism:sps_casing', '1 masterfulmachinery:alchemy_reactor_orange_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_orange_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_orange_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_orange_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_orange_energy_port_energy_input']],
    ['alchemy_reactor_yellow_controller', ['3 ibpdx:blockcasing_refined_glowstone', '14 mekanism:sps_casing', '1 masterfulmachinery:alchemy_reactor_yellow_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_yellow_fluid_port_fluids_output', '2 masterfulmachinery:alchemy_reactor_yellow_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_yellow_energy_port_energy_input']],
    ['alchemy_reactor_green_controller', ['3 ibpdx:blockcasing_terrasteel', '14 mekanism:sps_casing', '1 masterfulmachinery:alchemy_reactor_green_mana_port_botania_mana_input', '1 masterfulmachinery:alchemy_reactor_green_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_green_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_green_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_green_energy_port_energy_input']],
    ['alchemy_reactor_cyan_controller', ['3 ibpdx:blockcasing_manasteel', '14 mekanism:sps_casing', '1 masterfulmachinery:alchemy_reactor_cyan_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_cyan_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_cyan_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_cyan_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_cyan_energy_port_energy_input']],
    ['alchemy_reactor_blue_controller', ['3 ibpdx:blockcasing_starmetal', '14 mekanism:sps_casing', '1 masterfulmachinery:alchemy_reactor_blue_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_blue_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_blue_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_blue_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_blue_energy_port_energy_input']],
    ['alchemy_reactor_violet_controller', ['3 ibpdx:blockcasing_duskstone', '14 mekanism:sps_casing', '1 masterfulmachinery:alchemy_reactor_violet_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_violet_gassy_port_mekanism_gas_input', '1 masterfulmachinery:alchemy_reactor_violet_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_violet_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_violet_energy_port_energy_input']],
    ['lunar_satellite_dish_controller', ['1 minecraft:redstone_torch', '36 boss_tools:iron_plating_block', '8 boss_tools:blue_iron_plating_block', '1 masterfulmachinery:lunar_satellite_dish_energy_port_energy_input', '1 masterfulmachinery:lunar_satellite_dish_item_port_items_output', '29 immersiveengineering:slab_sheetmetal_aluminum', '33 immersiveengineering:sheetmetal_aluminum', '5 immersiveengineering:steel_fence', '1 masterfulmachinery:lunar_satellite_dish_item_port_items_input']],
    ['starlight_enchanter_controller', ['8 minecraft:blue_stained_glass', '6 minecraft:obsidian', '16 ibpdx:blockcasing_starmetal', '1 masterfulmachinery:starlight_enchanter_item_port_items_output', '2 astralsorcery:marble_arch', '1 masterfulmachinery:starlight_enchanter_item_port_items_input', '2 masterfulmachinery:starlight_enchanter_fluid_port_fluids_input', '1 masterfulmachinery:starlight_enchanter_energy_port_energy_input', '14 astralsorcery:marble_pillar']],
    ['starlight_factory_controller', ['16 ibpdx:blockcasing_starmetal', '26 astralsorcery:marble_raw', '8 astralsorcery:black_marble_raw', '8 minecraft:glowstone', '1 masterfulmachinery:starlight_factory_item_port_items_output', '1 masterfulmachinery:starlight_factory_item_port_items_input', '1 masterfulmachinery:starlight_factory_fluid_port_fluids_input']],
    ['fluxial_converter_controller', ['1 masterfulmachinery:fluxial_converter_mana_port_botania_mana_output', '1 botania:mana_fluxfield', '1 masterfulmachinery:fluxial_converter_energy_port_energy_input', '6 botania:shimmerrock', '12 botania:livingrock_bricks_wall', '4 botania:mana_spreader', '1 botania:diluted_pool']],
    ['alchemy_reactor_core_controller', ['1 masterfulmachinery:alchemy_reactor_yellow_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_blue_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_blue_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_yellow_fluid_port_fluids_output', '2 masterfulmachinery:alchemy_reactor_yellow_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_blue_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_violet_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_orange_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_violet_gassy_port_mekanism_gas_input', '1 masterfulmachinery:alchemy_reactor_violet_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_orange_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_orange_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_violet_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_orange_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_red_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_red_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_red_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_red_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_cyan_energy_port_energy_input', '1 masterfulmachinery:alchemy_reactor_green_energy_port_energy_input', '1 masterfulmachinery:alchemy_reactor_blue_energy_port_energy_input', '1 masterfulmachinery:alchemy_reactor_yellow_energy_port_energy_input', '1 masterfulmachinery:alchemy_reactor_violet_energy_port_energy_input', '1 masterfulmachinery:alchemy_reactor_orange_energy_port_energy_input', '1 masterfulmachinery:alchemy_reactor_red_energy_port_energy_input', '224 mekanism:sps_casing', '204 ibpdx:blockcasing_bedrock', '19 avaritia:infinity_block', '16 chisel:futura/screen_metallic', '3 ibpdx:blockcasing_manasteel', '3 ibpdx:blockcasing_terrasteel', '3 ibpdx:blockcasing_starmetal', '3 ibpdx:blockcasing_refined_glowstone', '3 ibpdx:blockcasing_duskstone', '3 ibpdx:blockcasing_awakened', '3 ibpdx:blockcasing_empowered_steel', '1 masterfulmachinery:alchemy_reactor_core_item_port_items_output', '2 chisel:futura/wavy', '1 masterfulmachinery:alchemy_reactor_core_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_cyan_fluid_port_fluids_input', '1 masterfulmachinery:alchemy_reactor_green_mana_port_botania_mana_input', '1 masterfulmachinery:alchemy_reactor_cyan_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_cyan_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_green_item_port_items_output', '1 masterfulmachinery:alchemy_reactor_green_item_port_items_input', '1 masterfulmachinery:alchemy_reactor_cyan_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_green_fluid_port_fluids_output', '1 masterfulmachinery:alchemy_reactor_blue_item_port_items_input']],
    ['peat_engine_controller', ['4 immersiveengineering:light_engineering', '1 masterfulmachinery:peat_engine_item_port_items_output', '1 minecraft:campfire', '1 masterfulmachinery:peat_engine_item_port_items_input', '1 masterfulmachinery:peat_engine_energy_port_energy_output', '4 minecraft:glass', '9 immersiveengineering:sheetmetal_copper']],
    ['carpenter_controller', ['1 masterfulmachinery:carpenter_energy_port_energy_input', '8 immersiveengineering:sheetmetal_copper', '8 minecraft:red_sandstone_stairs', '1 minecraft:glass', '4 immersiveengineering:light_engineering', '1 masterfulmachinery:carpenter_item_port_items_output', '1 masterfulmachinery:carpenter_item_port_items_input', '1 masterfulmachinery:carpenter_fluid_port_fluids_input']],
    ['mana_death_reactor_controller', ['4 botania:pattern_framed_livingwood', '3 botania:framed_livingwood', '3 masterfulmachinery:mana_death_reactor_fluid_port_fluids_input', '1 masterfulmachinery:mana_death_reactor_mana_port_botania_mana_output', '3 ibpdx:blockcasing_terrasteel', '1 botania:mana_pylon']],
    ['ore_washer_controller', ['1 masterfulmachinery:ore_washer_item_port_items_output', '5 immersiveengineering:slab_sheetmetal_aluminum', '1 cyclic:fan', '12 immersiveengineering:steel_fence', '10 immersiveengineering:sheetmetal_aluminum', '1 masterfulmachinery:ore_washer_fluid_port_fluids_input', '1 quark:grate', '1 masterfulmachinery:ore_washer_fluid_port_fluids_output', '1 masterfulmachinery:ore_washer_energy_port_energy_input', '1 IBPDXGearbox', '1 masterfulmachinery:ore_washer_item_port_items_input']],
    ['precipitator_controller', ['1 chisel:laboratory/wallvents', '4 immersiveengineering:slab_sheetmetal_aluminum', '16 immersiveengineering:steel_fence', '11 immersiveengineering:sheetmetal_aluminum', '1 masterfulmachinery:precipitator_energy_port_energy_input', '5 mekanism:basic_mechanical_pipe', '1 masterfulmachinery:precipitator_item_port_items_output', '16 immersiveengineering:fluid_pipe', '1 IBPDXGearbox', '2 masterfulmachinery:precipitator_fluid_port_fluids_input']],
    ['super_alloyer_controller', ['1 masterfulmachinery:super_alloyer_item_port_items_output', '4 immersiveposts:fence_iron', '2 infused_crystals:block_of_redstonium', '7 ibpdx:blockcasing_duskstone', '2 mekanism:superheating_element', '1 masterfulmachinery:super_alloyer_item_port_items_input', '4 ibpdx:iron_casing', '2 cyclic:mason_iron', '2 minecraft:glass', '1 IBPDXGearbox', '1 masterfulmachinery:super_alloyer_energy_port_energy_input']],
    ['processor_cutter_controller', ['14 ibpdx:blockcasing_steel', '1 masterfulmachinery:processor_cutter_energy_port_energy_input', '4 ibpdx:blockcasing_empowered_diamond', '1 minecraft:stonecutter', '1 masterfulmachinery:processor_cutter_item_port_items_input', '1 masterfulmachinery:processor_cutter_item_port_items_output', '1 IBPDXGearbox', '1 minecraft:end_rod']],
    ['liquid_fuel_generator_controller', ['12 ibpdx:blockcasing_steel', '27 ibpdx:blockcasing_empowered_steel', '40 minecraft:glass', '2 masterfulmachinery:liquid_fuel_generator_fluid_port_fluids_input', '1 IBPDXGearbox', '1 masterfulmachinery:liquid_fuel_generator_energy_port_energy_output']],
    ['metal_empowerer_controller', ['1 masterfulmachinery:metal_empowerer_fluid_port_fluids_input', '58 ibpdx:blockcasing_steel', '8 infused_crystals:block_of_redstonium', '1 infused_crystals:block_of_infused_redstonium', '28 ibpdx:blockcasing_black_quartz', '1 masterfulmachinery:metal_empowerer_item_port_items_output', '1 powah:energizing_orb', '1 masterfulmachinery:metal_empowerer_energy_port_energy_input', '1 IBPDXGearbox', '1 masterfulmachinery:metal_empowerer_item_port_items_input']],
    ['advanced_chemical_plant_controller', ['8 ibpdx:blockcasing_steel', '7 ibpdx:stainless_steel_casing', '12 immersiveengineering:steel_fence', '2 masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_output', '2 masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_input', '1 IBPDXGearbox', '1 masterfulmachinery:advanced_chemical_plant_energy_port_energy_input', '8 immersiveengineering:slab_sheetmetal_steel']],
    ['boss_fight_simulator_controller', ['56 bloodmagic:bloodstonebrick', '32 immersiveengineering:sheetmetal_copper', '50 ibpdx:blockcasing_black_quartz', '16 immersiveposts:fence_constantan', '34 thermal:signalum_glass', '12 ibpdx:simulation_core', '2 refinedstorage:red_controller', '1 masterfulmachinery:boss_fight_simulator_item_port_items_output', '1 thermal:energy_cell', '1 masterfulmachinery:boss_fight_simulator_item_port_items_input', '1 masterfulmachinery:boss_fight_simulator_mana_port_botania_mana_input', '1 masterfulmachinery:boss_fight_simulator_fluid_port_fluids_input', '1 masterfulmachinery:boss_fight_simulator_energy_port_energy_input', '2 IBPDXGearbox']]
    
]


onEvent('jei.information', event => {
      
      jeimachines.forEach(machineArr =>{
        let displayNames = []
        displayNames.push('Blocks needed:')
        const machine = `masterfulmachinery:${machineArr[0]}`
        const blockArray = machineArr[1]
        blockArray.forEach(block => {
            const amount = block.split(' ')[0]
            const actualBlock = block.split(' ')[1]
            if(actualBlock == 'IBPDXGearbox') {
                displayNames.push(`${amount}x Gearbox / Base Element`)
            } else {displayNames.push(`${amount}x ${Item.of(actualBlock).getName()}`)
        }
        })
        event.add(machine, displayNames)
      })
})