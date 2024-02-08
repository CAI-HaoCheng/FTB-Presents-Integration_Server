//priority: 3000

// kubejs/server_scripts/example.js
// This is just an example script to show off multiple types of recipes and removal methods
// Supports /reload

// Listen to server recipe event
onEvent('recipes', event => {


event.custom({"type":"mekanism:metallurgic_infusing","itemInput":{"ingredient":{"item":"mekanism:enriched_iron"}},"infusionInput":{"amount":10,"tag":"mekanism:carbon"},"output":{"item":"immersiveengineering:ingot_steel"}})

event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:iron_gear"},"conditions":[{"value":{"tag":"forge:gears/iron","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/iron"}},"energy":2400})
 
event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:gold_gear"},"conditions":[{"value":{"tag":"forge:gears/gold","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/gold"}},"energy":2400})

event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:netherite_gear"},"conditions":[{"value":{"tag":"forge:gears/netherite","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/netherite"}},"energy":2400})

event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:lapis_gear"},"conditions":[{"value":{"tag":"forge:gears/lapis","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/lapis"}},"energy":2400})
 
event.custom({
    "type": "thermal:press",
    "input": [
      {
        "tag": "forge:ingots/lapis",
        "count": 4
      },
      {
        "item": "thermal:press_gear_die"
      }
    ],
    "result": [
      {
        "item": "thermal:lapis_gear"
      }
    ]
})

  event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/lapis",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/gear"
},
"fluid": {
  "name": "jaopca:molten.lapis",
  "amount": 576
},
"result": {
  "item": "thermal:lapis_gear"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/lapis",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/gear"
},
"fluid": {
  "name": "jaopca:molten.lapis",
  "amount": 576
},
"result": {
  "item": "thermal:lapis_gear"
},
"cooling_time": 100
})

event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:diamond_gear"},"conditions":[{"value":{"tag":"forge:gears/diamond","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:gems/diamond"}},"energy":2400})
 
event.custom({
    "type": "thermal:press",
    "input": [
      {
        "tag": "forge:gems/diamond",
        "count": 4
      },
      {
        "item": "thermal:press_gear_die"
      }
    ],
    "result": [
      {
        "item": "thermal:diamond_gear"
      }
    ]
})

  event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/diamond",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/gear"
},
"fluid": {
  "name": "tconstruct:molten_diamond",
  "amount": 576
},
"result": {
  "item": "thermal:diamond_gear"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/diamond",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/gear"
},
"fluid": {
  "name": "tconstruct:molten_diamond",
  "amount": 576
},
"result": {
  "item": "thermal:diamond_gear"
},
"cooling_time": 100
})

event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:emerald_gear"},"conditions":[{"value":{"tag":"forge:gears/emerald","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:gems/emerald"}},"energy":2400})
 
event.custom({
    "type": "thermal:press",
    "input": [
      {
        "tag": "forge:gems/emerald",
        "count": 4
      },
      {
        "item": "thermal:press_gear_die"
      }
    ],
    "result": [
      {
        "item": "thermal:emerald_gear"
      }
    ]
})

  event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/emerald",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/gear"
},
"fluid": {
  "name": "tconstruct:molten_emerald",
  "amount": 576
},
"result": {
  "item": "thermal:emerald_gear"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/emerald",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/gear"
},
"fluid": {
  "name": "tconstruct:molten_emerald",
  "amount": 576
},
"result": {
  "item": "thermal:emerald_gear"
},
"cooling_time": 100
})

event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:quartz_gear"},"conditions":[{"value":{"tag":"forge:gears/quartz","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:gems/quartz"}},"energy":2400})
 
event.custom({
    "type": "thermal:press",
    "input": [
      {
        "tag": "forge:gems/quartz",
        "count": 4
      },
      {
        "item": "thermal:press_gear_die"
      }
    ],
    "result": [
      {
        "item": "thermal:quartz_gear"
      }
    ]
})

  event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/quartz",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/multi_use/gear"
},
"fluid": {
  "name": "tconstruct:molten_quartz",
  "amount": 576
},
"result": {
  "item": "thermal:quartz_gear"
},
"cooling_time": 100
})

event.custom({
"type": "tconstruct:casting_table",
"conditions": [
  {
    "value": {
      "tag": "forge:gears/quartz",
      "type": "forge:tag_empty"
    },
    "type": "forge:not"
  }
],
"cast": {
  "tag": "tconstruct:casts/single_use/gear"
},
"fluid": {
  "name": "tconstruct:molten_quartz",
  "amount": 576
},
"result": {
  "item": "thermal:quartz_gear"
},
"cooling_time": 100
})

