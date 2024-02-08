//priority: 1000

// kubejs/server_scripts/example.js
// This is just an example script to show off multiple types of recipes and removal methods
// Supports /reload

// Listen to server recipe event
onEvent('recipes', event => {

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "A A",
      "DED"
    ],
    "key": {
      "A": {
        "tag": "forge:glass"
      },
      "D": {
        "item": "ibpdx:duskstone_ingot"
      },
      "E": {
        "item": "ibpdx:iron_casing"
      }

    },
    "result": {
      "item": "powah:energizing_orb"
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " CA",
      "CBC",
      "AC "
    ],
    "key": {
      "A": {
        "item": "powah:dielectric_paste"
      },
      "B": {
        "item": "minecraft:redstone"
      },
      "C": {
        "item": "ftbic:industrial_grade_metal"
      }

    },
    "result": {
      "item": "powah:capacitor_basic",
      "count": 2
    }
  })

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "cyclic:mason_stone"
    },
    "C": {
      "item": "botania:quartz_dark"
    }
  },
  "result": {
    "item": "ibpdx:iron_casing"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "ftbic:advanced_alloy"
    },
    "B": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "C": {
      "item": "ftbic:mv_battery"
    },
    "D": {
      "item": "powah:battery_hardened"
    },
    "E": {
      "item": "ftbic:advanced_machine_block"
    },
    "F": {
      "item": "betterendforge:andesite_pedestal"
    }
  },
  "result": {
    "item": "betterendforge:infusion_pedestal"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:block_of_ironium"
    },
    "B": {
      "item": "ibpdx:diamond_electron_tube"
    },
    "C": {
      "item": "treemendous:walnut_leaves"
    },
    "D": {
      "item": "ibpdx:iron_casing"
    }
  },
  "result": {
    "item": "cyclic:harvester"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "boss_tools:desh_ingot"
    },
    "C": {
      "item": "thermal:machine_frame"
    }
  },
  "result": {
    "item": "refinedstorage:machine_casing",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "powah:crystal_blazing"
    },
    "B": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "C": {
      "item": "thermal:obsidian_glass"
    },
    "D": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "refinedstorage:1k_storage_part"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DEC",
    "AFC"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:improved_processor"
    },
    "B": {
      "item": "refinedstorage:construction_core"
    },
    "C": {
      "item": "thermal:obsidian_glass"
    },
    "D": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "E": {
      "item": "refinedstorage:machine_casing"
    },
    "F": {
      "item": "refinedstorage:destruction_core"
    }
  },
  "result": {
    "item": "refinedstorage:grid"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BAB",
    "CCC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "C": {
      "item": "refinedstorage:quartz_enriched_iron"
    }
  },
  "result": {
    "item": "refinedstorage:pattern"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "ibpdx:blockcasing_duskstone"
    },
    "C": {
      "item": "refinedstorage:advanced_processor"
    }
  },
  "result": {
    "item": "refinedstorage:controller"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "ftbic:reinforced_glass"
    },
    "B": {
      "item": "minecraft:ender_pearl"
    },
    "C": {
      "item": "minecraft:book"
    },
    "D": {
      "item": "ftbic:advanced_alloy"
    }
  },
  "result": {
    "item": "compactmachines:personal_shrinking_device"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "C "
  ],
  "key": {
    "A": {
      "item": "thermal:device_collector"
    },
    "B": {
      "item": "thermal:invar_gear"
    },
    "C": {
      "item": "thermal:signalum_ingot"
    }
  },
  "result": {
    "item": "cyclic:collector"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "C "
  ],
  "key": {
    "A": {
      "item": "minecraft:dispenser"
    },
    "B": {
      "item": "thermal:invar_gear"
    },
    "C": {
      "item": "thermal:constantan_gear"
    }
  },
  "result": {
    "item": "cyclic:user"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:compressed_steel"
    },
    "B": {
      "tag": "forge:glass"
    },
    "C": {
      "item": "ftbic:advanced_machine_block"
    }
  },
  "result": {
    "item": "industrialforegoing:machine_frame_simple"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CBC",
    " B "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "thermal:signalum_ingot"
    },
    "C": {
      "item": "miniutilities:iron_drum"
    }
  },
  "result": {
    "item": "industrialforegoing:meat_feeder"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "eCe",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:plate_steel"
    },
    "B": {
      "item": "minecraft:ender_pearl"
    },
    "C": {
      "item": "ftbic:advanced_machine_block"
    },
    "D": {
      "item": "minecraft:chest"
    },
    "e": {
      "item": "infused_crystals:lapisium_crystal"
    }
  },
  "result": {
    "item": "rftoolsstorage:storage_scanner"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "eCe",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "powah:energy_cable_hardened"
    },
    "B": {
      "item": "refinedstorage:wireless_transmitter"
    },
    "C": {
      "item": "thermal:machine_frame"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "e": {
      "item": "infused_crystals:infused_lapisium_crystal"
    }
  },
  "result": {
    "item": "rftoolspower:dimensionalcell"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:ender_pearl"
    },
    "C": {
      "item": "thermal:iron_gear"
    },
    "D": {
      "item": "immersiveengineering:heavy_engineering"
    },
    "E": {
      "item": "minecraft:redstone_torch"
    }
  },
  "result": {
    "item": "rftoolsutility:elevator_button_module"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:ender_pearl"
    },
    "C": {
      "tag": "forge:glass"
    },
    "D": {
      "item": "rftoolsbase:information_screen"
    },
    "E": {
      "item": "minecraft:redstone_torch"
    }
  },
  "result": {
    "item": "rftoolsutility:screen_controller"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:desh_ingot"
    },
    "B": {
      "item": "thermal:rich_slag"
    },
    "C": {
      "item": "ibpdx:empowered_steel_ingot"
    },
    "D": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:metallurgic_infuser"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:desh_ingot"
    },
    "B": {
      "item": "mekanism:basic_control_circuit"
    },
    "C": {
      "item": "thermal:lumium_glass"
    },
    "D": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:energized_smelter"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:stainless_steel_ingot"
    },
    "B": {
      "item": "mekanism:basic_control_circuit"
    },
    "C": {
      "item": "ftbic:iridium_circuit"
    },
    "D": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:enrichment_chamber"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EBE"
  ],
  "key": {
    "A": {
      "item": "ibpdx:stainless_steel_ingot"
    },
    "B": {
      "item": "mekanism:basic_control_circuit"
    },
    "C": {
      "item": "mekanism:alloy_infused"
    },
    "D": {
      "item": "mekanism:electrolytic_core"
    },
    "E": {
      "item": "botania:elementium_ingot"
    }
  },
  "result": {
    "item": "mekanism:electrolytic_separator"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_infused"
    },
    "B": {
      "item": "mekanism:advanced_control_circuit"
    },
    "C": {
      "item": "thermal:enderium_plate"
    },
    "D": {
      "item": "mekanism:enrichment_chamber"
    },
    "E": {
      "item": "thermal:machine_cycle_augment"
    }
  },
  "result": {
    "item": "mekanism:purification_chamber"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EEE"
  ],
  "key": {
    "A": {
      "item": "mekanism:elite_control_circuit"
    },
    "B": {
      "item": "mekanism:basic_control_circuit"
    },
    "C": {
      "item": "ibpdx:empowered_aluminum_ingot"
    },
    "D": {
      "item": "mekanism:basic_fluid_tank"
    },
    "E": {
      "item": "mekanism:thermal_evaporation_block"
    }
  },
  "result": {
    "item": "mekanism:thermal_evaporation_controller"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:ingot_steel"
    },
    "B": {
      "item": "ibpdx:empowered_copper_ingot"
    }
  },
  "result": {
    "item": "mekanism:thermal_evaporation_block",
    "count": 4
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CBC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "B": {
      "item": "ibpdx:empowered_gold_ingot"
    },
    "C": {
      "item": "mekanism:alloy_infused"
    }
  },
  "result": {
    "item": "mekanism:energy_tablet"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_reinforced"
    },
    "B": {
      "item": "mekanism:elite_control_circuit"
    },
    "C": {
      "item": "mekanism:basic_chemical_tank"
    },
    "D": {
      "item": "mekanism:dynamic_tank"
    }
  },
  "result": {
    "item": "mekanism:chemical_infuser"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_reinforced"
    },
    "B": {
      "item": "mekanism:elite_control_circuit"
    },
    "C": {
      "item": "ibpdx:empowered_gold_ingot"
    },
    "D": {
      "item": "mekanism:purification_chamber"
    }
  },
  "result": {
    "item": "mekanism:chemical_injection_chamber"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:crystal_of_speed"
    },
    "B": {
      "item": "mekanism:alloy_atomic"
    },
    "C": {
      "item": "ibpdx:empowered_lead_ingot"
    },
    "D": {
      "item": "ftbic:antimatter_crystal"
    }
  },
  "result": {
    "item": "mekanism:teleportation_core"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:desh_ingot"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    },
    "C": {
      "item": "ibpdx:speed_gear"
    }
  },
  "result": {
    "item": "thermal:machine_frame"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "  A",
    " B ",
    "A  "
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "B": {
      "item": "ibpdx:empowered_gold_ingot"
    }
  },
  "result": {
    "item": "thermal:rf_coil"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "B": {
      "item": "thermal:invar_ingot"
    },
    "C": {
      "item": "ibpdx:speed_gear"
    }
  },
  "result": {
    "item": "thermal:upgrade_augment_1"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    },
    "C": {
      "item": "thermal:lumium_ingot"
    },
    "D": {
      "item": "ibpdx:speed_gear"
    }
  },
  "result": {
    "item": "thermal:upgrade_augment_2"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "B": {
      "item": "thermal:enderium_ingot"
    },
    "C": {
      "item": "ibpdx:speed_gear"
    }
  },
  "result": {
    "item": "thermal:upgrade_augment_3"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "   ",
    "ABA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:leather"
    },
    "B": {
      "item": "ftbic:advanced_alloy"
    }
  },
  "result": {
    "item": "simplyjetpacks:leather_strap"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:rf_coil"
    },
    "B": {
      "item": "boss_tools:desh_ingot"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "boss_tools:silicon_ingot"
    },
    "E": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "thermal:dynamo_stirling"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:lead_plate"
    },
    "B": {
      "item": "ftbic:copper_coil"
    },
    "C": {
      "item": "ftbic:reinforced_glass"
    },
    "D": {
      "item": "ftbic:lv_battery"
    },
    "E": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "simplyjetpacks:thruster_te1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "ADA",
    "B B"
  ],
  "key": {
    "A": {
      "item": "thermal:lead_plate"
    },
    "B": {
      "item": "simplyjetpacks:thruster_te1"
    },
    "C": {
      "item": "ftbic:lv_battery_box"
    },
    "D": {
      "item": "simplyjetpacks:leather_strap"
    }
  },
  "result": {
    "item": "simplyjetpacks:jetpack_te1"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "ftbic:copper_coil"
    },
    "C": {
      "item": "ftbic:reinforced_glass"
    },
    "D": {
      "item": "ftbic:mv_battery"
    },
    "E": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "simplyjetpacks:thruster_te2"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "ADA",
    "B B"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "simplyjetpacks:thruster_te2"
    },
    "C": {
      "item": "ftbic:mv_battery_box"
    },
    "D": {
      "item": "simplyjetpacks:jetpack_te1"
    }
  },
  "result": {
    "item": "simplyjetpacks:jetpack_te2"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:rf_coil"
    },
    "B": {
      "item": "boss_tools:silicon_ingot"
    },
    "C": {
      "item": "thermal:enderium_gear"
    },
    "D": {
      "item": "bloodmagic:lavasigil"
    },
    "E": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "thermal:dynamo_magmatic"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "redstone_arsenal:flux_ingot"
    },
    "B": {
      "item": "thermal:rf_coil"
    },
    "C": {
      "item": "thermal:signalum_glass"
    },
    "D": {
      "item": "ftbic:hv_battery"
    },
    "E": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "simplyjetpacks:thruster_te3"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "ADA",
    "B B"
  ],
  "key": {
    "A": {
      "item": "redstone_arsenal:flux_ingot"
    },
    "B": {
      "item": "simplyjetpacks:thruster_te3"
    },
    "C": {
      "item": "ftbic:hv_battery_box"
    },
    "D": {
      "item": "simplyjetpacks:jetpack_te2"
    }
  },
  "result": {
    "item": "simplyjetpacks:jetpack_te3"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_plate"
    },
    "B": {
      "item": "thermal:rf_coil"
    },
    "C": {
      "item": "thermal:enderium_glass"
    },
    "D": {
      "item": "ftbic:ev_battery"
    },
    "E": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "simplyjetpacks:thruster_te4"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "ADA",
    "B B"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_plate"
    },
    "B": {
      "item": "simplyjetpacks:thruster_te4"
    },
    "C": {
      "item": "ftbic:ev_battery_box"
    },
    "D": {
      "item": "simplyjetpacks:jetpack_te3"
    }
  },
  "result": {
    "item": "simplyjetpacks:jetpack_te4"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ftbic:copper_coil"
    },
    "B": {
      "item": "thermal:electrum_plate"
    },
    "C": {
      "item": "thermal:electrum_gear"
    },
    "D": {
      "item": "ftbic:advanced_alloy"
    },
    "E": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "thermal:dynamo_compression"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " A "
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_lead_ingot"
    },
    "B": {
      "item": "ibpdx:empowered_copper_ingot"
    },
    "C": {
      "item": "powah:battery_hardened"
    }
  },
  "result": {
    "item": "thermal:flux_capacitor"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:mixed_blend"
    },
    "B": {
      "item": "minecraft:brick"
    },
    "C": {
      "item": "ibpdx:ethetic_quartz"
    }
  },
  "result": {
    "item": "3x immersiveengineering:cokebrick"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:nether_brick"
    },
    "B": {
      "item": "ibpdx:mixed_brick"
    },
    "C": {
      "item": "ibpdx:bedrock_shard"
    }
  },
  "result": {
    "item": "immersiveengineering:blastbrick",
    "count": 3
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "thermal:green_bean_pie"
    },
    "C": {
      "item": "immersiveengineering:treated_wood_horizontal"
    },
    "D": {
      "item": "cyclic:harvester"
    }
  },
  "result": {
    "item": "immersiveengineering:cloche"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_steel_ingot"
    },
    "B": {
      "item": "immersiveengineering:plate_aluminum"
    },
    "C": {
      "item": "ibpdx:blockcasing_steel"
    },
    "D": {
      "item": "immersiveengineering:treated_wood_horizontal"
    },
    "E": {
      "item": "infused_crystals:block_of_redstonium"
    }
  },
  "result": {
    "item": "immersiveengineering:capacitor_hv"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:silicon_ingot"
    },
    "B": {
      "item": "immersiveengineering:ingot_steel"
    },
    "C": {
      "item": "thermal:electrum_ingot"
    },
    "D": {
      "item": "immersiveengineering:dynamo"
    }
  },
  "result": {
    "item": "immersiveengineering:generator",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B"
  ],
  "key": {
    "A": {
      "item": "ftbic:lv_battery"
    },
    "B": {
      "item": "powah:furnator_starter"
    }
  },
  "result": {
    "item": "ftbic:basic_generator"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "eAe",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:diamondium_crystal"
    },
    "B": {
      "item": "cyclic:mason_stone"
    },
    "C": {
      "item": "ftbic:machine_block"
    },
    "D": {
      "item": "ftbic:electronic_circuit"
    },
    "e": {
      "item": "ftbic:copper_coil"
    }
  },
  "result": {
    "item": "ftbic:macerator"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "ftbic:copper_wire"
    },
    "B": {
      "item": "immersiveengineering:stick_steel"
    }
  },
  "result": {
    "item": "ftbic:copper_coil"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:treated_wood_horizontal"
    },
    "B": {
      "item": "ftbic:copper_wire"
    },
    "C": {
      "item": "ftbic:copper_coil"
    }
  },
  "result": {
    "item": "ftbic:lv_transformer"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "cBc",
    " A "
  ],
  "key": {
    "A": {
      "item": "ftbic:copper_coil"
    },
    "B": {
      "item": "ftbic:machine_block"
    },
    "c": {
      "item": "boss_tools:desh_ingot"
    }
  },
  "result": {
    "item": "ftbic:mv_transformer"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "botania:livingrock"
    },
    "B": {
      "item": "astralsorcery:well"
    },
    "C": {
      "item": "tconstruct:soulsteel_ingot"
    },
    "D": {
      "item": "botania:lens_damage"
    }
  },
  "result": {
    "item": "bloodmagic:altar"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:red_string"
    },
    "B": {
      "item": "tconstruct:soulsteel_ingot"
    },
    "C": {
      "item": "astralsorcery:stardust"
    }
  },
  "result": {
    "item": "bloodmagic:soulsnare",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "tconstruct:soulsteel_ingot"
    },
    "B": {
      "item": "botania:livingrock"
    },
    "C": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": false
    },
    "D": {
      "item": "botania:manasteel_block"
    }
  },
  "result": {
    "item": "bloodmagic:soulforge"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BAB",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "botania:life_essence"
    },
    "B": {
      "item": "botania:elementium_ingot"
    },
    "C": {
      "item": "infused_crystals:infused_lapisium_crystal"
    },
    "D": {
      "item": "botania:ender_air_bottle"
    }
  },
  "result": {
    "item": "botania:flight_tiara"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AB ",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "botania:livingwood"
    },
    "B": {
      "tag": "botania:petals"
    }
  },
  "result": {
    "item": "botania:mana_spreader"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCD",
    "EFG"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:block_of_infused_lapisium"
    },
    "B": {
      "item": "botania:rune_water"
    },
    "C": {
      "item": "botania:manasteel_block"
    },
    "D": {
      "item": "botania:rune_fire"
    },
    "E": {
      "item": "botania:rune_earth"
    },
    "F": {
      "item": "botania:rune_mana"
    },
    "G": {
      "item": "botania:rune_air"
    }
  },
  "result": {
    "item": "botania:terra_plate"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CC",
  ],
  "key": {
    "A": {
      "item": "astralsorcery:stardust"
    },
    "B": {
      "item": "botania:manasteel_ingot"
    },
    "C": {
      "item": "minecraft:glowstone_dust"
    }
  },
  "result": {
    "item": "botania:light_relay"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB ",
    "BC ",
    "   "
  ],
  "key": {
    "A": {
      "item": "thermal:apatite"
    },
    "B": {
      "tag": "botania:petals"
    },
    "C": {
      "item": "minecraft:bone_meal"
    }
  },
  "result": {
    "item": "botania:fertilizer",
      "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BA ",
    "AB ",
    "   "
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:inferium_essence"
    },
    "B": {
      "tag": "botania:petals"
    }
  },
  "result": {
    "item": "botania:fertilizer",
      "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB ",
    "BC ",
    "   "
  ],
  "key": {
    "A": {
      "item": "thermal:phytogro"
    },
    "B": {
      "tag": "botania:petals"
    },
    "C": {
      "item": "minecraft:bone_meal"
    }
  },
  "result": {
    "item": "botania:fertilizer",
      "count": 3
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "botania:livingwood"
    },
    "B": {
      "item": "astralsorcery:parchment",
    },
    "C": {
      "item": "botania:horn_grass"
    },
    "D": {
      "item": "minecraft:leather"
    }
  },
  "result": {
    "item": "botania:drum_wild"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "cyclic:mason_stone"
    },
    "B": {
      "item": "ftbic:machine_block"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ftbic:compressor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "tconstruct:blood_slime_ball"
    },
    "B": {
      "type": "forge:nbt",
      "item": "botania:ender_dagger",
      "count": 1,
      "nbt": "{Damage:0}"
    }
  },
  "result": {
    "item": "bloodmagic:sacrificialdagger"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "quark:netherrack_bricks"
    },
    "B": {
      "item": "bloodmagic:blankslate"
    },
    "C": {
      "type": "bloodmagic:bloodorb",
      "orb_tier": 1
    }
  },
  "result": {
    "item": "bloodmagic:blankrune"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "tconstruct:scorched_bricks"
    },
    "B": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "C": {
      "item": "ftbic:machine_block"
    },
    "D": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ftbic:powered_furnace"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:alloy_atomic"
    },
    "B": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "C": {
      "item": "mekanism:personal_chest"
    },
    "D": {
      "item": "mekanism:purification_chamber"
    },
    "E": {
      "item": "mekanism:basic_chemical_tank"
    }
  },
  "result": {
    "item": "mekanism:chemical_oxidizer"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:advanced_control_circuit"
    },
    "B": {
      "item": "mekanism:basic_chemical_tank"
    },
    "C": {
      "item": "mekanism:alloy_reinforced"
    },
    "D": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "mekanism:chemical_crystallizer"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "   ",
    "ABA",
    "   "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:ingot_steel"
    },
    "B": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "mekanism:basic_universal_cable",
    "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:ingot_steel"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "mekanism:ingot_osmium"
    },
    "D": {
      "item": "thermal:copper_ingot"
    },
    "E": {
      "item": "ftbic:iron_furnace"
    }
  },
  "result": {
    "item": "mekanism:seismic_vibrator"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "mekanism:elite_control_circuit"
    },
    "B": {
      "item": "mekanism:basic_chemical_tank"
    },
    "C": {
      "item": "immersiveengineering:fluid_pump"
    },
    "D": {
      "item": "mekanism:steel_casing"
    },
    "E": {
      "item": "ftbic:pump"
    }
  },
  "result": {
    "item": "mekanism:chemical_washer"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "B",
    "C"
  ],
  "key": {
    "B": {
      "item": "powah:battery_starter"
    },
    "C": {
      "tag": "forge:rods/wooden"
    }
  },
  "result": {
    "item": "mekanism:configurator"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "B": {
      "item": "ibpdx:empowered_steel_ingot"
    }
  },
  "result": {
    "item": "mekanismgenerators:turbine_casing",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "fluxnetworks:flux_dust"
    },
    "B": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_core",
    "count": 6
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "B": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "powah:ender_core"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CC"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "B": {
      "item": "extendedcrafting:luminessence"
    },
    "C": {
      "item": "ibpdx:stainless_steel_ingot"
    }
  },
  "result": {
    "item": "extendedcrafting:basic_component"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB ",
    "CD ",
    "   "
  ],
  "key": {
    "A": {
      "item": "thermal:blitz_powder"
    },
    "B": {
      "item": "botania:mana_powder"
    },
    "C": {
      "item": "thermal:lumium_dust"
    },
    "D": {
      "item": "astralsorcery:stardust"
    }
  },
  "result": {
    "item": "extendedcrafting:luminessence"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB ",
    "CC ",
    "   "
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "B": {
      "item": "extendedcrafting:luminessence"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    }
  },
  "result": {
    "item": "extendedcrafting:advanced_component"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB ",
    "CC ",
    "   "
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "B": {
      "item": "extendedcrafting:luminessence"
    },
    "C": {
      "item": "thermal:enderium_ingot"
    }
  },
  "result": {
    "item": "extendedcrafting:elite_component"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:basic_component"
    },
    "B": {
      "item": "extendedcrafting:basic_catalyst"
    },
    "C": {
      "item": "botania:auto_crafting_halo",
    },
    "D": {
      "item": "infused_crystals:block_of_ironium"
    },
    "E": {
      "item": "botania:crafty_crate"
    },
    "F": {
      "item": "extendedcrafting:black_iron_slate"
    }
  },
  "result": {
    "item": "extendedcrafting:basic_table"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:advanced_component"
    },
    "B": {
      "item": "botania:gaia_ingot"
    },
    "C": {
      "item": "extendedcrafting:advanced_catalyst"
    },
    "D": {
      "item": "extendedcrafting:basic_table"
    }
  },
  "result": {
    "item": "extendedcrafting:advanced_table"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:elite_component"
    },
    "B": {
      "item": "draconicevolution:chaotic_core"
    },
    "C": {
      "item": "extendedcrafting:elite_catalyst"
    },
    "D": {
      "item": "extendedcrafting:advanced_table"
    }
  },
  "result": {
    "item": "extendedcrafting:elite_table"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:ultimate_component"
    },
    "B": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:emerald\"}"
    },
    "C": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "D": {
      "item": "extendedcrafting:elite_table"
    }
  },
  "result": {
    "item": "extendedcrafting:ultimate_table"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_ingot"
    },
    "B": {
      "item": "minecraft:white_wool"
    },
    "C": {
      "item": "minecraft:blaze_rod"
    },
    "D": {
      "item": "minecraft:chest"
    },
    "E": {
      "item": "waystones:warp_plate"
    }    
  },
  "result": {
    "item": "enderstorage:ender_chest"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_ingot"
    },
    "B": {
      "item": "minecraft:white_wool"
    },
    "C": {
      "item": "minecraft:blaze_rod"
    },
    "D": {
      "item": "minecraft:bucket"
    },
    "E": {
      "item": "waystones:warp_plate"
    } 
  },
  "result": {
    "item": "enderstorage:ender_tank"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "FEF"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_ingot"
    },
    "B": {
      "item": "extendedcrafting:elite_component"
    },
    "C": {
      "item": "ibpdx:empowered_aluminum_ingot"
    },
    "D": {
      "item": "extendedcrafting:frame"
    },
    "E": {
      "item": "betterendforge:infusion_pedestal"
    },
    "F": {
      "item": "thermal:rf_coil"
    }
  },
  "result": {
    "item": "extendedcrafting:crafting_core"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "A A",
    "AAA"
  ],
  "key": {
    "A": {
      "tag": "forge:glass"
    },
    "B": {
      "item": "botania:livingwood"
    }
  },
  "result": {
    "item": "cookingforblockheads:milk_jar"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:ingot_steel"
    },
    "B": {
      "item": "minecraft:lime_stained_glass"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ibpdx:duplication_core"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_ingot"
    },
    "B": {
      "item": "minecraft:red_stained_glass"
    },
    "C": {
      "item": "ibpdx:duplication_core"
    }
  },
  "result": {
    "item": "ibpdx:simulation_core"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "EBE",
    "ACA",
    "EDE"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_steel_ingot"
    },
    "B": {
      "item": "minecraft:anvil"
    },
    "C": {
      "item": "ftbic:machine_block"
    },
    "D": {
      "item": "ftbic:electronic_circuit"
    },
    "E": {
      "item": "ftbic:industrial_grade_metal"
    }
  },
  "result": {
    "item": "boss_tools:compressor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "boss_tools:compressed_steel"
    },
    "B": {
      "item": "minecraft:anvil"
    },
    "C": {
      "item": "thermal:bronze_plate"
    },
    "D": {
      "item": "ftbic:advanced_machine_block"
    },
    "E": {
      "item": "ibpdx:empowered_silver_ingot"
    },
    "F": {
      "item": "ftbic:advanced_circuit"
    }
  },
  "result": {
    "item": "boss_tools_giselle_addon:advanced_compressor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_steel_ingot"
    },
    "B": {
      "item": "minecraft:crafting_table"
    },
    "C": {
      "item": "ibpdx:empowered_silver_ingot"
    },
    "D": {
      "item": "ftbic:advanced_circuit"
    },
    "E": {
      "item": "boss_tools:compressed_steel"
    },
    "F": {
      "item": "ibpdx:empowered_gold_ingot"
    }
  },
  "result": {
    "item": "boss_tools:nasa_workbench"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BAB",
    "B B"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_steel_ingot"
    },
    "B": {
      "item": "thermal:invar_plate"
    }
  },
  "result": {
    "item": "boss_tools:rocket_fin"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "minecraft:smoker"
    },
    "C": {
      "item": "boss_tools:engine_fan"
    },
    "D": {
      "item": "ibpdx:empowered_lead_ingot"
    },
    "E": {
      "item": "ibpdx:empowered_gold_ingot"
    }
  },
  "result": {
    "item": "boss_tools:iron_engine"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:compressed_steel"
    },
    "B": {
      "item": "ibpdx:empowered_aluminum_ingot"
    },
    "C": {
      "item": "boss_tools:iron_engine"
    },
    "D": {
      "item": "thermal:bronze_plate"
    }
  },
  "result": {
    "item": "boss_tools:oxygen_loader"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_copper_ingot"
    },
    "B": {
      "item": "boss_tools:oxygen_tank"
    },
    "C": {
      "item": "ibpdx:empowered_lead_ingot"
    },
    "D": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "boss_tools_giselle_addon:fuel_loader"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "CCC"
  ],
  "key": {
    "A": {
      "item": "rftoolsbase:infused_diamond"
    },
    "B": {
      "item": "draconicevolution:wyvern_core"
    },
    "C": {
      "item": "botania:shimmerrock"
    },
    "D": {
      "item": "infused_crystals:block_of_ironium"
    }
  },
  "result": {
    "item": "draconicevolution:wyvern_crafting_injector"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "draconicevolution:draconium_ingot"
    },
    "B": {
      "item": "draconicevolution:draconium_core"
    },
    "C": {
      "item": "ibpdx:bloodshine_ingot"
    }
  },
  "result": {
    "item": "draconicevolution:wyvern_core"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B",
    "C"
  ],
  "key": {
    "A": {
      "item": "minecraft:cake"
    },
    "B": {
      "item": "minecraft:comparator"
    },
    "C": {
      "item": "minecraft:redstone_block"
    }
  },
  "result": {
    "item": "draconicevolution:potentiometer"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "thermal:copper_ingot"
    },
    "C": {
      "item": "minecraft:redstone_block"
    },
    "D": {
      "item": "minecraft:redstone"
    },
    "E": {
      "item": "minecraft:glowstone_dust"
    }
  },
  "result": {
    "item": "ibpdx:modularium",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:silver_ingot"
    },
    "B": {
      "item": "thermal:copper_ingot"
    },
    "C": {
      "item": "minecraft:redstone_block"
    },
    "D": {
      "item": "minecraft:redstone"
    },
    "E": {
      "item": "minecraft:glowstone_dust"
    }
  },
  "result": {
    "item": "ibpdx:modularium",
    "count": 3
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:livingrock"
    },
    "B": {
      "item": "thermal:copper_ingot"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_livingrock",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:livingrock"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "thermal:copper_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_livingrock",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AA ",
    "AA ",
    "   "
  ],
  "key": {
    "A": {
      "item": "ibpdx:mixed_brick"
    }
  },
  "result": {
    "item": "ibpdx:mixed_brick_block",
    "count": 1
  }
})

  let multiSmelt = (output, input, includeBlasting) => {
    event.smelting(output, input)
    
    if (includeBlasting) {
      event.blasting(output, input)
    }
  }
  
  multiSmelt('ibpdx:mixed_brick', 'ibpdx:mixed_blend', true)


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:clay_ball"
    },
    "B": {
      "item": "ibpdx:peat"
    },
    "C": {
      "item": "minecraft:bone_meal"
    }
  },
  "result": {
    "item": "ibpdx:mixed_blend",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:bedrock_crystal"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "thermal:copper_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_bedrock",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "ibpdx:bedrock_crystal"
    }
  },
  "result": {
    "item": "ibpdx:bedrock_shard",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "thermal:silver_ingot"
    },
    "C": {
      "item": "thermal:lead_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_duskstone",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:quartz_dark"
    },
    "B": {
      "item": "ibpdx:duskstone_ingot"
    },
    "C": {
      "item": "thermal:silver_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_black_quartz",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:ingot_steel"
    },
    "B": {
      "item": "ftbic:advanced_alloy"
    },
    "C": {
      "item": "ibpdx:duskstone_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_steel",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_steel_ingot"
    },
    "B": {
      "item": "ftbic:advanced_alloy"
    },
    "C": {
      "item": "tconstruct:rose_gold_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_empowered_steel",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:starmetal_ingot"
    },
    "B": {
      "item": "botania:manasteel_ingot"
    },
    "C": {
      "item": "astralsorcery:aquamarine"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_starmetal",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:stainless_steel_ingot"
    },
    "B": {
      "item": "mekanism:alloy_infused"
    },
    "C": {
      "item": "thermal:signalum_ingot"
    }
  },
  "result": {
    "item": "ibpdx:stainless_steel_casing",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_diamondium_crystal"
    },
    "B": {
      "item": "thermal:invar_ingot"
    },
    "C": {
      "item": "boss_tools:compressed_desh"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_empowered_diamond",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "ibpdx:organic_diode"
    },
    "B": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ibpdx:bioenriched_circuit",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DBD"
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "bloodmagic:firescribetool",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "B": {
      "item": "bloodmagic:reinforcedslate"
    },
    "C": {
      "item": "ibpdx:bloodshine_ingot"
    },
    "D": {
      "item": "bloodmagic:reagentlava"
    }
  },
  "result": {
    "item": "ibpdx:life_infused_cooler",
    "count": 8
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "B": {
      "item": "ibpdx:double_gear"
    },
    "C": {
      "item": "immersiveengineering:light_engineering"
    }
  },
  "result": {
    "item": "2x ibpdx:double_gearbox"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_steel_ingot"
    },
    "B": {
      "item": "ibpdx:power_gear"
    },
    "C": {
      "item": "immersiveengineering:light_engineering"
    }
  },
  "result": {
    "item": "2x ibpdx:power_gearbox"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:empowered_silver_ingot"
    },
    "B": {
      "item": "ibpdx:speed_gear"
    },
    "C": {
      "item": "immersiveengineering:light_engineering"
    }
  },
  "result": {
    "item": "2x ibpdx:speed_gearbox"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "B": {
      "item": "thermal:lumium_ingot"
    },
    "C": {
      "item": "thermal:signalum_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_refined_glowstone",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_ingot"
    },
    "B": {
      "item": "boss_tools:silicon_ingot"
    },
    "C": {
      "item": "thermal:signalum_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_enderium",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "draconicevolution:awakened_draconium_ingot"
    },
    "B": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "C": {
      "item": "draconicevolution:draconium_ingot"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_awakened",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "draconicevolution:draconium_ingot"
    },
    "B": {
      "item": "mysticalagradditions:dragon_scale"
    },
    "C": {
      "item": "draconicevolution:draconium_core"
    }
  },
  "result": {
    "item": "ibpdx:dragon_base"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "astralsorcery:infused_wood"
    },
    "B": {
      "item": "astralsorcery:colored_lens_growth"
    }
  },
  "result": {
    "item": "ibpdx:framed_growth_lens"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:leather"
    },
    "B": {
      "item": "astralsorcery:starmetal_ingot"
    },
    "C": {
      "item": "ibpdx:star_diamond"
    },
    "D": {
      "item": "ibpdx:framed_growth_lens"
    },
    "E": {
      "item": "ibpdx:star_pearl"
    }
  },
  "result": {
    "item": "ibpdx:stellar_wrapped_lens"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "astralsorcery:resonating_gem"
    },
    "B": {
      "item": "ibpdx:stellar_wrapped_lens"
    }
  },
  "result": {
    "item": "ibpdx:resonated_plated_growth_lens",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:elementium_ingot"
    },
    "B": {
      "item": "botania:mana_powder"
    },
    "C": {
      "item": "botania:pixie_dust"
    },
    "D": {
      "item": "botania:gaia_ingot"
    }
  },
  "result": {
    "item": "ibpdx:gaia_base"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:soul_sand"
    },
    "B": {
      "item": "minecraft:wither_skeleton_skull"
    },
    "C": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "D": {
      "item": "bloodmagic:reinforcedslate"
    }
  },
  "result": {
    "item": "ibpdx:wither_base"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "powah:charged_snowball"
    },
    "B": {
      "item": "mekanismadditions:purple_plastic"
    },
    "C": {
      "item": "mekanism:ultimate_control_circuit"
    }
  },
  "result": {
    "item": "ibpdx:circuit_shell",
    "count": 4
  }
})

