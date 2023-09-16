// Listen to server recipe event
ServerEvents.recipes(event => {

    // Add crushing recipe for 2 Cinder Flour from 1 Nether Bricks
    event.recipes.createCrushing([
        '2x create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.1)
    ], 'minecraft:nether_bricks')

    // Add smelting recipe for 1 Dirt from 1 Lush Dirt
    event.smelting('minecraft:dirt', 'byg:lush_dirt')

    // Add compacting recipe for 1 Tuff from 8 Ash
    event.recipes.createCompacting('minecraft:tuff', '8x supplementaries:ash').heated()
})