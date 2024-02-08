//priority: 999


onEvent('recipes', event => {



event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "tag": "forge:ores/iron"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:clump_iron",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "tag": "forge:ores/gold"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:clump_gold",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "tag": "forge:ores/copper"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:clump_copper",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "tag": "forge:ores/tin"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:clump_tin",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "tag": "forge:ores/lead"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:clump_lead",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "tag": "forge:ores/silver"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "ibpdx:clump_silver",
            "count": 2
        }
    ]

})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/copper"
  },
  "output": {
    "item": "thermal:copper_dust",
    "count": 1
  },
  "mana": 500
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/gold"
  },
  "output": {
    "item": "thermal:gold_dust",
    "count": 1
  },
  "mana": 500
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/iron"
  },
  "output": {
    "item": "thermal:iron_dust",
    "count": 1
  },
  "mana": 500
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/lead"
  },
  "output": {
    "item": "thermal:lead_dust",
    "count": 1
  },
  "mana": 500
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/silver"
  },
  "output": {
    "item": "thermal:silver_dust",
    "count": 1
  },
  "mana": 500
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/tin"
  },
  "output": {
    "item": "thermal:tin_dust",
    "count": 1
  },
  "mana": 500
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/iron",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_iron",
  "amount": 144
},
"result": {
  "item": "minecraft:iron_ingot"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/iron",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_iron",
  "amount": 144
},
"result": {
  "item": "minecraft:iron_ingot"
},
"cooling_time": 100
})



event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/gold",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_gold",
  "amount": 144
},
"result": {
  "item": "minecraft:gold_ingot"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/gold",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_gold",
  "amount": 144
},
"result": {
  "item": "minecraft:gold_ingot"
},
"cooling_time": 100
})



event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/copper",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_copper",
  "amount": 144
},
"result": {
  "item": "thermal:copper_ingot"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/copper",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_copper",
  "amount": 144
},
"result": {
  "item": "thermal:copper_ingot"
},
"cooling_time": 100
})



event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/tin",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_tin",
  "amount": 144
},
"result": {
  "item": "thermal:tin_ingot"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/tin",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_tin",
  "amount": 144
},
"result": {
  "item": "thermal:tin_ingot"
},
"cooling_time": 100
})



event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/lead",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_lead",
  "amount": 144
},
"result": {
  "item": "thermal:lead_ingot"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/lead",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_lead",
  "amount": 144
},
"result": {
  "item": "thermal:lead_ingot"
},
"cooling_time": 100
})



event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/silver",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_silver",
  "amount": 144
},
"result": {
  "item": "thermal:silver_ingot"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:ingots/silver",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/ingot"
},
"fluid": {
  "name": "tconstruct:molten_silver",
  "amount": 144
},
"result": {
  "item": "thermal:silver_ingot"
},
"cooling_time": 100
})



