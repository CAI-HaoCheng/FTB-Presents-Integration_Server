const FTBICConfig = java("dev.ftb.mods.ftbic.FTBICConfig")
FTBICConfig.ADD_DUST_FROM_ORE_RECIPES = false
FTBICConfig.ADD_GEM_FROM_ORE_RECIPES = false
FTBICConfig.ADD_GEAR_RECIPES = false

global.onReload = function onReload() {

    let randompatches = java('com.therandomlabs.randompatches.RandomPatches');
    randompatches.reloadConfig();

    let powah = java('owmii.powah.config.Configs');
    powah.ALL.forEach((config) => config.reload());

};

onEvent('postinit', (event) => {
    global.onReload();
});
