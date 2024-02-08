//priority: 3000

// kubejs/server_scripts/example.js
// This is just an example script to show off multiple types of recipes and removal methods
// Supports /reload

// Listen to server recipe event
onEvent('recipes', event => {
    

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "ibpdx:speed_gearbox"
  },
  "output": "ibpdx:singular_speed_gearbox",
  "time": 100,
  "catalysts": [
    {
      "tag": "forge:plates/enderium",
      "index": 0
    },
    {
      "item": "ibpdx:aerotheum_blend",
      "index": 1
    },
    {
      "item": "ftbic:carbon_plate",
      "index": 2
    },
    {
      "item": "ibpdx:aerotheum_blend",
      "index": 3
    },
    {
      "tag": "forge:plates/enderium",
      "index": 4
    },
    {
      "item": "ibpdx:aerotheum_blend",
      "index": 5
    },
    {
      "item": "ftbic:carbon_plate",
      "index": 6
    },
    {
      "item": "ibpdx:aerotheum_blend",
      "index": 7
    }
  ]
})


event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "ibpdx:double_gearbox"
  },
  "output": "ibpdx:singular_double_gearbox",
  "time": 100,
  "catalysts": [
    {
      "item": "mekanism:ingot_refined_obsidian",
      "index": 0
    },
    {
      "item": "mysticalagriculture:prosperity_gemstone",
      "index": 2
    },
    {
      "item": "mekanism:ingot_refined_obsidian",
      "index": 4
    },
    {
      "item": "mysticalagriculture:prosperity_gemstone",
      "index": 6
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "ibpdx:power_gearbox"
  },
  "output": "ibpdx:singular_power_gearbox",
  "time": 100,
  "catalysts": [
    {
      "item": "thermal:signalum_plate",
      "index": 0
    },
    {
      "item": "ibpdx:pyrotheum_blend",
      "index": 1
    },
    {
      "item": "ftbic:carbon_plate",
      "index": 2
    },
    {
      "item": "ibpdx:pyrotheum_blend",
      "index": 3
    },
    {
      "item": "thermal:signalum_plate",
      "index": 4
    },
    {
      "item": "ibpdx:pyrotheum_blend",
      "index": 5
    },
    {
      "item": "ftbic:carbon_plate",
      "index": 6
    },
    {
      "item": "ibpdx:pyrotheum_blend",
      "index": 7
    }
  ]
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "tag": "forge:ingots/iron"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "botania:quartz_red"
        }
      ],
      "count": 4
    }
  ],
  "result": [
    {
      "item": "refinedstorage:quartz_enriched_iron",
      "count": 4
    }
  ],
  "energy": 4800
})

event.custom({
  "type": "thermal:sawmill",
  "ingredient": {
    "tag": "forge:silicon"
  },
  "result": [
    {
      "item": "refinedstorage:processor_binding",
      "count": 1
    }
  ],
  "energy": 1000
})

event.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag": "forge:silicon"}},"mainOutput":{"item":"refinedstorage:processor_binding","count":1}})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "__AB_",
    "_ACA_",
    "_BA__",
    "_____"
  ],
  "key": {
    "A": {
      "item": "botania:livingwood_twig"
    },
    "B": {
      "item": "astralsorcery:glass_lens"
    },
    "C": {
      "item": "botania:manasteel_ingot"
    }
  },
  "output": [
    {
      "item": "astralsorcery:hand_telescope",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_ABA_",
    "_CDC_",
    "_AEA_",
    "_____"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:marble_pillar"
    },
    "B": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": false,
      "canBeAttuned": true,
      "canBeCelestialCrystal": true
    },
    "C": {
      "item": "astralsorcery:marble_chiseled"
    },
    "D": {
      "item": "astralsorcery:liquid_starlight_bucket"
    },
    "E": {
      "item": "botania:manasteel_ingot"
    }
  },
  "recipe_class": "astralsorcery:attunement_upgrade",
  "output": [
    {
      "item": "astralsorcery:altar_attunement",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "__A__",
    "_BCB_",
    "_DDD_",
    "_____"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:hand_telescope"
    },
    "B": {
      "item": "botania:manasteel_ingot"
    },
    "C": {
      "item": "botania:livingwood"
    },
    "D": {
      "item": "botania:livingwood_twig"
    }
  },
  "output": [
    {
      "item": "astralsorcery:telescope",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 1,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "__de_",
    "__cd_",
    "_b___",
    "a____"
  ],
  "key": {
    "a": {
      "item": "botania:livingwood_twig"
    },
    "b": {
      "item": "botania:twig_wand"
    },
    "c": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": false,
      "canBeAttuned": true,
      "canBeCelestialCrystal": true
    },
    "d": {
      "item": "astralsorcery:aquamarine"
    },
    "e": {
      "item": "botania:manasteel_block"
    }
  },
  "output": [
    {
      "item": "astralsorcery:linking_tool",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 1,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "A___A",
    "_BCB_",
    "_DED_",
    "_FGF_",
    "H___H"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:stardust"
    },
    "B": {
      "item": "ibpdx:star_diamond"
    },
    "C": {
      "item": "minecraft:gold_block"
    },
    "D": {
      "item": "botania:manasteel_block"
    },
    "E": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": false,
      "canBeAttuned": true,
      "canBeCelestialCrystal": true
    },
    "F": {
      "item": "astralsorcery:marble_pillar"
    },
    "G": {
      "item": "astralsorcery:starmetal_ingot"
    },
    "H": {
      "item": "astralsorcery:marble_chiseled"
    }
  },
  "recipe_class": "astralsorcery:constellation_upgrade",
  "output": [
    {
      "item": "astralsorcery:altar_constellation",
      "count": 1
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:upgrade_altar",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 2,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "AB_BA",
    "BCCCB",
    "_CDC_",
    "BCECB",
    "AB_BA"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:starmetal_ingot"
    },
    "B": {
      "item": "botania:manasteel_ingot"
    },
    "C": {
      "item": "botania:livingrock"
    },
    "D": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": false,
      "canBeAttuned": true,
      "canBeCelestialCrystal": true
    },
    "E": {
      "item": "botania:mana_diamond_block"
    }
  },
  "output": [
    {
      "item": "botania:runic_altar",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 2,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "AB_BA",
    "CADAC",
    "_EFG_",
    "CAHAC",
    "AB_BA"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:marble_runed"
    },
    "B": {
      "item": "ibpdx:star_pearl"
    },
    "C": {
      "item": "astralsorcery:resonating_gem"
    },
    "D": {
      "item": "astralsorcery:colored_lens_damage"
    },
    "E": {
      "item": "astralsorcery:colored_lens_growth"
    },
    "F": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": true,
      "canBeCelestialCrystal": false
    },
    "G": {
      "item": "astralsorcery:colored_lens_spectral"
    },
    "H": {
      "item": "astralsorcery:colored_lens_regeneration"
    }
  },
  "recipe_class": "astralsorcery:trait_upgrade",
  "output": [
    {
      "item": "astralsorcery:altar_radiance",
      "count": 1
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:pillar_sparkle",
    "astralsorcery:luminescence_flare",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:upgrade_altar",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 2,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_A_A_",
    "BCDCB",
    "_EFE_",
    "GCDCG",
    "HH_HH"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:resonating_gem"
    },
    "B": {
      "item": "minecraft:gold_ingot"
    },
    "C": {
      "item": "minecraft:glass_pane"
    },
    "D": {
      "item": "astralsorcery:stardust"
    },
    "E": {
      "item": "astralsorcery:glass_lens"
    },
    "F": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": true,
      "canBeCelestialCrystal": false
    },
    "G": {
      "item": "astralsorcery:infused_wood_engraved"
    },
    "H": {
      "item": "astralsorcery:marble_runed"
    }
  },
  "output": [
    {
      "item": "astralsorcery:prism",
      "count": 1
    }
  ]
})


event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 3,
  "duration": 600,
  "starlight": 4000,
  "pattern": [
    "A___A",
    "_BCB_",
    "_DED_",
    "_FGF_",
    "A___A"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:stardust"
    },
    "B": {
      "item": "astralsorcery:illumination_powder"
    },
    "C": {
      "item": "ibpdx:star_diamond"
    },
    "D": {
      "item": "astralsorcery:colored_lens_push"
    },
    "E": {
      "item": "botania:light_relay"
    },
    "F": {
      "item": "astralsorcery:marble_runed"
    },
    "G": {
      "item": "ibpdx:blockcasing_starmetal"
    }
  },
  "output": [
    {
      "item": "astralsorcery:celestial_gateway",
      "count": 1
    }
  ],
  "relay_inputs": [
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:built_in_effect_trait_relay_highlight",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_trait_focus_circle",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 3,
  "duration": 600,
  "starlight": 4000,
  "pattern": [
    "A_B_A",
    "CDEDC",
    "BFGFB",
    "CHHHC",
    "H_B_H"
  ],
  "key": {
    "A": {
      "item": "botania:mana_pylon"
    },
    "B": {
      "item": "botania:pixie_dust"
    },
    "C": {
      "item": "botania:dreamwood"
    },
    "D": {
      "item": "astralsorcery:resonating_gem"
    },
    "E": {
      "item": "botania:elf_glass"
    },
    "F": {
      "item": "astralsorcery:starmetal_ingot"
    },
    "G": {
      "item": "minecraft:enchanting_table"
    },
    "H": {
      "item": "astralsorcery:marble_runed"
    }
  },
  "output": [
    {
      "item": "astralsorcery:refraction_table",
      "count": 1
    }
  ],
  "relay_inputs": [
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_pearl"
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:built_in_effect_trait_relay_highlight",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_trait_focus_circle",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 3,
  "duration": 600,
  "starlight": 4000,
  "pattern": [
    "A___A",
    "BCDCB",
    "BEFEB",
    "GEHEG",
    "G___G"
  ],
  "key": {
    "A": {
      "item": "botania:quartz_elven"
    },
    "B": {
      "item": "astralsorcery:resonating_gem"
    },
    "C": {
      "item": "botania:pixie_dust"
    },
    "D": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": true,
      "canBeCelestialCrystal": false
    },
    "E": {
      "item": "botania:life_essence"
    },
    "F": {
      "type": "forge:nbt",
      "item": "botania:terrasteel_chestplate",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "G": {
      "item": "astralsorcery:stardust"
    },
    "H": {
      "item": "botania:dragonstone"
    }
  },
  "output": [
    {
      "item": "astralsorcery:mantle",
      "count": 1
    }
  ],
  "relay_inputs": [
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "astralsorcery:starmetal_ingot"
    },
    {
      "item": "astralsorcery:stardust"
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:built_in_effect_trait_relay_highlight",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_trait_focus_circle",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 2,
  "duration": 600,
  "starlight": 4000,
  "pattern": [
    "_A_A_",
    "ACDCA",
    "_BEB_",
    "ACFCA",
    "GA_AG"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:marble_runed"
    },
    "B": {
      "item": "ibpdx:starspirit_alloy"
    },
    "C": {
      "item": "botania:elementium_ingot"
    },
    "D": {
      "item": "astralsorcery:lens",
    },
    "E": {
      "item": "bloodmagic:masterritualstone"
    },
    "F": {
      "item": "minecraft:nether_star"
    },
    "G": {
      "item": "astralsorcery:liquid_starlight_bucket"
    }
  },
  "output": [
    {
      "item": "astralsorcery:ritual_pedestal",
      "count": 1
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:built_in_effect_trait_relay_highlight",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_trait_focus_circle",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "ibpdx:omni_ore"
  },
  "output": {
    "item": "botania:orechid",
    "count": 1
  },
  "consumptionChance": 1.0,
  "duration": 200,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_ABA_",
    "_CDC_",
    "_ABA_",
    "_____"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:stardust"
    },
    "B": {
      "item": "minecraft:experience_bottle"
    },
    "C": {
      "item": "minecraft:wheat_seeds"
    },
    "D": {
      "item": "astralsorcery:shifting_star"
    }
  },
  "output": [
    {
      "item": "botania:rosa_arcana",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_ABA_",
    "_CDC_",
    "_ABA_",
    "_____"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:stardust"
    },
    "B": {
      "item": "mysticalagriculture:dye_agglomeratio"
    },
    "C": {
      "item": "minecraft:wheat_seeds"
    },
    "D": {
      "item": "astralsorcery:shifting_star"
    }
  },
  "output": [
    {
      "item": "botania:spectrolus",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "__A__",
    "__BA_",
    "_C___",
    "_____"
  ],
  "key": {
    "A": {
      "item": "minecraft:dirt"
    },
    "B": {
      "item": "botania:livingwood_twig"
    },
    "C": {
      "item": "astralsorcery:stardust"
    }
  },
  "output": [
    {
      "item": "botania:dirt_rod",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "__A__",
    "__BA_",
    "_C___",
    "_____"
  ],
  "key": {
    "A": {
      "item": "pamhc2foodcore:freshwateritem"
    },
    "B": {
      "item": "botania:livingwood_twig"
    },
    "C": {
      "item": "astralsorcery:stardust"
    }
  },
  "output": [
    {
      "item": "botania:water_rod",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_AB__",
    "_B_B_",
    "_CBD_",
    "_____"
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "minecraft:potion",
      "count": 1,
      "nbt": "{Potion:\"minecraft:strong_swiftness\"}"
    },
    "B": {
      "item": "minecraft:leather"
    },
    "C": {
      "item": "botania:manasteel_ingot"
    },
    "D": {
      "type": "forge:nbt",
      "item": "minecraft:potion",
      "count": 1,
      "nbt": "{Potion:\"minecraft:strong_leaping\"}"
    }
  },
  "output": [
    {
      "item": "botania:travel_belt",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_ABC_",
    "_BDB_",
    "_CBA_",
    "_____"
  ],
  "key": {
    "A": {
      "item": "minecraft:snow_block"
    },
    "B": {
      "item": "botania:mana_string"
    },
    "C": {
      "item": "minecraft:ice"
    },
    "D": {
      "item": "astralsorcery:starmetal_ingot"
    }
  },
  "output": [
    {
      "item": "botania:ice_pendant",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_AB__",
    "_B_B_",
    "_CBA_",
    "_____"
  ],
  "key": {
    "A": {
      "item": "cyclic:cloud"
    },
    "B": {
      "item": "botania:mana_string"
    },
    "C": {
      "item": "botania:manasteel_ingot"
    }
  },
  "output": [
    {
      "item": "botania:cloud_pendant",
      "count": 1
    }
  ]
})

event.replaceInput({}, 'industrialforegoing:machine_frame_simple', 'industrialforegoing:machine_frame_advanced')
event.replaceInput({}, 'industrialforegoing:machine_frame_supreme', 'industrialforegoing:machine_frame_advanced')

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "BCDCB",
    "CDEDC",
    "BCDCB",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "boss_tools:desh_ingot"
    },
    "B": {
      "item": "draconicevolution:awakened_draconium_ingot"
    },
    "C": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "D": {
      "item": "ftbic:advanced_alloy"
    },
    "E": {
      "item": "botania:gaia_ingot"
    }
  },
  "result": {
    "item": "rftoolsbase:machine_frame",
    "count": 4
  }
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:empty_fuel_cell"
    },
    {
      "fluid": "ibpdx:seed_oil",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "ibpdx:seedoil_fuel_cell"
    }
  ]
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "thermal:basalz_powder"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "thermal:obsidian_glass"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "ibpdx:terra_glass",
      "count": 1
    }
  ],
  "energy": 4800
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ibpdx:seedoil_fuel_cell"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "thermal:rosin"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "ibpdx:bio_napalm_cell",
      "count": 1
    }
  ],
  "energy": 4800
})

event.recipes.immersiveengineeringCokeOven('2x ibpdx:mixed_brick', 'ibpdx:mixed_blend').creosote(0).time(900)