event.shapeless(
  'tconstruct:seared_bricks',
  ['ibpdx:mixed_brick','minecraft:brick','minecraft:nether_brick','tconstruct:seared_brick']
)

event.shapeless(
  'tconstruct:seared_glass',
  ['tconstruct:seared_bricks','minecraft:glass']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CCC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "thermal:gold_plate"
    },
    "C": {
      "item": "minecraft:glass"
    }
  },
  "result": {
    "item": "pipez:item_pipe",
    "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CCC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "minecraft:glass"
    }
  },
  "result": {
    "item": "pipez:energy_pipe",
    "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CCC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "thermal:tin_plate"
    },
    "C": {
      "item": "minecraft:glass"
    }
  },
  "result": {
    "item": "pipez:fluid_pipe",
    "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "A A",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "tconstruct:seared_brick"
    }
  },
  "result": {
    "item": "tconstruct:smeltery_controller"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "A A",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "tconstruct:seared_brick"
    }
  },
  "result": {
    "item": "tconstruct:smeltery_controller"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:modularium"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_controller"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:modularium"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "tag": "forge:chests"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_item_port_items_input",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:modularium"
    },
    "B": {
      "item": "thermal:tin_ingot"
    },
    "C": {
      "item": "minecraft:bucket"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_fluid_port_fluids_input",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:modularium"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_energy_port_energy_input",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:modularium"
    },
    "B": {
      "item": "botania:mana_powder"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_mana_port_botania_mana_input",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_item_port_items_input"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_item_port_items_output"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_fluid_port_fluids_input"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_fluid_port_fluids_output"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_energy_port_energy_input"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_energy_port_energy_output"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_mana_port_botania_mana_input"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_mana_port_botania_mana_output"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_item_port_items_output"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_item_port_items_input"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_fluid_port_fluids_output"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_fluid_port_fluids_input"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_energy_port_energy_output"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_energy_port_energy_input"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "masterfulmachinery:generic_mana_port_botania_mana_output"
    }
  },
  "result": {
    "item": "masterfulmachinery:generic_mana_port_botania_mana_input"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "DCD",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ftbic:industrial_grade_metal"
    },
    "B": {
      "item": "ftbic:lv_cable"
    },
    "C": {
      "item": "ibpdx:circuit_base_t1"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "ftbic:electronic_circuit",
    "count": 1
  }
})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " CA",
      "CBC",
      "AC "
    ],
    "key": {
      "A": {
        "item": "powah:dielectric_paste"
      },
      "B": {
        "item": "minecraft:redstone"
      },
      "C": {
        "item": "thermal:iron_plate"
      }

    },
    "result": {
      "item": "powah:capacitor_basic_tiny",
      "count": 4
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " CA",
      "CBC",
      "AC "
    ],
    "key": {
      "A": {
        "item": "infused_crystals:redstonium_crystal"
      },
      "B": {
        "tag": "forge:wires/copper"
      },
      "C": {
        "item": "minecraft:glass"
      }

    },
    "result": {
      "item": "ftbic:fuse",
      "count": 16
    }
  })

    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " CA",
      "CBC",
      "AC "
    ],
    "key": {
      "A": {
        "item": "infused_crystals:redstonium_crystal"
      },
      "B": {
        "item": "ftbic:copper_wire"
      },
      "C": {
        "item": "minecraft:glass"
      }

    },
    "result": {
      "item": "ftbic:fuse",
      "count": 16
    }
  })
  
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A B",
      " DE",
      "DEC"
    ],
    "key": {
      "A": {
        "item": "immersiveengineering:drillhead_steel"
      },
      "B": {
        "item": "ftbic:electronic_circuit"
      },
      "C": {
        "item": "ftbic:copper_coil"
      },
      "D": {
        "item": "immersiveengineering:stick_aluminum"
      },
      "E": {
        "item": "thermal:tin_gear"
      }

    },
    "result": {
      "item": "thermal:flux_drill",
      "count": 1
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "DCD",
      "EBE"
    ],
    "key": {
      "A": {
        "item": "infused_crystals:diamondium_crystal"
      },
      "B": {
        "item": "immersiveengineering:drillhead_steel"
      },      
      "C": {
        "item": "ftbic:advanced_machine_block"
      },
      "D": {
        "item": "ftbic:copper_coil"
      },
      "E": {
        "item": "ftbic:electronic_circuit"
      }     
    },
    "result": {
      "item": "ftbic:quarry",
      "count": 1
    }
  })

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "eAe",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:hammer"
    },
    "B": {
      "item": "cyclic:mason_stone"
    },
    "C": {
      "item": "ftbic:machine_block"
    },
    "D": {
      "item": "ftbic:electronic_circuit"
    },
    "e": {
      "item": "minecraft:iron_block"
    }
  },
  "result": {
    "item": "ftbic:roller"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "DBD",
    "DCD"
  ],
  "key": {
    "A": {
      "item": "boss_tools:engine_fan"
    },
    "B": {
      "item": "ftbic:machine_block"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "minecraft:glass"
    }
  },
  "result": {
    "item": "ftbic:centrifuge"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "DBD",
    "DCD"
  ],
  "key": {
    "A": {
      "item": "boss_tools:engine_fan"
    },
    "B": {
      "item": "ftbic:machine_block"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "minecraft:glass"
    }
  },
  "result": {
    "item": "ftbic:centrifuge"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "DBD",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "infused_crystals:block_of_infused_lapisium"
    },
    "D": {
      "item": "minecraft:oak_sapling"
    }
  },
  "result": {
    "item": "cyclic:terra_glass",
    "count": 2
  }
})