event.recipes.immersiveengineeringCrusher('2x mekanism:clump_iron', 'minecraft:iron_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_iron', 'boss_tools:moon_iron_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_iron', 'boss_tools:mars_iron_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_iron', 'boss_tools:mercury_iron_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_gold', 'minecraft:gold_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_gold', 'mythicbotany:gold_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_gold', 'boss_tools:venus_gold_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_copper', 'thermal:copper_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_tin', 'thermal:tin_ore')
event.recipes.immersiveengineeringCrusher('2x mekanism:clump_lead', 'thermal:lead_ore')
event.recipes.immersiveengineeringCrusher('2x ibpdx:clump_silver', 'thermal:silver_ore')
event.recipes.immersiveengineeringCrusher('12x draconicevolution:draconium_dust', 'draconicevolution:overworld_draconium_ore')
event.recipes.immersiveengineeringCrusher('12x draconicevolution:draconium_dust', 'draconicevolution:nether_draconium_ore')
event.recipes.immersiveengineeringCrusher('12x draconicevolution:draconium_dust', 'draconicevolution:end_draconium_ore')

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:ores/iron"
  },
  "result": [
    {
      "item": "mekanism:clump_iron",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:ores/gold"
  },
  "result": [
    {
      "item": "mekanism:clump_gold",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:ores/copper"
  },
  "result": [
    {
      "item": "mekanism:clump_copper",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:ores/tin"
  },
  "result": [
    {
      "item": "mekanism:clump_tin",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:ores/lead"
  },
  "result": [
    {
      "item": "mekanism:clump_lead",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:ores/silver"
  },
  "result": [
    {
      "item": "ibpdx:clump_silver",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "mekanism:crystal_iron"
  },
  "result": [
    {
      "item": "thermal:iron_dust"
    }
  ],
  "energy": 1600,
  "conditions": [
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "mekanism:crystal_gold"
  },
  "result": [
    {
      "item": "thermal:gold_dust"
    }
  ],
  "energy": 1600,
  "conditions": [
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "mekanism:crystal_copper"
  },
  "result": [
    {
      "item": "thermal:copper_dust"
    }
  ],
  "energy": 1600,
  "conditions": [
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "mekanism:crystal_tin"
  },
  "result": [
    {
      "item": "thermal:tin_dust"
    }
  ],
  "energy": 1600,
  "conditions": [
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "mekanism:crystal_lead"
  },
  "result": [
    {
      "item": "thermal:lead_dust"
    }
  ],
  "energy": 1600,
  "conditions": [
  ]
})

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "ibpdx:crystal_silver"
  },
  "result": [
    {
      "item": "thermal:silver_dust"
    }
  ],
  "energy": 1600,
  "conditions": [
  ]
})

event.custom({
  "type": "ftbic:separating",
  "inputItems": [
    {
      "ingredient": {
        "item": "mekanism:crystal_iron"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:iron_dust",
      "chance": 1.0
    }
  ]
})

event.custom({
  "type": "ftbic:separating",
  "inputItems": [
    {
      "ingredient": {
        "item": "mekanism:crystal_gold"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:gold_dust",
      "chance": 1.0
    }
  ]
})

event.custom({
  "type": "ftbic:separating",
  "inputItems": [
    {
      "ingredient": {
        "item": "mekanism:crystal_copper"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:copper_dust",
      "chance": 1.0
    }
  ]
})

event.custom({
  "type": "ftbic:separating",
  "inputItems": [
    {
      "ingredient": {
        "item": "mekanism:crystal_tin"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:tin_dust",
      "chance": 1.0
    }
  ]
})

event.custom({
  "type": "ftbic:separating",
  "inputItems": [
    {
      "ingredient": {
        "item": "mekanism:crystal_lead"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:lead_dust",
      "chance": 1.0
    }
  ]
})

event.custom({
  "type": "ftbic:separating",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:crystal_silver"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "thermal:silver_dust",
      "chance": 1.0
    }
  ]
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/aluminum"
  },
  "output": {
    "item": "ibpdx:dirty_dust_aluminum",
    "count": 1
  },
  "mana": 800
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/aluminum"
  },
  "output": {
    "item": "ibpdx:dirty_dust_aluminum",
    "count": 1
  },
  "mana": 800
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/nickel"
  },
  "output": {
    "item": "ibpdx:dirty_dust_nickel",
    "count": 1
  },
  "mana": 800
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/uranium"
  },
  "output": {
    "item": "mekanism:dirty_dust_uranium",
    "count": 1
  },
  "mana": 800
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/osmium"
  },
  "output": {
    "item": "mekanism:dirty_dust_osmium",
    "count": 1
  },
  "mana": 800
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/draconium"
  },
  "output": {
    "item": "ibpdx:dirty_dust_draconium",
    "count": 1
  },
  "mana": 800
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/silicon"
  },
  "output": {
    "item": "ibpdx:dirty_dust_silicon",
    "count": 1
  },
  "mana": 800
})

event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "tag": "forge:ores/desh"
  },
  "output": {
    "item": "ibpdx:dirty_dust_desh",
    "count": 1
  },
  "mana": 800
})


