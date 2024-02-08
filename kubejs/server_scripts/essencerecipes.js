
onEvent('recipes', event => {

    const essenceRecipes = [
        ['mysticalagriculture:redstone_essence','minecraft:redstone',8],
        ['mysticalagriculture:iron_essence','minecraft:iron_ingot',4],
        ['mysticalagriculture:plastic_essence','industrialforegoing:plastic',4],
        ['mysticalagriculture:apatite_essence','thermal:apatite',8],
        ['mysticalagriculture:copper_essence','thermal:copper_ingot',4],
        ['mysticalagriculture:aluminum_essence','immersiveengineering:ingot_aluminum',4],
        ['mysticalagriculture:rubber_essence','ftbic:rubber',4],
        ['mysticalagriculture:tin_essence','thermal:tin_ingot',4],
        ['mysticalagriculture:bronze_essence','thermal:bronze_ingot',4],
        ['mysticalagriculture:uraninite_essence','powah:uraninite',1],
        ['mysticalagriculture:draconium_essence','draconicevolution:draconium_ingot',4],
        ['mysticalagriculture:enderium_essence','thermal:enderium_ingot',4],
        ['mysticalagriculture:signalum_essence','thermal:signalum_ingot',4],
        ['mysticalagriculture:platinum_essence','chemlib:ingot_platinum',4],
        ['mysticalagriculture:iridium_essence','chemlib:ingot_iridium',4],
        ['mysticalagriculture:fluorite_essence','mekanism:fluorite_gem',8],
        ['mysticalagriculture:lumium_essence','thermal:lumium_ingot',4],
        ['mysticalagriculture:chrome_essence','chemlib:ingot_chromium',4],
        ['mysticalagriculture:uranium_essence','immersiveengineering:ingot_uranium',4],
        ['mysticalagriculture:zinc_essence','chemlib:ingot_zinc',4],
        ['mysticalagriculture:silver_essence','thermal:silver_ingot',4],
        ['mysticalagriculture:lead_essence','thermal:lead_ingot',4],
        ['mysticalagriculture:quartz_enriched_iron_essence','refinedstorage:quartz_enriched_iron',4],
        ['mysticalagriculture:gold_essence','minecraft:gold_ingot',4],
        ['mysticalagriculture:steel_essence','immersiveengineering:ingot_steel',4],
        ['mysticalagriculture:nickel_essence','thermal:nickel_ingot',4],
        ['mysticalagriculture:constantan_essence','thermal:constantan_ingot',4],
        ['mysticalagriculture:invar_essence','thermal:invar_ingot',4],
        ['mysticalagriculture:electrum_essence','thermal:electrum_ingot',4]
    ];

    essenceRecipes.forEach(e => {
        let essence = e[0]
        let output = e[1]
        let amount = e[2]
        let key = ['EEE','E E','EEE']
        event.shaped(`${amount}x ${output}`, key, {E: essence})
    })
 
})

