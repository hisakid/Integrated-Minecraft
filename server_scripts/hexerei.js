ServerEvents.recipes(event => {
    event.remove({ output: 'hexerei:mixing_cauldron', input: 'minecraft:cauldron' }),

    //some recipes located in kubejs/data/hexerei/recipes

    event.replaceInput(
      { input: 'hexerei:milk_bottle' },
      'hexerei:milk_bottle',           
      'farmersdelight:milk_bottle'        
    ),
    event.replaceInput(
      { input: 'hexerei:lava_bottle' },
      'hexerei:lava_bottle',           
      'alexsmobs:lava_bottle'        
    ),
    event.replaceOutput(
      { output: 'hexerei:lava_bottle' }, 
      'hexerei:lava_bottle',          
      'alexsmobs:lava_bottle'        
    ),
    event.replaceInput(
      { input: 'hexerei:animal_fat' },
      'hexerei:animal_fat',           
      'delightful:animal_fat'        
    ),
    event.replaceInput(
      { input: 'hexerei:animal_fat' },
      'hexerei:animal_fat',           
      'delightful:animal_fat'        
    ),
    event.shapeless(
      Item.of('hexerei:herb_jar'),
      [
        'supplementaries:jar',
        'minecraft:paper'
      ]
    ),
    event.shaped('hexerei:mixing_cauldron', [
      'T T', 
      'SCS', 
      'SSS'  
      ], 
      {
       T: 'minecraft:torch',
       C: 'minecraft:cauldron',
       S: 'create:iron_sheet'
    }),
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:lava"
        },
        "ingredients": [
            {
                "item": "forbidden_arcanus:soul"
            },
            {
                "item": "forbidden_arcanus:corrupti_dust"
            },
            {
                "item": "forbidden_arcanus:corrupti_dust"
            }
        ],
        "output": {
            "item": "born_in_chaos_v1:ethereal_spirit",
            "count": 1
        },
        "liquidOutput": {
            "fluid": "minecraft:lava",
            "amount": 1000
        },
        "fluidLevelsConsumed": 1000
    })
  }
)