event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:dirty_dust_aluminum"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ibpdx:clump_aluminum"
    }
  ]
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:dirty_dust_nickel"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ibpdx:clump_nickel"
    }
  ]
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:dirty_dust_draconium"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ibpdx:clump_draconium"
    }
  ]
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "mekanism:dirty_dust_uranium"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "mekanism:clump_uranium"
    }
  ]
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "mekanism:dirty_dust_osmium"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "mekanism:clump_osmium"
    }
  ]
})

event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:dirty_dust_silicon"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ibpdx:clump_silicon"
    }
  ]
})


event.custom({
  "type": "ftbic:compressing",
  "inputItems": [
    {
      "ingredient": {
        "item": "ibpdx:dirty_dust_desh"
      },
      "count": 1
    }
  ],
  "outputItems": [
    {
      "item": "ibpdx:clump_desh"
    }
  ]
})



event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"ibpdx:clump_aluminum"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"ibpdx:shard_aluminum"}})
event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"ibpdx:clump_nickel"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"ibpdx:shard_nickel"}})
event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"mekanism:clump_osmium"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"mekanism:shard_osmium"}})
event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"mekanism:clump_uranium"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"mekanism:shard_uranium"}})
event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"ibpdx:clump_silicon"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"ibpdx:shard_silicon"}})
event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"ibpdx:clump_desh"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"ibpdx:shard_desh"}})
event.custom({"type":"mekanism:purifying","itemInput":{"ingredient":{"item":"ibpdx:clump_draconium"}},"gasInput":{"amount":1,"gas":"mekanism:oxygen"},"output":{"item":"ibpdx:draconium_shard"}})




event.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"tag":"forge:ingots/aluminum"}}],"additives":[],"input":{"item":"ibpdx:shard_aluminum"},"slag":{"tag":"forge:slag"},"time":200,"energy":10240})
event.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"tag":"forge:ingots/nickel"}}],"additives":[],"input":{"item":"ibpdx:shard_nickel"},"time":200,"energy":10240})
event.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":"mekanism:ingot_osmium"}}],"additives":[],"input":{"item":"mekanism:shard_osmium"},"time":200,"energy":10240})
event.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"tag":"forge:ingots/uranium"}}],"additives":[],"input":{"item":"mekanism:shard_uranium"},"slag":{"tag":"forge:slag"},"time":200,"energy":10240})
event.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":"boss_tools:silicon_ingot"}}],"additives":[],"input":{"item":"ibpdx:shard_silicon"},"time":200,"energy":10240})
event.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":"boss_tools:desh_ingot"}}],"additives":[],"input":{"item":"ibpdx:shard_desh"},"time":200,"energy":10240})
event.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":"draconicevolution:draconium_ingot"}}],"additives":[],"input":{"item":"ibpdx:draconium_shard"},"time":200,"energy":10240})


