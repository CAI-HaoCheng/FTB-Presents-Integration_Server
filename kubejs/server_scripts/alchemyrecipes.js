onEvent('recipes', event => {


event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:proton",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "bloodmagic:life_essence_fluid",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 1
            }
        },        
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_helium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_helium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "thermal:light_oil",
                "amount": 100
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 1
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lithium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lithium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "avaritia:pileof_neutrons",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 1
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_beryllium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_beryllium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
                "type": 'masterfulmachinery:botania_mana',
                "consumeInstantly": true,
                "data": { amount: 320 }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 1
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_boron",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_boron",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "ibpdx:molten_uu_matter",
                "amount": 50
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 1
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_carbon",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_carbon",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 1
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_nitrogen",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_nitrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanismgenerators:fusion_fuel",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 1
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_oxygen",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_oxygen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 2
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_fluorine",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_fluorine",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 2
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_neon",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_neon",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 2
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_sodium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_sodium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 2
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_magnesium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_magnesium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 2
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_aluminum",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_aluminum",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 2
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_silicon",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_silicon",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 2
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_phosphorus",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_phosphorus",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "bloodmagic:life_essence_fluid",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 3
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_sulfur",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_sulfur",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "thermal:light_oil",
                "amount": 100
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 3
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_chlorine",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_chlorine",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "avaritia:pileof_neutrons",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 3
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_argon",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_argon",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
                "type": 'masterfulmachinery:botania_mana',
                "consumeInstantly": true,
                "data": { amount: 320 }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 3
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_potassium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_potassium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "ibpdx:molten_uu_matter",
                "amount": 50
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 3
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_calcium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_calcium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 3
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_scandium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_scandium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanismgenerators:fusion_fuel",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 3
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_titanium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_titanium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 4
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_vanadium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_vanadium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 4
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_chromium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_chromium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 4
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_manganese",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_manganese",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 4
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_iron",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_iron",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 4
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cobalt",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cobalt",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 4
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_nickel",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_nickel",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 4
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_copper",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_copper",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "bloodmagic:life_essence_fluid",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 5
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_zinc",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_zinc",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "thermal:light_oil",
                "amount": 100
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 5
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_gallium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_gallium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "avaritia:pileof_neutrons",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 5
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_germanium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_germanium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
                "type": 'masterfulmachinery:botania_mana',
                "consumeInstantly": true,
                "data": { amount: 320 }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 5
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_arsenic",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_arsenic",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "ibpdx:molten_uu_matter",
                "amount": 50
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 5
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_selenium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_selenium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 5
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_bromine",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_bromine",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanismgenerators:fusion_fuel",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 5
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_krypton",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_krypton",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 6
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_rubidium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_rubidium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 6
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_strontium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_strontium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 6
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_yttrium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_yttrium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 6
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_zirconium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_zirconium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 6
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_niobium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_niobium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 6
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_molybdenum",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_molybdenum",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 6
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_technetium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_technetium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "bloodmagic:life_essence_fluid",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 7
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_ruthenium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_ruthenium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "thermal:light_oil",
                "amount": 100
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 7
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_rhodium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_rhodium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "avaritia:pileof_neutrons",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 7
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_palladium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_palladium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
                "type": 'masterfulmachinery:botania_mana',
                "consumeInstantly": true,
                "data": { amount: 320 }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 7
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_silver",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_silver",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "ibpdx:molten_uu_matter",
                "amount": 50
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 7
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cadmium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cadmium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 7
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_indium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_indium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanismgenerators:fusion_fuel",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 7
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tin",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tin",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 8
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_antimony",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_antimony",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 8
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tellurium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tellurium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 8
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_iodine",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_iodine",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 8
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_xenon",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_xenon",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 8
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cesium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cesium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 8
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_barium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_barium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 8
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lanthanum",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lanthanum",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "bloodmagic:life_essence_fluid",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 9
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cerium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_cerium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "thermal:light_oil",
                "amount": 100
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 9
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_praseodymium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_praseodymium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "avaritia:pileof_neutrons",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 9
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_neodymium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_neodymium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
                "type": 'masterfulmachinery:botania_mana',
                "consumeInstantly": true,
                "data": { amount: 320 }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 9
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_promethium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_promethium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "ibpdx:molten_uu_matter",
                "amount": 50
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 9
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_samarium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_samarium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 9
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_europium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_europium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanismgenerators:fusion_fuel",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 9
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_gadolinium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_gadolinium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 10
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_terbium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_terbium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 10
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_dysprosium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_dysprosium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 10
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_holmium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_holmium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 10
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_erbium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_erbium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 10
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_thulium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_thulium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 10
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_ytterbium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_ytterbium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 10
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lutetium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lutetium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "bloodmagic:life_essence_fluid",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 11
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hafnium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hafnium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "thermal:light_oil",
                "amount": 100
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 11
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tantalum",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tantalum",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "avaritia:pileof_neutrons",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 11
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tungsten",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_tungsten",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
                "type": 'masterfulmachinery:botania_mana',
                "consumeInstantly": true,
                "data": { amount: 320 }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 11
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_rhenium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_rhenium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "ibpdx:molten_uu_matter",
                "amount": 50
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 11
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_osmium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_osmium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 11
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_iridium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_iridium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanismgenerators:fusion_fuel",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 11
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_platinum",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_platinum",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 12
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_gold",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_gold",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 12
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_mercury",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_mercury",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 12
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_thallium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_thallium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 12
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lead",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_lead",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 12
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_bismuth",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_bismuth",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 12
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_polonium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_polonium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount": 20000
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 12
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_astatine",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_red_base",
    "controllerId": "alchemy_reactor_red_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_astatine",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "bloodmagic:life_essence_fluid",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 15
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_radon",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_orange_base",
    "controllerId": "alchemy_reactor_orange_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_radon",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "thermal:light_oil",
                "amount": 100
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 15
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_francium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_yellow_base",
    "controllerId": "alchemy_reactor_yellow_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_francium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "avaritia:pileof_neutrons",
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 15
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_radium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_green_base",
    "controllerId": "alchemy_reactor_green_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_radium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
                "type": 'masterfulmachinery:botania_mana',
                "consumeInstantly": true,
                "data": { amount: 320 }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 15
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_actinium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_cyan_base",
    "controllerId": "alchemy_reactor_cyan_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_actinium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "ibpdx:molten_uu_matter",
                "amount": 50
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 15
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_thorium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_blue_base",
    "controllerId": "alchemy_reactor_blue_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_thorium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:fluids",
            "data":{
                "fluid": "astralsorcery:liquid_starlight",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 15
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_protactinium",
                "count": 1
            }
        }
    ]
})

event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "alchemy_reactor_violet_base",
    "controllerId": "alchemy_reactor_violet_base",
    "ticks": 20,
    "inputs": [
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_protactinium",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_hydrogen",
                "count": 1
            }
        },
        {
            "type": "masterfulmachinery:mekanism_gas",
            "data":{
                "gas": "mekanismgenerators:fusion_fuel",
                "amount": 250
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "ibpdx:infinity_fragment",
                "count": 15
            }
        }, 
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "chemlib:element_uranium",
                "count": 1
            }
        }
    ]
})


















})