event.shapeless(
  '2x ibpdx:pyrotheum_blend',
  ['infused_crystals:redstonium_crystal','minecraft:blaze_powder','thermal:niter_dust','ibpdx:bedrock_crystal']
)

event.shapeless(
  '2x ibpdx:cryotheum_blend',
  ['infused_crystals:redstonium_crystal','thermal:blizz_powder','thermal:niter_dust','boss_tools:ice_shard']
)

event.shapeless(
  '2x ibpdx:petrotheum_blend',
  ['infused_crystals:redstonium_crystal','thermal:basalz_powder','thermal:niter_dust','minecraft:obsidian']
)

event.shapeless(
  '2x ibpdx:aerotheum_blend',
  ['infused_crystals:redstonium_crystal','thermal:blitz_powder','thermal:niter_dust','quark:clear_shard']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "A A",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "boss_tools:compressed_desh"
    },
    "D": {
      "item": "refinedstorage:quartz_enriched_iron"
    }
  },
  "result": {
    "item": "boss_tools:golden_tank",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "A A",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "boss_tools:compressed_silicon"
    },
    "D": {
      "item": "ibpdx:stainless_steel_ingot"
    }
  },
  "result": {
    "item": "boss_tools:diamond_tank",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "ABA",
    "DAD"
  ],
  "key": {
    "D": {
      "item": "ibpdx:stainless_steel_ingot"
    },
    "B": {
      "item": "immersiveengineering:heavy_engineering"
    },
    "A": {
      "item": "thermal:signalum_glass"
    }
  },
  "result": {
    "item": "mekanism:steel_casing",
    "count": 2
  }
})  