event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:redstone_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:redstone_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:diamond_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:diamond_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "boss_tools:mars_diamond_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:diamond_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "boss_tools:venus_diamond_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:diamond_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:emerald_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:emerald_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:lapis_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:lapis_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "mekanism:fluorite_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:fluorite_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "minecraft:nether_quartz_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:quartz_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "interactio:item_fluid_transform",
  "inputs": [
    {
      "item": "thermal:niter_ore",
      "count": 1,
      "return_chance": 0.0
    }
  ],
  "fluid": {
    "fluid": "ibpdx:carbonic_acid"
  },
  "output": {
    "entries": [
      {
        "result": {
          "item": "ibpdx:niter_clump",
          "count": 4
        },
        "weight": 100
      }
    ],
    "empty_weight": 0,
    "rolls": 1
  },
  "consume_fluid": 0.05
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "ibpdx:redstone_clump"
    }
  ],
  "output": {
    "item": "2x ibpdx:redstone_shard"
  },
  "syphon": 100,
  "ticks": 100,
  "upgradeLevel": 2
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "ibpdx:diamond_clump"
    }
  ],
  "output": {
    "item": "2x ibpdx:diamond_shard"
  },
  "syphon": 50,
  "ticks": 50,
  "upgradeLevel": 2
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "ibpdx:emerald_clump"
    }
  ],
  "output": {
    "item": "2x ibpdx:emerald_shard"
  },
  "syphon": 50,
  "ticks": 50,
  "upgradeLevel": 2
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "ibpdx:lapis_clump"
    }
  ],
  "output": {
    "item": "2x ibpdx:lapis_shard"
  },
  "syphon": 50,
  "ticks": 50,
  "upgradeLevel": 2
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "ibpdx:quartz_clump"
    }
  ],
  "output": {
    "item": "2x ibpdx:quartz_shard"
  },
  "syphon": 50,
  "ticks": 50,
  "upgradeLevel": 2
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "ibpdx:fluorite_clump"
    }
  ],
  "output": {
    "item": "2x ibpdx:fluorite_shard"
  },
  "syphon": 50,
  "ticks": 50,
  "upgradeLevel": 2
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "ibpdx:niter_clump"
    }
  ],
  "output": {
    "item": "2x ibpdx:niter_shard"
  },
  "syphon": 50,
  "ticks": 50,
  "upgradeLevel": 2
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "2x ibpdx:redstone_shard"
  },
  "input1": {
    "item": "bloodmagic:reagentgrowth"
  },
  "output": {
    "item": "4x ibpdx:redstone_crystal"
  },
  "minimumDrain": 800.0,
  "drain": 25.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "2x ibpdx:diamond_shard"
  },
  "input1": {
    "item": "bloodmagic:reagentgrowth"
  },
  "output": {
    "item": "4x ibpdx:diamond_crystal"
  },
  "minimumDrain": 800.0,
  "drain": 25.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "2x ibpdx:emerald_shard"
  },
  "input1": {
    "item": "bloodmagic:reagentgrowth"
  },
  "output": {
    "item": "4x ibpdx:emerald_crystal"
  },
  "minimumDrain": 800.0,
  "drain": 25.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "2x ibpdx:lapis_shard"
  },
  "input1": {
    "item": "bloodmagic:reagentgrowth"
  },
  "output": {
    "item": "4x ibpdx:lapis_crystal"
  },
  "minimumDrain": 800.0,
  "drain": 25.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "2x ibpdx:fluorite_shard"
  },
  "input1": {
    "item": "bloodmagic:reagentgrowth"
  },
  "output": {
    "item": "4x ibpdx:fluorite_crystal"
  },
  "minimumDrain": 800.0,
  "drain": 25.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "2x ibpdx:quartz_shard"
  },
  "input1": {
    "item": "bloodmagic:reagentgrowth"
  },
  "output": {
    "item": "4x ibpdx:quartz_crystal"
  },
  "minimumDrain": 800.0,
  "drain": 25.0
})

