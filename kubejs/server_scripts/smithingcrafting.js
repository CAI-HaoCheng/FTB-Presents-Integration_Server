// priority: 0


// Listen to server recipe event
onEvent('recipes', event => {
  
  event.shaped('minecraft:smithing_table', [
      'SSS',
      'SSS',
      'SSS'
    ], { 
      S: 'ibpdx:smithing_table_nugget'
  })
  
  event.shapeless('9x ibpdx:smithing_table_nugget', [
    'minecraft:smithing_table'
  ])
  
  // For each Smithing Table recipe, create a corresponding crafting recipe using a Smithing Table Nugget
  event.forEachRecipe({ type: 'minecraft:smithing' }, recipe => {
    const inputs = recipe.inputItems
    const outputs = recipe.outputItems
    if (inputs.size() != 2 || outputs.size() != 1) {
      return;
    }
    
    const base = inputs[0]
    const addition = inputs[1]
    const result = outputs[0]

    event.shaped(result, [
        'B',
        'S',
        'A'
      ], { 
        B: base,
        S: 'ibpdx:smithing_table_nugget',
        A: addition
    })
    
    event.shaped(result, [
        'BSA',
      ], { 
        B: base,
        S: 'ibpdx:smithing_table_nugget',
        A: addition
    })
 
  })
  
})