event.shapeless(
  '9x ibpdx:stainless_steel_ingot',
  ['ibpdx:stainless_steel_block']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "DCD",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ftbic:advanced_alloy"
    },
    "B": {
      "item": "ftbic:hv_cable"
    },
    "C": {
      "item": "ibpdx:circuit_base_t2"
    },
    "D": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "ftbic:advanced_circuit",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "DCD",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "chemlib:ingot_iridium"
    },
    "B": {
      "item": "ftbic:ev_cable"
    },
    "C": {
      "item": "ibpdx:circuit_base_t3"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "ftbic:iridium_circuit",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "A A",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:stainless_steel_ingot"
    },
    "B": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "mekanism:basic_chemical_tank",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "DAD",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "ibpdx:bedrock_crystal"
    },
    "D": {
      "item": "powah:dielectric_paste"
    }
  },
  "result": {
    "item": "powah:dielectric_rod",
    "count": 12
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DDD",
    "AAA",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "ibpdx:bedrock_crystal"
    },
    "D": {
      "item": "powah:dielectric_paste"
    }
  },
  "result": {
    "item": "powah:dielectric_rod_horizontal",
    "count": 12
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "DAD",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "minecraft:bucket"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "minecraft:brick"
    },
    "E": {
      "item": "powah:capacitor_basic"
    }
  },
  "result": {
    "item": "industrialforegoing:sewer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "minecraft:furnace"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "minecraft:brick"
    },
    "E": {
      "item": "powah:capacitor_basic"
    },
    "F": {
      "item": "minecraft:piston"
    }
  },
  "result": {
    "item": "industrialforegoing:sewage_composter",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CCC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "minecraft:comparator"
    },
    "E": {
      "item": "powah:capacitor_basic"
    },
    "F": {
      "item": "minecraft:observer"
    }
  },
  "result": {
    "item": "industrialforegoing:mob_detector",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "immersiveengineering:drillhead_steel"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "thermal:iron_gear"
    },
    "E": {
      "item": "powah:capacitor_basic"
    },
    "F": {
      "item": "thermal:copper_ingot"
    }
  },
  "result": {
    "item": "industrialforegoing:block_breaker",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CCC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "minecraft:brick"
    },
    "E": {
      "item": "powah:capacitor_basic"
    },
    "F": {
      "item": "minecraft:dispenser"
    }
  },
  "result": {
    "item": "industrialforegoing:block_placer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CDC",
    "FAB",
    "CEC"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "minecraft:blue_dye"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "minecraft:red_dye"
    },
    "E": {
      "item": "powah:capacitor_basic"
    },
    "F": {
      "item": "minecraft:lime_dye"
    }
  },
  "result": {
    "item": "industrialforegoing:dye_mixer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "B": {
      "item": "minecraft:bucket"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:shears"
    }
  },
  "result": {
    "item": "industrialforegoing:animal_rancher",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "minecraft:iron_hoe"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:iron_axe"
    }
  },
  "result": {
    "item": "industrialforegoing:plant_gatherer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "minecraft:flower_pot"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:dispenser"
    }
  },
  "result": {
    "item": "industrialforegoing:plant_sower",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "industrialforegoing:fertilizer"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:piston"
    }
  },
  "result": {
    "item": "industrialforegoing:plant_fertilizer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "B": {
      "item": "xreliquary:fertile_essence"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:golden_carrot"
    }
  },
  "result": {
    "item": "industrialforegoing:animal_feeder",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "B": {
      "item": "astralsorcery:infused_glass"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:electrum_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:book"
    }
  },
  "result": {
    "item": "industrialforegoing:enchantment_factory",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAD",
    "CEC"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "B": {
      "item": "minecraft:ender_pearl"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "minecraft:enchanted_book"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:book"
    }
  },
  "result": {
    "item": "industrialforegoing:enchantment_sorter",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "B": {
      "item": "minecraft:anvil"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:electrum_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:experience_bottle"
    }
  },
  "result": {
    "item": "industrialforegoing:enchantment_applicator",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CFC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "F": {
      "item": "minecraft:water_bucket"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    }
  },
  "result": {
    "item": "industrialforegoing:fluid_placer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CFC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "F": {
      "item": "minecraft:bucket"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    }
  },
  "result": {
    "item": "industrialforegoing:fluid_collector",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "B": {
      "item": "minecraft:bucket"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:campfire"
    }
  },
  "result": {
    "item": "industrialforegoing:sludge_refiner",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "B": {
      "item": "minecraft:bucket"
    },
    "C": {
      "item": "boss_tools:compressed_steel"
    },
    "D": {
      "item": "thermal:invar_gear"
    },
    "E": {
      "item": "powah:capacitor_blazing"
    },
    "F": {
      "item": "minecraft:campfire"
    }
  },
  "result": {
    "item": "industrialforegoing:sludge_refiner",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "minecraft:water_bucket"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_life"
    }
  },
  "result": {
    "item": "industrialforegoing:hydroponic_bed",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mekanism:hdpe_sheet"
    },
    "B": {
      "item": "mekanismgenerators:reactor_glass"
    },
    "C": {
      "item": "mekanism:steel_casing"
    }
  },
  "result": {
    "item": "industrialforegoing:machine_frame_advanced"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "minecraft:water_bucket"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_life"
    }
  },
  "result": {
    "item": "industrialforegoing:hydroponic_bed",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "miniutilities:iron_spikes"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_power"
    }
  },
  "result": {
    "item": "industrialforegoing:mob_crusher",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "redstone_arsenal:flux_sword"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_power"
    }
  },
  "result": {
    "item": "industrialforegoing:mob_slaughter_factory",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "minecraft:clock"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_life"
    }
  },
  "result": {
    "item": "industrialforegoing:animal_baby_separator",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "astralsorcery:infused_glass"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:lumium_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_speed"
    }
  },
  "result": {
    "item": "industrialforegoing:enchantment_extractor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "ibpdx:crystal_of_inertion"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "darkutils:rune_slowness"
    }
  },
  "result": {
    "item": "industrialforegoing:stasis_chamber",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "thermal:device_rock_gen"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_inertion"
    }
  },
  "result": {
    "item": "industrialforegoing:material_stonework_factory",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "ibpdx:crystal_of_speed"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_life"
    }
  },
  "result": {
    "item": "industrialforegoing:mechanical_dirt",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "BBB",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:treated_wood_horizontal"
    },
    "B": {
      "item": "cyclic:mason_stone"
    },
    "C": {
      "item": "thermal:iron_plate"
    }
  },
  "result": {
    "item": "industrialforegoing:machine_frame_pity"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAD",
    "CBC"
  ],
  "key": {
    "A": {
      "item": "ftbic:iridium_neutron_reflector"
    },
    "B": {
      "item": "mekanism:elite_control_circuit"
    },
    "C": {
      "item": "ibpdx:stainless_steel_ingot"
    },
    "D": {
      "item": "thermal:fire_tnt"
    },
    "F": {
      "item": "thermal:ice_tnt"
    }
  },
  "result": {
    "item": "mekanism:rotary_condensentrator",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "BAB",
    "CBC"
  ],
  "key": {
    "A": {
      "item": "mekanism:pellet_polonium"
    },
    "B": {
      "item": "ibpdx:crystal_of_inertion"
    },
    "C": {
      "item": "mekanism:hdpe_sheet"
    }
  },
  "result": {
    "item": "mekanism:sps_casing",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "BAB",
    "CBC"
  ],
  "key": {
    "C": {
      "item": "draconicevolution:draconium_ingot"
    },
    "B": {
      "item": "ibpdx:empowered_gold_ingot"
    },
    "A": {
      "item": "ibpdx:crystal_of_speed"
    }
  },
  "result": {
    "item": "draconicevolution:draconium_core",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ADA",
    "ABA"
  ],
  "key": {
    "A": {
      "tag": "forge:ingots/lead"
    },
    "B": {
      "item": "ibpdx:crystal_of_power"
    },
    "D": {
      "item": "mekanism:basic_chemical_tank"
    }
  },
  "result": {
    "item": "mekanismgenerators:fission_fuel_assembly"
  }
})

