ServerEvents.recipes(event =>{
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "minecraft:kelp"
          },
          {
            "tag": "minecraft:boats"
          },
          {
            "item": "minecraft:sugar_cane"
          },
          {
            "item": "minecraft:fishing_rod"
          },
          {
            "item": "minecraft:lily_pad"
          },
          {
            "item": "ars_nouveau:blue_archwood_log"
          }
        ],
        "mana": 6000,
        "output": {
          "item": "botania:rune_water",
          "count": 2
        }
      })
      event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "gtceu:andesite_alloy_ingot"
          },
          {
            "item": "gtceu:calcite_dust"
          },
          {
            "item": "minecraft:sandstone"
          },
          {
            "item": "minecraft:clay_ball"
          },
          {
            "item": "alexscaves:limestone"
          },
          {
            "item": "ars_nouveau:green_archwood_log"
          }
        ],
        "mana": 6000,
        "output": {
          "item": "botania:rune_earth",
          "count": 2
        }
      })
      event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "ars_nouveau:red_archwood_log"
          },
          {
            "item": "minecraft:magma_block"
          },
          {
            "item": "minecraft:gunpowder"
          },
          {
            "item": "minecraft:crimson_fungus"
          },
          {
            "item": "minecraft:blaze_powder"
          },
          {
            "item": "create:blaze_cake"
          }
        ],
        "mana": 6000,
        "output": {
          "item": "botania:rune_fire",
          "count": 2
        }
      })
      event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "minecraft:dandelion"
          },
          {
            "item": "create:white_sail"
          },
          {
            "item": "ars_nouveau:purple_archwood_log"
          },
          {
            "item": "create:propeller"
          },
          {
            "item": "minecraft:feather"
          },
          {
            "item": "minecraft:string"
          }
        ],
        "mana": 6000,
        "output": {
          "item": "botania:rune_air",
          "count": 2
        }
      })
    event.remove({output:'botania:rune_water'})
    event.remove({output:'botania:rune_earth'})
    event.remove({output:'botania:rune_fire'})
    event.remove({output:'botania:rune_air'})
    let remove = ['botania:mana_pool',
                  'botania:mana_infusion/manasteel', 
                  'botania:mana_infusion/manasteel_block',
                  'botania:petal_apothecary/endoflame',
                  'mythicbotany:central_rune_holder',
                  'mythicbotany:rune_holder',
                  'botania:terra_plate/terrasteel_ingot',
                  'botania:runic_altar/mana',
                  'botania:elven_trade/elf_quartz',
                  'botania:elven_trade/elementium',
                  'botania:elven_trade/elementium_block',
                  
                  'botania:mana_ring',
                  'botania:mana_ring_greater',
                  'botania:terra_pick',
                  'botania:terrasteel_helmet',
                  'botania:terrasteel_chestplate',
                  'botania:terrasteel_leggings',
                  'botania:terrasteel_boots',
                  'botania:runic_altar/spring',
                  'botania:runic_altar/summer',
                  'botania:runic_altar/autumn',
                  'botania:runic_altar/winter'
                ]
    remove.forEach(r=>{
      event.remove({id:r})
    })
    event.shaped(
      Item.of('botania:mana_pool', 1),[
        "   ",
        "ABA",
        "AAA"
      ],{
        A: 'botania:livingrock',
        B: 'botania:mana_tablet',
      })
    //endoflame
    event.custom({
      "type": "botania:petal_apothecary",
      "ingredients": [
        {
          "tag": "botania:petals/brown"
        },
        {
          "tag": "botania:petals/brown"
        },
        {
          "tag": "botania:petals/red"
        },
        {
          "tag": "botania:petals/light_gray"
        },
        {
          "item": "botania:rune_fire"
        }
      ],
      "output": {
        "item": "botania:endoflame"
      },
      "reagent": {
        "tag": "botania:seed_apothecary_reagent"
      }
    })
    event.recipes.gtceu.forming_press('central_rune_holder')
    .EUt(30)
    .duration(100)
    .itemInputs(['gtceu:terrasteel_plate','2x gtceu:terrasteel_screw'])
    .itemOutputs('mythicbotany:central_rune_holder')
    event.recipes.gtceu.forming_press('rune_holder')
    .EUt(30)
    .duration(100)
    .itemInputs(['gtceu:steel_plate','2x gtceu:steel_screw'])
    .itemOutputs('mythicbotany:rune_holder')
    event.replaceInput({id:'botania:mana_spreader'},'minecraft:copper_ingot','minecraft:dispenser')
    //manasteel
    event.custom({
      "type": "botania:mana_infusion",
      "input": {
        "item": "minecraft:iron_ingot"
      },
      "mana": 3000,
      "output": {
        "item": "gtceu:manasteel_ingot"
      }
    })
    event.custom({
      "type": "botania:mana_infusion",
      "input": {
        "item": "minecraft:iron_block"
      },
      "mana": 27000,
      "output": {
        "item": "gtceu:manasteel_block"
      }
    })
    //terrasteel
    event.custom({
      "type": "botania:terra_plate",
      "ingredients": [
        {
          "item": "gtceu:manasteel_ingot"
        },
        {
          "item": "botania:mana_pearl"
        },
        {
          "item": "botania:mana_diamond"
        },
        {
          "item": "botania:rune_mana"
        }
      ],
      "mana": 500000,
      "result": {
        "item": "gtceu:terrasteel_ingot"
      }
    })
    //manarune
    event.custom({
      "type": "botania:runic_altar",
      "ingredients": [
        {
          "item": "botania:quartz_mana"
        },
        {
          "item": "botania:mana_powder"
        },
        {
          "item": "botania:manaweave_cloth"
        },
        {
          "item": "botania:mana_bottle"
        },
        {
          "item": "botania:mana_glass"
        },
        {
          "item": "botania:mana_cookie"
        }
      ],
      "mana": 8000,
      "output": {
        "item": "botania:rune_mana"
      }
    })
    //elvenquartz
    event.custom({
      "type": "botania:elven_trade",
      "ingredients": [
        {
          "item": "botania:quartz_mana"
        }
      ],
      "output": [
        {
          "item": "botania:quartz_elven"
        }
      ]
    })
    //elementiumingot
    event.custom({
      "type": "botania:elven_trade",
      "ingredients": [
        {
          "item": "gtceu:manasteel_ingot"
        },
        {
          "item": "gtceu:manasteel_ingot"
        }
      ],
      "output": [
        {
          "item": "gtceu:elementium_ingot"
        }
      ]
    })
    event.custom({
      "type": "botania:elven_trade",
      "ingredients": [
        {
          "item": "gtceu:manasteel_block"
        },
        {
          "item": "gtceu:manasteel_block"
        }
      ],
      "output": [
        {
          "item": "gtceu:elementium_block"
        }
      ]
    })
    //manaring
    event.shaped(
      Item.of('botania:mana_ring', 1),[
        "ABC",
        "DED",
        "CFG"
      ],{
        A: 'botania:mana_tablet',
        B: 'gtceu:manasteel_screw',
        C: 'gtceu:manasteel_rod',
        D: 'gtceu:manasteel_plate',
        E: 'gtceu:manasteel_ring',
        F: 'gtceu:manasteel_bolt',
        G: '#forge:tools/hammers'
      })
    //manaringgreater
    event.shaped(
      Item.of('botania:mana_ring_greater', 1),[
        "ABC",
        "DED",
        "CFG"
      ],{
        A: 'botania:mana_ring',
        B: 'gtceu:terrasteel_screw',
        C: 'gtceu:terrasteel_rod',
        D: 'gtceu:terrasteel_plate',
        E: 'gtceu:terrasteel_ring',
        F: 'gtceu:terrasteel_bolt',
        G: '#forge:tools/hammers'
      })
    event.shaped(
      Item.of('botania:terra_pick', 1),[
        "ABA",
        "ACA",
        " D "
      ],{
        A: 'gtceu:terrasteel_plate',
        B: 'botania:manasteel_pick',
        C: 'botania:mana_tablet',
        D: 'botania:livingwood_twig',
      })
    event.shaped(
      Item.of('botania:terrasteel_helmet', 1),[
        "ABA",
        "BCB",
        "EDE"
      ],{
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:manasteel_helmet',
        D: 'botania:rune_spring',
        E: 'gtceu:terrasteel_foil'
      })
    event.shaped(
      Item.of('botania:terrasteel_chestplate', 1),[
        "ABA",
        "CDC",
        "EFE"
      ],{
        A: 'botania:livingwood_twig',
        B: 'botania:rune_summer',
        C: 'gtceu:double_terrasteel_plate',
        D: 'botania:manasteel_chestplate',
        E: 'gtceu:terrasteel_screw',
        F: 'gtceu:small_terrasteel_gear'
      })
    event.shaped(
      Item.of('botania:terrasteel_leggings', 1),[
        "ABA",
        "CDC",
        "EFE"
      ],{
        A: 'gtceu:terrasteel_rod',
        B: 'botania:manasteel_leggings',
        C: 'gtceu:terrasteel_plate',
        D: 'botania:rune_autumn',
        E: 'gtceu:terrasteel_foil',
        F: 'gtceu:terrasteel_ring'
      })
    event.shaped(
      Item.of('botania:terrasteel_boots', 1),[
        "A A",
        "BCB",
        "DED"
      ],{
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_rod',
        C: 'botania:manasteel_boots',
        D: 'gtceu:terrasteel_foil',
        E: 'botania:rune_winter',
      })
