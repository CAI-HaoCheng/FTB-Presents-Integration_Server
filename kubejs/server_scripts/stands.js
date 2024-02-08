onEvent('block.right_click', event => {
  if (event.item.id == 'ibpdx:phantom_fantasy'){
    if (event.player.inventory.find('ibpdx:spirit_charge') >= 4) 
        {
          if(event.level.dimension == 'minecraft:overworld'){
            event.player.inventory.get(event.player.inventory.find('ibpdx:spirit_charge')).count-=4
            if(event.facing == Direction.NORTH){
              if(event.block.south == 'minecraft:air')
                px = event.block.x + 0.5
                py = event.block.y - 1
                pz = event.block.z + 1.5
                event.player.setPosition(px, py, pz);
            }
            if(event.facing == Direction.EAST){
              if(event.block.west == 'minecraft:air')
                px = event.block.x - 0.5
                py = event.block.y - 1
                pz = event.block.z + 0.5
                event.player.setPosition(px, py, pz);
            }
            if(event.facing == Direction.SOUTH){
              if(event.block.north == 'minecraft:air')
                px = event.block.x + 0.5
                py = event.block.y - 1
                pz = event.block.z - 0.5
                event.player.setPosition(px, py, pz);
            }
            if(event.facing == Direction.WEST){
              if(event.block.east == 'minecraft:air')
                px = event.block.x + 1.5
                py = event.block.y - 1
                pz = event.block.z + 0.5
                event.player.setPosition(px, py, pz);
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
        let index = player.inventory.find('ibpdx:spirit_charge');
        if(charge == null){
          return
        }
        let charge = player.inventory.get(index);    
            // check for mainHandItem and if potion is active
            if (player.mainHandItem == "ibpdx:on_the_moon"){
                if(charge.count >= 2) {
                    player.inventory.markDirty();
                        player.inventory.get(index).count -= 2;
                        event.entity.potionEffects.add('minecraft:levitation', 200, 2);
                        event.entity.potionEffects.add('minecraft:slow_falling', 250, 2);
                        }
            }

        }
}
})

onEvent('item.right_click', event => {
  if(event.item.id == "ibpdx:ufo_lover") {
    if (event.player.inventory.find('ibpdx:spirit_charge') >= 12) 
        {
    let player = event.player;
    event.player.potionEffects.add('bloodmagic:flight', 36000, 0);
    event.player.inventory.get(event.player.inventory.find('ibpdx:spirit_charge')).count-=12
  }
}
}); 

onEvent('item.right_click', event => {
  let t = event.entity.world.time % 24000
  if(t > 12000){
if (event.item.id == "ibpdx:china_gal"){
    if (event.player.inventory.find('ibpdx:spirit_charge') >= 8) {
          event.player.inventory.get(event.player.inventory.find('ibpdx:spirit_charge')).count-=8
          event.entity.potionEffects.add('minecraft:speed', 6000, 3);
          event.entity.potionEffects.add('minecraft:strength', 6000, 3);
          event.entity.potionEffects.add('minecraft:resistance', 6000, 1);
    }

}
}
}) 

onEvent('block.right_click', event => {
  if (event.item.id == 'ibpdx:uninstall_love'){
    if (event.player.inventory.find('ibpdx:small_spirit_charge') >= 1) 
        {
          if(event.block.id == "minecraft:stone") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:netherrack`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:netherrack") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:stone`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:bricks") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:nether_bricks`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:nether_bricks") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:bricks`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:redstone_ore") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:nether_quartz_ore`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:nether_quartz_ore") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:redstone_ore`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:oak_log") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:crimson_stem`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:crimson_stem") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:oak_log`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:birch_log") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:warped_stem`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:warped_stem") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:birch_log`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:sea_lantern") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:glowstone`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:glowstone") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:sea_lantern`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:emerald_ore") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:ancient_debris`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
          if(event.block.id == "minecraft:ancient_debris") {
            event.player.inventory.get(event.player.inventory.find('ibpdx:small_spirit_charge')).count-=1
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ minecraft:emerald_ore`)
            event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie_villager.converted block @p`)
            }
    }
  }
})

onEvent('item.right_click', event => {
  let t = event.entity.world.time % 24000
  if(t > 12000){
if (event.item.id == "ibpdx:catch_us"){
    if (event.player.inventory.find('ibpdx:spirit_charge') >= 2) {
          event.player.inventory.get(event.player.inventory.find('ibpdx:spirit_charge')).count-=2
          event.server.runCommandSilent(`execute run time add 24000`)
    }

}
}
}) 