event.shapeless(
  '9x minecraft:iron_ingot',
  ['minecraft:iron_block']
)

event.shapeless(
  '9x minecraft:gold_ingot',
  ['minecraft:gold_block']
)

event.shapeless(
  '9x thermal:copper_ingot',
  ['thermal:copper_block']
)

event.shapeless(
  '9x thermal:tin_ingot',
  ['thermal:tin_block']
)

event.shapeless(
  '9x thermal:lead_ingot',
  ['thermal:lead_block']
)

event.shapeless(
  '9x thermal:silver_ingot',
  ['thermal:silver_block']
)

event.shapeless(
  '9x immersiveengineering:ingot_aluminum',
  ['immersiveengineering:storage_aluminum']
)

event.shapeless(
  '9x infused_crystals:redstonium_crystal',
  ['infused_crystals:block_of_redstonium']
)

event.shapeless(
  '9x infused_crystals:ironium_crystal',
  ['infused_crystals:block_of_ironium']
)

event.shapeless(
  '9x minecraft:redstone',
  ['minecraft:redstone_block']
)

event.shapeless(
  '9x minecraft:lapis_lazuli',
  ['minecraft:lapis_block']
)

event.shapeless(
  '9x minecraft:diamond',
  ['minecraft:diamond_block']
)

event.shapeless(
  '9x minecraft:emerald',
  ['minecraft:emerald_block']
)

event.shapeless(
  '9x thermal:nickel_ingot',
  ['thermal:nickel_block']
)

event.shapeless(
  '9x extendedcrafting:black_iron_ingot',
  ['extendedcrafting:black_iron_block']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "infused_crystals:block_of_redstonium"
  }
})

event.shapeless(
  'immersiveengineering:ingot_steel',
  ['boss_tools:steel_ingot']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:ironium_crystal"
    }
  },
  "result": {
    "item": "infused_crystals:block_of_ironium"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_nugget"
    }
  },
  "result": {
    "item": "minecraft:iron_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "minecraft:gold_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "thermal:copper_nugget"
    }
  },
  "result": {
    "item": "thermal:copper_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "thermal:tin_nugget"
    }
  },
  "result": {
    "item": "thermal:tin_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "thermal:lead_nugget"
    }
  },
  "result": {
    "item": "thermal:lead_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "thermal:silver_nugget"
    }
  },
  "result": {
    "item": "thermal:silver_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:inferium_essence"
    },
    "B": {
      "item": "minecraft:glass_bottle"
    }
  },
  "result": {
    "item": "minecraft:experience_bottle"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "A A",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:diamond_essence"
    }
  },
  "result": {
    "item": "minecraft:diamond"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "A A",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:emerald_essence"
    }
  },
  "result": {
    "item": "minecraft:emerald"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "A A",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:lapis_lazuli_essence"
    }
  },
  "result": {
    "item": "minecraft:lapis_lazuli",
    "count": 12
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "ibpdx:iron_casing"
    }
  },
  "result": {
    "item": "immersiveengineering:rs_engineering",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:coal"
    },
    "B": {
      "item": "minecraft:black_stained_glass"
    },
    "C": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": "dankstorage:dank_1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:advanced_alloy"
    },
    "B": {
      "item": "ibpdx:empowered_gold_ingot"
    },
    "C": {
      "item": "rftoolsstorage:storage_scanner"
    }
  },
  "result": {
    "item": "prettypipes:item_terminal",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAB",
    "ACB",
    "BBC"
  ],
  "key": {
    "A": {
      "item": "minecraft:slime_ball"
    },
    "B": {
      "item": "minecraft:leather"
    },
    "C": {
      "item": "ftbic:carbon_plate"
    }
  },
  "result": {
    "item": "cyclic:glove_climb",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CCC",
    "DBD",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "powah:furnator_starter"
    },
    "B": {
      "item": "immersiveengineering:metal_barrel"
    },
    "C": {
      "item": "immersiveengineering:chute_iron"
    },
    "D": {
      "item": "immersiveengineering:sheetmetal_colored_red"
    }
  },
  "result": {
    "item": "littlelogistics:tug",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CCC",
    "DBD",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "powah:furnator_starter"
    },
    "B": {
      "item": "immersiveengineering:metal_barrel"
    },
    "C": {
      "item": "powah:capacitor_hardened"
    },
    "D": {
      "item": "immersiveengineering:sheetmetal_colored_red"
    }
  },
  "result": {
    "item": "littlelogistics:energy_tug",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CCC",
    "CBC",
    "CAC"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sorter"
    },
    "B": {
      "item": "ftbic:electronic_circuit"
    },
    "C": {
      "item": "immersiveengineering:sheetmetal_iron"
    }
  },
  "result": {
    "item": "storagedrawers:controller",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:dirt"
    },
    "B": {
      "tag": "forge:sand"
    },
    "C": {
      "item": "pamhc2foodcore:freshwateritem"
    }
  },
  "result": {
    "item": "ibpdx:bog_earth",
    "count": 6
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BBB"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/iron"
    },
    "B": {
      "item": "minecraft:stone"
    },
    "C": {
      "item": "ftbic:copper_coil"
    }
  },
  "result": {
    "item": "ibpdx:cool_cooking_plate"
  }
})

event.shapeless(
  'pamhc2foodcore:chocolateicecreamitem',
  ['pamhc2foodcore:icecreamitem','pamhc2foodcore:cocoapowderitem']
)

event.shapeless(
  'pamhc2foodcore:caramelicecreamitem',
  ['pamhc2foodcore:icecreamitem','pamhc2foodcore:caramelitem']
)

event.shapeless(
  'pamhc2foodcore:basiccheeseburgeritem',
  ['pamhc2foodcore:basichamburgeritem','pamhc2foodcore:cheeseitem','thermal:tomato_sauce']
)

event.shapeless(
  'pamhc2foodcore:baconcheeseburgeritem',
  ['pamhc2foodcore:basiccheeseburgeritem','minecraft:cooked_porkchop']
)

event.shapeless(
  'pamhc2foodcore:melonjellytoastitem',
  ['pamhc2foodcore:melonjellyitem','pamhc2foodcore:toastitem']
)

event.shapeless(
  'pamhc2foodcore:applejellytoastitem',
  ['pamhc2foodcore:applejellyitem','pamhc2foodcore:toastitem']
)

event.shapeless(
  'pamhc2foodcore:sweetberryjellytoastitem',
  ['pamhc2foodcore:sweetberryjellyitem','pamhc2foodcore:toastitem']
)

event.shapeless(
  'pamhc2foodcore:cookiesandmilkitem',
  ['pamhc2foodcore:freshmilkitem','minecraft:cookie']
)

event.shapeless(
  'pamhc2foodcore:butteredbakedpotatoitem',
  ['minecraft:baked_potato','pamhc2foodcore:butteritem']
)

event.shapeless(
  'pamhc2foodcore:caramelappleitem',
  ['minecraft:apple','pamhc2foodcore:caramelitem']
)

event.shapeless(
  'pamhc2foodcore:chickendinneritem',
  ['pamhc2foodcore:friedchickenitem','pamhc2foodcore:mashedpotatoesitem','minecraft:carrot']
)

event.shapeless(
  'pamhc2foodcore:butteritem',
  ['pamhc2foodcore:freshmilkitem']
)

event.shapeless(
  'pamhc2foodcore:batteritem',
  ['pamhc2foodcore:freshmilkitem','pamhc2foodcore:flouritem', 'minecraft:egg']
)

event.shapeless(
  'pamhc2foodcore:batteritem',
  ['pamhc2foodcore:freshmilkitem','pamhc2foodcore:flouritem', 'environmental:duck_egg']
)

