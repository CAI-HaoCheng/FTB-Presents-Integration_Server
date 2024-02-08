onEvent('block.right_click', event => {
  if(event.item.id == "botania:manasteel_sword" && event.block.id == "botania:livingrock") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:lightning_bolt`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.level.dimension == "boss_tools:mars" && event.block.id == "boss_tools:mars_sand" && event.item.id == "minecraft:glass_bottle") {
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"ibpdx:mars_air_bottle",Count:1}}`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('entity.spawned', event => {
  if(event.entity.block.down.id == "minecraft:iron_block") {
    if(event.entity.isMonster()){
    event.entity.block.down.set('extendedcrafting:black_iron_block')
  }
}
})

onEvent('block.place', event => {
          if (event.hand == "OFF_HAND") return
          if (!event.entity.isPlayer()) return;  
  if(event.level.dimension != "boss_tools:moon" && event.block.id == "ftbic:lv_solar_panel") {
    event.cancel()
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell @p Solar panels have too much atmospheric interference here. Perhaps a location with no atmosphere would be better?`)
  }
})

onEvent('block.place', event => {
  if (!event.entity.isPlayer()){
        event.cancel()
  }
  if(event.level.dimension != "boss_tools:moon" && event.block.id == "ftbic:mv_solar_panel") {
    event.cancel()
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell @p Solar panels have too much atmospheric interference here. Perhaps a location with no atmosphere would be better?`)
  }
})

onEvent('block.place', event => {
  if (!event.entity.isPlayer()) return;
  if(event.level.dimension != "boss_tools:moon" && event.block.id == "ftbic:hv_solar_panel") {
    event.cancel()
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell @p Solar panels have too much atmospheric interference here. Perhaps a location with no atmosphere would be better?`)
  }
})

onEvent('block.place', event => {
  if (!event.entity.isPlayer()) return;
  if(event.level.dimension != "boss_tools:moon" && event.block.id == "ftbic:ev_solar_panel") {
    event.cancel()
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell @p Solar panels have too much atmospheric interference here. Perhaps a location with no atmosphere would be better?`)
  }
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:firet2_pickaxe") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p minecraft:fire_resistance 5`)
  }
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:firet2_axe") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p minecraft:fire_resistance 5`)
  }
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:firet2_shovel") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p minecraft:fire_resistance 5`)
  }
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:firet2_sword" && !potion.isActive('minecraft:fire_resistance')){
                event.server.runCommandSilent(`effect give @p minecraft:fire_resistance 10`)
            }

        }
}
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:watert2_sword" && !potion.isActive('minecraft:regeneration')){
                event.server.runCommandSilent(`effect give @p minecraft:regeneration 5`)
            }

        }
}
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:watert2_axe" && !potion.isActive('minecraft:regeneration')){
                event.server.runCommandSilent(`effect give @p minecraft:regeneration 5`)
            }

        }
}
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:watert2_shovel") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p regeneration 5`)
  }
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:watert2_pickaxe") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p regeneration 5`)
  }
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:watert2_axe") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p regeneration 5`)
  }
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:airt2_axe"){
                event.server.runCommandSilent(`execute positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run summon thermal:lightning_grenade_grenade`)
            }

        }
}
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:airt2_sword"){
                event.server.runCommandSilent(`execute positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run summon thermal:lightning_grenade_grenade`)
            }

        }
}
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:eartht2_sword"){
                    if(event.entity.isMonster()){
      if(event.entity.block.id == 'minecraft:air') event.entity.block.set('minecraft:cobblestone');
      if(event.entity.block.up.id == 'minecraft:air') event.entity.block.up.set('minecraft:cobblestone');
    event.server.scheduleInTicks(300, event.entity.block, (cb) => {
    let target = cb.getData();
    if(target.id == 'minecraft:cobblestone') target.set('minecraft:air');
    if(target.up.id == 'minecraft:cobblestone') target.up.set('minecraft:air');
});
  }
            }

        }
}
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:eartht2_axe"){
                    if(event.entity.isMonster()){
      if(event.entity.block.id == 'minecraft:air') event.entity.block.set('minecraft:cobblestone');
      if(event.entity.block.up.id == 'minecraft:air') event.entity.block.up.set('minecraft:cobblestone');
    event.server.scheduleInTicks(300, event.entity.block, (cb) => {
    let target = cb.getData();
    if(target.id == 'minecraft:cobblestone') target.set('minecraft:air');
    if(target.up.id == 'minecraft:cobblestone') target.up.set('minecraft:air');
});
  }
            }

        }
}
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:airt2_sword"){
                    event.server.runCommandSilent(`effect give @p minecraft:haste 5 2`)
            }

        }
}
})