event.custom({
  "type": "powah:energizing",
  "ingredients": [
	{"item": "minecraft:quartz_block"}
  ],
  "energy": 12000,
  "result": {
	"item": "ibpdx:ethetic_quartz"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:iron_ingot"}
  ],
  "energy": 4000,
  "result": {
  "item": "infused_crystals:ironium_crystal"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:lapis_lazuli"}
  ],
  "energy": 4000,
  "result": {
  "item": "infused_crystals:lapisium_crystal"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:diamond"}
  ],
  "energy": 10000,
  "result": {
  "item": "infused_crystals:diamondium_crystal"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:emerald"}
  ],
  "energy": 10000,
  "result": {
  "item": "infused_crystals:emeraldium_crystal"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:coal"}
  ],
  "energy": 2000,
  "result": {
  "item": "infused_crystals:coalium_crystal"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:redstone"}
  ],
  "energy": 2000,
  "result": {
  "item": "infused_crystals:redstonium_crystal"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:quartz"}
  ],
  "energy": 2000,
  "result": {
  "item": "minecraft:prismarine_shard"
  }
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:redstonium_crystal"
  },
  "output": {
    "id": "infused_crystals:infused_redstonium_crystal",
    "Count": 1,
  },
  "time": 40,
  "catalysts": [
    {
      "item": {
        "item": "quark:red_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_red"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:brick"
      },
      "index": 2
    },
    {
      "item": {
        "item": "minecraft:nether_brick"
      },
      "index": 3
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:block_of_redstonium"
  },
  "output": {
    "id": "infused_crystals:block_of_infused_redstonium",
    "Count": 1,
  },
  "time": 400,
  "catalysts": [
    {
      "item": {
        "item": "quark:red_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_red"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:brick"
      },
      "index": 2
    },
    {
      "item": {
        "item": "minecraft:nether_brick"
      },
      "index": 3
    },
    {
      "item": {
        "item": "mysticalagriculture:nature_agglomeratio"
      },
      "index": 4
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:ironium_crystal"
  },
  "output": {
    "id": "infused_crystals:infused_ironium_crystal",
    "Count": 1,
  },
  "time": 40,
  "catalysts": [
    {
      "item": {
        "item": "quark:white_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "minecraft:quartz"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:bone_meal"
      },
      "index": 2
    },
    {
      "item": {
        "item": "minecraft:snowball"
      },
      "index": 3
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:block_of_ironium"
  },
  "output": {
    "id": "infused_crystals:block_of_infused_ironium",
    "Count": 1,
  },
  "time": 400,
  "catalysts": [
    {
      "item": {
        "item": "quark:white_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "minecraft:quartz"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:bone_meal"
      },
      "index": 2
    },
    {
      "item": {
        "item": "minecraft:snowball"
      },
      "index": 3
    },
    {
      "item": {
        "item": "mysticalagriculture:nature_agglomeratio"
      },
      "index": 4
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:coalium_crystal"
  },
  "output": {
    "id": "infused_crystals:infused_coalium_crystal",
    "Count": 1,
  },
  "time": 40,
  "catalysts": [
    {
      "item": {
        "item": "quark:black_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_dark"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:blackstone"
      },
      "index": 2
    },
    {
      "item": {
        "item": "botania:black_petal"
      },
      "index": 3
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:block_of_coalium"
  },
  "output": {
    "id": "infused_crystals:block_of_infused_coalium",
    "Count": 1,
  },
  "time": 400,
  "catalysts": [
    {
      "item": {
        "item": "quark:black_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_dark"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:blackstone"
      },
      "index": 2
    },
    {
      "item": {
        "item": "botania:black_petal"
      },
      "index": 3
    },
    {
      "item": {
        "item": "mysticalagriculture:nature_agglomeratio"
      },
      "index": 4
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:lapisium_crystal"
  },
  "output": {
    "id": "infused_crystals:infused_lapisium_crystal",
    "Count": 1,
  },
  "time": 40,
  "catalysts": [
    {
      "item": {
        "item": "quark:indigo_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_lavender"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:prismarine_shard"
      },
      "index": 2
    },
    {
      "item": {
        "item": "thermal:apatite"
      },
      "index": 3
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:block_of_lapisium"
  },
  "output": {
    "id": "infused_crystals:block_of_infused_lapisium",
    "Count": 1,
  },
  "time": 400,
  "catalysts": [
    {
      "item": {
        "item": "quark:indigo_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_lavender"
      },
      "index": 1
    },
    {
      "item": {
        "item": "minecraft:prismarine_shard"
      },
      "index": 2
    },
    {
      "item": {
        "item": "thermal:apatite"
      },
      "index": 3
    },
    {
      "item": {
        "item": "mysticalagriculture:nature_agglomeratio"
      },
      "index": 4
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:diamondium_crystal"
  },
  "output": {
    "id": "infused_crystals:infused_diamondium_crystal",
    "Count": 1,
  },
  "time": 40,
  "catalysts": [
    {
      "item": {
        "item": "quark:blue_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_mana"
      },
      "index": 1
    },
    {
      "item": {
        "item": "tconstruct:sky_slime_crystal"
      },
      "index": 2
    },
    {
      "item": {
        "item": "minecraft:ice"
      },
      "index": 3
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:block_of_diamondium"
  },
  "output": {
    "id": "infused_crystals:block_of_infused_diamondium",
    "Count": 1,
  },
  "time": 400,
  "catalysts": [
    {
      "item": {
        "item": "quark:blue_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_mana"
      },
      "index": 1
    },
    {
      "item": {
        "item": "tconstruct:sky_slime_crystal"
      },
      "index": 2
    },
    {
      "item": {
        "item": "minecraft:ice"
      },
      "index": 3
    },
    {
      "item": {
        "item": "mysticalagriculture:nature_agglomeratio"
      },
      "index": 4
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:emeraldium_crystal"
  },
  "output": {
    "id": "infused_crystals:infused_emeraldium_crystal",
    "Count": 1,
  },
  "time": 40,
  "catalysts": [
    {
      "item": {
        "item": "quark:green_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_elven"
      },
      "index": 1
    },
    {
      "item": {
        "item": "tconstruct:earth_slime_crystal"
      },
      "index": 2
    },
    {
      "item": {
        "item": "immersiveengineering:ingot_uranium"
      },
      "index": 3
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "infused_crystals:block_of_emeraldium"
  },
  "output": {
    "id": "infused_crystals:block_of_infused_emeraldium",
    "Count": 1,
  },
  "time": 400,
  "catalysts": [
    {
      "item": {
        "item": "quark:green_crystal"
      },
      "index": 0
    },
    {
      "item": {
        "item": "botania:quartz_elven"
      },
      "index": 1
    },
    {
      "item": {
        "item": "tconstruct:earth_slime_crystal"
      },
      "index": 2
    },
    {
      "item": {
        "item": "immersiveengineering:ingot_uranium"
      },
      "index": 3
    },
    {
      "item": {
        "item": "mysticalagriculture:nature_agglomeratio"
      },
      "index": 4
    }
  ]
})
event.recipes.immersiveengineeringCrusher('4x minecraft:nether_wart', 'minecraft:nether_wart_block')
event.recipes.immersiveengineeringCrusher('mekanism:bio_fuel', 'minecraft:apple')

event.recipes.immersiveengineeringCrusher('boss_tools:moon_sand', 'boss_tools:moon_stone')

event.remove({input: 'draconicevolution:overworld_draconium_ore'})
event.remove({input: '#forge:ores/draconium'})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:bone"
  },
  "output": {
    "item": "minecraft:bone_meal",
    "count": 4
  },
  "mana": 2000
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:snow"
  },
  "output": {
    "item": "minecraft:ice",
    "count": 2
  },
  "mana": 3000
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_water",
    "count": 2
  },
  "mana": 5200,
  "ingredients": [
    {
      "tag": "forge:dusts/mana"
    },
    {
      "tag": "forge:ingots/manasteel"
    },
    {
      "item": "minecraft:bone_meal"
    },
    {
      "item": "minecraft:sugar_cane"
    },
    {
      "item": "minecraft:fishing_rod"
    },
    {
      "item": "ibpdx:mixed_blend"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_fire",
    "count": 2
  },
  "mana": 5200,
  "ingredients": [
    {
      "tag": "forge:dusts/mana"
    },
    {
      "tag": "forge:ingots/manasteel"
    },
    {
      "item": "minecraft:nether_brick"
    },
    {
      "item": "minecraft:gunpowder"
    },
    {
      "item": "minecraft:nether_wart"
    },
    {
      "item": "ibpdx:bedrock_shard"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_earth",
    "count": 2
  },
  "mana": 5200,
  "ingredients": [
    {
      "tag": "forge:dusts/mana"
    },
    {
      "tag": "forge:ingots/manasteel"
    },
    {
      "tag": "forge:stone"
    },
    {
      "tag": "forge:storage_blocks/coal"
    },
    {
      "item": "ibpdx:bog_earth"
    },
    [
      {
        "item": "minecraft:brown_mushroom"
      },
      {
        "item": "minecraft:red_mushroom"
      }
    ]
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_air",
    "count": 2
  },
  "mana": 5200,
  "ingredients": [
    {
      "tag": "forge:dusts/mana"
    },
    {
      "tag": "forge:ingots/manasteel"
    },
    {
      "tag": "minecraft:carpets"
    },
    {
      "item": "minecraft:feather"
    },
    {
      "item": "minecraft:string"
    },
    {
      "item": "ibpdx:mixed_brick_block"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_spring"
  },
  "mana": 8000,
  "ingredients": [
    {
      "tag": "botania:runes/water"
    },
    {
      "tag": "botania:runes/fire"
    },
    {
      "tag": "tconstruct:slimy_saplings"
    },
    {
      "tag": "tconstruct:slimy_saplings"
    },
    {
      "item": "pamhc2foodcore:glazedcarrotsitem"
    },
    {
      "item": "treemendous:walnut_leaves"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_summer"
  },
  "mana": 8000,
  "ingredients": [
    {
      "tag": "botania:runes/earth"
    },
    {
      "tag": "botania:runes/air"
    },
    {
      "item": "mysticalagriculture:soulstone_bricks"
    },
    {
      "item": "tconstruct:ichor_slime_ball"
    },
    {
      "item": "pamhc2foodcore:chocolatecupcakeitem"
    },
    {
      "item": "treemendous:cherry_leaves"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_autumn"
  },
  "mana": 8000,
  "ingredients": [
    {
      "tag": "botania:runes/fire"
    },
    {
      "tag": "botania:runes/air"
    },
    {
      "tag": "minecraft:leaves"
    },
    {
      "tag": "minecraft:leaves"
    },
    {
      "item": "pamhc2foodcore:pumpkinbreaditem"
    },
    {
      "item": "minecraft:beetroot_soup"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_winter"
  },
  "mana": 8000,
  "ingredients": [
    {
      "tag": "botania:runes/water"
    },
    {
      "tag": "botania:runes/earth"
    },
    {
      "item": "treemendous:willow_leaves"
    },
    {
      "item": "minecraft:snow_block"
    },
    {
      "item": "minecraft:white_wool"
    },
    {
      "item": "pamhc2foodcore:hotchocolateitem"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_lust"
  },
  "mana": 12000,
  "ingredients": [
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "tag": "botania:runes/summer"
    },
    {
      "tag": "botania:runes/air"
    },
    {
      "item": "xreliquary:fertile_lily_pad"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_gluttony"
  },
  "mana": 12000,
  "ingredients": [
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "tag": "botania:runes/winter"
    },
    {
      "tag": "botania:runes/fire"
    },
    {
      "item": "pamhc2foodcore:chickendinneritem"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_greed"
  },
  "mana": 12000,
  "ingredients": [
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "tag": "botania:runes/spring"
    },
    {
      "tag": "botania:runes/water"
    },
    {
      "item": "xreliquary:midas_touchstone"
    },
    {
      "item": "quark:cooked_crab_leg"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_sloth"
  },
  "mana": 12000,
  "ingredients": [
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "tag": "botania:runes/autumn"
    },
    {
      "tag": "botania:runes/air"
    },
    {
      "item": "xreliquary:magazines/neutral_magazine"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_wrath"
  },
  "mana": 12000,
  "ingredients": [
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "tag": "botania:runes/winter"
    },
    {
      "tag": "botania:runes/earth"
    },
    {
      "item": "xreliquary:infernal_claw"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_envy"
  },
  "mana": 12000,
  "ingredients": [
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "tag": "botania:runes/winter"
    },
    {
      "tag": "botania:runes/water"
    },
    {
      "item": "xreliquary:rod_of_lyssa"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_pride"
  },
  "mana": 12000,
  "ingredients": [
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "item": "ibpdx:star_diamond"
    },
    {
      "tag": "botania:runes/summer"
    },
    {
      "tag": "botania:runes/fire"
    },
    {
      "item": "xreliquary:interdiction_torch"
    },
    {
      "item": "xreliquary:interdiction_torch"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "ibpdx:omni_ore"
  },
  "mana": 80000,
  "ingredients": [
    {
      "item": "thermal:copper_ore"
    },
    {
      "item": "thermal:tin_ore"
    },
    {
      "item": "thermal:niter_ore"
    },
    {
      "item": "thermal:sulfur_ore"
    },
    {
      "item": "thermal:apatite_ore"
    },
    {
      "item": "thermal:cinnabar_ore"
    },
    {
      "item": "thermal:lead_ore"
    },
    {
      "item": "thermal:silver_ore"
    },
    {
      "item": "thermal:nickel_ore"
    },
    {
      "item": "astralsorcery:starmetal_ore"
    },
    {
      "item": "minecraft:nether_gold_ore"
    },
    {
      "item": "minecraft:nether_quartz_ore"
    },
    {
      "item": "minecraft:gold_ore"
    },
    {
      "item": "minecraft:iron_ore"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "ibpdx:wispy_petal",
    "count": 4
  },
  "mana": 12000,
  "ingredients": [
    {
      "type": "forge:nbt",
      "item": "botania:brew_vial",
      "count": 1,
      "nbt": "{brewKey:\"botania:jump_boost\"}"
    },
    {
      "item": "botania:corporea_spark"
    },
    {
      "item": "botania:fallen_kanade"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "ibpdx:absolution_rune"
  },
  "mana": 40000,
  "ingredients": [
    {
      "item": "avaritia:pileof_neutrons"
    },
    {
      "item": "botania:rune_lust"
    },
    {
      "item": "botania:rune_gluttony"
    },
    {
      "item": "botania:rune_wrath"
    },
    {
      "item": "botania:rune_envy"
    },
    {
      "item": "botania:rune_pride"
    },
    {
      "item": "ibpdx:night_rune"
    },
    {
      "item": "ibpdx:day_rune"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "ibpdx:night_rune"
  },
  "mana": 40000,
  "ingredients": [
    {
      "item": "astralsorcery:nocturnal_powder"
    },
    {
      "item": "botania:rune_sloth"
    },
    {
      "item": "botania:dark_quartz"
    },
    {
      "item": "miniutilities:lunar_panel"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "ibpdx:day_rune"
  },
  "mana": 40000,
  "ingredients": [
    {
      "item": "architects_palette:sunmetal_brick"
    },
    {
      "item": "botania:sunny_quartz"
    },
    {
      "item": "ftbic:mv_solar_panel"
    },
    {
      "item": "botania:rune_greed"
    }
  ]
})

event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'bloodmagic:dungeon_stone').upgradeLevel(0).altarSyphon(1000.0).consumptionRate(5.0).drainRate(5.0)

event.recipes.bloodmagic.altar('bloodmagic:apprenticebloodorb', 'botania:dragonstone').upgradeLevel(1).altarSyphon(2000.0).consumptionRate(5.0).drainRate(5.0)

event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "type": "astralsorcery:crystal",
    "hasToBeAttuned": false,
    "hasToBeCelestial": false,
    "canBeAttuned": true,
    "canBeCelestialCrystal": true
  },
  "output": {
    "item": "bloodmagic:weakbloodorb"
  },
  "upgradeLevel": 0,
  "altarSyphon": 5000,
  "consumptionRate": 5,
  "drainRate": 5
})

event.recipes.bloodmagic.altar('bloodmagic:magicianbloodorb', 'botania:gaia_ingot').upgradeLevel(2).altarSyphon(25000.0).consumptionRate(50.0).drainRate(50.0)

event.recipes.bloodmagic.altar('bloodmagic:masterbloodorb', 'bloodmagic:weakbloodshard').upgradeLevel(3).altarSyphon(40000.0).consumptionRate(10.0).drainRate(10.0)

event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": "botania:rune_air"
  },
  "output": {
    "type": "forge:nbt",
    "item": "bloodmagic:airscribetool",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "upgradeLevel": 2,
  "altarSyphon": 5000,
  "consumptionRate": 5,
  "drainRate": 5
})

event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": "botania:rune_fire"
  },
  "output": {
    "type": "forge:nbt",
    "item": "bloodmagic:firescribetool",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "upgradeLevel": 2,
  "altarSyphon": 5000,
  "consumptionRate": 5,
  "drainRate": 5
})

event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": "botania:rune_water"
  },
  "output": {
    "type": "forge:nbt",
    "item": "bloodmagic:waterscribetool",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "upgradeLevel": 2,
  "altarSyphon": 5000,
  "consumptionRate": 5,
  "drainRate": 5
})

event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": "botania:rune_earth"
  },
  "output": {
    "type": "forge:nbt",
    "item": "bloodmagic:earthscribetool",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "upgradeLevel": 2,
  "altarSyphon": 5000,
  "consumptionRate": 5,
  "drainRate": 5
})

event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": "minecraft:coal_block"
  },
  "output": {
    "type": "forge:nbt",
    "item": "bloodmagic:duskscribetool",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "upgradeLevel": 3,
  "altarSyphon": 5000,
  "consumptionRate": 5,
  "drainRate": 5
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "tconstruct:soulsteel_ingot"
  },
  "input1": {
    "item": "astralsorcery:stardust"
  },
  "input2": {
    "item": "botania:mana_glass"
  },
  "input3": {
    "item": "astralsorcery:nocturnal_powder"
  },
  "output": {
    "item": "bloodmagic:soulgempetty"
  },
  "minimumDrain": 1.0,
  "drain": 1.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "bloodmagic:soulgempetty"
  },
  "input1": {
    "item": "astralsorcery:infused_crystal_sword",
    "count": 1
    
  },
  "output": {
    "item": "bloodmagic:soulsword",
    "nbt": "{Damage:0}"
  },
  "minimumDrain": 0.0,
  "drain": 0.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "bloodmagic:soulgempetty"
  },
  "input1": {
    "item": "ibpdx:star_diamond"
  },
  "input2": {
    "item": "astralsorcery:resonating_gem"
  },
  "input3": {
    "item": "botania:pixie_dust"
  },
  "output": {
    "item": "bloodmagic:soulgemlesser"
  },
  "minimumDrain": 60.0,
  "drain": 20.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "bloodmagic:soulgemlesser"
  },
  "input1": {
    "item": "botania:dragonstone"
  },
  "input2": {
    "item": "astralsorcery:resonating_gem"
  },
  "input3": {
    "item": "bloodmagic:infusedslate"
  },
  "output": {
    "item": "bloodmagic:soulgemcommon"
  },
  "minimumDrain": 240.0,
  "drain": 50.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "astralsorcery:stardust"
  },
  "input1": {
    "item": "botania:mana_powder"
  },
  "input2": {
    "item": "thermal:coal_coke"
  },
  "input3": {
    "item": "botania:rune_mana"
  },
  "output": {
    "item": "bloodmagic:arcaneashes"
  },
  "minimumDrain": 50.0,
  "drain": 50.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "astralsorcery:illumination_powder"
  },
  "input1": {
    "item": "botania:spell_cloth"
  },
  "input2": {
    "item": "botania:rune_lust"
  },
  "output": {
    "item": "bloodmagic:reagentbinding"
  },
  "minimumDrain": 512.0,
  "drain": 128.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "botania:shimmerrock"
  },
  "input1": {
    "item": "xreliquary:infernal_claw"
  },
  "input2": {
    "item": "minecraft:cauldron"
  },
  "output": {
    "item": "bloodmagic:demoncrucible"
  },
  "minimumDrain": 512.0,
  "drain": 128.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "botania:shimmerrock"
  },
  "input1": {
    "item": "xreliquary:molten_core"
  },
  "input2": {
    "item": "botania:scorched_seeds"
  },
  "input3": {
    "item": "bloodmagic:infusedslate"
  },
  "output": {
    "item": "bloodmagic:demoncrystallizer"
  },
  "minimumDrain": 512.0,
  "drain": 128.0
})