event.custom({
    "type": "tconstruct:casting_table",
    "conditions": [
      {
        "value": {
          "tag": "forge:gears/signalum",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
      }
    ],
    "cast": {
      "tag": "tconstruct:casts/multi_use/gear"
    },
    "fluid": {
      "name": "tconstruct:molten_signalum",
      "amount": 576
    },
    "result": {
      "item": "thermal:signalum_gear"
    },
    "cooling_time": 100
  })

  event.custom({
    "type": "tconstruct:casting_table",
    "conditions": [
      {
        "value": {
          "tag": "forge:gears/signalum",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
      }
    ],
    "cast": {
      "tag": "tconstruct:casts/single_use/gear"
    },
    "fluid": {
      "name": "tconstruct:molten_signalum",
      "amount": 576
    },
    "result": {
      "item": "thermal:signalum_gear"
    },
    "cooling_time": 100
    })

    event.custom({
        "type": "tconstruct:casting_table",
        "conditions": [
          {
            "value": {
              "tag": "forge:gears/lumium",
              "type": "forge:tag_empty"
            },
            "type": "forge:not"
          }
        ],
        "cast": {
          "tag": "tconstruct:casts/multi_use/gear"
        },
        "fluid": {
          "name": "tconstruct:molten_lumium",
          "amount": 576
        },
        "result": {
          "item": "thermal:lumium_gear"
        },
        "cooling_time": 100
      })
    
      event.custom({
        "type": "tconstruct:casting_table",
        "conditions": [
          {
            "value": {
              "tag": "forge:gears/lumium",
              "type": "forge:tag_empty"
            },
            "type": "forge:not"
          }
        ],
        "cast": {
          "tag": "tconstruct:casts/single_use/gear"
        },
        "fluid": {
          "name": "tconstruct:molten_lumium",
          "amount": 576
        },
        "result": {
          "item": "thermal:lumium_gear"
        },
        "cooling_time": 100
        })

        event.custom({
            "type": "tconstruct:casting_table",
            "conditions": [
              {
                "value": {
                  "tag": "forge:gears/enderium",
                  "type": "forge:tag_empty"
                },
                "type": "forge:not"
              }
            ],
            "cast": {
              "tag": "tconstruct:casts/multi_use/gear"
            },
            "fluid": {
              "name": "tconstruct:molten_enderium",
              "amount": 576
            },
            "result": {
              "item": "thermal:enderium_gear"
            },
            "cooling_time": 100
          })
        
    event.custom({
            "type": "tconstruct:casting_table",
            "conditions": [
              {
                "value": {
                  "tag": "forge:gears/enderium",
                  "type": "forge:tag_empty"
                },
                "type": "forge:not"
              }
            ],
            "cast": {
              "tag": "tconstruct:casts/single_use/gear"
            },
            "fluid": {
              "name": "tconstruct:molten_enderium",
              "amount": 576
            },
            "result": {
              "item": "thermal:enderium_gear"
            },
            "cooling_time": 100
    })
    
    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:enderium_gear"},"conditions":[{"value":{"tag":"forge:gears/enderium","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/enderium"}},"energy":2400})
    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:lumium_gear"},"conditions":[{"value":{"tag":"forge:gears/lumium","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/lumium"}},"energy":2400})
    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_gear"},"result":{"item":"thermal:signalum_gear"},"conditions":[{"value":{"tag":"forge:gears/signalum","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/signalum"}},"energy":2400})



    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"item":"thermal:gold_plate"},"conditions":[{"value":{"tag":"forge:plates/gold","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/gold"}},"energy":2400})
    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"item":"thermal:netherite_plate"},"conditions":[{"value":{"tag":"forge:plates/netherite","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/netherite"}},"energy":2400})
    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"item":"thermal:signalum_plate"},"conditions":[{"value":{"tag":"forge:plates/signalum","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/signalum"}},"energy":2400})
    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"item":"thermal:lumium_plate"},"conditions":[{"value":{"tag":"forge:plates/lumium","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/lumium"}},"energy":2400})
    event.custom({"type":"immersiveengineering:metal_press","mold":{"item":"immersiveengineering:mold_plate"},"result":{"item":"thermal:enderium_plate"},"conditions":[{"value":{"tag":"forge:plates/enderium","type":"forge:tag_empty"},"type":"forge:not"}],"input":{"count":4,"base_ingredient":{"tag":"forge:ingots/enderium"}},"energy":2400})
 
