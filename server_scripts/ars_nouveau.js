ServerEvents.recipes(event => {
  
    event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' }), 
    event.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade' }), 
    event.remove({ output: 'ars_nouveau:novice_spell_book', input: 'minecraft:iron_sword' }), 
    event.remove({ output: 'ars_elemental:glyph_charm' }), 
    event.remove({ output: 'ars_nouveau:ritual_flight' }), 
    event.remove({ output: 'ars_nouveau:ritual_challenge' }), 
    event.remove({ output: 'ars_nouveau:source_berry_pie' }), 
    event.remove({ output: 'ars_additions:ritual_locate_structure' }), 
    event.remove({ type: 'ars_nouveau:glyph', mod: 'ars_elemental' }), 
    event.remove({ type: 'ars_nouveau:imbuement', mod: 'ars_elemental' }), 
    event.remove({ input: 'ars_nouveau:source_gem_block', output: 'ars_elemental:spell_mirror' }), 
    event.remove({ input: 'ars_nouveau:bone_meal', output: 'ars_elemental:anima_essence' }), 
    event.remove({ input: 'ars_nouveau:wilden_tribute', output: 'ars_elemental:mark_of_mastery' }), 
    event.remove({ output: 'ars_nouveau:arcane_core', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:arcane_pedestal', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:enchanting_apparatus', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:imbuement_chamber', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:basic_spell_turret', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:volcanic_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:vitalic_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:alchemical_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:mycelial_sourcelink', type: 'minecraft:crafting_shaped' }), 
    event.remove({ output: 'ars_nouveau:ritual_moonfall' }), 
    event.remove({ output: 'ars_nouveau:ritual_sunrise' }), 
    event.remove({ output: 'ars_nouveau:ritual_repulsion' }), 
    event.remove({ output: 'ars_nouveau:dull_trinket' }), 
    event.remove({ output: 'ars_nouveau:ring_of_potential' }), 
    event.remove({ output: 'ars_nouveau:mundane_belt' }), 
   
    //Ars Nouveau Spellbooks 
    //many recipes in data/ars_nouveau/recipes
    event.recipes.ars_nouveau.enchanting_apparatus([
              "eidolon:shadow_gem",
              "netherexp:stridite",
              "eidolon:crimson_gem",
              "minecraft:netherite_ingot",
              "eidolon:shadow_gem",
              "minecraft:netherite_ingot",
              "eidolon:crimson_gem",
              "netherexp:stridite",
          ], // input itemsr
        "ars_nouveau:novice_spell_book", // reagent
        "ars_nouveau:apprentice_spell_book", // output
        3000,
        true
    ),
    event.recipes.ars_nouveau.enchanting_apparatus([
              "ars_elemental:mark_of_mastery",
              "apotheosis:warden_tendril",
              "forbidden_arcanus:golden_dragon_scale",
              "ars_elemental:mark_of_mastery",
              "ars_nouveau:wilden_tribute",
              "ars_elemental:mark_of_mastery",
              "forbidden_arcanus:golden_dragon_scale",
              "apotheosis:warden_tendril",
          ], // input items
        "ars_nouveau:apprentice_spell_book", // reagent
        "ars_nouveau:archmage_spell_book", // output
        10000,
        true
    ),
    event.recipes.farmersdelight.cooking(
      ["minecraft:egg",
        "minecraft:sugar",
        "ars_nouveau:magebloom",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush"
      ],
      "ars_nouveau:source_berry_pie",
      5.0,
      400,
      "farmersdelight:pie_crust",
    ),
    event.shapeless(
      Item.of('ars_nouveau:runic_chalk'),
      [
        'ars_nouveau:manipulation_essence',
        'minecraft:bone_meal',
        'forbidden_arcanus:rune'
      ]
    )
  }
)