event.shapeless(
  'waystones:waystone',
  ['astralsorcery:celestial_gateway']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "tag": "forge:barrels/wooden"
    },
    "B": {
      "item": "thermal:copper_ingot"
    }
  },
  "result": {
    "item": "metalbarrels:copper_barrel"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "tag": "minecraft:planks"
    },
    "B": {
      "item": "thermal:copper_ingot"
    }
  },
  "result": {
    "item": "metalbarrels:wood_to_copper"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "metalbarrels:copper_barrel"
    },
    "B": {
      "item": "thermal:iron_plate"
    }
  },
  "result": {
    "item": "metalbarrels:iron_barrel"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "thermal:copper_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    }
  },
  "result": {
    "item": "metalbarrels:copper_to_iron"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "metalbarrels:iron_barrel"
    },
    "B": {
      "item": "powah:steel_energized"
    }
  },
  "result": {
    "item": "metalbarrels:gold_barrel"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "powah:steel_energized"
    }
  },
  "result": {
    "item": "metalbarrels:iron_to_gold"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "metalbarrels:gold_barrel"
    },
    "B": {
      "item": "infused_crystals:infused_diamondium_crystal"
    }
  },
  "result": {
    "item": "metalbarrels:diamond_barrel"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "powah:steel_energized"
    },
    "B": {
      "item": "infused_crystals:infused_diamondium_crystal"
    }
  },
  "result": {
    "item": "metalbarrels:gold_to_diamond"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "tag": "forge:chests"
    },
    "B": {
      "item": "thermal:copper_ingot"
    }
  },
  "result": {
    "item": "ironchest:copper_chest"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "ironchest:copper_chest"
    },
    "B": {
      "item": "thermal:iron_plate"
    }
  },
  "result": {
    "item": "ironchest:iron_chest"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "ironchest:iron_chest"
    },
    "B": {
      "item": "powah:steel_energized"
    }
  },
  "result": {
    "item": "ironchest:gold_chest"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ironchest:gold_chest"
    },
    "B": {
      "item": "infused_crystals:infused_diamondium_crystal"
    }
  },
  "result": {
    "item": "ironchest:diamond_chest"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BCB",
    "CAC",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "botania:mana_string"
    },
    "C": {
      "item": "minecraft:leather"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:upgrade_base"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B",
    "C"
  ],
  "key": {
    "C": {
      "item": "thermal:flux_magnet"
    },
    "B": {
      "item": "sophisticatedbackpacks:pickup_upgrade"
    },
    "A": {
      "item": "minecraft:ender_pearl"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:magnet_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B",
    "C"
  ],
  "key": {
    "C": {
      "item": "thermal:flux_magnet"
    },
    "B": {
      "item": "sophisticatedbackpacks:advanced_pickup_upgrade"
    },
    "A": {
      "item": "minecraft:ender_pearl"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_magnet_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:magnet_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_magnet_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:pickup_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_pickup_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:smoking_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:auto_smoking_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:deposit_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_deposit_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:filter_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_filter_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:void_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_void_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:feeding_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_feeding_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:restock_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_restock_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:tool_swapper_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_tool_swapper_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:pump_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_pump_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " D "
  ],
  "key": {
    "C": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "sophisticatedbackpacks:compacting_upgrade"
    },
    "A": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "minecraft:netherite_scrap"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:advanced_compacting_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    " A ",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "ftbic:antimatter"
    }
  },
  "result": {
    "item": "chemlib:ingot_iridium"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " B ",
    "BAB",
    " B "
  ],
  "key": {
    "A": {
      "item": "ibpdx:iron_casing"
    },
    "B": {
      "item": "immersiveengineering:component_iron"
    }
  },
  "result": {
    "item": "6x immersiveengineering:light_engineering"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "DED",
    "CAC"
  ],
  "key": {
    "A": {
      "item": "ftbic:machine_block"
    },
    "B": {
      "item": "ftbic:neutron_reflector"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "ftbic:lv_cable"
    },
    "E": {
      "item": "boss_tools:compressed_desh"
    }    
  },
  "result": {
    "item": "ftbic:lv_solar_panel"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "bloodmagic:dungeon_stone"
    },
    "B": {
      "item": "bloodmagic:infusedslate"
    },
    "C": {
      "type": "bloodmagic:bloodorb",
      "orb_tier": 1
    },
    "D": {
      "item": "tconstruct:soulsteel_ingot"
    },
    "E": {
      "item": "bloodmagic:infusedslate"
    }
  },
  "result": {
    "item": "bloodmagic:alchemicalreactionchamber"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:stick_iron"
    },
    "B": {
      "item": "minecraft:chest"
    },
    "D": {
      "item": "immersiveengineering:sheetmetal_colored_red"
    }
  },
  "result": {
    "item": "littlelogistics:barge",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:stick_iron"
    },
    "B": {
      "item": "mekanism:basic_fluid_tank"
    },
    "D": {
      "item": "immersiveengineering:sheetmetal_colored_red"
    }
  },
  "result": {
    "item": "littlelogistics:fluid_barge",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:stick_iron"
    },
    "B": {
      "item": "thermal:junk_net"
    },
    "D": {
      "item": "immersiveengineering:sheetmetal_colored_red"
    }
  },
  "result": {
    "item": "littlelogistics:fishing_barge",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:stick_iron"
    },
    "B": {
      "item": "botania:ender_eye_block"
    },
    "D": {
      "item": "immersiveengineering:sheetmetal_colored_purple"
    }
  },
  "result": {
    "item": "littlelogistics:chunk_loader_barge",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "EFE",
    "CDC",
    "EFE"
  ],
  "key": {
    "C": {
      "item": "thermal:invar_ingot"
    },
    "D": {
      "item": "mekanism:basic_fluid_tank"
    },
    "E": {
      "item": "boss_tools:compressed_steel"
    },
    "F": {
      "item": "ibpdx:empowered_gold_ingot"
    }
  },
  "result": {
    "item": "boss_tools:fuel_refinery"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "B": {
      "item": "ftbic:advanced_circuit"
    },
    "C": {
      "item": "ibpdx:diamond_electron_tube"
    },
    "D": {
      "item": "ibpdx:iron_casing"
    }
  },
  "result": {
    "item": "xnet:controller"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:stone_bricks"
    },
    "B": {
      "item": "ftbic:advanced_circuit"
    },
    "C": {
      "item": "ibpdx:blaze_electron_tube"
    },
    "D": {
      "item": "ibpdx:iron_casing"
    }
  },
  "result": {
    "item": "rftoolsbuilder:builder"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "pipez:item_pipe"
    },
    "B": {
      "item": "ftbic:advanced_circuit"
    },
    "C": {
      "item": "ibpdx:blaze_electron_tube"
    },
    "D": {
      "item": "ibpdx:iron_casing"
    }
  },
  "result": {
    "item": "xnet:router"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "B": {
      "item": "ftbic:electronic_circuit"
    },
    "C": {
      "item": "ibpdx:emerald_electron_tube"
    },
    "D": {
      "item": "ibpdx:iron_casing"
    }
  },
  "result": {
    "item": "xnet:redstone_proxy"
  }
})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "A B",
      " DE",
      "DEC"
    ],
    "key": {
      "A": {
        "item": "immersiveengineering:sawblade"
      },
      "B": {
        "item": "ftbic:electronic_circuit"
      },
      "C": {
        "item": "ftbic:copper_coil"
      },
      "D": {
        "item": "immersiveengineering:stick_aluminum"
      },
      "E": {
        "item": "thermal:tin_gear"
      }

    },
    "result": {
      "item": "thermal:flux_saw",
      "count": 1
    }
  })

  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CAC",
    "DBD",
    "CAC"
  ],
  "key": {
    "A": {
      "item": "mekanism:energy_tablet"
    },
    "B": {
      "item": "mekanism:steel_casing"
    },
    "C": {
      "item": "ibpdx:crystal_of_power"
    },
    "D": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "mekanism:basic_energy_cube"
  }
})

  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AC",
    " BD",
    "B  "
  ],
  "key": {
    "A": {
      "item": "botania:manasteel_ingot"
    },
    "B": {
      "item": "astralsorcery:marble_raw"
    },
    "C": {
      "item": "minecraft:ender_pearl"
    },
    "D": {
      "item": "astralsorcery:aquamarine"
    }
  },
  "result": {
    "item": "astralsorcery:wand"
  }
})

event.shapeless(
  'quark:white_crystal',
  ['minecraft:diamond', 'minecraft:white_dye']
)

event.shapeless(
  'quark:red_crystal',
  ['minecraft:diamond', 'minecraft:red_dye']
)

event.shapeless(
  'quark:orange_crystal',
  ['minecraft:diamond', 'minecraft:orange_dye']
)

event.shapeless(
  'quark:yellow_crystal',
  ['minecraft:diamond', 'minecraft:yellow_dye']
)

event.shapeless(
  'quark:green_crystal',
  ['minecraft:diamond', 'minecraft:green_dye']
)

event.shapeless(
  'quark:blue_crystal',
  ['minecraft:diamond', 'minecraft:light_blue_dye']
)

event.shapeless(
  'quark:indigo_crystal',
  ['minecraft:diamond', 'minecraft:blue_dye']
)

event.shapeless(
  'quark:violet_crystal',
  ['minecraft:diamond', 'minecraft:purple_dye']
)

event.shapeless(
  'quark:black_crystal',
  ['minecraft:diamond', 'minecraft:black_dye']
)
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "DBD",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "experience_bottle"
    },
    "B": {
      "item": "thermal:xp_crystal"
    },
    "D": {
      "item": "quark:green_crystal_cluster"
    }
  },
  "result": {
    "item": "cyclic:experience_pylon",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "CBC",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "mekanism:teleportation_core"
    },
    "B": {
      "item": "rftoolsbuilder:shape_card_def"
    },
    "C": {
      "item": "thermal:flux_drill"
    },
    "D": {
      "item": "quark:blue_crystal_cluster"
    }
  },
  "result": {
    "item": "rftoolsbuilder:shape_card_quarry",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "A A",
    " A "
  ],
  "key": {
    "A": {
      "item": "ibpdx:terra_glass"
    }
  },
  "result": {
    "item": "ibpdx:empty_fuel_cell",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:white_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:white_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:orange_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:orange_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:magenta_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:magenta_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:light_blue_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:light_blue_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:yellow_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:yellow_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:lime_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:lime_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:pink_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:pink_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:gray_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:gray_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:light_gray_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:light_gray_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:cyan_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:cyan_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:purple_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:purple_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:blue_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:blue_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:brown_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:brown_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:green_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:green_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:red_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:red_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "minecraft:black_dye"
    }
  },
  "result": {
    "item": "mekanismadditions:black_plastic",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DCD",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_ingot"
    },
    "B": {
      "item": "refinedstorage:wireless_transmitter"
    },
    "C": {
      "item": "thermal:machine_frame"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "xnet:wireless_router"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ECD",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:advanced_circuit"
    },
    "B": {
      "item": "chemlib:ingot_iridium"
    },
    "C": {
      "item": "pipez:energy_pipe"
    },
    "D": {
      "item": "pipez:fluid_pipe"
    },
    "E": {
      "item": "pipez:item_pipe"
    }
  },
  "result": {
    "item": "pipez:universal_pipe",
    "count": 16
  }
})
  
event.shapeless(
  'ibpdx:space_survival_kit',
  ['boss_tools:rocket_t1','ibpdx:coordinate_data_module','boss_tools:oxygen_tank','boss_tools:fuel_bucket','boss_tools:alien_spawn_egg']
)

event.shapeless(
  'ibpdx:space_survival_kit',
  ['boss_tools:rocket_t1','ibpdx:coordinate_data_module','boss_tools:oxygen_tank','thermal:refined_fuel_bucket','boss_tools:alien_spawn_egg']
)

event.shapeless(
  'ibpdx:spirit_charge',
  ['ibpdx:small_spirit_charge','ibpdx:small_spirit_charge','ibpdx:small_spirit_charge','ibpdx:small_spirit_charge']
)

event.shapeless(
  '8x ibpdx:small_spirit_charge',
  ['ibpdx:spirit_charge']
)

event.shapeless(
  'ibpdx:unknown_disc_2',
  ['ibpdx:unknown_disc','ibpdx:unknown_disc']
)

event.shapeless(
  'ibpdx:unknown_disc_3',
  ['ibpdx:unknown_disc_2','ibpdx:unknown_disc_2']
)

event.shapeless(
  'ibpdx:unknown_disc_4',
  ['ibpdx:unknown_disc_3','ibpdx:unknown_disc_3']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "  A",
    " C ",
    "C  "
  ],
  "key": {
    "A": {
      "item": "mekanism:teleportation_core"
    },
    "C": {
      "item": "mekanism:ingot_refined_obsidian"
    }
  },
  "result": {
    "item": "travel_anchors:travel_staff",
    "count": 1
  }
})