event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "2x ibpdx:niter_shard"
  },
  "input1": {
    "item": "bloodmagic:reagentgrowth"
  },
  "output": {
    "item": "4x ibpdx:niter_crystal"
  },
  "minimumDrain": 800.0,
  "drain": 25.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:redstone_shard"
  },
  "result": [
    {
      "item": "minecraft:redstone",
      "count": 4
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:diamond_shard"
  },
  "result": [
    {
      "item": "minecraft:diamond",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:emerald_shard"
  },
  "result": [
    {
      "item": "minecraft:emerald",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:lapis_shard"
  },
  "result": [
    {
      "item": "minecraft:lapis_lazuli",
      "count": 6
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:quartz_shard"
  },
  "result": [
    {
      "item": "minecraft:quartz",
      "count": 3
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:fluorite_shard"
  },
  "result": [
    {
      "item": "mekanism:fluorite_gem",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:niter_shard"
  },
  "result": [
    {
      "item": "thermal:niter",
      "count": 3
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:redstone_crystal"
  },
  "result": [
    {
      "item": "minecraft:redstone",
      "count": 4
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:diamond_crystal"
  },
  "result": [
    {
      "item": "minecraft:diamond",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:emerald_crystal"
  },
  "result": [
    {
      "item": "minecraft:emerald",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:lapis_crystal"
  },
  "result": [
    {
      "item": "minecraft:lapis_lazuli",
      "count": 6
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:quartz_crystal"
  },
  "result": [
    {
      "item": "minecraft:quartz",
      "count": 3
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:fluorite_crystal"
  },
  "result": [
    {
      "item": "mekanism:fluorite_gem",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:niter_crystal"
  },
  "result": [
    {
      "item": "thermal:niter",
      "count": 3
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:redstone_clump"
  },
  "result": [
    {
      "item": "minecraft:redstone",
      "count": 4
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:diamond_clump"
  },
  "result": [
    {
      "item": "minecraft:diamond",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:emerald_clump"
  },
  "result": [
    {
      "item": "minecraft:emerald",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:lapis_clump"
  },
  "result": [
    {
      "item": "minecraft:lapis_lazuli",
      "count": 6
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:quartz_clump"
  },
  "result": [
    {
      "item": "minecraft:quartz",
      "count": 3
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:fluorite_clump"
  },
  "result": [
    {
      "item": "mekanism:fluorite_gem",
      "count": 2
    }
  ],
  "energy_mod": 2.0
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": "ibpdx:niter_clump"
  },
  "result": [
    {
      "item": "thermal:niter",
      "count": 3
    }
  ],
  "energy_mod": 2.0
})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:redstone_shard"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:redstone",
            "count": 4
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:diamond_shard"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:diamond",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:emerald_shard"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:emerald",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:lapis_shard"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:lapis_lazuli",
            "count": 6
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:quartz_shard"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:quartz",
            "count": 3
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:fluorite_shard"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:fluorite_gem",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:niter_shard"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "thermal:niter",
            "count": 3
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:redstone_crystal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:redstone",
            "count": 4
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:diamond_crystal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:diamond",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:emerald_crystal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:emerald",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:lapis_crystal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:lapis_lazuli",
            "count": 6
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:quartz_crystal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:quartz",
            "count": 3
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:fluorite_crystal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:fluorite_gem",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:niter_crystal"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "thermal:niter",
            "count": 3
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:redstone_clump"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:redstone",
            "count": 4
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:diamond_clump"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:diamond",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:emerald_clump"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:emerald",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:lapis_clump"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:lapis_lazuli",
            "count": 6
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:quartz_clump"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "minecraft:quartz",
            "count": 3
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:fluorite_clump"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "mekanism:fluorite_gem",
            "count": 2
        }
    ]

})

event.custom({
    "type": "ftbic:macerating",
    "inputItems": [
        {
            "ingredient": {
                "item": "ibpdx:niter_clump"
            },
            "count": 1
        }
    ],
    "outputItems": [
        {
            "item": "thermal:niter",
            "count": 3
        }
    ]

})

event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:redstone_shard"}},"output":{"item":"minecraft:redstone","count":4}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:diamond_shard"}},"output":{"item":"minecraft:diamond","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:emerald_shard"}},"output":{"item":"minecraft:emerald","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:lapis_shard"}},"output":{"item":"minecraft:lapis_lazuli","count":6}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:fluorite_shard"}},"output":{"item":"mekanism:fluorite_gem","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:quartz_shard"}},"output":{"item":"minecraft:quartz","count":3}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:niter_shard"}},"output":{"item":"thermal:niter","count":3}})

event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:redstone_clump"}},"output":{"item":"minecraft:redstone","count":4}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:diamond_clump"}},"output":{"item":"minecraft:diamond","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:emerald_clump"}},"output":{"item":"minecraft:emerald","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:lapis_clump"}},"output":{"item":"minecraft:lapis_lazuli","count":6}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:fluorite_clump"}},"output":{"item":"mekanism:fluorite_gem","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:quartz_clump"}},"output":{"item":"minecraft:quartz","count":3}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ibpdx:niter_clump"}},"output":{"item":"thermal:niter","count":3}})


event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:iron_ore"}},"output":{"item":"mekanism:clump_iron","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:gold_ore"}},"output":{"item":"mekanism:clump_gold","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:copper_ore"}},"output":{"item":"mekanism:clump_copper","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:tin_ore"}},"output":{"item":"mekanism:clump_tin","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:lead_ore"}},"output":{"item":"mekanism:clump_lead","count":2}})
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"thermal:silver_ore"}},"output":{"item":"ibpdx:clump_silver","count":2}})

