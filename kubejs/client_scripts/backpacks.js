const REMOVED_ITEMS = [
    "sophisticatedbackpacks:smelting_upgrade",
    "sophisticatedbackpacks:auto_smelting_upgrade",
    "sophisticatedbackpacks:smoking_upgrade",
    "sophisticatedbackpacks:auto_smoking_upgrade",
    "sophisticatedbackpacks:blasting_upgrade",
    "sophisticatedbackpacks:auto_blasting_upgrade",
    "sophisticatedbackpacks:crafting_upgrade",
    "sophisticatedbackpacks:stonecutter_upgrade"
];

// loop over REMOVED_ITEMS array
REMOVED_ITEMS.forEach((id) => {
    // Remove recipes from JEI		
    JEIEvents.hideItems(
        ('jei.hide.items', event => {
            event.hide(id)
        })
    );
});