event.shapeless(
  'miniutilities:unstable_ingot',
  ['ibpdx:empowered_lead_ingot','ftbic:antimatter']
)

event.shapeless(
  'waystones:warp_dust',
  ['minecraft:ender_pearl','betterendforge:crystal_shards']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "EDC",
    " AB",
    "  A"
  ],
  "key": {
    "A": {
      "item": "botania:livingwood"
    },
    "B": {
      "item": "minecraft:tnt"
    },
    "C": {
      "item": "botania:mana_diamond"
    },
    "D": {
      "item": "botania:mana_pearl"
    },
    "E": {
      "item": "botania:redstone_spreader"
    }
  },
  "result": {
    "item": "botania:mana_gun"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "BAB",
    "CBC"
  ],
  "key": {
    "A": {
      "item": "thermal:electrum_plate"
    },
    "B": {
      "item": "immersiveengineering:component_steel"
    },
    "C": {
      "item": "immersiveengineering:sheetmetal_steel"
    }
  },
  "result": {
    "item": "immersiveengineering:heavy_engineering",
    "count": 6
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "DCD",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "minecraft:lava_bucket"
    },
    "B": {
      "item": "immersiveengineering:wire_copper"
    },
    "C": {
      "item": "ibpdx:iron_casing"
    },
    "D": {
      "item": "mekanism:basic_fluid_tank"
    }
  },
  "result": {
    "item": "cyclic:melter",
    "count": 1
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:manasteel_ingot"
    },
    "B": {
      "item": "astralsorcery:aquamarine"
    },
    "C": {
      "item": "botania:mana_powder"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_manasteel",
    "count": 4
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:terrasteel_ingot"
    },
    "B": {
      "item": "bloodmagic:blankslate"
    },
    "C": {
      "item": "botania:pixie_dust"
    }
  },
  "result": {
    "item": "ibpdx:blockcasing_terrasteel",
    "count": 4
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "BBB",
    "BBB"
  ],
  "key": {
    "B": {
      "item": "ibpdx:starmetal_nugget"
    }
  },
  "result": {
    "item": "astralsorcery:starmetal_ingot"
  }
})
event.shapeless(
  'ibpdx:industrial_sandwich',
  ['immersiveengineering:plate_steel','immersiveengineering:plate_aluminum','immersiveengineering:plate_steel']
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "A A",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ftbic:industrial_grade_metal"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "boss_tools:iron_tank"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "B": {
      "tag": "forge:ingots/steel"
    },
    "C": {
      "item": "ibpdx:iron_casing"
    }
  },
  "result": {
    "item": "mekanism:superheating_element"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "minecraft:cobblestone"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon0"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "minecraft:lapis_lazuli"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "minecraft:bone_meal"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon2"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon3"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "powah:crystal_blazing"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon4"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon5"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "ibpdx:empowered_steel_ingot"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon6"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "ibpdx:empowered_gold_ingot"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon7"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "ibpdx:quartz_clump"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon8"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "ibpdx:diamond_clump"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon9"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "ibpdx:diamond_shard"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon10"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "ibpdx:emerald_shard"
    }
  },
  "result": {
    "item": "industrialforegoing:range_addon11"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " C ",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "infused_crystals:coalium_crystal"
    },
    "C": {
      "item": "ibpdx:power_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:efficiency_addon_1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " C ",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "infused_crystals:infused_coalium_crystal"
    },
    "C": {
      "item": "ibpdx:power_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:efficiency_addon_2"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " C ",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "infused_crystals:coalium_crystal"
    },
    "C": {
      "item": "ibpdx:double_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:processing_addon_1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " C ",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "infused_crystals:infused_coalium_crystal"
    },
    "C": {
      "item": "ibpdx:double_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:processing_addon_2"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " C ",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "infused_crystals:coalium_crystal"
    },
    "C": {
      "item": "ibpdx:speed_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:speed_addon_1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " C ",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "ibpdx:addon_base"
    },
    "B": {
      "item": "infused_crystals:infused_coalium_crystal"
    },
    "C": {
      "item": "ibpdx:speed_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:speed_addon_2"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:glass"
    },
    "B": {
      "item": "thermal:lead_nugget"
    }
  },
  "result": {
    "item": "ibpdx:space_glass",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    " C "
  ],
  "key": {
    "A": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "tconstruct:manyullyn_ingot"
    },
    "C": {
      "item": "ibpdx:bedrock_crystal"
    }
  },
  "result": {
    "item": "ibpdx:duskstone_pickaxe"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " C "
  ],
  "key": {
    "A": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "tconstruct:manyullyn_ingot"
    },
    "C": {
      "item": "ibpdx:bedrock_crystal"
    }
  },
  "result": {
    "item": "ibpdx:duskstone_shovel"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BAB",
    " C "
  ],
  "key": {
    "A": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "tconstruct:manyullyn_ingot"
    },
    "C": {
      "item": "ibpdx:bedrock_crystal"
    }
  },
  "result": {
    "item": "ibpdx:duskstone_sword"
  }
})
  
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAB",
    "ACB",
    " C "
  ],
  "key": {
    "A": {
      "item": "ibpdx:duskstone_ingot"
    },
    "B": {
      "item": "tconstruct:manyullyn_ingot"
    },
    "C": {
      "item": "ibpdx:bedrock_crystal"
    }
  },
  "result": {
    "item": "ibpdx:duskstone_axe"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "A A",
    "AAA"
  ],
  "key": {
    "A": {
      "tag": "minecraft:planks"
    }
  },
  "result": {
    "item": "minecraft:chest"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "CEC",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:bucket"
    },
    "B": {
      "item": "industrialforegoing:plastic"
    },
    "E": {
      "item": "minecraft:ender_pearl"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "industrialforegoing:simple_black_hole_tank"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "CEC",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:chest"
    },
    "B": {
      "item": "industrialforegoing:plastic"
    },
    "E": {
      "item": "minecraft:ender_pearl"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "industrialforegoing:simple_black_hole_unit"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "CEC",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:bucket"
    },
    "B": {
      "item": "industrialforegoing:plastic"
    },
    "E": {
      "item": "minecraft:ender_pearl"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "industrialforegoing:advanced_black_hole_tank"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "CEC",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:chest"
    },
    "B": {
      "item": "industrialforegoing:plastic"
    },
    "E": {
      "item": "minecraft:ender_pearl"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "industrialforegoing:advanced_black_hole_unit"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "CEC",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:bucket"
    },
    "B": {
      "item": "industrialforegoing:plastic"
    },
    "E": {
      "item": "botania:black_hole_talisman"
    },
    "D": {
      "item": "industrialforegoing:advanced_black_hole_unit"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "industrialforegoing:supreme_black_hole_unit"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BBB",
    "CEC",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:chest"
    },
    "B": {
      "item": "industrialforegoing:plastic"
    },
    "E": {
      "item": "botania:black_hole_talisman"
    },
    "D": {
      "item": "industrialforegoing:advanced_black_hole_tank"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "industrialforegoing:supreme_black_hole_tank"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "CEC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:blaze_powder"
    },
    "C": {
      "item": "draconicevolution:draconium_ingot"
    },
    "E": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "draconicevolution:dislocator"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "AEA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:moon_glowstone_ore"
    },
    "C": {
      "item": "quark:indigo_crystal_cluster"
    },
    "E": {
      "item": "ftbic:antimatter"
    }
  },
  "result": {
    "item": "ibpdx:azurine_moon_stone",
      "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "AEA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:moon_glowstone_ore"
    },
    "C": {
      "item": "quark:blue_crystal_cluster"
    },
    "E": {
      "item": "ftbic:antimatter"
    }
  },
  "result": {
    "item": "ibpdx:ultramarine_moon_stone",
      "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "AEA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:moon_glowstone_ore"
    },
    "C": {
      "item": "quark:red_crystal_cluster"
    },
    "E": {
      "item": "ftbic:antimatter"
    }
  },
  "result": {
    "item": "ibpdx:carmine_moon_stone",
      "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "AEA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:moon_glowstone_ore"
    },
    "C": {
      "item": "quark:green_crystal_cluster"
    },
    "E": {
      "item": "ftbic:antimatter"
    }
  },
  "result": {
    "item": "ibpdx:verdant_moon_stone",
      "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "AEA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:moon_glowstone_ore"
    },
    "C": {
      "item": "quark:black_crystal_cluster"
    },
    "E": {
      "item": "ftbic:antimatter"
    }
  },
  "result": {
    "item": "ibpdx:umbral_moon_stone",
      "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "AEA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:moon_glowstone_ore"
    },
    "C": {
      "item": "quark:white_crystal_cluster"
    },
    "E": {
      "item": "ftbic:antimatter"
    }
  },
  "result": {
    "item": "ibpdx:chalky_moon_stone",
      "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ADA",
    "DBD",
    "CDC"
  ],
  "key": {
    "A": {
      "tag": "forge:glass"
    },
    "B": {
      "item": "minecraft:nether_star"
    },
    "C": {
      "item": "miniutilities:unstable_ingot"
    },
    "D": {
      "item": "thermal:lumium_ingot"
    }
  },
  "result": {
    "item": "miniutilities:angel_ring"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ADA",
    "DBD",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    "B": {
      "item": "ibpdx:crystal_of_life"
    },
    "D": {
      "item": "fluxnetworks:flux_core"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_block"
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "FAF",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "B": {
      "item": "minecraft:brewing_stand"
    },
    "C": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "D": {
      "item": "thermal:signalum_gear"
    },
    "E": {
      "item": "powah:capacitor_spirited"
    },
    "F": {
      "item": "ibpdx:crystal_of_life"
    }
  },
  "result": {
    "item": "industrialforegoing:potion_brewer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "CBC",
    "DAD",
    "DED"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "B": {
      "item": "minecraft:bucket"
    },
    "C": {
      "item": "ftbic:industrial_grade_metal"
    },
    "D": {
      "tag": "forge:mushrooms"
    },
    "E": {
      "item": "powah:capacitor_basic"
    }
  },
  "result": {
    "item": "industrialforegoing:spores_recreator",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "CBC",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "B": {
      "item": "rftoolsbuilder:shape_card_def"
    },
    "C": {
      "item": "thermal:flux_drill"
    },
    "D": {
      "item": "minecraft:black_dye"
    }
  },
  "result": {
    "item": "rftoolsbuilder:shape_card_void",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "CBC",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "B": {
      "item": "mekanism:steel_casing"
    },
    "C": {
      "item": "powah:capacitor_spirited"
    },
    "D": {
      "item": "rftoolsbase:dimensionalshard"
    }
  },
  "result": {
    "item": "rftoolsbase:machine_infuser",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DDD"
  ],
  "key": {
    "D": {
      "item": "immersiveengineering:slab_concrete"
    }
  },
  "result": {
    "item": "immersiveengineering:concrete_quarter",
    "count": 6
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DDD"
  ],
  "key": {
    "D": {
      "item": "immersiveengineering:concrete_quarter"
    }
  },
  "result": {
    "item": "immersiveengineering:concrete_sheet",
    "count": 6
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:concrete_sheet"
    },
    "D": {
      "item": "immersiveengineering:slab_concrete"
    }
  },
  "result": {
    "item": "immersiveengineering:concrete_three_quarter",
    "count": 3
  }
})

event.custom({
  "type": "immersiveengineering:shaped_fluid",
  "pattern": [
    "SCS",
    "GBG",
    "SCS"
  ],
  "key": {
    "C": {
      "item": "thermal:bitumen"
    },
    "S": {
      "tag": "forge:sand"
    },
    "G": {
      "tag": "forge:gravel"
    },
    "B": {
      "tag": "minecraft:water",
      "amount": 1000,
      "type": "immersiveengineering:fluid"
    }
  },
  "result": {
    "item": "immersivepetroleum:asphalt",
    "count": 8
  }
})

