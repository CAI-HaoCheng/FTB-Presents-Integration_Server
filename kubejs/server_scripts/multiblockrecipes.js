onEvent('recipes', event => {

    for (let [key, value] in upgrades) {
        let ticks = 1
        let energy = 1
        let genergy = 1
        let gfuel = 1
        
        switch(key){
            case "p1" : {
                ticks =  1.18
                energy = 0.75
                gfuel = 0.75
                genergy = 0.75
                break
            }
            case "p2" : {
                ticks =  1.33
                energy = 0.5
                gfuel = 0.5
                genergy = 1
                break
            }
            case "s1" :{
                ticks =  0.66
                energy = 2
                gfuel = 1.5
                genergy = 1.5
                break
            }
            case "s2" : {
                ticks =  0.33
                energy = 4
                gfuel = 2.25
                genergy = 2.5
                break
            }
            case "d1" : {
                ticks =  0.66
                energy = 0.83
                gfuel = 1
                genergy = 1.44
                break
            }
            case "d2" : {
                ticks =  0.444
                energy = 0.75
                gfuel = 1
                genergy = 1.5
                break
            }
        }
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_iron",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:shard_iron",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_gold",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:shard_gold",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_copper",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:shard_copper",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_tin",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:shard_tin",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_lead",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:shard_lead",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:clump_silver",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:shard_silver",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_iron",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:molten_petrotheum",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:iron_slurry",
                        "amount": 1000
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_gold",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:molten_petrotheum",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:gold_slurry",
                        "amount": 1000
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_copper",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:molten_petrotheum",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:copper_slurry",
                        "amount": 1000
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_tin",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:molten_petrotheum",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:tin_slurry",
                        "amount": 1000
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:clump_lead",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:molten_petrotheum",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:lead_slurry",
                        "amount": 1000
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ore_washer_${key}`,
            "controllerId": "ore_washer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:clump_silver",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:molten_petrotheum",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:silver_slurry",
                        "amount": 1000
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `precipitator_${key}`,
            "controllerId": "precipitator",
            "ticks": 50 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:iron_slurry",
                        "amount": 200
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:crystal_iron",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `precipitator_${key}`,
            "controllerId": "precipitator",
            "ticks": 50 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:gold_slurry",
                        "amount": 200
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:crystal_gold",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `precipitator_${key}`,
            "controllerId": "precipitator",
            "ticks": 50 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:copper_slurry",
                        "amount": 200
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:crystal_copper",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `precipitator_${key}`,
            "controllerId": "precipitator",
            "ticks": 50 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:tin_slurry",
                        "amount": 200
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:crystal_tin",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `precipitator_${key}`,
            "controllerId": "precipitator",
            "ticks": 50 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:lead_slurry",
                        "amount": 200
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:crystal_lead",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `precipitator_${key}`,
            "controllerId": "precipitator",
            "ticks": 50 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:silver_slurry",
                        "amount": 200
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:crystal_silver",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `duskstone_mixer_${key}`,
            "controllerId": "duskstone_mixer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_gold",
                        "amount": 144
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_obsidian",
                        "amount": 250
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:duskstone_ingot",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `bedrock_miner_${key}`,
            "controllerId": "bedrock_miner",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 500 }
                    }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:bedrock_crystal",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/steel",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/aluminum",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ftbic:industrial_grade_metal",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:nuggets/copper",
                        "count": 27
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:nuggets/gold",
                        "count": 9
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "tconstruct:rose_gold_ingot",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/copper",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/tin",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:bronze_ingot",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/copper",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/gold",
                        "count": 1
                    }
                },
                        {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:dusts/redstone",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:dusts/glowstone",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:modularium",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/gold",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/silver",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:electrum_ingot",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/gold",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:obsidian",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:duskstone_ingot",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/iron",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/nickel",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:invar_ingot",
                        "count": 3
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `super_alloyer_${key}`,
            "controllerId": "super_alloyer",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/copper",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/nickel",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *2000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:constantan_ingot",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/iron",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:iron_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/gold",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:gold_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/tin",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:tin_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/copper",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:copper_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/tin",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:tin_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/lead",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:lead_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/silver",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:silver_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/invar",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:invar_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/constantan",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:constantan_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/electrum",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:electrum_plate",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/steel",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "immersiveengineering:plate_steel",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `plate_presser_${key}`,
            "controllerId": "plate_presser",
            "ticks": 100 * ticks,
            "inputs": [
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 2000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/aluminum",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "immersiveengineering:plate_aluminum",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `processor_cutter_${key}`,
            "controllerId": "processor_cutter",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:processor_binding",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:redstonium_crystal",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/electrum",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:raw_improved_processor",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `processor_cutter_${key}`,
            "controllerId": "processor_cutter",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:processor_binding",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:redstonium_crystal",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:ironium_crystal",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:raw_basic_processor",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `processor_cutter_${key}`,
            "controllerId": "processor_cutter",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *8000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:processor_binding",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:redstonium_crystal",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_diamondium_crystal",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:raw_advanced_processor",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `processor_cutter_${key}`,
            "controllerId": "processor_cutter",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *16000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:processor_binding",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_redstonium_crystal",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:nether_star",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "extradisks:raw_withering_processor",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `processor_cutter_${key}`,
            "controllerId": "processor_cutter",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *16000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:processor_binding",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_redstonium_crystal",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ftbic:iridium_circuit",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "extrastorage:raw_neural_processor",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersivepetroleum:gasoline",
                        "amount": 24 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 48000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 6 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 48000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "thermal:resin",
                        "amount": 48 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 48000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersivepetroleum:diesel",
                        "amount": 12 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 48000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:water",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersiveengineering:biodiesel",
                        "amount": 16 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 48000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersivepetroleum:gasoline",
                        "amount": 48 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 96000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 12 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 96000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "thermal:resin",
                        "amount": 96 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 96000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersivepetroleum:diesel",
                        "amount": 24 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 96000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersiveengineering:biodiesel",
                        "amount": 32 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 96000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "kubejs:molten_cryotheum",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersivepetroleum:gasoline",
                        "amount": 96 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 192000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "kubejs:molten_cryotheum",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 24 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 192000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "kubejs:molten_cryotheum",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "thermal:resin",
                        "amount": 192 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 192000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "kubejs:molten_cryotheum",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersivepetroleum:diesel",
                        "amount": 48 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 192000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `liquid_fuel_generator_${key}`,
            "controllerId": "liquid_fuel_generator",
            "ticks": 120,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "kubejs:molten_cryotheum",
                        "amount": 60
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersiveengineering:biodiesel",
                        "amount": 32 * gfuel
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": 192000 * genergy
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `metal_empowerer_${key}`,
            "controllerId": "metal_empowerer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/copper",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_coalium_crystal",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *80000
                    }
                },
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:empowered_copper_ingot",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `metal_empowerer_${key}`,
            "controllerId": "metal_empowerer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/aluminum",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_diamondium_crystal",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *80000
                    }
                },
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:empowered_aluminum_ingot",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `metal_empowerer_${key}`,
            "controllerId": "metal_empowerer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/silver",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_lapisium_crystal",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *80000
                    }
                },
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:empowered_silver_ingot",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `metal_empowerer_${key}`,
            "controllerId": "metal_empowerer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/lead",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_emeraldium_crystal",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *80000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 100
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:empowered_lead_ingot",
                        "count": 1
                    }
                },
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `metal_empowerer_${key}`,
            "controllerId": "metal_empowerer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/steel",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_redstonium_crystal",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *80000
                    }
                },
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:empowered_steel_ingot",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `metal_empowerer_${key}`,
            "controllerId": "metal_empowerer",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "tag": "forge:ingots/gold",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_ironium_crystal",
                        "count": 3
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *80000
                    }
                },
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:empowered_gold_ingot",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `advanced_chemical_plant_${key}`,
            "controllerId": "advanced_chemical_plant",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:hydrogen",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:chlorine",
                        "amount": 50
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:hydrogen_chloride",
                        "amount": 100
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `advanced_chemical_plant_${key}`,
            "controllerId": "advanced_chemical_plant",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:uranium_oxide",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:hydrofluoric_acid",
                        "amount": 50
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:uranium_hexafluoride",
                        "amount": 100
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `advanced_chemical_plant_${key}`,
            "controllerId": "advanced_chemical_plant",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:sulfur_dioxide",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:oxygen",
                        "amount": 50
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:sulfur_trioxide",
                        "amount": 100
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `advanced_chemical_plant_${key}`,
            "controllerId": "advanced_chemical_plant",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanismgenerators:deuterium",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanismgenerators:tritium",
                        "amount": 50
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanismgenerators:fusion_fuel",
                        "amount": 100
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `advanced_chemical_plant_${key}`,
            "controllerId": "advanced_chemical_plant",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:liquid_nitrogen",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:oxygen",
                        "amount": 100
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:liquid_nitrous_acid",
                        "amount": 100
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `starlight_factory_${key}`,
            "controllerId": "starlight_factory",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 500
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "botania:manasteel_ingot",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:starmetal_ingot",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `starlight_factory_${key}`,
            "controllerId": "starlight_factory",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 500
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "botania:mana_diamond",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:star_diamond",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `starlight_factory_${key}`,
            "controllerId": "starlight_factory",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 500
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "botania:mana_pearl",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:star_pearl",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 12000 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:unknown_disc",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:decrypted_disc",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 12000 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:unknown_disc_2",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:decrypted_disc_2",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 12000 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:unknown_disc_3",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:decrypted_disc_3",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 12000 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:unknown_disc_4",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:decrypted_disc_4",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 400 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:1k_storage_disk",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:coordinate_data_module",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 600 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:infinity_fragment",
                        "count": 256
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:inert_infinity_chunk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:1k_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_1",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *100000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:1k_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:4k_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_2",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:4k_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:16k_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_3",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *400000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:16k_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 100 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:64k_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_4",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *800000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:64k_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 400 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:64k_fluid_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_1",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *100000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:64k_fluid_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 400 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:256k_fluid_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_2",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:256k_fluid_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 400 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:1024k_fluid_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_3",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *400000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:1024k_fluid_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `lunar_satellite_dish_${key}`,
            "controllerId": "lunar_satellite_dish",
            "ticks": 400 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:4096k_fluid_storage_part",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "dankstorage:dank_4",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:storage_housing",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *800000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "refinedstorage:4096k_fluid_storage_disk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `fluxial_converter_${key}`,
            "controllerId": "fluxial_converter",
            "ticks": 2 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                }
            ],
            "outputs":[
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 500 }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `advanced_chemical_plant_${key}`,
            "controllerId": "advanced_chemical_plant",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:liquid_nitric_acid",
                        "amount": 30
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersiveengineering:ethanol",
                        "amount": 70
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:nital",
                        "amount": 100
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `advanced_chemical_plant_${key}`,
            "controllerId": "advanced_chemical_plant",
            "ticks": 200 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:liquid_nitrous_acid",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "mekanism:oxygen",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:liquid_nitric_acid",
                        "amount": 100
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `boss_fight_simulator_${key}`,
            "controllerId": "boss_fight_simulator",
            "ticks": 3600 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 4000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:wither_base",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *7200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:nether_star",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `boss_fight_simulator_${key}`,
            "controllerId": "boss_fight_simulator",
            "ticks": 3600 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 4000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:gaia_base",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *7200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "botania:life_essence",
                        "count": 16
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.7,
                    "data":{
                        "item": "botania:manasteel_ingot",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.4,
                    "data":{
                        "item": "botania:elementium_ingot",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.2,
                    "data":{
                        "item": "botania:pixie_dust",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.2,
                    "data":{
                        "item": "botania:dragonstone",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.3,
                    "data":{
                        "item": "botania:terrasteel_ingot",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.2,
                    "data":{
                        "item": "botania:rune_water",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.2,
                    "data":{
                        "item": "botania:rune_earth",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.2,
                    "data":{
                        "item": "botania:rune_fire",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.2,
                    "data":{
                        "item": "botania:rune_air",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.10,
                    "data":{
                        "item": "botania:rune_winter",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.10,
                    "data":{
                        "item": "botania:rune_spring",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.10,
                    "data":{
                        "item": "botania:rune_summer",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.10,
                    "data":{
                        "item": "botania:rune_autumn",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.05,
                    "data":{
                        "item": "botania:rune_lust",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.05,
                    "data":{
                        "item": "botania:rune_envy",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.05,
                    "data":{
                        "item": "botania:rune_pride",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.05,
                    "data":{
                        "item": "botania:rune_greed",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.05,
                    "data":{
                        "item": "botania:rune_sloth",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.05,
                    "data":{
                        "item": "botania:rune_gluttony",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "chance": 0.05,
                    "data":{
                        "item": "botania:rune_wrath",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `boss_fight_simulator_${key}`,
            "controllerId": "boss_fight_simulator",
            "ticks": 3600 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 4000 }
                    },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:dragon_base",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *7200000
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "draconicevolution:dragon_heart",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mysticalagradditions:dragon_scale",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:dragon_breath",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `alchemy_reactor_core_${key}`,
            "controllerId": "alchemy_reactor_core",
            "ticks": 600 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:inert_infinity_chunk",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:energized_infinity_chunk",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `peat_engine_${key}`,
            "controllerId": "peat_engine",
            "ticks": 313 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:peat",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *50000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:ash",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `peat_engine_${key}`,
            "controllerId": "peat_engine",
            "ticks": 313 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:bituminous_peat",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *100000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:ash",
                        "count": 1
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "immersiveengineering:creosote",
                        "amount": 250
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:peat",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:ash",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:bituminous_peat",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:redstonium_crystal",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:tin_plate",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:copper_electron_tube",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "immersiveengineering:circuit_board",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:circuit_base_t1",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:redstonium_crystal",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:duskstone_ingot",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:blaze_electron_tube",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "immersiveengineering:circuit_board",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:circuit_base_t2",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:infused_redstonium_crystal",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ftbic:carbon_plate",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:diamond_electron_tube",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "immersiveengineering:circuit_board",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:circuit_base_t3",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "cyclic:biomass",
                        "amount": 250
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:rubberized_electron_tube",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:filled_rubber_electron_tube",
                        "count": 1
                    }
                }
            ]
        })
        
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:earth_slime",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "industrialforegoing:plastic",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:redstonium_crystal",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:circuit_base_t1",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:addon_base",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `mana_death_reactor`,
            "controllerId": "mana_death_reactor",
            "ticks": 20,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:blood",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:milk",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_ender",
                        "amount": 10
                    }
                }
            ],
            "outputs":[
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 4000 }
                    }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `mana_death_reactor`,
            "controllerId": "mana_death_reactor",
            "ticks": 20,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:glacial_blood",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:blazing_blood",
                        "amount": 50
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_ender",
                        "amount": 10
                    }
                }
            ],
            "outputs":[
                {
                        "type": 'masterfulmachinery:botania_mana',
                        "consumeInstantly": false,
                        "data": { amount: 8000 }
                    }
            ]
        })


event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ftbic:electronic_circuit",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:modularium",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:redstone",
                        "count": 4
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "masterfulmachinery:generic_controller",
                        "count": 3
                    }
                }
            ]
        })

event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ftbic:hv_cable",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:modularium",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:redstone",
                        "count": 4
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "masterfulmachinery:generic_energy_port_energy_input",
                        "count": 4
                    }
                }
            ]
        })

event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "botania:manasteel_ingot",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:modularium",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "botania:mana_powder",
                        "count": 4
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "masterfulmachinery:generic_mana_port_botania_mana_input",
                        "count": 4
                    }
                }
            ]
        })

event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:hopper",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:modularium",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:iron_ingot",
                        "count": 4
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "masterfulmachinery:generic_item_port_items_input",
                        "count": 4
                    }
                }
            ]
        })

event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *4000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:molten_lead",
                        "amount": 48
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "tconstruct:seared_fuel_tank",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:modularium",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:tin_ingot",
                        "count": 4
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "masterfulmachinery:generic_fluid_port_fluids_input",
                        "count": 4
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *16000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:crystallized_oil",
                        "amount": 250
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ftbic:industrial_grade_metal",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "infused_crystals:redstonium_crystal",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:basic_upgrade",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *16000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:crystallized_oil",
                        "amount": 250
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:basic_upgrade",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "powah:crystal_blazing",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:improved_upgrade",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *16000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 250
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:improved_upgrade",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "powah:crystal_niotic",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:advanced_upgrade",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *16000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 250
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:improved_upgrade",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "powah:crystal_niotic",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:advanced_upgrade",
                        "count": 2
                    }
                }
            ]
        })
        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `carpenter_${key}`,
            "controllerId": "carpenter",
            "ticks": 80 * ticks,
            "inputs": [
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "amount": energy *16000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "ibpdx:empowered_oil",
                        "amount": 250
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:advanced_upgrade",
                        "count": 2
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "tconstruct:hepatizon_ingot",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "pipez:ultimate_upgrade",
                        "count": 2
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "thermal:glowstone",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "immersiveengineering:ingot_uranium",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "powah:uraninite",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:glass_pane",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:glass_lens",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "cofh_core:experience",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:glass_lens",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:colored_lens_growth",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:sky_slime",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:glass_lens",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:colored_lens_push",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:blood",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:glass_lens",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:colored_lens_damage",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "tconstruct:ender_slime",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:glass_lens",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:colored_lens_spectral",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:lava",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:glass_lens",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:colored_lens_fire",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "industrialforegoing:pink_slime",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:glass_lens",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:colored_lens_regeneration",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:aquamarine",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:resonating_gem",
                        "count": 1
                    }
                }
            ]
        })


        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `auto_starlight_infuser`,
            "controllerId": "auto_starlight_infuser",
            "ticks": 80,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "astralsorcery:liquid_starlight",
                        "amount": 100
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:infused_wood",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "astralsorcery:infused_wood_infused",
                        "count": 1
                    }
                }
            ]
        })


        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `remix_generator`,
            "controllerId": "remix_generator",
            "ticks": 50,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:bioenriched_circuit",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:coordinate_data_module",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:bio_napalm_cell",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:circuit_case",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:resonated_plated_growth_lens",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:wispy_petal",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:life_infused_cooler",
                        "count": 1
                    }
                },
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:energy",
                    "data":{
                        "perTick": true,
                        "amount": 250000000
                    }
                }
            ]
        })


        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 20,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 500
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:lava_bucket",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "minecraft:lava",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:lava_bucket",
                        "count": 1
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 4000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "bloodmagic:defaultcrystal",
                        "count": 2
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "bloodmagic:defaultcrystal",
                        "count": 32
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:oak_log",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:oak_log",
                        "count": 32
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:spruce_log",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:spruce_log",
                        "count": 32
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:birch_log",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:birch_log",
                        "count": 32
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:jungle_log",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:jungle_log",
                        "count": 32
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:acacia_log",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:acacia_log",
                        "count": 32
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:jungle_log",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:jungle_log",
                        "count": 32
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 200,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 8000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:iron_loot_bag",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:iron_loot_bag",
                        "count": 8
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 200,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 16000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:gold_loot_bag",
                        "count": 1
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "ibpdx:gold_loot_bag",
                        "count": 8
                    }
                }
            ]
        })

        event.custom({
            "type": "masterfulmachinery:machine_process",
            "structureId": `ritual_containment_sphere`,
            "controllerId": "ritual_containment_sphere",
            "ticks": 500,
            "inputs": [
                {
                    "type": "masterfulmachinery:fluids",
                    "data":{
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 20000
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:iron_ore",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "bloodmagic:reagentfastminer",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "bloodmagic:shaped_charge",
                        "count": 8
                    }
                }
            ],
            "outputs":[
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:iron_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:gold_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:copper_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:tin_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:lead_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:silver_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:nickel_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:niter_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "thermal:apatite_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "mekanism:uranium_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "immersiveengineering:ore_aluminum",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:coal_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:lapis_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:diamond_ore",
                        "count": 8
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":{
                        "item": "minecraft:redstone_ore",
                        "count": 8
                    }
                }
            ]
        })






    }
})