event.custom({"type":"mekanism:evaporating","input":{"amount":1,"fluid":"ibpdx:nital"},"output":{"fluid":"ibpdx:concentrated_nital","amount":1}})
event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":2,"gas":"ibpdx:nitrous_acid"},"rightInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"gas":"ibpdx:nitric_acid","amount":2}})
event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":3,"gas":"ibpdx:nitric_acid"},"rightInput":{"amount":7,"gas":"ibpdx:ethanol_gas"},"output":{"gas":"ibpdx:nital_gas","amount":10}})

event.recipes.mekanismMetallurgicInfusing('mekanism:basic_control_circuit', 'ibpdx:circuit_base_t1', 'mekanism:redstone', 20)
event.recipes.mekanismMetallurgicInfusing('mekanism:advanced_control_circuit', 'ibpdx:circuit_base_t2', 'mekanism:diamond', 20)
event.recipes.mekanismMetallurgicInfusing('mekanism:elite_control_circuit', 'ibpdx:circuit_base_t3', 'mekanism:refined_obsidian', 20)
event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_infused', 'ftbic:advanced_alloy', 'mekanism:redstone', 20)
event.recipes.mekanismMetallurgicInfusing('ftbic:advanced_alloy', 'immersiveengineering:ingot_steel', 'mekanism:tin', 30)

event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"ibpdx:mixed_blend"}},"output":{"item":"ibpdx:mixed_brick","count":2}})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDEDCBA",
    "FGHIJKHGF",
    "LHMNONMHL",
    "DPQRSRQPD",
    "ETUVWVUTE",
    "DXYRSRYXD",
    "LHMZOZMHL",
    "1GHIJKHG1",
    "ABCDEDCBA"
  ],
  "key": {
    "A": {
      "item": "thermal:coal_coke"
    },
    "B": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "C": {
      "item": "astralsorcery:resonating_gem"
    },
    "D": {
      "item": "ftbic:advanced_alloy"
    },
    "E": {
      "item": "powah:charged_snowball"
    },
    "F": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    },
    "G": {
      "item": "industrialforegoing:plastic"
    },
    "H": {
      "item": "thermal:enderium_glass"
    },
    "I": {
      "item": "astralsorcery:colored_lens_push"
    },
    "J": {
      "item": "ftbic:carbon_plate"
    },
    "K": {
      "item": "botania:quartz_dark"
    },
    "L": {
      "item": "bloodmagic:infusedslate"
    },
    "M": {
      "item": "botania:elementium_ingot"
    },
    "N": {
      "item": "botania:hopperhock"
    },
    "O": {
      "item": "ftbic:iridium_circuit"
    },
    "P": {
      "item": "thermal:enderium_plate"
    },
    "Q": {
      "item": "thermal:phytogro"
    },
    "R": {
      "item": "botania:pixie_dust"
    },
    "S": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "T": {
      "item": "ibpdx:bloodshine_ingot"
    },
    "U": {
      "item": "refinedstorage:improved_processor"
    },
    "V": {
      "item": "mekanismadditions:purple_plastic"
    },
    "W": {
      "item": "avaritia:infinity_ingot"
    },
    "X": {
      "item": "thermal:lumium_plate"
    },
    "Y": {
      "item": "thermal:rosin"
    },
    "Z": {
      "item": "botania:thermalily"
    },
    "1": {
      "item": "infused_crystals:infused_lapisium_crystal"
    }
  },
  "result": {
    "item": "avaritia:infinity_catalyst"
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  A  ",
    " BCB ",
    "ACDCA",
    " BCB ",
    "  A  "
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:inferium_block"
    },
    "B": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "C": {
      "item": "ibpdx:crystal_of_life"
    },
    "D": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": false
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "mysticalagriculture:infusion_crystal",
    "count": 1,
    "nbt": "{Damage:0,AS_Amulet_Holder:[I;-2135483932,-1137425982,-1795900702,-1359176341]}"
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDCBA",
    "BEFGFEB",
    "HIJKLIH",
    "MGKNKGM",
    "HIOKPIH",
    "BEFGFEB",
    "ABCQCBA"
  ],
  "key": {
    "A": {
      "item": "tconstruct:ender_slime_crystal"
    },
    "B": {
      "item": "betterendforge:eternal_crystal"
    },
    "C": {
      "item": "tconstruct:sky_slime_crystal"
    },
    "D": {
      "item": "ibpdx:day_rune"
    },
    "E": {
      "item": "mysticalagriculture:supremium_block"
    },
    "F": {
      "item": "redstone_arsenal:flux_gem_block"
    },
    "G": {
      "item": "ibpdx:crystal_of_power"
    },
    "H": {
      "item": "bloodmagic:vengefulcrystal"
    },
    "I": {
      "item": "ftbic:antimatter_crystal"
    },
    "J": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": false
    },
    "K": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    },
    "L": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": false
    },
    "M": {
      "item": "bloodmagic:lavacrystal"
    },
    "N": {
      "type": "forge:nbt",
      "item": "mysticalagriculture:infusion_crystal",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "O": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": false
    },
    "P": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": false,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": false
    },
    "Q": {
      "item": "ibpdx:night_rune"
    }
  },
  "result": {
    "item": "mysticalagriculture:master_infusion_crystal"
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "       ",
    "ABBBBBA",
    "ACDDDCA",
    "AEFGFEA",
    "ACDDDCA",
    "ABBBBBA",
    "       "
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_plate"
    },
    "B": {
      "item": "rftoolsbase:dimensionalshard"
    },
    "C": {
      "item": "thermal:enderium_gear"
    },
    "D": {
      "item": "ftbic:iridium_alloy"
    },
    "E": {
      "item": "avaritia:neutronium_ingot"
    },
    "F": {
      "item": "mysticalagradditions:insanium_ingot"
    },
    "G": {
      "item": "ftbic:compressor"
    }
  },
  "result": {
    "item": "extendedcrafting:compressor"
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAACDCAAA",
    "AEFGHGFEA",
    "AIJKLKJIA",
    "CGKMNMKGC",
    "DHONPNQHD",
    "CGKMNMKGC",
    "AIJKRKJIA",
    "AEFGHGFEA",
    "AAACDCAAA"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:starmetal_ingot"
    },
    "C": {
      "item": "ibpdx:star_diamond"
    },
    "D": {
      "item": "astralsorcery:colored_lens_spectral"
    },
    "E": {
      "type": "forge:nbt",
      "item": "botania:brew_flask",
      "count": 1,
      "nbt": "{brewKey:\"botania:clear\"}"
    },
    "F": {
      "item": "astralsorcery:illumination_powder"
    },
    "G": {
      "item": "bloodmagic:defaultcrystal"
    },
    "H": {
      "item": "ibpdx:energized_infinity_chunk"
    },
    "I": {
      "item": "botania:gaia_ingot"
    },
    "J": {
      "item": "bloodmagic:demonslate"
    },
    "K": {
      "item": "botania:dragonstone"
    },
    "L": {
      "item": "bloodmagic:watersigil"
    },
    "M": {
      "item": "botania:elementium_block"
    },
    "N": {
      "item": "ibpdx:bloodshine_ingot"
    },
    "O": {
      "item": "bloodmagic:growthsigil"
    },
    "P": {
      "item": "ibpdx:absolution_rune"
    },
    "Q": {
      "item": "bloodmagic:airsigil"
    },
    "R": {
      "item": "bloodmagic:lavasigil"
    }
  },
  "result": {
    "item": "ibpdx:ultimate_magic_block"
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBCBBBA",
    "BDEFFFEDB",
    "BGHIJIHGB",
    "BFIKKKIFB",
    "CFJKLKJFC",
    "BFIKKKIFB",
    "BGHIJIHGB",
    "BDEFFFEDB",
    "ABBBCBBBA"
  ],
  "key": {
    "A": {
      "item": "ftbic:iridium_neutron_reflector"
    },
    "B": {
      "item": "powah:dielectric_rod"
    },
    "C": {
      "item": "ibpdx:empowered_silver_ingot"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:nickel_gear"
    },
    "F": {
      "item": "thermal:signalum_plate"
    },
    "G": {
      "item": "thermal:lumium_plate"
    },
    "H": {
      "item": "thermal:phytogro"
    },
    "I": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "J": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "K": {
      "item": "mekanism:hdpe_sheet"
    },
    "L": {
      "item": "mekanism:teleportation_core"
    }
  },
  "result": {
    "item": "ibpdx:ultimate_tech_block"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 1000000,
  "input": {
    "item": "mysticalagriculture:prosperity_ingot"
  },
  "ingredients": [
    {
      "item": "extendedcrafting:redstone_ingot"
    },
    {
      "item": "thermal:signalum_ingot"
    },
    {
      "item": "mekanism:ingot_refined_glowstone"
    },
    {
      "item": "botania:terrasteel_ingot"
    },
    {
      "item": "ibpdx:empowered_aluminum_ingot"
    },
    {
      "item": "astralsorcery:starmetal_ingot"
    },
    {
      "item": "mysticalagradditions:insanium_ingot"
    }
  ],
  "result": {
    "item": "ibpdx:inert_infinity_ingot"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "fluid": {
    "name": "ibpdx:molten_duskstone",
    "amount": 144
  },
  "result": {
    "item": "ibpdx:duskstone_ingot"
  },
  "cooling_time": 50
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "fluid": {
    "name": "tconstruct:molten_nickel",
    "amount": 144
  },
  "result": {
    "item": "thermal:nickel_ingot"
  },
  "cooling_time": 50
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "type": "mantle:intersection",
    "ingredients": [
      {
        "item": "tconstruct:clear_glass"
      }
    ]
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_gold",
    "amount": 864
  },
  "result": "ibpdx:molten_gold_casing",
  "cooling_time": 60
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "name": "ibpdx:molten_uu_matter",
      "amount": 10
    },
    {
      "name": "kubejs:molten_pyrotheum",
      "amount": 100
    },
    {
      "name": "ibpdx:molten_petrotheum",
      "amount": 100
    },
    {
      "name": "kubejs:molten_cryotheum",
      "amount": 100
    },
    {
      "name": "ibpdx:molten_aerotheum",
      "amount": 100
    },
    {
      "name": "astralsorcery:liquid_starlight",
      "amount": 1000
    },
    {
      "name": "bloodmagic:life_essence_fluid",
      "amount": 1000
    }
  ],
  "result": {
    "fluid": "ibpdx:infinity_fluid",
    "amount": 200 
  },
  "temperature": 700
})

event.custom({
  "type": "interactio:item_lightning",
  "inputs": [
    {
      "item": "minecraft:quartz",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "botania:quartz_dark",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "botania:quartz_dark",
      "count": 1,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:clay_ball",
      "count": 2,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:flouritem",
      "count": 4
    }
  ],
  "fluid": {
    "fluid": "water"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "powah:dielectric_paste",
          "count": 16
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.0
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "ibpdx:duskstone_ingot"
  },
  "output": {
    "item": "botania:manasteel_ingot"
  },
  "mana": 3000
})

event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/aluminum"},"input":{"tag":"forge:ingots/aluminum"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/iron"},"input":{"tag":"forge:ingots/iron"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/gold"},"input":{"tag":"forge:ingots/gold"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/copper"},"input":{"tag":"forge:ingots/copper"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/tin"},"input":{"tag":"forge:ingots/tin"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/steel"},"input":{"tag":"forge:ingots/steel"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/lead"},"input":{"tag":"forge:ingots/lead"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/silver"},"input":{"tag":"forge:ingots/silver"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/electrum"},"input":{"tag":"forge:ingots/electrum"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/constantan"},"input":{"tag":"forge:ingots/constantan"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/signalum"},"input":{"tag":"forge:ingots/signalum"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/lumium"},"input":{"tag":"forge:ingots/lumium"},"energy":2400})
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"tag":"forge:plates/enderium"},"input":{"tag":"forge:ingots/enderium"},"energy":2400})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/iron"
  },
  "result": [
    {
      "item": "thermal:iron_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/gold"
  },
  "result": [
    {
      "item": "thermal:gold_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/copper"
  },
  "result": [
    {
      "item": "thermal:copper_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/tin"
  },
  "result": [
    {
      "item": "thermal:tin_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/lead"
  },
  "result": [
    {
      "item": "thermal:lead_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/silver"
  },
  "result": [
    {
      "item": "thermal:silver_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/invar"
  },
  "result": [
    {
      "item": "thermal:invar_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/constantan"
  },
  "result": [
    {
      "item": "thermal:constantan_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/electrum"
  },
  "result": [
    {
      "item": "thermal:electrum_plate"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/steel"
  },
  "result": [
    {
      "item": "immersiveengineering:plate_steel"
    }
  ]
})

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "tag": "forge:ingots/aluminum"
  },
  "result": [
    {
      "item": "immersiveengineering:plate_aluminum"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/netherite"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:netherite_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/iron"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:iron_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/desh"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "boss_tools:desh_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/gold"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:gold_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/lead"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:lead_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/silver"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:silver_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/copper"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:copper_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/tin"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:tin_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/aluminum"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "immersiveengineering:plate_aluminum"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/uranium"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "immersiveengineering:plate_uranium"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/nickel"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:nickel_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/bronze"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:bronze_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/constantan"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:constantan_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/electrum"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:electrum_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/steel"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "immersiveengineering:plate_steel"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/signalum"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:signalum_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/lumium"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:lumium_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/enderium"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:enderium_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:rolling",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:ingots/invar"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:invar_plate"
    }
  ]
})

event.custom({
  "type": "ftbic:extruding",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:storage_blocks/steel"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "immersiveengineering:drillhead_steel"
    }
  ]
})

event.custom({
  "type": "ftbic:extruding",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:plates/copper"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ftbic:copper_wire",
      "count": 3
    }
  ]
})

event.custom({
  "type": "ftbic:extruding",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:plates/aluminum"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ftbic:aluminum_wire",
      "count": 3
    }
  ]
})

event.custom({
  "type": "ftbic:extruding",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:plates/gold"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ftbic:gold_wire",
      "count": 3
    }
  ]
})

event.custom({
  "type": "ftbic:extruding",
  "inputItems": [
    {
      "ingredient": {
        "tag": "forge:plates/enderium"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ftbic:enderium_wire",
      "count": 3
    }
  ]
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:iron\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:iron_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:gold\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:gold_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:diamond\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:diamond_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:emerald\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:emerald_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:redstone\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:redstone_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:glowstone\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:glowstone",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:copper\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:copper_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:tin\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:tin_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:silver\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:silver_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:lead\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:lead_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:aluminum\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "immersiveengineering:storage_aluminum",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:nickel\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:nickel_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:uranium\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "immersiveengineering:storage_uranium",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:polonium\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "mekanism:pellet_polonium",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:silicon\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "boss_tools:silicon_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:fluorite\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "mekanism:block_fluorite",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "interactio:item_explode",
  "inputs": [
{
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:iridium\"}"
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:iridium_block",
          "count": 256
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})



event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:inert_infinity_ingot"
    },
    {
      "fluid": "ibpdx:infinity_fluid",
      "amount": 200
    }
  ],
  "result": [
    {
      "item": "avaritia:infinity_ingot"
    }
  ]
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "ibpdx:pyrotheum_blend"
  },
  "result": [
    {
      "fluid": "kubejs:molten_pyrotheum",
      "amount": 250
    }
  ],
  "energy": 40000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "ibpdx:cryotheum_blend"
  },
  "result": [
    {
      "fluid": "kubejs:molten_cryotheum",
      "amount": 250
    }
  ],
  "energy": 40000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "ibpdx:petrotheum_blend"
  },
  "result": [
    {
      "fluid": "ibpdx:molten_petrotheum",
      "amount": 250
    }
  ],
  "energy": 40000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "ibpdx:aerotheum_blend"
  },
  "result": [
    {
      "fluid": "ibpdx:molten_aerotheum",
      "amount": 250
    }
  ],
  "energy": 40000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "tconstruct:blood_slime_ball"
  },
  "result": [
    {
      "fluid": "tconstruct:blood",
      "amount": 250
    }
  ],
  "energy": 10000
})

event.stonecutting('masterfulmachinery:advanced_chemical_plant_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_blue_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:bedrock_miner_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:block_duplicator_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:boss_fight_simulator_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:duskstone_mixer_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:liquid_fuel_generator_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:machine_part_crafter_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:material_compression_device_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:metal_empowerer_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:ore_washer_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:plate_presser_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:precipitator_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:processor_cutter_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:starblood_infuser_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:starlight_enchanter_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:starlight_factory_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:super_alloyer_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:peat_engine_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:carpenter_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:carpenter_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:mana_death_reactor_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:lunar_satellite_dish_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:auto_starlight_infuser_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:fluxial_converter_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:alchemy_reactor_core_controller', 'masterfulmachinery:generic_controller');
event.stonecutting('masterfulmachinery:remix_generator_controller', 'masterfulmachinery:generic_controller');