event.recipes.immersiveengineeringCrusher('4x minecraft:redstone', 'ibpdx:redstone_shard')
event.recipes.immersiveengineeringCrusher('2x minecraft:diamond', 'ibpdx:diamond_shard')
event.recipes.immersiveengineeringCrusher('2x minecraft:emerald', 'ibpdx:emerald_shard')
event.recipes.immersiveengineeringCrusher('6x minecraft:lapis_lazuli', 'ibpdx:lapis_shard')
event.recipes.immersiveengineeringCrusher('3x minecraft:quartz', 'ibpdx:quartz_shard')
event.recipes.immersiveengineeringCrusher('2x mekanism:fluorite_gem', 'ibpdx:fluorite_shard')
event.recipes.immersiveengineeringCrusher('3x thermal:niter', 'ibpdx:niter_shard')

event.recipes.immersiveengineeringCrusher('4x minecraft:redstone', 'ibpdx:redstone_crystal')
event.recipes.immersiveengineeringCrusher('2x minecraft:diamond', 'ibpdx:diamond_crystal')
event.recipes.immersiveengineeringCrusher('2x minecraft:emerald', 'ibpdx:emerald_crystal')
event.recipes.immersiveengineeringCrusher('6x minecraft:lapis_lazuli', 'ibpdx:lapis_crystal')
event.recipes.immersiveengineeringCrusher('3x minecraft:quartz', 'ibpdx:quartz_crystal')
event.recipes.immersiveengineeringCrusher('2x mekanism:fluorite_gem', 'ibpdx:fluorite_crystal')
event.recipes.immersiveengineeringCrusher('3x thermal:niter', 'ibpdx:niter_crystal')

event.recipes.immersiveengineeringCrusher('4x minecraft:redstone', 'ibpdx:redstone_clump')
event.recipes.immersiveengineeringCrusher('2x minecraft:diamond', 'ibpdx:diamond_clump')
event.recipes.immersiveengineeringCrusher('2x minecraft:emerald', 'ibpdx:emerald_clump')
event.recipes.immersiveengineeringCrusher('6x minecraft:lapis_lazuli', 'ibpdx:lapis_clump')
event.recipes.immersiveengineeringCrusher('3x minecraft:quartz', 'ibpdx:quartz_clump')
event.recipes.immersiveengineeringCrusher('2x mekanism:fluorite_gem', 'ibpdx:fluorite_clump')
event.recipes.immersiveengineeringCrusher('3x thermal:niter', 'ibpdx:niter_clump')



