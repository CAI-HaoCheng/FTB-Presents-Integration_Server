function capFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const blocks = [
{"id": "block_duplicator_stone", "block": "minecraft:stone"},
{"id": "block_duplicator_andesite", "block": "minecraft:andesite"},
{"id": "block_duplicator_diorite", "block": "minecraft:diorite"},
{"id": "block_duplicator_granite", "block": "minecraft:granite"},
{"id": "block_duplicator_basalt", "block": "minecraft:basalt"},
{"id": "block_duplicator_blackstone", "block": "minecraft:blackstone"},
{"id": "block_duplicator_sandstone", "block": "minecraft:sandstone"},
{"id": "block_duplicator_slate", "block": "quark:slate"},
{"id": "block_duplicator_jasper", "block": "quark:jasper"},
{"id": "block_duplicator_myalite", "block": "quark:myalite"},
{"id": "block_duplicator_limestone", "block": "quark:limestone"},
{"id": "block_duplicator_marble", "block": "astralsorcery:marble_raw"},
{"id": "block_duplicator_bricks", "block": "minecraft:bricks"},
{"id": "block_duplicator_abyssaline", "block": "architects_palette:abyssaline"},
{"id": "block_duplicator_algal_bricks", "block": "architects_palette:algal_bricks"},
{"id": "block_duplicator_olivestone_bricks", "block": "architects_palette:olivestone_bricks"},
{"id": "block_duplicator_plating_block", "block": "architects_palette:plating_block"},
{"id": "block_duplicator_sunmetal_block", "block": "architects_palette:sunmetal_block"},
{"id": "block_duplicator_entwine_block", "block": "architects_palette:entwine_block"},
{"id": "block_duplicator_osseous_bricks", "block": "architects_palette:osseous_bricks"},
{"id": "block_duplicator_coal_ore_bricks", "block": "architects_palette:coal_ore_bricks"},
{"id": "block_duplicator_iron_ore_bricks", "block": "architects_palette:iron_ore_bricks"},
{"id": "block_duplicator_gold_ore_bricks", "block": "architects_palette:gold_ore_bricks"},
{"id": "block_duplicator_diamond_ore_bricks", "block": "architects_palette:diamond_ore_bricks"},
{"id": "block_duplicator_emerald_ore_bricks", "block": "architects_palette:emerald_ore_bricks"},
{"id": "block_duplicator_lapis_ore_bricks", "block": "architects_palette:lapis_ore_bricks"},
{"id": "block_duplicator_redstone_ore_bricks", "block": "architects_palette:redstone_ore_bricks"},
{"id": "block_duplicator_warpstone_bricks", "block": "architects_palette:warpstone"},
{"id": "block_duplicator_end_stone", "block": "minecraft:end_stone"},
{"id": "block_duplicator_factory", "block": "chisel:factory/dots"},
{"id": "block_duplicator_tyrian", "block": "chisel:tyrian/shining"},
{"id": "block_duplicator_futura", "block": "chisel:futura/screen_metallic"},
{"id": "block_duplicator_laboratory", "block": "chisel:laboratory/wallpanel"},
{"id": "block_duplicator_prismarine", "block": "minecraft:prismarine"},
{"id": "block_duplicator_purpur_block", "block": "minecraft:purpur_block"},
{"id": "block_duplicator_terracotta", "block": "minecraft:terracotta"}
]

// Name is taken from the Id, with spaces and all words with first letter capitalized
onEvent('recipes', event => {

  blocks.forEach(recipe => {
    const {id, block} = recipe

    let nameArr = id.split('_')
    for(let i = 0; i < nameArr.length; i++){
        nameArr[i] = capFirst(nameArr[i])
    }
    let name = nameArr.join(' ')

    event.custom(
      {
        "type": "masterfulmachinery:machine_structure",
        "id": id,
        "controllerId": "block_duplicator",
        "name": name,
        "layout": [
          [
            ")))",
            ")*)",
            ")))"
          ],
          [
            " C ",
            "+,-",
            "   "
          ]
        ],
        "legend": {
          ")": {
            "block": "ibpdx:blockcasing_duskstone"
          },
          "*": {
            "block": "ibpdx:duplication_core"
          },
          "+": {
            "block": "masterfulmachinery:block_duplicator_item_port_items_output"
          },
          ",": {
            "block": block
          },
          "-": {
            "block": "masterfulmachinery:block_duplicator_energy_port_energy_input"
          }
        }
      })

    event.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": id,
      "controllerId": "block_duplicator",
      "ticks": 5,
      "inputs": [
          {
              "type": "masterfulmachinery:energy",
              "data":{
                  "amount": 50
              }
          }
      ],
      "outputs":[
          {
              "type": "masterfulmachinery:items",
              "data":{
                  "item": block,
                  "count": 1
              }
          }
      ]
    })


  })
})