event.stonecutting('masterfulmachinery:alchemy_reactor_blue_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:bedrock_miner_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:block_duplicator_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:boss_fight_simulator_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:duskstone_mixer_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:machine_part_crafter_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:material_compression_device_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:metal_empowerer_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:ore_washer_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:plate_presser_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:precipitator_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:processor_cutter_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:starblood_infuser_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:starlight_enchanter_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:starlight_factory_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:super_alloyer_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:peat_engine_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:carpenter_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:lunar_satellite_dish_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:auto_starlight_infuser_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');
event.stonecutting('masterfulmachinery:remix_generator_item_port_items_input', 'masterfulmachinery:generic_item_port_items_input');

event.stonecutting('masterfulmachinery:alchemy_reactor_blue_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:bedrock_miner_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:block_duplicator_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:boss_fight_simulator_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:duskstone_mixer_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:machine_part_crafter_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:material_compression_device_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:metal_empowerer_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:ore_washer_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:plate_presser_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:precipitator_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:processor_cutter_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:starblood_infuser_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:starlight_enchanter_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:starlight_factory_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:super_alloyer_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:peat_engine_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:carpenter_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:lunar_satellite_dish_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');
event.stonecutting('masterfulmachinery:auto_starlight_infuser_item_port_items_output', 'masterfulmachinery:generic_item_port_items_output');

event.stonecutting('masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_blue_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:boss_fight_simulator_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:duskstone_mixer_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:liquid_fuel_generator_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:material_compression_device_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:metal_empowerer_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:ore_washer_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:precipitator_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:starblood_infuser_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:starlight_enchanter_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:starlight_factory_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:carpenter_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:mana_death_reactor_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');
event.stonecutting('masterfulmachinery:auto_starlight_infuser_fluid_port_fluids_input', 'masterfulmachinery:generic_fluid_port_fluids_input');

event.stonecutting('masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_blue_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:boss_fight_simulator_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:liquid_fuel_generator_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:material_compression_device_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:metal_empowerer_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:ore_washer_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:precipitator_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:starblood_infuser_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:starlight_enchanter_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:starlight_factory_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:carpenter_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:mana_death_reactor_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');
event.stonecutting('masterfulmachinery:auto_starlight_infuser_fluid_port_fluids_output', 'masterfulmachinery:generic_fluid_port_fluids_output');

event.stonecutting('masterfulmachinery:advanced_chemical_plant_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_blue_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:block_duplicator_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:boss_fight_simulator_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:liquid_fuel_generator_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:machine_part_crafter_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:material_compression_device_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:metal_empowerer_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:ore_washer_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:precipitator_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:processor_cutter_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:starlight_enchanter_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:super_alloyer_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:peat_engine_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:carpenter_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:lunar_satellite_dish_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');
event.stonecutting('masterfulmachinery:fluxial_converter_energy_port_energy_input', 'masterfulmachinery:generic_energy_port_energy_input');

event.stonecutting('masterfulmachinery:advanced_chemical_plant_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_blue_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:block_duplicator_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:boss_fight_simulator_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:liquid_fuel_generator_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:machine_part_crafter_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:material_compression_device_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:metal_empowerer_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:ore_washer_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:precipitator_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:processor_cutter_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:starlight_enchanter_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:super_alloyer_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:peat_engine_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:carpenter_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:lunar_satellite_dish_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:fluxial_converter_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');
event.stonecutting('masterfulmachinery:remix_generator_energy_port_energy_output', 'masterfulmachinery:generic_energy_port_energy_output');

event.stonecutting('masterfulmachinery:alchemy_reactor_blue_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:bedrock_miner_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:boss_fight_simulator_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:duskstone_mixer_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:plate_presser_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:starblood_infuser_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:mana_death_reactor_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');
event.stonecutting('masterfulmachinery:fluxial_converter_mana_port_botania_mana_input', 'masterfulmachinery:generic_mana_port_botania_mana_input');

event.stonecutting('masterfulmachinery:alchemy_reactor_blue_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_cyan_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_green_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_red_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_orange_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_violet_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:alchemy_reactor_yellow_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:bedrock_miner_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:boss_fight_simulator_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:duskstone_mixer_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:plate_presser_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:starblood_infuser_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:mana_death_reactor_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');
event.stonecutting('masterfulmachinery:fluxial_converter_mana_port_botania_mana_output', 'masterfulmachinery:generic_mana_port_botania_mana_output');

event.stonecutting('bloodmagic:dungeon_polished', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_tile', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_tilespecial', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_polished_stairs', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_pillar_center', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_pillar_special', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_polished_wall', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_polished_gate', 'bloodmagic:dungeon_stone');
event.stonecutting('bloodmagic:dungeon_tile_slab', 'bloodmagic:dungeon_stone');

event.stonecutting('astralsorcery:marble_raw', 'chisel:marble/raw');
event.stonecutting('chisel:marble/raw', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/cracked', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/solid_bricks', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/small_bricks', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/soft_bricks', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/cracked_bricks', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/triple_bricks', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/encased_bricks', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/chaotic_bricks', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/array', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/tiles_medium', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/tiles_large', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/tiles_small', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/chaotic_medium', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/chaotic_small', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/braid', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/dent', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/french_1', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/french_2', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/jellybean', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/layers', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/mosaic', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/ornate', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/panel', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/road', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/zag', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/circular', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/circularct', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/weaver', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/pillar', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/twisted', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/prism', 'astralsorcery:marble_raw');
event.stonecutting('chisel:marble/cuts', 'astralsorcery:marble_raw');

event.stonecutting('astralsorcery:marble_raw', 'quark:marble');
event.stonecutting('quark:marble', 'astralsorcery:marble_raw');
event.stonecutting('quark:polished_marble', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_slab', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_stairs', 'astralsorcery:marble_raw');
event.stonecutting('quark:polished_marble_slab', 'astralsorcery:marble_raw');
event.stonecutting('quark:polished_marble_stairs', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_bricks', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_bricks_slab', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_bricks_stairs', 'astralsorcery:marble_raw');
event.stonecutting('quark:chiseled_marble_bricks', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_pavement', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_pillar', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_vertical_slab', 'astralsorcery:marble_raw');
event.stonecutting('quark:polished_marble_vertical_slab', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_bricks_vertical_slab', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_wall', 'astralsorcery:marble_raw');
event.stonecutting('quark:marble_bricks_wall', 'astralsorcery:marble_raw');

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "ibpdx:molten_petrotheum",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:earth_tnt"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "kubejs:molten_pyrotheum",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:fire_tnt"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "kubejs:molten_cryotheum",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:ice_tnt"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "ibpdx:molten_aerotheum",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:lightning_tnt"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "thermal:redstone",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:redstone_tnt"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "thermal:glowstone",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:glowstone_tnt"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "thermal:ender",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:ender_tnt"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:tnt"
    },
    {
      "fluid": "thermal:resin",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "thermal:phyto_tnt"
    }
  ]
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:cleric",
  "level": 1,
  "xp": 1,
  "costA": {
    "item": "ftbic:electronic_circuit",
    "count": 2
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 7
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:cleric",
  "level": 1,
  "xp": 5,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 25
  },
  "result": {
    "item": "cyclic:charm_water",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:cleric",
  "level": 2,
  "xp": 14,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 20
  },
  "result": {
    "item": "cyclic:charm_antidote",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:cleric",
  "level": 2,
  "xp": 14,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 40
  },
  "result": {
    "item": "cyclic:charm_speed",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:cleric",
  "level": 3,
  "xp": 33,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 30
  },
  "result": {
    "item": "cyclic:charm_void",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:cleric",
  "level": 3,
  "xp": 33,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 30
  },
  "result": {
    "item": "cyclic:charm_wither",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:cleric",
  "level": 4,
  "xp": 50,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 30
  },
  "result": {
    "item": "cyclic:charm_fire",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:toolsmith",
  "level": 1,
  "xp": 1,
  "costA": {
    "item": "boss_tools:compressed_steel",
    "count": 5
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 3
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:toolsmith",
  "level": 1,
  "xp": 3,
  "costA": {
    "item": "immersiveengineering:pickaxe_steel",
    "count": 1
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 2
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:toolsmith",
  "level": 2,
  "xp": 10,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 50
  },
  "result": {
    "item": "cyclic:prospector",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:toolsmith",
  "level": 2,
  "xp": 10,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 50
  },
  "result": {
    "item": "cyclic:spawn_inspector",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:toolsmith",
  "level": 3,
  "xp": 25,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 50
  },
  "result": {
    "item": "cyclic:anvil_void",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:toolsmith",
  "level": 3,
  "xp": 25,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 30
  },
  "result": {
    "item": "cyclic:torch_launcher",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:toolsmith",
  "level": 4,
  "xp": 40,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 60
  },
  "result": {
    "item": "cyclic:anvil_magma",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 1,
  "xp": 3,
  "costA": {
    "item": "pamhc2foodcore:applejuiceitem",
    "count": 8
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 1,
  "xp": 3,
  "costA": {
    "item": "pamhc2foodcore:sweetberryjuiceitem",
    "count": 12
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 2,
  "xp": 10,
  "costA": {
    "item": "pamhc2foodcore:pumpkinsoupitem",
    "count": 3
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 2,
  "xp": 10,
  "costA": {
    "item": "pamhc2foodcore:potatosoupitem",
    "count": 4
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 3,
  "xp": 20,
  "costA": {
    "item": "pamhc2foodcore:fruitcrumbleitem",
    "count": 4
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 3
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 3,
  "xp": 20,
  "costA": {
    "item": "pamhc2foodcore:sweetberryjellytoastitem",
    "count": 4
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 3
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 4,
  "xp": 40,
  "costA": {
    "item": "pamhc2foodcore:chickenpotpieitem",
    "count": 2
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 6
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:farmer",
  "level": 4,
  "xp": 40,
  "costA": {
    "item": "pamhc2foodcore:chickendinneritem",
    "count": 2
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 8
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:fletcher",
  "level": 1,
  "xp": 3,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 1
  },
  "result": {
    "item": "minecraft:spectral_arrow",
    "count": 6
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:fletcher",
  "level": 1,
  "xp": 3,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 1
  },
  "result": {
    "item": Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_poison"}'),
    "count": 4
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:fletcher",
  "level": 4,
  "xp": 40,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 16
  },
  "result": {
    "item": "cyclic:quiver_damage",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:fletcher",
  "level": 4,
  "xp": 40,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 16
  },
  "result": {
    "item": "cyclic:quiver_lightning",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:shepherd",
  "level": 1,
  "xp": 3,
  "costA": {
    "item": "minecraft:leather",
    "count": 8
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:shepherd",
  "level": 1,
  "xp": 3,
  "costA": {
    "item": "minecraft:white_wool",
    "count": 12
  },
  "result": {
    "item": "thermal:enderium_coin",
    "count": 1
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:shepherd",
  "level": 4,
  "xp": 30,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 64
  },
  "result": {
    "item": "miniutilities:magical_egg",
    "count": 2
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:shepherd",
  "level": 3,
  "xp": 30,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 64
  },
  "result": {
    "item": "miniutilities:magical_egg",
    "count": 2
  }
})

event.custom({
  "type": "boss_tools_giselle_addon:alien_trading_itemstack",
  "job": "minecraft:shepherd",
  "level": 2,
  "xp": 10,
  "costA": {
    "item": "thermal:enderium_coin",
    "count": 16
  },
  "result": {
      "type": "forge:nbt",
      "item": "xreliquary:mob_charm_fragment",
      "count": 1,
      "nbt": '{entity:"boss_tools:alien_zombie"}'
  }
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:mars_air_bottle"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "chemlib:compound_carbon_dioxide"
    }
  ]
})


event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "immersiveengineering:storage_steel"
    },
    {
      "fluid": "ibpdx:molten_chromium",
      "amount": 144
    }
  ],
  "result": [
    {
      "item": "ibpdx:stainless_steel_block"
    }
  ]
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "chemlib:ingot_chromium"
  },
  "result": [
    {
      "fluid": "ibpdx:molten_chromium",
      "amount": 144
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "ftbic:antimatter"
  },
  "result": [
    {
      "fluid": "ibpdx:molten_uu_matter",
      "amount": 100
    }
  ],
  "energy": 100000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "thermal:flax_seeds"
  },
  "result": [
    {
      "fluid": "ibpdx:seed_oil",
      "amount": 100
    }
  ],
  "energy": 1000
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "boss_tools:desh_ingot"
  },
  "output": {
    "item": "chemlib:ingot_chromium",
    "count": 1
  },
  "mana": 250,
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})



event.custom({
  "type": "interactio:fluid_fluid_transform",
  "items": [
    {
      "type": "forge:nbt", // custom ingredient type, only works on forge
      "item": "minecraft:potion",
      "count": 1,
      "nbt": '{Potion:"minecraft:swiftness"}'
    }
  ],
  "input": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "fluid": "ibpdx:energized_speed_potion"
        },
        "weight": 1
      },
    ],
    "empty_weight": 0
  }
})

event.custom({
  "type": "interactio:fluid_fluid_transform",
  "items": [
    {
      "type": "forge:nbt", // custom ingredient type, only works on forge
      "item": "minecraft:potion",
      "count": 1,
      "nbt": '{Potion:"minecraft:strength"}'
    }
  ],
  "input": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "fluid": "ibpdx:energized_strength_potion"
        },
        "weight": 1
      },
    ],
    "empty_weight": 0
  }
})

event.custom({
  "type": "interactio:fluid_fluid_transform",
  "items": [
    {
      "type": "forge:nbt", // custom ingredient type, only works on forge
      "item": "minecraft:potion",
      "count": 1,
      "nbt": '{Potion:"minecraft:healing"}'
    } 
  ],
  "input": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "fluid": "ibpdx:energized_health_potion"
        },
        "weight": 1
      },
    ],
    "empty_weight": 0
  }
})

event.custom({
  "type": "interactio:fluid_fluid_transform",
  "items": [
    {
      "type": "forge:nbt", // custom ingredient type, only works on forge
      "item": "minecraft:potion",
      "count": 1,
      "nbt": '{Potion:"minecraft:fire_resistance"}'
    }
  ],
  "input": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "fluid": "ibpdx:energized_fire_resistance_potion"
        },
        "weight": 1
      },
    ],
    "empty_weight": 0
  }
})

event.custom({
  "type": "interactio:fluid_fluid_transform",
  "items": [
    {
    "item": "minecraft:bone",
    "count": 1,
    }
  ],
  "input": {
    "fluid": "ibpdx:hot_water"
  },
  "output": {
    "entries": [
      {
        "result": {
          "fluid": "ibpdx:stock"
        },
        "weight": 1
      },
    ],
    "empty_weight": 0
  }
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "minecraft:obsidian"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "minecraft:gold_ingot"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "ibpdx:duskstone_ingot",
      "count": 3
    }
  ],
  "energy": 6400
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "tconstruct:rose_gold_ingot"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "minecraft:glowstone_dust"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "minecraft:redstone"
        }
      ],
      "count": 4
    }
  ],
  "result": [
    {
      "item": "ibpdx:modularium",
      "count": 4
    }
  ],
  "energy": 6400
})

event.custom({
  "type": "tconstruct:entity_melting",
  "entity": {
    "type": "thermal:basalz"
  },
  "result": {
    "fluid": "ibpdx:earthen_blood",
    "amount": 20
  },
  "damage": 2
})

event.custom({
  "type": "tconstruct:entity_melting",
  "entity": {
    "type": "thermal:blizz"
  },
  "result": {
    "fluid": "ibpdx:glacial_blood",
    "amount": 20
  },
  "damage": 2
})

event.custom({
  "type": "tconstruct:entity_melting",
  "entity": {
    "type": "thermal:blitz"
  },
  "result": {
    "fluid": "ibpdx:aethen_blood",
    "amount": 20
  },
  "damage": 2
})

event.custom({
  "type": "tconstruct:entity_melting",
  "entity": {
    "type": "minecraft:witch"
  },
  "result": {
    "fluid": "ibpdx:magical_mixture",
    "amount": 500
  },
  "damage": 4
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/rod"
  },
  "fluid": {
    "name": "ibpdx:earthen_blood",
    "amount": 100
  },
  "result": "thermal:basalz_rod",
  "cooling_time": 67
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/gem"
  },
  "fluid": {
    "name": "ibpdx:glacial_blood",
    "amount": 100
  },
  "result": "thermal:blizz_rod",
  "cooling_time": 67
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/gem"
  },
  "fluid": {
    "name": "ibpdx:aethen_blood",
    "amount": 100
  },
  "result": "thermal:blitz_rod",
  "cooling_time": 67
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/nugget"
  },
  "fluid": {
    "tag": "tconstruct:venom",
    "amount": 100
  },
  "result": "minecraft:spider_eye",
  "cooling_time": 67
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/rod"
  },
  "fluid": {
    "name": "minecraft:milk",
    "amount": 100
  },
  "result": "minecraft:bone",
  "cooling_time": 67
})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:energized_speed_potion"},"gasOutput":{"gas":"ibpdx:speed_potion_gas","amount":1},"gasInput":{"amount":1,"gas":"ibpdx:speed_potion_gas"},"fluidOutput":{"fluid":"ibpdx:energized_speed_potion","amount":1}})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:energized_strength_potion"},"gasOutput":{"gas":"ibpdx:strength_potion_gas","amount":1},"gasInput":{"amount":1,"gas":"ibpdx:strength_potion_gas"},"fluidOutput":{"fluid":"ibpdx:energized_strength_potion","amount":1}})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:energized_health_potion"},"gasOutput":{"gas":"ibpdx:health_potion_gas","amount":1},"gasInput":{"amount":1,"gas":"ibpdx:health_potion_gas"},"fluidOutput":{"fluid":"ibpdx:energized_health_potion","amount":1}})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:energized_fire_resistance_potion"},"gasOutput":{"gas":"ibpdx:fire_resistance_potion_gas","amount":1},"gasInput":{"amount":1,"gas":"ibpdx:fire_resistance_potion_gas"},"fluidOutput":{"fluid":"ibpdx:energized_fire_resistance_potion","amount":1}})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "thermal:flax_seeds"}
  ],
  "energy": 2000,
  "result": {
  "item": "ibpdx:crystallized_flax_seeds"
  }
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "ibpdx:crystallized_flax_seeds"
  },
  "output": "ibpdx:empowered_flax_seeds",
  "time": 100,
  "catalysts": [
    {
      "item": "infused_crystals:redstonium_crystal",
      "index": 0
    },
    {
      "item": "infused_crystals:redstonium_crystal",
      "index": 2
    },
    {
      "item": "infused_crystals:redstonium_crystal",
      "index": 4
    },
    {
      "item": "infused_crystals:redstonium_crystal",
      "index": 6
    }
  ]
})

