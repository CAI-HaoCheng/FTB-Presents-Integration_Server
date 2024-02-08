onEvent('tags.fluids',(event) => {

    event.add('ibpdx:speed_potion', 'ibpdx:energized_speed_potion');

    event.add('ibpdx:strength_potion', 'ibpdx:energized_strength_potion');

    event.add('ibpdx:enderslime', 'tconstruct:ender_slime');

    event.add('ibpdx:magical_mixture', 'ibpdx:magical_mixture');
})

onEvent('tags.items', event =>{
    event.remove('forge:seeds', 'thermal:flax_seeds')
    event.add('ibpdx:controllers', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_controller)/)
    event.add('ibpdx:item_input', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_items_input)/)
    event.add('ibpdx:item_output', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_items_output)/)
    event.add('ibpdx:fluid_input', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_fluids_input)/)
    event.add('ibpdx:fluid_output', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_fluids_output)/)
    event.add('ibpdx:energy_input', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_energy_input)/)
    event.add('ibpdx:energy_output', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_energy_output)/)
    event.add('ibpdx:mana_input', /(masterfulmachinery:)(?!generic).*(_mana_input)/)
    event.add('ibpdx:mana_output', /(masterfulmachinery:)(?!generic).*(_mana_output)/)
    event.add('ftbultimine:included_tools', 'ibpdx:eartht2_pickaxe')
    event.add('ibpdx:t1_disc', 'ibpdx:uninstall_love')
    event.add('ibpdx:t1_disc', 'ibpdx:on_the_moon')
    event.add('ibpdx:t2_disc', 'ibpdx:china_gal')
    event.add('ibpdx:t2_disc', 'ibpdx:catch_us')
    event.add('ibpdx:t3_disc', 'ibpdx:phantom_fantasy')
    event.add('ibpdx:t4_disc', 'ibpdx:ufo_lover')
    event.add('minecraft:logs', 'myrtrees:rubberwood_log')
    event.add('minecraft:logs', 'myrtrees:stripped_rubberwood_log')
    event.add('forge:ingots/copper', 'immersiveengineering:ingot_copper')
})

onEvent('tags.blocks', event =>{
    event.add('ibpdx:controllers', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_controller)/)
    event.add('ibpdx:item_input', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_items_input)/)
    event.add('ibpdx:item_output', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_items_output)/)
    event.add('ibpdx:fluid_input', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_fluids_input)/)
    event.add('ibpdx:fluid_output', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_fluids_output)/)
    event.add('ibpdx:energy_input', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_energy_input)/)
    event.add('ibpdx:energy_output', /(masterfulmachinery:)(?!advanced_chemical_plant|generic).*(_energy_output)/)
})