//spring
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "botania:rune_water"
          },
          {
            "item": "botania:rune_fire"
          },
          {
            "item": "twilightforest:root"
          },
          {
            "item": "minecraft:moss_block"
          },
          {
            "item": "minecraft:cherry_sapling"
          },
          {
            "item": "twilightforest:hollow_oak_sapling"
          }
        ],
        "mana": 10000,
        "output": {
          "item": "botania:rune_spring",
          "count": 1
        }
      })
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 50.0,
        "input0": 
          {
            "item": "botania:rune_water"
          },
        "input1": {
          "item": "botania:rune_fire"
        },
        "input2": {
          "item": "minecraft:wheat_seeds"
        },
        "input3": {
          "item": "minecraft:cherry_sapling"
        },
        "minimumDrain": 200.0,
        "output": {
          "item": "botania:rune_spring"
        }
      })
//summer
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "botania:rune_earth"
          },
          {
            "item": "botania:rune_air"
          },
          {
            "item": "twilightforest:cicada"
          },
          {
            "item": "create:propeller"
          },
          {
            "item": "minecraft:melon_slice"
          },
          {
            "tag": "forge:hot_ingots"
          }
        ],
        "mana": 10000,
        "output": {
          "item": "botania:rune_summer",
          "count": 1
        }
      })
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 50.0,
        "input0": 
          {
            "item": "botania:rune_earth"
          },
        "input1": {
          "item": "botania:rune_air"
        },
        "input2": {
          "item": "farmersdelight:melon_popsicle"
        },
        "input3": {
          "item": "gtceu:ice_dust"
        },
        "minimumDrain": 200.0,
        "output": {
          "item": "botania:rune_summer"
        }
      })