event.custom({
  "type": "interactio:fluid_fluid_transform",
  "items": [
    {
    "item": "ibpdx:crystallized_flax_seeds",
    "count": 1,
    }
  ],
  "input": {
    "fluid": "ibpdx:seed_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "fluid": "ibpdx:crystallized_oil"
        },
        "weight": 1
      },
    ],
    "empty_weight": 0
  }
})

event.custom({
  "type": "interactio:fluid_fluid_transform",
  "items": [
    {
    "item": "ibpdx:empowered_flax_seeds",
    "count": 1,
    }
  ],
  "input": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "fluid": "ibpdx:empowered_oil"
        },
        "weight": 1
      },
    ],
    "empty_weight": 0
  }
})

event.custom({"type":"mekanism:crystallizing","chemicalType":"gas","input":{"amount":100,"gas":"ibpdx:speed_potion_gas"},"output":{"item":"ibpdx:crystal_of_speed"}})
event.custom({"type":"mekanism:crystallizing","chemicalType":"gas","input":{"amount":100,"gas":"ibpdx:strength_potion_gas"},"output":{"item":"ibpdx:crystal_of_power"}})
event.custom({"type":"mekanism:crystallizing","chemicalType":"gas","input":{"amount":100,"gas":"ibpdx:health_potion_gas"},"output":{"item":"ibpdx:crystal_of_life"}})
event.custom({"type":"mekanism:crystallizing","chemicalType":"gas","input":{"amount":100,"gas":"ibpdx:fire_resistance_potion_gas"},"output":{"item":"ibpdx:crystal_of_inertion"}})

event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":"cyclic:gem_obsidian"}},"output":{"infuse_type":"mekanism:refined_obsidian","amount":120}})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"tconstruct:manyullyn_block"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"draconicevolution:draconium_block"},"duration":500})

event.custom({
  "type": "interactio:item_lightning",
  "inputs": [
    {
      "item": "minecraft:bone",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "tconstruct:necrotic_bone",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  }
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "ibpdx:crystal_of_life"
  },
  "result": [
    {
      "fluid": "bloodmagic:life_essence_fluid",
      "amount": 100
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "ibpdx:crystal_of_life"},
  {"item": "ibpdx:crystal_of_life"},
  {"item": "minecraft:nether_star"}
  ],
  "energy": 2000000,
  "result": {
  "item": "powah:crystal_nitro",
  "count": 8
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "infused_crystals:infused_diamondium_crystal"}
  ],
  "energy": 500000,
  "result": {
  "item": "powah:crystal_niotic",
  "count": 1
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "thermal:xp_crystal"}
  ],
  "energy": 1000000,
  "result": {
  "item": "powah:crystal_spirited",
  "count": 1
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "tconstruct:blazing_bone"}
  ],
  "energy": 20000,
  "result": {
  "item": "powah:crystal_blazing",
  "count": 2
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"tag": "forge:ingots/electrum"},
  {"tag": "forge:ingots/steel"}
  ],
  "energy": 8000,
  "result": {
  "item": "powah:steel_energized",
  "count": 2
  }
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:bowl",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "water"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "botania:water_bowl",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.0
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:snow_block"
  },
  "output": {
    "item": "minecraft:ice",
    "count": 1
  },
  "mana": 1000
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "fluid": {
    "name": "tconstruct:molten_aluminum",
    "amount": 144
  },
  "result": {
    "item": "immersiveengineering:ingot_aluminum"
  },
  "cooling_time": 50
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:redstone_block"}
  ],
  "energy": 18000,
  "result": {
  "item": "infused_crystals:block_of_redstonium"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:iron_block"}
  ],
  "energy": 36000,
  "result": {
  "item": "infused_crystals:block_of_ironium"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:lapis_block"}
  ],
  "energy": 36000,
  "result": {
  "item": "infused_crystals:block_of_lapisium"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:diamond_block"}
  ],
  "energy": 90000,
  "result": {
  "item": "infused_crystals:block_of_diamondium"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:emerald_block"}
  ],
  "energy": 90000,
  "result": {
  "item": "infused_crystals:block_of_emeraldium"
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:coal_block"}
  ],
  "energy": 18000,
  "result": {
  "item": "infused_crystals:block_of_coalium"
  }
})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "minecraft:coal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:dust_coal",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "tag": "minecraft:logs"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:sawdust",
            "count": 1
        }
    ]

})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "dankstorage:dank_1"},
  {"item": "minecraft:redstone_block"},
  {"item": "minecraft:redstone_block"},
  {"item": "minecraft:red_stained_glass"},
  {"item": "minecraft:red_stained_glass"}
  ],
  "energy": 50000,
  "result": {
  "item": "dankstorage:dank_2",
  "count": 1
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:stick"},
  {"item": "minecraft:redstone_block"},
  {"item": "minecraft:redstone_block"},
  {"item": "minecraft:red_stained_glass"},
  {"item": "minecraft:red_stained_glass"}
  ],
  "energy": 50000,
  "result": {
  "item": "dankstorage:1_to_2",
  "count": 1
  }
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:filled_rubber_electron_tube"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ibpdx:organic_diode"
    }
  ]
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "ibpdx:molten_gold_casing"
  },
  "result": {
    "fluid": "tconstruct:molten_gold",
    "amount": 864
  },
  "temperature": 450,
  "time": 40
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:tomato",
      "count": 4
    },
    {
      "item": "thermal:jar",
      "count": 1
    }    
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:tomato_sauce"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:peanut",
      "count": 4
    },
    {
      "item": "thermal:jar",
      "count": 1
    }    
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:peanut_butter"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:strawberry",
      "count": 4
    },
    {
      "item": "thermal:jar",
      "count": 1
    }    
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:jelly"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:corn",
      "count": 2
    },
    {
      "item": "thermal:jar",
      "count": 1
    }    
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:cookingoilitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:pastaitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:cocoa_beans",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:cocoapowderitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:rabbit",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:groundrabbititem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:beef",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:groundbeefitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:chicken",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:groundchickenitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:mutton",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:groundmuttonitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:porkchop",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:groundporkitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "tag": "forge:foods/fish/raw",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:groundfishitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:wheat",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:flouritem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:potato",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:flouritem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:melon_slice",
      "count": 2
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:melonjuiceitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "tag": "forge:fruits",
      "count": 1
    },   
    {
      "item": "minecraft:sugar",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:fruitpunchitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:apple",
      "count": 2
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:applejuiceitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:sweet_berries",
      "count": 2
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:sweetberryjuiceitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:carrot",
      "count": 1
    },
    {
      "item": "minecraft:beetroot",
      "count": 1
    }      
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:p8juiceitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:egg",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:mayonaiseitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "pamhc2foodcore:friesitem",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:potatochipsitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:baked_potato",
      "count": 1
    },
    {
      "item": "pamhc2foodcore:butteritem",
      "count": 1
    }   
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:mashedpotatoesitem"
        },
        "weight": 100
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:potato",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:cooking_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:friesitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:groundfishitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:batteritem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:cooking_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:fishsticksitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:batteritem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "tag": "forge:jellies",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:cooking_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:jellydonutitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:batteritem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:cocoapowderitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:cooking_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:chocolatedonutitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:batteritem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:caramelitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:cooking_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:donutitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:batteritem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:chicken",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:flouritem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:cooking_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:friedchickenitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:bread",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:butteritem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:toastitem",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:bread",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:butteritem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:toastitem",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:pumpkin",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:stock"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:pumpkinsoupitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:pastaitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:groundbeefitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "thermal:tomato_sauce",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:hot_water"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:spaghetti_and_meatballs",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:potato",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "thermal:onion",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:stock"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:potatosoupitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:carrot",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "thermal:onion",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:stock"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:carrotsoupitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:pastaitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:stock"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:noodlesoupitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:flouritem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "water"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:doughitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:snowball",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:milk"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:icecreamitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:cocoapowderitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:marshmellowsitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:milk"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:hotchocolateitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:cocoapowderitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:milk"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:chocolaterollitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:apple",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:applepieitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:carrot",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:carrotbreaditem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:pumpkin",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:pumpkincupcakeitem",
          "count": 16
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sweet_berries",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:sweetberrypieitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:pumpkin",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:pumpkinbreaditem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:carrot",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:carrotcupcakeitem",
          "count": 16
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:cocoapowderitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:chocolatecupcakeitem",
          "count": 16
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:caramelitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:caramelcupcakeitem",
          "count": 16
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:butteritem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "mekanism:salt",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:softpretzelitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sweet_berries",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:apple",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:fruitcrumbleitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "tag": "forge:fruits",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:doughitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:fruitcrumbleitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "tag": "forge:dyes",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:sugar",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:marshmellowchicksitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:marshmellowsitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:cocoapowderitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:milk"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:hotchocolateitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "mekanism:salt",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:yellow_dye",
      "count":1,
      "return_chance": 1.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:milk"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:cheeseitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sugar",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:applejuiceitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:applejellyitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sugar",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:melonjuiceitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:melonjellyitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sugar",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:sweetberryjuiceitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:sweetberryjellyitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:sugar",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:butteritem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:carrot",
      "count":4,
      "return_chance": 0.0
    }    
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:glazedcarrotsitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:toastitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:fishsticksitem",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:mayonaiseitem",
      "count":4,
      "return_chance": 0.0
    }    
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:basicfishsandwichitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "tag": "forge:groundmeats",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:bread",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:meatloafitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:groundporkitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:mayonaiseitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:toastitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:hotdogitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:groundchickenitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:mayonaiseitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:toastitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:basicchickensandwichitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:groundbeefitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:mayonaiseitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:toastitem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:basichamburgeritem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:porkchop",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:egg",
      "count":4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:baconandeggsitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:friesitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "tag": "forge:rawfish",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:flouritem",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:fishandchipsitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:doughitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:chicken",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:potato",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:carrot",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:chickenpotpieitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "pamhc2foodcore:toastitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:cheeseitem",
      "count":4,
      "return_chance": 0.0
    },
    {
      "item": "pamhc2foodcore:butteritem",
      "count":4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:grilledcheeseitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:carrot",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "thermal:spinach",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:beetroot",
      "count": 4,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:fake_air"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "pamhc2foodcore:bakedvegetablemedlyitem",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})


event.smelting('ibpdx:hot_cooking_plate', 'ibpdx:cool_cooking_plate')
event.smelting('minecraft:bread', 'pamhc2foodcore:doughitem')
event.smelting('pamhc2foodcore:marshmellowsitem', 'minecraft:sugar')
event.smelting('pamhc2foodcore:caramelitem', 'pamhc2foodcore:marshmellowsitem')
event.smelting('3x ibpdx:starmetal_nugget', 'astralsorcery:starmetal_ore')
event.smelting('thermal:nickel_ingot', 'thermal:nickel_dust')

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "ibpdx:decrypted_disc",
      "count": 1,
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:phantom_fantasy",
          "count": 1
        },
        "weight": 2
      },
      {
        "result": {
          "item": "ibpdx:china_gal",
          "count": 1
        },
        "weight": 3
      },
      {
        "result": {
          "item": "ibpdx:catch_us",
          "count": 1
        },
        "weight": 3
      },
      {
        "result": {
          "item": "ibpdx:uninstall_love",
          "count": 1
        },
        "weight": 4
      },
      {
        "result": {
          "item": "ibpdx:on_the_moon",
          "count": 1
        },
        "weight": 4
      },
      {
        "result": {
          "item": "ibpdx:ufo_lover",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.5
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "ibpdx:decrypted_disc_2",
      "count": 1,
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:phantom_fantasy",
          "count": 1
        },
        "weight": 2
      },
      {
        "result": {
          "item": "ibpdx:china_gal",
          "count": 1
        },
        "weight": 3
      },
      {
        "result": {
          "item": "ibpdx:catch_us",
          "count": 1
        },
        "weight": 3
      },
      {
        "result": {
          "item": "ibpdx:ufo_lover",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.5
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "ibpdx:decrypted_disc_3",
      "count": 1,
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:phantom_fantasy",
          "count": 1
        },
        "weight": 2
      },
      {
        "result": {
          "item": "ibpdx:ufo_lover",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.5
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "ibpdx:decrypted_disc_4",
      "count": 1,
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:ufo_lover",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.5
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "minecraft:soul_sand"
  },
  "result": {
    "fluid": "tconstruct:liquid_soul",
    "amount": 10
  },
  "temperature": 450,
  "time": 40
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "bloodmagic:basemonstersoul",
      "count": 1,
    },
    {
      "item": "botania:manasteel_ingot",
      "count": 1,
    }
  ],
  "fluid": {
    "fluid": "tconstruct:liquid_soul"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "tconstruct:soulsteel_ingot",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "bloodmagic:basemonstersoul",
      "count": 1,
    },
    {
      "item": "minecraft:stone",
      "count": 1,
    }
  ],
  "fluid": {
    "fluid": "tconstruct:liquid_soul"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "bloodmagic:dungeon_stone",
          "count": 1
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.0
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "thermal:glowstone",
  "input": {
    "item": "immersiveengineering:ingot_uranium"
  },
  "output": {
    "item": "powah:uraninite",
    "count": 1
  },
  "consumptionChance": 0.5,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "ftbic:canning",
  "inputItems": [
    {
      "ingredient": {
        "type": "forge:nbt",
        "item": "ftbic:fluid_cell",
        "count": 1,
        "nbt": "{Fluid:\"minecraft:water\"}"
      },
      "count": 4
    },
    {
      "ingredient": {
        "item": "powah:uraninite"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ftbic:uranium_fuel_rod",
      "count": 4
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "botania:flask"
  },
  "output": "mythicbotany:kvasir_blood",
  "time": 100,
  "catalysts": [
    {
      "item": "bloodmagic:reagentbinding",
      "index": 0
    },
    {
      "item": "bloodmagic:weakbloodshard",
      "index": 1
    },
    {
      "item": "astralsorcery:shifting_star_aevitas",
      "index": 2
    },
    {
      "item": "thermal:redstone_bucket",
      "index": 3
    },
    {
      "item": "bloodmagic:reagentbinding",
      "index": 4
    },
    {
      "item": "bloodmagic:weakbloodshard",
      "index": 5
    },
    {
      "item": "astralsorcery:shifting_star_aevitas",
      "index": 6
    },
    {
      "item": "thermal:redstone_bucket",
      "index": 7
    }
  ]
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 1000000,
  "input": {
    "item": "botania:flask"
  },
  "ingredients": [
    {
      "item": "bloodmagic:reagentbinding"
    },
    {
      "item": "bloodmagic:weakbloodshard"
    },
    {
      "item": "astralsorcery:shifting_star_aevitas"
    },
    {
      "item": "thermal:redstone_bucket"
    },
    {
      "item": "bloodmagic:reagentbinding"
    },
    {
      "item": "bloodmagic:weakbloodshard"
    },
    {
      "item": "astralsorcery:shifting_star_aevitas"
    },
    {
      "item": "thermal:redstone_bucket"
    }
  ],
  "result": {
    "item": "mythicbotany:kvasir_blood"
  }
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "cofh_core:experience",
  "input": {
    "item": "astralsorcery:glass_lens"
  },
  "output": {
    "item": "astralsorcery:colored_lens_growth",
    "count": 1
  },
  "consumptionChance": 1.0,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "tconstruct:sky_slime",
  "input": {
    "item": "astralsorcery:glass_lens"
  },
  "output": {
    "item": "astralsorcery:colored_lens_push",
    "count": 1
  },
  "consumptionChance": 1.0,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "tconstruct:blood",
  "input": {
    "item": "astralsorcery:glass_lens"
  },
  "output": {
    "item": "astralsorcery:colored_lens_damage",
    "count": 1
  },
  "consumptionChance": 1.0,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "industrialforegoing:pink_slime",
  "input": {
    "item": "astralsorcery:glass_lens"
  },
  "output": {
    "item": "astralsorcery:colored_lens_regeneration",
    "count": 1
  },
  "consumptionChance": 1.0,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "tconstruct:ender_slime",
  "input": {
    "item": "astralsorcery:glass_lens"
  },
  "output": {
    "item": "astralsorcery:colored_lens_spectral",
    "count": 1
  },
  "consumptionChance": 1.0,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "minecraft:lava",
  "input": {
    "item": "astralsorcery:glass_lens"
  },
  "output": {
    "item": "astralsorcery:colored_lens_fire",
    "count": 1
  },
  "consumptionChance": 1.0,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "mekanism:basic_tier_installer",
    "count": 1
  },
  "mana": 8000,
  "ingredients": [
    {
      "item": "mekanism:basic_control_circuit"
    },
    {
      "item": "mekanism:basic_control_circuit"
    },
    {
      "item": "ibpdx:stainless_steel_ingot"
    },
    {
      "item": "ibpdx:stainless_steel_ingot"
    },
    {
      "item": "bloodmagic:strong_tau"
    },
    {
      "item": "bloodmagic:strong_tau"
    }
  ]
})