event.custom({
  "type": "immersiveengineering:shaped_fluid",
  "pattern": [
    "SCS",
    "GBG",
    "SCS"
  ],
  "key": {
    "C": {
      "item": "thermal:bitumen"
    },
    "S": {
      "tag": "forge:slag"
    },
    "G": {
      "tag": "forge:gravel"
    },
    "B": {
      "tag": "minecraft:water",
      "amount": 1000,
      "type": "immersiveengineering:fluid"
    }
  },
  "result": {
    "item": "immersivepetroleum:asphalt",
    "count": 12
  }
})

event.custom({
  "type": "immersiveengineering:shaped_fluid",
  "pattern": [
    "DAD",
    "CBC",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "minecraft:clay_ball"
    },
    "C": {
      "item": "minecraft:gravel"
    },
    "D": {
      "tag": "forge:slag"
    },
    "B": {
      "tag": "minecraft:water",
      "amount": 1000,
      "type": "immersiveengineering:fluid"
    }
  },
  "result": {
    "item": "immersiveengineering:concrete",
    "count": 12
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC",
    " A "
  ],
  "key": {
    "A": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "B": {
      "item": "thermal:machine_crafter"
    },
    "C": {
      "item": "mekanism:alloy_atomic"
    }
  },
  "result": {
    "item": "rftoolsutility:crafter3",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "ibpdx:peat"
    },
    "B": {
      "item": "minecraft:dirt"
    },
  },
  "result": {
    "item": "ibpdx:peat_bog",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "CBC",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "ibpdx:modularium"
    },
    "B": {
      "item": "metalbarrels:iron_barrel"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "infused_crystals:lapisium_crystal"
    }
  },
  "result": {
    "item": "rftoolsstorage:modular_storage",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "CBC",
    "DAD"
  ],
  "key": {
    "A": {
      "item": "ibpdx:modularium"
    },
    "B": {
      "item": "immersiveengineering:metal_barrel"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "infused_crystals:coalium_crystal"
    }
  },
  "result": {
    "item": "rftoolsutility:tank",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC"
  ],
  "key": {
    "A": {
      "item": "metalbarrels:copper_to_iron"
    },
    "B": {
      "item": "rftoolsstorage:storage_module0"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "rftoolsstorage:storage_module1",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "CBC"
  ],
  "key": {
    "A": {
      "item": "metalbarrels:iron_to_gold"
    },
    "B": {
      "item": "rftoolsstorage:storage_module1"
    },
    "C": {
      "item": "ftbic:advanced_circuit"
    }
  },
  "result": {
    "item": "rftoolsstorage:storage_module2",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DAD",
    "CBC"
  ],
  "key": {
    "A": {
      "item": "metalbarrels:gold_to_diamond"
    },
    "B": {
      "item": "rftoolsstorage:storage_module2"
    },
    "C": {
      "item": "ftbic:advanced_circuit"
    },
    "D": {
      "item": "thermal:signalum_ingot"
    }
  },
  "result": {
    "item": "rftoolsstorage:storage_module3",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB"
  ],
  "key": {
    "A": {
      "item": "minecraft:glass"
    },
    "B": {
      "tag": "forge:plates/copper"
    }
  },
  "result": {
    "item": "mekanism:basic_logistical_transporter",
    "count": 8
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "JAD",
    "CFC",
    "EFG"
  ],
  "key": {
    "A": {
      "item": "blockcarpentry:paintbrush"
    },
    "C": {
      "item": "minecraft:black_dye"
    },
    "J": {
      "item": "minecraft:blue_dye"
    },
    "D": {
      "item": "minecraft:red_dye"
    },
    "E": {
      "item": "minecraft:yellow_dye"
    },
    "F": {
      "item": "mekanism:basic_logistical_transporter"
    },
    "G": {
      "item": "minecraft:green_dye"
    }
  },
  "result": {
    "item": "mekanism:logistical_sorter",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:coalium_crystal"
    },
    "B": {
      "item": "pipez:item_pipe"
    },
    "C": {
      "item": "minecraft:glass"
    }
  },
  "result": {
    "item": "prettypipes:pipe",
    "count": 16
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:lapisium_crystal"
    },
    "B": {
      "item": "ftbic:industrial_grade_metal"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "prettypipes:blank_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "boss_tools:wheel"
    }
  },
  "result": {
    "item": "prettypipes:round_robin_sorting_modifier",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "cyclic:dice"
    }
  },
  "result": {
    "item": "prettypipes:random_sorting_modifier",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "cyclic:filter_data"
    }
  },
  "result": {
    "item": "prettypipes:filter_increase_modifier",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "infused_crystals:block_of_redstonium"
    }
  },
  "result": {
    "item": "prettypipes:redstone_module",
    "count": 4
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "minecraft:name_tag"
    }
  },
  "result": {
    "item": "prettypipes:tag_filter_modifier",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "thermal:lead_ingot"
    }
  },
  "result": {
    "item": "prettypipes:mod_filter_modifier",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "minecraft:book"
    }
  },
  "result": {
    "item": "prettypipes:nbt_filter_modifier",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "minecraft:iron_pickaxe"
    }
  },
  "result": {
    "item": "prettypipes:damage_filter_modifier",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "storagedrawers:obsidian_storage_upgrade"
    }
  },
  "result": {
    "item": "prettypipes:stack_size_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "ftbic:advanced_circuit"
    }
  },
  "result": {
    "item": "prettypipes:low_crafting_module",
    "count": 4
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAD",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "B": {
      "item": "quark:magnet"
    },
    "C": {
      "item": "thermal:flux_magnet"
    },
    "D": {
      "item": "bloodmagic:reagentmagnetism"
    }
  },
  "result": {
    "item": "prettypipes:low_retrieval_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "itemfilters:always_true"
    }
  },
  "result": {
    "item": "prettypipes:low_filter_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "minecraft:soul_sand"
    }
  },
  "result": {
    "item": "prettypipes:low_high_priority_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "minecraft:magma_block"
    }
  },
  "result": {
    "item": "prettypipes:low_low_priority_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "immersivepetroleum:lubricant_bucket"
    }
  },
  "result": {
    "item": "prettypipes:low_speed_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "prettypipes:blank_module"
    },
    "C": {
      "item": "minecraft:hopper"
    }
  },
  "result": {
    "item": "prettypipes:low_extraction_module",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCD",
    " E "
  ],
  "key": {
    "A": {
      "item": "pamhc2foodcore:cheeseitem"
    },
    "B": {
      "item": "thermal:onion"
    },
    "C": {
      "tag": "forge:foods/meat/cooked"
    },
    "D": {
      "item": "thermal:rice"
    },
    "E": {
      "item": "thermal:bell_pepper"
    }
  },
  "result": {
    "item": "thermal:stuffed_pepper",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DDD"
  ],
  "key": {
    "B": {
      "item": "bloodmagic:reinforcedslate"
    },
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "D": {
      "item": "minecraft:end_stone"
    }
  },
  "result": {
    "item": "dimdungeons:block_key_charger",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BBB",
    "CCC"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_dust"
    },
    "B": {
      "item": "thermal:bronze_dust"
    },
    "C": {
      "item": "thermal:tin_dust"
    }
  },
  "result": {
    "item": "ftbic:mixed_metal_blend",
    "count": 3
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BBB",
    "CCC"
  ],
  "key": {
    "A": {
      "item": "thermal:lead_dust"
    },
    "B": {
      "item": "thermal:electrum_dust"
    },
    "C": {
      "item": "thermal:nickel_dust"
    }
  },
  "result": {
    "item": "ftbic:mixed_metal_blend",
    "count": 9
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "mekanism:dynamic_tank"
    },
    "B": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "mekanism:dynamic_valve",
    "count": 2
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "item": "compactmachines:personal_shrinking_device"
    }
  },
  "result": {
    "item": "shrink:shrinking_device",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AA",
    "AA"
  ],
  "key": {
    "A": {
      "item": "thermal:lead_plate"
    }
  },
  "result": {
    "item": "ibpdx:lead_plating",
    "count": 8
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A"
  ],
  "key": {
    "A": {
      "tag": "forge:chests/wooden"
    }
  },
  "result": {
    "item": "minecraft:chest",
    "count": 1
  }
})  

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B"
  ],
  "key": {
    "A": {
      "item": "minecraft:hopper"
    },
    "B": {
      "item": "compactmachines:wall"
    }
  },
  "result": {
      "type": "forge:nbt",
      "item": "compactmachines:tunnel",
      "count": 1,
      "nbt": '{definition:{id:"compactmachines:item"}}'
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B"
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone_block"
    },
    "B": {
      "item": "compactmachines:wall"
    }
  },
  "result": {
      "type": "forge:nbt",
      "item": "compactmachines:tunnel",
      "count": 1,
      "nbt": '{definition:{id:"compactmachines:redstone_in"}}'
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AA",
    "BC"
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "xreliquary:mob_charm_fragment",
      "count": 1,
      "nbt": '{entity:"boss_tools:alien_zombie"}'
    },
    "B": {
      "item": "minecraft:egg"
    },
    "C": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "boss_tools:alien_spawn_egg",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:lens"
    },
    "B": {
      "item": "botania:lens_efficiency"
    }

  },
  "result": {
      "type": "forge:nbt",
      "item": "astralsorcery:lens",
      "count": 1,
      "nbt": '{astralsorcery:{crystalProperties:{attributes:[{discovered:1b,property:"astralsorcery:purity",pLevel:2},{discovered:1b,property:"astralsorcery:shape",pLevel:3}]}}}'
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:prism"
    },
    "B": {
      "item": "botania:lens_efficiency"
    }

  },
  "result": {
      "type": "forge:nbt",
      "item": "astralsorcery:prism",
      "count": 1,
      "nbt": '{astralsorcery:{crystalProperties:{attributes:[{discovered:1b,property:"astralsorcery:purity",pLevel:2},{discovered:1b,property:"astralsorcery:shape",pLevel:3}]}}}'
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "thermal:nickel_nugget"
    }
  },
  "result": {
    "item": "thermal:nickel_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:nugget_aluminum"
    }
  },
  "result": {
    "item": "immersiveengineering:ingot_aluminum"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_coin"
    },
    "B": {
      "item": "botania:life_essence"
    },
    "C": {
      "item": "minecraft:egg"
    }
  },
  "result": {
    "item": "miniutilities:magical_egg",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "minecraft:dirt"
    },
    "B": {
      "item": "botania:life_essence"
    },
    "C": {
      "item": "minecraft:wheat"
    }
  },
  "result": {
    "item": "miniutilities:blessed_earth",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "minecraft:glowstone"
    },
    "B": {
      "item": "minecraft:redstone_block"
    },
    "C": {
      "item": "industrialforegoing:machine_frame_simple"
    }
  },
  "result": {
    "item": "rftoolsutility:matter_beamer",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "botania:life_essence"
    },
    "B": {
      "item": "minecraft:redstone_block"
    },
    "C": {
      "item": "industrialforegoing:machine_frame_advanced"
    }
  },
  "result": {
    "item": "rftoolsutility:spawner",
    "count": 1
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "BAB",
    "ACA",
    "BAB"
  ],
  "key": {
    "A": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "B": {
      "item": "mekanism:sps_casing"
    },
    "C": {
      "item": "mekanism:pellet_antimatter"
    }
  },
  "result": {
    "item": "mekanism:antiprotonic_nucleosynthesizer",
    "count": 1
  }
})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "BDB",
      "DED"
    ],
    "key": {
      "A": {
        "tag": "forge:ingots/steel"
      },
      "B": {
        "item": "thermal:constantan_plate"
      },
      "D": {
        "item": "mekanism:ingot_osmium"
      },
      "E": {
        "item": "ibpdx:iron_casing"
      }

    },
    "result": {
      "item": "mekanismgenerators:heat_generator"
    }
  })
  


























})