onEvent('entity.attack',(event) => {

    // hurtEntity incase you want to filter per entity    
    let hurtEntity = event.entity
    // player = the actual attacker
    let player = event.source.getActual()

    // check if player (attacker) exists
    if (player){

        //check if player is a player
        if (player.isPlayer()) {
            let potion = player.potionEffects

            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:airt2_axe"){
                    event.server.runCommandSilent(`effect give @p minecraft:haste 5 2`)
            }

        }
}
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:airt2_shovel") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p haste 5 2`)
  }
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:airt2_pickaxe") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p haste 5 2`)
  }
})

onEvent('block.left_click', event => {
  if(event.item.id == "ibpdx:airt2_axe") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run effect give @p haste 5 2`)
  }
})

onEvent('item.right_click', event => {
  if(event.player.mainHandItem.id == "ibpdx:firet2_sword") {
    if (event.player.inventory.find('ibpdx:pyrotheum_blend') >= 2) 
        {
    let player = event.player;
    let yaw = event.player.yaw
    let pitch = event.player.pitch 
    let x = JavaMath.sin(yaw/180*3.141592) * -1
    let z = JavaMath.cos(yaw/180*3.141592) 
    let y = pitch/90 * -1
    let px = event.player.x
    let py = event.player.y + 1.5
    let pz = event.player.z
    event.server.runCommandSilent(`summon minecraft:small_fireball ${px} ${py} ${pz} {power:[${x},${y},${z}]}`)  
    event.player.inventory.get(event.player.inventory.find('ibpdx:pyrotheum_blend')).count-=2
  }
}
});


onEvent("item.right_click", event => {
    if(event.item.id == "ibpdx:airt2_sword") {
if (event.player.inventory.find('ibpdx:aerotheum_blend') >= 4)  {
          event.player.inventory.get(event.player.inventory.find('ibpdx:aerotheum_blend')).count-=4
    event.server.runCommandSilent(`effect give @p minecraft:levitation 5 255`)
    event.server.runCommandSilent(`effect give @p minecraft:resistance 7 4`)
  }
  }
})

onEvent('block.right_click', event => {
  if (event.item.id == 'ibpdx:eartht2_pickaxe'){
            if(event.facing == Direction.NORTH){
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:cobblestone replace minecraft:air`)
            }
            if(event.facing == Direction.EAST){
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:cobblestone replace minecraft:air`)
            }
            if(event.facing == Direction.SOUTH){
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:cobblestone replace minecraft:air`)
            }
            if(event.facing == Direction.WEST){
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:cobblestone replace minecraft:air`)
            }
            if(event.facing == Direction.UP){
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ minecraft:cobblestone replace minecraft:air`)
            }
            if(event.facing == Direction.DOWN){
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~-1 ~ ~ ~-1 ~ minecraft:cobblestone replace minecraft:air`)
            }

  }
})

onEvent('entity.attack',(event) => {

if(event.entity.type == "minecraft:player"){
    let player = event.entity
    let potion = player.potionEffects

if (potion.isActive('minecraft:resistance') && potion.isActive('minecraft:levitation')){
                event.cancel()
            }
  }
})


onEvent('block.right_click', event => {
  if(event.block.id == "ibpdx:hot_cooking_plate" && event.item.id == "pamhc2foodcore:cookingoilitem") {
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ ibpdx:cooking_oil`)
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ ibpdx:cool_cooking_plate`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "ibpdx:hot_cooking_plate" && event.item.id == "minecraft:glass_bottle") {
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ ibpdx:fake_air`)
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ ibpdx:cool_cooking_plate`)
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "ibpdx:hot_cooking_plate" && event.item.id == "pamhc2foodcore:freshwateritem") {
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ ibpdx:hot_water`)
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ ibpdx:cool_cooking_plate`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "ibpdx:hot_cooking_plate" && event.item.id == "pamhc2foodcore:freshmilkitem") {
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ ibpdx:milk`)
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ ibpdx:cool_cooking_plate`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:ice" && event.item.id == "pamhc2foodcore:melonjuiceitem") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p pamhc2foodcore:melonsmoothieitem`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:packed_ice" && event.item.id == "pamhc2foodcore:melonjuiceitem") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p pamhc2foodcore:melonsmoothieitem`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:ice" && event.item.id == "pamhc2foodcore:sweetberryjuiceitem") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p pamhc2foodcore:sweetberrysmoothieitem`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:packed_ice" && event.item.id == "pamhc2foodcore:sweetberryjuiceitem") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p pamhc2foodcore:sweetberrysmoothieitem`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:ice" && event.item.id == "pamhc2foodcore:applejuiceitem") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p pamhc2foodcore:applesmoothieitem`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:packed_ice" && event.item.id == "pamhc2foodcore:applejuiceitem") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p pamhc2foodcore:applesmoothieitem`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.place', event => {
  if(event.level.dimension != "mythicbotany:alfheim" && event.block.id == "botania:mana_fluxfield") {
    event.cancel()
  }
})

onEvent('block.place', event => {
  if(event.level.dimension != "mythicbotany:alfheim" && event.block.id == "botania:orechid") {
    event.cancel()
  }
})

onEvent('block.place', event => {
  if(event.level.dimension != "mythicbotany:alfheim" && event.block.id == "botania:floating_orechid") {
    event.cancel()
  }
})

onEvent('entity.attack', event => {
  event
  if(event.source.type == "drown"){
    if(event.entity.type == "minecraft:blaze"){
    event.server.runCommandSilent(`execute positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run fill ~ ~3 ~ ~ ~3 ~ mekanism:steam replace minecraft:air`)
  }
}
})

onEvent('entity.attack', event => {
  event
  if(event.source.type == "fall"){
    if(event.entity.isMonster() && event.entity.block.down == 'redstone_arsenal:flux_gem_block'){
    event.server.runCommandSilent(`execute positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run fill ~ ~-1 ~ ~ ~-1 ~ minecraft:diamond_block replace redstone_arsenal:flux_gem_block`)
    event.server.runCommandSilent(`execute positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run summon item ~ ~1 ~ {Item:{id:"ibpdx:energy_shard",Count:9b}}`)
  }
}
})

onEvent('block.place', event => {
  if (!event.player)
    return;
    
  if(event.level.dimension != "minecraft:end" && event.block.id == "enderstorage:ender_chest" && event.player.inventory.find('minecraft:diamond') < 1) {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p enderstorage:ender_chest`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell @p ender`)
  }
})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "architects_palette:rotten_flesh_block"){
        if(event.block.east == "architects_palette:rotten_flesh_block"){
        if(event.block.south == "architects_palette:rotten_flesh_block"){
        if(event.block.west == "architects_palette:rotten_flesh_block"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:zombie ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "minecraft:bone_block"){
        if(event.block.east == "minecraft:bone_block"){
        if(event.block.south == "minecraft:bone_block"){
        if(event.block.west == "minecraft:bone_block"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:skeleton ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "thermal:gunpowder_block"){
        if(event.block.east == "thermal:gunpowder_block"){
        if(event.block.south == "thermal:gunpowder_block"){
        if(event.block.west == "thermal:gunpowder_block"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:creeper ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "minecraft:white_wool"){
        if(event.block.east == "minecraft:white_wool"){
        if(event.block.south == "minecraft:white_wool"){
        if(event.block.west == "minecraft:white_wool"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:spider ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "quark:blaze_lantern"){
        if(event.block.east == "quark:blaze_lantern"){
        if(event.block.south == "quark:blaze_lantern"){
        if(event.block.west == "quark:blaze_lantern"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:blaze ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "minecraft:redstone_block"){
        if(event.block.east == "minecraft:glowstone"){
        if(event.block.south == "minecraft:redstone_block"){
        if(event.block.west == "minecraft:glowstone"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:witch ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "minecraft:glowstone"){
        if(event.block.east == "minecraft:redstone_block"){
        if(event.block.south == "minecraft:glowstone"){
        if(event.block.west == "minecraft:redstone_block"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon minecraft:witch ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "minecraft:coal_block"){
        if(event.block.east == "quark:blaze_lantern"){
        if(event.block.south == "minecraft:coal_block"){
        if(event.block.west == "quark:blaze_lantern"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon thermal:basalz ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "quark:blaze_lantern"){
        if(event.block.east == "minecraft:coal_block"){
        if(event.block.south == "quark:blaze_lantern"){
        if(event.block.west == "minecraft:coal_block"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon thermal:basalz ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "minecraft:packed_ice"){
        if(event.block.east == "quark:blaze_lantern"){
        if(event.block.south == "minecraft:packed_ice"){
        if(event.block.west == "quark:blaze_lantern"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon thermal:blizz ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "quark:blaze_lantern"){
        if(event.block.east == "minecraft:packed_ice"){
        if(event.block.south == "quark:blaze_lantern"){
        if(event.block.west == "minecraft:packed_ice"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon thermal:blizz ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "minecraft:glowstone"){
        if(event.block.east == "quark:blaze_lantern"){
        if(event.block.south == "minecraft:glowstone"){
        if(event.block.west == "quark:blaze_lantern"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon thermal:blitz ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('block.right_click', event => {
    if(event.block.id == "botania:dark_quartz"){
        if(event.block.north == "quark:blaze_lantern"){
        if(event.block.east == "minecraft:glowstone"){
        if(event.block.south == "quark:blaze_lantern"){
        if(event.block.west == "minecraft:glowstone"){
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~1 ~ ~ ~1 ~ ~ minecraft:air`)         
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~1 ~ ~ ~1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~-1 ~ ~ ~-1 ~ ~ minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air`)
                event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon thermal:blitz ~ ~1 ~`)      
        }   
        } 
        }
        }

    }



})