event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "mekanism:advanced_tier_installer",
    "count": 1
  },
  "mana": 16000,
  "ingredients": [
    {
      "item": "mekanism:advanced_control_circuit"
    },
    {
      "item": "mekanism:advanced_control_circuit"
    },
    {
      "item": "ibpdx:crystal_of_power"
    },
    {
      "item": "ibpdx:crystal_of_power"
    },
    {
      "item": "ibpdx:star_pearl"
    },
    {
      "item": "ibpdx:star_diamond"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "mekanism:elite_tier_installer",
    "count": 1
  },
  "mana": 32000,
  "ingredients": [
    {
      "item": "mekanism:elite_control_circuit"
    },
    {
      "item": "mekanism:elite_control_circuit"
    },
    {
      "item": "ibpdx:crystal_of_power"
    },
    {
      "item": "ibpdx:crystal_of_power"
    },
    {
      "item": "mythicbotany:alfsteel_ingot"
    },
    {
      "item": "mythicbotany:alfsteel_ingot"
    }
  ]
})

event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "mekanism:ultimate_tier_installer",
    "count": 1
  },
  "mana": 64000,
  "ingredients": [
    {
      "item": "mekanism:ultimate_control_circuit"
    },
    {
      "item": "mekanism:ultimate_control_circuit"
    },
    {
      "item": "ibpdx:crystal_of_power"
    },
    {
      "item": "ibpdx:crystal_of_power"
    },
    {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": true,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": true
    },
    {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": true,
      "hasToBeCelestial": true,
      "canBeAttuned": false,
      "canBeCelestialCrystal": true
    }
  ]
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 16,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:black_dye",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "minecraft:coal",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:coal_ore",
          "count": 16
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:gray_dye",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "minecraft:iron_ingot",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:iron_ore",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:yellow_dye",
      "count": 2,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "minecraft:gold_ingot",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:gold_ore",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 12,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:red_dye",
      "count": 6,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "minecraft:redstone",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:redstone_ore",
          "count": 12
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 12,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:blue_dye",
      "count": 6,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "minecraft:lapis_lazuli",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:lapis_ore",
          "count": 12
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:orange_dye",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "thermal:copper_ingot",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:copper_ore",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:light_gray_dye",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "thermal:tin_ingot",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:tin_ore",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:white_dye",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "thermal:silver_ingot",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:silver_ore",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:purple_dye",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "thermal:lead_ingot",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:lead_ore",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:brown_dye",
      "count": 2,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "thermal:nickel_ingot",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:nickel_ore",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:green_dye",
      "count": 2,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "immersiveengineering:ingot_uranium",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "mekanism:uranium_ore",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 6,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:pink_dye",
      "count": 3,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "immersiveengineering:ingot_aluminum",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "immersiveengineering:ore_aluminum",
          "count": 6
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:lime_dye",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "minecraft:emerald",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:emerald_ore",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:cyan_dye",
      "count": 2,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "minecraft:diamond",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "minecraft:diamond_ore",
          "count": 4
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:stone",
      "count": 8,
      "return_chance": 0.0
    },
    {
      "item": "minecraft:light_blue_dye",
      "count": 4,
      "return_chance": 0.0
    },
    {
      "item": "ftbic:antimatter",
      "count": 1
    },
    {
      "item": "thermal:apatite",
      "count": 1
    }
  ],
  "fluid": {
    "fluid": "ibpdx:crystallized_oil"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:apatite_ore",
          "count": 8
        },
        "weight": 1
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 1.0
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "ibpdx:fake_air",
      "amount": 1000
    },
    {
      "item": "minecraft:bucket"
    }
  ],
  "result": [
    {
      "item": "ibpdx:liquid_nitrogen_bucket",
      "count": 1
    }
  ],
  "energy": 1000
})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:liquid_nitrogen"},"gasOutput":{"gas":"ibpdx:nitrogen_gas","amount":1},
  "gasInput":{"amount":1,"gas":"ibpdx:nitrogen_gas"},"fluidOutput":{"fluid":"ibpdx:liquid_nitrogen","amount":1}})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:liquid_nitrous_acid"},"gasOutput":{"gas":"ibpdx:nitrous_acid","amount":1},
  "gasInput":{"amount":1,"gas":"ibpdx:nitrous_acid"},"fluidOutput":{"fluid":"ibpdx:liquid_nitrous_acid","amount":1}})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:liquid_nitric_acid"},"gasOutput":{"gas":"ibpdx:nitric_acid","amount":1},
  "gasInput":{"amount":1,"gas":"ibpdx:nitric_acid"},"fluidOutput":{"fluid":"ibpdx:liquid_nitric_acid","amount":1}})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"fluid":"ibpdx:nital"},"gasOutput":{"gas":"ibpdx:nital_gas","amount":1},
  "gasInput":{"amount":1,"gas":"ibpdx:nital_gas"},"fluidOutput":{"fluid":"ibpdx:nital","amount":1}})

event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":1,"gas":"ibpdx:nitrogen_gas"},
  "rightInput":{"amount":2,"gas":"mekanism:oxygen"},"output":{"gas":"ibpdx:nitrous_acid","amount":2}})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:diamond"
    },
    {
      "fluid": "thermal:redstone",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "redstone_arsenal:flux_gem"
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_pulverizer",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:grindstone",
      "index": 0
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_sawmill",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:stonecutter",
      "index": 0
    },
    {
      "item": "minecraft:stone_bricks",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "minecraft:stone_bricks",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_furnace",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:smoker",
      "index": 0
    },
    {
      "item": "immersiveengineering:blastbrick_reinforced",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "immersiveengineering:blastbrick_reinforced",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_smelter",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:blast_furnace",
      "index": 0
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_crucible",
  "time": 500,
  "catalysts": [
    {
      "item": "powah:magmator_basic",
      "index": 0
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_chiller",
  "time": 500,
  "catalysts": [
    {
      "item": "thermal:ice_tnt",
      "index": 0
    },
    {
      "item": "minecraft:packed_ice",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "minecraft:packed_ice",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_press",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:anvil",
      "index": 0
    },
    {
      "item": "minecraft:piston",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "minecraft:piston",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_bottler",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:cauldron",
      "index": 0
    },
    {
      "item": "minecraft:glass",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "minecraft:glass",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_refinery",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:blast_furnace",
      "index": 0
    },
    {
      "item": "industrialforegoing:common_black_hole_tank",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "industrialforegoing:common_black_hole_tank",
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "thermal:machine_frame"
  },
  "output": "thermal:machine_brewer",
  "time": 500,
  "catalysts": [
    {
      "item": "minecraft:brewing_stand",
      "index": 0
    },
    {
      "item": "industrialforegoing:common_black_hole_tank",
      "index": 1
    },
    {
      "item": "thermal:rf_potato",
      "index": 2
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 3
    },
    {
      "item": "thermal:energy_cell_frame",
      "index": 4
    },
    {
      "item": "ibpdx:blockcasing_steel",
      "index": 5
    },
    {
      "item": "thermal:rf_coil",
      "index": 6
    },
    {
      "item": "industrialforegoing:common_black_hole_tank",
      "index": 7
    }
  ]
})

event.custom({
  "type": "immersivepetroleum:hydrotreater",
  "time": 1,
  "energy": 512,
  "result": {
    "fluid": "immersivepetroleum:diesel",
    "amount": 7
  },
  "input": {
    "tag": "forge:diesel_sulfur",
    "amount": 7
  },
  "secondary_input": {
    "tag": "minecraft:water",
    "amount": 7
  },
  "secondary_result": {
    "item": "thermal:sulfur",
    "chance": "0.02"
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": "bloodmagic:simplekey",
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_gold",
    "amount": 144
  },
  "result": "dimdungeons:item_portal_key",
  "cooling_time": 63
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": "minecraft:chiseled_stone_bricks",
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_gold",
    "amount": 144
  },
  "result": "dimdungeons:block_gilded_portal",
  "cooling_time": 63
})

event.custom({
  "type": "betterendforge:infusion",
  "input": 
  {
     "item": "minecraft:crying_obsidian"
  },
  "output": "cyclic:gem_obsidian",
  "time": 100,
  "catalysts": [
    {
      "item": "mekanism:dust_refined_obsidian",
      "index": 0
    },
    {
      "item": "mekanism:dust_refined_obsidian",
      "index": 1
    },
    {
      "item": "redstone_arsenal:obsidian_rod",
      "index": 2
    },
    {
      "item": "redstone_arsenal:obsidian_rod",
      "index": 3
    }
  ]
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 5000,
  "input": {
    "item": "infused_crystals:redstonium_crystal"
  },
  "ingredients": [
    {
      "item": "quark:red_crystal"
    },
    {
      "item": "botania:quartz_red"
    },
    {
      "item": "minecraft:brick"
    },
    {
      "item": "minecraft:nether_brick"
    }
  ],
  "result": {
    "item": "infused_crystals:infused_redstonium_crystal"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "infused_crystals:block_of_redstonium"
  },
  "ingredients": [
    {
      "item": "quark:red_crystal"
    },
    {
      "item": "botania:quartz_red"
    },
    {
      "item": "minecraft:brick"
    },
    {
      "item": "minecraft:nether_brick"
    }
  ],
  "result": {
    "item": "infused_crystals:block_of_infused_redstonium"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 5000,
  "input": {
    "item": "infused_crystals:coalium_crystal"
  },
  "ingredients": [
    {
      "item": "quark:black_crystal"
    },
    {
      "item": "botania:quartz_dark"
    },
    {
      "item": "minecraft:blackstone"
    },
    {
      "item": "botania:black_petal"
    }
  ],
  "result": {
    "item": "infused_crystals:infused_coalium_crystal"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "infused_crystals:block_of_coalium"
  },
  "ingredients": [
    {
      "item": "quark:black_crystal"
    },
    {
      "item": "botania:quartz_dark"
    },
    {
      "item": "minecraft:blackstone"
    },
    {
      "item": "botania:black_petal"
    }
  ],
  "result": {
    "item": "infused_crystals:block_of_infused_coalium"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "infused_crystals:lapisium_crystal"
  },
  "ingredients": [
    {
      "item": "quark:indigo_crystal"
    },
    {
      "item": "botania:quartz_lavender"
    },
    {
      "item": "minecraft:prismarine_shard"
    },
    {
      "item": "thermal:apatite"
    }
  ],
  "result": {
    "item": "infused_crystals:infused_lapisium_crystal"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "infused_crystals:block_of_lapisium"
  },
  "ingredients": [
    {
      "item": "quark:indigo_crystal"
    },
    {
      "item": "botania:quartz_lavender"
    },
    {
      "item": "minecraft:prismarine_shard"
    },
    {
      "item": "thermal:apatite"
    }
  ],
  "result": {
    "item": "infused_crystals:block_of_infused_lapisium"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "infused_crystals:ironium_crystal"
  },
  "ingredients": [
    {
      "item": "quark:white_crystal"
    },
    {
      "item": "minecraft:quartz"
    },
    {
      "item": "minecraft:bone_meal"
    },
    {
      "item": "minecraft:snowball"
    }
  ],
  "result": {
    "item": "infused_crystals:infused_ironium_crystal"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "infused_crystals:block_of_ironium"
  },
  "ingredients": [
    {
      "item": "quark:white_crystal"
    },
    {
      "item": "minecraft:quartz"
    },
    {
      "item": "minecraft:bone_meal"
    },
    {
      "item": "minecraft:snowball"
    }
  ],
  "result": {
    "item": "infused_crystals:block_of_infused_ironium"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "infused_crystals:diamondium_crystal"
  },
  "ingredients": [
    {
      "item": "quark:blue_crystal"
    },
    {
      "item": "botania:quartz_mana"
    },
    {
      "item": "tconstruct:sky_slime_crystal"
    },
    {
      "item": "minecraft:ice"
    }
  ],
  "result": {
    "item": "infused_crystals:infused_diamondium_crystal"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 500000,
  "input": {
    "item": "infused_crystals:block_of_diamondium"
  },
  "ingredients": [
    {
      "item": "quark:blue_crystal"
    },
    {
      "item": "botania:quartz_mana"
    },
    {
      "item": "tconstruct:sky_slime_crystal"
    },
    {
      "item": "minecraft:ice"
    }
  ],
  "result": {
    "item": "infused_crystals:block_of_infused_diamondium"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "infused_crystals:emeraldium_crystal"
  },
  "ingredients": [
    {
      "item": "quark:green_crystal"
    },
    {
      "item": "botania:quartz_elven"
    },
    {
      "item": "tconstruct:earth_slime_crystal"
    },
    {
      "item": "immersiveengineering:ingot_uranium"
    }
  ],
  "result": {
    "item": "infused_crystals:infused_emeraldium_crystal"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 500000,
  "input": {
    "item": "infused_crystals:block_of_emeraldium"
  },
  "ingredients": [
    {
      "item": "quark:green_crystal"
    },
    {
      "item": "botania:quartz_elven"
    },
    {
      "item": "tconstruct:earth_slime_crystal"
    },
    {
      "item": "immersiveengineering:ingot_uranium"
    }
  ],
  "result": {
    "item": "infused_crystals:block_of_infused_emeraldium"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "minecraft:crying_obsidian"
  },
  "ingredients": [
    {
      "item": "mekanism:dust_refined_obsidian"
    },
    {
      "item": "mekanism:dust_refined_obsidian"
    },
    {
      "item": "redstone_arsenal:obsidian_rod"
    },
    {
      "item": "redstone_arsenal:obsidian_rod"
    }
  ],
  "result": {
    "item": "cyclic:gem_obsidian"
  }
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": "minecraft:skeleton_skull"
  },
  "cast_consumed": true,
  "fluid": {
    "tag": "tconstruct:molten_netherite",
    "amount": 16
  },
  "result": "minecraft:wither_skeleton_skull",
  "cooling_time": 20
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "type": "mantle:intersection",
    "ingredients": [
      {
        "item": "minecraft:zombie_head"
      }
    ]
  },
  "cast_consumed": false,
  "fluid": {
    "name": "minecraft:milk",
    "amount": 1000
  },
  "result": "minecraft:skeleton_skull",
  "cooling_time": 60
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "myrtrees:latex"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "industrialforegoing:plastic"
    }
  ]
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:industrial_sandwich"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ftbic:industrial_grade_metal",
      "count": 4
    }
  ]
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "botania:gaia_ingot"
    },
    {
      "item": "astralsorcery:starmetal_ingot"
    }    
  ],
  "output": {
    "item": "2x ibpdx:starspirit_alloy"
  },
  "syphon": 1000,
  "ticks": 100,
  "upgradeLevel": 2
})

event.recipes.bloodmagic.altar('ibpdx:bloodshine_ingot', 'ibpdx:starspirit_alloy').upgradeLevel(3).altarSyphon(1000.0).consumptionRate(10.0).drainRate(10.0)

event.custom({"type":"mekanism:reaction","itemInput":{"amount":1,"ingredient":{"item":"minecraft:glass_bottle"}},"fluidInput":{"amount":10,"tag":"minecraft:water"},"gasInput":{"amount":10,"gas":"mekanism:hydrogen"},"duration":20,"itemOutput":{"item":"chemlib:element_hydrogen"},"gasOutput":{"gas":"mekanism:oxygen","amount":10}})

event.custom({"type":"mekanism:reaction","itemInput":{"amount":1,"ingredient":{"item":"ftbic:antimatter"}},"fluidInput":{"amount":10,"tag":"minecraft:water"},"gasInput":{"amount":2000,"gas":"mekanism:fissile_fuel"},"duration":20,"itemOutput":{"item":"thermal:lead_ingot"},"gasOutput":{"gas":"mekanism:nuclear_waste","amount":400}})

event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"powah:uraninite"}},"output":{"item":"mekanism:yellow_cake_uranium","count":4}})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "boss_tools:venus_coal_ore"
      },
      "count": 16
    }
  ],
  "outputItems": [
    {
      "item": "minecraft:ancient_debris"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:circuit_shell"
    },
    {
      "fluid": "ibpdx:concentrated_nital",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "ibpdx:circuit_case"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:verdant_moon_stone"
    },
    {
      "fluid": "ibpdx:concentrated_nital",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "infused_crystals:infused_emeraldium_crystal"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:azurine_moon_stone"
    },
    {
      "fluid": "ibpdx:concentrated_nital",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "infused_crystals:infused_lapisium_crystal"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:carmine_moon_stone"
    },
    {
      "fluid": "ibpdx:concentrated_nital",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:ultramarine_moon_stone"
    },
    {
      "fluid": "ibpdx:concentrated_nital",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "infused_crystals:infused_diamondium_crystal"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:umbral_moon_stone"
    },
    {
      "fluid": "ibpdx:concentrated_nital",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "infused_crystals:infused_coalium_crystal"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:chalky_moon_stone"
    },
    {
      "fluid": "ibpdx:concentrated_nital",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "infused_crystals:infused_ironium_crystal"
    }
  ]
})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"mekanism:basic_control_circuit"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"mekanism:ultimate_control_circuit"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"ftbic:machine_block"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"ftbic:advaned_machine_block"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"industrialforegoing:machine_frame_pity"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"industrialforegoing:machine_frame_supreme"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"ftbic:electronic_circuit"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"ftbic:iridium_circuit"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"ibpdx:speed_gearbox"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"ibpdx:singular_speed_gearbox"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"ibpdx:power_gearbox"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"ibpdx:singular_power_gearbox"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"ibpdx:singular_speed_gearbox"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"mekanism:upgrade_speed"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"ibpdx:singular_power_gearbox"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"mekanism:upgrade_energy"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"metalbarrels:wood_to_copper"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"metalbarrels:wood_to_netherite"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"powah:energy_cell_basic"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"powah:energy_cell_nitro"},"duration":500})

