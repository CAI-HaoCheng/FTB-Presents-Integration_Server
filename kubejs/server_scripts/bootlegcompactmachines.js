onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "ibpdx:blockcasing_empowered_diamond"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:grindstone"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "ibpdx:blockcasing_empowered_diamond"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_pulverizer`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "immersiveengineering:blastbrick_reinforced"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:smoker"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "immersiveengineering:blastbrick_reinforced"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_furnace`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "ibpdx:blockcasing_empowered_diamond"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "powah:magmator_basic"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "ibpdx:blockcasing_empowered_diamond"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_crucible`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "minecraft:glass"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:cauldron"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "minecraft:glass"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_bottler`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "ibpdx:blockcasing_empowered_diamond"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:blast_furnace"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "ibpdx:blockcasing_empowered_diamond"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_smelter`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "industrialforegoing:common_black_hole_tank"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:blast_furnace"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "industrialforegoing:common_black_hole_tank"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_refinery`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "minecraft:stone_bricks"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:stonecutter"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "minecraft:stone_bricks"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_sawmill`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "industrialforegoing:common_black_hole_tank"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:brewing_stand"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "industrialforegoing:common_black_hole_tank"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_brewer`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "minecraft:packed_ice"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "thermal:ice_tnt"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "minecraft:packed_ice"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_chiller`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "thermal:rf_coil" && event.block.id == "ibpdx:blockcasing_steel") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "minecraft:piston"){
      block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
      if(block == "thermal:energy_cell_frame"){
        block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
        if(block == "thermal:machine_frame"){
          block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
          if(block == "minecraft:anvil"){
            block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
            if(block == "ibpdx:blockcasing_steel"){
              block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
              if(block == "minecraft:piston"){
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~2 ~-2 minecraft:air`)
                  event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ thermal:machine_press`)
                  event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "dankstorage:dank_2" && event.block.id == "ibpdx:blockcasing_black_quartz") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "minecraft:gold_block"){
      block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z)
      if(block == "ibpdx:blockcasing_black_quartz"){
        block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
          if(block == "minecraft:gold_block"){
          block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
            if(block == "minecraft:yellow_stained_glass"){
              block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
                if(block == "minecraft:gold_block"){
                block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
                  if(block == "ibpdx:blockcasing_black_quartz"){
                  block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
                    if(block == "minecraft:gold_block"){
                      block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 2)
                      if(block == "ibpdx:blockcasing_black_quartz"){
                        block = event.world.getBlock(event.block.x + 1, event.block.y, event.block.z)
                        if(block == "minecraft:gold_block"){
                          block = event.world.getBlock(event.block.x + 1, event.block.y + 1, event.block.z)
                            if(block == "minecraft:yellow_stained_glass"){
                              block = event.world.getBlock(event.block.x + 1, event.block.y + 2, event.block.z)
                                if(block == "minecraft:gold_block"){
                                block = event.world.getBlock(event.block.x + 1, event.block.y, event.block.z - 1)
                                  if(block == "minecraft:yellow_stained_glass"){
                                  block = event.world.getBlock(event.block.x + 1, event.block.y + 1, event.block.z - 1)
                                    if(block == "minecraft:air"){
                                      block = event.world.getBlock(event.block.x + 1, event.block.y + 2, event.block.z - 1)
                                        if(block == "minecraft:yellow_stained_glass"){
                                        block = event.world.getBlock(event.block.x + 1, event.block.y, event.block.z - 2)
                                          if(block == "minecraft:gold_block"){
                                          block = event.world.getBlock(event.block.x + 1, event.block.y + 1, event.block.z - 2)
                                            if(block == "minecraft:yellow_stained_glass"){
                                              block = event.world.getBlock(event.block.x + 1, event.block.y + 2, event.block.z - 2)
                                              if(block == "minecraft:gold_block"){
                                                block = event.world.getBlock(event.block.x + 2, event.block.y, event.block.z)
                                                if(block == "ibpdx:blockcasing_black_quartz"){
                                                  block = event.world.getBlock(event.block.x + 2, event.block.y + 1, event.block.z)
                                                    if(block == "minecraft:gold_block"){
                                                      block = event.world.getBlock(event.block.x + 2, event.block.y + 2, event.block.z)
                                                        if(block == "ibpdx:blockcasing_black_quartz"){
                                                        block = event.world.getBlock(event.block.x + 2, event.block.y, event.block.z - 1)
                                                          if(block == "minecraft:gold_block"){
                                                          block = event.world.getBlock(event.block.x + 2, event.block.y + 1, event.block.z - 1)
                                                            if(block == "minecraft:yellow_stained_glass"){
                                                              block = event.world.getBlock(event.block.x + 2, event.block.y + 2, event.block.z - 1)
                                                                if(block == "minecraft:gold_block"){
                                                                block = event.world.getBlock(event.block.x + 2, event.block.y, event.block.z - 2)
                                                                  if(block == "ibpdx:blockcasing_black_quartz"){
                                                                  block = event.world.getBlock(event.block.x + 2, event.block.y + 1, event.block.z - 2)
                                                                    if(block == "minecraft:gold_block"){
                                                                      block = event.world.getBlock(event.block.x + 2, event.block.y + 2, event.block.z - 2)
                                                                      if(block == "ibpdx:blockcasing_black_quartz"){
                                                          event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~2 ~2 ~-2 minecraft:air`)
                                                          event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p dankstorage:dank_3`)
                                                          event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }

  }
})

onEvent('block.right_click', event => {
  if(event.item.id == "dankstorage:dank_3" && event.block.id == "extendedcrafting:black_iron_block") {
    block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z)
    if(block == "minecraft:emerald_block"){
      block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z)
      if(block == "extendedcrafting:black_iron_block"){
        block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 1)
          if(block == "minecraft:emerald_block"){
          block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 1)
            if(block == "minecraft:lime_stained_glass"){
              block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 1)
                if(block == "minecraft:emerald_block"){
                block = event.world.getBlock(event.block.x, event.block.y, event.block.z - 2)
                  if(block == "extendedcrafting:black_iron_block"){
                  block = event.world.getBlock(event.block.x, event.block.y + 1, event.block.z - 2)
                    if(block == "minecraft:emerald_block"){
                      block = event.world.getBlock(event.block.x, event.block.y + 2, event.block.z - 2)
                      if(block == "extendedcrafting:black_iron_block"){
                        block = event.world.getBlock(event.block.x + 1, event.block.y, event.block.z)
                        if(block == "minecraft:emerald_block"){
                          block = event.world.getBlock(event.block.x + 1, event.block.y + 1, event.block.z)
                            if(block == "minecraft:lime_stained_glass"){
                              block = event.world.getBlock(event.block.x + 1, event.block.y + 2, event.block.z)
                                if(block == "minecraft:emerald_block"){
                                block = event.world.getBlock(event.block.x + 1, event.block.y, event.block.z - 1)
                                  if(block == "minecraft:lime_stained_glass"){
                                  block = event.world.getBlock(event.block.x + 1, event.block.y + 1, event.block.z - 1)
                                    if(block == "minecraft:air"){
                                      block = event.world.getBlock(event.block.x + 1, event.block.y + 2, event.block.z - 1)
                                        if(block == "minecraft:lime_stained_glass"){
                                        block = event.world.getBlock(event.block.x + 1, event.block.y, event.block.z - 2)
                                          if(block == "minecraft:emerald_block"){
                                          block = event.world.getBlock(event.block.x + 1, event.block.y + 1, event.block.z - 2)
                                            if(block == "minecraft:lime_stained_glass"){
                                              block = event.world.getBlock(event.block.x + 1, event.block.y + 2, event.block.z - 2)
                                              if(block == "minecraft:emerald_block"){
                                                block = event.world.getBlock(event.block.x + 2, event.block.y, event.block.z)
                                                if(block == "extendedcrafting:black_iron_block"){
                                                  block = event.world.getBlock(event.block.x + 2, event.block.y + 1, event.block.z)
                                                    if(block == "minecraft:emerald_block"){
                                                      block = event.world.getBlock(event.block.x + 2, event.block.y + 2, event.block.z)
                                                        if(block == "extendedcrafting:black_iron_block"){
                                                        block = event.world.getBlock(event.block.x + 2, event.block.y, event.block.z - 1)
                                                          if(block == "minecraft:emerald_block"){
                                                          block = event.world.getBlock(event.block.x + 2, event.block.y + 1, event.block.z - 1)
                                                            if(block == "minecraft:lime_stained_glass"){
                                                              block = event.world.getBlock(event.block.x + 2, event.block.y + 2, event.block.z - 1)
                                                                if(block == "minecraft:emerald_block"){
                                                                block = event.world.getBlock(event.block.x + 2, event.block.y, event.block.z - 2)
                                                                  if(block == "extendedcrafting:black_iron_block"){
                                                                  block = event.world.getBlock(event.block.x + 2, event.block.y + 1, event.block.z - 2)
                                                                    if(block == "minecraft:emerald_block"){
                                                                      block = event.world.getBlock(event.block.x + 2, event.block.y + 2, event.block.z - 2)
                                                                      if(block == "extendedcrafting:black_iron_block"){
                                                          event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~2 ~2 ~-2 minecraft:air`)
                                                          event.server.runCommandSilent(`execute positioned ${event.block.x} ${event.block.y} ${event.block.z} run give @p dankstorage:dank_4`)
                                                          event.item.setCount(event.item.getCount() - 1);
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }

  }
})