onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:skeleton")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:bone", "xreliquary:rib_bone");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:skeleton")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:arrow", "xreliquary:rib_bone");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:zombie")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:rotten_flesh", "xreliquary:zombie_heart");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:creeper")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:gunpowder", "xreliquary:catalyzing_gland");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:slime")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:slime_ball", "xreliquary:slime_pearl");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:witch")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:redstone", "xreliquary:witch_hat");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:witch")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:glowstone_dust", "xreliquary:witch_hat");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:witch")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:glass_bottle", "xreliquary:witch_hat");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:blaze")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:blaze_rod", "xreliquary:molten_core");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:magma_cube")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:magma_cream", "xreliquary:molten_core");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:enderman")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenReplace("minecraft:ender_pearl", "xreliquary:nebulous_heart");

});

onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:wither_skeleton")
        .matchKiller(entity => entity.anyType('minecraft:husk'))
        .thenAdd('minecraft:wither_skeleton_skull')
        .thenAdd('minecraft:wither_skeleton_skull')
        .thenAdd('minecraft:wither_skeleton_skull')

});

onEvent('block.loot_tables', event => {
  // all dirt blocks have a 50% chance to drop an enchanted diamond sword named "test"
  event.addBlock(/^ibpdx:.*blockcasing_elementium/, table => {
    table.addPool(pool => {
      pool.addItem('quark:blue_blossom_sapling').randomChance(0.8)
      pool.addItem('quark:lavender_blossom_sapling').randomChance(0.8)
      pool.addItem('quark:orange_blossom_sapling').randomChance(0.8)
      pool.addItem('quark:pink_blossom_sapling').randomChance(0.8)
      pool.addItem('quark:yellow_blossom_sapling').randomChance(0.8)
      pool.addItem('quark:red_blossom_sapling').randomChance(0.8)
      pool.addItem('tconstruct:ender_slime_sapling').randomChance(1.0)
      pool.addItem('astralsorcery:illumination_powder').randomChance(1.0)
      pool.addItem('astralsorcery:lens').randomChance(1.0)
      pool.addItem('astralsorcery:chalice').randomChance(1.0)
      pool.addItem('astralsorcery:resonating_gem').randomChance(1.0)
      pool.addItem('botania:manasteel_ingot').randomChance(1.0)
      pool.addItem('botania:mana_pearl').randomChance(1.0)
      pool.addItem('botania:mana_diamond').randomChance(1.0)
      pool.addItem('botania:spark').randomChance(1.0)
      pool.addItem('bloodmagic:weak_tau').randomChance(1.0)
      pool.addItem('dimdungeons:block_portal_crown').randomChance(1.0)
      pool.addItem('minecraft:enchanting_table').randomChance(1.0)
    })
  })
})

onEvent('item.right_click', e => {
    if(e.item == 'ibpdx:iron_loot_bag') {
        e.server.runCommand(`loot give ${e.player} loot ibpdx:blocks/blockcasing_elementium`)
        e.item.setCount(e.item.getCount() - 1);
    }
})

onEvent('block.loot_tables', event => {
  // all dirt blocks have a 50% chance to drop an enchanted diamond sword named "test"
  event.addBlock(/^ibpdx:.*neptune_dungeon_floor/, table => {
    table.addPool(pool => {
      pool.addItem('ibpdx:cryotheum_dust').randomChance(1.0)
      pool.addItem('ibpdx:pyrotheum_dust').randomChance(1.0)
      pool.addItem('ibpdx:petrotheum_dust').randomChance(1.0)
      pool.addItem('ibpdx:aerotheum_dust').randomChance(1.0)
      pool.addItem('ftbic:advanced_circuit').randomChance(1.0)
      pool.addItem('chemlib:ingot_iridium').randomChance(1.0)
      pool.addItem('botania:elementium_ingot').randomChance(1.0)
      pool.addItem('powah:crystal_blazing').randomChance(1.0)
      pool.addItem('botania:corporea_spark').randomChance(1.0)
      pool.addItem('bloodmagic:strong_tau').randomChance(1.0)
      pool.addItem('ibpdx:unknown_disc').randomChance(1.0)
      pool.addItem('mekanism:upgrade_speed').randomChance(1.0)
      pool.addItem('mekanism:upgrade_energy').randomChance(1.0)
    })
  })
})

onEvent('item.right_click', e => {
    if(e.item == 'ibpdx:gold_loot_bag') {
        e.server.runCommand(`loot give ${e.player} loot ibpdx:blocks/neptune_dungeon_floor`)
        e.item.setCount(e.item.getCount() - 1);
    }
})

