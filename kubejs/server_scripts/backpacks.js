ServerEvents.recipes(event => {
    // Change recipes here

    // array of items to remove
    const REMOVED_ITEMS = [
        "sophisticatedbackpacks:smelting_upgrade",
        "sophisticatedbackpacks:auto_smelting_upgrade",
        "sophisticatedbackpacks:smoking_upgrade",
        "sophisticatedbackpacks:auto_smoking_upgrade",
        "sophisticatedbackpacks:blasting_upgrade",
        "sophisticatedbackpacks:auto_blasting_upgrade",
        "sophisticatedbackpacks:crafting_upgrade",
        "sophisticatedbackpacks:stonecutter_upgrade",
        "sophisticatedstorage:smelting_upgrade",
        "sophisticatedstorage:auto_smelting_upgrade",
        "sophisticatedstorage:smoking_upgrade",
        "sophisticatedstorage:auto_smoking_upgrade",
        "sophisticatedstorage:blasting_upgrade",
        "sophisticatedstorage:auto_blasting_upgrade",
        "sophisticatedstorage:crafting_upgrade",
        "sophisticatedstorage:stonecutter_upgrade"
    ];

    // remove items in array
    REMOVED_ITEMS.forEach(id => event.remove({ output: id }));

});