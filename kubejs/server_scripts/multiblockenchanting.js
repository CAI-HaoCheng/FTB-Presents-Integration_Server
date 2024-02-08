onEvent('recipes', event => {

    const recipes =[
        //[itemInput, itemAmount, fluidAmount, itemOutput]
        ["immersiveengineering:plate_steel", 32, 4000, "ibpdx:dummy_protection_book"],
        ["thermal:iron_plate", 32, 4000, "ibpdx:dummy_projectile_prot_book"],
        ["thermal:invar_plate", 32, 4000, "ibpdx:dummy_fire_prot_book"],
        ["thermal:lead_plate", 32, 4000, "ibpdx:dummy_blast_prot_book"],
        ["infused_crystals:infused_redstonium_crystal", 16, 5000, "ibpdx:dummy_efficiency_book"],
        ["immersiveengineering:rockcutter", 5, 5000, "ibpdx:dummy_sharpness_book"],
        ["thermal:silver_ingot", 32, 5000, "ibpdx:dummy_smite_book"],
        ["thermal:lead_ingot", 32, 5000, "ibpdx:dummy_arthropods_book"],
        ["minecraft:magma_block", 60, 4000, "ibpdx:dummy_flame_book"],
        ["minecraft:blaze_rod", 32, 4000, "ibpdx:dummy_fire_aspect_book"],
        ["minecraft:spectral_arrow", 32, 5000, "ibpdx:dummy_power_book"],
        ["minecraft:piston", 16, 4000, "ibpdx:dummy_knockback_book"],
        ["minecraft:sticky_piston", 16, 4000, "ibpdx:dummy_punch_book"],
        ["ftbic:energy_crystal", 8, 3000, "ibpdx:dummy_fortune_book"],
        ["minecraft:cobweb", 16, 3000, "ibpdx:dummy_silk_touch_book"],
        ["minecraft:ender_eye", 4, 1000, "ibpdx:dummy_vein_mining_book"],
        ["minecraft:feather", 60, 4000, "ibpdx:dummy_feather_falling_book"],
        ["tconstruct:seared_paver", 20, 3000, "ibpdx:dummy_unbreaking_book"],
        ["minecraft:nether_star", 1, 1000, "ibpdx:dummy_looting_book"],
        ["minecraft:kelp", 64, 3000, "ibpdx:dummy_respiration_book"],
        ["minecraft:prismarine_shard", 16, 1000, "ibpdx:dummy_aqua_affinity_book"],
        ["minecraft:heart_of_the_sea", 1, 3000, "ibpdx:dummy_depth_strider_book"],
        ["minecraft:packed_ice", 32, 3000, "ibpdx:dummy_frost_walker_book"],
        ["minecraft:crying_obsidian", 8, 3000, "ibpdx:dummy_soul_speed_book"],
        ["minecraft:iron_sword", 1, 3000, "ibpdx:dummy_sweeping_edge_book"],
        ["minecraft:gold_ingot", 8, 3000, "ibpdx:dummy_luck_of_the_sea_book"],
        ["minecraft:bread", 16, 3000, "ibpdx:dummy_lure_book"],
        ["minecraft:end_crystal", 4, 1000, "ibpdx:dummy_infinity_book"],
        ["minecraft:golden_carrot", 8, 1000, "ibpdx:dummy_night_vision_book"],
        ["minecraft:rotten_flesh", 64, 3000, "ibpdx:dummy_experience_boost_book"],
        ["xreliquary:molten_core", 4, 1000, "ibpdx:dummy_scorching_heat_book"],
        ["powah:battery_blazing", 1, 4000, "ibpdx:dummy_holding_book"],
        ["minecraft:wither_skeleton_skull", 1, 3000, "ibpdx:dummy_beheading_book"],
        ["tconstruct:blood_slime_ball", 1, 2000, "ibpdx:dummy_life_leech_book"],
        ["minecraft:bow", 1, 3000, "ibpdx:dummy_multi_bow_book"],
        ["infused_crystals:redstonium_crystal", 16, 5000, "ibpdx:dummy_quickshot_book"],
        ["minecraft:beacon", 2, 1000, "ibpdx:dummy_mending_book"]
    ]

    recipes.forEach(recipe =>{
        let itemInput = recipe[0]
        let itemAmount = recipe[1]
        let fluidAmount = recipe[2]
        let itemOutput = recipe[3]
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": "starlight_enchanter_base",
            "controllerId": "starlight_enchanter",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:book",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": itemInput,
                        "count": itemAmount
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 50000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "cofh_core:experience",
                        "amount": fluidAmount
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": fluidAmount
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": itemOutput,
                        "count": 1
                    }
                }
            ]
        })
    })
})