let multiSmelt = (output, input, includeBlasting) => {
    event.smelting(output, input)
    
    if (includeBlasting) {
      event.blasting(output, input)
    }
  }
  
  multiSmelt('minecraft:iron_ingot', 'mekanism:clump_iron', true)
  multiSmelt('minecraft:gold_ingot', 'mekanism:clump_gold', true)
  multiSmelt('thermal:copper_ingot', 'mekanism:clump_copper', true)
  multiSmelt('thermal:tin_ingot', 'mekanism:clump_tin', true)
  multiSmelt('thermal:lead_ingot', 'mekanism:clump_lead', true)
  multiSmelt('thermal:silver_ingot', 'ibpdx:clump_silver', true)

  multiSmelt('minecraft:iron_ingot', 'thermal:iron_dust', true)
  multiSmelt('minecraft:gold_ingot', 'thermal:gold_dust', true)
  multiSmelt('thermal:copper_ingot', 'thermal:copper_dust', true)
  multiSmelt('thermal:tin_ingot', 'thermal:tin_dust', true)
  multiSmelt('thermal:lead_ingot', 'thermal:lead_dust', true)
  multiSmelt('thermal:silver_ingot', 'thermal:silver_dust', true)

  multiSmelt('minecraft:iron_ingot', 'mekanism:shard_iron', true)
  multiSmelt('minecraft:gold_ingot', 'mekanism:shard_gold', true)
  multiSmelt('thermal:copper_ingot', 'mekanism:shard_copper', true)
  multiSmelt('thermal:tin_ingot', 'mekanism:shard_tin', true)
  multiSmelt('thermal:lead_ingot', 'mekanism:shard_lead', true)
  multiSmelt('thermal:silver_ingot', 'ibpdx:shard_silver', true)

  multiSmelt('immersiveengineering:ingot_aluminum', 'ibpdx:dirty_dust_aluminum', true)
  multiSmelt('thermal:nickel_ingot', 'ibpdx:dirty_dust_nickel', true)
  multiSmelt('immersiveengineering:ingot_uranium', 'mekanism:dirty_dust_uranium', true)
  multiSmelt('mekanism:ingot_osmium', 'mekanism:dirty_dust_osmium', true)
  multiSmelt('draconicevolution:draconium_ingot', 'ibpdx:dirty_dust_draconium', true)

  multiSmelt('2x immersiveengineering:ingot_aluminum', 'ibpdx:clump_aluminum', true)
  multiSmelt('2x thermal:nickel_ingot', 'ibpdx:clump_nickel', true)
  multiSmelt('2x immersiveengineering:ingot_uranium', 'mekanism:clump_uranium', true)
  multiSmelt('2x draconicevolution:draconium_ingot', 'ibpdx:clump_draconium', true)
  multiSmelt('2x boss_tools:silicon_ingot', 'ibpdx:clump_silicon', true)
  multiSmelt('2x boss_tools:desh_ingot', 'ibpdx:clump_desh', true)
  multiSmelt('2x mekanism:ingot_osmium', 'mekanism:clump_osmium', true)

})




onEvent('recipes', e => {
    e.remove({
        output: [
            'minecraft:iron_ingot',
            'thermal:iron_dust',
            'minecraft:gold_ingot',
            'thermal:gold_dust',
            'thermal:copper_ingot',
            'thermal:copper_dust',
            'thermal:tin_ingot',
            'thermal:tin_dust',
            'thermal:lead_ingot',
            'thermal:lead_dust',
            'thermal:silver_ingot',
            'thermal:silver_dust',
            'bloodmagic:iron_fragment',
            'bloodmagic:gold_fragment',
            'bloodmagic:iron_sand',
            'bloodmagic:gold_sand',
            'bloodmagic:iron_gravel',
            'bloodmagic:gold_gravel',
            'mekanism:dirty_dust_iron',
            'mekanism:clump_iron',
            'mekanism:shard_iron',
            'mekanism:crystal_iron',
            'mekanism:dirty_dust_gold',
            'mekanism:clump_gold',
            'mekanism:shard_gold',
            'mekanism:crystal_gold',
            'mekanism:dirty_dust_copper',
            'mekanism:clump_copper',
            'mekanism:shard_copper',
            'mekanism:crystal_copper',
            'mekanism:dirty_dust_tin',
            'mekanism:clump_tin',
            'mekanism:shard_tin',
            'mekanism:crystal_tin',
            'mekanism:dirty_dust_lead',
            'mekanism:clump_lead',
            'mekanism:shard_lead',
            'mekanism:crystal_lead',
            'immersiveengineering:ingot_aluminum',
            'thermal:nickel_ingot',
            'immersiveengineering:ingot_uranium',
            'draconicevolution:draconium_ingot',
            'immersiveengineering:dust_aluminum',
            'thermal:nickel_dust',
            'immersiveengineering:dust_uranium',
            'draconicevolution:draconium_dust',
            'mekanism:dirty_dust_uranium',
            'mekanism:clump_uranium',
            'mekanism:shard_uranium',
            'mekanism:crystal_uranium',
            'mekanism:dirty_dust_uranium',
            'mekanism:clump_uranium',
            'mekanism:shard_uranium',
            'mekanism:crystal_uranium',
            'boss_tools:desh_ingot',
            'boss_tools:silicon_ingot',
            'minecraft:diamond',
            'minecraft:emerald',
            'minecraft:lapis_lazuli',
            'minecraft:redstone',
            'mekanism:fluorite_gem',
            'thermal:niter',





        ]
    })

})

