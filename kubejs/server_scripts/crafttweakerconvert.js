onEvent('recipes', event => {
    // Bottling Machine
    event.custom({
        type: "immersiveengineering:bottling_machine",
        result: {
            item: "ibpdx:speed_gear"
        },
        input: {
            item: "thermal:invar_gear"
        },
        fluid: {
            tag: "ibpdx:speed_potion",
            amount: 250
        }
    }).id('ibpdx:speed_gear')

    event.custom({
        type: "immersiveengineering:bottling_machine",
        result: {
            item: "ibpdx:power_gear"
        },
        input: {
            item: "thermal:invar_gear"
        },
        fluid: {
            tag: "ibpdx:strength_potion",
            amount: 250
        }
    }).id('ibpdx:power_gear')

    event.custom({
        type: "immersiveengineering:bottling_machine",
        result: {
            item: "ibpdx:double_gear"
        },
        input: {
            item: "ibpdx:inert_double_gear"
        },
        fluid: {
            tag: "ibpdx:enderslime",
            amount: 1000
        }
    }).id('ibpdx:double_gear')

    //Mixer
    event.custom({
        "type": "immersiveengineering:mixer",
        "inputs": [
            {
                "item": "chemlib:compound_carbon_dioxide"
            }
        ],
        "fluid": {
            "tag": "minecraft:water",
            "amount": 1000
        },
        "result": {
            "fluid": "ibpdx:carbonic_acid",
            "amount": 1000
        },

        "energy": 3200
    }).id('ibpdx:carbonic_acid')

    // Distillation
    event.custom({
        type: "immersivepetroleum:distillation",
        results: [
            { fluid: 'thermal:redstone', amount: 40 },
            { fluid: 'thermal:glowstone', amount: 20 },
            { fluid: 'tconstruct:molten_glass', amount: 40 }
        ],
        byproducts: [    {
            "item": "minecraft:sugar",
            "chance": "0.5"
          },
          {
            "item": "minecraft:gunpowder",
            "chance": "0.5"
          }],
        input: { tag: 'ibpdx:magical_mixture', amount: 100 },
        time: 1,
        energy: 1024
    }).id('ibpdx:magical_mixture_distillation')


    // Thermal Fuel
    event.recipes.thermal.compression_fuel(Fluid.of('forestry:seed_oil', 1000)).energy(100000).id("ibdpx:compression_seed")
    event.recipes.thermal.compression_fuel(Fluid.of('ibpdx:crystallized_oil', 1000)).energy(500000).id("ibdpx:compression_crystallized")
    event.recipes.thermal.compression_fuel(Fluid.of('ibpdx:empowered_oil', 1000)).energy(800000).id("ibdpx:compression_empowered")
    event.recipes.thermal.compression_fuel(Fluid.of('industrialforegoing:sewage', 1000)).energy(80000).id("ibdpx:compression_sewage")
    event.recipes.thermal.lapidary_fuel('ibpdx:energy_shard').energy(50000).id('ibpdx:lapidary_flux')


    function IEBlastFurnace(output, input, time){
      event.custom(
        {
          "type": "immersiveengineering:blast_furnace",
          "result": {
              "item": output
          },
          "input": {
              "item": input
          },
          "slag": {
              "tag": "forge:slag"
          },
          "time": time
      }
      )
    }


    //Immersive Blast Furnace
    IEBlastFurnace("minecraft:iron_ingot", "mekanism:clump_iron", 80);
    IEBlastFurnace("minecraft:gold_ingot", "mekanism:clump_gold", 80);
    IEBlastFurnace("thermal:copper_ingot", "mekanism:clump_copper", 80);
    IEBlastFurnace("thermal:tin_ingot", "mekanism:clump_tin", 80);
    IEBlastFurnace("thermal:lead_ingot", "mekanism:clump_lead", 80);
    IEBlastFurnace("thermal:silver_ingot", "ibpdx:clump_silver", 80);
    IEBlastFurnace("minecraft:iron_ingot", "thermal:iron_dust", 80);
    IEBlastFurnace("minecraft:gold_ingot", "thermal:gold_dust", 80);
    IEBlastFurnace("thermal:copper_ingot", "thermal:copper_dust", 80);
    IEBlastFurnace("thermal:tin_ingot", "thermal:tin_dust", 80);
    IEBlastFurnace("thermal:lead_ingot", "thermal:lead_dust", 80);
    IEBlastFurnace("thermal:silver_ingot", "thermal:silver_dust", 80);
    IEBlastFurnace("immersiveengineering:ingot_aluminum", "ibpdx:dirty_dust_aluminum", 80);
    IEBlastFurnace("thermal:nickel_ingot", "thermal:nickel_dust", 80);


    // Astral Sorcery
    event.custom(
      {
        "type": "astralsorcery:lightwell",
        "input": {
          "item": "ibpdx:starlight_abberation"
        },
        "output": "astralsorcery:liquid_starlight",
        "productionMultiplier": 0.25,
        "shatterMultiplier": 1.0,
        "color": -2236929
      }
    ).id('ibpdx:lightwell_abberation')
    event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "tconstruct:blood",
        "reactant1Amount": 50,
        "reactant2": "tconstruct:liquid_soul",
        "reactant2Amount": 10,
        "chanceConsumeReactant1": 1.0,
        "chanceConsumeReactant2": 0.5,
        "weight": 9,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": 'bloodmagic:basemonstersoul',
              "nbt": '{souls: 0.1}',
              "count": 1
            }
          }
        }
      }).id("ibpdx:bm_soul_low")

      event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "tconstruct:blood",
        "reactant1Amount": 20,
        "reactant2": "tconstruct:liquid_soul",
        "reactant2Amount": 100,
        "chanceConsumeReactant1": 1.0,
        "chanceConsumeReactant2": 0.5,
        "weight": 1,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": 'bloodmagic:basemonstersoul',
              "nbt": '{souls: 1.0}',
              "count": 1
            }
          }
        }
      }).id("ibpdx:bm_soul_high")

      event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "thermal:redstone",
        "reactant1Amount": 200,
        "reactant2": "astralsorcery:liquid_starlight",
        "reactant2Amount": 100,
        "chanceConsumeReactant1": 0.7,
        "chanceConsumeReactant2": 0.7,
        "weight": 4,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": "minecraft:redstone",
              "count": 1,
            }
          }
        }
      }).id("ibpdx:thermal_chill_red")

      event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "thermal:glowstone",
        "reactant1Amount": 200,
        "reactant2": "astralsorcery:liquid_starlight",
        "reactant2Amount": 100,
        "chanceConsumeReactant1": 0.7,
        "chanceConsumeReactant2": 0.7,
        "weight": 4,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": "minecraft:glowstone_dust",
              "count": 1,
            }
          }
        }
      }).id("ibpdx:thermal_chill_glow")

      event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "thermal:redstone",
        "reactant1Amount": 200,
        "reactant2": "astralsorcery:liquid_starlight",
        "reactant2Amount": 10,
        "chanceConsumeReactant1": 0.7,
        "chanceConsumeReactant2": 0.7,
        "weight": 6,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": "ibpdx:starlight_abberation",
              "count": 1,
            }
          }
        }
      }).id("ibpdx:thermal_chill_red_abberation")

      event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "thermal:glowstone",
        "reactant1Amount": 200,
        "reactant2": "astralsorcery:liquid_starlight",
        "reactant2Amount": 10,
        "chanceConsumeReactant1": 0.7,
        "chanceConsumeReactant2": 0.7,
        "weight": 6,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": "ibpdx:starlight_abberation",
              "count": 1,
            }
          }
        }
      }).id("ibpdx:thermal_chill_glow_abberation")

            event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "minecraft:water",
        "reactant1Amount": 10,
        "reactant2": "astralsorcery:liquid_starlight",
        "reactant2Amount": 10,
        "chanceConsumeReactant1": 1.0,
        "chanceConsumeReactant2": 1.0,
        "weight": 1,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": "boss_tools:ice_shard",
              "count": 1,
            }
          }
        }
      }).id("ibpdx:space_ice")

            event.custom({
        "type": "astralsorcery:liquid_interaction",
        "reactant1": "minecraft:water",
        "reactant1Amount": 10,
        "reactant2": "astralsorcery:liquid_starlight",
        "reactant2Amount": 10,
        "chanceConsumeReactant1": 1.0,
        "chanceConsumeReactant2": 1.0,
        "weight": 4,
        "result": {
          "id": "astralsorcery:drop_item",
          "data": {
            "output": {
              "item": "minecraft:ice",
              "count": 1,
            }
          }
        }
      }).id("ibpdx:block_ice")


    
    // Various Shapeless
    //event.shapeless("ibpdx:stable_swiftness_potion", [Item.of('minecraft:potion', '{Potion:"minecraft:swiftness"}')]).id("ibpdx:stable_swift")
    //event.shapeless("ibpdx:stable_strength_potion", [Item.of('minecraft:potion', '{Potion:"minecraft:strength"}')]).id("ibpdx:stable_strength")
    const ibpdxTools = {
      airt1_axe: Item.of("ibpdx:airt1_axe", '{AttributeModifiers:[{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}'),
      airt1_pickaxe: Item.of("ibpdx:airt1_pickaxe", '{AttributeModifiers:[{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}'),
      airt1_shovel: Item.of("ibpdx:airt1_shovel", '{AttributeModifiers:[{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}'),
      airt1_sword: Item.of("ibpdx:airt1_sword", '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13146,191124,-26292]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13246,191124,-26492]},{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}'),
      eartht1_axe : Item.of("ibpdx:eartht1_axe", '{AttributeModifiers:[{AttributeName:"generic.armor",Amount:2,Slot: "mainhand",Name:"generic.armor",UUID:[I;-123425,10546,191124,-21092]}]}'),
      eartht1_pickaxe : Item.of("ibpdx:eartht1_pickaxe", '{AttributeModifiers:[{AttributeName:"generic.armor",Amount:2,Slot: "mainhand",Name:"generic.armor",UUID:[I;-123425,10546,191124,-21092]}]}'),
      eartht1_shovel : Item.of("ibpdx:eartht1_shovel", '{AttributeModifiers:[{AttributeName:"generic.armor",Amount:2,Slot: "mainhand",Name:"generic.armor",UUID:[I;-123425,10546,191124,-21092]}]}'),
      eartht1_sword: Item.of("ibpdx:eartht1_sword", '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13146,191124,-26292]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13246,191124,-26492]},{AttributeName:"generic.armor",Slot: "mainhand",Amount:2,Name:"generic.armor",UUID:[I;-123425,13346,191124,-26692]}]}'),
      firet1_axe : Item.of("ibpdx:firet1_axe", '{AttributeModifiers: [{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}'),
      firet1_pickaxe : Item.of("ibpdx:firet1_pickaxe", '{AttributeModifiers: [{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}'),
      firet1_shovel : Item.of("ibpdx:firet1_shovel", '{AttributeModifiers: [{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}'),
      firet1_sword: Item.of("ibpdx:firet1_sword", '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13146,191124,-26292]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13246,191124,-26492]},{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}'),
      watert1_axe : Item.of("ibpdx:watert1_axe", '{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:4,Slot: "mainhand",Name:"generic.max_health",UUID:[I;-123425,10746,191124,-21492]}]}'),
      watert1_pickaxe : Item.of("ibpdx:watert1_pickaxe", '{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:4,Slot: "mainhand",Name:"generic.max_health",UUID:[I;-123425,10746,191124,-21492]}]}'),
      watert1_shovel : Item.of("ibpdx:watert1_shovel", '{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:4,Slot: "mainhand",Name:"generic.max_health",UUID:[I;-123425,10746,191124,-21492]}]}'),
      watert1_sword: Item.of("ibpdx:watert1_sword", '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13746,191124,-27492]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13846,191124,-27692]},{AttributeName:"generic.max_health",Slot: "mainhand",Amount:4,Name:"generic.max_health",UUID:[I;-123425,13946,191124,-27892]}]}')

    }

    
    event.shapeless(ibpdxTools.airt1_axe, ["ibpdx:duskstone_axe", "thermal:blitz_rod"]).id("ibpdx:airt1_axe")
    event.shapeless(ibpdxTools.airt1_pickaxe, ["ibpdx:duskstone_pickaxe", "thermal:blitz_rod"]).id("ibpdx:airt1_pickaxe")
    event.shapeless(ibpdxTools.airt1_shovel, ["ibpdx:duskstone_shovel", "thermal:blitz_rod"]).id("ibpdx:airt1_shovel")
    event.shapeless(ibpdxTools.airt1_sword, ["ibpdx:duskstone_sword", "thermal:blitz_rod"]).id("ibpdx:airt1_sword")
    event.shapeless(ibpdxTools.eartht1_axe, ["ibpdx:duskstone_axe", "thermal:basalz_rod"]).id("ibpdx:eartht1_axe")
    event.shapeless(ibpdxTools.eartht1_pickaxe, ["ibpdx:duskstone_pickaxe", "thermal:basalz_rod"]).id("ibpdx:eartht1_pickaxe")
    event.shapeless(ibpdxTools.eartht1_shovel, ["ibpdx:duskstone_shovel", "thermal:basalz_rod"]).id("ibpdx:eartht1_shovel")
    event.shapeless(ibpdxTools.eartht1_sword, ["ibpdx:duskstone_sword", "thermal:basalz_rod"]).id("ibpdx:eartht1_sword")
    event.shapeless(ibpdxTools.firet1_axe, ["ibpdx:duskstone_axe", "minecraft:blaze_rod"]).id("ibpdx:firet1_axe")
    event.shapeless(ibpdxTools.firet1_pickaxe, ["ibpdx:duskstone_pickaxe", "minecraft:blaze_rod"]).id("ibpdx:firet1_pickaxe")
    event.shapeless(ibpdxTools.firet1_shovel, ["ibpdx:duskstone_shovel", "minecraft:blaze_rod"]).id("ibpdx:firet1_shovel")
    event.shapeless(ibpdxTools.firet1_sword, ["ibpdx:duskstone_sword", "minecraft:blaze_rod"]).id("ibpdx:firet1_sword")
    event.shapeless(ibpdxTools.watert1_axe, ["ibpdx:duskstone_axe", "thermal:blizz_rod"]).id("ibpdx:watert1_axe")
    event.shapeless(ibpdxTools.watert1_pickaxe, ["ibpdx:duskstone_pickaxe", "thermal:blizz_rod"]).id("ibpdx:watert1_pickaxe")
    event.shapeless(ibpdxTools.watert1_shovel, ["ibpdx:duskstone_shovel", "thermal:blizz_rod"]).id("ibpdx:watert1_shovel")
    event.shapeless(ibpdxTools.watert1_sword, ["ibpdx:duskstone_sword", "thermal:blizz_rod"]).id("ibpdx:watert1_sword")
    
    event.shapeless("16x ibpdx:spirit_charge", [Item.of("bloodmagic:basemonstersoul", {souls: 1.0}),Item.of("bloodmagic:basemonstersoul", {souls: 1.0}),Item.of("bloodmagic:basemonstersoul", {souls: 1.0}),Item.of("bloodmagic:basemonstersoul", {souls: 1.0}), "botania:life_essence"]).id("ibpdx:spirit_charge");

      
    const books =[
      //[enchantLevel, enchantment, itemInput, id]
      [4, "minecraft:protection", "ibpdx:dummy_protection_book", "ibpdx:protection"],
      [5, "minecraft:efficiency", "ibpdx:dummy_efficiency_book", "ibpdx:efficiency"],
      [4, "minecraft:projectile_protection", "ibpdx:dummy_projectile_prot_book", "ibpdx:projectile_protection"],
      [4, "minecraft:fire_protection", "ibpdx:dummy_fire_prot_book", "ibpdx:fire_protection"],
      [4, "minecraft:blast_protection", "ibpdx:dummy_blast_prot_book", "ibpdx:blast_protection"],
      [4, "minecraft:feather_falling", "ibpdx:dummy_feather_falling_book", "ibpdx:feather_falling"],
      [3, "minecraft:looting", "ibpdx:dummy_looting_book", "ibpdx:looting"],
      [3, "minecraft:fortune", "ibpdx:dummy_fortune_book", "ibpdx:fortune"],
      [1, "minecraft:silk_touch", "ibpdx:dummy_silk_touch_book", "ibpdx:silk"],
      [3, "minecraft:unbreaking", "ibpdx:dummy_unbreaking_book", "ibpdx:unbreaking"],
      [5, "minecraft:sharpness", "ibpdx:dummy_sharpness_book", "ibpdx:sharpness"],
      [5, "minecraft:smite", "ibpdx:dummy_smite_book", "ibpdx:smite"],
      [4, "minecraft:bane_of_arthropods", "ibpdx:dummy_arthropods_book", "ibpdx:arthropods"],
      [1, "veinmining:vein_mining", "ibpdx:dummy_vein_mining_book", "ibpdx:vein_mining"],
      [3, "minecraft:fire_aspect", "ibpdx:dummy_fire_aspect_book", "ibpdx:fire_aspect"],
      [3, "minecraft:flame", "ibpdx:dummy_flame_book", "ibpdx:flame"],
      [5, "minecraft:power", "ibpdx:dummy_power_book", "ibpdx:power"],
      [2, "minecraft:knockback", "ibpdx:dummy_knockback_book", "ibpdx:knockback"],
      [2, "minecraft:punch", "ibpdx:dummy_punch_book", "ibpdx:punch"],
      [3, "minecraft:respiration", "ibpdx:dummy_respiration_book", "ibpdx:respiration"],
      [1, "minecraft:aqua_affinity", "ibpdx:dummy_aqua_affinity_book", "ibpdx:aqua_affinity"],
      [3, "minecraft:depth_strider", "ibpdx:dummy_depth_strider_book", "ibpdx:depth_strider"],
      [3, "minecraft:frost_walker", "ibpdx:dummy_frost_walker_book", "ibpdx:frost_walker"],
      [3, "minecraft:soul_speed", "ibpdx:dummy_soul_speed_book", "ibpdx:soul_speed"],
      [3, "minecraft:sweeping", "ibpdx:dummy_sweeping_edge_book", "ibpdx:sweeping_edge"],
      [3, "minecraft:luck_of_the_sea", "ibpdx:dummy_luck_of_the_sea_book", "ibpdx:luck_of_the_sea"],
      [3, "minecraft:lure", "ibpdx:dummy_lure_book", "ibpdx:lure"],
      [1, "minecraft:infinity", "ibpdx:dummy_infinity_book", "ibpdx:infinity"],
      [1, "minecraft:mending", "ibpdx:dummy_mending_book", "ibpdx:mending"],
      [1, "astralsorcery:night_vision", "ibpdx:dummy_night_vision_book", "ibpdx:night_vision"],
      [3, "cyclic:experience_boost", "ibpdx:dummy_experience_boost_book", "ibpdx:experience_boost"],
      [3, "astralsorcery:scorching_heat", "ibpdx:dummy_scorching_heat_book", "ibpdx:scorching_heat"],
      [4, "cofh_core:holding", "ibpdx:dummy_holding_book", "ibpdx:holding"],
      [3, "cyclic:beheading", "ibpdx:dummy_beheading_book", "ibpdx:beheading"],
      [2, "cyclic:life_leech", "ibpdx:dummy_life_leech_book", "ibpdx:life_leech"],
      [1, "cyclic:multishot", "ibpdx:dummy_multi_bow_book", "ibpdx:multi_bow"],
      [3, "cyclic:quickshot", "ibpdx:dummy_quickshot_book", "ibpdx:quickshot"]
  ]
  books.forEach(recipe => {
      event.shapeless(Item.of('minecraft:enchanted_book').enchant(recipe[1], recipe[0]), [recipe[2]]).id(recipe[3])
  })

  event.shapeless("masterfulmachinery:generic_controller", ["masterfulmachinery:advanced_chemical_plant_controller"]).id("ibpdx:reset_acp");
  event.shapeless("masterfulmachinery:generic_fluid_port_fluids_input", ["masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_input"]).id("ibpdx:reset_fluidinput_acp");
  event.shapeless("masterfulmachinery:generic_fluid_port_fluids_output", ["masterfulmachinery:advanced_chemical_plant_fluid_port_fluids_output"]).id("ibpdx:reset_fluidoutput_acp");
  event.shapeless("masterfulmachinery:generic_energy_port_energy_output", ["masterfulmachinery:advanced_chemical_plant_energy_port_energy_input"]).id("ibpdx:reset_energyinput_acp");
  event.shapeless("masterfulmachinery:generic_energy_port_energy_input", ["masterfulmachinery:advanced_chemical_plant_energy_port_energy_output"]).id("ibpdx:reset_energyoutput_acp");

  event.shapeless("masterfulmachinery:generic_controller", ['#ibpdx:controllers']).id("ibpdx:controller_reset");
  event.shapeless("masterfulmachinery:generic_item_port_items_input", ["#ibpdx:item_input"]).id("ibpdx:reset_iteminput");
  event.shapeless("masterfulmachinery:generic_item_port_items_output", ["#ibpdx:item_output"]).id("ibpdx:reset_itemoutput");
  event.shapeless("masterfulmachinery:generic_fluid_port_fluids_input", ["#ibpdx:fluid_input"]).id("ibpdx:reset_fluidinput");
  event.shapeless("masterfulmachinery:generic_fluid_port_fluids_output", ["#ibpdx:fluid_output"]).id("ibpdx:reset_fluid_output");
  event.shapeless("masterfulmachinery:generic_energy_port_energy_input", ["#ibpdx:energy_input"]).id("ibpdx:reset_energy_input");
  event.shapeless("masterfulmachinery:generic_energy_port_energy_output", ["#ibpdx:energy_output"]).id("ibpdx:reset_energy_output");
  event.shapeless("masterfulmachinery:generic_mana_port_botania_mana_input", ["#ibpdx:mana_input"]).id("ibpdx:reset_mana_input");
  event.shapeless("masterfulmachinery:generic_mana_port_botania_mana_output", ["#ibpdx:mana_output"]).id("ibpdx:reset_mana_output");

  // Botania Runic Altar
    const recipes = [
        {
            inputs: [Item.of('ibpdx:airt1_pickaxe').ignoreNBT(), "botania:rune_air", "ibpdx:aerotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:vicio"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:airt2_pickaxe",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}',
            id: 'ibpdx:airt2_pickaxe'
        },
        {
            inputs: [Item.of('ibpdx:airt1_sword').ignoreNBT(), "botania:rune_air", "ibpdx:aerotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:vicio"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:airt2_sword",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13146,191124,-26292]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13246,191124,-26492]},{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}',
            id: 'ibpdx:airt2_sword'
        },
        {
            inputs: [Item.of('ibpdx:airt1_axe').ignoreNBT(), "botania:rune_air", "ibpdx:aerotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:vicio"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:airt2_axe",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}',
            id: 'ibpdx:airt2_axe'
        },
        {
            inputs: [Item.of('ibpdx:airt1_shovel').ignoreNBT(), "botania:rune_air", "ibpdx:aerotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:vicio"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:airt2_shovel",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.movement_speed",Amount:0.1,Slot: "mainhand",Name:"generic.movement_speed",UUID:[I;-123425,10346,191124,-20692]}]}',
            id: 'ibpdx:airt2_shovel'
        },
        {
            inputs: [Item.of('ibpdx:eartht1_pickaxe').ignoreNBT(), "botania:rune_earth", "ibpdx:petrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:mineralis"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:eartht2_pickaxe",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.armor",Amount:2,Slot: "mainhand",Name:"generic.armor",UUID:[I;-123425,10546,191124,-21092]}]}',
            id: 'ibpdx:eartht2_pickaxe'
        },
        {
            inputs: [Item.of('ibpdx:eartht1_sword').ignoreNBT(), "botania:rune_earth", "ibpdx:petrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:mineralis"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:eartht2_sword",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13146,191124,-26292]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13246,191124,-26492]},{AttributeName:"generic.armor",Slot: "mainhand",Amount:2,Name:"generic.armor",UUID:[I;-123425,13346,191124,-26692]}]}',
            id: 'ibpdx:eartht2_sword'
        },
        {
            inputs: [Item.of('ibpdx:eartht1_axe').ignoreNBT(), "botania:rune_earth", "ibpdx:petrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:mineralis"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:eartht2_axe",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.armor",Amount:2,Slot: "mainhand",Name:"generic.armor",UUID:[I;-123425,10546,191124,-21092]}]}',
            id: 'ibpdx:eartht2_axe'
        },
        {
            inputs: [Item.of('ibpdx:eartht1_shovel').ignoreNBT(), "botania:rune_earth", "ibpdx:petrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:mineralis"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:eartht2_shovel",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.armor",Amount:2,Slot: "mainhand",Name:"generic.armor",UUID:[I;-123425,10546,191124,-21092]}]}',
            id: 'ibpdx:eartht2_shovel'
        },
        {
            inputs: [Item.of('ibpdx:firet1_pickaxe').ignoreNBT(), "botania:rune_fire", "ibpdx:pyrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:fornax"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:firet2_pickaxe",
            count: 1,
            nbt: '{AttributeModifiers: [{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}',
            id: 'ibpdx:firet2_pickaxe'
        },
        {
            inputs: [Item.of('ibpdx:firet1_sword').ignoreNBT(), "botania:rune_fire", "ibpdx:pyrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:fornax"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:firet2_sword",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13146,191124,-26292]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13246,191124,-26492]},{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}',
            id: 'ibpdx:firet2_sword'
        },
        {
            inputs: [Item.of('ibpdx:firet1_axe').ignoreNBT(), "botania:rune_fire", "ibpdx:pyrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:fornax"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:firet2_axe",
            count: 1,
            nbt: '{AttributeModifiers: [{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}',
            id: 'ibpdx:firet2_axe'
        },
        {
            inputs: [Item.of('ibpdx:firet1_shovel').ignoreNBT(), "botania:rune_fire", "ibpdx:pyrotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:fornax"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:firet2_shovel",
            count: 1,
            nbt: '{AttributeModifiers: [{Slot: "mainhand", AttributeName: "forge:reach_distance", Name:"reach_distance", UUID:[I;-123425,10546,191124,-21093], Amount: 1.0d}]}',
            id: 'ibpdx:firet2_shovel'
        },
        {
            inputs: [Item.of('ibpdx:watert1_pickaxe').ignoreNBT(), "botania:rune_water", "ibpdx:cryotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:octans"}}').ignoreNBT()
        ],
            mana: 20000,
            output: "ibpdx:watert2_pickaxe",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:4,Slot: "mainhand",Name:"generic.max_health",UUID:[I;-123425,10746,191124,-21492]}]}',
            id: 'ibpdx:watert2_pickaxe'
        },
        {
            inputs: [Item.of('ibpdx:watert1_sword').ignoreNBT(), "botania:rune_water", "ibpdx:cryotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:octans"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:watert2_sword",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.attack_speed",Amount:4,Slot: "mainhand",Name:"generic.attack_speed",UUID:[I;-123425,13746,191124,-27492]},{AttributeName:"generic.attack_damage",Amount:7,Slot: "mainhand",Name:"generic.attack_damage",UUID:[I;-123425,13846,191124,-27692]},{AttributeName:"generic.max_health",Slot: "mainhand",Amount:4,Name:"generic.max_health",UUID:[I;-123425,13946,191124,-27892]}]}',
            id: 'ibpdx:watert2_sword'
        },
        {
            inputs: [Item.of('ibpdx:watert1_axe').ignoreNBT(), "botania:rune_water", "ibpdx:cryotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:octans"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:watert2_axe",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:4,Slot: "mainhand",Name:"generic.max_health",UUID:[I;-123425,10746,191124,-21492]}]}',
            id: 'ibpdx:watert2_axe'
        },
        {
            inputs: [Item.of('ibpdx:watert1_shovel').ignoreNBT(), "botania:rune_water", "ibpdx:cryotheum_blend", Item.of("astralsorcery:attuned_celestial_crystal", '{astralsorcery: {constellationName: "astralsorcery:octans"}}').ignoreNBT()
            ],
            mana: 20000,
            output: "ibpdx:watert2_shovel",
            count: 1,
            nbt: '{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:4,Slot: "mainhand",Name:"generic.max_health",UUID:[I;-123425,10746,191124,-21492]}]}',
            id: 'ibpdx:watert2_shovel'
        }
    ]
    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });
        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count, nbt: recipe.nbt },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
})