onEvent('tags.items', event => {
event.get('forge:seeds').remove('thermal:flax_seeds')
})

onEvent('block.right_click', event => {
    if(event.block.id == "thermal:flax" && event.block.up == "thermal:flax" && event.item.id == "minecraft:bone_meal"){
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ minecraft:air`)        
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:flax",Count:1}}`)
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:flax_seeds",Count:1}}`)                   
    }
})

onEvent('block.right_click', event => {
    if(event.block.id == "thermal:amaranth" && event.block.up == "thermal:amaranth" && event.item.id == "minecraft:bone_meal"){
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ minecraft:air`)        
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:amaranth",Count:1}}`)               
    }
})

onEvent('block.right_click', event => {
    if(event.block.id == "thermal:corn" && event.block.up == "thermal:corn" && event.item.id == "minecraft:bone_meal"){
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~1 ~ ~ ~1 ~ minecraft:air`)        
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:corn",Count:1}}`)               
    }
})


onEvent('block.right_click', event => {
          if (event.hand == "OFF_HAND") return
          if (event.player.mainHandItem.id == "boss_tools:iron_plate"){
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell pikminman13 ${event.block.id}`) 
        }   
})

onEvent('block.left_click', event => {
          if (event.player.mainHandItem.id == "minecraft:shears") return
          if (event.player.mainHandItem.id == "aiotbotania:livingwood_shears") return
          if (event.player.mainHandItem.id == "aiotbotania:livingrock_shears") return
          if (event.player.mainHandItem.id == "botania:manasteel_shears") return
          if (event.player.mainHandItem.id == "botania:elementium_shears") return
          if (event.player.mainHandItem.id == "miniutilities:precision_shears") return
          if (event.player.mainHandItem.id == "xreliquary:shears_of_winter") return
          if (event.player.mainHandItem.id == "cyclic:shears_obsidian") return
          if (event.player.mainHandItem.id == "cyclic:shears_flint") return
    if(event.block.id == "botania:white_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:white_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:orange_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:orange_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:magenta_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:magenta_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:light_blue_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:light_blue_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:yellow_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:yellow_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:lime_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:lime_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:pink_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:pink_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:gray_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:gray_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:light_gray_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:light_gray_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:cyan_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:cyan_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:purple_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:purple_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:blue_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:blue_double_flower",Count:1}}`)               
    }
    if(event.block.id == "botania:brown_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:brown_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:green_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:green_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:red_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:red_double_flower",Count:1}}`)               
    }  
    if(event.block.id == "botania:black_double_flower"){ 
        event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"botania:black_double_flower",Count:1}}`)               
    }    
})