//autumn
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "botania:rune_fire"
          },
          {
            "item": "botania:rune_air"
          },
          {
            "item": "twilightforest:fallen_leaves"
          },
          {
            "item": "minecraft:wheat"
          },
          {
            "item": "biomesoplenty:maple_sapling"
          },
          {
            "item": "farmersdelight:straw"
          }
        ],
        "mana": 10000,
        "output": {
          "item": "botania:rune_autumn",
          "count": 1
        }
      })
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 50.0,
        "input0": 
          {
            "item": "botania:rune_fire"
          },
        "input1": {
          "item": "botania:rune_air"
        },
        "input2": {
          "item": "minecraft:apple"
        },
        "input3": {
          "item": "minecraft:honey_bottle"
        },
        "minimumDrain": 200.0,
        "output": {
          "item": "botania:rune_autumn"
        }
      })
//winter
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
          {
            "item": "botania:rune_water"
          },
          {
            "item": "botania:rune_earth"
          },
          {
            "tag": "minecraft:wool"
          },
          {
            "item": "minecraft:snow_block"
          },
          {
            "item": "twilightforest:arctic_fur"
          },
          {
            "item": "cataclysm_delight:void_candy"
          }
        ],
        "mana": 10000,
        "output": {
          "item": "botania:rune_winter",
          "count": 1
        }
      })
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 50.0,
        "input0": 
          {
            "item": "botania:rune_water"
          },
        "input1": {
          "item": "botania:rune_earth"
        },
        "input2": {
          "item": "minecraft:snow_block"
        },
        "input3": {
          "item": "minecraft:packed_ice"
        },
        "minimumDrain": 200.0,
        "output": {
          "item": "botania:rune_winter"
        }
      })
//pure daisy
    event.custom({
      "type": "botania:petal_apothecary",
      "ingredients": [
        {
          "tag": "botania:petals/white"
        },
        {
          "tag": "botania:petals/yellow"
        },
        {
          "tag": "botania:petals/white"
        },
        {
          "item": "minecraft:dandelion"
        }
      ],
      "output": {
        "item": "botania:pure_daisy"
      },
      "reagent": {
        "item": "minecraft:fern"
      }
    })
    .id('botania:petal_apothecary/pure_daisy')
})