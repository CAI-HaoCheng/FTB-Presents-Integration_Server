onEvent('player.logged_in', event => {
if(!event.player.stages.has('v190')){
    event.player.tell('-----')
    event.player.tell("Break and replace the Remix Generator Energy Output Ports if you have any. You will crash otherwise! You should only have to do this once upon updating to 1.12.0.")
    event.player.tell('-----')
    event.player.stages.add('v1120')
}
})