onEvent('item.right_click', event => {
    const {player, server, item} = event

    let t = player.world.daytime
        if (item.id == "ibpdx:night_summoner" && t <= 12000){
            let ttn = 12000 - t
            console.log(`t: ${t}, ttn: ${ttn}`)
            player.tell(`${t}`)
            player.tell(`tellraw ${ttn}`)
            server.runCommandSilent(`time add ${ttn}`)
            item.count--
    }
  })

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:coal_block" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"mekanism:dust_coal",Count:4}}`)
  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "mekanism:dust_coal" && event.block.id == "ibpdx:mixed_brick_block") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ tconstruct:seared_bricks`)
    event.item.setCount(event.item.getCount() - 1);
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:iron_ore" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:iron_dust",Count:1}}`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"minecraft:iron_nugget",Count:3}}`)
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "minecraft:gold_ore" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:gold_dust",Count:1}}`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"minecraft:gold_nugget",Count:3}}`)
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "thermal:copper_ore" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:copper_dust",Count:1}}`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:copper_nugget",Count:3}}`)
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "thermal:tin_ore" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:tin_dust",Count:1}}`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:tin_nugget",Count:3}}`)
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "thermal:lead_ore" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:lead_dust",Count:1}}`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:lead_nugget",Count:3}}`)
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "thermal:silver_ore" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:silver_dust",Count:1}}`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:silver_nugget",Count:3}}`)
  }
})

onEvent('block.right_click', event => {
  if(event.block.id == "thermal:nickel_ore" && event.item.id == "boss_tools:hammer") {
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:air`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:nickel_dust",Count:1}}`)
    event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~1 ~ {Item:{id:"thermal:nickel_nugget",Count:3}}`)
  }
})

onEvent('block.right_click', event => {
          if (event.block.id == "xreliquary:fertile_lily_pad" && event.player.mainHandItem.id == "notenoughwands:acceleration_wand"){
        event.cancel()
        }   
})


onEvent('block.right_click', event => {
    if(event.block.hasTag("ibpdx:fluid_input") && event.item.id == 'refinedstorage:external_storage'){
      event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell @p Allowing these to connect could cause a crash and corrupt your world. Better safe than sorry.`)

        event.cancel()
    }

})

onEvent('block.right_click', event => {
    if(event.block.hasTag("ibpdx:fluid_output") && event.item.id == 'refinedstorage:external_storage'){
      event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run tell @p Allowing these to connect could cause a crash and corrupt your world. Better safe than sorry.`)

        event.cancel()
    }



})