event.custom({"type":"mekanism:nucleosynthesizing","itemInput":{"ingredient":{"item":"powah:ender_cell_basic"}},"gasInput":{"amount":1,"gas":"mekanism:antimatter"},"output":{"item":"powah:ender_cell_nitro"},"duration":500})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_BAB_",
    "_ C _",
    "_ D__",
    "_____"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:windmill"
    },
    "B": {
      "item": "minecraft:grass"
    },
    "C": {
      "item": "botania:manasteel_ingot"
    },
    "D": {
      "item": "botania:livingwood_twig"
    }
  },
  "output": [
    {
      "item": "botania:tornado_rod",
      "count": 1
    }
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 700,
  "pattern": [
    "_____",
    "_ AB_",
    "_ DC_",
    "_D __",
    "_____"
  ],
  "key": {
    "A": {
      "item": "botania:manasteel_pick"
    },
    "B": {
      "item": "cyclic:user"
    },
    "C": {
      "item": "botania:manasteel_shovel"
    },
    "D": {
      "item": "botania:livingwood_twig"
    }
  },
  "output": [
    {
      "item": "botania:terraform_rod",
      "count": 1
    }
  ]
})

event.stonecutting('minecraft:oak_wood', 'minecraft:oak_log');
event.stonecutting('minecraft:birch_wood', 'minecraft:birch_log');
event.stonecutting('minecraft:spruce_wood', 'minecraft:spruce_log');
event.stonecutting('minecraft:jungle_wood', 'minecraft:jungle_log');
event.stonecutting('minecraft:acacia_wood', 'minecraft:acacia_log');
event.stonecutting('minecraft:dark_oak_wood', 'minecraft:dark_oak_log');
event.stonecutting('architects_palette:twisted_wood', 'architects_palette:twisted_log');
event.stonecutting('environmental:willow_wood', 'environmental:willow_log');
event.stonecutting('environmental:cherry_wood', 'environmental:cherry_log');
event.stonecutting('environmental:wisteria_wood', 'environmental:wisteria_log');
event.stonecutting('minecraft:crimson_hyphae', 'minecraft:crimson_stem');
event.stonecutting('minecraft:warped_hyphae', 'minecraft:warped_stem');

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:clump_iron"
  },
  "result": {
    "fluid": "tconstruct:molten_iron",
    "amount": 144
  },
  "temperature": 800,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:clump_gold"
  },
  "result": {
    "fluid": "tconstruct:molten_gold",
    "amount": 144
  },
  "temperature": 700,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:clump_copper"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 144
  },
  "temperature": 500,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:clump_tin"
  },
  "result": {
    "fluid": "tconstruct:molten_tin",
    "amount": 144
  },
  "temperature": 225,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:clump_lead"
  },
  "result": {
    "fluid": "tconstruct:molten_lead",
    "amount": 144
  },
  "temperature": 330,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "ibpdx:clump_silver"
  },
  "result": {
    "fluid": "tconstruct:molten_silver",
    "amount": 144
  },
  "temperature": 790,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:shard_iron"
  },
  "result": {
    "fluid": "tconstruct:molten_iron",
    "amount": 144
  },
  "temperature": 800,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:shard_gold"
  },
  "result": {
    "fluid": "tconstruct:molten_gold",
    "amount": 144
  },
  "temperature": 700,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:shard_copper"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 144
  },
  "temperature": 500,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:shard_tin"
  },
  "result": {
    "fluid": "tconstruct:molten_tin",
    "amount": 144
  },
  "temperature": 225,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "mekanism:shard_lead"
  },
  "result": {
    "fluid": "tconstruct:molten_lead",
    "amount": 144
  },
  "temperature": 330,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "ibpdx:shard_silver"
  },
  "result": {
    "fluid": "tconstruct:molten_silver",
    "amount": 144
  },
  "temperature": 790,
  "time": 60
})

event.custom({
  "type": "cyclic:melter",
  "inputFirst": {
      "item": "thermal:flax_seeds"
  },
  "inputSecond": {
      "item": "thermal:flax_seeds"
  },
  "result": {
    "fluid": "ibpdx:seed_oil",
    "count": 100
  }
})

event.custom({
  "type": "cyclic:melter",
  "inputFirst": {
      "item": "thermal:oil_sand"
  },
  "inputSecond": {
      "item": "thermal:oil_sand"
  },
  "result": {
    "fluid": "boss_tools:oil",
    "count": 100
  }
})

event.custom({
  "type": "cyclic:melter",
  "inputFirst": {
      "item": "thermal:oil_red_sand"
  },
  "inputSecond": {
      "item": "thermal:oil_red_sand"
  },
  "result": {
    "fluid": "boss_tools:oil",
    "count": 100
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "thermal:copper_ingot"},
  {"item": "infused_crystals:redstonium_crystal"},
  {"tag": "forge:glass"}
  ],
  "energy": 2000,
  "result": {
  "item": "ibpdx:copper_electron_tube",
  "count": 4
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:blaze_powder"},
  {"item": "infused_crystals:redstonium_crystal"},
  {"tag": "forge:glass"}
  ],
  "energy": 4000,
  "result": {
  "item": "ibpdx:blaze_electron_tube",
  "count": 4
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:diamond"},
  {"item": "infused_crystals:redstonium_crystal"},
  {"tag": "forge:glass"}
  ],
  "energy": 8000,
  "result": {
  "item": "ibpdx:diamond_electron_tube",
  "count": 4
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "minecraft:emerald"},
  {"item": "infused_crystals:redstonium_crystal"},
  {"tag": "forge:glass"}
  ],
  "energy": 16000,
  "result": {
  "item": "ibpdx:emerald_electron_tube",
  "count": 4
  }
})

event.custom({
  "type": "powah:energizing",
  "ingredients": [
  {"item": "ftbic:rubber"},
  {"item": "ftbic:copper_wire"},
  {"item": "infused_crystals:redstonium_crystal"},
  {"tag": "forge:glass"}
  ],
  "energy": 16000,
  "result": {
  "item": "ibpdx:rubberized_electron_tube",
  "count": 4
  }
})

event.custom({
  "type": "ftbic:basic_generator_fuel",
  "ingredient": {
    "item": "immersiveengineering:coal_coke"
  },
  "ticks": 3200
})

event.custom({
  "type": "ftbic:basic_generator_fuel",
  "ingredient": {
    "item": "ibpdx:peat"
  },
  "ticks": 1200
})

event.custom({
  "type": "ftbic:basic_generator_fuel",
  "ingredient": {
    "item": "ibpdx:bituminous_peat"
  },
  "ticks": 3600
})

event.custom({
  "type": "ftbic:basic_generator_fuel",
  "ingredient": {
    "item": "thermal:coal_coke"
  },
  "ticks": 3200
})

event.custom({
  "type": "thermal:tree_extractor",
  "trunk": "treemendous:plane_log",
  "leaves": "treemendous:plane_leaves",
  "result": {
    "fluid": "thermal:latex",
    "amount": 25
  }
});

event.custom({
  "type": "thermal:tree_extractor",
  "trunk": "treemendous:robinia_log",
  "leaves": "treemendous:robinia_leaves",
  "result": {
    "fluid": "thermal:latex",
    "amount": 25
  }
});

event.custom({
  "type": "botania:petal_apothecary",
  "output": {
    "item": "botania:heisei_dream"
  },
  "ingredients": [
    {
      "tag": "botania:petals/magenta"
    },
    {
      "tag": "botania:petals/magenta"
    },
    {
      "tag": "botania:petals/purple"
    },
    {
      "tag": "botania:petals/pink"
    },
    {
      "tag": "botania:runes/autumn"
    }
  ]
})

event.custom({
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",
    "block": "ibpdx:bog_earth"
  },
  "output": {
    "name": "ibpdx:peat_bog"
  }
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "minecraft:iron_ingot"
  },
  "result": [
    {
      "fluid": "tconstruct:molten_iron",
      "amount": 144
    }
  ],
  "energy": 10000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "minecraft:gold_ingot"
  },
  "result": [
    {
      "fluid": "tconstruct:molten_gold",
      "amount": 144
    }
  ],
  "energy": 10000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "thermal:copper_ingot"
  },
  "result": [
    {
      "fluid": "tconstruct:molten_copper",
      "amount": 144
    }
  ],
  "energy": 10000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "thermal:tin_ingot"
  },
  "result": [
    {
      "fluid": "tconstruct:molten_tin",
      "amount": 144
    }
  ],
  "energy": 10000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "thermal:lead_ingot"
  },
  "result": [
    {
      "fluid": "tconstruct:molten_lead",
      "amount": 144
    }
  ],
  "energy": 10000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "thermal:silver_ingot"
  },
  "result": [
    {
      "fluid": "tconstruct:molten_silver",
      "amount": 144
    }
  ],
  "energy": 10000
})

event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "minecraft:soul_sand"
  },
  "result": [
    {
      "fluid": "tconstruct:liquid_soul",
      "amount": 10
    }
  ],
  "energy": 1000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ftbic:advanced_alloy"
        }
      ],
      "count": 2
    },
    {
      "value": [
        {
          "item": "thermal:constantan_ingot"
        }
      ],
      "count": 4
    }
  ],
  "result": [
    {
      "item": "powah:thermoelectric_plate",
      "count": 1
    }
  ],
  "energy": 48000
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "dankstorage:dank_2"
  },
  "output": {
    "id": "dankstorage:dank_3",
    "Count": 1,
  },
  "time": 100,
  "catalysts": [
    {
      "item": {
        "item": "minecraft:yellow_stained_glass"
      },
      "index": 0
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 1
    },
    {
      "item": {
        "item": "powah:energized_steel_block"
      },
      "index": 2
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 3
    },
    {
      "item": {
        "item": "minecraft:yellow_stained_glass"
      },
      "index": 4
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 5
    },
    {
      "item": {
        "item": "powah:energized_steel_block"
      },
      "index": 6
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "minecraft:stick"
  },
  "output": {
    "id": "dankstorage:2_to_3",
    "Count": 1,
  },
  "time": 100,
  "catalysts": [
    {
      "item": {
        "item": "minecraft:yellow_stained_glass"
      },
      "index": 0
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 1
    },
    {
      "item": {
        "item": "powah:energized_steel_block"
      },
      "index": 2
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 3
    },
    {
      "item": {
        "item": "minecraft:yellow_stained_glass"
      },
      "index": 4
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 5
    },
    {
      "item": {
        "item": "powah:energized_steel_block"
      },
      "index": 6
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "dankstorage:dank_3"
  },
  "output": {
    "id": "dankstorage:dank_4",
    "Count": 1,
  },
  "time": 100,
  "catalysts": [
    {
      "item": {
        "item": "minecraft:lime_stained_glass"
      },
      "index": 0
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 1
    },
    {
      "item": {
        "item": "infused_crystals:block_of_infused_emeraldium"
      },
      "index": 2
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 3
    },
    {
      "item": {
        "item": "minecraft:lime_stained_glass"
      },
      "index": 4
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 5
    },
    {
      "item": {
        "item": "infused_crystals:block_of_infused_emeraldium"
      },
      "index": 6
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 7
    }
  ]
})

event.custom({
  "type": "betterendforge:infusion",
  "input": {
    "item": "minecraft:stick"
  },
  "output": {
    "id": "dankstorage:3_to_4",
    "Count": 1,
  },
  "time": 100,
  "catalysts": [
    {
      "item": {
        "item": "minecraft:lime_stained_glass"
      },
      "index": 0
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 1
    },
    {
      "item": {
        "item": "infused_crystals:block_of_infused_emeraldium"
      },
      "index": 2
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 3
    },
    {
      "item": {
        "item": "minecraft:lime_stained_glass"
      },
      "index": 4
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 5
    },
    {
      "item": {
        "item": "infused_crystals:block_of_infused_emeraldium"
      },
      "index": 6
    },
    {
      "item": {
        "item": "ibpdx:blockcasing_black_quartz"
      },
      "index": 7
    }
  ]
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 4000,
  "input": {
    "item": "ibpdx:crystallized_flax_seeds"
  },
  "ingredients": [
    {
      "item": "infused_crystals:redstonium_crystal"
    },
    {
      "item": "infused_crystals:redstonium_crystal"
    },
    {
      "item": "infused_crystals:redstonium_crystal"
    },
    {
      "item": "infused_crystals:redstonium_crystal"
    }
  ],
  "result": {
    "item": "ibpdx:empowered_flax_seeds"
  }
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "draconicevolution:draconium_dust"
  },
  "output": {
    "item": "tconstruct:manyullyn_ingot"
  },
  "mana": 1000,
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "astralsorcery:starmetal_ingot"
  },
  "result": [
    {
      "item": "astralsorcery:stardust",
      "count": 1
    }
  ],
  "energy_mod": 3.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "chemlib:element_hydrogen"
  },
  "result": [
    {
      "item": "ibpdx:proton",
      "count": 1
    }
  ],
  "energy_mod": 0.125
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "thermal:blitz_rod"
  },
  "result": [
    {
      "item": "thermal:blitz_powder",
      "chance": 3.0
    },
    {
      "item": "thermal:niter",
      "chance": 0.25
    }
  ]
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "minecraft:iron_ingot"
  },
  "result": [
    {
      "item": "thermal:iron_dust",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "minecraft:gold_ingot"
  },
  "result": [
    {
      "item": "thermal:gold_dust",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "thermal:copper_ingot"
  },
  "result": [
    {
      "item": "thermal:copper_dust",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "thermal:tin_ingot"
  },
  "result": [
    {
      "item": "thermal:tin_dust",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "thermal:lead_ingot"
  },
  "result": [
    {
      "item": "thermal:lead_dust",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "thermal:silver_ingot"
  },
  "result": [
    {
      "item": "thermal:silver_dust",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "thermal:nickel_ingot"
  },
  "result": [
    {
      "item": "thermal:nickel_dust",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "immersiveengineering:ingot_aluminum"
  },
  "result": [
    {
      "item": "immersiveengineering:dust_aluminum",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})


event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "itemRegistryName": "iron_backpack",
      "type": "sophisticatedbackpacks:item_enabled"
    }
  ],
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "sophisticatedbackpacks:backpack"
    },
    "B": {
      "item": "infused_crystals:ironium_crystal"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:iron_backpack"
  }
})

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "itemRegistryName": "iron_backpack",
      "type": "sophisticatedbackpacks:item_enabled"
    }
  ],
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "sophisticatedbackpacks:backpack"
    },
    "B": {
      "item": "infused_crystals:ironium_crystal"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:iron_backpack"
  }
})

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "itemRegistryName": "iron_backpack",
      "type": "sophisticatedbackpacks:item_enabled"
    }
  ],
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "sophisticatedbackpacks:iron_backpack"
    },
    "B": {
      "item": "powah:steel_energized"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:gold_backpack"
  }
})

event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "itemRegistryName": "iron_backpack",
      "type": "sophisticatedbackpacks:item_enabled"
    }
  ],
  "pattern": [
    "BBB",
    " A ",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "sophisticatedbackpacks:gold_backpack"
    },
    "B": {
      "item": "ibpdx:empowered_aluminum_ingot"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:diamond_backpack"
  }
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "thermal:nickel_ore"
  },
  "result": {
    "fluid": "tconstruct:molten_nickel",
    "amount": 144
  },
  "temperature": 850,
  "time": 40
})

event.stonecutting('chisel:basalt/raw', 'minecraft:basalt');