onEvent("lootjs", (event) => {
    // by id
    event
        .addLootTableModifier("dimdungeons:chests/chestloot_basic_easy")
        .randomChance(0.50)
        .thenAdd("ibpdx:iron_loot_bag");
});

onEvent("lootjs", (event) => {
    // by id
    event
        .addLootTableModifier("dimdungeons:chests/chestloot_basic_hard")
        .randomChance(0.75)
        .thenAdd("ibpdx:iron_loot_bag");
});

onEvent("lootjs", (event) => {
    // by id
    event
        .addLootTableModifier("dimdungeons:chests/chestloot_advanced_easy")
        .randomChance(0.50)
        .thenAdd("ibpdx:gold_loot_bag");
});

onEvent("lootjs", (event) => {
    // by id
    event
        .addLootTableModifier("dimdungeons:chests/chestloot_advanced_hard")
        .randomChance(0.75)
        .thenAdd("ibpdx:gold_loot_bag");
});

onEvent("lootjs", (event) => {
    // by id
    event
        .addLootTableModifier("dimdungeons:chests/chestloot_lucky")
        .randomChance(0.90)
        .thenAdd("ibpdx:gold_loot_bag");
});

onEvent("lootjs", (event) => {
    event
        .addBlockLootModifier("ibpdx:ashen_charcoal")
        .thenReplace("ibpdx:ashen_charcoal", "minecraft:charcoal")
        .thenAdd("minecraft:charcoal")
        .thenAdd("minecraft:charcoal")
        .thenAdd("minecraft:charcoal")
        .thenAdd("ibpdx:ash")
        .thenAdd("ibpdx:ash")
});

onEvent("lootjs", (event) => {
    event
        .addBlockLootModifier("ibpdx:peat_bog")
        .thenReplace("ibpdx:peat_bog", "minecraft:dirt")
        .thenAdd("ibpdx:peat")
        .thenAdd("ibpdx:peat")
        .thenAdd("ibpdx:peat")
        .thenAdd("ibpdx:peat")
});


onEvent("lootjs", (event) => {
    event
        .addLootTableModifier('minecraft:gameplay/fishing')
        .randomChance(0.02)
        .thenAdd('minecraft:gold_nugget')
});

onEvent("lootjs", (event) => {
    event
        .addLootTableModifier('minecraft:gameplay/fishing')
        .randomChance(0.07)
        .thenAdd('minecraft:iron_nugget')
});

onEvent("lootjs", (event) => {
    event
        .addLootTableModifier('minecraft:gameplay/fishing')
        .randomChance(0.06)
        .thenAdd('thermal:copper_nugget')
});

onEvent("lootjs", (event) => {
    event
        .addLootTableModifier('minecraft:gameplay/fishing')
        .randomChance(0.04)
        .thenAdd('thermal:tin_nugget')
});

onEvent("lootjs", (event) => {
    event
        .addLootTableModifier('minecraft:gameplay/fishing')
        .randomChance(0.03)
        .thenAdd('thermal:lead_nugget')
});

onEvent("lootjs", (event) => {
    event
        .addLootTableModifier('minecraft:gameplay/fishing')
        .randomChance(0.03)
        .thenAdd('thermal:silver_nugget')
});


onEvent('entity.death', event =>{
    const {entity, level, source} = event
    if (level.dimension != "dimdungeons:dungeon_dimension") return

    // get Player, return if not killed by player
    let player = source.getActual()
    if(!player.isPlayer()) return
    let item = player.getMainHandItem()

    let multiplier = 0
    if (item.enchantments["minecraft:looting"]) multiplier = item.enchantments["minecraft:looting"]

    // Get Entity Potion Effects
    const potionEffects = entity.potionEffects

    let dropChance
    let dropItem

    if (potionEffects.active.toString().contains('Duration')) {
        dropChance = 20 + (multiplier * 10)
        dropItem = 'ibpdx:gold_loot_bag'
    } else {
        dropChance = 20 + (multiplier * 10)
        dropItem = 'ibpdx:iron_loot_bag'
    }
    // Roll Dice
    let dice = getRandomInt(0, 100)
    if (dice > dropChance) return

    // Spawn Item
    let itemEntity = entity.block.createEntity("item")
    itemEntity.item = dropItem
    itemEntity.item.count = 1
    itemEntity.y+=0.8
    itemEntity.x+=0.5
    itemEntity.z+=0.5
    itemEntity.spawn()
})