event.custom({
    "type":"boss_tools_giselle_addon:rolling",
    "input":{
       "ingredient":{
          "tag":"forge:ingots/iron"
       }
    },
    "output":{
       "item":"thermal:iron_plate",
       "count":1
    },
    "cookTime":200
 })

 event.custom({
    "type":"boss_tools_giselle_addon:rolling",
    "input":{
       "ingredient":{
          "tag":"forge:ingots/netherite"
       }
    },
    "output":{
       "item":"thermal:netherite_plate",
       "count":1
    },
    "cookTime":200
 })

 event.custom({
    "type": "tconstruct:casting_table",
    "conditions": [
      {
        "value": {
          "tag": "forge:gears/gold",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
      }
    ],
    "cast": {
      "tag": "tconstruct:casts/multi_use/gear"
    },
    "fluid": {
      "name": "tconstruct:molten_gold",
      "amount": 576
    },
    "result": {
      "item": "thermal:gold_gear"
    },
    "cooling_time": 100
  })
  
  event.custom({
    "type": "tconstruct:casting_table",
    "conditions": [
      {
        "value": {
          "tag": "forge:gears/gold",
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
      }
    ],
    "cast": {
      "tag": "tconstruct:casts/single_use/gear"
    },
    "fluid": {
      "name": "tconstruct:molten_gold",
      "amount": 576
    },
    "result": {
      "item": "thermal:gold_gear"
    },
    "cooling_time": 100
    })

event.custom({
  "type": "tconstruct:casting_table",
  "conditions": [
    {
      "value": {
        "tag": "forge:gears/copper",
        "type": "forge:tag_empty"
      },
      "type": "forge:not"
    }
  ],
  "cast": {
    "tag": "tconstruct:casts/multi_use/gear"
  },
  "fluid": {
    "name": "tconstruct:molten_copper",
    "amount": 576
  },
  "result": {
    "item": "thermal:copper_gear"
  },
  "cooling_time": 100
})

event.custom({
  "type": "tconstruct:casting_table",
  "conditions": [
    {
      "value": {
        "tag": "forge:gears/copper",
        "type": "forge:tag_empty"
      },
      "type": "forge:not"
    }
  ],
  "cast": {
    "tag": "tconstruct:casts/single_use/gear"
  },
  "fluid": {
    "name": "tconstruct:molten_copper",
    "amount": 576
  },
  "result": {
    "item": "thermal:copper_gear"
  },
  "cooling_time": 100
  })
  

  event.custom({"type":"immersiveengineering:metal_press", "mold":{"item":"immersiveengineering:mold_plate"},
  "result":{"item":"thermal:bronze_plate"},
  "input":{"tag":"forge:ingots/bronze"},"energy":2400})

  event.custom({
    "type": "thermal:press",
    "ingredient": {
      "tag": "forge:ingots/bronze"
    },
    "result": [
      {
        "item": "thermal:bronze_plate"
      }
  ]})

event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/apatite"},"input":{"tag":"forge:gems/apatite"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/cinnabar"},"input":{"tag":"forge:gems/cinnabar"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/niter"},"input":{"tag":"forge:gems/niter"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/sulfur"},"input":{"tag":"forge:gems/sulfur"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/lapis"},"input":{"tag":"forge:gems/lapis"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/diamond"},"input":{"tag":"forge:gems/diamond"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/emerald"},"input":{"tag":"forge:gems/emerald"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/quartz"},"input":{"tag":"forge:gems/quartz"},"energy":3000})
event.custom({"type":"immersiveengineering:crusher","secondaries":[],"result":{"tag":"forge:dusts/netherite"},"input":{"tag":"forge:ingots/netherite"},"energy":3000})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/quartz"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:quartz_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/emerald"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:emerald_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/diamond"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:diamond_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/lapis"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:lapis_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/netherite_scrap"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:netherite_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/niter"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:niter_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/cinnabar"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:cinnabar_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
})

event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "forge:ores/apatite"
    },
    {
      "tag": "bloodmagic:arc/cuttingfluid"
    }
  ],
  "output": {
    "item": "thermal:apatite_dust",
    "count": 2
  },
  "syphon": 400,
  "ticks": 200,
  "upgradeLevel": 1
}) 

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_iron",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:iron_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_gold",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:gold_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_netherite",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:netherite_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_lapis",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:lapis_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_diamond",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:diamond_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_emerald",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:emerald_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_quartz",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:quartz_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_copper",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:copper_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_tin",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:tin_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_silver",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:silver_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_lead",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:lead_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_nickel",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:nickel_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_bronze",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:bronze_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_electrum",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:electrum_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_invar",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:invar_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_constantan",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:constantan_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_signalum",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:signalum_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_lumium",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:lumium_gear",
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "tconstruct:molten_enderium",
      "amount": 576
    },
    {
      "item": "tconstruct:gear_cast"
    }
  ],
  "result": [
    {
      "item": "thermal:enderium_gear",
      "count": 1
    }
  ],
  "energy": 20000
})


event.custom({"type":"immersiveengineering:metal_press", "mold":{"item":"immersiveengineering:mold_plate"},
"result":{"item":"thermal:netherite_plate"},
"input":{"tag":"forge:ingots/netherite"},"energy":2400})







































})