event.custom({"type":"immersiveengineering:cloche","results":[{"item":"thermal:flax"},{"item":"thermal:flax_seeds","count":2}],"input":{"item":"thermal:flax_seeds"},"soil":{"item":"minecraft:dirt"},"time":800,"render":{"type":"hemp","block":"thermal:flax"}})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "simplyjetpacks:unit_cryotheum_empty"
    },
    {
      "fluid": "kubejs:molten_cryotheum",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "simplyjetpacks:unit_cryotheum"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "simplyjetpacks:unit_glowstone_empty"
    },
    {
      "fluid": "thermal:glowstone",
      "amount": 1000
    }
  ],
  "result": [
    {
      "item": "simplyjetpacks:unit_glowstone"
    }
  ]
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "mekanism:pellet_plutonium"
  },
  "result": [
    {
      "item": "thermal:lead_ingot",
      "count": 1
    },
        {
      "item": "avaritia:pileof_neutrons",
      "count": 32
    }
  ],
  "energy_mod": 6.0
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "thermal:electrum_ingot"
  },
  "result": {
    "fluid": "tconstruct:molten_electrum",
    "amount": 144
  },
  "temperature": 450,
  "time": 40
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "thermal:bronze_ingot"
  },
  "result": {
    "fluid": "tconstruct:molten_bronze",
    "amount": 144
  },
  "temperature": 450,
  "time": 40
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "thermal:invar_ingot"
  },
  "result": {
    "fluid": "tconstruct:molten_invar",
    "amount": 144
  },
  "temperature": 450,
  "time": 40
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "thermal:constantan_ingot"
  },
  "result": {
    "fluid": "tconstruct:molten_constantan",
    "amount": 144
  },
  "temperature": 450,
  "time": 40
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:white_petal"
  },
  "result": [
    {
      "item": "minecraft:white_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:orange_petal"
  },
  "result": [
    {
      "item": "minecraft:orange_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:magenta_petal"
  },
  "result": [
    {
      "item": "minecraft:magenta_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:light_blue_petal"
  },
  "result": [
    {
      "item": "minecraft:light_blue_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:yellow_petal"
  },
  "result": [
    {
      "item": "minecraft:yellow_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:lime_petal"
  },
  "result": [
    {
      "item": "minecraft:lime_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:pink_petal"
  },
  "result": [
    {
      "item": "minecraft:pink_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:gray_petal"
  },
  "result": [
    {
      "item": "minecraft:gray_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:light_gray_petal"
  },
  "result": [
    {
      "item": "minecraft:light_gray_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:cyan_petal"
  },
  "result": [
    {
      "item": "minecraft:cyan_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:purple_petal"
  },
  "result": [
    {
      "item": "minecraft:purple_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:blue_petal"
  },
  "result": [
    {
      "item": "minecraft:blue_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:brown_petal"
  },
  "result": [
    {
      "item": "minecraft:brown_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:green_petal"
  },
  "result": [
    {
      "item": "minecraft:green_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:red_petal"
  },
  "result": [
    {
      "item": "minecraft:red_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "botania:black_petal"
  },
  "result": [
    {
      "item": "minecraft:black_dye",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:white_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:white_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:orange_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:orange_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:magenta_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:magenta_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:light_blue_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:light_blue_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:yellow_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:yellow_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:lime_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:lime_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:pink_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:pink_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:gray_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:gray_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:light_gray_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:light_gray_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:cyan_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:cyan_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:purple_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:purple_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:blue_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:blue_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:brown_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:brown_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:green_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:green_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:red_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:red_dye",
            "count": 1
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "botania:black_petal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:black_dye",
            "count": 1
        }
    ]

})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:zombie_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:zombie_essence"
    },
    {
      "fluid": "tconstruct:blood",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:zombie_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "minecraft:zombie_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:skeleton_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:skeleton_essence"
    },
    {
      "fluid": "minecraft:milk",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:skeleton_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "minecraft:skeleton_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:creeper_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:creeper_essence"
    },
    {
      "fluid": "tconstruct:molten_glass",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:creeper_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "minecraft:creeper_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:blaze_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:blaze_essence"
    },
    {
      "fluid": "tconstruct:blazing_blood",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:blaze_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "minecraft:blaze_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:spider_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:spider_essence"
    },
    {
      "fluid": "tconstruct:venom",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:spider_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "minecraft:spider_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:witch_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:witch_essence"
    },
    {
      "fluid": "ibpdx:magical_mixture",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:witch_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "minecraft:witch_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:enderman_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:enderman_essence"
    },
    {
      "fluid": "tconstruct:molten_ender",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:enderman_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "minecraft:enderman_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "thermal:blizz_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:blizz_essence"
    },
    {
      "fluid": "ibpdx:glacial_blood",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:blizz_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "thermal:blizz_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "thermal:basalz_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:basalz_essence"
    },
    {
      "fluid": "ibpdx:earthen_blood",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:basalz_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "thermal:basalz_spawn_egg"
    }
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "thermal:blitz_spawn_egg"
  },
  "result": [
    {
      "item": "mysticalagriculture:blitz_essence"
    },
    {
      "fluid": "ibpdx:aethen_blood",
      "amount": 250
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "mysticalagriculture:blitz_essence"
    },
    {
      "fluid": "ibpdx:energized_health_potion",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "thermal:blitz_spawn_egg"
    }
  ]
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:iron_ore",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:iron_dust",
          "count": 1
        },
        "weight": 60
      },
      {
        "result": {
          "item": "thermal:iron_dust",
          "count": 2
        },
        "weight": 20
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "minecraft:gold_ore",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:gold_dust",
          "count": 1
        },
        "weight": 60
      },
      {
        "result": {
          "item": "thermal:gold_dust",
          "count": 2
        },
        "weight": 20
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:copper_ore",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:copper_dust",
          "count": 1
        },
        "weight": 60
      },
      {
        "result": {
          "item": "thermal:copper_dust",
          "count": 2
        },
        "weight": 20
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:tin_ore",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:tin_dust",
          "count": 1
        },
        "weight": 60
      },
      {
        "result": {
          "item": "thermal:tin_dust",
          "count": 2
        },
        "weight": 20
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:lead_ore",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:lead_dust",
          "count": 1
        },
        "weight": 60
      },
      {
        "result": {
          "item": "thermal:lead_dust",
          "count": 2
        },
        "weight": 20
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:silver_ore",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:silver_dust",
          "count": 1
        },
        "weight": 60
      },
      {
        "result": {
          "item": "thermal:silver_dust",
          "count": 2
        },
        "weight": 20
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "interactio:item_anvil_smashing",
  "inputs": [
    {
      "item": "thermal:nickel_ore",
      "count": 1
    }
  ],
  "output": {
    "entries": [
      {
        "result": {
          "item": "thermal:nickel_dust",
          "count": 1
        },
        "weight": 60
      },
      {
        "result": {
          "item": "thermal:nickel_dust",
          "count": 2
        },
        "weight": 20
      }
    ],
    "rolls": 1,
    "empty_weight": 0
  },
  "damage": 0
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "thermal:copper_ore"
  },
  "output": {
    "item": "thermal:copper_ingot",
    "count": 3
  },
  "consumptionChance": 0.25,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "thermal:tin_ore"
  },
  "output": {
    "item": "thermal:tin_ingot",
    "count": 3
  },
  "consumptionChance": 0.25,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "thermal:lead_ore"
  },
  "output": {
    "item": "thermal:lead_ingot",
    "count": 3
  },
  "consumptionChance": 0.25,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "thermal:silver_ore"
  },
  "output": {
    "item": "thermal:silver_ingot",
    "count": 3
  },
  "consumptionChance": 0.25,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "thermal:nickel_ore"
  },
  "output": {
    "item": "thermal:nickel_ingot",
    "count": 3
  },
  "consumptionChance": 0.25,
  "duration": 100,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})

event.custom({"type":"mekanism:rotary","fluidInput":{"amount":1,"tag":"forge:ethanol"},"gasOutput":{"gas":"ibpdx:ethanol_gas","amount":1},"gasInput":{"amount":1,"gas":"ibpdx:ethanol_gas"},"fluidOutput":{"fluid":"immersiveengineering:ethanol","amount":1}})

event.recipes.immersiveengineeringCrusher('thermal:iron_dust', 'minecraft:iron_ingot')
event.recipes.immersiveengineeringCrusher('thermal:gold_dust', 'minecraft:gold_ingot')
event.recipes.immersiveengineeringCrusher('thermal:copper_dust', 'thermal:copper_ingot')
event.recipes.immersiveengineeringCrusher('thermal:tin_dust', 'thermal:tin_ingot')
event.recipes.immersiveengineeringCrusher('thermal:lead_dust', 'thermal:lead_ingot')
event.recipes.immersiveengineeringCrusher('thermal:silver_dust', 'thermal:silver_ingot')
event.recipes.immersiveengineeringCrusher('thermal:nickel_dust', 'thermal:nickel_ingot')
event.recipes.immersiveengineeringCrusher('immersiveengineering:dust_aluminum', 'immersiveengineering:ingot_aluminum')

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:smoker"
    },
    {
      "item": "immersiveengineering:blastbrick_reinforced"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "immersiveengineering:blastbrick_reinforced"
    }
  ],
  "result": {
    "item": "thermal:machine_furnace"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:stonecutter"
    },
    {
      "item": "minecraft:stone_bricks"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "minecraft:stone_bricks"
    }
  ],
  "result": {
    "item": "thermal:machine_sawmill"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:grindstone"
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond"
    }
  ],
  "result": {
    "item": "thermal:machine_pulverizer"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:blast_furnace"
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond"
    }
  ],
  "result": {
    "item": "thermal:machine_smelter"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "powah:magmator_basic"
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "ibpdx:blockcasing_empowered_diamond"
    }
  ],
  "result": {
    "item": "thermal:machine_crucible"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:cauldron"
    },
    {
      "item": "minecraft:glass"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "minecraft:glass"
    }
  ],
  "result": {
    "item": "thermal:machine_bottler"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:anvil"
    },
    {
      "item": "minecraft:piston"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "minecraft:piston"
    }
  ],
  "result": {
    "item": "thermal:machine_press"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "thermal:ice_tnt"
    },
    {
      "item": "minecraft:packed_ice"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "minecraft:packed_ice"
    }
  ],
  "result": {
    "item": "thermal:machine_chiller"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:blast_furnace"
    },
    {
      "item": "industrialforegoing:common_black_hole_tank"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "industrialforegoing:common_black_hole_tank"
    }
  ],
  "result": {
    "item": "thermal:machine_refinery"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {
      "item": "minecraft:brewing_stand"
    },
    {
      "item": "industrialforegoing:common_black_hole_tank"
    },
    {
      "item": "thermal:rf_potato"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:energy_cell_frame"
    },
    {
      "item": "ibpdx:blockcasing_steel"
    },
    {
      "item": "thermal:rf_coil"
    },
    {
      "item": "industrialforegoing:common_black_hole_tank"
    }
  ],
  "result": {
    "item": "thermal:machine_brewer"
  }
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ibpdx:speed_gear"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "ibpdx:power_gear"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "ibpdx:inert_double_gear",
      "count": 2
    }
  ],
  "energy": 10000
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "ibpdx:speed_gearbox"
  },
  "ingredients": [
    {
      "tag": "forge:plates/enderium"
    },
    {
      "item": "ibpdx:aerotheum_blend"
    },
    {
      "item": "ftbic:carbon_plate"
    },
    {
      "item": "ibpdx:aerotheum_blend"
    },
    {
      "tag": "forge:plates/enderium"
    },
    {
      "item": "ibpdx:aerotheum_blend"
    },
    {
      "item": "ftbic:carbon_plate"
    },
    {
      "item": "ibpdx:aerotheum_blend"
    }
  ],
  "result": {
    "item": "ibpdx:singular_speed_gearbox"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "ibpdx:power_gearbox"
  },
  "ingredients": [
    {
      "tag": "forge:plates/signalum"
    },
    {
      "item": "ibpdx:pyrotheum_blend"
    },
    {
      "item": "ftbic:carbon_plate"
    },
    {
      "item": "ibpdx:pyrotheum_blend"
    },
    {
      "tag": "forge:plates/signalum"
    },
    {
      "item": "ibpdx:pyrotheum_blend"
    },
    {
      "item": "ftbic:carbon_plate"
    },
    {
      "item": "ibpdx:pyrotheum_blend"
    }
  ],
  "result": {
    "item": "ibpdx:singular_power_gearbox"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "ibpdx:double_gearbox"
  },
  "ingredients": [
    {
      "item": "mekanism:ingot_refined_obsidian"
    },
    {
      "item": "mysticalagriculture:prosperity_gemstone"
    },
    {
      "item": "mekanism:ingot_refined_obsidian"
    },
    {
      "item": "mysticalagriculture:prosperity_gemstone"
    }
  ],
  "result": {
    "item": "ibpdx:singular_double_gearbox"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "dankstorage:dank_2"
  },
  "ingredients": [
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "minecraft:yellow_stained_glass"
    },
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "powah:energized_steel_block"
    },
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "minecraft:yellow_stained_glass"
    },
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "powah:energized_steel_block"
    }
  ],
  "result": {
    "item": "dankstorage:dank_3"
  }
})

event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 50000,
  "input": {
    "item": "dankstorage:dank_3"
  },
  "ingredients": [
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "minecraft:lime_stained_glass"
    },
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "infused_crystals:block_of_infused_emeraldium"
    },
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "minecraft:lime_stained_glass"
    },
    {
      "item": "ibpdx:blockcasing_black_quartz"
    },
    {
      "item": "infused_crystals:block_of_infused_emeraldium"
    }
  ],
  "result": {
    "item": "dankstorage:dank_4"
  }
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "boss_tools:moon_stone"
  },
  "result": [
    {
      "item": "boss_tools:moon_sand",
      "count": 1
    }
  ],
  "energy_mod": 1.0
})

event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"boss_tools:moon_stone"}},"output":{"item":"boss_tools:moon_sand"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:iron_ingot"}},"output":{"item":"thermal:iron_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:gold_ingot"}},"output":{"item":"thermal:gold_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:copper_ingot"}},"output":{"item":"thermal:copper_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:tin_ingot"}},"output":{"item":"thermal:tin_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:lead_ingot"}},"output":{"item":"thermal:lead_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:silver_ingot"}},"output":{"item":"thermal:silver_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:nickel_ingot"}},"output":{"item":"thermal:nickel_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:electrum_ingot"}},"output":{"item":"thermal:electrum_dust"}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:constantan_ingot"}},"output":{"item":"thermal:constantan_dust"}})

event.custom({
  "type": "bloodmagic:arc",
  "input": {
    "item": "botania:mana_diamond"
  },
  "tool": {
    "tag": "bloodmagic:arc/resonator"
  },
  "inputFluid": {
    "amount": 250,
    "fluid": "astralsorcery:liquid_starlight"
  },
  "addedoutput": [
    {
      "chance": 0.1,
      "type": {
        "item": "ibpdx:star_diamond"
      }
    }
  ],
  "output": {
    "item": "ibpdx:star_diamond"
  },
  "consumeingredient": true
})

event.custom({
  "type": "bloodmagic:arc",
  "input": {
    "item": "botania:mana_pearl"
  },
  "tool": {
    "tag": "bloodmagic:arc/resonator"
  },
  "inputFluid": {
    "amount": 250,
    "fluid": "astralsorcery:liquid_starlight"
  },
  "addedoutput": [
    {
      "chance": 0.1,
      "type": {
        "item": "ibpdx:star_pearl"
      }
    }
  ],
  "output": {
    "item": "ibpdx:star_pearl"
  },
  "consumeingredient": true
})

event.custom({
  "type": "bloodmagic:arc",
  "input": {
    "item": "botania:manasteel_ingot"
  },
  "tool": {
    "tag": "bloodmagic:arc/resonator"
  },
  "inputFluid": {
    "amount": 250,
    "fluid": "astralsorcery:liquid_starlight"
  },
  "addedoutput": [
    {
      "chance": 0.1,
      "type": {
        "item": "astralsorcery:starmetal_ingot"
      }
    }
  ],
  "output": {
    "item": "astralsorcery:starmetal_ingot"
  },
  "consumeingredient": true
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "immersiveengineering:circuit_board"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "ibpdx:copper_electron_tube"
        }
      ],
      "count": 2
    },
    {
      "value": [
        {
          "tag": "forge:plates/tin"
        }
      ],
      "count": 2
    }
  ],
  "result": [
    {
      "item": "ibpdx:circuit_base_t1",
      "count": 4
    }
  ],
  "energy": 4800
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "immersiveengineering:circuit_board"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "ibpdx:blaze_electron_tube"
        }
      ],
      "count": 2
    },
    {
      "value": [
        {
          "item": "ibpdx:duskstone_ingot"
        }
      ],
      "count": 2
    }
  ],
  "result": [
    {
      "item": "ibpdx:circuit_base_t2",
      "count": 4
    }
  ],
  "energy": 4800
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "immersiveengineering:circuit_board"
        }
      ],
      "count": 1
    },
    {
      "value": [
        {
          "item": "ibpdx:diamond_electron_tube"
        }
      ],
      "count": 2
    },
    {
      "value": [
        {
          "item": "ftbic:carbon_plate"
        }
      ],
      "count": 2
    }
  ],
  "result": [
    {
      "item": "ibpdx:circuit_base_t3",
      "count": 4
    }
  ],
  "energy": 4800
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:rubberized_electron_tube"
    },
    {
      "fluid": "cyclic:biomass",
      "amount": 250
    }
  ],
  "result": [
    {
      "item": "ibpdx:filled_rubber_electron_tube"
    }
  ]
})

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "ibpdx:peat"
    },
    {
      "fluid": "immersiveengineering:creosote",
      "amount": 250
    }
  ],
  "result": [
    {
      "item": "ibpdx:bituminous_peat"
    }
  ]
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "pipez:improved_upgrade"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "powah:crystal_niotic"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "ibpdx:empowered_oil_bucket"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "pipez:advanced_upgrade",
      "count": 8
    }
  ],
  "energy": 16000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "pipez:advanced_upgrade"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "tconstruct:hepatizon_ingot"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "ibpdx:empowered_oil_bucket"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "pipez:ultimate_upgrade",
      "count": 8
    }
  ],
  "energy": 16000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ftbic:industrial_grade_metal"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "infused_crystals:redstonium_crystal"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "ibpdx:crystallized_oil_bucket"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "pipez:basic_upgrade",
      "count": 8
    }
  ],
  "energy": 16000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "pipez:basic_upgrade"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "powah:crystal_blazing"
        }
      ],
      "count": 8
    },
    {
      "value": [
        {
          "item": "ibpdx:crystallized_oil_bucket"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "pipez:improved_upgrade",
      "count": 8
    }
  ],
  "energy": 16000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "industrialforegoing:plastic"
        }
      ],
      "count": 10
    },
    {
      "value": [
        {
          "item": "ibpdx:circuit_base_t1"
        }
      ],
      "count": 5
    },
    {
      "value": [
        {
          "item": "tconstruct:earth_slime_bucket"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "ibpdx:addon_base",
      "count": 10
    }
  ],
  "energy": 16000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ibpdx:modularium"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "botania:mana_powder"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "botania:manasteel_ingot"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "masterfulmachinery:generic_mana_port_botania_mana_input",
      "count": 4
    }
  ],
  "energy": 4000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ibpdx:modularium"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "thermal:tin_ingot"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "tconstruct:seared_fuel_tank"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "masterfulmachinery:generic_fluid_port_fluids_input",
      "count": 4
    }
  ],
  "energy": 4000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ibpdx:modularium"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "minecraft:redstone"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "ftbic:hv_cable"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "masterfulmachinery:generic_energy_port_energy_input",
      "count": 4
    }
  ],
  "energy": 4000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ibpdx:modularium"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "minecraft:redstone"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "ftbic:electronic_circuit"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "masterfulmachinery:generic_controller",
      "count": 4
    }
  ],
  "energy": 4000
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": "ibpdx:modularium"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "minecraft:iron_ingot"
        }
      ],
      "count": 4
    },
    {
      "value": [
        {
          "item": "minecraft:hopper"
        }
      ],
      "count": 1
    }
  ],
  "result": [
    {
      "item": "masterfulmachinery:generic_item_port_items_input",
      "count": 4
    }
  ],
  "energy": 4000
})

})